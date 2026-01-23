/** Chunk was on 19750 **/
/** chunk id: 566704, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(492834);
var r = n(64700),
    a = n(927813),
    i = n(218394),
    l = n(665171);
let s = 30 * a.A.Millis.SECOND,
    o = 5 * a.A.Millis.SECOND;

function c(e) {
    let t = (0, i.j)();
    r.useEffect(() => {
        if (null == e) return;
        let n = !0,
            r = null,
            a = 0,
            i = () => setTimeout(() => {
                t && (r = new AbortController, (0, l.cq)(e, !1, r.signal).then(() => a = 0).catch(() => a = Math.min(a + 1, 4)).finally(() => {
                    n && (c = i())
                }))
            }, s * Math.pow(2, a) + Math.random() * o),
            c = i();
        return () => {
            n = !1, null == r || r.abort(), clearTimeout(c)
        }
    }, [e, t])
}