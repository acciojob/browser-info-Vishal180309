//your JS code here. If required.
const browserInfoDiv = document.getElementById("browser-info");

const userAgent = navigator.userAgent;
const browserName = navigator.appName;
const version = navigator.appVersion;

let browserNameString = "";
if (browserName === "Netscape") {
    browserNameString = "Firefox";
} else {
    browserNameString = browserName;
}

browserInfoDiv.innerText = `You are using ${browserNameString} version ${version}`;