!(function (e, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = t())
		: 'function' == typeof define && define.amd
		? define(t)
		: ((e = e || self).Sweetalert2 = t());
})(this, function () {
	'use strict';
	const D = 'SweetAlert2:',
		q = (e) => e.charAt(0).toUpperCase() + e.slice(1),
		r = (e) => {
			console.warn(''.concat(D, ' ').concat('object' == typeof e ? e.join(' ') : e));
		},
		l = (e) => {
			console.error(''.concat(D, ' ').concat(e));
		},
		V = [],
		N = (e, t) => {
			(e = '"'
				.concat(e, '" is deprecated and will be removed in the next major release. Please use "')
				.concat(t, '" instead.')),
				V.includes(e) || (V.push(e), r(e));
		},
		R = (e) => ('function' == typeof e ? e() : e),
		F = (e) => e && 'function' == typeof e.toPromise,
		u = (e) => (F(e) ? e.toPromise() : Promise.resolve(e)),
		U = (e) => e && Promise.resolve(e) === e;
	const i = {
			title: '',
			titleText: '',
			text: '',
			html: '',
			footer: '',
			icon: void 0,
			iconColor: void 0,
			iconHtml: void 0,
			template: void 0,
			toast: !1,
			showClass: { popup: 'swal2-show', backdrop: 'swal2-backdrop-show', icon: 'swal2-icon-show' },
			hideClass: { popup: 'swal2-hide', backdrop: 'swal2-backdrop-hide', icon: 'swal2-icon-hide' },
			customClass: {},
			target: 'body',
			color: void 0,
			backdrop: !0,
			heightAuto: !0,
			allowOutsideClick: !0,
			allowEscapeKey: !0,
			allowEnterKey: !0,
			stopKeydownPropagation: !0,
			keydownListenerCapture: !1,
			showConfirmButton: !0,
			showDenyButton: !1,
			showCancelButton: !1,
			preConfirm: void 0,
			preDeny: void 0,
			confirmButtonText: 'OK',
			confirmButtonAriaLabel: '',
			confirmButtonColor: void 0,
			denyButtonText: 'No',
			denyButtonAriaLabel: '',
			denyButtonColor: void 0,
			cancelButtonText: 'Cancel',
			cancelButtonAriaLabel: '',
			cancelButtonColor: void 0,
			buttonsStyling: !0,
			reverseButtons: !1,
			focusConfirm: !0,
			focusDeny: !1,
			focusCancel: !1,
			returnFocus: !0,
			showCloseButton: !1,
			closeButtonHtml: '&times;',
			closeButtonAriaLabel: 'Close this dialog',
			loaderHtml: '',
			showLoaderOnConfirm: !1,
			showLoaderOnDeny: !1,
			imageUrl: void 0,
			imageWidth: void 0,
			imageHeight: void 0,
			imageAlt: '',
			timer: void 0,
			timerProgressBar: !1,
			width: void 0,
			padding: void 0,
			background: void 0,
			input: void 0,
			inputPlaceholder: '',
			inputLabel: '',
			inputValue: '',
			inputOptions: {},
			inputAutoTrim: !0,
			inputAttributes: {},
			inputValidator: void 0,
			returnInputValueOnDeny: !1,
			validationMessage: void 0,
			grow: !1,
			position: 'center',
			progressSteps: [],
			currentProgressStep: void 0,
			progressStepsDistance: void 0,
			willOpen: void 0,
			didOpen: void 0,
			didRender: void 0,
			willClose: void 0,
			didClose: void 0,
			didDestroy: void 0,
			scrollbarPadding: !0,
		},
		W = [
			'allowEscapeKey',
			'allowOutsideClick',
			'background',
			'buttonsStyling',
			'cancelButtonAriaLabel',
			'cancelButtonColor',
			'cancelButtonText',
			'closeButtonAriaLabel',
			'closeButtonHtml',
			'color',
			'confirmButtonAriaLabel',
			'confirmButtonColor',
			'confirmButtonText',
			'currentProgressStep',
			'customClass',
			'denyButtonAriaLabel',
			'denyButtonColor',
			'denyButtonText',
			'didClose',
			'didDestroy',
			'footer',
			'hideClass',
			'html',
			'icon',
			'iconColor',
			'iconHtml',
			'imageAlt',
			'imageHeight',
			'imageUrl',
			'imageWidth',
			'preConfirm',
			'preDeny',
			'progressSteps',
			'returnFocus',
			'reverseButtons',
			'showCancelButton',
			'showCloseButton',
			'showConfirmButton',
			'showDenyButton',
			'text',
			'title',
			'titleText',
			'willClose',
		],
		z = {},
		K = [
			'allowOutsideClick',
			'allowEnterKey',
			'backdrop',
			'focusConfirm',
			'focusDeny',
			'focusCancel',
			'returnFocus',
			'heightAuto',
			'keydownListenerCapture',
		],
		_ = (e) => Object.prototype.hasOwnProperty.call(i, e),
		Y = (e) => -1 !== W.indexOf(e),
		Z = (e) => z[e],
		X = (e) => {
			!e.backdrop &&
				e.allowOutsideClick &&
				r('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
			for (const n in e)
				(t = n),
					_(t) || r('Unknown parameter "'.concat(t, '"')),
					e.toast &&
						((t = n), K.includes(t) && r('The parameter "'.concat(t, '" is incompatible with toasts'))),
					(t = n),
					Z(t) && N(t, Z(t));
			var t;
		};
	var e = (e) => {
		const t = {};
		for (const n in e) t[e[n]] = 'swal2-' + e[n];
		return t;
	};
	const p = e([
			'container',
			'shown',
			'height-auto',
			'iosfix',
			'popup',
			'modal',
			'no-backdrop',
			'no-transition',
			'toast',
			'toast-shown',
			'show',
			'hide',
			'close',
			'title',
			'html-container',
			'actions',
			'confirm',
			'deny',
			'cancel',
			'default-outline',
			'footer',
			'icon',
			'icon-content',
			'image',
			'input',
			'file',
			'range',
			'select',
			'radio',
			'checkbox',
			'label',
			'textarea',
			'inputerror',
			'input-label',
			'validation-message',
			'progress-steps',
			'active-progress-step',
			'progress-step',
			'progress-step-line',
			'loader',
			'loading',
			'styled',
			'top',
			'top-start',
			'top-end',
			'top-left',
			'top-right',
			'center',
			'center-start',
			'center-end',
			'center-left',
			'center-right',
			'bottom',
			'bottom-start',
			'bottom-end',
			'bottom-left',
			'bottom-right',
			'grow-row',
			'grow-column',
			'grow-fullscreen',
			'rtl',
			'timer-progress-bar',
			'timer-progress-bar-container',
			'scrollbar-measure',
			'icon-success',
			'icon-warning',
			'icon-info',
			'icon-question',
			'icon-error',
			'no-war',
		]),
		o = e(['success', 'warning', 'info', 'question', 'error']),
		m = () => document.body.querySelector('.'.concat(p.container)),
		t = (e) => {
			const t = m();
			return t ? t.querySelector(e) : null;
		},
		n = (e) => t('.'.concat(e)),
		g = () => n(p.popup),
		$ = () => n(p.icon),
		J = () => n(p.title),
		G = () => n(p['html-container']),
		Q = () => n(p.image),
		ee = () => n(p['progress-steps']),
		te = () => n(p['validation-message']),
		h = () => t('.'.concat(p.actions, ' .').concat(p.confirm)),
		f = () => t('.'.concat(p.actions, ' .').concat(p.deny));
	const d = () => t('.'.concat(p.loader)),
		b = () => t('.'.concat(p.actions, ' .').concat(p.cancel)),
		ne = () => n(p.actions),
		oe = () => n(p.footer),
		ie = () => n(p['timer-progress-bar']),
		re = () => n(p.close),
		ae = () => {
			const e = Array.from(g().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(
				(e, t) => {
					(e = parseInt(e.getAttribute('tabindex'))), (t = parseInt(t.getAttribute('tabindex')));
					return t < e ? 1 : e < t ? -1 : 0;
				}
			);
			var t = Array.from(
				g().querySelectorAll(
					'\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'
				)
			).filter((e) => '-1' !== e.getAttribute('tabindex'));
			return ((t) => {
				const n = [];
				for (let e = 0; e < t.length; e++) -1 === n.indexOf(t[e]) && n.push(t[e]);
				return n;
			})(e.concat(t)).filter((e) => P(e));
		},
		se = () =>
			s(document.body, p.shown) && !s(document.body, p['toast-shown']) && !s(document.body, p['no-backdrop']),
		ce = () => g() && s(g(), p.toast);
	function le(e) {
		var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
		const n = ie();
		P(n) &&
			(t && ((n.style.transition = 'none'), (n.style.width = '100%')),
			setTimeout(() => {
				(n.style.transition = 'width '.concat(e / 1e3, 's linear')), (n.style.width = '0%');
			}, 10));
	}
	const a = { previousBodyPadding: null },
		y = (t, e) => {
			if (((t.textContent = ''), e)) {
				const n = new DOMParser(),
					o = n.parseFromString(e, 'text/html');
				Array.from(o.querySelector('head').childNodes).forEach((e) => {
					t.appendChild(e);
				}),
					Array.from(o.querySelector('body').childNodes).forEach((e) => {
						t.appendChild(e);
					});
			}
		},
		s = (t, e) => {
			if (!e) return !1;
			var n = e.split(/\s+/);
			for (let e = 0; e < n.length; e++) if (!t.classList.contains(n[e])) return !1;
			return !0;
		},
		ue = (t, n) => {
			Array.from(t.classList).forEach((e) => {
				Object.values(p).includes(e) ||
					Object.values(o).includes(e) ||
					Object.values(n.showClass).includes(e) ||
					t.classList.remove(e);
			});
		},
		v = (e, t, n) => {
			if ((ue(e, t), t.customClass && t.customClass[n])) {
				if ('string' != typeof t.customClass[n] && !t.customClass[n].forEach)
					return r(
						'Invalid type of customClass.'
							.concat(n, '! Expected string or iterable object, got "')
							.concat(typeof t.customClass[n], '"')
					);
				w(e, t.customClass[n]);
			}
		},
		de = (e, t) => {
			if (!t) return null;
			switch (t) {
				case 'select':
				case 'textarea':
				case 'file':
					return e.querySelector('.'.concat(p.popup, ' > .').concat(p[t]));
				case 'checkbox':
					return e.querySelector('.'.concat(p.popup, ' > .').concat(p.checkbox, ' input'));
				case 'radio':
					return (
						e.querySelector('.'.concat(p.popup, ' > .').concat(p.radio, ' input:checked')) ||
						e.querySelector('.'.concat(p.popup, ' > .').concat(p.radio, ' input:first-child'))
					);
				case 'range':
					return e.querySelector('.'.concat(p.popup, ' > .').concat(p.range, ' input'));
				default:
					return e.querySelector('.'.concat(p.popup, ' > .').concat(p.input));
			}
		},
		pe = (e) => {
			var t;
			e.focus(), 'file' !== e.type && ((t = e.value), (e.value = ''), (e.value = t));
		},
		me = (e, t, n) => {
			e &&
				t &&
				(t = 'string' == typeof t ? t.split(/\s+/).filter(Boolean) : t).forEach((t) => {
					Array.isArray(e)
						? e.forEach((e) => {
								n ? e.classList.add(t) : e.classList.remove(t);
						  })
						: n
						? e.classList.add(t)
						: e.classList.remove(t);
				});
		},
		w = (e, t) => {
			me(e, t, !0);
		},
		C = (e, t) => {
			me(e, t, !1);
		},
		A = (e, t) => {
			var n = Array.from(e.children);
			for (let e = 0; e < n.length; e++) {
				var o = n[e];
				if (o instanceof HTMLElement && s(o, t)) return o;
			}
		},
		c = (e, t, n) => {
			(n = n === ''.concat(parseInt(n)) ? parseInt(n) : n) || 0 === parseInt(n)
				? (e.style[t] = 'number' == typeof n ? ''.concat(n, 'px') : n)
				: e.style.removeProperty(t);
		},
		k = function (e) {
			e.style.display = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'flex';
		},
		B = (e) => {
			e.style.display = 'none';
		},
		ge = (e, t, n, o) => {
			const i = e.querySelector(t);
			i && (i.style[n] = o);
		},
		he = function (e, t) {
			var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 'flex';
			t ? k(e, n) : B(e);
		},
		P = (e) => !(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length)),
		fe = () => !P(h()) && !P(f()) && !P(b()),
		be = (e) => !!(e.scrollHeight > e.clientHeight),
		ye = (e) => {
			const t = window.getComputedStyle(e);
			var e = parseFloat(t.getPropertyValue('animation-duration') || '0'),
				n = parseFloat(t.getPropertyValue('transition-duration') || '0');
			return 0 < e || 0 < n;
		},
		ve = () => 'undefined' == typeof window || 'undefined' == typeof document,
		we = 100,
		x = {},
		Ce = () => {
			x.previousActiveElement instanceof HTMLElement
				? (x.previousActiveElement.focus(), (x.previousActiveElement = null))
				: document.body && document.body.focus();
		},
		Ae = (o) =>
			new Promise((e) => {
				if (!o) return e();
				var t = window.scrollX,
					n = window.scrollY;
				(x.restoreFocusTimeout = setTimeout(() => {
					Ce(), e();
				}, we)),
					window.scrollTo(t, n);
			}),
		ke = '\n <div aria-labelledby="'
			.concat(p.title, '" aria-describedby="')
			.concat(p['html-container'], '" class="')
			.concat(p.popup, '" tabindex="-1">\n   <button type="button" class="')
			.concat(p.close, '"></button>\n   <ul class="')
			.concat(p['progress-steps'], '"></ul>\n   <div class="')
			.concat(p.icon, '"></div>\n   <img class="')
			.concat(p.image, '" />\n   <h2 class="')
			.concat(p.title, '" id="')
			.concat(p.title, '"></h2>\n   <div class="')
			.concat(p['html-container'], '" id="')
			.concat(p['html-container'], '"></div>\n   <input class="')
			.concat(p.input, '" />\n   <input type="file" class="')
			.concat(p.file, '" />\n   <div class="')
			.concat(
				p.range,
				'">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="'
			)
			.concat(p.select, '"></select>\n   <div class="')
			.concat(p.radio, '"></div>\n   <label for="')
			.concat(p.checkbox, '" class="')
			.concat(p.checkbox, '">\n     <input type="checkbox" />\n     <span class="')
			.concat(p.label, '"></span>\n   </label>\n   <textarea class="')
			.concat(p.textarea, '"></textarea>\n   <div class="')
			.concat(p['validation-message'], '" id="')
			.concat(p['validation-message'], '"></div>\n   <div class="')
			.concat(p.actions, '">\n     <div class="')
			.concat(p.loader, '"></div>\n     <button type="button" class="')
			.concat(p.confirm, '"></button>\n     <button type="button" class="')
			.concat(p.deny, '"></button>\n     <button type="button" class="')
			.concat(p.cancel, '"></button>\n   </div>\n   <div class="')
			.concat(p.footer, '"></div>\n   <div class="')
			.concat(p['timer-progress-bar-container'], '">\n     <div class="')
			.concat(p['timer-progress-bar'], '"></div>\n   </div>\n </div>\n')
			.replace(/(^|\n)\s*/g, ''),
		Be = () => {
			const e = m();
			return (
				!!e &&
				(e.remove(),
				C([document.documentElement, document.body], [p['no-backdrop'], p['toast-shown'], p['has-column']]),
				!0)
			);
		},
		E = () => {
			x.currentInstance.resetValidationMessage();
		},
		Pe = () => {
			const e = g(),
				t = A(e, p.input),
				n = A(e, p.file),
				o = e.querySelector('.'.concat(p.range, ' input')),
				i = e.querySelector('.'.concat(p.range, ' output')),
				r = A(e, p.select),
				a = e.querySelector('.'.concat(p.checkbox, ' input')),
				s = A(e, p.textarea);
			(t.oninput = E),
				(n.onchange = E),
				(r.onchange = E),
				(a.onchange = E),
				(s.oninput = E),
				(o.oninput = () => {
					E(), (i.value = o.value);
				}),
				(o.onchange = () => {
					E(), (i.value = o.value);
				});
		},
		xe = (e) => ('string' == typeof e ? document.querySelector(e) : e),
		Ee = (e) => {
			const t = g();
			t.setAttribute('role', e.toast ? 'alert' : 'dialog'),
				t.setAttribute('aria-live', e.toast ? 'polite' : 'assertive'),
				e.toast || t.setAttribute('aria-modal', 'true');
		},
		Te = (e) => {
			'rtl' === window.getComputedStyle(e).direction && w(m(), p.rtl);
		},
		Le = (e, t) => {
			if (e instanceof HTMLElement) t.appendChild(e);
			else if ('object' == typeof e) {
				var n = e,
					o = t;
				if (n.jquery) Se(o, n);
				else y(o, n.toString());
			} else e && y(t, e);
		},
		Se = (t, n) => {
			if (((t.textContent = ''), 0 in n)) for (let e = 0; e in n; e++) t.appendChild(n[e].cloneNode(!0));
			else t.appendChild(n.cloneNode(!0));
		},
		Oe = (() => {
			if (!ve()) {
				var e = document.createElement('div'),
					t = { WebkitAnimation: 'webkitAnimationEnd', animation: 'animationend' };
				for (const n in t)
					if (Object.prototype.hasOwnProperty.call(t, n) && void 0 !== e.style[n]) return t[n];
			}
			return !1;
		})(),
		Me = (e, t) => {
			var n,
				o,
				i,
				r,
				a,
				s = ne(),
				c = d();
			(t.showConfirmButton || t.showDenyButton || t.showCancelButton ? k : B)(s),
				v(s, t, 'actions'),
				(s = s),
				(n = c),
				(o = t),
				(i = h()),
				(r = f()),
				(a = b()),
				je(i, 'confirm', o),
				je(r, 'deny', o),
				je(a, 'cancel', o),
				(function (e, t, n, o) {
					if (!o.buttonsStyling) return C([e, t, n], p.styled);
					w([e, t, n], p.styled),
						o.confirmButtonColor &&
							((e.style.backgroundColor = o.confirmButtonColor), w(e, p['default-outline']));
					o.denyButtonColor && ((t.style.backgroundColor = o.denyButtonColor), w(t, p['default-outline']));
					o.cancelButtonColor &&
						((n.style.backgroundColor = o.cancelButtonColor), w(n, p['default-outline']));
				})(i, r, a, o),
				o.reverseButtons &&
					(o.toast
						? (s.insertBefore(a, i), s.insertBefore(r, i))
						: (s.insertBefore(a, n), s.insertBefore(r, n), s.insertBefore(i, n))),
				y(c, t.loaderHtml),
				v(c, t, 'loader');
		};
	function je(e, t, n) {
		he(e, n['show'.concat(q(t), 'Button')], 'inline-block'),
			y(e, n[''.concat(t, 'ButtonText')]),
			e.setAttribute('aria-label', n[''.concat(t, 'ButtonAriaLabel')]),
			(e.className = p[t]),
			v(e, n, ''.concat(t, 'Button')),
			w(e, n[''.concat(t, 'ButtonClass')]);
	}
	const He = (e, t) => {
		var n,
			o,
			i = m();
		i &&
			((o = i),
			'string' == typeof (n = t.backdrop)
				? (o.style.background = n)
				: n || w([document.documentElement, document.body], p['no-backdrop']),
			(o = i),
			(n = t.position) in p
				? w(o, p[n])
				: (r('The "position" parameter is not valid, defaulting to "center"'), w(o, p.center)),
			(n = i),
			(o = t.grow) && 'string' == typeof o && (o = 'grow-'.concat(o)) in p && w(n, p[o]),
			v(i, t, 'container'));
	};
	var T = {
		awaitingPromise: new WeakMap(),
		promise: new WeakMap(),
		innerParams: new WeakMap(),
		domCache: new WeakMap(),
	};
	const Ie = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'],
		De = (e, a) => {
			const s = g();
			var t,
				e = T.innerParams.get(e);
			const c = !e || a.input !== e.input;
			Ie.forEach((e) => {
				const t = A(s, p[e]);
				{
					var n = e,
						o = a.inputAttributes;
					const i = de(g(), n);
					if (i) {
						qe(i);
						for (const r in o) i.setAttribute(r, o[r]);
					}
				}
				(t.className = p[e]), c && B(t);
			}),
				a.input &&
					(c &&
						((e) => {
							if (!L[e.input])
								return l(
									'Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(
										e.input,
										'"'
									)
								);
							const t = Re(e.input),
								n = L[e.input](t, e);
							k(t),
								setTimeout(() => {
									pe(n);
								});
						})(a),
					(e = a),
					(t = Re(e.input)),
					'object' == typeof e.customClass && w(t, e.customClass.input));
		},
		qe = (t) => {
			for (let e = 0; e < t.attributes.length; e++) {
				var n = t.attributes[e].name;
				['type', 'value', 'style'].includes(n) || t.removeAttribute(n);
			}
		},
		Ve = (e, t) => {
			(e.placeholder && !t.inputPlaceholder) || (e.placeholder = t.inputPlaceholder);
		},
		Ne = (e, t, n) => {
			if (n.inputLabel) {
				e.id = p.input;
				const i = document.createElement('label');
				var o = p['input-label'];
				i.setAttribute('for', e.id),
					(i.className = o),
					'object' == typeof n.customClass && w(i, n.customClass.inputLabel),
					(i.innerText = n.inputLabel),
					t.insertAdjacentElement('beforebegin', i);
			}
		},
		Re = (e) => A(g(), p[e] || p.input),
		Fe = (e, t) => {
			['string', 'number'].includes(typeof t)
				? (e.value = ''.concat(t))
				: U(t) ||
				  r(
						'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
							typeof t,
							'"'
						)
				  );
		},
		L = {},
		Ue =
			((L.text =
				L.email =
				L.password =
				L.number =
				L.tel =
				L.url =
					(e, t) => (Fe(e, t.inputValue), Ne(e, e, t), Ve(e, t), (e.type = t.input), e)),
			(L.file = (e, t) => (Ne(e, e, t), Ve(e, t), e)),
			(L.range = (e, t) => {
				const n = e.querySelector('input');
				var o = e.querySelector('output');
				return Fe(n, t.inputValue), (n.type = t.input), Fe(o, t.inputValue), Ne(n, e, t), e;
			}),
			(L.select = (e, t) => {
				if (((e.textContent = ''), t.inputPlaceholder)) {
					const n = document.createElement('option');
					y(n, t.inputPlaceholder), (n.value = ''), (n.disabled = !0), (n.selected = !0), e.appendChild(n);
				}
				return Ne(e, e, t), e;
			}),
			(L.radio = (e) => ((e.textContent = ''), e)),
			(L.checkbox = (e, t) => {
				const n = de(g(), 'checkbox');
				(n.value = '1'), (n.id = p.checkbox), (n.checked = Boolean(t.inputValue));
				e = e.querySelector('span');
				return y(e, t.inputPlaceholder), n;
			}),
			(L.textarea = (n, e) => {
				Fe(n, e.inputValue), Ve(n, e), Ne(n, n, e);
				return (
					setTimeout(() => {
						if ('MutationObserver' in window) {
							const t = parseInt(window.getComputedStyle(g()).width);
							new MutationObserver(() => {
								var e =
									n.offsetWidth +
									((e = n),
									parseInt(window.getComputedStyle(e).marginLeft) +
										parseInt(window.getComputedStyle(e).marginRight));
								e > t ? (g().style.width = ''.concat(e, 'px')) : (g().style.width = null);
							}).observe(n, { attributes: !0, attributeFilter: ['style'] });
						}
					}),
					n
				);
			}),
			(e, t) => {
				const n = G();
				v(n, t, 'htmlContainer'),
					t.html ? (Le(t.html, n), k(n, 'block')) : t.text ? ((n.textContent = t.text), k(n, 'block')) : B(n),
					De(e, t);
			}),
		We = (e, t) => {
			var n = oe();
			he(n, t.footer), t.footer && Le(t.footer, n), v(n, t, 'footer');
		},
		ze = (e, t) => {
			const n = re();
			y(n, t.closeButtonHtml),
				v(n, t, 'closeButton'),
				he(n, t.showCloseButton),
				n.setAttribute('aria-label', t.closeButtonAriaLabel);
		},
		Ke = (e, t) => {
			var e = T.innerParams.get(e),
				n = $();
			e && t.icon === e.icon
				? ($e(n, t), _e(n, t))
				: t.icon || t.iconHtml
				? t.icon && -1 === Object.keys(o).indexOf(t.icon)
					? (l(
							'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
								t.icon,
								'"'
							)
					  ),
					  B(n))
					: (k(n), $e(n, t), _e(n, t), w(n, t.showClass.icon))
				: B(n);
		},
		_e = (e, t) => {
			for (const n in o) t.icon !== n && C(e, o[n]);
			w(e, o[t.icon]), Je(e, t), Ye(), v(e, t, 'icon');
		},
		Ye = () => {
			const e = g();
			var t = window.getComputedStyle(e).getPropertyValue('background-color');
			const n = e.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
			for (let e = 0; e < n.length; e++) n[e].style.backgroundColor = t;
		},
		Ze =
			'\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',
		Xe =
			'\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n',
		$e = (e, t) => {
			let n = e.innerHTML,
				o;
			var i;
			t.iconHtml
				? (o = Ge(t.iconHtml))
				: 'success' === t.icon
				? ((o = Ze), (n = n.replace(/ style=".*?"/g, '')))
				: (o = 'error' === t.icon ? Xe : ((i = { question: '?', warning: '!', info: 'i' }), Ge(i[t.icon]))),
				n.trim() !== o.trim() && y(e, o);
		},
		Je = (e, t) => {
			if (t.iconColor) {
				(e.style.color = t.iconColor), (e.style.borderColor = t.iconColor);
				for (const n of [
					'.swal2-success-line-tip',
					'.swal2-success-line-long',
					'.swal2-x-mark-line-left',
					'.swal2-x-mark-line-right',
				])
					ge(e, n, 'backgroundColor', t.iconColor);
				ge(e, '.swal2-success-ring', 'borderColor', t.iconColor);
			}
		},
		Ge = (e) => '<div class="'.concat(p['icon-content'], '">').concat(e, '</div>'),
		Qe = (e, t) => {
			const n = Q();
			if (!t.imageUrl) return B(n);
			k(n, ''),
				n.setAttribute('src', t.imageUrl),
				n.setAttribute('alt', t.imageAlt),
				c(n, 'width', t.imageWidth),
				c(n, 'height', t.imageHeight),
				(n.className = p.image),
				v(n, t, 'image');
		},
		et = (e, n) => {
			const o = ee();
			if (!n.progressSteps || 0 === n.progressSteps.length) return B(o);
			k(o),
				(o.textContent = ''),
				n.currentProgressStep >= n.progressSteps.length &&
					r(
						'Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)'
					),
				n.progressSteps.forEach((e, t) => {
					var e = ((e) => {
						const t = document.createElement('li');
						return w(t, p['progress-step']), y(t, e), t;
					})(e);
					o.appendChild(e),
						t === n.currentProgressStep && w(e, p['active-progress-step']),
						t !== n.progressSteps.length - 1 &&
							((e = ((e) => {
								const t = document.createElement('li');
								if ((w(t, p['progress-step-line']), e.progressStepsDistance))
									c(t, 'width', e.progressStepsDistance);
								return t;
							})(n)),
							o.appendChild(e));
				});
		},
		tt = (e, t) => {
			const n = J();
			he(n, t.title || t.titleText, 'block'),
				t.title && Le(t.title, n),
				t.titleText && (n.innerText = t.titleText),
				v(n, t, 'title');
		},
		nt = (e, t) => {
			var n = m();
			const o = g();
			t.toast
				? (c(n, 'width', t.width), (o.style.width = '100%'), o.insertBefore(d(), $()))
				: c(o, 'width', t.width),
				c(o, 'padding', t.padding),
				t.color && (o.style.color = t.color),
				t.background && (o.style.background = t.background),
				B(te());
			n = o;
			((n.className = ''.concat(p.popup, ' ').concat(P(n) ? t.showClass.popup : '')), t.toast)
				? (w([document.documentElement, document.body], p['toast-shown']), w(n, p.toast))
				: w(n, p.modal);
			v(n, t, 'popup'), 'string' == typeof t.customClass && w(n, t.customClass);
			t.icon && w(n, p['icon-'.concat(t.icon)]);
		},
		ot = (e, t) => {
			nt(e, t),
				He(e, t),
				et(e, t),
				Ke(e, t),
				Qe(e, t),
				tt(e, t),
				ze(e, t),
				Ue(e, t),
				Me(e, t),
				We(e, t),
				'function' == typeof t.didRender && t.didRender(g());
		},
		S = Object.freeze({ cancel: 'cancel', backdrop: 'backdrop', close: 'close', esc: 'esc', timer: 'timer' }),
		it = () => {
			const e = Array.from(document.body.children);
			e.forEach((e) => {
				e === m() ||
					e.contains(m()) ||
					(e.hasAttribute('aria-hidden') &&
						e.setAttribute('data-previous-aria-hidden', e.getAttribute('aria-hidden')),
					e.setAttribute('aria-hidden', 'true'));
			});
		},
		rt = () => {
			const e = Array.from(document.body.children);
			e.forEach((e) => {
				e.hasAttribute('data-previous-aria-hidden')
					? (e.setAttribute('aria-hidden', e.getAttribute('data-previous-aria-hidden')),
					  e.removeAttribute('data-previous-aria-hidden'))
					: e.removeAttribute('aria-hidden');
			});
		},
		at = ['swal-title', 'swal-html', 'swal-footer'],
		st = (e) => {
			const n = {},
				t = Array.from(e.querySelectorAll('swal-param'));
			return (
				t.forEach((e) => {
					O(e, ['name', 'value']);
					var t = e.getAttribute('name'),
						e = e.getAttribute('value');
					'boolean' == typeof i[t] && 'false' === e && (n[t] = !1),
						'object' == typeof i[t] && (n[t] = JSON.parse(e));
				}),
				n
			);
		},
		ct = (e) => {
			const n = {},
				t = Array.from(e.querySelectorAll('swal-button'));
			return (
				t.forEach((e) => {
					O(e, ['type', 'color', 'aria-label']);
					var t = e.getAttribute('type');
					(n[''.concat(t, 'ButtonText')] = e.innerHTML),
						(n['show'.concat(q(t), 'Button')] = !0),
						e.hasAttribute('color') && (n[''.concat(t, 'ButtonColor')] = e.getAttribute('color')),
						e.hasAttribute('aria-label') &&
							(n[''.concat(t, 'ButtonAriaLabel')] = e.getAttribute('aria-label'));
				}),
				n
			);
		},
		lt = (e) => {
			const t = {},
				n = e.querySelector('swal-image');
			return (
				n &&
					(O(n, ['src', 'width', 'height', 'alt']),
					n.hasAttribute('src') && (t.imageUrl = n.getAttribute('src')),
					n.hasAttribute('width') && (t.imageWidth = n.getAttribute('width')),
					n.hasAttribute('height') && (t.imageHeight = n.getAttribute('height')),
					n.hasAttribute('alt') && (t.imageAlt = n.getAttribute('alt'))),
				t
			);
		},
		ut = (e) => {
			const t = {},
				n = e.querySelector('swal-icon');
			return (
				n &&
					(O(n, ['type', 'color']),
					n.hasAttribute('type') && (t.icon = n.getAttribute('type')),
					n.hasAttribute('color') && (t.iconColor = n.getAttribute('color')),
					(t.iconHtml = n.innerHTML)),
				t
			);
		},
		dt = (e) => {
			const n = {},
				t = e.querySelector('swal-input'),
				o =
					(t &&
						(O(t, ['type', 'label', 'placeholder', 'value']),
						(n.input = t.getAttribute('type') || 'text'),
						t.hasAttribute('label') && (n.inputLabel = t.getAttribute('label')),
						t.hasAttribute('placeholder') && (n.inputPlaceholder = t.getAttribute('placeholder')),
						t.hasAttribute('value') && (n.inputValue = t.getAttribute('value'))),
					Array.from(e.querySelectorAll('swal-input-option')));
			return (
				o.length &&
					((n.inputOptions = {}),
					o.forEach((e) => {
						O(e, ['value']);
						var t = e.getAttribute('value'),
							e = e.innerHTML;
						n.inputOptions[t] = e;
					})),
				n
			);
		},
		pt = (e, t) => {
			const n = {};
			for (const o in t) {
				const i = t[o],
					r = e.querySelector(i);
				r && (O(r, []), (n[i.replace(/^swal-/, '')] = r.innerHTML.trim()));
			}
			return n;
		},
		mt = (e) => {
			const t = at.concat([
				'swal-param',
				'swal-button',
				'swal-image',
				'swal-icon',
				'swal-input',
				'swal-input-option',
			]);
			Array.from(e.children).forEach((e) => {
				e = e.tagName.toLowerCase();
				-1 === t.indexOf(e) && r('Unrecognized element <'.concat(e, '>'));
			});
		},
		O = (t, n) => {
			Array.from(t.attributes).forEach((e) => {
				-1 === n.indexOf(e.name) &&
					r([
						'Unrecognized attribute "'.concat(e.name, '" on <').concat(t.tagName.toLowerCase(), '>.'),
						''.concat(
							n.length
								? 'Allowed attributes are: '.concat(n.join(', '))
								: 'To set the value, use HTML within the element.'
						),
					]);
			});
		};
	var gt = {
		email: (e, t) =>
			/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)
				? Promise.resolve()
				: Promise.resolve(t || 'Invalid email address'),
		url: (e, t) =>
			/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)
				? Promise.resolve()
				: Promise.resolve(t || 'Invalid URL'),
	};
	function ht(e) {
		(t = e).inputValidator ||
			Object.keys(gt).forEach((e) => {
				t.input === e && (t.inputValidator = gt[e]);
			}),
			e.showLoaderOnConfirm &&
				!e.preConfirm &&
				r(
					'showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request'
				),
			((n = e).target &&
				('string' != typeof n.target || document.querySelector(n.target)) &&
				('string' == typeof n.target || n.target.appendChild)) ||
				(r('Target parameter is not valid, defaulting to "body"'), (n.target = 'body')),
			'string' == typeof e.title && (e.title = e.title.split('\n').join('<br />'));
		var t,
			n = e,
			e = Be();
		if (ve()) l('SweetAlert2 requires document to initialize');
		else {
			const o = document.createElement('div'),
				i = ((o.className = p.container), e && w(o, p['no-transition']), y(o, ke), xe(n.target));
			i.appendChild(o), Ee(n), Te(i), Pe();
		}
	}
	class ft {
		constructor(e, t) {
			(this.callback = e), (this.remaining = t), (this.running = !1), this.start();
		}
		start() {
			return (
				this.running ||
					((this.running = !0),
					(this.started = new Date()),
					(this.id = setTimeout(this.callback, this.remaining))),
				this.remaining
			);
		}
		stop() {
			return (
				this.running &&
					((this.running = !1),
					clearTimeout(this.id),
					(this.remaining -= new Date().getTime() - this.started.getTime())),
				this.remaining
			);
		}
		increase(e) {
			var t = this.running;
			return t && this.stop(), (this.remaining += e), t && this.start(), this.remaining;
		}
		getTimerLeft() {
			return this.running && (this.stop(), this.start()), this.remaining;
		}
		isRunning() {
			return this.running;
		}
	}
	const bt = () => {
			null === a.previousBodyPadding &&
				document.body.scrollHeight > window.innerHeight &&
				((a.previousBodyPadding = parseInt(
					window.getComputedStyle(document.body).getPropertyValue('padding-right')
				)),
				(document.body.style.paddingRight = ''.concat(
					a.previousBodyPadding +
						(() => {
							const e = document.createElement('div');
							(e.className = p['scrollbar-measure']), document.body.appendChild(e);
							var t = e.getBoundingClientRect().width - e.clientWidth;
							return document.body.removeChild(e), t;
						})(),
					'px'
				)));
		},
		yt = () => {
			null !== a.previousBodyPadding &&
				((document.body.style.paddingRight = ''.concat(a.previousBodyPadding, 'px')),
				(a.previousBodyPadding = null));
		},
		vt = () => {
			if (
				((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) ||
					('MacIntel' === navigator.platform && 1 < navigator.maxTouchPoints)) &&
				!s(document.body, p.iosfix)
			) {
				var e,
					t = document.body.scrollTop;
				(document.body.style.top = ''.concat(-1 * t, 'px')), w(document.body, p.iosfix);
				{
					const n = m();
					let t;
					(n.ontouchstart = (e) => {
						t = wt(e);
					}),
						(n.ontouchmove = (e) => {
							t && (e.preventDefault(), e.stopPropagation());
						});
				}
				{
					const o = navigator.userAgent,
						i = !!o.match(/iPad/i) || !!o.match(/iPhone/i),
						r = !!o.match(/WebKit/i),
						a = i && r && !o.match(/CriOS/i);
					a &&
						((e = 44),
						g().scrollHeight > window.innerHeight - 44 && (m().style.paddingBottom = ''.concat(44, 'px')));
				}
			}
		},
		wt = (e) => {
			var t,
				n = e.target,
				o = m();
			return (
				!(
					((t = e).touches && t.touches.length && 'stylus' === t.touches[0].touchType) ||
					((t = e).touches && 1 < t.touches.length)
				) &&
				(n === o ||
					(!be(o) &&
						n instanceof HTMLElement &&
						'INPUT' !== n.tagName &&
						'TEXTAREA' !== n.tagName &&
						(!be(G()) || !G().contains(n))))
			);
		},
		Ct = () => {
			var e;
			s(document.body, p.iosfix) &&
				((e = parseInt(document.body.style.top, 10)),
				C(document.body, p.iosfix),
				(document.body.style.top = ''),
				(document.body.scrollTop = -1 * e));
		},
		At = 10,
		kt = (e) => {
			const t = g();
			if (e.target === t) {
				const n = m();
				t.removeEventListener(Oe, kt), (n.style.overflowY = 'auto');
			}
		},
		Bt = (e, t) => {
			Oe && ye(t)
				? ((e.style.overflowY = 'hidden'), t.addEventListener(Oe, kt))
				: (e.style.overflowY = 'auto');
		},
		Pt = (e, t, n) => {
			vt(),
				t && 'hidden' !== n && bt(),
				setTimeout(() => {
					e.scrollTop = 0;
				});
		},
		xt = (e, t, n) => {
			w(e, n.showClass.backdrop),
				t.style.setProperty('opacity', '0', 'important'),
				k(t, 'grid'),
				setTimeout(() => {
					w(t, n.showClass.popup), t.style.removeProperty('opacity');
				}, At),
				w([document.documentElement, document.body], p.shown),
				n.heightAuto &&
					n.backdrop &&
					!n.toast &&
					w([document.documentElement, document.body], p['height-auto']);
		},
		M = (e) => {
			let t = g();
			t || new An(), (t = g());
			var n = d();
			if (ce()) B($());
			else {
				var o = t;
				const i = ne(),
					r = d();
				!e && P(h()) && (e = h());
				k(i), e && (B(e), r.setAttribute('data-button-to-replace', e.className));
				r.parentNode.insertBefore(r, e), w([o, i], p.loading);
			}
			k(n), t.setAttribute('data-loading', 'true'), t.setAttribute('aria-busy', 'true'), t.focus();
		},
		Et = (t, n) => {
			const o = g(),
				i = (e) => Lt[n.input](o, St(e), n);
			F(n.inputOptions) || U(n.inputOptions)
				? (M(h()),
				  u(n.inputOptions).then((e) => {
						t.hideLoading(), i(e);
				  }))
				: 'object' == typeof n.inputOptions
				? i(n.inputOptions)
				: l(
						'Unexpected type of inputOptions! Expected object, Map or Promise, got '.concat(
							typeof n.inputOptions
						)
				  );
		},
		Tt = (t, n) => {
			const o = t.getInput();
			B(o),
				u(n.inputValue)
					.then((e) => {
						(o.value = 'number' === n.input ? parseFloat(e) || 0 : ''.concat(e)),
							k(o),
							o.focus(),
							t.hideLoading();
					})
					.catch((e) => {
						l('Error in inputValue promise: '.concat(e)), (o.value = ''), k(o), o.focus(), t.hideLoading();
					});
		},
		Lt = {
			select: (e, t, i) => {
				const r = A(e, p.select),
					a = (e, t, n) => {
						const o = document.createElement('option');
						(o.value = n), y(o, t), (o.selected = Ot(n, i.inputValue)), e.appendChild(o);
					};
				t.forEach((e) => {
					var t = e[0];
					const n = e[1];
					if (Array.isArray(n)) {
						const o = document.createElement('optgroup');
						(o.label = t), (o.disabled = !1), r.appendChild(o), n.forEach((e) => a(o, e[1], e[0]));
					} else a(r, n, t);
				}),
					r.focus();
			},
			radio: (e, t, r) => {
				const a = A(e, p.radio),
					n =
						(t.forEach((e) => {
							var t = e[0],
								e = e[1];
							const n = document.createElement('input'),
								o = document.createElement('label'),
								i =
									((n.type = 'radio'),
									(n.name = p.radio),
									(n.value = t),
									Ot(t, r.inputValue) && (n.checked = !0),
									document.createElement('span'));
							y(i, e), (i.className = p.label), o.appendChild(n), o.appendChild(i), a.appendChild(o);
						}),
						a.querySelectorAll('input'));
				n.length && n[0].focus();
			},
		},
		St = (n) => {
			const o = [];
			return (
				'undefined' != typeof Map && n instanceof Map
					? n.forEach((e, t) => {
							let n = e;
							'object' == typeof n && (n = St(n)), o.push([t, n]);
					  })
					: Object.keys(n).forEach((e) => {
							let t = n[e];
							'object' == typeof t && (t = St(t)), o.push([e, t]);
					  }),
				o
			);
		},
		Ot = (e, t) => t && t.toString() === e.toString();
	function Mt() {
		var e,
			t = T.innerParams.get(this);
		if (t) {
			const n = T.domCache.get(this);
			B(n.loader),
				ce()
					? t.icon && k($())
					: ((t = n),
					  (e = t.popup.getElementsByClassName(t.loader.getAttribute('data-button-to-replace'))).length
							? k(e[0], 'inline-block')
							: fe() && B(t.actions)),
				C([n.popup, n.actions], p.loading),
				n.popup.removeAttribute('aria-busy'),
				n.popup.removeAttribute('data-loading'),
				(n.confirmButton.disabled = !1),
				(n.denyButton.disabled = !1),
				(n.cancelButton.disabled = !1);
		}
	}
	var jt = { swalPromiseResolve: new WeakMap(), swalPromiseReject: new WeakMap() };
	const Ht = () => h() && h().click();
	const It = (e) => {
			e.keydownTarget &&
				e.keydownHandlerAdded &&
				(e.keydownTarget.removeEventListener('keydown', e.keydownHandler, {
					capture: e.keydownListenerCapture,
				}),
				(e.keydownHandlerAdded = !1));
		},
		Dt = (e, t, n) => {
			const o = ae();
			if (o.length) return (t += n) === o.length ? (t = 0) : -1 === t && (t = o.length - 1), o[t].focus();
			g().focus();
		},
		qt = ['ArrowRight', 'ArrowDown'],
		Vt = ['ArrowLeft', 'ArrowUp'],
		Nt = (e, n, t) => {
			var o = T.innerParams.get(e);
			if (o && !n.isComposing && 229 !== n.keyCode)
				if ((o.stopKeydownPropagation && n.stopPropagation(), 'Enter' === n.key))
					(e = e),
						(s = n),
						(i = o),
						R(i.allowEnterKey) &&
							s.target &&
							e.getInput() &&
							s.target instanceof HTMLElement &&
							s.target.outerHTML === e.getInput().outerHTML &&
							(['textarea', 'file'].includes(i.input) || (Ht(), s.preventDefault()));
				else if ('Tab' === n.key) {
					e = n;
					var i = o;
					var r = e.target,
						a = ae();
					let t = -1;
					for (let e = 0; e < a.length; e++)
						if (r === a[e]) {
							t = e;
							break;
						}
					e.shiftKey ? Dt(i, t, -1) : Dt(i, t, 1);
					e.stopPropagation(), e.preventDefault();
				} else if ([...qt, ...Vt].includes(n.key)) {
					var s = n.key;
					const l = h(),
						u = f(),
						d = b();
					if (
						!(document.activeElement instanceof HTMLElement) ||
						[l, u, d].includes(document.activeElement)
					) {
						var c = qt.includes(s) ? 'nextElementSibling' : 'previousElementSibling';
						let t = document.activeElement;
						for (let e = 0; e < ne().children.length; e++) {
							if (!(t = t[c])) return;
							if (t instanceof HTMLButtonElement && P(t)) break;
						}
						t instanceof HTMLButtonElement && t.focus();
					}
				} else if ('Escape' === n.key) {
					(e = n), (n = o), (o = t);
					if (R(n.allowEscapeKey)) {
						e.preventDefault();
						o(S.esc);
					}
				}
		};
	function Rt(e, t, n, o) {
		ce() ? zt(e, o) : (Ae(n).then(() => zt(e, o)), It(x)),
			/^((?!chrome|android).)*safari/i.test(navigator.userAgent)
				? (t.setAttribute('style', 'display:none !important'), t.removeAttribute('class'), (t.innerHTML = ''))
				: t.remove(),
			se() && (yt(), Ct(), rt()),
			C(
				[document.documentElement, document.body],
				[p.shown, p['height-auto'], p['no-backdrop'], p['toast-shown']]
			);
	}
	function Ft(e) {
		e =
			void 0 !== (n = e)
				? Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, n)
				: { isConfirmed: !1, isDenied: !1, isDismissed: !0 };
		const t = jt.swalPromiseResolve.get(this);
		var n = ((e) => {
			const t = g();
			if (!t) return false;
			const n = T.innerParams.get(e);
			if (!n || s(t, n.hideClass.popup)) return false;
			C(t, n.showClass.popup), w(t, n.hideClass.popup);
			const o = m();
			return C(o, n.showClass.backdrop), w(o, n.hideClass.backdrop), Wt(e, t, n), true;
		})(this);
		this.isAwaitingPromise() ? e.isDismissed || (Ut(this), t(e)) : n && t(e);
	}
	const Ut = (e) => {
			e.isAwaitingPromise() && (T.awaitingPromise.delete(e), T.innerParams.get(e) || e._destroy());
		},
		Wt = (e, t, n) => {
			var o,
				i,
				r,
				a = m(),
				s = Oe && ye(t);
			'function' == typeof n.willClose && n.willClose(t),
				s
					? ((s = e),
					  (o = t),
					  (t = a),
					  (i = n.returnFocus),
					  (r = n.didClose),
					  (x.swalCloseEventFinishedCallback = Rt.bind(null, s, t, i, r)),
					  o.addEventListener(Oe, function (e) {
							e.target === o && (x.swalCloseEventFinishedCallback(), delete x.swalCloseEventFinishedCallback);
					  }))
					: Rt(e, a, n.returnFocus, n.didClose);
		},
		zt = (e, t) => {
			setTimeout(() => {
				'function' == typeof t && t.bind(e.params)(), e._destroy();
			});
		};
	function Kt(e, t, n) {
		const o = T.domCache.get(e);
		t.forEach((e) => {
			o[e].disabled = n;
		});
	}
	function _t(e, t) {
		if (!e) return !1;
		if ('radio' === e.type) {
			const n = e.parentNode.parentNode,
				o = n.querySelectorAll('input');
			for (let e = 0; e < o.length; e++) o[e].disabled = t;
		} else e.disabled = t;
	}
	const Yt = (e) => {
			e.isAwaitingPromise() ? (Zt(T, e), T.awaitingPromise.set(e, !0)) : (Zt(jt, e), Zt(T, e));
		},
		Zt = (e, t) => {
			for (const n in e) e[n].delete(t);
		};
	e = Object.freeze({
		hideLoading: Mt,
		disableLoading: Mt,
		getInput: function (e) {
			var t = T.innerParams.get(e || this);
			return (e = T.domCache.get(e || this)) ? de(e.popup, t.input) : null;
		},
		close: Ft,
		isAwaitingPromise: function () {
			return !!T.awaitingPromise.get(this);
		},
		rejectPromise: function (e) {
			const t = jt.swalPromiseReject.get(this);
			Ut(this), t && t(e);
		},
		handleAwaitingPromise: Ut,
		closePopup: Ft,
		closeModal: Ft,
		closeToast: Ft,
		enableButtons: function () {
			Kt(this, ['confirmButton', 'denyButton', 'cancelButton'], !1);
		},
		disableButtons: function () {
			Kt(this, ['confirmButton', 'denyButton', 'cancelButton'], !0);
		},
		enableInput: function () {
			return _t(this.getInput(), !1);
		},
		disableInput: function () {
			return _t(this.getInput(), !0);
		},
		showValidationMessage: function (e) {
			const t = T.domCache.get(this);
			var n = T.innerParams.get(this);
			y(t.validationMessage, e),
				(t.validationMessage.className = p['validation-message']),
				n.customClass &&
					n.customClass.validationMessage &&
					w(t.validationMessage, n.customClass.validationMessage),
				k(t.validationMessage);
			const o = this.getInput();
			o &&
				(o.setAttribute('aria-invalid', !0),
				o.setAttribute('aria-describedby', p['validation-message']),
				pe(o),
				w(o, p.inputerror));
		},
		resetValidationMessage: function () {
			var e = T.domCache.get(this);
			e.validationMessage && B(e.validationMessage);
			const t = this.getInput();
			t && (t.removeAttribute('aria-invalid'), t.removeAttribute('aria-describedby'), C(t, p.inputerror));
		},
		getProgressSteps: function () {
			return T.domCache.get(this).progressSteps;
		},
		update: function (e) {
			var t = g(),
				n = T.innerParams.get(this);
			if (!t || s(t, n.hideClass.popup))
				return r(
					"You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
				);
			(t = ((t) => {
				const n = {};
				return (
					Object.keys(t).forEach((e) => {
						if (Y(e)) n[e] = t[e];
						else r('Invalid parameter to update: '.concat(e));
					}),
					n
				);
			})(e)),
				(n = Object.assign({}, n, t)),
				ot(this, n),
				T.innerParams.set(this, n),
				Object.defineProperties(this, {
					params: { value: Object.assign({}, this.params, e), writable: !1, enumerable: !0 },
				});
		},
		_destroy: function () {
			var e = T.domCache.get(this);
			const t = T.innerParams.get(this);
			t
				? (e.popup &&
						x.swalCloseEventFinishedCallback &&
						(x.swalCloseEventFinishedCallback(), delete x.swalCloseEventFinishedCallback),
				  'function' == typeof t.didDestroy && t.didDestroy(),
				  (e = this),
				  Yt(e),
				  delete e.params,
				  delete x.keydownHandler,
				  delete x.keydownTarget,
				  delete x.currentInstance)
				: Yt(this);
		},
	});
	const Xt = (e, t) => {
			var n = T.innerParams.get(e);
			if (n.input) {
				var o = ((e, t) => {
					const n = e.getInput();
					if (!n) return null;
					switch (t.input) {
						case 'checkbox':
							return n.checked ? 1 : 0;
						case 'radio':
							return (o = n).checked ? o.value : null;
						case 'file':
							return (o = n).files.length
								? null !== o.getAttribute('multiple')
									? o.files
									: o.files[0]
								: null;
						default:
							return t.inputAutoTrim ? n.value.trim() : n.value;
					}
					var o;
				})(e, n);
				if (n.inputValidator) {
					var i = e;
					var r = o;
					var a = t;
					const s = T.innerParams.get(i),
						c = (i.disableInput(), Promise.resolve().then(() => u(s.inputValidator(r, s.validationMessage))));
					c.then((e) => {
						i.enableButtons(),
							i.enableInput(),
							e ? i.showValidationMessage(e) : ('deny' === a ? $t : Qt)(i, r);
					});
				} else
					e.getInput().checkValidity()
						? ('deny' === t ? $t : Qt)(e, o)
						: (e.enableButtons(), e.showValidationMessage(n.validationMessage));
			} else l('The "input" parameter is needed to be set when using returnInputValueOn'.concat(q(t)));
		},
		$t = (t, n) => {
			const e = T.innerParams.get(t || void 0);
			if ((e.showLoaderOnDeny && M(f()), e.preDeny)) {
				T.awaitingPromise.set(t || void 0, !0);
				const o = Promise.resolve().then(() => u(e.preDeny(n, e.validationMessage)));
				o.then((e) => {
					!1 === e ? (t.hideLoading(), Ut(t)) : t.close({ isDenied: !0, value: void 0 === e ? n : e });
				}).catch((e) => Gt(t || void 0, e));
			} else t.close({ isDenied: !0, value: n });
		},
		Jt = (e, t) => {
			e.close({ isConfirmed: !0, value: t });
		},
		Gt = (e, t) => {
			e.rejectPromise(t);
		},
		Qt = (t, n) => {
			const e = T.innerParams.get(t || void 0);
			if ((e.showLoaderOnConfirm && M(), e.preConfirm)) {
				t.resetValidationMessage(), T.awaitingPromise.set(t || void 0, !0);
				const o = Promise.resolve().then(() => u(e.preConfirm(n, e.validationMessage)));
				o.then((e) => {
					P(te()) || !1 === e ? (t.hideLoading(), Ut(t)) : Jt(t, void 0 === e ? n : e);
				}).catch((e) => Gt(t || void 0, e));
			} else Jt(t, n);
		},
		en = (n, e, o) => {
			e.popup.onclick = () => {
				var e,
					t = T.innerParams.get(n);
				(t &&
					((e = t).showConfirmButton ||
						e.showDenyButton ||
						e.showCancelButton ||
						e.showCloseButton ||
						t.timer ||
						t.input)) ||
					o(S.close);
			};
		};
	let tn = !1;
	const nn = (t) => {
			t.popup.onmousedown = () => {
				t.container.onmouseup = function (e) {
					(t.container.onmouseup = void 0), e.target === t.container && (tn = !0);
				};
			};
		},
		on = (t) => {
			t.container.onmousedown = () => {
				t.popup.onmouseup = function (e) {
					(t.popup.onmouseup = void 0), (e.target !== t.popup && !t.popup.contains(e.target)) || (tn = !0);
				};
			};
		},
		rn = (n, o, i) => {
			o.container.onclick = (e) => {
				var t = T.innerParams.get(n);
				tn ? (tn = !1) : e.target === o.container && R(t.allowOutsideClick) && i(S.backdrop);
			};
		},
		an = (e) => 'object' == typeof e && e.jquery,
		sn = (e) => e instanceof Element || an(e);
	const cn = () => {
			if (x.timeout) {
				{
					const n = ie();
					var e = parseInt(window.getComputedStyle(n).width),
						t =
							(n.style.removeProperty('transition'),
							(n.style.width = '100%'),
							parseInt(window.getComputedStyle(n).width)),
						e = (e / t) * 100;
					n.style.removeProperty('transition'), (n.style.width = ''.concat(e, '%'));
				}
				return x.timeout.stop();
			}
		},
		ln = () => {
			var e;
			if (x.timeout) return (e = x.timeout.start()), le(e), e;
		};
	let un = !1;
	const dn = {};
	const pn = (t) => {
		for (let e = t.target; e && e !== document; e = e.parentNode)
			for (const o in dn) {
				var n = e.getAttribute(o);
				if (n) return void dn[o].fire({ template: n });
			}
	};
	var mn = Object.freeze({
		isValidParameter: _,
		isUpdatableParameter: Y,
		isDeprecatedParameter: Z,
		argsToParams: (n) => {
			const o = {};
			return (
				'object' != typeof n[0] || sn(n[0])
					? ['title', 'html', 'icon'].forEach((e, t) => {
							t = n[t];
							'string' == typeof t || sn(t)
								? (o[e] = t)
								: void 0 !== t &&
								  l(
										'Unexpected type of '.concat(e, '! Expected "string" or "Element", got ').concat(typeof t)
								  );
					  })
					: Object.assign(o, n[0]),
				o
			);
		},
		isVisible: () => P(g()),
		clickConfirm: Ht,
		clickDeny: () => f() && f().click(),
		clickCancel: () => b() && b().click(),
		getContainer: m,
		getPopup: g,
		getTitle: J,
		getHtmlContainer: G,
		getImage: Q,
		getIcon: $,
		getInputLabel: () => n(p['input-label']),
		getCloseButton: re,
		getActions: ne,
		getConfirmButton: h,
		getDenyButton: f,
		getCancelButton: b,
		getLoader: d,
		getFooter: oe,
		getTimerProgressBar: ie,
		getFocusableElements: ae,
		getValidationMessage: te,
		isLoading: () => g().hasAttribute('data-loading'),
		fire: function () {
			for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
			return new this(...t);
		},
		mixin: function (n) {
			class e extends this {
				_main(e, t) {
					return super._main(e, Object.assign({}, n, t));
				}
			}
			return e;
		},
		showLoading: M,
		enableLoading: M,
		getTimerLeft: () => x.timeout && x.timeout.getTimerLeft(),
		stopTimer: cn,
		resumeTimer: ln,
		toggleTimer: () => {
			var e = x.timeout;
			return e && (e.running ? cn : ln)();
		},
		increaseTimer: (e) => {
			if (x.timeout) return (e = x.timeout.increase(e)), le(e, !0), e;
		},
		isTimerRunning: () => x.timeout && x.timeout.isRunning(),
		bindClickHandler: function () {
			var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 'data-swal-template';
			(dn[e] = this), un || (document.body.addEventListener('click', pn), (un = !0));
		},
	});
	let j;
	class H {
		constructor() {
			if ('undefined' != typeof window) {
				j = this;
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				var o = Object.freeze(this.constructor.argsToParams(t)),
					o =
						(Object.defineProperties(this, {
							params: { value: o, writable: !1, enumerable: !0, configurable: !0 },
						}),
						j._main(j.params));
				T.promise.set(this, o);
			}
		}
		_main(e) {
			var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
				e =
					(X(Object.assign({}, t, e)),
					x.currentInstance && (x.currentInstance._destroy(), se() && rt()),
					(x.currentInstance = j),
					hn(e, t)),
				t =
					(ht(e),
					Object.freeze(e),
					x.timeout && (x.timeout.stop(), delete x.timeout),
					clearTimeout(x.restoreFocusTimeout),
					fn(j));
			return ot(j, e), T.innerParams.set(j, e), gn(j, t, e);
		}
		then(e) {
			const t = T.promise.get(this);
			return t.then(e);
		}
		finally(e) {
			const t = T.promise.get(this);
			return t.finally(e);
		}
	}
	const gn = (l, u, d) =>
			new Promise((e, t) => {
				const n = (e) => {
					l.closePopup({ isDismissed: !0, dismiss: e });
				};
				var o, i, r;
				jt.swalPromiseResolve.set(l, e),
					jt.swalPromiseReject.set(l, t),
					(u.confirmButton.onclick = () => {
						var e = l,
							t = T.innerParams.get(e);
						e.disableButtons(), t.input ? Xt(e, 'confirm') : Qt(e, !0);
					}),
					(u.denyButton.onclick = () => {
						var e = l,
							t = T.innerParams.get(e);
						e.disableButtons(), t.returnInputValueOnDeny ? Xt(e, 'deny') : $t(e, !1);
					}),
					(u.cancelButton.onclick = () => {
						var e = l,
							t = n;
						e.disableButtons(), t(S.cancel);
					}),
					(u.closeButton.onclick = () => n(S.close)),
					(e = l),
					(t = u),
					(r = n),
					T.innerParams.get(e).toast ? en(e, t, r) : (nn(t), on(t), rn(e, t, r)),
					(o = l),
					(e = x),
					(t = d),
					(i = n),
					It(e),
					t.toast ||
						((e.keydownHandler = (e) => Nt(o, e, i)),
						(e.keydownTarget = t.keydownListenerCapture ? window : g()),
						(e.keydownListenerCapture = t.keydownListenerCapture),
						e.keydownTarget.addEventListener('keydown', e.keydownHandler, {
							capture: e.keydownListenerCapture,
						}),
						(e.keydownHandlerAdded = !0)),
					(r = l),
					'select' === (t = d).input || 'radio' === t.input
						? Et(r, t)
						: ['text', 'email', 'number', 'tel', 'textarea'].includes(t.input) &&
						  (F(t.inputValue) || U(t.inputValue)) &&
						  (M(h()), Tt(r, t));
				{
					var a = d;
					const s = m(),
						c = g();
					'function' == typeof a.willOpen && a.willOpen(c),
						(e = window.getComputedStyle(document.body).overflowY),
						xt(s, c, a),
						setTimeout(() => {
							Bt(s, c);
						}, At),
						se() && (Pt(s, a.scrollbarPadding, e), it()),
						ce() || x.previousActiveElement || (x.previousActiveElement = document.activeElement),
						'function' == typeof a.didOpen && setTimeout(() => a.didOpen(c)),
						C(s, p['no-transition']);
				}
				bn(x, d, n),
					yn(u, d),
					setTimeout(() => {
						u.container.scrollTop = 0;
					});
			}),
		hn = (e, t) => {
			var n = ((e) => {
				e = 'string' == typeof e.template ? document.querySelector(e.template) : e.template;
				if (!e) return {};
				(e = e.content), mt(e), (e = Object.assign(st(e), ct(e), lt(e), ut(e), dt(e), pt(e, at)));
				return e;
			})(e);
			const o = Object.assign({}, i, t, n, e);
			return (
				(o.showClass = Object.assign({}, i.showClass, o.showClass)),
				(o.hideClass = Object.assign({}, i.hideClass, o.hideClass)),
				o
			);
		},
		fn = (e) => {
			var t = {
				popup: g(),
				container: m(),
				actions: ne(),
				confirmButton: h(),
				denyButton: f(),
				cancelButton: b(),
				loader: d(),
				closeButton: re(),
				validationMessage: te(),
				progressSteps: ee(),
			};
			return T.domCache.set(e, t), t;
		},
		bn = (e, t, n) => {
			var o = ie();
			B(o),
				t.timer &&
					((e.timeout = new ft(() => {
						n('timer'), delete e.timeout;
					}, t.timer)),
					t.timerProgressBar &&
						(k(o),
						v(o, t, 'timerProgressBar'),
						setTimeout(() => {
							e.timeout && e.timeout.running && le(t.timer);
						})));
		},
		yn = (e, t) => {
			if (!t.toast) return R(t.allowEnterKey) ? void (vn(e, t) || Dt(t, -1, 1)) : wn();
		},
		vn = (e, t) =>
			t.focusDeny && P(e.denyButton)
				? (e.denyButton.focus(), !0)
				: t.focusCancel && P(e.cancelButton)
				? (e.cancelButton.focus(), !0)
				: !(!t.focusConfirm || !P(e.confirmButton)) && (e.confirmButton.focus(), !0),
		wn = () => {
			document.activeElement instanceof HTMLElement &&
				'function' == typeof document.activeElement.blur &&
				document.activeElement.blur();
		};
	if (
		'undefined' != typeof window &&
		/^ru\b/.test(navigator.language) &&
		location.host.match(/\.(ru|su|xn--p1ai)$/) &&
		Math.random() < 0.1
	) {
		const I = document.createElement('div');
		I.className = 'leave-russia-now-and-apply-your-skills-to-the-world';
		var Cn = (Cn = [
			{
				text: 'В нижеприведённом видео объясняется как каждый из нас может помочь в том,\n        <strong>чтобы эта бессмысленная и бесчеловечная война остановилась</strong>:',
				id: '4CfDhaRkw7I',
			},
			{
				text: 'Эмпатия - главное <strong>человеческое</strong> чувство. Способность сопереживать. <strong>Способность поставить себя на место другого.</strong>',
				id: 's-GLAIY4DXA',
			},
		])[Math.floor(Math.random() * Cn.length)];
		y(
			I,
			'\n      <div>\n        Если мы не остановим войну, она придет в дом <strong>каждого из нас</strong> и её последствия будут <strong>ужасающими</strong>.\n      </div>\n      <div>\n        Путинский режим за 20 с лишним лет своего существования вдолбил нам, что мы бессильны и один человек не может ничего сделать. <strong>Это не так!</strong>\n      </div>\n      <div>\n        '
				.concat(
					Cn.text,
					'\n      </div>\n      <iframe width="560" height="315" src="https://www.youtube.com/embed/'
				)
				.concat(
					Cn.id,
					'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n      <div>\n        Нет войне!\n      </div>\n      '
				)
		);
		const kn = document.createElement('button');
		(kn.innerHTML = '&times;'),
			(kn.onclick = () => I.remove()),
			I.appendChild(kn),
			window.addEventListener('load', () => {
				setTimeout(() => {
					document.body.appendChild(I);
				}, 1e3);
			});
	}
	Object.assign(H.prototype, e),
		Object.assign(H, mn),
		Object.keys(e).forEach((e) => {
			H[e] = function () {
				if (j) return j[e](...arguments);
			};
		}),
		(H.DismissReason = S),
		(H.version = '11.4.28');
	const An = H;
	return (An.default = An);
}),
	void 0 !== this &&
		this.Sweetalert2 &&
		(this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);
