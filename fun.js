function generateDatabaseDateTime(date) {
    return date.toISOString("UTC").replace("T", " ").substring(0, 19);
}
function addHoursToDate(objDate, intHours) {
    var numberOfMlSeconds = objDate.getTime();
    var addMlSeconds = (intHours * 60) * 60 * 1000;
    var newDateObj = new Date(numberOfMlSeconds + addMlSeconds);

    return newDateObj;
}
function addMinutesToDate(objDate, intMinutes) {
    var numberOfMlSeconds = objDate.getTime();
    var addMlSeconds = (intMinutes * 60) * 1000;
    var newDateObj = new Date(numberOfMlSeconds + addMlSeconds);

    return newDateObj;
}
function addSecondsToDate(objDate, intSeconds) {
    var numberOfMlSeconds = objDate.getTime();
    var addMlSeconds = (intSeconds) * 1000;
    var newDateObj = new Date(numberOfMlSeconds + addMlSeconds);

    return newDateObj;
}
function gapBetweenTwoDates(date_now, date_future) {
    var delta = Math.abs(date_future.getTime() - date_now.getTime()) / 1000;

    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    var seconds = delta % 60;
    if (days > 0) {
        return days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒"
    } else {
        return hours + "小时" + minutes + "分钟" + seconds + "秒"
    }

}
const params = new URLSearchParams(document.location.search);
let stuName = params.get("uhT4qsG");
let stuid = params.get("1swtD3l");
let phone = params.get("HfOBIbP");
let type = params.get("dQ8MYM7");
let reason = params.get("4mV8bql");
let endDate = params.get("uuQyl3N");
let attachment = params.get("J2mz97K");
let applyDate = params.get("WoM32XF");
let beginDate = params.get("AYAM6U4");
let key = params.get("MXn9KR2");
key = key.replaceAll(" ","+");

const prefix = "030D7B5EA80346388F4AD83B3FF28E20"
const salt = "03E94CADA2A648269D596E2FA4B7D253"

var decryptedBytes = CryptoJS.AES.decrypt(key, "A2B6C04178204E7985CFDD45552765B9").toString(CryptoJS.enc.Utf8);
if (decryptedBytes != prefix + stuName + stuid + phone + endDate + salt) {
    document.body.innerHTML = "<h1>ERROR</h1>";
}

date = new Date(applyDate)

date.setHours(Math.floor(Math.random() * 6) + 18)
date.setMinutes(Math.floor(Math.random() * 60))
date.setSeconds(Math.floor(Math.random() * 60))

dateOffsetA = addHoursToDate(date, Math.floor(Math.random() * 4) + 20)
dateOffsetA = addMinutesToDate(dateOffsetA, Math.floor(Math.random() * 60))
dateOffsetA = addSecondsToDate(dateOffsetA, Math.floor(Math.random() * 60))
dateOffsetB = addHoursToDate(dateOffsetA, Math.floor(Math.random() * 2) + 2)
dateOffsetB = addMinutesToDate(dateOffsetB, Math.floor(Math.random() * 60))
dateOffsetB = addSecondsToDate(dateOffsetB, Math.floor(Math.random() * 60))
console.log(dateOffsetA)
applyDateFull = generateDatabaseDateTime(date)
applyDateOffsetA = generateDatabaseDateTime(dateOffsetA)
applyDateOffsetB = generateDatabaseDateTime(dateOffsetB)
console.log(applyDateOffsetA)
gapBetweenA = gapBetweenTwoDates(date, dateOffsetA)
gapBetweenB = gapBetweenTwoDates(dateOffsetA, dateOffsetB)






if (name != null) {
    document.getElementById("name").innerHTML = stuName;
    document.getElementById("name-2").innerHTML = stuName;
} else {
    name = document.getElementById("name").innerHTML;
}

if (stuid != null) {
    document.getElementById("stuid").innerHTML = stuid;
} else {
    stuid = document.getElementById("stuid").innerHTML;
}

if (phone != null) {
    document.getElementById("phone").innerHTML = phone;
} else {
    phone = document.getElementById("phone").innerHTML;
}

if (type != null) {
    document.getElementById("type").innerHTML = type;
} else {
    type = document.getElementById("type").innerHTML;
}

if (reason != null) {
    document.getElementById("reason").innerHTML = reason;
} else {
    reason = document.getElementById("reason").innerHTML;
}

if (endDate != null) {
    document.getElementById("endDate").innerHTML = endDate;
} else {
    endDate = document.getElementById("endDate").innerHTML;
}

if (applyDate != null) {
    document.getElementById("applyDate").innerHTML = applyDate;
    document.getElementById("applyDate-1").innerHTML = applyDateFull;
    document.getElementById("applyDate-2").innerHTML = applyDateFull;
    document.getElementById("applyDate-3").innerHTML = applyDateFull;

    document.getElementById("applyDate-offsetA-1").innerHTML = applyDateOffsetA;
    document.getElementById("applyDate-offsetA-2").innerHTML = applyDateOffsetA;
    document.getElementById("gapBetweenA").innerHTML = gapBetweenA;
    document.getElementById("applyDate-offsetB-1").innerHTML = applyDateOffsetB;
    document.getElementById("gapBetweenB").innerHTML = gapBetweenB;

} else {
    applyDate = document.getElementById("applyDate").innerHTML;

}

if (beginDate != null) {
    document.getElementById("beginDate").innerHTML = beginDate;
} else {
    beginDate = document.getElementById("beginDate").innerHTML;


    if (endDate != null) {
        document.getElementById("endDate").innerHTML = beginDate;
    } else {
        beginDate = document.getElementById("endDate").innerHTML;
    
    }}

if (attachment == 0) {
    document.getElementById("attachment").innerText = "Screenshot_" + applyDate + "-" + (Math.floor(Math.random() * 3) + 7) + "-" + Math.floor(Math.random() * 60) + "-" + Math.floor(Math.random() * 60) + "-" + Math.floor(Math.random() * 1000) + ".jpg(" + name + "_" + applyDate + ")"
} else {
    document.getElementById("attachment-form").remove()
}
if (date.getDate() < 10) {
    tempDay = "0" + date.getDate()
} else {
    tempDay = date.getDate()
}
document.getElementById("id").innerHTML = "工单号：20220" + (date.getMonth() + 1) + tempDay + "6" + (Math.floor(Math.random() * 7000) + 2000);


