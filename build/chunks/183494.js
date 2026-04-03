/** chunk id: 183494 params = (module,exports,require) **/
n.d(t, {
    Ay: () => f
}), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(687498),
    o = n(876230),
    u = n(61491),
    d = n(397927),
    c = n(972441),
    m = n(645871),
    h = n(716277);
let p = {
    tension: 300,
    friction: 30,
    clamp: !0
};

function f(e) {
    let {
        isFullyVisible: t,
        percent: n,
        animate: a,
        interactionEnabled: f,
        backgroundColor: x,
        playerState: b,
        preloadedBuffers: E,
        durationSec: v,
        maxSeekableTime: g,
        progressGlow: y,
        progressFillClassName: S,
        glowClassName: C,
        timelineHeightPx: A = 4,
        segmentBorderRadius: N,
        hoverTimelineHeightPx: R,
        initialTimelineHeightPx: T = A,
        onClick: w,
        onScrubBack: j,
        onScrubForward: L,
        indicatorConfig: P,
        "data-testid": D
    } = e, {
        contRef: M,
        boundingRect: k,
        handleMouseEnter: I,
        handleMouseLeave: B,
        handleMouseMove: U,
        handleKeyDown: G,
        hoveredAtX: O,
        maxSeekableX: _,
        isHovering: Q,
        handleClick: F,
        ariaProps: K
    } = (0, c.A)({
        onScrubBack: j,
        onScrubForward: L,
        maxSeekableTime: g,
        interactionEnabled: f,
        durationSec: v,
        percent: n,
        onClick: w
    }), $ = l.useMemo(() => null == O || null == k ? null : (0, u.rB)((0, u.hc)(O, k, v)), [O, k, v]), Y = l.useMemo(() => {
        if (null != k) return (0, u.TO)(n, k)
    }, [n, k]), [{
        playbackPxSpring: z
    }, X] = (0, d.zhh)(() => ({
        playbackPxSpring: 0,
        config: p
    }));
    l.useEffect(() => {
        X({
            playbackPxSpring: null == Y || Number.isNaN(Y) ? 0 : Y,
            immediate: !a
        })
    }, [Y, a, X]);
    let W = k?.width != null && k?.width !== 0 ? k?.width : 1,
        V = v > 1,
        H = P?.indicators,
        J = l.useMemo(() => {
            let e;
            return null != H && null != k && V ? (e = k.width, H.map(t => {
                let n = Math.max(0, Math.min((0, u.DX)(t.timeSec, v, k) - t.widthPx / 2, e - t.widthPx));
                return {
                    leftPx: n,
                    rightPx: n + t.widthPx,
                    gapPx: t.gapPx,
                    index: t.index,
                    source: t
                }
            })) : void 0
        }, [H, v, k, V]),
        Z = l.useMemo(() => ((e, t) => {
            let n = [{
                startPx: 0,
                endPx: e,
                leftIndicatorIndex: null,
                rightIndicatorIndex: null
            }];
            if (null == t || 0 === t.length) return n;
            for (let r = 0; r < t.length; r++) {
                let l = Math.max(0, t[r].leftPx - t[r].gapPx),
                    a = Math.min(e, t[r].rightPx + t[r].gapPx),
                    i = n[n.length - 1];
                null != i && (i.endPx = l, i.rightIndicatorIndex = t[r].index), null != i && i.endPx <= i.startPx && n.pop(), a < e && n.push({
                    startPx: a,
                    endPx: e,
                    leftIndicatorIndex: t[r].index,
                    rightIndicatorIndex: null
                })
            }
            return n
        })(W, J), [W, J]),
        q = P?.hoverExpansionPx ?? 0,
        ee = l.useCallback(e => null != e && null != J && J.some(t => e >= t.leftPx - t.gapPx - (P?.animatingIndex === t.index ? q : 0) && e <= t.rightPx + t.gapPx + (P?.animatingIndex === t.index ? q : 0)), [J, P?.animatingIndex, q]);
    return (0, r.jsx)("div", {
        className: h.jD,
        ref: M,
        "data-testid": D,
        style: {
            "--custom-timeline-height": `${null!=R&&Q?R:A}px`,
            "--custom-initial-timeline-height": `${T}px`
        },
        children: (0, r.jsxs)(d.DUT, {
            className: i()(h.KF, {
                [h.uc]: f
            }),
            ignoreKeyPress: !0,
            onClick: F,
            onMouseEnter: I,
            onMouseLeave: B,
            onMouseMove: U,
            onKeyDown: G,
            tabIndex: f ? void 0 : -1,
            children: [(0, r.jsx)("div", {
                className: h.G9,
                ...K,
                children: null != k && Z.map((e, t) => (0, r.jsx)(m.A, {
                    segment: e,
                    playbackPxSpring: z,
                    animatingIndex: P?.animatingIndex,
                    expansionSpring: P?.expansionSpring,
                    backgroundColor: x,
                    timelineWidth: W,
                    preloadedBuffers: E,
                    maxSeekableX: _,
                    interactionEnabled: f,
                    segmentBorderRadius: N,
                    progressFillClassName: S ?? h.UA,
                    glowClassName: C ?? h.pN,
                    showGlow: y && b !== o.Q6.ENDED && null != Y && Y > e.startPx
                }, t))
            }), null != k && J?.map(e => P?.renderIndicator(e, null != Y && !Number.isNaN(Y) ? Y : 0)), Q && null != $ && t && !ee(O) && (0, r.jsx)(d.Text, {
                className: h.Ey,
                variant: "text-xs/normal",
                color: "always-white",
                style: {
                    left: null != O ? `${O}px` : "auto"
                },
                children: $
            }), Q && f && null != Y && !ee(Y) && (0, r.jsx)(s.animated.div, {
                className: h.Ub,
                style: {
                    left: z.to(e => `${e}px`)
                }
            })]
        })
    })
}