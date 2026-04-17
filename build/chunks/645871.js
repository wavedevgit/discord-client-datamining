/** chunk id: 645871 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(825638),
    u = n(876230),
    o = n(6821);
let c = e => {
    let {
        segment: t,
        animatingIndex: n,
        playbackPxSpring: a,
        animate: c,
        playerState: d,
        isDragging: m,
        dragX: f,
        expansionSpring: p,
        timelineWidth: h,
        preloadedBuffers: x,
        maxSeekableX: v,
        segmentBorderRadius: E = 99,
        progressClassName: b
    } = e, {
        startPx: g,
        endPx: y,
        leftIndicatorIndex: S,
        rightIndicatorIndex: C
    } = t, A = y - g, N = l.useRef(null), R = l.useRef(null), L = l.useRef(c);
    l.useLayoutEffect(() => {
        let e = L.current;
        L.current = c, e && !c && d !== u.Q6.PLAYING ? (null != N.current && (N.current.style.transform = getComputedStyle(N.current).transform), null != R.current && (R.current.style.width = getComputedStyle(R.current).width)) : !e && c && (null != N.current && (N.current.style.transform = getComputedStyle(N.current).transform), null != R.current && (R.current.style.width = getComputedStyle(R.current).width))
    }, [c, d]);
    let w = a.to(e => Math.min(Math.max(0, e - g), A)),
        T = null != n && null != p && S === n,
        j = !T && null != n && null != p && C === n,
        P = T || j,
        k = m && null != f ? Math.min(Math.max(0, f - g), A) : null,
        D = null != k ? `translateX(-${A-k}px)` : j ? (0, s.to)([w, p], (e, t) => `translateX(-${Math.max(0,A-t-e)}px)`) : w.to(e => `translateX(-${A-e}px)`),
        M = null != k ? k : P ? (0, s.to)([w, p], (e, t) => T ? Math.max(0, e - t) : Math.min(e, A - t)) : w,
        I = d !== u.Q6.ENDED,
        B = Math.max(0, (v ?? 0) - g),
        U = {
            borderRadius: `${E}px`
        },
        F = l.useMemo(() => x?.map(e => ({
            startPx: e.start * h,
            endPx: (e.start + e.size) * h
        })).filter(e => e.endPx >= g && e.startPx <= y), [x, g, y, h]);
    return (0, r.jsxs)(s.animated.div, {
        className: i()(o.$v, b),
        style: {
            left: T ? p.to(e => g + e) : g,
            width: P ? p.to(e => A - e) : A,
            "--custom-r-left": a.to(e => 0 === g || e >= g ? "99px" : "0px"),
            "--custom-r-right": a.to(e => y >= h || e >= y ? "99px" : "0px"),
            "--custom-timeline-width": `${h}px`
        },
        children: [(0, r.jsxs)("div", {
            className: o.WJ,
            children: [(0, r.jsxs)(s.animated.div, {
                className: o.Bw,
                style: {
                    left: T ? p.to(e => -(g + e)) : -g
                },
                children: [F?.map(e => (0, r.jsx)("div", {
                    className: o.r,
                    style: {
                        width: `${e.endPx-e.startPx}px`,
                        left: `${e.startPx}px`,
                        ...U
                    }
                }, `${e.startPx}:${e.endPx}`)), null != v && B > 0 && (0, r.jsx)("div", {
                    className: o.YK,
                    style: {
                        width: `${B}px`,
                        opacity: 1,
                        ...U
                    }
                })]
            }), (0, r.jsx)(s.animated.div, {
                ref: N,
                className: o.TN,
                style: {
                    transform: D,
                    opacity: null != k ? k <= 0 ? 0 : 1 : w.to(e => e <= 0 ? 0 : 1)
                }
            })]
        }), I && (0, r.jsx)(s.animated.div, {
            ref: R,
            className: o.DT,
            style: {
                width: M,
                opacity: null != k ? k <= 0 ? 0 : 1 : w.to(e => e <= 0 ? 0 : 1)
            }
        })]
    })
}