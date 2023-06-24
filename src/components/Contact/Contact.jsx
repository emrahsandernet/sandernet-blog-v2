import React, { useState, useEffect } from "react";
import profile from "../../assets/profile.PNG";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { useThemeContext } from "../../hooks/useThemeContext";
import { Loader } from "../Loader";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export const Contacts = () => {
  const { state } = useThemeContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = React.useState(false);
  const MyAlert = withReactContent(Swal);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: name,
      email: email,
      message: message,
    };
    console.log(data);
    if (name === "" || email === "" || message === "") {
      MyAlert.fire({
        title: "Hata!",
        text: "Lütfen tüm alanları doldurunuz!",
        icon: "error",
        confirmButtonText: "Tamam",
      });
      return;
    }

    setLoading(true);
    fetch("https://188.119.41.56:3005/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    }).then((res) => {
      if (res.status === 200) {
        setLoading(false);
        MyAlert.fire({
          title: "Başarıyla Gönderildi!",
          text: "Mesajınız başarıyla gönderildi!",
          icon: "success",
          confirmButtonText: "Tamam",
        });
      } else {
        setLoading(false);
        MyAlert.fire({
          title: "Hata!",
          text: "Mesajınız gönderilemedi!",
          icon: "error",
          confirmButtonText: "Tamam",
        });
      }
    });
  };
  const isDarkMode = state.isDark;
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col pt-11 p-2">
          <img
            className={`absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-40 h-40  p-2  my-6 ${
              isDarkMode ? "bg-[#1e2738]" : " border-white"
            }`}
            src={profile}
            alt="profile"
          />

          <div
            className={`container lg:max-w-screen-lg mx-auto  rounded-lg m-11 ${
              isDarkMode ? "bg-[#1e2738]" : "bg-white"
            } `}
          >
            <div className="flex flex-col mx-auto p-10">
              <div className="p-1  mt-9">
                <p className={isDarkMode ? "text-[#a5b3ce]" : "text-black"}>
                  Projelerinizde yardıma ihtiyacınız varsa, benimle iletişime
                  geçmekten çekinmeyin. Deneyimli bir backend web geliştirici
                  olarak, sizin işinizi daha da ileri taşımak için gereken
                  uzmanlık ve becerilere sahibim. Projenizin gereksinimlerini
                  anlamak, etkili bir şekilde çözümler sunmak ve başarıyla
                  tamamlamak için buradayım. İşbirliği yapmak ve projenizin
                  başarısı için birlikte çalışmak için sabırsızlanıyorum. Lütfen
                  bana ulaşın, size yardımcı olmaktan mutluluk duyarım.
                </p>
              </div>
            </div>
            <div className="md:hidden flex-row justify-center gap-10 mb-11 flex">
              <a href="https://twitter.com/emrahsander">
                <AiFillTwitterCircle className="text-white w-6 h-6 hover:text-blue-500 rounded-full cursor-pointer" />
              </a>
              <a href="https://github.com/emrahsandernet">
                <AiFillGithub className="text-white w-6 h-6 hover:text-blue-500  rounded-full cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/emrah-%C5%9Fander-984274105/">
                <RiLinkedinFill className="text-white w-[22px] h-6 hover:text-blue-500 rounded-full cursor-pointer" />
              </a>
              <a href="https://stackoverflow.com/users/18009995/emrah-%c5%9eander">
                <BsStackOverflow className="text-white w-6 h-6 hover:text-blue-500  rounded-full cursor-pointer" />
              </a>
            </div>

            <div>
              <h1
                className={`mx-auto font-bold  text-2xl text-center ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                İletişim Formu
              </h1>
              <form className="flex flex-col md:m-4 p-2">
                <div className="flex md:flex-row  flex-col justify-between gap-2 md:m-2">
                  <input
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    className={`rounded-md p-3  md:w-1/2 h-12  ${
                      isDarkMode
                        ? "bg-[#273248] focus:outline-none focus:bg-[#465981] text-white"
                        : "bg-white focus:outline-none  border-2 border-[#c2cee1] text-black"
                    }`}
                    type="text"
                    placeholder="Ad Soyad"
                  />
                  <input
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className={`rounded-md p-3  md:w-1/2 h-12  ${
                      isDarkMode
                        ? "bg-[#273248] focus:outline-none focus:bg-[#465981] text-white"
                        : "bg-white focus:outline-none  border-2 border-[#c2cee1] text-black"
                    }`}
                    type="text"
                    placeholder="Email"
                  />
                </div>

                <div className="flex flex-col md:m-2 my-2">
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    className={`rounded-md p-3 w-full h-80  ${
                      isDarkMode
                        ? "bg-[#273248] focus:outline-none focus:bg-[#465981] text-white"
                        : "bg-white focus:outline-none  border-2 border-[#c2cee1] text-black"
                    }`}
                    type="text"
                    placeholder="Mesajınız"
                  />
                </div>
                <div className="flex md:m-2">
                  <button
                    onClick={handleSubmit}
                    className="flex justify-center rounded-full p-4 font-bold text-white w-full  px-6 py-2 bg-[#465981] hover:bg-[#3f5174] text-center "
                  >
                    Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
