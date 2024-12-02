function calculateAge() {
    var birthdate = document.getElementById("birthdate").value;
    if (birthdate === "") {
        document.getElementById("result").innerHTML = "من فضلك أدخل تاريخ الميلاد.";
        return;
    }

    // تحويل تاريخ الميلاد إلى كائن Date
    var birthDate = new Date(birthdate);
    var currentDate = new Date();

    // حساب الفرق بين التاريخين
    var years = currentDate.getFullYear() - birthDate.getFullYear();
    var months = currentDate.getMonth() - birthDate.getMonth();
    var days = currentDate.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    if (days < 0) {
        var lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += lastMonth.getDate();
    }

    // حساب العمر بالايام
    var totalDays = Math.floor((currentDate - birthDate) / (1000 * 60 * 60 * 24));

    // حساب العمر بالساعات
    var totalHours = totalDays * 24 + currentDate.getHours();

    // حساب العمر بالدقائق
    var totalMinutes = totalHours * 60 + currentDate.getMinutes();

    // عرض النتيجة
    var resultHtml = `
        <div>عمرك هو: <span>${years}</span> سنة</div>
        <div>أو <span>${months}</span> شهر</div>
        <div>أو <span>${days}</span> يوم</div>
        <div>أو <span>${totalHours}</span> ساعة</div>
        <div>أو <span>${totalMinutes}</span> دقيقة</div>
    `;

    document.getElementById("result").innerHTML = resultHtml;
}
