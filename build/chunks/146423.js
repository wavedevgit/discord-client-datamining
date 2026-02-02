/** chunk id: 146423, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => d
});
var n = r(627968),
    i = r(64700),
    l = r(503698),
    s = r.n(l),
    a = r(158954),
    u = r(713517),
    o = r(607123),
    c = r(72939);

function d(e) {
    let {
        sku: t,
        user: r,
        children: l,
        cardStyle: d,
        skuPreviewStyle: f,
        disableHoverOrFocus: h,
        onHoverOrFocusChange: m,
        onClick: g,
        options: I
    } = e, p = i.useRef(null), {
        isHoveringOrFocusing: S
    } = (0, u.A)(p), O = i.useRef(m);
    return i.useEffect(() => {
        O.current = m
    }, [m]), i.useEffect(() => {
        var e;
        null == (e = O.current) || e.call(O, S)
    }, [S]), (0, n.jsxs)(a.DUT, {
        innerRef: p,
        className: s()(c.N, d),
        onClick: g,
        children: [(0, n.jsx)(a.AC4, {
            children: (0, n.jsx)(a.H, {
                children: t.name
            })
        }), (0, n.jsx)("div", {
            className: s()(c.e, f),
            children: (0, n.jsx)(o.Ay, {
                sku: t,
                isFocused: !h && S,
                user: r,
                options: I
            })
        }), l]
    })
}