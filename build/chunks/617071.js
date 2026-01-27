/** Chunk was on 12236 **/
/** chunk id: 617071, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(857250),
    a = n(397927),
    s = n(899847),
    o = n(662502),
    d = n(632738),
    c = n(985018);
let u = e => {
    var t, n;
    let {
        parents: u
    } = e, [m, p] = r.useState(!1), b = r.useCallback(() => {
        (0, s.Xz)().then(() => {
            var e, t;
            (0, a.showToast)((0, i.o)(c.intl.formatToPlainString(c.t.wr4IT5, {
                count: u.length,
                parent1: u[0].username,
                parent2: null == (e = u[1]) ? void 0 : e.username,
                parent3: null == (t = u[2]) ? void 0 : t.username
            }), a.ToastType.SUCCESS)), p(!0)
        }).catch(() => {
            o.A.showFailedToast()
        })
    }, [u]);
    if (0 === u.length) return null;
    let _ = c.intl.formatToPlainString(c.t.HqyWeO, {
        count: u.length,
        parent1: u[0].username,
        parent2: null == (t = u[1]) ? void 0 : t.username,
        parent3: null == (n = u[2]) ? void 0 : n.username
    });
    return (0, l.jsx)(d.PQ, {
        title: _,
        description: c.intl.string(c.t["5l/hlt"]),
        buttonText: m ? c.intl.string(c.t.ntuuk7) : c.intl.string(c.t["sYdX/H"]),
        buttonDisabled: m,
        onButtonPress: b
    })
}