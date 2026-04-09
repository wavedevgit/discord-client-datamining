/** chunk id: 582240 params = (module,exports,require) **/
n.d(t, {
    A: () => C
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
    p = n(41984),
    g = n(129537),
    f = n(127242),
    A = n(968898),
    x = n(481484),
    I = n(545807),
    E = n(652215),
    b = n(393444);
let v = [],
    C = a.memo(function(e) {
        let {
            widget: t,
            renderWidget: n,
            renderTitle: r,
            renderButtons: C,
            resizeValidation: S,
            containerRenderGate: y,
            className: T,
            dragContainerClassName: N
        } = e, w = (0, s.bG)([u.A], () => u.A.getWidgetConfig(t.type), [t.type]), L = (0, A.RE)(t.id, A.X1), O = (0, x.A)(), [j, P] = a.useState(() => y?.stores ?? v);
        (0, c.Ay)(() => {
            P(y?.stores ?? v)
        });
        let D = (0, s.bG)(j, () => y?.shouldRender({
                widget: t,
                locked: O
            }) ?? !0, [y, O, t]),
            R = (0, I.A)(),
            k = (0, s.bG)([_.A], () => _.A.windowSize((0, m.Q2)(R))),
            M = a.useCallback((e, t, n, i, a) => {
                let r = _.A.windowSize((0, m.Q2)((0, I.b)())),
                    l = (0, h.NO)(n, r),
                    s = (0, h.R9)(i, r);
                (0, o.uD)(t), (0, o.Ju)({
                    widgetId: t,
                    anchor: l,
                    size: s
                });
                let c = e === g.P.MOVE,
                    p = (0, h.Ly)(n, r.width, r.height, a.width, a.height);
                d.A.track(E.HAw.OVERLAY_LAYOUT_UPDATED, {
                    was_resized: !c,
                    was_dragged: c,
                    widget_type: u.A.getWidgetType(t),
                    window_width: r.width,
                    window_height: r.height,
                    widget_width: a.width,
                    widget_height: a.height,
                    widget_left: p.left,
                    widget_top: p.top
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
            Q = !O,
            q = U || !O,
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
            et = a.useCallback(e => null != r || null != C ? (0, i.jsxs)("div", {
                className: l()(b.vJ, L && b.vw),
                children: [r?.(t), C?.(t, e)]
            }) : null, [t, r, L, C]),
            en = (0, s.bG)([f.A], () => f.A.hasRenderDebugMode(p.x7.WidgetAreas)),
            ei = a.useMemo(() => {
                if (null != S) return e => S({
                    ...e,
                    widget: t
                })
            }, [S, t]);
        return D ? (0, i.jsx)(g.A, {
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
            locked: O,
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
            targetWindow: R,
            forceShowExtras: L,
            renderExtras: et,
            resizeValidation: ei,
            children: ee
        }) : null
    })