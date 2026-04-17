/** chunk id: 183494 params = (module,exports,require) **/
n.d(t, {
    Ay: () => h
}), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(825638),
    u = n(876230),
    o = n(61491),
    c = n(397927),
    d = n(972441),
    m = n(645871),
    f = n(6821);
f.$9;
let p = {
    tension: 300,
    friction: 30,
    clamp: !0
};

function h(e) {
    let {
        isFullyVisible: t,
        percent: n,
        animate: a,
        interactionEnabled: h,
        backgroundColor: x,
        playerState: v,
        preloadedBuffers: E,
        durationSec: b,
        maxSeekableTime: g,
        progressClassName: y,
        timelineHeightPx: S = 4,
        segmentBorderRadius: C,
        hoverTimelineHeightPx: A,
        initialTimelineHeightPx: N = S,
        persistGrabber: R = !0,
        onClick: L,
        onScrubBack: w,
        onScrubForward: T,
        onDragStateChange: j,
        indicatorConfig: P,
        "data-testid": k
    } = e, {
        contRef: D,
        boundingRect: M,
        handleMouseEnter: I,
        handleMouseLeave: B,
        handleMouseMove: U,
        handleKeyDown: F,
        hoveredAtX: G,
        maxSeekableX: $,
        isHovering: O,
        isDragging: Q,
        dragX: _,
        isHoverBeyondMax: Y,
        handleClick: K,
        handleMouseDown: X,
        ariaProps: z
    } = (0, d.A)({
        onScrubBack: w,
        onScrubForward: T,
        maxSeekableTime: g,
        interactionEnabled: h,
        durationSec: b,
        percent: n,
        onClick: L,
        onDragStateChange: j
    }), V = l.useMemo(() => null == G || null == M ? null : (0, o.rB)((0, o.hc)(G, M, b)), [G, M, b]), W = l.useMemo(() => {
        if (null != M) return (0, o.TO)(n, M)
    }, [n, M]), H = M?.width != null && M?.width !== 0 ? M?.width : 1, [{
        playbackPxSpring: J
    }, Z] = (0, c.zhh)(() => ({
        playbackPxSpring: 0,
        config: p
    })), q = l.useRef(null), ee = l.useRef(!1), et = l.useRef(a);
    l.useLayoutEffect(() => {
        let e = et.current;
        if (et.current = a, e && !a && v !== u.Q6.PLAYING && null != q.current) {
            let e = parseFloat(getComputedStyle(q.current).left);
            Number.isNaN(e) || (q.current.style.left = `${e}px`, Z({
                playbackPxSpring: e,
                immediate: !0
            })), ee.current = !0
        } else if (!e && a && null != q.current) {
            let e = null == W || Number.isNaN(W) ? 0 : W,
                t = b > 0 ? Math.min(e + H / b * .275, H) : e;
            q.current.style.left = `${e}px`, Z({
                playbackPxSpring: t,
                immediate: !0
            })
        }
    }, [a, Z, W, v, b, H]);
    let en = l.useRef(Q);
    l.useLayoutEffect(() => {
        let e = en.current;
        en.current = Q, e && !Q && Z({
            playbackPxSpring: null == W || Number.isNaN(W) ? 0 : W,
            immediate: !0
        })
    }, [Q, W, Z]), l.useEffect(() => {
        if (ee.current) {
            ee.current = !1;
            return
        }
        let e = null == W || Number.isNaN(W) ? 0 : W;
        a && b > 0 ? Z({
            playbackPxSpring: Math.min(e + H / b * .275, H),
            immediate: !0
        }) : Z({
            playbackPxSpring: e,
            immediate: !0
        })
    }, [W, a, Z, H, b]);
    let er = b > 1,
        el = P?.indicators,
        ea = l.useMemo(() => {
            let e;
            return null != el && null != M && er ? (e = M.width, el.map(t => {
                let n = Math.max(0, Math.min((0, o.DX)(t.timeSec, b, M) - t.widthPx / 2, e - t.widthPx));
                return {
                    leftPx: n,
                    rightPx: n + t.widthPx,
                    gapPx: t.gapPx,
                    index: t.index,
                    source: t
                }
            })) : void 0
        }, [el, b, M, er]),
        ei = l.useMemo(() => ((e, t) => {
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
        })(H, ea), [H, ea]),
        es = P?.hoverExpansionPx ?? 0,
        eu = l.useCallback(e => null != e && null != ea && ea.some(t => e >= t.leftPx - t.gapPx - (P?.animatingIndex === t.index ? es : 0) && e <= t.rightPx + t.gapPx + (P?.animatingIndex === t.index ? es : 0)), [ea, P?.animatingIndex, es]);
    return (0, r.jsx)("div", {
        className: i()(f.jD, {
            [f.we]: a
        }),
        ref: D,
        "data-testid": k,
        style: {
            "--custom-timeline-height": `${null!=A&&O?A:S}px`,
            "--custom-initial-timeline-height": `${N}px`,
            "--custom-playback-transition-duration": "275ms"
        },
        children: (0, r.jsxs)(c.DUT, {
            className: i()(f.KF, {
                [f.uc]: h
            }),
            style: Y ? {
                cursor: "default"
            } : void 0,
            ignoreKeyPress: !0,
            onClick: K,
            onMouseDown: X,
            onMouseEnter: I,
            onMouseLeave: B,
            onMouseMove: U,
            onKeyDown: F,
            tabIndex: h ? void 0 : -1,
            children: [(0, r.jsx)("div", {
                className: f.G9,
                ...z,
                style: null != x ? {
                    "--custom-segment-bg": x
                } : void 0,
                children: null != M && ei.map((e, t) => (0, r.jsx)(m.A, {
                    segment: e,
                    playbackPxSpring: J,
                    animate: a,
                    playerState: v,
                    isDragging: Q,
                    dragX: _,
                    animatingIndex: P?.animatingIndex,
                    expansionSpring: P?.expansionSpring,
                    timelineWidth: H,
                    preloadedBuffers: E,
                    maxSeekableX: $,
                    segmentBorderRadius: C,
                    progressClassName: y
                }, t))
            }), null != M && ea?.map(e => P?.renderIndicator(e, null != W && !Number.isNaN(W) ? W : 0)), O && null != V && t && !eu(G) && (0, r.jsx)(c.Text, {
                className: f.Ey,
                variant: "text-xs/normal",
                color: "always-white",
                style: {
                    left: null != G ? `${G}px` : "auto"
                },
                children: V
            }), (O || R) && h && null != W && !eu(Q && null != _ ? _ : W) && (0, r.jsx)(s.animated.div, {
                ref: q,
                className: f.Ub,
                style: {
                    left: Q && null != _ ? `${_}px` : J.to(e => `${e}px`)
                }
            })]
        })
    })
}