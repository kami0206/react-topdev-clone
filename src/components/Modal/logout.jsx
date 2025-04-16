import { FiLogOut } from "react-icons/fi";

const LogoutConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-sm shadow-xl text-center">
        <div className="flex items-center justify-center mb-4 text-red-500">
          <FiLogOut size={40} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Đăng xuất tài khoản?
        </h3>
        <p className="text-sm text-gray-500 mb-6">
          Bạn có chắc chắn muốn đăng xuất không?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Hủy
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white transition"
          >
            Đăng xuất
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmModal;
