/** chunk id: 1404 params = (module,exports,require) **/
n.d(t, {
    D: () => c
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(837381),
    o = n(193663),
    u = n(576420),
    d = n(760023);

function c(e) {
    let {
        listItemId: t,
        isVisuallyOffline: n = !1,
        recentlyAddedTimestampMs: r = null,
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
    } = e, T = (0, a.rm)(t), [N, C] = l.useState(!1), v = l.useRef(null), [y, M] = l.useState(!1);
    return l.useEffect(() => {
        if (null == r || v.current === r) return;
        v.current = r;
        let e = Date.now();
        r > e || e - r > u.WS || M(!0)
    }, [r]), (0, i.jsxs)("div", {
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
                C(!0), p?.(e)
            },
            onMouseLeave: e => {
                C(!1), _?.(e)
            },
            avatar: g,
            name: m,
            subText: f,
            hovered: N,
            ...T,
            children: null != A ? (0, i.jsx)("div", {
                className: d.cm,
                children: A(N)
            }) : null
        })]
    })
}