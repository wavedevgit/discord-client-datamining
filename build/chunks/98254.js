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
        usePersistentBadge: m,
        getDismissibleBadges: _
    } = t, g = t.setValue, A = o(), x = d?.(), p = n(), h = c(), T = m?.(), E = _?.(), f = (0, l.A)({
        persistentBadge: T,
        dismissibleBadges: E
    }), S = (0, a.q)(t);
    return (0, i.jsx)(r.L, {
        children: (0, i.jsx)(s.l6P, {
            selectionMode: "single",
            label: A,
            description: x,
            options: h,
            value: p,
            clearable: u,
            onSelectionChange: e => {
                S(), g(e)
            },
            layout: "horizontal-responsive",
            fullWidth: !0,
            badge: f
        })
    })
}