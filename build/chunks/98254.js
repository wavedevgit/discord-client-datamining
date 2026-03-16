/** chunk id: 98254 params = (module,exports,require) **/
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
        useTitle: o,
        useSubtitle: d,
        useOptions: c,
        clearable: u,
        usePersistentBadge: _,
        getDismissibleBadges: m
    } = t, g = t.setValue, A = o(), h = d?.(), x = n(), p = c(), T = _?.(), E = m?.(), S = (0, l.A)({
        persistentBadge: T,
        dismissibleBadges: E
    }), C = (0, a.q)(t);
    return (0, i.jsx)(r.L, {
        children: (0, i.jsx)(s.l6P, {
            selectionMode: "single",
            label: A,
            description: h,
            options: p,
            value: x,
            clearable: u,
            onSelectionChange: e => {
                C(), g(e)
            },
            layout: "horizontal-responsive",
            fullWidth: !0,
            badge: S
        })
    })
}