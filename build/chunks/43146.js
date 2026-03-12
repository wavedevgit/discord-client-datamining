/** chunk id: 43146 params = (module,exports,require) **/
n.d(t, {
    v: () => o
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
        useDisabled: u,
        useDisabledMessage: _,
        usePersistentBadge: m,
        hasIcon: g,
        getDismissibleBadges: A
    } = t, h = d(), x = c?.(), p = n(), T = u?.() ?? !1, E = _?.(), C = m?.(), S = A?.(), f = (0, l.A)({
        persistentBadge: C,
        dismissibleBadges: S
    }), N = (0, r.q)(t);
    return (0, i.jsxs)(a.L, {
        children: [(0, i.jsx)(s.dOG, {
            label: h,
            description: x,
            badge: f,
            checked: p,
            hasIcon: g,
            onChange: e => {
                N(), o(e)
            },
            disabled: T
        }), T && null != E ? (0, i.jsx)(s.po8, {
            messageType: s.YCn.WARNING,
            children: E
        }) : null]
    })
}