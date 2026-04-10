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
        useDisabledMessage: m,
        usePersistentBadge: g,
        hasIcon: _,
        getDismissibleBadges: x
    } = t, h = d(), A = c?.(), p = n(), T = u?.() ?? !1, f = m?.(), S = g?.(), E = x?.(), b = (0, l.A)({
        persistentBadge: S,
        dismissibleBadges: E
    }), C = (0, r.q)(t);
    return (0, i.jsxs)(a.L, {
        children: [(0, i.jsx)(s.dOG, {
            label: h,
            description: A,
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