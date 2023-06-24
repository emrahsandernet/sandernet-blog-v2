import React from "react";
import profile from "../../assets/profile.PNG";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../hooks/useThemeContext";
export const Name = () => {
  const { state } = useThemeContext();
  return (
    <div className="flex flex-col pt-11 p-2">
      <img
        className={
          state.isDark
            ? "absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-40 h-40  p-2 bg-[#1e2738] my-6"
            : "absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-40 h-40  p-2 bg-white my-6"
        }
        src={profile}
        alt="profile"
      />
      <div
        className={
          state.isDark
            ? "container lg:max-w-screen-lg mx-auto  rounded-lg m-11 bg-[#1e2738]"
            : "container lg:max-w-screen-lg mx-auto  rounded-lg m-11 bg-white"
        }
      >
        <div className="flex flex-col mx-auto p-10">
          <h1
            className={
              state.isDark
                ? "mx-auto font-bold text-white text-2xl text-center my-4"
                : "mx-auto font-bold text-black text-2xl text-center my-4"
            }
          >
            Emrah Şander
          </h1>
          <div className="p-1 ">
            <p className={state.isDark ? " text-[#a5b3ce]" : "text-black"}>
              Merhaba! Ben bir backend web geliştiricisiyim. Uzun yıllardır bu
              alanda çalışıyorum ve geniş bir tecrübe birikimine sahibim.
              Yazılım dünyasına olan ilgim çocukluğumdan beri vardı ve bu
              merakımı bir kariyere dönüştürmek benim için büyük bir mutluluk
              oldu. Backend geliştirme alanında uzmanlaşmış olmam,
              kullanıcıların görmese de bir web uygulamasının temelini oluşturan
              iş mantığını ve veritabanı yönetimini ele almayı içerir.
              Çalışmalarım genellikle sunucu tarafında gerçekleşir ve verileri
              işlerken, güvenlik, performans ve ölçeklenebilirlik gibi önemli
              konulara odaklanırım. Bir proje üzerinde çalışırken, öncelikle
              ihtiyaçları anlamak ve ardından kullanıcıların beklentilerini
              karşılayacak etkili bir çözüm tasarlamak için analitik düşünme
              becerilerimi kullanırım. Veritabanı tasarımı, API entegrasyonu,
              veri işleme ve sunucu yönetimi gibi konulara hakimim. Programlama
              dilleri olarak Python, JavaScript, gibi dilleri kullanırken, aynı
              zamanda popüler backend ve frontend frameworkleri ve
              teknolojilerini de kullanmayı tercih ederim.
            </p>
          </div>
        </div>
        <div className="pb-7">
          <Link
            to={"/resume"}
            className="flex rounded-full font-bold text-white w-[150px] mx-auto  px-6 py-3 bg-[#465981] hover:bg-[#3f5174]"
          >
            Görüntüle
            <AiOutlineArrowRight className="text-white w-4 h-4 m-1 " />
          </Link>
        </div>
      </div>
    </div>
  );
};
