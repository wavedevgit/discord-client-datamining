/** Chunk was on web.js **/
/** chunk id: 443642, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => T
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(990078),
    s = n(319060),
    o = n(397927),
    l = n(793574),
    c = n(58149),
    u = n(688810),
    d = n(652176),
    f = n(240248),
    p = n(256449),
    _ = n(842086),
    h = n(148355),
    m = n(552117),
    g = n(652215),
    E = n(788868),
    y = n(444736);

function b(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            b(e, t, n[t])
        })
    }
    return e
}

function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function A(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let I = (0, f.xI)(s.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    S = e => {
        null != e && c.Ay.trackWithMetadata(g.HAw.EXPRESSION_TOOLTIP_VIEWED, {
            type: E.e.STICKER_IN_MESSAGE_HOVER,
            expression_id: e.id,
            expression_name: e.name,
            is_animated: (0, _.Tw)(e.format_type),
            is_custom: (0, _.zN)(e.type)
        })
    },
    T = e => {
        let {
            renderableSticker: t,
            channel: n,
            isInteracting: s
        } = e, c = i.useRef(null), [f, _] = i.useState(!0), [g, E] = i.useState(String(Date.now())), [b] = (0, p.Zq)(t, s), {
            analyticsLocations: v
        } = (0, u.Ay)(l.A.STICKER_MESSAGE), T = (0, r.jsxs)("span", {
            className: y.Zl,
            children: [(0, r.jsx)(o.s2T, {
                size: "xs",
                color: "currentColor",
                className: y.lA
            }), (null != b ? b : t).name]
        });
        return (0, r.jsx)(u.f5, {
            value: v,
            children: (0, r.jsx)(o.YNO, {
                align: "center",
                animation: o.YNO.Animation.TRANSLATE,
                positionKey: g,
                onRequestClose: () => {
                    _(!0)
                },
                renderPopout: e => (0, r.jsx)(m.A, A(O({}, e), {
                    renderableSticker: t,
                    channel: n,
                    refreshPositionKey: () => E(String(Date.now()))
                })),
                targetElementRef: c,
                children: e => {
                    let {
                        onClick: n
                    } = e;
                    return (0, r.jsx)(a.m, A(O({}, d.Uk), {
                        shouldShow: f,
                        __unsupportedReactNodeAsText: (0, d.yR)(T),
                        "aria-label": !1,
                        onTooltipShow: () => {
                            S(b)
                        },
                        children: (0, r.jsx)(o.DUT, {
                            innerRef: c,
                            className: y.q7,
                            onClick: e => {
                                _(!f), n(e)
                            },
                            tag: "span",
                            children: (0, r.jsx)(h.A, {
                                isInteracting: s,
                                size: I,
                                sticker: null != b ? b : t
                            })
                        })
                    }))
                }
            })
        })
    }