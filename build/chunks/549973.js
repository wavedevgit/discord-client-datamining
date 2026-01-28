/** Chunk was on 83759 **/
/** chunk id: 549973, original params: e,t,n (module,exports,require) **/
n.d(t, {
    e: () => a
}), n(896048);
var r = n(64700),
    l = n(927813),
    i = n(995273);

function a(e) {
    let {
        timestamp: t,
        abbreviated: n = !0
    } = e, [a, o] = r.useState(() => (0, i.jb)(t, n));
    return r.useEffect(() => {
        o((0, i.jb)(t, n));
        let e = Date.now() - t;
        if (e > l.A.Millis.DAY) return;
        let r = e >= l.A.Millis.HOUR ? l.A.Millis.HOUR : l.A.Millis.MINUTE,
            a = setInterval(() => {
                o((0, i.jb)(t, n))
            }, r, r - e % r);
        return () => clearInterval(a)
    }, [t, n]), a
}