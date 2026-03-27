/** chunk id: 44909 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968),
    s = n(397927),
    l = n(600812),
    a = n(791498),
    r = n(244242);

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
        getDismissibleBadges: _
    } = t, g = d(), A = c?.(), x = n(), h = u(), p = m?.(), f = _?.(), T = (0, l.A)({
        persistentBadge: p,
        dismissibleBadges: f
    }), S = (0, a.q)(t);
    return (0, i.jsx)(r.L, {
        children: (0, i.jsx)(s.z6M, {
            label: g,
            description: A,
            options: h,
            value: x,
            badge: T,
            onChange: e => {
                S(), o(e)
            }
        })
    })
}