/** chunk id: 645871 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(687498),
    o = n(716277);
let u = e => {
    let {
        segment: t,
        animatingIndex: n,
        backgroundColor: a,
        playbackPxSpring: u,
        expansionSpring: d,
        timelineWidth: c,
        preloadedBuffers: m,
        maxSeekableX: h,
        interactionEnabled: p,
        segmentBorderRadius: f = 99,
        showGlow: x,
        glowClassName: b,
        progressFillClassName: E
    } = e, {
        startPx: v,
        endPx: g,
        leftIndicatorIndex: y,
        rightIndicatorIndex: S
    } = t, C = g - v, A = u.to(e => Math.min(Math.max(0, e - v), C)), N = null != n && null != d && y === n, R = !N && null != n && null != d && S === n, T = N || R, w = R ? (0, s.to)([A, d], (e, t) => `translateX(-${Math.max(0,C-t-e)}px)`) : A.to(e => `translateX(-${C-e}px)`), j = T ? (0, s.to)([A, d], (e, t) => N ? Math.max(0, e - t) : Math.min(e, C - t)) : A, L = Math.max(0, (h ?? 0) - v), P = {
        borderRadius: `${f}px`
    }, D = l.useMemo(() => m?.map(e => ({
        startPx: e.start * c,
        endPx: (e.start + e.size) * c
    })).filter(e => e.endPx >= v && e.startPx <= g), [m, v, g, c]);
    return (0, r.jsxs)(s.animated.div, {
        className: o.$v,
        style: {
            left: N ? d.to(e => v + e) : v,
            width: T ? d.to(e => C - e) : C,
            "--custom-segment-bg": null != a ? a : void 0,
            "--custom-r-left": u.to(e => 0 === v || e >= v ? "99px" : "0px"),
            "--custom-r-right": u.to(e => g >= c || e >= g ? "99px" : "0px"),
            "--custom-timeline-width": `${c}px`
        },
        children: [(0, r.jsxs)("div", {
            className: o.WJ,
            children: [(0, r.jsxs)(s.animated.div, {
                className: o.Bw,
                style: {
                    left: N ? d.to(e => -(v + e)) : -v
                },
                children: [D?.map(e => (0, r.jsx)("div", {
                    className: o.r,
                    style: {
                        width: `${e.endPx-e.startPx}px`,
                        left: `${e.startPx}px`,
                        ...P
                    }
                }, `${e.startPx}:${e.endPx}`)), !p && L > 0 && (0, r.jsx)("div", {
                    className: o.YK,
                    style: {
                        width: `${L}px`,
                        opacity: 1,
                        ...P
                    }
                })]
            }), (0, r.jsx)(s.animated.div, {
                className: i()(o.TN, E),
                style: {
                    transform: w,
                    opacity: A.to(e => e <= 0 ? 0 : 1)
                }
            })]
        }), x && (0, r.jsx)(s.animated.div, {
            className: i()(o.DT, b),
            style: {
                width: j
            }
        })]
    })
}