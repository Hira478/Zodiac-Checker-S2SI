var form = document.getElementById('data-form');
form.onsubmit = function(e) {
    e.preventDefault();
    var month = form.monthB.value;
    var day = form.dateB.value;
    var result = document.getElementById('result');
    var full_text = document.getElementById('info-full');
    let astro_sign = "";
    let zInfo = "";

    if (month == "Dec") {
        if (day < 22)
            astro_sign = "Sagittarius";
        else
            astro_sign = "Capricorn";
    } else if (month == "Jan") {
        if (day < 20)
            astro_sign = "Capricorn";
        else
            astro_sign = "Aquarius";
    } else if (month == "Feb") {
        if (day < 19)
            astro_sign = "Aquarius";
        else
            astro_sign = "Pisces";
    } else if (month == "Mar") {
        if (day < 21)
            astro_sign = "Pisces";
        else
            astro_sign = "Aries";
    } else if (month == "Apr") {
        if (day < 20)
            astro_sign = "Aries";
        else
            astro_sign = "Taurus";
    } else if (month == "May") {
        if (day < 21)
            astro_sign = "Taurus";
        else
            astro_sign = "Gemini";
    } else if (month == "Jun") {
        if (day < 21)
            astro_sign = "Gemini";
        else
            astro_sign = "Cancer";
    } else if (month == "Jul") {
        if (day < 23)
            astro_sign = "Cancer";
        else
            astro_sign = "Leo";
    } else if (month == "Aug") {
        if (day < 23)
            astro_sign = "Leo";
        else
            astro_sign = "Virgo";
    } else if (month == "Sep") {
        if (day < 23)
            astro_sign = "Virgo";
        else
            astro_sign = "Libra";
    } else if (month == "Oct") {
        if (day < 23)
            astro_sign = "Libra";
        else
            astro_sign = "Scorpio";
    } else if (month == "Nov") {
        if (day < 22)
            astro_sign = "Scorpio";
        else
            astro_sign = "Sagittarius";
    }

    if (day == 1) {
        day = day + 'st';
    } else if (day == 2) {
        day = day + 'nd';
    } else if (day == 3) {
        day = day + 'rd';
    } else {
        day = day + 'th';
    }

    if (astro_sign == "Aries") {
        document.getElementById("zImage").src = "images/ares.jpg";
    } else if (astro_sign == "Taurus") {
        document.getElementById("zImage").src = "images/taurus.jpg";
    } else if (astro_sign == "Pisces") {
        document.getElementById("zImage").src = "images/pisces.jpg";
    } else if (astro_sign == "Leo") {
        document.getElementById("zImage").src = "images/leo.jpg";
    } else if (astro_sign == "Aquarius") {
        document.getElementById("zImage").src = "images/aqua.jpg";
    } else if (astro_sign == "Cancer") {
        document.getElementById("zImage").src = "images/cancer.jpg";
    } else if (astro_sign == "Capricorn") {
        document.getElementById("zImage").src = "images/capri.jpg";
    } else if (astro_sign == "Gemini") {
        document.getElementById("zImage").src = "images/gemini.jpg";
    } else if (astro_sign == "Libra") {
        document.getElementById("zImage").src = "images/libra.jpg";
    } else if (astro_sign == "Sagittarius") {
        document.getElementById("zImage").src = "images/sagit.jpg";
    } else if (astro_sign == "Scorpio") {
        document.getElementById("zImage").src = "images/scorpio.jpg";
    } else if (astro_sign == "Virgo") {
        document.getElementById("zImage").src = "images/virgo.jpg";
    }

    if (astro_sign == "Aries") {
        zInfo = "Simbol Aries berasal dari tokoh mitologi domba jantan berbulu emas yang dapat terbang, yaitu Chrysomallus. Peri Awan Nephele mengirimnya untuk menyelamatkan kedua anaknya, Phrixus dan Helle, yang akan dikurbankan kepada para Dewa. Lambang tanduk emas pada Aries adalah simbol dari domba tersebut. Ketika menyelamatkan kedua anak Peri Awan Nephele, salah satunya jatuh dan meninggal. Merasa bersalah, ia terbang ke Surga untuk mengurbankan dirinya sendiri kepada para Dewa. Atas jasanya inilah, Chrysomallus mendapat sebuah tempat di para bintang sebagai konstelasi Aries oleh Zeus.";
    } else if (astro_sign == "Taurus") {
        zInfo = "Banteng jantan adalah simbol Taurus. Banteng melambangkan Dewa Zeus yang kuat dan hebat, serta senang mengubah-ubah dirinya sendiri. Menurut mitologi Yunani, banteng ini sebenarnya adalah Dewa Zeus, yang katanya memang hobi mengubah-ngubah diri.Europa, seorang putri dari wilayah Phoenicia di Timur Tengah, menarik perhatian Zeus. Zeus menampakkan dirinya dalam bentuk banteng putih yang mengagumkan untuk menarik hati Europa. Europa tertarik dan menaiki banteng tersebut.Mereka pergi melintasi samudra ke sebuah wilayah di Yunani Kuno. Namun di sana Zeus mengubah dirinya lagi menyerupai elang lalu memperkosa Europa. Atas tindakan dan perselingkuhan tersebut, Zeus meletakkan lambang banteng di antara para bintang-bintang Taurus.";
    } else if (astro_sign == "Gemini") {
        zInfo = "Gemini disimbolkan dengan dua anak kembar. Asalnya dari tokoh mitologi Yunani, Castor dan Pollux. Mereka adalah kakak beradik kembar, anak dari Leda dengan ayah yang berbeda. Ayah Castor adalah Tyndarus, seorang raja dari Sparta, sedangkan ayah Pollux adalah Dewa Zeus. Sebagai darah daging Zeus, Pollux abadi.Hubungan Castor dan Pollux sangat erat. Mereka tampan dan sama-sama senang berpetualang. Menjadi dewasa, Castor dikenal sebagai penunggang kuda yang hebat, dan Pollux dikenal sebagai seseorang dengan kekuatan yang luar biasa.Di sebuah perang, Castor gugur. Pollux putus asa dan meminta Zeus untuk mencabut keabadiannya agar ia bisa meninggal. Namun Zeus menolaknya. Zeus membuat mereka berdua bersama selamanya sebagai konstelasi bintang kembar, yaitu Gemini.";
    } else if (astro_sign == "Virgo") {
        zInfo = "Asal mula zodiak Virgo dimulai dari kisah Pandora, wanita yang diciptakan oleh Dewa Keterampilan Hephaestus. Pandora membuka kotak terlarang sehingga seluruh kejahatan turun ke dunia, termasuk kematian. Hal tersebut membuat semua Dewa yang ada di bumi kembali ke surga agar terhindar dari kejahatan-kejahatan ituAsal mula zodiak Virgo dimulai dari kisah Pandora, wanita yang diciptakan oleh Dewa Keterampilan Hephaestus. Pandora membuka kotak terlarang sehingga seluruh kejahatan turun ke dunia, termasuk kematian. Hal tersebut membuat semua Dewa yang ada di bumi kembali ke surga agar terhindar dari kejahatan-kejahatan ituSimbol wanita perawan pada zodiak Virgo melambangkan kesucian, kepolosan, dan kemurnian Dewi Astraea, Dewi yang paling terakhir kembali ke surga. Astraea diberikan tempat di rasi bintang sebagai bentuk peringatan dari hilangnya kesucian, kepolosan, dan kemurnian di bumi";
    } else if (astro_sign == "Capricorn") {
        zInfo = "Cerita tentang Carpicorn berawal dari Dewa bernama Pan. Suatu hari ia melompat ke air karena menghindar dari monster Phyton. Ketika melompat, Pan mengubah dirinya menjadi hewan. Di permukaan air, badannya berupa kambing dan yang di dalam air berupa ikan. Itulah sebabnya terkadang simbol Carpicorn berupa kambing jantan berjanggut ditambahkan dengan ekor.";
    } else if (astro_sign == "Leo") {
        zInfo = "Singa sebagai simbol zodiak Leo juga berasal dari kisah Hercules. Singa Nemean adalah rintangan pertama Hercules. Singa ini berbulu emas dan memiliki kulit yang tidak dapat ditembus oleh senjata apapun.Hercules berhasil membunuh singa Nemea dengan melemparkan potongan kayu ke arah tenggorokannya dan ia mati tersedak. Digunakannya cakar singa untuk merobek kulit singa tersebut, kemudian bulu-bulu singa digunakannya sebagai pakaiannya untuk melindungi dalam perang selanjutnya. Pertarungan yang megah itu membuat Zeus menyediakan tempat kepada singa Nemea di rasi bintang untuk konstelasi Leo";
    } else if (astro_sign == "Aquarius") {
        zInfo = "Aquarius melambangkan seseorang yang menuangkan air dari kendi. Kisah ini tentang Ganymedes, pangeran yang sangat tampan. Zeus mengubah dirinya menjadi elang dan menculik Ganymedes ke Olympus. Zeus menugaskan dirinya untuk menjadi juru minum pribadinya, sebuah jabatan yang cukup tinggi.Lambat laun, Ganymedes merasa muak dan menuangkan seluruh air, ambrosia, dan anggur yang ada, sehingga terjadi hujan tak berkesudahan di bumi dan terjadilah air bah. Melihat hal itu, Zeus menyadari tindakannya yang jahat kepada Ganymedes. Akhirnya, ia memberikan sebuah tempat di rasi bintang sebagai zodiak Aquarius.Lambat laun, Ganymedes merasa muak dan menuangkan seluruh air, ambrosia, dan anggur yang ada, sehingga terjadi hujan tak berkesudahan di bumi dan terjadilah air bah. Melihat hal itu, Zeus menyadari tindakannya yang jahat kepada Ganymedes. Akhirnya, ia memberikan sebuah tempat di rasi bintang sebagai zodiak Aquarius.";
    } else if (astro_sign == "Pisces") {
        zInfo = "Simbol dari zodiak Pisces adalah dua ikan yang berenang berlawanan arah. Ketika itu Typhon, monster paling besar dan paling mengerikan,  mendeklarasikan peperangan kepada semua Dewa Olympus. Seluruh Dewa menyamarkan diri untuk menyerang Typhon. Dewi Cinta dan Kecantikan Aphrodite dan Eros, anaknya, menyelam ke kedalaman laut dan mengambil 2 ekor ikan.Typhon berhasil dikalahkan. Semua dewa kembali ke bentuk asalnya. Aphrodite dan anaknya merasa berterima kasih atas ikan yang sudah meminjamkan bentuk mereka. Ia lalu memberikan tempat kepada ikan di rasi bintang sebagai zodiak Pisces, zodiak terakhir dalam mitologi Zodiak Yunani.";
    } else if (astro_sign == "Cancer") {
        zInfo = "Cerita tentang Cancer berasal dari kisah Hercules (Heracles) yang ditugaskan untuk membunuh Lernaean Hydra, seekor ular air dengan ratusan kepala. Hera, istri Zeus yang juga salah satu musuk Hercules, memerintahkan seekor kepiting raksasa untuk turut membantu Hydra melawan Hercules.Kepiting raksasa tersebut sempat berhasil membuat Hercules kesakitan luar biasa dengan capitnya, namun Hercules berhasil menghancurkan sang kepiting. Meskipun sang kepiting kalah, Hera tetap merasa bangga terhadapnya dan memberikan tempat di kalangan bintang sebagai Cancer";
    } else if (astro_sign == "Sagittarius") {
        zInfo = "Zodiak Sagitarius berasal dari tokoh mitologi sebuah makhluk setengah kuda atau Chiron. Dalam sebuah perkelahian, Hercules menghindar dari panah beracun lawan dan menyebabkan panah itu mengenai kaki Chiron. Chiron adalah anak Poseidon dan memiliki keabadian. Ia abadi namun harus merasakan sakit yang luar biasa.Dalam perjalanannya dengan Hercules, mereka bertemu dengan Prometheus, pencipta umat manusia namun harus terkurung. Chiron bersedia menggantikan posisi Prometheus yang terkurung agar Prometheus dapat terbebas. Keputusannya itu membuat Zeus menempatkan Chiron di konstelasi bintang sebagai zodiak Sagitarius.";
    } else if (astro_sign == "Libra") {
        zInfo = "Sesuai lambangnya, Libra melambangkan keadilan dan kebenaran. Kisahnya tentang Dewi Keadilan Themis. Dewi Themis adalah ibu dari Dewi Astraea dan letak mereka berdua saling berdampingan pada konstelasi rasi bintang. Simbol Libra mengingatkan bahwa keadilan dan kebenaran adalah bagian yang sangat penting dalam kehidupan dan tidak boleh terlupakan.";
    } else if (astro_sign == "Scorpio") {
        zInfo = "Kisah mitologi tentang kesombongan Orion sebagai pria tertampan dan tertinggi yang pernah ada. Orion dengan lantang mengatakan bahwa dirinya dapat mengalahkan semua makhluk di bumi.Kesombongannya membuat Dewi Bumi Gaia mengirim seekor kalajengking untuk mengalahkan Orion. Orion mati tersengat racun kalajengking.vKemenangan kalajengking membuat Gaia menempatkan kalajengking tersebut di konstelasi bintang sebagai Scorpio.Kesombongannya membuat Dewi Bumi Gaia mengirim seekor kalajengking untuk mengalahkan Orion. Orion mati tersengat racun kalajengking.vKemenangan kalajengking membuat Gaia menempatkan kalajengking tersebut di konstelasi bintang sebagai Scorpio.Kesombongannya membuat Dewi Bumi Gaia mengirim seekor kalajengking untuk mengalahkan Orion. Orion mati tersengat racun kalajengking.vKemenangan kalajengking membuat Gaia menempatkan kalajengking tersebut di konstelasi bintang sebagai Scorpio.";
    } else {
        zInfo = none;
    }
    result.innerHTML = 'Your date of birth is ' + month + ' ' + day + "<br>" + "therefore Your Zodiac sign is " + astro_sign;
    full_text.innerHTML = zInfo;
    form.reset();
}