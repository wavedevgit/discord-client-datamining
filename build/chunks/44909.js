/** chunk id: 44909 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968),
    s = n(397927),
    l = n(600812),
    r = n(791498),
    a = n(244242);

function o(e) {
    let {
        node: t
    } = e, {
        useValue: n,
        setValue: o,
        useTitle: d,
        useSubtitle: c,
        useOptions: u,
        usePersistentBadge: m,
        getDismissibleBadges: g
    } = t, _ = d(), x = c?.(), A = n(), h = u(), p = m?.(), T = g?.(), f = (0, l.A)({
        persistentBadge: p,
        dismissibleBadges: T
    }), S = (0, r.q)(t);
    return (0, i.jsx)(a.L, {
        children: (0, i.jsx)(s.z6M, {
            label: _,
            description: x,
            options: h,
            value: A,
            badge: f,
            onChange: e => {
                S(), o(e)
            }
        })
    })
}