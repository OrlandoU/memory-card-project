export default function  animateCard(el){
    const animation = [
        { transform: 'rotateX(-80deg)', opacity: 0 },
        { transform: 'rotateX(0deg)', opacity: 1 }
      ];
      
    const timing = {
        duration: 500,
        iterations: 1,
      }

    el.animate(animation, timing)
}

