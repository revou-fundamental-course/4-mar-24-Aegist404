
document.getElementById("calculate").addEventListener("click", () => {
    event.preventDefault()

    // Mengambil id dari bagian form
    const male = document.getElementById("pria").checked
    const female = document.getElementById("wanita").checked
    const weight = document.getElementById("beratBadan").value
    const age = document.getElementById("usia").value
    const height = document.getElementById("tinggiBadan").value / 100

    // Mengambil id dari bagian view
    const condition = document.getElementById("condition")
    const showBmi = document.getElementById("bmi")
    const text = document.getElementById("text")

    // Mengambil id dari bagian diagnosa
    const diagnosisTitle = document.getElementById("diagnosisTitle")
    const diagnosis1 = document.getElementById("diagnosis1")
    const diagnosis2 = document.getElementById("diagnosis2")
    const diagnosis3 = document.getElementById("diagnosis3")

    // Mengambil id dari bagian info
    const under = document.getElementById("under")
    const over = document.getElementById("over")
    const desc = document.getElementById("desc")

    // Pengkondisian 
    if (!male && !female) {
        alert("Mohon pilih jenis kelamin terlebih dahulu")
    } else if (isNaN(weight) || weight <= 0 || isNaN(age) || age <= 0 || isNaN(height) || height <= 0) {
        alert("Mohon isi semua form dengan benar")
    } else {
        const bmiCount = weight / (height * height)
        const bmi = bmiCount.toFixed(1)
        if (bmi < 18.5) {
            // BMI kurang
            condition.innerHTML = "Berat Badan Kurang"
            showBmi.innerHTML = bmi
            text.innerHTML = "Berat badan Anda kurang. Tingkatkan Berat Badan Anda!"

            diagnosisTitle.innerHTML = "Tubuh Kurus"
            diagnosis1.innerHTML = "Sistem kekebalan tubuh lemah"
            diagnosis2.innerHTML = "Anemia"
            diagnosis3.innerHTML = "Gangguan jantung"

            desc.innerHTML = "Anda berada dalam kategori underweight atau berat badan kurang. Cara terbaik untuk menaikan berat badan adalah dengan meningkatkan kalori makanan yang dikonsumsi dan berolahraga. Jika Anda berada dalam kategori ini maka anda dianjurkan untuk menaikan berat badan hingga batas normal"

            // Untuk mengihitung letak antara BMI
            const lowerBound = Math.floor(bmi - 0.1);
            const upperBound = Math.ceil(parseInt(bmi) + 0.1);
            under.innerHTML = lowerBound;
            over.innerHTML = upperBound;

        } else if (bmi >= 18.5 && bmi <= 24.9) {
            // BMI normal
            condition.innerHTML = "Berat Badan Normal";
            showBmi.innerHTML = bmi;
            text.innerHTML = "Berat badan Anda normal. Pertahankan pola hidup sehat!";
            diagnosisTitle.innerHTML = "Sehat Normal";

            desc.innerHTML = "Anda berada dalam kategori normal. Tetap jaga pola makan dan hidup anda untuk tetap selalu sehat"

            // Untuk mengihitung letak antara BMI
            const lowerBound = Math.floor(bmi - 0.1);
            const upperBound = Math.ceil(parseInt(bmi) + 0.1);
            under.innerHTML = lowerBound;
            over.innerHTML = upperBound;

        } else {
            // BMI berlebih
            condition.innerHTML = "Berat Badan Berlebih";
            showBmi.innerHTML = bmi;
            text.innerHTML = "Berat badan Anda berlebih. Jaga pola hidup anda"
            diagnosisTitle.innerHTML = "Kegemukan"
            diagnosis1.innerHTML = "Diabetes";
            diagnosis2.innerHTML = "Hipertensi";
            diagnosis3.innerHTML = "Sakit Jantung";

            desc.innerHTML = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga. Jika Anda berada dalam kategori ini maka anda dianjurkan untuk menurunkan berat badan hingga batas normal"

            // Untuk mengihitung letak antara BMI
            const lowerBound = Math.floor(bmi - 0.1);
            const upperBound = Math.ceil(parseInt(bmi) + 0.1);
            under.innerHTML = lowerBound;
            over.innerHTML = upperBound;
            
        }
    }
}
);