'undefined' != typeof document &&
	(function (e, t) {
		var n = e.createElement('style');
		if ((e.getElementsByTagName('head')[0].appendChild(n), n.styleSheet))
			n.styleSheet.disabled || (n.styleSheet.cssText = t);
		else
			try {
				n.innerHTML = t;
			} catch (e) {
				n.innerText = t;
			}
	})(
		document,
		'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px hsla(0deg,0%,0%,.075),0 1px 2px hsla(0deg,0%,0%,.075),1px 2px 4px hsla(0deg,0%,0%,.075),1px 3px 8px hsla(0deg,0%,0%,.075),2px 4px 16px hsla(0deg,0%,0%,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:0 0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:0 0;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:0 0;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:0 0;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.leave-russia-now-and-apply-your-skills-to-the-world{display:flex;position:fixed;z-index:1939;top:0;right:0;bottom:0;left:0;flex-direction:column;align-items:center;justify-content:center;padding:25px 0 20px;background:#20232a;color:#fff;text-align:center}.leave-russia-now-and-apply-your-skills-to-the-world div{max-width:560px;margin:10px;line-height:146%}.leave-russia-now-and-apply-your-skills-to-the-world iframe{max-width:100%;max-height:55.5555555556vmin;margin:16px auto}.leave-russia-now-and-apply-your-skills-to-the-world strong{border-bottom:2px dashed #fff}.leave-russia-now-and-apply-your-skills-to-the-world button{display:flex;position:fixed;z-index:1940;top:0;right:0;align-items:center;justify-content:center;width:48px;height:48px;margin-right:10px;margin-bottom:-10px;border:none;background:0 0;color:#aaa;font-size:48px;font-weight:700;cursor:pointer}.leave-russia-now-and-apply-your-skills-to-the-world button:hover{color:#fff}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}'
	);
