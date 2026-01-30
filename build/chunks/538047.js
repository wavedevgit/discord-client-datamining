/** chunk id: 538047, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    y: () => o
});
var r = n(959462),
    i = n(3388),
    a = n(64700);

function o(e) {
    let [t, n] = (0, a.useState)(e), o = (0, a.useRef)(null), s = (0, r.J)(() => {
        if (!o.current) return;
        let e = o.current.next();
        if (e.done) {
            o.current = null;
            return
        }
        t === e.value ? s() : n(e.value)
    });
    (0, i.N)(() => {
        o.current && s()
    });
    let l = (0, r.J)(e => {
        o.current = e(t), s()
    });
    return [t, l]
}