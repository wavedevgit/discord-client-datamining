/** Chunk was on 92917 **/
/** chunk id: 310962, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(896048), n(492834);
var r = n(64700),
    i = n(311907),
    l = n(654107),
    a = n(67480),
    s = n(871123);

function o(e, t) {
    let n = (0, i.bG)([a.A], () => a.A.get(e)),
        [o, c] = r.useState(!1),
        [u, d] = r.useState(!1),
        p = r.useMemo(() => (0, s.xf)(n), [n]),
        m = r.useMemo(() => (0, s.fq)(n), [n]);
    return r.useEffect(() => {
        if ((null == n ? void 0 : n.id) == null || o || !t) return;
        if (null == m) return void c(!0);
        let e = new Image;
        return e.src = m.toString(), e.onload = () => {
            c(!0)
        }, e.onerror = () => {
            c(!0)
        }, () => {
            e.onerror = null, e.onload = null, e.src = ""
        }
    }, [m, t, o, null == n ? void 0 : n.id]), r.useEffect(() => {
        if ((null == n ? void 0 : n.id) == null || u || !t) return;
        if (null == p) return void d(!0);
        let e = !0;
        return (0, l.l0)(p.toString()).finally(() => {
            e && d(!0)
        }), () => {
            e = !1
        }
    }, [u, p, t, null == n ? void 0 : n.id]), r.useMemo(() => o && u, [o, u])
}