/** chunk id: 40056, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => f,
    e9: () => A,
    qd: () => m
});
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n(451988),
    r = n(964486),
    o = n(652896),
    c = n(834757),
    d = n(290863),
    u = n(954571),
    h = n(652215);
let m = {
        x: 0,
        y: 0
    },
    A = l.createContext({
        enabled: !1,
        zoomLevel: 1,
        minZoom: 1,
        maxZoom: 5,
        setZoomLevel: () => {},
        isZooming: !1,
        setIsZooming: () => {},
        isDragging: !1,
        setIsDragging: () => {},
        isWheeling: !1,
        setIsWheeling: () => {},
        isSlidering: !1,
        setIsSlidering: () => {},
        videoAspectRatio: 16 / 9,
        setVideoAspectRatio: () => {},
        panOffset: m,
        setPanOffset: () => {},
        clampPanOffset: () => m,
        doZoom: () => {},
        wrapperRef: l.createRef()
    }),
    g = (0, s.debounce)((e, t, n) => {
        let i = null,
            l = null;
        if (null != n && (0, o.wL)(n)) {
            let e = (0, o.Iy)(n),
                t = (0, c.Ee)(e, d.A);
            i = t?.name ?? null, l = t?.id ?? null
        }
        u.default.track(h.HAw.VIDEO_STREAM_ZOOM_CHANGED, {
            zoom_level: e,
            method: t,
            share_application_name: i,
            share_application_id: l
        })
    }, 2e3),
    p = l.memo(function(e) {
        let {
            streamKey: t,
            minZoom: n = 1,
            maxZoom: o = 5,
            children: c
        } = e, [d, u] = l.useState(n), [h, p] = l.useState(!1), [f, _] = l.useState(!1), [E, x] = l.useState(!1), [C, S] = l.useState(!1), [I, T] = l.useState(16 / 9), [N, y] = l.useState({
            x: 0,
            y: 0
        }), v = l.useRef(null), b = l.useRef(null);
        (0, r.l0)(() => {
            b.current?.stop()
        });
        let j = l.useCallback((e, t) => {
                if (null == v.current) return m;
                let n = t ?? d,
                    i = v.current.clientWidth,
                    l = v.current.clientHeight,
                    a = i * (n - 1) / 2,
                    r = l * (n - 1) / 2;
                return {
                    x: (0, s.clamp)(e.x, -a, a),
                    y: (0, s.clamp)(e.y, -r, r)
                }
            }, [d]),
            R = l.useCallback((e, i, l) => {
                let r = (0, s.clamp)(e, n, o);
                if (null == i || r === d) return;
                p(!0);
                let c = r / d;
                y(e => j({
                    x: (e.x - i.x) * c + i.x,
                    y: (e.y - i.y) * c + i.y
                }, r)), u(r), g(r, l, t), null == b.current && (b.current = new a.Ep), b.current.start(2e3, () => {
                    p(!1)
                })
            }, [j, o, n, t, d]),
            M = l.useMemo(() => ({
                enabled: !0,
                zoomLevel: d,
                minZoom: n,
                maxZoom: o,
                setZoomLevel: u,
                isZooming: h,
                setIsZooming: p,
                isDragging: f,
                setIsDragging: _,
                isWheeling: E,
                setIsWheeling: x,
                isSlidering: C,
                setIsSlidering: S,
                videoAspectRatio: I,
                setVideoAspectRatio: T,
                doZoom: R,
                panOffset: N,
                setPanOffset: y,
                wrapperRef: v,
                clampPanOffset: j
            }), [j, R, f, C, E, h, o, n, N, I, d]);
        return (0, i.jsx)(A.Provider, {
            value: M,
            children: c
        })
    });

function f(e) {
    return e.enableZoom ? (0, i.jsx)(p, {
        ...e
    }) : e.children
}