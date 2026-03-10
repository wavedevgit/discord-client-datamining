/** chunk id: 768841 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(73153),
    a = n(272355),
    r = n(296838),
    o = n(946974);
class c extends a.A {
    _initialize() {
        l.h.subscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts), l.h.subscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts)
    }
    _terminate() {
        l.h.unsubscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts), l.h.unsubscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts)
    }
    showKeyboardShortcuts() {
        (0, s.qfG)(e => (0, i.jsx)(r.A, {
            ...e
        }), {
            modalKey: o.P
        })
    }
    hideKeyboardShortcuts() {
        (0, s.OoC)(o.P)
    }
}
let d = new c