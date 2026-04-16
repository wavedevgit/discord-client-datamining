/** chunk id: 1404 params = (module,exports,require) **/
n.d(t, {
    D: () => c
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(837381),
    o = n(193663),
    u = n(576420),
    d = n(760023);

function c(e) {
    let {
        listItemId: t,
        isVisuallyOffline: n = !1,
        recentlyAddedTimestampMs: l = null,
        outerRef: c,
        leftIndicator: h,
        avatar: g,
        primaryText: m,
        secondaryText: f,
        rightActions: A,
        onClick: I,
        onContextMenu: E,
        onMouseEnter: p,
        onMouseLeave: _,
        className: S,
        rowInnerClassName: x
    } = e, T = (0, a.rm)(t), [C, N] = r.useState(!1), v = r.useRef(null), [y, M] = r.useState(!1);
    return r.useEffect(() => {
        if (null == l || v.current === l) return;
        v.current = l;
        let e = Date.now();
        l > e || e - l > u.WS || M(!0)
    }, [l]), (0, i.jsxs)("div", {
        ref: c,
        className: s()(d.nM, S, {
            [d.SS]: n
        }),
        onAnimationEnd: e => {
            "friendsWidgetRowRecentlyAdded" === e.animationName && M(!1)
        },
        children: [null != h ? (0, i.jsx)("div", {
            className: d.oT,
            children: h
        }) : null, (0, i.jsx)(o.A, {
            innerClassName: s()(d.bL, x),
            className: y ? d.fc : void 0,
            onClick: I,
            onContextMenu: E,
            onMouseEnter: e => {
                N(!0), p?.(e)
            },
            onMouseLeave: e => {
                N(!1), _?.(e)
            },
            avatar: g,
            name: m,
            subText: f,
            hovered: C,
            ...T,
            children: null != A ? (0, i.jsx)("div", {
                className: d.cm,
                children: A(C)
            }) : null
        })]
    })
}