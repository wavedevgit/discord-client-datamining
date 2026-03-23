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
        usePersistentBadge: _,
        hasIcon: g,
        getDismissibleBadges: A
    } = t, x = d(), p = c?.(), h = n(), T = u?.() ?? !1, E = m?.(), f = _?.(), S = A?.(), C = (0, l.A)({
        persistentBadge: f,
        dismissibleBadges: S
    }), b = (0, a.q)(t);
    return (0, i.jsxs)(r.L, {
        children: [(0, i.jsx)(s.dOG, {
            label: x,
            description: p,
            badge: C,
            checked: h,
            hasIcon: g,
            onChange: e => {
                b(), o(e)
            },
            disabled: T
        }), T && null != E ? (0, i.jsx)(s.po8, {
            messageType: s.YCn.WARNING,
            children: E
        }) : null]
    })
}