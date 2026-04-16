/** chunk id: 901690 params = (module,exports,require) **/
n.d(t, {
    A: () => _
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
    A = n(926613);

function g(e) {
    return (1 & e.buttons) == 1
}
let _ = l.memo(function(e) {
    let {
        ...t
    } = e, {
        streamId: n,
        onResize: s,
        wrapperClassName: _
    } = t, {
        onActive: p
    } = l.useContext(d.k3), {
        enabled: f,
        minZoom: E,
        isDragging: C,
        setIsDragging: x,
        panOffset: S,
        setPanOffset: I,
        zoomLevel: T,
        isWheeling: v,
        setIsWheeling: N,
        isSlidering: y,
        setVideoAspectRatio: b,
        wrapperRef: j,
        doZoom: R,
        clampPanOffset: M
    } = l.useContext(m.e9), [L, D] = l.useState(null), [O, P] = l.useState(null), [w, U] = l.useState(0), [k, G] = l.useState(null), [F, H] = l.useState(null), [B, V] = l.useState(!1), W = l.useRef(new r.Ep), K = l.useRef(new r.Ep), z = l.useRef(null), Y = T > E, J = l.useCallback(e => {
        e.width > 0 && e.height > 0 && b(e.width / e.height), s?.(e)
    }, [s, b]), q = l.useCallback(e => {
        if (null == j.current) return m.qd;
        let t = j.current.getBoundingClientRect();
        return {
            x: e.clientX - t.left - t.width / 2,
            y: e.clientY - t.top - t.height / 2
        }
    }, [j]), $ = l.useCallback(e => {
        if (!Y || !g(e)) return;
        e.preventDefault(), e.stopPropagation();
        let t = q(e);
        x(!0), P(t), D(t), U(Date.now()), H(t), G(S)
    }, [q, Y, S, x]), Z = l.useCallback(e => {
        if ((f || Y) && p(), !C || !Y || null == F || null == k) return;
        e.preventDefault(), e.stopPropagation();
        let t = q(e),
            n = t.x - F.x,
            i = t.y - F.y;
        I(M({
            x: k.x + n,
            y: k.y + i
        })), D(t)
    }, [M, F, k, f, q, C, Y, p, I]), X = l.useCallback(e => {
        !C || g(e) || (e.preventDefault(), e.stopPropagation(), x(!1), H(null), G(null))
    }, [C, x]), Q = l.useCallback(e => {
        if (Y && null != O && null != L) {
            let {
                x: t,
                y: n
            } = O, {
                x: i,
                y: l
            } = L;
            (Math.sqrt((i - t) ** 2 + (l - n) ** 2) > .01 || Date.now() - w >= 500) && (e.preventDefault(), e.stopPropagation())
        }
    }, [Y, O, w, L]), ee = l.useCallback(() => {
        x(!1), H(null), G(null)
    }, [x]), et = l.useCallback(e => {
        f && (N(!0), R(T - e.deltaY / 100, q(e), "wheel"), p(), W.current.start(100, () => {
            N(!1)
        }))
    }, [f, R, T, q, p, N]);
    (0, o.i4)(j, l.useCallback(e => {
        let {
            width: t,
            height: n
        } = e;
        if (!Y || null == t || null == n) return;
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
        1 > Math.abs(t - l) && 1 > Math.abs(n - s) || (V(!0), I(e => {
            let i = l * (T - 1) / 2,
                a = s * (T - 1) / 2,
                r = t * (T - 1) / 2,
                o = n * (T - 1) / 2;
            return M({
                x: (0 !== i ? e.x / i : 0) * r,
                y: (0 !== a ? e.y / a : 0) * o
            })
        }), z.current = {
            width: t,
            height: n
        }, K.current.start(100, () => {
            V(!1)
        }))
    }, [M, Y, T, I]), [Y, T]), (0, c.l0)(() => {
        W.current.stop(), K.current.stop()
    }), l.useEffect(() => {
        null != n && (0, u.c)(n, void 0, f && Y ? T : 1)
    }, [f, Y, n, T]);
    let en = l.useMemo(() => {
        let e = M(S);
        return {
            "--custom-zoom-scale": T,
            "--custom-pan-x": `${e.x}px`,
            "--custom-pan-y": `${e.y}px`,
            "--custom-zoom-transition": C || B || v || y ? "none" : "transform 0.15s ease-out"
        }
    }, [M, C, B, v, y, S, T]);
    return (0, i.jsx)("div", {
        ref: j,
        className: a()(A.iE, _, {
            [A.rc]: f && Y,
            [A.d$]: C
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
                onResize: J,
                wrapperClassName: void 0
            })
        })
    })
})