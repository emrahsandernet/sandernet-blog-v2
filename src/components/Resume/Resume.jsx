import profile from "../../assets/profile.PNG";
import {
  BsTelephoneOutbound,
  BsGlobe,
  BsEnvelopeAt,
  BsPersonCircle,
  BsBriefcase,
  BsGear,
  BsPersonGear,
  BsCodeSlash,
  BsBook,
  BsTranslate,
} from "react-icons/bs";

import { useThemeContext } from "../../hooks/useThemeContext";

export const Resume = (props) => {
  const { state } = useThemeContext();
  const isDarkMode = state.isDark;

  return (
    <div className="flex flex-col pt-11 p-2">
      <img
        className="absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-40 h-40  p-2 bg-[#1e2738] my-6"
        src={profile}
        alt="profile"
      />
      <div
        className={`container lg:max-w-screen-lg mx-auto  rounded-lg  ${
          isDarkMode ? "bg-[#1e2738]" : "bg-white"
        } m-11`}
      >
        <div className="flex flex-col mx-auto p-10 items-center">
          <h1
            className={`mx-auto font-bold ${
              isDarkMode ? "text-white" : "text-black"
            } text-4xl text-center mb-1 mt-6`}
          >
            EMRAH ŞANDER
          </h1>
          <h1
            className={`"font-medium mb-5 mt-4 ${
              isDarkMode ? "text-white" : "text-black"
            } text-center text-xl "`}
          >
            BACKEND DEVELOPER
          </h1>
          <div className="border-b border-t border-gray-400 py-5 w-full">
            <ul
              className={`${
                isDarkMode ? "text-[#a5b3ce]" : "text-black"
              } flex md:flex-row flex-col  justify-between mx-11`}
            >
              <li className="flex flex-row  gap-2">
                <BsTelephoneOutbound className="m-1" />
                +90 552 396 3141
              </li>
              <li className="flex flex-row gap-2">
                <BsEnvelopeAt className="m-1" />
                emrahsander@gmail.com
              </li>
              <li className="flex flex-row gap-2">
                <BsGlobe className="m-1" />
                www.emrahsander.com
              </li>
            </ul>
          </div>
        </div>
        <div className="flex md:flex-row flex-col m-6 ">
          <div className=" md:w-2/3 ">
            <div className="flex flex-col ">
              <div className="mx-7 my-2">
                <div
                  className={`${
                    isDarkMode ? "text-white" : "text-black "
                  } font-bold text-2xl flex flex-row`}
                >
                  <BsPersonCircle className="rounded bg-[rgba(0,0,0,.1)]   w-8 h-8 p-2 mr-2" />
                  HAKKIMDA
                </div>
                <div
                  className={`${
                    isDarkMode ? "text-[#a5b3ce]" : "text-black"
                  } my-2`}
                >
                  Ekip çalışmasına büyük önem veren biriyim ve proje sürecinde
                  diğer ekip üyeleriyle sıkı bir iletişim kurmayı hedeflerim.
                  Bir problemi çözmek için farklı bakış açılarından yararlanır
                  ve takımın ortak hedeflerine odaklanırım. Aynı zamanda yeni
                  teknolojileri ve gelişmeleri takip etmeyi severim, çünkü web
                  geliştirme alanında her zaman güncel kalmak önemlidir. Backend
                  web geliştiricisi olarak, kullanıcı deneyimini geliştirmek ve
                  işlevselliği artırmak için teknik becerilerimi sürekli olarak
                  geliştirmek için çaba gösteririm. Kendimi sürekli olarak yeni
                  projelere meydan okumaya ve daha da büyümeye motive ederim.
                  Umarım bu yazı, benim hakkımda daha fazla bilgi edinmenize
                  yardımcı olur. Sizinle çalışma fırsatını dört gözle
                  bekliyorum!
                </div>
              </div>
            </div>
            <div className="border-b mx-7 mb-2 border-[#a5b3ce]"></div>
            <div className="flex flex-col ">
              <div className="mx-7">
                <div
                  className={`${
                    isDarkMode ? "text-white" : "text-black "
                  } font-bold text-2xl flex flex-row`}
                >
                  <BsBriefcase className="rounded bg-[rgba(0,0,0,.1)]   w-8 h-8 p-2 mr-2" />
                  İŞ TECRÜBELERİ
                </div>
                <div className="text-[#a5b3ce] my-2 m-4">
                  <ol className="relative border-l border-gray-200 dark:border-gray-200">
                    <li className="mb-10 ml-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                      <time
                        className={`mb-1 text-sm font-normal leading-none  justify-between flex ${
                          isDarkMode ? "text-[#a5b3ce]" : "text-black"
                        }`}
                      >
                        <div className="m-1">2022 - Devam Ediyor</div>
                        <div className=" rounded p-2 font-semibold bg-[rgba(0,0,0,.1)]">
                          UI Soft
                        </div>
                      </time>
                      <h3
                        className={`text-lg font-semibold ${
                          isDarkMode ? "text-white" : "text-black"
                        }`}
                      >
                        Backend Developer
                      </h3>
                      <ul
                        className={`list-disc mx-6 ${
                          isDarkMode ? "text-[#a5b3ce]" : "text-black"
                        } `}
                      >
                        <li>
                          Dinamik içerik yönetim sistemlerinin geliştirmesi ve
                          bakımı.
                        </li>
                        <li>
                          Web siteleri ve web uygulamaları için RESTful API
                          geliştirilmesi.
                        </li>
                        <li>
                          Süreç yönetimi yazılımlarının geliştirilmesi ve
                          bakımı.
                        </li>
                      </ul>
                    </li>
                    <li className="mb-10 ml-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time
                        className={`mb-1 text-sm font-normal leading-none  justify-between flex ${
                          isDarkMode ? "text-[#a5b3ce]" : "text-black"
                        }`}
                      >
                        <div className="m-1">2021 - 2022 </div>
                        <div className=" rounded p-2 font-semibold bg-[rgba(0,0,0,.1)]">
                          Çeka Proje
                        </div>
                      </time>
                      <h3
                        className={`text-lg font-semibold ${
                          isDarkMode ? "text-white" : "text-black"
                        }`}
                      >
                        Backend Developer
                      </h3>
                      <ul
                        className={`list-disc mx-6 ${
                          isDarkMode ? "text-[#a5b3ce]" : "text-black"
                        } `}
                      >
                        <li>
                          Personel ve iş takip sistemi geliştirilmesi ve bakımı.
                        </li>
                        <li>
                          İnşaat sektörüne yönelik web tabanlı yazılım
                          geliştirilmesi.
                        </li>
                      </ul>
                    </li>
                    <li className="mb-10 ml-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time
                        className={`mb-1 text-sm font-normal leading-none  justify-between flex ${
                          isDarkMode ? "text-[#a5b3ce]" : "text-black"
                        }`}
                      >
                        <div className="m-1">2020 - 2021</div>
                        <div className=" rounded p-2 font-semibold bg-[rgba(0,0,0,.1)]">
                          Poseidon Tech.
                        </div>
                      </time>
                      <h3
                        className={`text-lg font-semibold ${
                          isDarkMode ? "text-white" : "text-black"
                        }`}
                      >
                        Yapay Zeka Mühendisi
                      </h3>
                      <ul
                        className={`list-disc mx-6 ${
                          isDarkMode ? "text-[#a5b3ce]" : "text-black"
                        } `}
                      >
                        <li>
                          Hatalı entegrelerin yapay zeka ile tespit edilmesi ve
                          bu hataların giderilmesi.
                        </li>
                        <li>
                          Ölçüm yapılan verilerin analiz edilmesi ve
                          raporlanması.
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="md:border-l border-[#a5b3ce] md:w-1/3 ">
            <div className="flex flex-col m-2">
              <div
                className={`${
                  isDarkMode ? "text-white" : "text-black "
                } font-bold text-2xl flex flex-row`}
              >
                <BsGear className="rounded bg-[rgba(0,0,0,.1)]   w-8 h-8 p-2 mr-2" />
                TEKNOLOJİ BİLGİLERİ
              </div>

              <ul>
                <li className="m-2">
                  <div
                    className={`font-bold text-sm ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Django
                  </div>
                  <div
                    class="w-full  rounded-full h-1.5 dark:bg-gray-700
                  "
                  >
                    <div
                      class="bg-gray-200 h-1.5 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </li>
                <li className="text-[#a5b3ce] m-2">
                  <div
                    className={`font-bold text-sm ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Javascript
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                    <div
                      class="bg-gray-200 h-1.5 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </li>
                <li className="text-[#a5b3ce] m-2">
                  <div
                    className={`font-bold text-sm ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    PostgreSql
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                    <div
                      class="bg-gray-200 h-1.5 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </li>
                <li className="text-[#a5b3ce] m-2">
                  <div
                    className={`font-bold text-sm ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    React
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                    <div
                      class="bg-gray-200 h-1.5 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="border-b m-2 border-[#a5b3ce]"></div>
            <div className="flex flex-col m-2 text-xs">
              <div
                className={`${
                  isDarkMode ? "text-white" : "text-black "
                } font-bold text-2xl flex flex-row`}
              >
                <BsPersonGear className="rounded bg-[rgba(0,0,0,.1)]   w-8 h-8 p-2 mr-2" />
                YETENEKLER
              </div>

              <ul
                className={`flex flex-row  ${
                  isDarkMode ? "text-[#a5b3ce]" : "text-black"
                } `}
              >
                <li className="m-2">
                  <div className=" rounded p-2 font-semibold bg-[rgba(0,0,0,.1)]">
                    Liderlik
                  </div>
                </li>
                <li className="m-2">
                  <div className=" rounded p-2 font-semibold bg-[rgba(0,0,0,.1)]">
                    Proje Yönetimi
                  </div>
                </li>
              </ul>
              <ul
                className={`flex flex-row  ${
                  isDarkMode ? "text-[#a5b3ce]" : "text-black"
                } `}
              >
                <li className=" m-2">
                  <div className=" rounded p-2 font-semibold bg-[rgba(0,0,0,.1)]">
                    Eğitim
                  </div>
                </li>
                <li className="m-2">
                  <div className=" rounded p-2 font-semibold bg-[rgba(0,0,0,.1)]">
                    Sunucu Yönetimi
                  </div>
                </li>
              </ul>
            </div>
            <div className="border-b m-2 border-[#a5b3ce]"></div>

            <div className="flex flex-col m-2">
              <div
                className={`${
                  isDarkMode ? "text-white" : "text-black "
                } font-bold text-2xl flex flex-row`}
              >
                <BsCodeSlash className="rounded bg-[rgba(0,0,0,.1)]   w-8 h-8 p-2 mr-2" />
                PROJELER
              </div>

              <ul>
                <li
                  className={`${isDarkMode ? "text-white" : "text-black "} m-2`}
                >
                  <div className="font-bold text-s mb-1">
                    Şantiye Yönetim Sistemi
                  </div>
                  <div
                    className={`text-xs ${
                      isDarkMode ? "text-white" : "text-black "
                    }`}
                  >
                    Şantiye Yönetim Sistemi, inşaat projelerinde kaynakların
                    etkin bir şekilde yönetilmesini, iş süreçlerinin izlenmesini
                    ve koordinasyonun sağlanmasını amaçlayan bir yazılım
                    platformudur.
                  </div>
                </li>
                <li
                  className={`${isDarkMode ? "text-white" : "text-black "} m-2`}
                >
                  <div className="font-bold text-sm mb-1">
                    Personel Yönetim Sistemi
                  </div>
                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-white" : "text-black "
                    }`}
                  >
                    Personel Yönetim Sistemi, bir organizasyonun çalışanlarıyla
                    ilgili verileri yöneterek, personel bilgilerini izlemeyi,
                    performans değerlendirmesini yapmayı ve çalışanların
                    katılımını kolaylaştırmayı sağlayan bir yazılım
                    platformudur.
                  </div>
                </li>
              </ul>
            </div>
            <div className="border-b m-2 border-[#a5b3ce]"></div>

            <div className="flex flex-col m-2">
              <div
                className={`${
                  isDarkMode ? "text-white" : "text-black "
                } font-bold text-2xl flex flex-row`}
              >
                <BsBook className="rounded bg-[rgba(0,0,0,.1)]   w-8 h-8 p-2 mr-2" />
                EĞİTİM BİLGİLERİ
              </div>

              <ul>
                <li
                  className={`${isDarkMode ? "text-white" : "text-black "} m-2`}
                >
                  <div className="font-bold text-sm mb-1" text-white>
                    Hidrolik Yüksek Lisans
                  </div>
                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-white" : "text-black "
                    }`}
                  >
                    <div>Karabük Üniversitesi</div>
                    <div>2020-2023</div>
                  </div>
                </li>
                <li
                  className={`${isDarkMode ? "text-white" : "text-black "} m-2`}
                >
                  <div className="font-bold text-sm mb-1">
                    İnşaat Mühendisliği
                  </div>
                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-white" : "text-black "
                    }`}
                  >
                    <div>Karabük Üniversitesi</div>
                    <div>2013-2019</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="border-b m-2  border-[#a5b3ce]"></div>

            <div className="flex flex-col m-2">
              <div
                className={`${
                  isDarkMode ? "text-white" : "text-black "
                } font-bold text-2xl flex flex-row`}
              >
                <BsTranslate className="rounded bg-[rgba(0,0,0,.1)]   w-8 h-8 p-2 mr-2" />
                DİL BİLGİLERİ
              </div>

              <ul>
                <li className="m-2">
                  <div
                    className={`font-bold text-sm mb-2 ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    İngilizce
                  </div>
                  <div className="text-[#a5b3ce] text-sm">
                    <div className="flex flex-row gap-1">
                      <div className="text-xs py-1 px-3 rounded-sm bg-[#a5b3ce]"></div>
                      <div className="text-xs py-1 px-3 rounded-sm bg-[#a5b3ce]"></div>
                      <div className="text-xs py-1 px-3 rounded-sm bg-[#a5b3ce]"></div>
                      <div className="text-xs py-1 px-3 rounded-sm bg-[#a5b3ce]"></div>
                      <div className="text-xs py-1 px-3 rounded-sm bg-[#a5b3ce]"></div>
                      <div className="text-xs py-1 px-3 rounded-sm bg-[#a5b3ce]"></div>
                      <div className="text-xs py-1 px-3 rounded-sm bg-[#a5b3ce]"></div>
                      <div className="text-xs py-1 px-3 rounded-sm bg-[#19202e]"></div>
                      <div className="text-xs py-1 px-3 rounded-sm bg-[#19202e]"></div>
                      <div className="text-xs py-1 px-3 rounded-sm bg-[#19202e]"></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
