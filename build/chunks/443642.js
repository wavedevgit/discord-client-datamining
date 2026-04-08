/** chunk id: 443642 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    l = n(64700),
    s = n(990078),
    r = n(319060),
    a = n(397927),
    o = n(793574),
    d = n(58149),
    c = n(688810),
    u = n(652176),
    m = n(240248),
    _ = n(256449),
    h = n(842086),
    p = n(148355),
    g = n(552117),
    A = n(652215),
    x = n(788868),
    f = n(974850);
let C = (0, m.xI)(r.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    E = e => {
        let {
            renderableSticker: t,
            channel: n,
            isInteracting: r
        } = e, m = l.useRef(null), [E, I] = l.useState(!0), [v, b] = l.useState(String(Date.now())), [T] = (0, _.Zq)(t, r), {
            analyticsLocations: N
        } = (0, c.Ay)(o.A.STICKER_MESSAGE), y = (0, i.jsxs)("span", {
            className: f.Zl,
            children: [(0, i.jsx)(a.s2T, {
                size: "xs",
                color: "currentColor",
                className: f.lA
            }), (T ?? t).name]
        });
        return (0, i.jsx)(c.f5, {
            value: N,
            children: (0, i.jsx)("div", {
                className: f.be,
                children: (0, i.jsx)(a.YNO, {
                    align: "center",
                    animation: a.YNO.Animation.TRANSLATE,
                    positionKey: v,
                    onRequestClose: () => {
                        I(!0)
                    },
                    renderPopout: e => (0, i.jsx)(g.A, {
                        ...e,
                        renderableSticker: t,
                        channel: n,
                        refreshPositionKey: () => b(String(Date.now()))
                    }),
                    targetElementRef: m,
                    children: e => {
                        let {
                            onClick: n
                        } = e;
                        return (0, i.jsx)(s.m, {
                            ...u.Uk,
                            shouldShow: E,
                            __unsupportedReactNodeAsText: (0, u.yR)(y),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                var e;
                                null != (e = T) && d.Ay.trackWithMetadata(A.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                    type: x.e.STICKER_IN_MESSAGE_HOVER,
                                    expression_id: e.id,
                                    expression_name: e.name,
                                    is_animated: (0, h.Tw)(e.format_type),
                                    is_custom: (0, h.zN)(e.type)
                                })
                            },
                            children: (0, i.jsx)(a.DUT, {
                                innerRef: m,
                                className: f.q7,
                                onClick: e => {
                                    I(!E), n(e)
                                },
                                tag: "span",
                                children: (0, i.jsx)(p.A, {
                                    isInteracting: r,
                                    size: C,
                                    sticker: T ?? t
                                })
                            })
                        })
                    }
                })
            })
        })
    }