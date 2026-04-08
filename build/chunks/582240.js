/** chunk id: 582240 params = (module,exports,require) **/
n.d(t, {
    A: () => S
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(311907),
    o = n(391973),
    d = n(684013),
    c = n(964486),
    u = n(555528),
    _ = n(531685),
    h = n(5463),
    m = n(365971),
    f = n(41984),
    p = n(129537),
    g = n(127242),
    A = n(968898),
    x = n(481484),
    I = n(545807),
    E = n(652215),
    b = n(393444);
let v = [],
    S = a.memo(function(e) {
        let {
            widget: t,
            renderWidget: n,
            renderTitle: r,
            renderButtons: S,
            resizeValidation: C,
            containerRenderGate: y,
            className: T,
            dragContainerClassName: N
        } = e, w = (0, s.bG)([u.A], () => u.A.getWidgetConfig(t.type), [t.type]), L = (0, A.RE)(t.id, A.X1), j = (0, x.A)(), [O, P] = a.useState(() => y?.stores ?? v);
        (0, c.Ay)(() => {
            P(y?.stores ?? v)
        });
        let R = (0, s.bG)(O, () => y?.shouldRender({
                widget: t,
                locked: j
            }) ?? !0, [y, j, t]),
            D = (0, I.A)(),
            k = (0, s.bG)([_.A], () => _.A.windowSize((0, m.Q2)(D))),
            M = a.useCallback((e, t, n, i, a) => {
                let r = _.A.windowSize((0, m.Q2)((0, I.b)())),
                    l = (0, h.NO)(n, r),
                    s = (0, h.R9)(i, r);
                (0, o.uD)(t), (0, o.Ju)({
                    widgetId: t,
                    anchor: l,
                    size: s
                });
                let c = e === p.P.MOVE,
                    f = (0, h.Ly)(n, r.width, r.height, a.width, a.height);
                d.A.track(E.HAw.OVERLAY_LAYOUT_UPDATED, {
                    was_resized: !c,
                    was_dragged: c,
                    widget_type: u.A.getWidgetType(t),
                    window_width: r.width,
                    window_height: r.height,
                    widget_width: a.width,
                    widget_height: a.height,
                    widget_left: f.left,
                    widget_top: f.top
                })
            }, []),
            G = a.useCallback(e => {
                (0, o.uD)(e)
            }, []),
            {
                id: z,
                pinned: U,
                zIndex: V,
                size: F,
                anchor: W,
                minSize: H
            } = t,
            B = a.useMemo(() => (0, h.fd)(F, k), [F, k]),
            Y = (0, h.Nv)(W, k),
            {
                resizeX: X,
                resizeY: Z,
                dragAnywhere: K,
                constrainAutoSizeToExplicitResizeEvents: J
            } = w ?? {},
            Q = !j,
            q = U || !j,
            $ = a.useMemo(() => ({
                minX: 0,
                minY: 0,
                maxX: k.width,
                maxY: k.height
            }), [k]),
            ee = a.useCallback(e => n({
                ...e,
                widget: t,
                dragging: null != e.dragOperation,
                className: T
            }), [t, n, T]),
            et = a.useCallback(e => null != r || null != S ? (0, i.jsxs)("div", {
                className: l()(b.vJ, L && b.vw),
                children: [r?.(t), S?.(t, e)]
            }) : null, [t, r, L, S]),
            en = (0, s.bG)([g.A], () => g.A.hasRenderDebugMode(f.x7.WidgetAreas)),
            ei = a.useMemo(() => {
                if (null != C) return e => C({
                    ...e,
                    widget: t
                })
            }, [C, t]);
        return R ? (0, i.jsx)(p.A, {
            className: l()({
                [b.Yz]: en,
                [b.xu]: en && !U,
                [b.E]: en && U
            }, N),
            id: z,
            size: B,
            anchor: Y,
            container: $,
            minSize: H ?? {
                width: 0,
                height: 0
            },
            hidden: !q,
            locked: j,
            resizeX: X ?? !1,
            resizeY: Z ?? !1,
            style: {
                zIndex: V
            },
            dragAnywhere: K ?? !1,
            constrainAutoSizeToExplicitResizeEvents: J ?? !1,
            active: Q,
            onUpdate: M,
            onClick: G,
            targetWindow: D,
            forceShowExtras: L,
            renderExtras: et,
            resizeValidation: ei,
            children: ee
        }) : null
    })