function getRandom(a, b) {
    return Math.trunc(Math.random() * (b - a + 1) + a);
  }
  
  function bubble () { //Pones esta función como un onclick="" en html, y lo que pongas acá lo hace al hacer click.
    let radio = Math.random() * 200 + 50 + 'px';
    let bubble = document.createElement('div');
    bubble.style.width = radio;
    bubble.style.height = radio;
    bubble.style.background = `rgb(${getRandom(0,255)},${getRandom(0,255)},${getRandom(0,255)})`;
    bubble.style.borderRadius = '50%';
    bubble.style.position = 'absolute';
    bubble.style.bottom =  getRandom(0,window.innerHeight)+'px';
    bubble.style.left =  getRandom(0,window.innerWidth)+'px';
    document.body.append(bubble);
  }