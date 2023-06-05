function Scroll() {
  let btns = document.querySelectorAll('.header__link'),
    blocks = document.querySelectorAll('.header__link-block');

  function scroll(i) {
    window.scrollBy(0, blocks[i].getBoundingClientRect().top);
  }

  btns.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      scroll(i);
    })
  })
}

export default Scroll;