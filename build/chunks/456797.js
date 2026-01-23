/** Chunk was on web.js **/
/** chunk id: 456797, original params: e,t,n (module,exports,require) **/
"use strict";

function r(e, t, n) {
    return new MouseEvent(e, {
        screenX: t,
        screenY: n,
        clientX: t,
        clientY: n,
        bubbles: !0,
        view: window
    })
}

function i(e, t, n) {
    let r = document.elementFromPoint(t, n);
    if (null == r) throw Error();
    r.dispatchEvent(e)
}
n.d(t, {
    K: () => i,
    _: () => r
}), n(65821)