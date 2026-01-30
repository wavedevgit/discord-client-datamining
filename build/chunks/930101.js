/** chunk id: 930101, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    H: () => S,
    X: () => T
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(835245),
    l = n(435371),
    c = n(397927),
    u = n(565645),
    d = n(58149),
    f = n(189551),
    p = n(954571),
    _ = n(767143),
    h = n(652176),
    m = n(652215),
    g = n(307731),
    E = n(788868),
    y = n(985018),
    b = n(611853);

function O(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            O(e, t, n[t])
        })
    }
    return e
}

function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function I(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let S = e => {
        var t;
        let {
            node: n,
            tooltipPosition: a = h.Uk.position,
            enableClick: s = !0,
            channelId: d,
            messageId: f
        } = e, p = i.useRef(null), m = null == (t = n.originalMatch) ? void 0 : t[0], [g, E] = i.useState(!1), O = e => (0, r.jsx)(u.A, {
            emojiName: n.name,
            size: null != e ? e : n.jumboable ? "jumbo" : "default",
            src: n.src,
            alt: m,
            animated: !1,
            channelId: d,
            messageId: f
        }), A = e => {
            var t;
            return (0, r.jsx)(l.un, I(v({
                asset: O("jumbo"),
                title: null != (t = n.name) ? t : "",
                body: s ? y.intl.string(y.t["515vjG"]) : "",
                ariaHidden: !0
            }, h.Uk), {
                position: a,
                shouldShow: !g,
                onTooltipShow: () => {
                    s && C({
                        emojiNode: n,
                        isCustomEmoji: !1
                    })
                },
                children: (0, r.jsx)(c.DUT, I(v({}, e), {
                    innerRef: p,
                    tag: "span",
                    onClick: t => {
                        var n;
                        E(!0), null == e || null == (n = e.onClick) || n.call(e, t)
                    },
                    className: o()(b.qq, {
                        [b._Y]: s,
                        [b.gp]: n.jumboable
                    }),
                    children: O()
                }))
            }))
        };
        if (!s) return A();
        let S = e => (0, r.jsx)(_.MV, I(v({}, e), {
            node: n
        }));
        return (0, r.jsx)(c.YNO, {
            animation: c.YNO.Animation.TRANSLATE,
            align: "center",
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: "right",
            onRequestClose: () => {
                E(!1)
            },
            renderPopout: S,
            targetElementRef: p,
            children: A
        })
    },
    T = e => {
        let {
            node: t,
            isInteracting: n,
            tooltipPosition: a = h.Uk.position,
            enableClick: d = !0,
            channelId: E,
            messageId: O
        } = e, [A, S] = i.useState(String(Date.now())), [T, N] = i.useState(!1), [w, R] = i.useState(!1), P = i.useRef(null), D = e => (0, r.jsx)(u.A, {
            emojiName: t.name,
            size: null != e ? e : t.jumboable ? "jumbo" : "default",
            emojiId: t.emojiId,
            animated: t.animated,
            isInteracting: n,
            channelId: E,
            messageId: O
        }), L = (0, s.A)(), x = e => (0, r.jsx)(l.un, I(v({
            asset: D("jumbo"),
            title: t.name,
            body: d ? y.intl.string(y.t["515vjG"]) : "",
            ariaHidden: !0
        }, h.Uk), {
            position: a,
            shouldShow: !w,
            onTooltipShow: () => {
                N(!0), d && (C({
                    emojiNode: t,
                    isCustomEmoji: !0,
                    nonce: L
                }), (0, f.K)(g.Vl.CustomEmojiTooltipShown))
            },
            children: (0, r.jsx)(c.DUT, I(v({}, e), {
                innerRef: P,
                onMouseEnter: () => {
                    var t;
                    null == e || null == (t = e.onMouseEnter) || t.call(e)
                },
                onClick: d ? t => {
                    var n;
                    N(!1), R(!0), null == e || null == (n = e.onClick) || n.call(e, t)
                } : void 0,
                onMouseLeave: () => {
                    T && (p.default.track(m.HAw.CLOSE_POPOUT, {
                        nonce: L
                    }), N(!1))
                },
                tag: "span",
                className: o()(b.qq, {
                    [b._Y]: d,
                    [b.gp]: t.jumboable
                }),
                children: D()
            }))
        }));
        if (!d) return x();
        let M = e => (0, r.jsx)(_.iP, I(v({}, e), {
            node: t,
            refreshPositionKey: () => S(String(Date.now())),
            nonce: L
        }));
        return (0, r.jsx)(c.YNO, {
            animation: c.YNO.Animation.FADE,
            align: "center",
            onRequestClose: () => {
                p.default.track(m.HAw.CLOSE_POPOUT, {
                    nonce: L
                }), N(!1), R(!1)
            },
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: "right",
            renderPopout: M,
            positionKey: A,
            targetElementRef: P,
            children: x
        })
    },
    C = e => {
        let {
            emojiNode: t,
            isCustomEmoji: n,
            nonce: r
        } = e;
        d.Ay.trackWithMetadata(m.HAw.EXPRESSION_TOOLTIP_VIEWED, {
            type: E.e.EMOJI_IN_MESSAGE_HOVER,
            expression_id: t.emojiId,
            expression_name: t.name,
            is_animated: t.animated,
            is_custom: n,
            nonce: r
        })
    }