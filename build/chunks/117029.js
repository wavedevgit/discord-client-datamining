/** chunk id: 117029 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n(451988),
    c = n(435371),
    d = n(397927),
    u = n(964486),
    h = n(461782),
    m = n(430452),
    A = n(40056),
    p = n(985018),
    g = n(695292),
    f = n(688046);

function _(e) {
    e.preventDefault(), e.stopPropagation()
}

function E(e) {
    return (1 & e.buttons) == 1
}
let x = l.memo(function(e) {
    let {
        mirror: t = !1,
        streamId: n,
        paused: s
    } = e, {
        onActive: x,
        onPreventIdle: C,
        onAllowIdle: S
    } = l.useContext(h.k3), {
        enabled: T,
        zoomLevel: N,
        minZoom: I,
        maxZoom: v,
        isDragging: y,
        isWheeling: b,
        isSlidering: j,
        setIsSlidering: R,
        doZoom: M,
        isZooming: D,
        videoAspectRatio: O,
        wrapperRef: L,
        panOffset: P,
        setPanOffset: k,
        clampPanOffset: w
    } = l.useContext(A.e9), [U, G] = l.useState(!1), F = l.useRef(null), B = N > I, H = l.useCallback(() => {
        C("interact")
    }, [C]), V = l.useCallback(() => {
        G(!1), S("interact")
    }, [S]), K = l.useMemo(() => {
        let e = 120 * Math.min(O, 32 / 9);
        return {
            "--custom-zoom-minimap-width": `${e}px`,
            "--custom-zoom-minimap-height": "120px"
        }
    }, [O]), W = l.useCallback(e => {
        if (null == F.current || null == L.current) return;
        let t = F.current.getBoundingClientRect(),
            n = L.current.clientWidth,
            i = L.current.clientHeight,
            l = e.x - t.left,
            s = e.y - t.top;
        k(w({
            x: (.5 - l / t.width) * n * N,
            y: (.5 - s / t.height) * i * N
        }))
    }, [w, N, L, k]), z = l.useCallback(e => {
        E(e) && (e.preventDefault(), e.stopPropagation(), G(!0), W({
            x: e.clientX,
            y: e.clientY
        }))
    }, [W]), q = l.useCallback(e => {
        U && (e.preventDefault(), e.stopPropagation(), W({
            x: e.clientX,
            y: e.clientY
        }))
    }, [U, W]), Y = l.useCallback(e => {
        !U || E(e) || (e.preventDefault(), e.stopPropagation(), G(!1))
    }, [U]), J = m.Ay.getVideoComponent(), $ = l.useMemo(() => {
        let e = null != L.current ? L.current.clientWidth : 1,
            t = null != L.current ? L.current.clientHeight : 1,
            n = 1 / N,
            i = 1 / N,
            l = .5 - P.x / (e * N),
            s = .5 - P.y / (t * N);
        return {
            "--custom-zoom-indicator-left": `${100*(0,r.clamp)(l-n/2,0,1-n)}%`,
            "--custom-zoom-indicator-top": `${100*(0,r.clamp)(s-i/2,0,1-i)}%`,
            "--custom-zoom-indicator-width": `${100*n}%`,
            "--custom-zoom-indicator-height": `${100*i}%`,
            "--custom-zoom-indicator-transition": y || U || b || j ? "none" : "top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out"
        }
    }, [y, U, b, j, P, N, L]), Z = l.useCallback(e => {
        e.preventDefault(), e.stopPropagation(), M(N - .25, A.qd, "button")
    }, [M, N]), X = l.useCallback(e => {
        e.preventDefault(), e.stopPropagation(), M(N + .25, A.qd, "button")
    }, [M, N]), Q = l.useRef(null), ee = l.useCallback(e => {
        R(!0), M(e, A.qd, "slider"), x(), null == Q.current && (Q.current = new o.Ep), Q.current.start(100, () => {
            R(!1)
        })
    }, [M, x, R]);
    return ((0, u.l0)(() => {
        Q.current?.stop()
    }), T && null != n) ? (0, i.jsxs)("div", {
        className: a()(f.ne, {
            [f.Ge]: D || B
        }),
        onMouseEnter: H,
        onMouseLeave: V,
        onClick: _,
        children: [(D || B) && (0, i.jsx)(d.DUT, {
            onClick: _,
            onMouseEnter: H,
            onMouseLeave: V,
            children: (0, i.jsxs)("div", {
                ref: F,
                className: f.Wc,
                style: K,
                onMouseDown: z,
                onMouseMove: q,
                onMouseUp: Y,
                children: [(0, i.jsx)(J, {
                    className: a()(f.BZ, {
                        [g.mirror]: t
                    }),
                    streamId: n,
                    paused: s,
                    reportContainerResized: !1
                }), (0, i.jsx)("div", {
                    className: f.xq,
                    style: $
                })]
            })
        }), (0, i.jsxs)("div", {
            className: f.xu,
            children: [(D || B) && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(c.m_, {
                    text: p.intl.string(p.t.M6Cmwy),
                    position: "top",
                    children: (0, i.jsx)(d.K0, {
                        icon: d.V0_,
                        onClick: Z,
                        disabled: N <= I,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": p.intl.string(p.t.M6Cmwy)
                    })
                }), (0, i.jsx)(d.Apm, {
                    minValue: I,
                    maxValue: v,
                    initialValue: N,
                    value: N,
                    asValueChanges: ee,
                    onValueRender: e => `${Math.round(100*e)}%`,
                    "aria-label": p.intl.string(p.t.grzPmr)
                })]
            }), (0, i.jsx)(c.m_, {
                text: p.intl.string(p.t["9hMafy"]),
                position: "top",
                children: (0, i.jsx)(d.K0, {
                    icon: d.r1u,
                    onClick: X,
                    disabled: N >= v,
                    variant: "overlay-secondary",
                    size: "sm",
                    "aria-label": p.intl.string(p.t["9hMafy"])
                })
            })]
        })]
    }) : null
})