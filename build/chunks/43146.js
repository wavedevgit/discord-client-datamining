/** chunk id: 43146 params = (module,exports,require) **/
n.d(t, {
    v: () => o
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
        useDisabled: u,
        useDisabledMessage: m,
        usePersistentBadge: g,
        hasIcon: _,
        getDismissibleBadges: A
    } = t, x = d(), h = c?.(), p = n(), T = u?.() ?? !1, f = m?.(), E = g?.(), S = A?.(), b = (0, l.A)({
        persistentBadge: E,
        dismissibleBadges: S
    }), C = (0, a.q)(t);
    return (0, i.jsxs)(r.L, {
        children: [(0, i.jsx)(s.dOG, {
            label: x,
            description: h,
            badge: b,
            checked: p,
            hasIcon: _,
            onChange: e => {
                C(), o(e)
            },
            disabled: T
        }), T && null != f ? (0, i.jsx)(s.po8, {
            messageType: s.YCn.WARNING,
            children: f
        }) : null]
    })
}