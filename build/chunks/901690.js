/** chunk id: 901690 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(451988),
    o = n(765671),
    c = n(964486),
    d = n(461782),
    u = n(426179),
    h = n(401901),
    m = n(40056),
    A = n(422098);

function p(e) {
    return (1 & e.buttons) == 1
}
let g = l.memo(function(e) {
    let {
        ...t
    } = e, {
        streamId: n,
        onResize: s,
        wrapperClassName: g
    } = t, {
        onActive: f
    } = l.useContext(d.k3), {
        enabled: _,
        minZoom: E,
        isDragging: x,
        setIsDragging: C,
        panOffset: S,
        setPanOffset: T,
        zoomLevel: N,
        isWheeling: I,
        setIsWheeling: v,
        isSlidering: y,
        setVideoAspectRatio: b,
        wrapperRef: j,
        doZoom: R,
        clampPanOffset: M
    } = l.useContext(m.e9), [D, O] = l.useState(null), [L, P] = l.useState(null), [k, w] = l.useState(0), [U, G] = l.useState(null), [F, B] = l.useState(null), [H, V] = l.useState(!1), K = l.useRef(new r.Ep), W = l.useRef(new r.Ep), z = l.useRef(null), q = N > E, Y = l.useCallback(e => {
        e.width > 0 && e.height > 0 && b(e.width / e.height), s?.(e)
    }, [s, b]), J = l.useCallback(e => {
        if (null == j.current) return m.qd;
        let t = j.current.getBoundingClientRect();
        return {
            x: e.clientX - t.left - t.width / 2,
            y: e.clientY - t.top - t.height / 2
        }
    }, [j]), $ = l.useCallback(e => {
        if (!q || !p(e)) return;
        e.preventDefault(), e.stopPropagation();
        let t = J(e);
        C(!0), P(t), O(t), w(Date.now()), B(t), G(S)
    }, [J, q, S, C]), Z = l.useCallback(e => {
        if ((_ || q) && f(), !x || !q || null == F || null == U) return;
        e.preventDefault(), e.stopPropagation();
        let t = J(e),
            n = t.x - F.x,
            i = t.y - F.y;
        T(M({
            x: U.x + n,
            y: U.y + i
        })), O(t)
    }, [M, F, U, _, J, x, q, f, T]), X = l.useCallback(e => {
        !x || p(e) || (e.preventDefault(), e.stopPropagation(), C(!1), B(null), G(null))
    }, [x, C]), Q = l.useCallback(e => {
        if (q && null != L && null != D) {
            let {
                x: t,
                y: n
            } = L, {
                x: i,
                y: l
            } = D;
            (Math.sqrt((i - t) ** 2 + (l - n) ** 2) > .01 || Date.now() - k >= 500) && (e.preventDefault(), e.stopPropagation())
        }
    }, [q, L, k, D]), ee = l.useCallback(() => {
        C(!1), B(null), G(null)
    }, [C]), et = l.useCallback(e => {
        _ && (v(!0), R(N - e.deltaY / 100, J(e), "wheel"), f(), K.current.start(100, () => {
            v(!1)
        }))
    }, [_, R, N, J, f, v]);
    (0, o.i4)(j, l.useCallback(e => {
        let {
            width: t,
            height: n
        } = e;
        if (!q || null == t || null == n) return;
        let i = z.current;
        if (null == i) {
            z.current = {
                width: t,
                height: n
            };
            return
        }
        let {
            width: l,
            height: s
        } = i;
        1 > Math.abs(t - l) && 1 > Math.abs(n - s) || (V(!0), T(e => {
            let i = l * (N - 1) / 2,
                a = s * (N - 1) / 2,
                r = t * (N - 1) / 2,
                o = n * (N - 1) / 2;
            return M({
                x: (0 !== i ? e.x / i : 0) * r,
                y: (0 !== a ? e.y / a : 0) * o
            })
        }), z.current = {
            width: t,
            height: n
        }, W.current.start(100, () => {
            V(!1)
        }))
    }, [M, q, N, T]), [q, N]), (0, c.l0)(() => {
        K.current.stop(), W.current.stop()
    }), l.useEffect(() => {
        null != n && (0, u.c)(n, void 0, _ && q ? N : 1)
    }, [_, q, n, N]);
    let en = l.useMemo(() => {
        let e = M(S);
        return {
            "--custom-zoom-scale": N,
            "--custom-pan-x": `${e.x}px`,
            "--custom-pan-y": `${e.y}px`,
            "--custom-zoom-transition": x || H || I || y ? "none" : "transform 0.15s ease-out"
        }
    }, [M, x, H, I, y, S, N]);
    return (0, i.jsx)("div", {
        ref: j,
        className: a()(A.iE, g, {
            [A.rc]: _ && q,
            [A.d$]: x
        }),
        onMouseDown: $,
        onMouseMove: Z,
        onMouseUp: X,
        onMouseLeave: ee,
        onWheel: et,
        onClick: Q,
        children: null != n && (0, i.jsx)("div", {
            className: a()(A.j, A.L2),
            style: en,
            children: (0, i.jsx)(h.A, {
                ...t,
                onResize: Y,
                wrapperClassName: void 0
            })
        })
    })
})