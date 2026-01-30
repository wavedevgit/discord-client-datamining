/** chunk id: 248215, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    _: () => a
});
var r = n(959462),
    i = n(64700);

function a(e, t, n, a) {
    let o = (0, r.J)(n),
        s = null == n;
    (0, i.useEffect)(() => {
        if (s || !e.current) return;
        let n = e.current;
        return n.addEventListener(t, o, a), () => {
            n.removeEventListener(t, o, a)
        }
    }, [e, t, a, s, o])
}