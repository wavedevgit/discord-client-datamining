/** chunk id: 617071 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(627968),
    a = n(64700),
    r = n(857250),
    i = n(397927),
    s = n(899847),
    d = n(662502),
    o = n(632738),
    c = n(985018);
let u = e => {
    let {
        parents: t
    } = e, [n, u] = a.useState(!1), _ = a.useCallback(() => {
        (0, s.Xz)().then(() => {
            (0, i.showToast)((0, r.o)(c.intl.formatToPlainString(c.t.wr4IT5, {
                count: t.length,
                parent1: t[0].username,
                parent2: t[1]?.username,
                parent3: t[2]?.username
            }), i.ToastType.SUCCESS)), u(!0)
        }).catch(() => {
            d.A.showFailedToast()
        })
    }, [t]);
    if (0 === t.length) return null;
    let m = c.intl.formatToPlainString(c.t.HqyWeO, {
        count: t.length,
        parent1: t[0].username,
        parent2: t[1]?.username,
        parent3: t[2]?.username
    });
    return (0, l.jsx)(o.PQ, {
        title: m,
        description: c.intl.string(c.t["5l/hlt"]),
        buttonText: n ? c.intl.string(c.t.ntuuk7) : c.intl.string(c.t["sYdX/H"]),
        buttonDisabled: n,
        onButtonPress: _
    })
}