/** chunk id: 582240 params = (module,exports,require) **/
n.d(t, {
    A: () => w
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
    g = n(365971),
    f = n(41984),
    m = n(129537),
    y = n(127242),
    p = n(968898),
    v = n(481484),
    _ = n(545807),
    x = n(652215),
    b = n(685411);
let E = [],
    w = i.memo(function(e) {
        let {
            widget: t,
            renderWidget: n,
            renderTitle: l,
            renderButtons: w,
            resizeValidation: C,
            containerRenderGate: I,
            className: O,
            dragContainerClassName: L
        } = e, D = (0, o.bG)([c.A], () => c.A.getWidgetConfig(t.type), [t.type]), k = (0, p.RE)(t.id, p.X1), N = (0, v.A)(), [T, S] = i.useState(() => I?.stores ?? E);
        (0, u.Ay)(() => {
            S(I?.stores ?? E)
        });
        let P = (0, o.bG)(T, () => I?.shouldRender({
                widget: t,
                locked: N
            }) ?? !0, [I, N, t]),
            j = (0, _.A)(),
            G = (0, o.bG)([A.A], () => A.A.windowSize((0, g.Q2)(j))),
            R = i.useCallback((e, t, n, r, i) => {
                let l = A.A.windowSize((0, g.Q2)((0, _.b)())),
                    a = (0, h.NO)(n, l),
                    o = (0, h.R9)(r, l);
                (0, d.uD)(t), (0, d.Ju)({
                    widgetId: t,
                    anchor: a,
                    size: o
                });
                let u = e === m.P.MOVE,
                    f = (0, h.Ly)(n, l.width, l.height, i.width, i.height);
                s.A.track(x.HAw.OVERLAY_LAYOUT_UPDATED, {
                    was_resized: !u,
                    was_dragged: u,
                    widget_type: c.A.getWidgetType(t),
                    window_width: l.width,
                    window_height: l.height,
                    widget_width: i.width,
                    widget_height: i.height,
                    widget_left: f.left,
                    widget_top: f.top
                })
            }, []),
            M = i.useCallback(e => {
                (0, d.uD)(e)
            }, []),
            {
                id: U,
                pinned: W,
                zIndex: Y,
                size: V,
                anchor: K,
                minSize: F
            } = t,
            B = i.useMemo(() => (0, h.fd)(V, G), [V, G]),
            z = (0, h.Nv)(K, G),
            {
                resizeX: X,
                resizeY: H,
                dragAnywhere: J,
                constrainAutoSizeToExplicitResizeEvents: Z
            } = D ?? {},
            Q = !N,
            q = W || !N,
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
            et = i.useCallback(e => null != l || null != w ? (0, r.jsxs)("div", {
                className: a()(b.vJ, k && b.vw),
                children: [l?.(t), w?.(t, e)]
            }) : null, [t, l, k, w]),
            en = (0, o.bG)([y.A], () => y.A.hasRenderDebugMode(f.x7.WidgetAreas)),
            er = i.useMemo(() => {
                if (null != C) return e => C({
                    ...e,
                    widget: t
                })
            }, [C, t]);
        return P ? (0, r.jsx)(m.A, {
            className: a()({
                [b.Yz]: en,
                [b.xu]: en && !W,
                [b.E]: en && W
            }, L),
            id: U,
            size: B,
            anchor: z,
            container: $,
            minSize: F ?? {
                width: 0,
                height: 0
            },
            hidden: !q,
            locked: N,
            resizeX: X ?? !1,
            resizeY: H ?? !1,
            style: {
                zIndex: Y
            },
            dragAnywhere: J ?? !1,
            constrainAutoSizeToExplicitResizeEvents: Z ?? !1,
            active: Q,
            onUpdate: R,
            onClick: M,
            targetWindow: j,
            forceShowExtras: k,
            renderExtras: et,
            resizeValidation: er,
            children: ee
        }) : null
    })