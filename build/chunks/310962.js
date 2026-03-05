/** chunk id: 310962 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var a = n(64700),
    r = n(311907),
    l = n(654107),
    s = n(67480),
    i = n(871123);

function o(e, t) {
    let n = (0, r.bG)([s.A], () => s.A.get(e)),
        [o, u] = a.useState(!1),
        [c, d] = a.useState(!1),
        _ = a.useMemo(() => (0, i.xf)(n), [n]),
        m = a.useMemo(() => (0, i.fq)(n), [n]);
    return a.useEffect(() => {
        if (n?.id == null || o || !t) return;
        if (null == m) return void u(!0);
        let e = new Image;
        return e.src = m.toString(), e.onload = () => {
            u(!0)
        }, e.onerror = () => {
            u(!0)
        }, () => {
            e.onerror = null, e.onload = null, e.src = ""
        }
    }, [m, t, o, n?.id]), a.useEffect(() => {
        if (n?.id == null || c || !t) return;
        if (null == _) return void d(!0);
        let e = !0;
        return (0, l.l0)(_.toString()).finally(() => {
            e && d(!0)
        }), () => {
            e = !1
        }
    }, [c, _, t, n?.id]), a.useMemo(() => o && c, [o, c])
}