document.getElementById('greenlogin').addEventListener('click', animate);

function animate(){
    document.getElementById('darkoverlay').classList.add('darkoverlay2');

    const DOSlogo=hidediv('DOSlogo');
    const webexlogo=hidediv('webexlogo');
    const accesstokenlabel=hidediv('accesstokenlabel');
    const tokeninputfield=hidediv('tokeninputfield');
    const greenlogin=hidediv('greenlogin');

}

function hidediv(id){
    return document.getElementById(id).style.display="none"
}
