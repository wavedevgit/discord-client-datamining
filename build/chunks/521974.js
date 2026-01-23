/** Chunk was on 28636 **/
/** chunk id: 521974, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(488995),
    c = n(51e4);

function d(e) {
    let {
        state: t,
        query: n,
        placeholder: i,
        onTextChange: d,
        onCollapsedClick: u,
        onClear: p,
        onBlur: h,
        onSubmit: m
    } = e, g = l.useRef(null), _ = l.useCallback(e => {
        "Enter" === e.key && m()
    }, [m]), b = l.useCallback(() => {
        u(), setTimeout(() => {
            var e;
            return null == (e = g.current) ? void 0 : e.focus()
        })
    }, [u]);
    return t === o.GlobalDiscoverySearchBarState.COLLAPSED ? (0, r.jsx)(s.DUT, {
        className: c.qc,
        onClick: b,
        children: (0, r.jsx)(s.$p$, {
            size: "sm",
            color: s.LU0.colors.ICON_STRONG
        })
    }) : (0, r.jsx)("div", {
        className: a()(c.ON, {
            [c.Nz]: t === o.GlobalDiscoverySearchBarState.FLOATING
        }),
        children: (0, r.jsx)(s.IWV, {
            size: "sm",
            ref: g,
            query: n,
            placeholder: i,
            onChange: d,
            onClear: p,
            onKeyDown: _,
            onBlur: h
        })
    })
}