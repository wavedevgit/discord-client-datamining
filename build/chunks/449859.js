/** chunk id: 449859 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(990078),
    o = n(253932),
    u = n(405269),
    c = n(355938),
    d = n(943815),
    m = n(985018),
    g = n(767283);
let h = i.memo(function(e) {
        let {
            children: t,
            className: n,
            compact: s = !1,
            timestamp: h,
            timestampFormat: f,
            isVisibleOnlyOnHover: p = !1,
            cozyAlt: x = !1,
            isInline: v = !0,
            id: C,
            isEdited: N = !1,
            application: E,
            tooltipPosition: I
        } = e, _ = i.useMemo(() => new Date(h), [h]), b = i.useMemo(() => (0, u.K7)(_), [_]), S = o.PZ.useSetting(), j = i.useMemo(() => null != f ? (0, u.i$)(_, f, S) : s ? (0, u.i$)(_, "LT", S) : (0, u.mk)(_, !0), [_, f, s, S]), T = i.useMemo(() => s ? (0, d.A)(j) : null, [s, j]), y = i.useMemo(() => N ? m.intl.formatToPlainString(m.t.CDzOFd, {
            timeFormatted: b
        }) : b, [N, b]);
        return (0, l.jsx)("span", {
            className: a()(n, T, {
                [g.vE]: !0,
                [g.ET]: p,
                [g.YQ]: v,
                [g.CC]: x
            }),
            children: null == E ? (0, l.jsx)(r.m, {
                asContainer: !0,
                __unsupportedReactNodeAsText: (0, u.i$)(_, "LLLL"),
                "aria-label": y,
                position: I,
                delay: 750,
                children: (0, l.jsx)(A, {
                    timeFormatted: j,
                    timestamp: _,
                    id: C,
                    compact: s,
                    children: t
                })
            }) : (0, l.jsx)(c.A, {
                application: E,
                compact: s,
                children: (0, l.jsx)(A, {
                    timeFormatted: j,
                    timestamp: _,
                    id: C,
                    compact: s,
                    children: t
                })
            })
        })
    }),
    A = i.memo(function(e) {
        let {
            tooltipProps: t,
            timeFormatted: n,
            children: i,
            compact: s,
            timestamp: a,
            id: r
        } = e;
        return (0, l.jsx)("time", {
            ...t,
            id: r,
            dateTime: a.toISOString(),
            children: null != i ? i : (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("i", {
                    className: g.me,
                    "aria-hidden": !0,
                    children: s ? "[" : " — "
                }), n, s && (0, l.jsxs)("i", {
                    className: g.me,
                    "aria-hidden": !0,
                    children: ["]", " "]
                })]
            })
        })
    }),
    f = h