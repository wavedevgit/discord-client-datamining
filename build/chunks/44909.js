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
        usePersistentBadge: _,
        getDismissibleBadges: m
    } = t, g = d(), A = c?.(), h = n(), x = u(), p = _?.(), T = m?.(), E = (0, l.A)({
        persistentBadge: p,
        dismissibleBadges: T
    }), C = (0, r.q)(t);
    return (0, i.jsx)(a.L, {
        children: (0, i.jsx)(s.z6M, {
            label: g,
            description: A,
            options: x,
            value: h,
            badge: E,
            onChange: e => {
                C(), o(e)
            }
        })
    })
}