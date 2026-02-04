/** chunk id: 582240, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => I
}), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(311907),
    s = n(391973),
    u = n(684013),
    c = n(964486),
    d = n(555528),
    h = n(531685),
    p = n(5463),
    f = n(365971),
    g = n(41984),
    m = n(129537),
    A = n(127242),
    y = n(968898),
    O = n(481484),
    v = n(545807),
    b = n(652215),
    E = n(121834);

function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i
        })
    }
    return e
}

function S(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let x = [],
    I = r.memo(function(e) {
        let {
            widget: t,
            renderWidget: n,
            renderTitle: l,
            renderButtons: I,
            resizeValidation: j,
            containerRenderGate: C,
            className: T,
            dragContainerClassName: w
        } = e, N = (0, o.bG)([d.A], () => d.A.getWidgetConfig(t.type), [t.type]), P = (0, y.RE)(t.id, y.X1), D = (0, O.A)(), [R, L] = r.useState(() => {
            var e;
            return null != (e = null == C ? void 0 : C.stores) ? e : x
        });
        (0, c.Ay)(() => {
            var e;
            L(null != (e = null == C ? void 0 : C.stores) ? e : x)
        });
        let k = (0, o.bG)(R, () => {
                var e;
                return null == (e = null == C ? void 0 : C.shouldRender({
                    widget: t,
                    locked: D
                })) || e
            }, [C, D, t]),
            M = (0, v.A)(),
            z = (0, o.bG)([h.A], () => h.A.windowSize((0, f.Q2)(M))),
            V = r.useCallback((e, t, n, i, r) => {
                let l = h.A.windowSize((0, f.Q2)((0, v.b)())),
                    a = (0, p.NO)(n, l),
                    o = (0, p.R9)(i, l);
                (0, s.uD)(t), (0, s.Ju)({
                    widgetId: t,
                    anchor: a,
                    size: o
                });
                let c = e === m.P.MOVE,
                    g = (0, p.Ly)(n, l.width, l.height, r.width, r.height);
                u.A.track(b.HAw.OVERLAY_LAYOUT_UPDATED, {
                    was_resized: !c,
                    was_dragged: c,
                    widget_type: d.A.getWidgetType(t),
                    window_width: l.width,
                    window_height: l.height,
                    widget_width: r.width,
                    widget_height: r.height,
                    widget_left: g.left,
                    widget_top: g.top
                })
            }, []),
            U = r.useCallback(e => {
                (0, s.uD)(e)
            }, []),
            {
                id: G,
                pinned: H,
                zIndex: Y,
                size: F,
                anchor: W,
                minSize: K
            } = t,
            Z = r.useMemo(() => (0, p.fd)(F, z), [F, z]),
            B = (0, p.Nv)(W, z),
            {
                resizeX: X,
                resizeY: J,
                dragAnywhere: Q,
                constrainAutoSizeToExplicitResizeEvents: q
            } = null != N ? N : {},
            $ = !D,
            ee = H || !D,
            et = r.useMemo(() => ({
                minX: 0,
                minY: 0,
                maxX: z.width,
                maxY: z.height
            }), [z]),
            en = r.useCallback(e => n(S(_({}, e), {
                widget: t,
                dragging: null != e.dragOperation,
                className: T
            })), [t, n, T]),
            ei = r.useCallback(e => null != l || null != I ? (0, i.jsxs)("div", {
                className: a()(E.vJ, P && E.vw),
                children: [null == l ? void 0 : l(t), null == I ? void 0 : I(t, e)]
            }) : null, [t, l, P, I]),
            er = (0, o.bG)([A.A], () => A.A.hasRenderDebugMode(g.x7.WidgetAreas)),
            el = r.useMemo(() => {
                if (null != j) return e => j(S(_({}, e), {
                    widget: t
                }))
            }, [j, t]);
        return k ? (0, i.jsx)(m.A, {
            className: a()({
                [E.Yz]: er,
                [E.xu]: er && !H,
                [E.E]: er && H
            }, w),
            id: G,
            size: Z,
            anchor: B,
            container: et,
            minSize: null != K ? K : {
                width: 0,
                height: 0
            },
            hidden: !ee,
            locked: D,
            resizeX: null != X && X,
            resizeY: null != J && J,
            style: {
                zIndex: Y
            },
            dragAnywhere: null != Q && Q,
            constrainAutoSizeToExplicitResizeEvents: null != q && q,
            active: $,
            onUpdate: V,
            onClick: U,
            targetWindow: M,
            forceShowExtras: P,
            renderExtras: ei,
            resizeValidation: el,
            children: en
        }) : null
    })