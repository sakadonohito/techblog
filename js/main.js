     // DOMContentLoadedイベントで処理を実行
     document.addEventListener('DOMContentLoaded', () => {
       // menu-toggleを取得
       const hLinksToggle = document.getElementById('sp-toggles__h-links-toggle');
       const menuToggle = document.getElementById('sp-toggles__menu-toggle');

       // menu-toggleが存在する場合
       if (hLinksToggle && menuToggle) {
         menuToggle.addEventListener('change', () => {
           // h-links-toggleが存在する場合にのみ処理を実行
           if (hLinksToggle && menuToggle.checked && hLinksToggle.checked) {
             hLinksToggle.checked = false; // h-links-toggleをオフにする
           }
         });
       }

       /* searchformは諦めた
       const searchInput = document.getElementById('sp-search-input');
       const searchSubmit = document.getElementById('sp-search-submit');
       const searchToggle = document.getElementById('sp-search-toggle');
       const searchLabel = document.getElementById('sp-search-label');

       searchToggle.addEventListener('change', () => {
	 searchLabel.classList.toggle('toggle--hidden');
	 searchSubmit.classList.toggle('toggle--visible');
	 searchInput.classList.toggle('toggle--visible');
	 if (searchToggle.checked) {
           searchInput.focus();
	 }
       });

       searchInput.addEventListener('blur', () => {
	 searchInput.classList.toggle('toggle--visible');
	 searchSubmit.classList.toggle('toggle--visible')
	 searchLabel.classList.toggle('toggle--hidden');
       });
       */

       const scrollToTopButton = document.getElementById('scroll-to-top');
       window.addEventListener('scroll', () => {
	 if (window.scrollY > 300) { // スクロールが300pxを超えたら表示
	   scrollToTopButton.classList.add('visible');
	 } else {
	   scrollToTopButton.classList.remove('visible');
	 }
       });

       scrollToTopButton.addEventListener('click', (event) => {
	 event.preventDefault();
	 window.scrollTo({
	   top: 0,
	   behavior: 'smooth' // スムーズにスクロール
	 });
       });
     });
