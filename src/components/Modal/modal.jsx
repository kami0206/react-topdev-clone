import React, { useState } from "react";
import { useForm } from "react-hook-form";

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginError, setLoginError] = useState("");

  const onSubmit = async (data) => {
    try {
      setLoginError(""); // Reset lỗi trước mỗi lần submit

      const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
      if (!emailRegex.test(data.email)) {
        return;
      }

      if (data.password.length < 8) {
        return;
      }

      const res = await fetch(
        "https://67ee152e4387d9117bbf4f07.mockapi.io/api/v1/users"
      );
      const users = await res.json();
      const existingUser = users.find((u) => u.email === data.email);

      if (existingUser) {
        const user = users.find(
          (u) => u.email === data.email && u.password === data.password
        );
        if (user) {
          localStorage.setItem("userId", user.id);
          onLoginSuccess(user);
          onClose();
        } else {
          setLoginError("Tài khoản hoặc mật khẩu không chính xác");
          return;
        }
      } else {
        const newUser = {
          email: data.email,
          password: data.password,
          name: "Người dùng mới",
        };

        const createUserRes = await fetch(
          "https://67ee152e4387d9117bbf4f07.mockapi.io/api/v1/users",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          }
        );
        const createdUser = await createUserRes.json();
        localStorage.setItem("userId", createdUser.id);
        onLoginSuccess(createdUser);
        onClose();
      }
    } catch (err) {
      console.log(err);
      alert("Lỗi khi đăng nhập hoặc đăng ký. Vui lòng thử lại.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-900 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Chào mừng quay lại!
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Vui lòng nhập email",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@gmail\.com$/,
                  message: "Email phải có định dạng Gmail",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mật khẩu
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Vui lòng nhập mật khẩu",
                minLength: {
                  value: 8,
                  message: "Mật khẩu phải có ít nhất 8 ký tự",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
            {loginError && (
              <p className="text-sm text-red-500 mt-1">{loginError}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium transition duration-300"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
