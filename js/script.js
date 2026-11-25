// 【だれに】ナビボタンを登録
const HEADER_BUTTON = document.querySelector(".header__button");

// 【だれに】classを着け外しするHTML要素（body）を登録
const BODY = document.querySelector("body");


// 【発火】ナビボタンをクリックしたら...
HEADER_BUTTON.addEventListener('click', () => {
	// イベント発動
	BODY.classList.toggle('is-nav-open');
})
