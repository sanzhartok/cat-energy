function beforeAfter() {
    document.getElementsByClassName('slider__after')[0].style.width = document.getElementById('pedsumid').value + "%";
    document.getElementsByClassName('slider__before')[0].style.width = (100 - document.getElementById('pedsumid').value) + "%";
    console.log(document.getElementById('pedsumid').value);
}