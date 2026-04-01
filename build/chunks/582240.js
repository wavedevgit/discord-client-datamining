/** chunk id: 582240 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(391973),
    d = n(684013),
    u = n(964486),
    c = n(555528),
    h = n(531685),
    g = n(5463),
    m = n(365971),
    p = n(41984),
    A = n(129537),
    x = n(127242),
    E = n(968898),
    f = n(481484),
    S = n(545807),
    I = n(652215),
    T = n(620819);
let v = [],
    C = s.memo(function(e) {
        let {
            widget: t,
            renderWidget: n,
            renderTitle: l,
            renderButtons: C,
            resizeValidation: j,
            containerRenderGate: y,
            className: w,
            dragContainerClassName: O
        } = e, _ = (0, a.bG)([c.A], () => c.A.getWidgetConfig(t.type), [t.type]), N = (0, E.RE)(t.id, E.X1), b = (0, f.A)(), [R, M] = s.useState(() => y?.stores ?? v);
        (0, u.Ay)(() => {
            M(y?.stores ?? v)
        });
        let L = (0, a.bG)(R, () => y?.shouldRender({
                widget: t,
                locked: b
            }) ?? !0, [y, b, t]),
            z = (0, S.A)(),
            D = (0, a.bG)([h.A], () => h.A.windowSize((0, m.Q2)(z))),
            k = s.useCallback((e, t, n, i, s) => {
                let l = h.A.windowSize((0, m.Q2)((0, S.b)())),
                    r = (0, g.NO)(n, l),
                    a = (0, g.R9)(i, l);
                (0, o.uD)(t), (0, o.Ju)({
                    widgetId: t,
                    anchor: r,
                    size: a
                });
                let u = e === A.P.MOVE,
                    p = (0, g.Ly)(n, l.width, l.height, s.width, s.height);
                d.A.track(I.HAw.OVERLAY_LAYOUT_UPDATED, {
                    was_resized: !u,
                    was_dragged: u,
                    widget_type: c.A.getWidgetType(t),
                    window_width: l.width,
                    window_height: l.height,
                    widget_width: s.width,
                    widget_height: s.height,
                    widget_left: p.left,
                    widget_top: p.top
                })
            }, []),
            P = s.useCallback(e => {
                (0, o.uD)(e)
            }, []),
            {
                id: G,
                pinned: V,
                zIndex: U,
                size: H,
                anchor: Y,
                minSize: Z
            } = t,
            W = s.useMemo(() => (0, g.fd)(H, D), [H, D]),
            X = (0, g.Nv)(Y, D),
            {
                resizeX: F,
                resizeY: K,
                dragAnywhere: B,
                constrainAutoSizeToExplicitResizeEvents: q
            } = _ ?? {},
            Q = !b,
            J = V || !b,
            $ = s.useMemo(() => ({
                minX: 0,
                minY: 0,
                maxX: D.width,
                maxY: D.height
            }), [D]),
            ee = s.useCallback(e => n({
                ...e,
                widget: t,
                dragging: null != e.dragOperation,
                className: w
            }), [t, n, w]),
            et = s.useCallback(e => null != l || null != C ? (0, i.jsxs)("div", {
                className: r()(T.vJ, N && T.vw),
                children: [l?.(t), C?.(t, e)]
            }) : null, [t, l, N, C]),
            en = (0, a.bG)([x.A], () => x.A.hasRenderDebugMode(p.x7.WidgetAreas)),
            ei = s.useMemo(() => {
                if (null != j) return e => j({
                    ...e,
                    widget: t
                })
            }, [j, t]);
        return L ? (0, i.jsx)(A.A, {
            className: r()({
                [T.Yz]: en,
                [T.xu]: en && !V,
                [T.E]: en && V
            }, O),
            id: G,
            size: W,
            anchor: X,
            container: $,
            minSize: Z ?? {
                width: 0,
                height: 0
            },
            hidden: !J,
            locked: b,
            resizeX: F ?? !1,
            resizeY: K ?? !1,
            style: {
                zIndex: U
            },
            dragAnywhere: B ?? !1,
            constrainAutoSizeToExplicitResizeEvents: q ?? !1,
            active: Q,
            onUpdate: k,
            onClick: P,
            targetWindow: z,
            forceShowExtras: N,
            renderExtras: et,
            resizeValidation: ei,
            children: ee
        }) : null
    })