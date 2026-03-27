/** chunk id: 449859 params = (module,exports,require) **/
t.d(a, {
    A: () => N
});
var n = t(627968),
    r = t(64700),
    s = t(503698),
    o = t.n(s),
    c = t(990078),
    _ = t(253932),
    i = t(405269),
    l = t(355938),
    d = t(943815),
    C = t(985018),
    E = t(767283);
let A = r.memo(function(e) {
        let {
            children: a,
            className: t,
            compact: s = !1,
            timestamp: A,
            timestampFormat: N,
            isVisibleOnlyOnHover: m = !1,
            cozyAlt: O = !1,
            isInline: T = !0,
            id: I,
            isEdited: R = !1,
            application: p,
            tooltipPosition: f
        } = e, P = r.useMemo(() => new Date(A), [A]), h = r.useMemo(() => (0, i.K7)(P), [P]), S = _.PZ.useSetting(), b = r.useMemo(() => null != N ? (0, i.i$)(P, N, S) : s ? (0, i.i$)(P, "LT", S) : (0, i.mk)(P, !0), [P, N, s, S]), g = r.useMemo(() => s ? (0, d.A)(b) : null, [s, b]), w = r.useMemo(() => R ? C.intl.formatToPlainString(C.t.CDzOFd, {
            timeFormatted: h
        }) : h, [R, h]);
        return (0, n.jsx)("span", {
            className: o()(t, g, {
                [E.vE]: !0,
                [E.ET]: m,
                [E.YQ]: T,
                [E.CC]: O
            }),
            children: null == p ? (0, n.jsx)(c.m, {
                asContainer: !0,
                __unsupportedReactNodeAsText: (0, i.i$)(P, "LLLL"),
                "aria-label": w,
                position: f,
                delay: 750,
                children: (0, n.jsx)(u, {
                    timeFormatted: b,
                    timestamp: P,
                    id: I,
                    compact: s,
                    children: a
                })
            }) : (0, n.jsx)(l.A, {
                application: p,
                compact: s,
                children: (0, n.jsx)(u, {
                    timeFormatted: b,
                    timestamp: P,
                    id: I,
                    compact: s,
                    children: a
                })
            })
        })
    }),
    u = r.memo(function(e) {
        let {
            tooltipProps: a,
            timeFormatted: t,
            children: r,
            compact: s,
            timestamp: o,
            id: c
        } = e;
        return (0, n.jsx)("time", {
            ...a,
            id: c,
            dateTime: o.toISOString(),
            children: null != r ? r : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)("i", {
                    className: E.me,
                    "aria-hidden": !0,
                    children: s ? "[" : " — "
                }), t, s && (0, n.jsxs)("i", {
                    className: E.me,
                    "aria-hidden": !0,
                    children: ["]", " "]
                })]
            })
        })
    }),
    N = A