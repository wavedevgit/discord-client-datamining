/** chunk id: 1404 params = (module,exports,require) **/
n.d(t, {
    D: () => c
});
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(837381),
    u = n(193663),
    o = n(576420),
    d = n(925031);

function c(e) {
    let {
        listItemId: t,
        isVisuallyOffline: n = !1,
        recentlyAddedTimestampMs: r = null,
        outerRef: c,
        leftIndicator: h,
        avatar: g,
        primaryText: I,
        secondaryText: A,
        rightActions: f,
        onClick: E,
        onContextMenu: m,
        onMouseEnter: S,
        onMouseLeave: _,
        className: p,
        rowInnerClassName: N
    } = e, T = (0, a.rm)(t), [y, C] = i.useState(!1), x = i.useRef(null), [v, M] = i.useState(!1);
    return i.useEffect(() => {
        if (null == r || x.current === r) return;
        x.current = r;
        let e = Date.now();
        r > e || e - r > o.WS || M(!0)
    }, [r]), (0, l.jsxs)("div", {
        ref: c,
        className: s()(d.nM, p, {
            [d.SS]: n
        }),
        onAnimationEnd: e => {
            "friendsWidgetRowRecentlyAdded" === e.animationName && M(!1)
        },
        children: [null != h ? (0, l.jsx)("div", {
            className: d.oT,
            children: h
        }) : null, (0, l.jsx)(u.A, {
            innerClassName: s()(d.bL, N),
            className: v ? d.fc : void 0,
            onClick: E,
            onContextMenu: m,
            onMouseEnter: e => {
                C(!0), S?.(e)
            },
            onMouseLeave: e => {
                C(!1), _?.(e)
            },
            avatar: g,
            name: I,
            subText: A,
            hovered: y,
            ...T,
            children: null != f ? (0, l.jsx)("div", {
                className: d.cm,
                children: f(y)
            }) : null
        })]
    })
}