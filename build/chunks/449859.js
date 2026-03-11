/** chunk id: 449859 params = (module,exports,require) **/
t.d(a, {
    A: () => N
});
var n = t(627968),
    r = t(64700),
    o = t(503698),
    s = t.n(o),
    _ = t(990078),
    c = t(253932),
    i = t(405269),
    l = t(355938),
    d = t(943815),
    E = t(985018),
    C = t(679740);
let A = r.memo(function(e) {
        let {
            children: a,
            className: t,
            compact: o = !1,
            timestamp: A,
            timestampFormat: N,
            isVisibleOnlyOnHover: O = !1,
            cozyAlt: m = !1,
            isInline: R = !0,
            id: T,
            isEdited: I = !1,
            application: p,
            tooltipPosition: P
        } = e, f = r.useMemo(() => new Date(A), [A]), S = r.useMemo(() => (0, i.K7)(f), [f]), h = c.PZ.useSetting(), b = r.useMemo(() => null != N ? (0, i.i$)(f, N, h) : o ? (0, i.i$)(f, "LT", h) : (0, i.mk)(f, !0), [f, N, o, h]), g = r.useMemo(() => o ? (0, d.A)(b) : null, [o, b]), D = r.useMemo(() => I ? E.intl.formatToPlainString(E.t.CDzOFd, {
            timeFormatted: S
        }) : S, [I, S]);
        return (0, n.jsx)("span", {
            className: s()(t, g, {
                [C.vE]: !0,
                [C.ET]: O,
                [C.YQ]: R,
                [C.CC]: m
            }),
            children: null == p ? (0, n.jsx)(_.m, {
                asContainer: !0,
                __unsupportedReactNodeAsText: (0, i.i$)(f, "LLLL"),
                "aria-label": D,
                position: P,
                delay: 750,
                children: (0, n.jsx)(u, {
                    timeFormatted: b,
                    timestamp: f,
                    id: T,
                    compact: o,
                    children: a
                })
            }) : (0, n.jsx)(l.A, {
                application: p,
                compact: o,
                children: (0, n.jsx)(u, {
                    timeFormatted: b,
                    timestamp: f,
                    id: T,
                    compact: o,
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
            compact: o,
            timestamp: s,
            id: _
        } = e;
        return (0, n.jsx)("time", {
            ...a,
            id: _,
            dateTime: s.toISOString(),
            children: null != r ? r : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)("i", {
                    className: C.me,
                    "aria-hidden": !0,
                    children: o ? "[" : " — "
                }), t, o && (0, n.jsxs)("i", {
                    className: C.me,
                    "aria-hidden": !0,
                    children: ["]", " "]
                })]
            })
        })
    }),
    N = A