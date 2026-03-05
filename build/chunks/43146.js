/** chunk id: 43146 params = (module,exports,require) **/
n.d(t, {
    v: () => r
});
var i = n(627968),
    s = n(397927),
    l = n(791498),
    a = n(244242);

function r(e) {
    let {
        node: t
    } = e, {
        useValue: n,
        setValue: r,
        useTitle: o,
        useSubtitle: d,
        useDisabled: c,
        useDisabledMessage: u,
        useBadge: _,
        hasIcon: g
    } = t, m = o(), A = d?.(), h = n(), p = c?.() ?? !1, x = u?.(), E = _?.(), T = (0, l.q)(t);
    return (0, i.jsxs)(a.L, {
        children: [(0, i.jsx)(s.dOG, {
            label: m,
            description: A,
            badge: E,
            checked: h,
            hasIcon: g,
            onChange: e => {
                T(), r(e)
            },
            disabled: p
        }), p && null != x ? (0, i.jsx)(s.po8, {
            messageType: s.YCn.WARNING,
            children: x
        }) : null]
    })
}