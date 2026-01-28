/** Chunk was on 5606 **/
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
        useBadge: p,
        hasIcon: _
    } = n, m = o(), g = null == c ? void 0 : c(), f = s(), b = null != (t = null == d ? void 0 : d()) && t, h = null == u ? void 0 : u(), A = null == p ? void 0 : p();
    return (0, r.jsxs)(l.L, {
        children: [(0, r.jsx)(i.dOG, {
            label: m,
            description: g,
            badge: A,
            checked: f,
            hasIcon: _,
            onChange: e => a(e),
            disabled: b
        }), b && null != h ? (0, r.jsx)(i.po8, {
            messageType: i.YCn.WARNING,
            children: h
        }) : null]
    })
}