/** chunk id: 582240 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(311907),
    d = n(391973),
    s = n(684013),
    u = n(964486),
    c = n(555528),
    A = n(531685),
    h = n(5463),
    f = n(365971),
    g = n(41984),
    m = n(129537),
    y = n(127242),
    p = n(968898),
    v = n(481484),
    _ = n(545807),
    w = n(652215),
    x = n(620819);
let E = [],
    b = i.memo(function(e) {
        let {
            widget: t,
            renderWidget: n,
            renderTitle: l,
            renderButtons: b,
            resizeValidation: I,
            containerRenderGate: C,
            className: O,
            dragContainerClassName: L
        } = e, k = (0, o.bG)([c.A], () => c.A.getWidgetConfig(t.type), [t.type]), N = (0, p.RE)(t.id, p.X1), D = (0, v.A)(), [P, j] = i.useState(() => C?.stores ?? E);
        (0, u.Ay)(() => {
            j(C?.stores ?? E)
        });
        let T = (0, o.bG)(P, () => C?.shouldRender({
                widget: t,
                locked: D
            }) ?? !0, [C, D, t]),
            S = (0, _.A)(),
            G = (0, o.bG)([A.A], () => A.A.windowSize((0, f.Q2)(S))),
            R = i.useCallback((e, t, n, r, i) => {
                let l = A.A.windowSize((0, f.Q2)((0, _.b)())),
                    a = (0, h.NO)(n, l),
                    o = (0, h.R9)(r, l);
                (0, d.uD)(t), (0, d.Ju)({
                    widgetId: t,
                    anchor: a,
                    size: o
                });
                let u = e === m.P.MOVE,
                    g = (0, h.Ly)(n, l.width, l.height, i.width, i.height);
                s.A.track(w.HAw.OVERLAY_LAYOUT_UPDATED, {
                    was_resized: !u,
                    was_dragged: u,
                    widget_type: c.A.getWidgetType(t),
                    window_width: l.width,
                    window_height: l.height,
                    widget_width: i.width,
                    widget_height: i.height,
                    widget_left: g.left,
                    widget_top: g.top
                })
            }, []),
            M = i.useCallback(e => {
                (0, d.uD)(e)
            }, []),
            {
                id: V,
                pinned: U,
                zIndex: W,
                size: K,
                anchor: Y,
                minSize: F
            } = t,
            B = i.useMemo(() => (0, h.fd)(K, G), [K, G]),
            z = (0, h.Nv)(Y, G),
            {
                resizeX: H,
                resizeY: X,
                dragAnywhere: J,
                constrainAutoSizeToExplicitResizeEvents: Z
            } = k ?? {},
            Q = !D,
            q = U || !D,
            $ = i.useMemo(() => ({
                minX: 0,
                minY: 0,
                maxX: G.width,
                maxY: G.height
            }), [G]),
            ee = i.useCallback(e => n({
                ...e,
                widget: t,
                dragging: null != e.dragOperation,
                className: O
            }), [t, n, O]),
            et = i.useCallback(e => null != l || null != b ? (0, r.jsxs)("div", {
                className: a()(x.vJ, N && x.vw),
                children: [l?.(t), b?.(t, e)]
            }) : null, [t, l, N, b]),
            en = (0, o.bG)([y.A], () => y.A.hasRenderDebugMode(g.x7.WidgetAreas)),
            er = i.useMemo(() => {
                if (null != I) return e => I({
                    ...e,
                    widget: t
                })
            }, [I, t]);
        return T ? (0, r.jsx)(m.A, {
            className: a()({
                [x.Yz]: en,
                [x.xu]: en && !U,
                [x.E]: en && U
            }, L),
            id: V,
            size: B,
            anchor: z,
            container: $,
            minSize: F ?? {
                width: 0,
                height: 0
            },
            hidden: !q,
            locked: D,
            resizeX: H ?? !1,
            resizeY: X ?? !1,
            style: {
                zIndex: W
            },
            dragAnywhere: J ?? !1,
            constrainAutoSizeToExplicitResizeEvents: Z ?? !1,
            active: Q,
            onUpdate: R,
            onClick: M,
            targetWindow: S,
            forceShowExtras: N,
            renderExtras: et,
            resizeValidation: er,
            children: ee
        }) : null
    })