/** chunk id: 449859 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(990078),
    o = n(253932),
    c = n(405269),
    d = n(355938),
    u = n(943815),
    m = n(985018),
    p = n(767283);
let _ = i.memo(function(e) {
        let {
            children: t,
            className: n,
            compact: l = !1,
            timestamp: _,
            timestampFormat: A,
            isVisibleOnlyOnHover: g = !1,
            cozyAlt: f = !1,
            isInline: b = !0,
            id: T,
            isEdited: x = !1,
            application: I,
            tooltipPosition: C
        } = e, y = i.useMemo(() => new Date(_), [_]), E = i.useMemo(() => (0, c.K7)(y), [y]), S = o.PZ.useSetting(), v = i.useMemo(() => null != A ? (0, c.i$)(y, A, S) : l ? (0, c.i$)(y, "LT", S) : (0, c.mk)(y, !0), [y, A, l, S]), M = i.useMemo(() => l ? (0, u.A)(v) : null, [l, v]), N = i.useMemo(() => x ? m.intl.formatToPlainString(m.t.CDzOFd, {
            timeFormatted: E
        }) : E, [x, E]);
        return (0, a.jsx)("span", {
            className: s()(n, M, {
                [p.vE]: !0,
                [p.ET]: g,
                [p.YQ]: b,
                [p.CC]: f
            }),
            children: null == I ? (0, a.jsx)(r.m, {
                asContainer: !0,
                __unsupportedReactNodeAsText: (0, c.i$)(y, "LLLL"),
                "aria-label": N,
                position: C,
                delay: 750,
                children: (0, a.jsx)(h, {
                    timeFormatted: v,
                    timestamp: y,
                    id: T,
                    compact: l,
                    children: t
                })
            }) : (0, a.jsx)(d.A, {
                application: I,
                compact: l,
                children: (0, a.jsx)(h, {
                    timeFormatted: v,
                    timestamp: y,
                    id: T,
                    compact: l,
                    children: t
                })
            })
        })
    }),
    h = i.memo(function(e) {
        let {
            tooltipProps: t,
            timeFormatted: n,
            children: i,
            compact: l,
            timestamp: s,
            id: r
        } = e;
        return (0, a.jsx)("time", {
            ...t,
            id: r,
            dateTime: s.toISOString(),
            children: null != i ? i : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("i", {
                    className: p.me,
                    "aria-hidden": !0,
                    children: l ? "[" : " — "
                }), n, l && (0, a.jsxs)("i", {
                    className: p.me,
                    "aria-hidden": !0,
                    children: ["]", " "]
                })]
            })
        })
    }),
    A = _