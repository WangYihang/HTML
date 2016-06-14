//获得文档对象
function gebi(myId){
	return document.getElementById(myId);
}
//棕色
function openSpeia(myId){
	image.parentElement.className = "Speia";
}
//灰度
function openGrayscale(myId){
	image.parentElement.className = "Grayscale";
}
//模糊
function openBlur(myId){
	image.parentElement.className = "Blur";
}
//反色
function openInver(myId){
	image.parentElement.className = "Inver";
}
//饱和度
function openSaturate(myId){
	image.parentElement.className = "Saturate";
}
//对比度
function openContrast(myId){
	image.parentElement.className = "Contrast";
}
//亮度
function openBrightness(myId){
	image.parentElement.className = "Brightness";
}
//色相
function openHueRotate(myId){
	image.parentElement.className = "HueRotate";
}
//阴影
function openDropShadow(myId){
	image.parentElement.className = "DropShadow";
}