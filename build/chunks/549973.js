/** chunk id: 549973 params = (module,exports,require) **/
"use strict";
n.d(t, {
    e: () => a
});
var i = n(64700),
    s = n(927813),
    l = n(995273);

function a(e) {
    let {
        timestamp: t,
        abbreviated: n = !0
    } = e, [a, r] = i.useState(() => (0, l.jb)(t, n));
    return i.useEffect(() => {
        r((0, l.jb)(t, n));
        let e = Date.now() - t;
        if (e > s.A.Millis.DAY) return;
        let i = e >= s.A.Millis.HOUR ? s.A.Millis.HOUR : s.A.Millis.MINUTE,
            a = setInterval(() => {
                r((0, l.jb)(t, n))
            }, i, i - e % i);
        return () => clearInterval(a)
    }, [t, n]), a
}