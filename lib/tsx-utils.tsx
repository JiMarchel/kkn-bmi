export const WordsCategory = ({
  category,
}: {
  category: string | undefined;
}) => {
  switch (category) {
    case "Rendah":
      return (
        <span>
          ⚠️ Berat badan Anda berada di bawah normal. Pastikan Anda mendapatkan
          asupan nutrisi yang cukup 🥦🍗🥛 dan konsultasikan dengan ahli gizi
          🩺👨‍⚕️ untuk mencapai berat badan ideal. Jangan khawatir! Dengan pola
          makan sehat 🥗🍽️ dan olahraga 🏋️‍♂️ teratur, Anda bisa mencapai berat
          badan yang lebih baik. Cobalah untuk meningkatkan asupan kalori dengan
          makanan bergizi tinggi seperti protein 🥩, lemak sehat 🥑, dan
          karbohidrat kompleks 🍠🍞. Selain itu, perbanyak konsumsi makanan kaya
          nutrisi seperti daging 🍖 tanpa lemak, kacang-kacangan 🥜, dan sayuran
          hijau 🥬 untuk membantu menambah berat badan secara sehat. Tetap
          semangat! 💪🔥
        </span>
      );
    case "Ideal":
      return (
        <span>
          🎉 Selamat! Berat badan Anda berada dalam kategori ideal. Pertahankan
          pola makan sehat 🥗🍽️ dan gaya hidup aktif 🚴‍♂️🏃‍♀️ untuk menjaga
          kesehatan Anda. Anda dalam kondisi yang baik ❤️💪, dan dengan menjaga
          kebiasaan baik ini, Anda dapat tetap bugar dan berenergi setiap hari
          ⚡🌟. Pastikan untuk menjaga pola makan seimbang dengan mengonsumsi
          makanan bergizi 🥑🥩🍎 serta tetap aktif dengan olahraga rutin seperti
          jogging 🏃‍♂️ atau bersepeda 🚴. Hindari pola makan berlebihan 🍔🍕 dan
          tetap fokus pada gaya hidup sehat agar berat badan tetap stabil 🏆💪.
        </span>
      );
    case "Berlebih":
      return (
        <span>
          ⚠️ Berat badan Anda berlebih. Cobalah untuk mengatur pola makan 🍽️🥗
          dan tingkatkan aktivitas fisik 🏋️‍♂️🏃‍♀️ untuk mencapai berat badan ideal.
          Tetap semangat 🔥💪! Dengan sedikit perubahan gaya hidup, Anda bisa
          mencapai berat badan yang lebih sehat 🤝❤️. Kurangi konsumsi makanan
          tinggi gula 🍰🥤 dan lemak berlebih 🍟🍕, serta perbanyak aktivitas
          fisik seperti berjalan kaki 🚶‍♂️, berenang 🏊‍♀️, atau bersepeda 🚴. Fokus
          pada pola makan sehat 🥗🥑🍗 dan aktif bergerak setiap hari untuk
          mencegah risiko penyakit terkait obesitas seperti diabetes 💉 dan
          tekanan darah tinggi 🩸⚠️. Jangan menyerah! Setiap langkah kecil
          menuju hidup sehat sangat berarti! 🏆💖
        </span>
      );
    default:
      return (
        <span>
          🛑 Berat badan Anda berada dalam kategori obesitas. Mulailah perubahan
          kecil menuju hidup yang lebih sehat 🏃‍♀️🥗 untuk mencegah risiko
          kesehatan yang lebih serius ⚠️🩺. Jangan berkecil hati ❤️! Dengan
          dukungan dan komitmen 💪🔥, Anda bisa mencapai berat badan yang lebih
          sehat. Pertimbangkan untuk berkonsultasi dengan ahli gizi atau dokter
          👨‍⚕️🩺 untuk menyusun rencana penurunan berat badan yang sehat dan
          berkelanjutan. Fokus pada pola makan rendah kalori 🥗🍏 dan perbanyak
          aktivitas fisik 🏋️‍♂️🚴‍♂️ secara bertahap untuk mendapatkan hasil yang
          lebih baik 🏆💖 serta mencegah komplikasi kesehatan di masa depan.
          Setiap usaha kecil yang Anda lakukan sangat berarti! 🌟💪🔥
        </span>
      );
  }
};
