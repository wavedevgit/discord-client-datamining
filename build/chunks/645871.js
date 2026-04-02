/** chunk id: 645871 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(687498),
    o = n(960694);
let u = e => {
    let {
        segment: t,
        animatingIndex: n,
        backgroundColor: a,
        playbackPxSpring: u,
        expansionSpring: c,
        timelineWidth: d,
        preloadedBuffers: m,
        maxSeekableX: p,
        interactionEnabled: f,
        segmentBorderRadius: h = 99,
        showGlow: x,
        glowClassName: E,
        progressFillClassName: v
    } = e, {
        startPx: g,
        endPx: b,
        leftIndicatorIndex: y,
        rightIndicatorIndex: S
    } = t, C = b - g, A = u.to(e => Math.min(Math.max(0, e - g), C)), N = null != n && null != c && y === n, R = !N && null != n && null != c && S === n, T = N || R, w = R ? (0, s.to)([A, c], (e, t) => `translateX(-${Math.max(0,C-t-e)}px)`) : A.to(e => `translateX(-${C-e}px)`), j = T ? (0, s.to)([A, c], (e, t) => N ? Math.max(0, e - t) : Math.min(e, C - t)) : A, L = Math.max(0, (p ?? 0) - g), P = {
        borderRadius: `${h}px`
    }, D = l.useMemo(() => m?.map(e => ({
        startPx: e.start * d,
        endPx: (e.start + e.size) * d
    })).filter(e => e.endPx >= g && e.startPx <= b), [m, g, b, d]);
    return (0, r.jsxs)(s.animated.div, {
        className: o.$v,
        style: {
            left: N ? c.to(e => g + e) : g,
            width: T ? c.to(e => C - e) : C,
            "--custom-segment-bg": null != a ? a : void 0,
            "--custom-r-left": u.to(e => 0 === g || e >= g ? "99px" : "0px"),
            "--custom-r-right": u.to(e => b >= d || e >= b ? "99px" : "0px"),
            "--custom-timeline-width": `${d}px`
        },
        children: [(0, r.jsxs)("div", {
            className: o.WJ,
            children: [(0, r.jsxs)(s.animated.div, {
                className: o.Bw,
                style: {
                    left: N ? c.to(e => -(g + e)) : -g
                },
                children: [D?.map(e => (0, r.jsx)("div", {
                    className: o.r,
                    style: {
                        width: `${e.endPx-e.startPx}px`,
                        left: `${e.startPx}px`,
                        ...P
                    }
                }, `${e.startPx}:${e.endPx}`)), !f && L > 0 && (0, r.jsx)("div", {
                    className: o.YK,
                    style: {
                        width: `${L}px`,
                        opacity: 1,
                        ...P
                    }
                })]
            }), (0, r.jsx)(s.animated.div, {
                className: i()(o.TN, v),
                style: {
                    transform: w,
                    opacity: A.to(e => e <= 0 ? 0 : 1)
                }
            })]
        }), x && (0, r.jsx)(s.animated.div, {
            className: i()(o.DT, E),
            style: {
                width: j
            }
        })]
    })
}