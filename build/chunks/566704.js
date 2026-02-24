/** chunk id: 566704, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var a = n(64700),
    i = n(927813),
    s = n(218394),
    r = n(665171);
let l = 30 * i.A.Millis.SECOND,
    d = 5 * i.A.Millis.SECOND;

function o(e) {
    let t = (0, s.j)();
    a.useEffect(() => {
        if (null == e) return;
        let n = !0,
            a = null,
            i = 0,
            s = () => setTimeout(() => {
                t && (a = new AbortController, (0, r.cq)(e, !1, a.signal).then(() => i = 0).catch(() => i = Math.min(i + 1, 4)).finally(() => {
                    n && (o = s())
                }))
            }, l * Math.pow(2, i) + Math.random() * d),
            o = s();
        return () => {
            n = !1, a?.abort(), clearTimeout(o)
        }
    }, [e, t])
}