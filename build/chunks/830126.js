/** chunk id: 830126, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
});
var r = n(775602),
    i = n(652215);

function a(e, t, n) {
    var a, o, s, l, c, u, d, f;
    let p = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    return {
        key: null != (a = null != (o = t.key) ? o : p) ? a : "modal",
        modal: e,
        animation: null != (s = t.animation) ? s : r.A.useReducedMotion ? i.WMy.FADE : i.WMy.SLIDE_UP,
        shouldPersistUnderModals: null != (l = t.shouldPersistUnderModals) && l,
        props: n,
        backdropStyle: null != (c = t.backdropStyle) ? c : null,
        backdropInstant: null != (u = t.backdropInstant) && u,
        disableAnimation: null != (d = t.disableAnimation) && d,
        closable: "boolean" != typeof t.closable || t.closable,
        label: null != (f = t.label) ? f : "",
        callbacks: {}
    }
}