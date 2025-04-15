import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-sm text-gray-800 max-w-[1376px] mx-auto mb-8">
      <div className="flex flex-col md:flex-col">
        {/* TOP PART */}
        <div className="border-b border-gray-300 px-4 py-6 space-y-4 order-2 md:order-1">
          <div className="flex flex-col items-start gap-2">
            <h4 className="subheading uppercase font-bold">
              Top việc làm cho Fresher
            </h4>
            <p className="extra-small">
              Việc làm Fresher Java / Việc làm Fresher Javascript / Việc làm
              Fresher PHP / Việc làm Fresher Python / Việc làm Fresher ReactJS /
              Việc làm Fresher NodeJS / Việc làm Fresher C/C++ / Việc làm
              Fresher Tester / Việc làm Fresher Frontend / Việc làm Fresher
              Backend
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <h4 className="subheading uppercase font-bold">
              Việc làm theo ngành nghề
            </h4>
            <p className="extra-small">
              Việc làm IT ngành Outsourcing / Việc làm IT ngành Product / Việc
              làm IT ngành Ngân hàng / Việc làm IT ngành Viễn thông / Việc làm
              IT ngành Game / Giải trí / Việc làm IT ngành Fintech / Việc làm IT
              ngành Phần cứng / Việc làm IT ngành Phần mềm / Việc làm IT ngành
              Quảng cáo truyền thông / Việc làm IT ngành Dịch vụ IT
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <h4 className="subheading uppercase font-bold">
              Công ty hot theo ngành nghề
            </h4>
            <p className="extra-small">
              Công ty Outsourcing / Công ty ngành Phần Mềm / Công ty ngành Phần
              cứng / Công ty ngành Product / Công ty ngành Ngân hàng / Công ty
              ngành Viễn thông / Công ty ngành Game / Giải trí / Công ty ngành
              Quảng Cáo Truyền Thông / Công ty ngành Dịch vụ IT / Công ty ngành
              Fintech
            </p>
          </div>
        </div>

        <div className="px-4 mx-auto flex flex-col md:flex-row justify-between xl:mt-20 order-1 md:order-2 ">
          {/* Logo và thông tin liên hệ */}
          <div className="mb-4 md:mb-0 md:w-7/24">
            <img
              src="/assets/img/header/img_logo.png"
              alt="Logo"
              className="h-10 mb-2"
            />
            <p className="text-sm mb-2">
              Tầng 12A, Tòa nhà AP Tower, 5B8 Điện Biên Phủ, Phường 21, Quận
              Bình Thạnh, Thành phố Hồ Chí Minh
            </p>
            <p className="text-sm mb-2">
              Copyright © CÔNG TY CỔ PHẦN APPLANCER
            </p>
            <p className="text-sm mb-2">
              Liên hệ: 028.6273.3496 - Contact: topdev.vn
            </p>
            <p className="text-sm mb-2">
              ĐKKD: 031 303 2338 - Cấp ngày: 27/11/2014
            </p>
            <img src="\assets\img\footer\img_validate_brand.png" />
          </div>

          {/* Về TOPDev */}
          <div className="mb-4 md:mb-0 md:w-2/12">
            <h3 className="font-bold mb-2">VỀ TOPDEV</h3>
            <ul className="text-sm ">
              <li className="mb-2">Về chúng tôi</li>
              <li className="mb-2">Liên hệ</li>
              <li className="mb-2">Thỏa thuận sử dụng</li>
              <li className="mb-2">Cơ hội việc làm</li>
              <li className="mb-2">Quy định bảo mật</li>
              <li className="mb-2">
                Quy chế hoạt động của sàn giao dịch thương mại điện tử
              </li>
              <li className="mb-2">Giải quyết khiếu nại</li>
              <li className="mb-2">Đánh giá Đăng</li>
            </ul>
          </div>

          {/* Ứng Viên */}
          <div className="mb-4 md:mb-0 md:w-2/12">
            <h3 className="font-bold mb-2">ỨNG VIÊN</h3>
            <ul className="text-sm">
              <li className="mb-2">Tìm hiểu Gross - Net</li>
              <li className="mb-2">Tạo CV</li>
              <li className="mb-2">Tìm kiếm công việc IT</li>
              <li className="mb-2">Trả lời tin nhắn</li>
            </ul>
          </div>

          {/* Nhà Tuyển Dụng */}
          <div className="mb-4 md:mb-0 md:w-2/12">
            <h3 className="font-bold mb-2">NHÀ TUYỂN DỤNG</h3>
            <ul className="text-sm">
              <li className="mb-2">Đăng việc làm IT</li>
              <li className="mb-2">Tìm kiếm nhân tài</li>
            </ul>
          </div>

          {/* Theo dõi chúng tôi và QR Code */}
          <div className=" justify-center items-center mx-auto">
            <h3 className="font-bold mb-2">Theo dõi chúng tôi tại</h3>
            <div className="grid grid-cols-3 gap-2 mt-2 max-w-[200px]">
              <a href="#">
                <img
                  src="/assets/img/footer/logo/img_logo_facebook.png"
                  alt="Facebook"
                  className="h-11 "
                />
              </a>
              <a href="#">
                <img
                  src="/assets/img/footer/logo/img_logo_linkin.png"
                  alt="LinkedIn"
                  className="h-11 "
                />
              </a>
              <a href="#">
                <img
                  src="/assets/img/footer/logo/img_logo_twitter.png"
                  alt="Twitter"
                  className="h-11 "
                />
              </a>
              <a href="#">
                <img
                  src="/assets/img/footer/logo/img_logo_tiktok.png"
                  alt="TikTok"
                  className="h-11 "
                />
              </a>
              <a href="#">
                <img
                  src="/assets/img/footer/logo/img_logo_insta.png"
                  alt="Instagram"
                  className="h-11 "
                />
              </a>
              <a href="#">
                <img
                  src="/assets/img/footer/logo/img_logo_telegram.png"
                  alt="Telegram"
                  className="h-11 "
                />
              </a>
            </div>

            <h3 className="font-bold mb-2 mt-4">TẢI ỨNG DỤNG TOPDEV NGAY</h3>
            <div className="flex space-x-2 mt-2">
              <img
                src="\assets\img\footer\img_qr_app.png"
                alt="QR Code"
                className="h-20"
              />
              <div>
                <a href="#">
                  <img
                    src="\assets\img\footer\img_appstore.png"
                    alt="App Store"
                    className="h-8 mb-1"
                  />
                </a>
                <a href="#">
                  <img
                    src="\assets\img\footer\img_chplay.png"
                    alt="Google Play"
                    className="h-8"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
