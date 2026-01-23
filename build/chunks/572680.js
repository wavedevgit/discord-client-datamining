/** Chunk was on web.js **/
/** chunk id: 572680, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(106778),
    s = n(108531),
    o = n(615300),
    l = n(397927),
    c = n(565645),
    u = n(21161),
    d = n(750506),
    f = n(147421),
    p = n(486020),
    _ = n(690521),
    h = n(851110),
    m = n(624085);

function g(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            g(e, t, n[t])
        })
    }
    return e
}

function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function b(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let O = 450,
    v = .5,
    A = [];

function I(e) {
    let {
        messageId: t,
        emoji: n,
        startPosition: g,
        targetPosition: y
    } = e, [I, S] = i.useState(0), [T, C] = i.useState(0), [N, w] = i.useState(null), {
        confettiCanvas: R
    } = i.useContext(u.x), P = (0, a.f9)(R, N), D = i.useMemo(() => [{
        src: null == n.id ? _.Ay.getURL(n.name) : p.Ay.getEmojiURL({
            id: n.id,
            animated: !1,
            size: 22
        }),
        colorize: !1
    }], [n.name, n.id]), x = y.x - y.width / 2 * v, L = y.y - y.height / 2 * v, j = (0, l.zhh)({
        from: {
            y: g.y
        },
        to: {
            y: L
        },
        config: {
            duration: O,
            easing: o.A.Easing.in(o.A.Easing.exp)
        },
        onChange: e => {
            let {
                y: t
            } = e;
            C(t)
        }
    }), M = (0, l.zhh)({
        from: {
            x: g.x,
            scale: 1,
            opacity: 1
        },
        to: {
            x: x,
            scale: v,
            opacity: .4
        },
        config: {
            duration: O,
            easing: o.A.Easing.in(o.A.Easing.ease)
        },
        onRest: () => {
            (0, f.p)(t, n.name, n.id)
        },
        onChange: e => {
            let {
                x: t
            } = e;
            S(t)
        }
    });
    return i.useEffect(() => {
        I > 0 && T > 0 && P.createConfetti(b(E({}, h.Mw), {
            position: {
                type: "static",
                value: {
                    x: I,
                    y: T
                }
            }
        }))
    }, [P, I, T]), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.K_, {
            ref: w,
            sprites: D,
            colors: A,
            spriteWidth: h.wn,
            spriteHeight: h.wn
        }), (0, r.jsx)(d.Ay, {
            children: (0, r.jsx)(s.animated.div, {
                style: E({}, j),
                className: m.qq,
                children: (0, r.jsx)(s.animated.div, {
                    style: b(E({}, M), {
                        opacity: M.opacity
                    }),
                    children: (0, r.jsx)(c.A, {
                        className: m.Zg,
                        emojiId: n.id,
                        emojiName: n.name,
                        animated: n.animated,
                        size: "jumbo"
                    })
                })
            })
        })]
    })
}