const x = document.querySelector('.background-image');
const y = document.querySelector('.timer');

let coun = 0

let something = setInterval(blurring, 30)

function blurring(){
    coun++

    if (coun >99 ) {
       clearInterval(something)
    }
    y.innerText = `${coun}%`
    y.style.opacity = scale(coun, 0, 100, 1, 0)
    x.style.filter = `blur(${scale(coun, 0, 100, 30, 0)}px)`

}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }