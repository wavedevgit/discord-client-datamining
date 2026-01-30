/** chunk id: 43146, original params: e,t,n (module,exports,require) **/
n.d(t, {
    v: () => s
});
var r = n(627968),
    i = n(397927),
    l = n(244242);

function s(e) {
    var t;
    let {
        node: n
    } = e, {
        useValue: s,
        setValue: a,
        useTitle: o,
        useSubtitle: c,
        useDisabled: d,
        useDisabledMessage: u,
        useBadge: _,
        hasIcon: p
    } = n, m = o(), g = null == c ? void 0 : c(), A = s(), f = null != (t = null == d ? void 0 : d()) && t, b = null == u ? void 0 : u(), h = null == _ ? void 0 : _();
    return (0, r.jsxs)(l.L, {
        children: [(0, r.jsx)(i.dOG, {
            label: m,
            description: g,
            badge: h,
            checked: A,
            hasIcon: p,
            onChange: e => a(e),
            disabled: f
        }), f && null != b ? (0, r.jsx)(i.po8, {
            messageType: i.YCn.WARNING,
            children: b
        }) : null]
    })
}