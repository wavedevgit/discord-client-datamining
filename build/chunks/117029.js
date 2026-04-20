/** chunk id: 117029 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(735438),
    o = n(451988),
    c = n(435371),
    d = n(397927),
    u = n(964486),
    h = n(461782),
    m = n(430452),
    A = n(40056),
    g = n(985018),
    _ = n(473772),
    p = n(590782);

function f(e) {
    e.preventDefault(), e.stopPropagation()
}

function E(e) {
    return (1 & e.buttons) == 1
}
let C = l.memo(function(e) {
    let {
        mirror: t = !1,
        streamId: n,
        paused: a
    } = e, {
        onActive: C,
        onPreventIdle: x,
        onAllowIdle: S
    } = l.useContext(h.k3), {
        enabled: I,
        zoomLevel: T,
        minZoom: v,
        maxZoom: N,
        isDragging: y,
        isWheeling: b,
        isSlidering: j,
        setIsSlidering: R,
        doZoom: M,
        isZooming: L,
        videoAspectRatio: D,
        wrapperRef: O,
        panOffset: P,
        setPanOffset: k,
        clampPanOffset: w
    } = l.useContext(A.e9), [U, G] = l.useState(!1), F = l.useRef(null), B = T > v, H = l.useCallback(() => {
        x("interact")
    }, [x]), V = l.useCallback(() => {
        G(!1), S("interact")
    }, [S]), W = l.useMemo(() => {
        let e = 120 * Math.min(D, 32 / 9);
        return {
            "--custom-zoom-minimap-width": `${e}px`,
            "--custom-zoom-minimap-height": "120px"
        }
    }, [D]), K = l.useCallback(e => {
        if (null == F.current || null == O.current) return;
        let t = F.current.getBoundingClientRect(),
            n = O.current.clientWidth,
            i = O.current.clientHeight,
            l = e.x - t.left,
            a = e.y - t.top;
        k(w({
            x: (.5 - l / t.width) * n * T,
            y: (.5 - a / t.height) * i * T
        }))
    }, [w, T, O, k]), z = l.useCallback(e => {
        E(e) && (e.preventDefault(), e.stopPropagation(), G(!0), K({
            x: e.clientX,
            y: e.clientY
        }))
    }, [K]), Y = l.useCallback(e => {
        U && (e.preventDefault(), e.stopPropagation(), K({
            x: e.clientX,
            y: e.clientY
        }))
    }, [U, K]), J = l.useCallback(e => {
        !U || E(e) || (e.preventDefault(), e.stopPropagation(), G(!1))
    }, [U]), q = m.Ay.getVideoComponent(), $ = l.useMemo(() => {
        let e = null != O.current ? O.current.clientWidth : 1,
            t = null != O.current ? O.current.clientHeight : 1,
            n = 1 / T,
            i = 1 / T,
            l = .5 - P.x / (e * T),
            a = .5 - P.y / (t * T);
        return {
            "--custom-zoom-indicator-left": `${100*(0,r.clamp)(l-n/2,0,1-n)}%`,
            "--custom-zoom-indicator-top": `${100*(0,r.clamp)(a-i/2,0,1-i)}%`,
            "--custom-zoom-indicator-width": `${100*n}%`,
            "--custom-zoom-indicator-height": `${100*i}%`,
            "--custom-zoom-indicator-transition": y || U || b || j ? "none" : "top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out"
        }
    }, [y, U, b, j, P, T, O]), Z = l.useCallback(e => {
        e.preventDefault(), e.stopPropagation(), M(T - .25, A.qd, "button")
    }, [M, T]), X = l.useCallback(e => {
        e.preventDefault(), e.stopPropagation(), M(T + .25, A.qd, "button")
    }, [M, T]), Q = l.useRef(null), ee = l.useCallback(e => {
        R(!0), M(e, A.qd, "slider"), C(), null == Q.current && (Q.current = new o.Ep), Q.current.start(100, () => {
            R(!1)
        })
    }, [M, C, R]);
    return ((0, u.l0)(() => {
        Q.current?.stop()
    }), I && null != n) ? (0, i.jsxs)("div", {
        className: s()(p.ne, {
            [p.Ge]: L || B
        }),
        onMouseEnter: H,
        onMouseLeave: V,
        onClick: f,
        children: [(L || B) && (0, i.jsx)(d.DUT, {
            onClick: f,
            onMouseEnter: H,
            onMouseLeave: V,
            children: (0, i.jsxs)("div", {
                ref: F,
                className: p.Wc,
                style: W,
                onMouseDown: z,
                onMouseMove: Y,
                onMouseUp: J,
                children: [(0, i.jsx)(q, {
                    className: s()(p.BZ, {
                        [_.mirror]: t
                    }),
                    streamId: n,
                    paused: a,
                    reportContainerResized: !1
                }), (0, i.jsx)("div", {
                    className: p.xq,
                    style: $
                })]
            })
        }), (0, i.jsxs)("div", {
            className: p.xu,
            children: [(L || B) && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(c.m_, {
                    text: g.intl.string(g.t.M6Cmwy),
                    position: "top",
                    children: (0, i.jsx)(d.K0, {
                        icon: d.V0_,
                        onClick: Z,
                        disabled: T <= v,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": g.intl.string(g.t.M6Cmwy)
                    })
                }), (0, i.jsx)(d.Apm, {
                    minValue: v,
                    maxValue: N,
                    initialValue: T,
                    value: T,
                    asValueChanges: ee,
                    onValueRender: e => `${Math.round(100*e)}%`,
                    "aria-label": g.intl.string(g.t.grzPmr)
                })]
            }), (0, i.jsx)(c.m_, {
                text: g.intl.string(g.t["9hMafy"]),
                position: "top",
                children: (0, i.jsx)(d.K0, {
                    icon: d.r1u,
                    onClick: X,
                    disabled: T >= N,
                    variant: "overlay-secondary",
                    size: "sm",
                    "aria-label": g.intl.string(g.t["9hMafy"])
                })
            })]
        })]
    }) : null
})