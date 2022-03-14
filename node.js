var offset = document.getElementById('container').offsetLeft;

window.addEventListener('resize',(e)=>{
    offset = document.getElementById('container').offsetLeft
})

document.getElementById('container').addEventListener('click',(e)=>{
    document.getElementById('widthChangingFrame').style.width=`${e.pageX-offset}px`;
});

function change2GS(){
    document.getElementById('grayscalecontrastRadio').checked=false;
    document.getElementById('widthChangingFrame').style.filter='grayscale(100%)';
}
function change2GSPC(){
    document.getElementById('grayscaleRadio').checked=false;
    document.getElementById('widthChangingFrame').style.filter='grayscale(100%) contrast(1.8)';
}

function change2GSLabel(){
    document.getElementById('grayscaleRadio').checked=true;
    document.getElementById('grayscalecontrastRadio').checked=false;
    document.getElementById('widthChangingFrame').style.filter='grayscale(100%)';
}
function change2GSPCLabel(){
    document.getElementById('grayscalecontrastRadio').checked=true;
    document.getElementById('grayscaleRadio').checked=false;
    document.getElementById('widthChangingFrame').style.filter='grayscale(100%) contrast(1.8)';
}