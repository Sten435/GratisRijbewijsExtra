let toggle = document.getElementById('onOff');

chrome.storage.sync.get(['onOff'], (value) => {
	if (value.onOff !== null) {
		toggle.checked = value.onOff;
	}
});

toggle.addEventListener('change', () => {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, toggle.checked, () => {});
	});
	chrome.storage.sync.set({ onOff: toggle.checked });
});
