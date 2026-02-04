/** chunk id: 1404, original params: e,t,n (module,exports,require) **/
n.d(t, {
    D: () => d
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(837381),
    o = n(193663),
    u = n(576420),
    c = n(783346);

function d(e) {
    var t, n;
    let {
        listItemId: i,
        isVisuallyOffline: d = !1,
        recentlyAddedTimestampMs: h = null,
        outerRef: g,
        leftIndicator: f,
        avatar: p,
        primaryText: I,
        secondaryText: m,
        rightActions: E,
        onClick: A,
        onContextMenu: y,
        onMouseEnter: S,
        onMouseLeave: v,
        className: O,
        rowInnerClassName: b
    } = e, N = (0, a.rm)(i), [T, _] = r.useState(!1), C = r.useRef(null), [x, D] = r.useState(!1);
    return r.useEffect(() => {
        if (null == h || C.current === h) return;
        C.current = h;
        let e = Date.now();
        h > e || e - h > u.WS || D(!0)
    }, [h]), (0, l.jsxs)("div", {
        ref: g,
        className: s()(c.nM, O, {
            [c.SS]: d
        }),
        onAnimationEnd: e => {
            "friendsWidgetRowRecentlyAdded" === e.animationName && D(!1)
        },
        children: [null != f ? (0, l.jsx)("div", {
            className: c.oT,
            children: f
        }) : null, (0, l.jsx)(o.A, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), l.forEach(function(t) {
                    var l;
                    l = n[t], t in e ? Object.defineProperty(e, t, {
                        value: l,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = l
                })
            }
            return e
        }({
            innerClassName: s()(c.bL, b),
            className: x ? c.fc : void 0,
            onClick: A,
            onContextMenu: y,
            onMouseEnter: e => {
                _(!0), null == S || S(e)
            },
            onMouseLeave: e => {
                _(!1), null == v || v(e)
            },
            avatar: p,
            name: I,
            subText: m,
            hovered: T
        }, N), n = n = {
            children: null != E ? (0, l.jsx)("div", {
                className: c.cm,
                children: E(T)
            }) : null
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                n.push.apply(n, l)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))]
    })
}