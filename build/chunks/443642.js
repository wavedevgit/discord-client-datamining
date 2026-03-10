/** chunk id: 443642 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    r = n(64700),
    l = n(990078),
    a = n(319060),
    s = n(397927),
    o = n(793574),
    d = n(58149),
    c = n(688810),
    u = n(652176),
    _ = n(240248),
    m = n(256449),
    h = n(842086),
    p = n(148355),
    g = n(552117),
    A = n(652215),
    x = n(788868),
    f = n(444736);
let C = (0, _.xI)(a.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    E = e => {
        let {
            renderableSticker: t,
            channel: n,
            isInteracting: a
        } = e, _ = r.useRef(null), [E, I] = r.useState(!0), [b, T] = r.useState(String(Date.now())), [v] = (0, m.Zq)(t, a), {
            analyticsLocations: S
        } = (0, c.Ay)(o.A.STICKER_MESSAGE), y = (0, i.jsxs)("span", {
            className: f.Zl,
            children: [(0, i.jsx)(s.s2T, {
                size: "xs",
                color: "currentColor",
                className: f.lA
            }), (v ?? t).name]
        });
        return (0, i.jsx)(c.f5, {
            value: S,
            children: (0, i.jsx)("div", {
                className: f.be,
                children: (0, i.jsx)(s.YNO, {
                    align: "center",
                    animation: s.YNO.Animation.TRANSLATE,
                    positionKey: b,
                    onRequestClose: () => {
                        I(!0)
                    },
                    renderPopout: e => (0, i.jsx)(g.A, {
                        ...e,
                        renderableSticker: t,
                        channel: n,
                        refreshPositionKey: () => T(String(Date.now()))
                    }),
                    targetElementRef: _,
                    children: e => {
                        let {
                            onClick: n
                        } = e;
                        return (0, i.jsx)(l.m, {
                            ...u.Uk,
                            shouldShow: E,
                            __unsupportedReactNodeAsText: (0, u.yR)(y),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                var e;
                                null != (e = v) && d.Ay.trackWithMetadata(A.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                    type: x.e.STICKER_IN_MESSAGE_HOVER,
                                    expression_id: e.id,
                                    expression_name: e.name,
                                    is_animated: (0, h.Tw)(e.format_type),
                                    is_custom: (0, h.zN)(e.type)
                                })
                            },
                            children: (0, i.jsx)(s.DUT, {
                                innerRef: _,
                                className: f.q7,
                                onClick: e => {
                                    I(!E), n(e)
                                },
                                tag: "span",
                                children: (0, i.jsx)(p.A, {
                                    isInteracting: a,
                                    size: C,
                                    sticker: v ?? t
                                })
                            })
                        })
                    }
                })
            })
        })
    }