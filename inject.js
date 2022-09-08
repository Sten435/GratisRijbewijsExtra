const start = () => {
	try {
		chrome.storage.sync.get(['onOff'], (value) => {
			if (value.onOff !== null && value.onOff === true) {
				if (sessionStorage.getItem('alert') === null) {
					Swal.fire({
						title: 'Opgelet !!!',
						html: '<h5>Deze extensie mag en kan niet gebruikt worden op een officieel examen.</h5></br><h2 style="color: red";><b>Op je examen is dit strafbaar!</b></h2>',
						icon: 'warning',
					});
					sessionStorage.setItem('alert', true);
				}

				document.body.addEventListener('click', drawAwnser);
				document.body.addEventListener('load', drawAwnser);

				const resize_ob = new ResizeObserver(function (entries) {
					if (document.getElementById('progress').style.width === '0%') {
						clearAll();
						drawAwnser();
					}
				});

				// start observing for resize
				try {
					resize_ob.observe(document.getElementById('progress'));
				} catch (error) {}
			}
		});
	} catch (error) {}
};

let el,
	oldEl = null;

const clearAll = () => {
	Array.from(document.getElementsByClassName('test_button')).forEach((button) => {
		if (button.name !== 'ok') {
			button.style.border = '1px solid red';
			button.style.backgroundColor = 'red';
			button.style.cursor = 'not-allowed';
			button.style.height = 'initial';
			button.style.width = 'initial';
			button.removeAttribute('disabled');
		}
	});

	let container = document.getElementById('Acontrainer');
	if (container !== null) container.remove();
};

const writeAwnser = (awnserText) => {
	let inputMethod = AwnserValidationMethod(['btnabc', 'btnyesno', 'typ']);
	if (inputMethod == null) return;

	switch (inputMethod) {
		case 'typ':
			let input = document.getElementById('antwoord');

			input.style.border = '4px dashed green';
			input.style.backgroundColor = '#81e984';
			input.style.cursor = 'pointer';
			input.style.height = '50px';
			input.style.width = '75px';

			input.value = awnserText;
			break;

		default:
			let buttonList = Array.from(document.getElementsByClassName('test_button'));
			buttonList.forEach((button) => {
				if (button.name.toUpperCase() == awnserText) {
					button.style.border = '4px dashed green';
					button.style.backgroundColor = '#81e984';
					button.style.cursor = 'pointer';
					button.style.height = '50px';
					button.style.width = '75px';
				} else {
					if (button.name !== 'ok') button.disabled = 'disabled';
				}
			});
			break;
	}

	function AwnserValidationMethod(methodNameList) {
		return (
			methodNameList.filter((name) => document.getElementById(name)?.style.display == 'block')[0] ?? null
		);
	}
};

const drawAwnser = function () {
	let awnserButton = document.getElementsByClassName('q-solution');

	if (awnserButton.length === 1 && awnserButton[0].innerHTML !== undefined) {
		clearAll();

		const awnserText = awnserButton[0].innerHTML;
		let awnserbody = document.createElement('div');
		let textBeforeAwnser = document.createElement('span');
		let awnserTextSpan = document.createElement('span');

		textBeforeAwnser.innerText = 'Correct Antwoord: ';
		textBeforeAwnser.style.fontSize = '.8rem';
		textBeforeAwnser.style.color = '#ffffff';

		awnserTextSpan.innerText = awnserText;
		awnserTextSpan.style.fontSize = '1rem';
		awnserTextSpan.style.color = '#ffffff';
		awnserTextSpan.style.fontWeight = 'bold';
		awnserTextSpan.style.textDecoration = 'underline';
		awnserTextSpan.style.textDecorationThickness = '2px';
		awnserTextSpan.style.textUnderlineOffset = '5px';

		awnserbody.style.padding = '10px';
		awnserbody.id = 'Acontrainer';
		awnserbody.style.position = 'absolute';
		awnserbody.style.fontFamily = 'monospace';
		awnserbody.style.top = '10px';
		awnserbody.style.right = '10px';
		awnserbody.style.backgroundColor = '#008000';
		awnserbody.style.borderRadius = '10px';

		awnserbody.appendChild(textBeforeAwnser);
		awnserbody.appendChild(awnserTextSpan);

		document.body.appendChild(awnserbody);

		el = awnserbody;
		if (oldEl !== null) oldEl.remove();
		oldEl = el;
		writeAwnser(awnserText);
	} else {
		console.log('No question found.');
	}
};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	sendResponse();
	window.location.reload();
});
window.addEventListener('load', start);
