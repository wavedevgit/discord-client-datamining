/** chunk id: 260762, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(884362),
    i = n(311907),
    a = n(775602);

function o() {
    return Promise.resolve()
}

function s(e) {
    let t = document.querySelector(e);
    null != t && t.focus()
}

function l(e, t) {
    let n = (0, i.bG)([a.A], () => a.A.keyboardModeEnabled);
    return (0, r.Ay)({
        id: e,
        isEnabled: n,
        orientation: t,
        setFocus: s,
        scrollToStart: o,
        scrollToEnd: o
    })
}