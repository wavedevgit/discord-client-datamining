/** chunk id: 582240, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    o = n(391973),
    u = n(684013),
    d = n(964486),
    c = n(555528),
    h = n(531685),
    m = n(5463),
    g = n(365971),
    p = n(41984),
    A = n(129537),
    f = n(127242),
    x = n(968898),
    E = n(481484),
    S = n(545807),
    v = n(652215),
    C = n(121834);
let I = [],
    T = l.memo(function(e) {
        let {
            widget: t,
            renderWidget: n,
            renderTitle: r,
            renderButtons: T,
            resizeValidation: _,
            containerRenderGate: y,
            className: j,
            dragContainerClassName: b
        } = e, w = (0, a.bG)([c.A], () => c.A.getWidgetConfig(t.type), [t.type]), O = (0, x.RE)(t.id, x.X1), N = (0, E.A)(), [M, R] = l.useState(() => y?.stores ?? I);
        (0, d.Ay)(() => {
            R(y?.stores ?? I)
        });
        let k = (0, a.bG)(M, () => y?.shouldRender({
                widget: t,
                locked: N
            }) ?? !0, [y, N, t]),
            L = (0, S.A)(),
            D = (0, a.bG)([h.A], () => h.A.windowSize((0, g.Q2)(L))),
            z = l.useCallback((e, t, n, i, l) => {
                let r = h.A.windowSize((0, g.Q2)((0, S.b)())),
                    s = (0, m.NO)(n, r),
                    a = (0, m.R9)(i, r);
                (0, o.uD)(t), (0, o.Ju)({
                    widgetId: t,
                    anchor: s,
                    size: a
                });
                let d = e === A.P.MOVE,
                    p = (0, m.Ly)(n, r.width, r.height, l.width, l.height);
                u.A.track(v.HAw.OVERLAY_LAYOUT_UPDATED, {
                    was_resized: !d,
                    was_dragged: d,
                    widget_type: c.A.getWidgetType(t),
                    window_width: r.width,
                    window_height: r.height,
                    widget_width: l.width,
                    widget_height: l.height,
                    widget_left: p.left,
                    widget_top: p.top
                })
            }, []),
            P = l.useCallback(e => {
                (0, o.uD)(e)
            }, []),
            {
                id: G,
                pinned: V,
                zIndex: U,
                size: H,
                anchor: Y,
                minSize: F
            } = t,
            Z = l.useMemo(() => (0, m.fd)(H, D), [H, D]),
            W = (0, m.Nv)(Y, D),
            {
                resizeX: X,
                resizeY: K,
                dragAnywhere: B,
                constrainAutoSizeToExplicitResizeEvents: q
            } = w ?? {},
            Q = !N,
            J = V || !N,
            $ = l.useMemo(() => ({
                minX: 0,
                minY: 0,
                maxX: D.width,
                maxY: D.height
            }), [D]),
            ee = l.useCallback(e => n({
                ...e,
                widget: t,
                dragging: null != e.dragOperation,
                className: j
            }), [t, n, j]),
            et = l.useCallback(e => null != r || null != T ? (0, i.jsxs)("div", {
                className: s()(C.vJ, O && C.vw),
                children: [r?.(t), T?.(t, e)]
            }) : null, [t, r, O, T]),
            en = (0, a.bG)([f.A], () => f.A.hasRenderDebugMode(p.x7.WidgetAreas)),
            ei = l.useMemo(() => {
                if (null != _) return e => _({
                    ...e,
                    widget: t
                })
            }, [_, t]);
        return k ? (0, i.jsx)(A.A, {
            className: s()({
                [C.Yz]: en,
                [C.xu]: en && !V,
                [C.E]: en && V
            }, b),
            id: G,
            size: Z,
            anchor: W,
            container: $,
            minSize: F ?? {
                width: 0,
                height: 0
            },
            hidden: !J,
            locked: N,
            resizeX: X ?? !1,
            resizeY: K ?? !1,
            style: {
                zIndex: U
            },
            dragAnywhere: B ?? !1,
            constrainAutoSizeToExplicitResizeEvents: q ?? !1,
            active: Q,
            onUpdate: z,
            onClick: P,
            targetWindow: L,
            forceShowExtras: O,
            renderExtras: et,
            resizeValidation: ei,
            children: ee
        }) : null
    })