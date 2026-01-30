/** chunk id: 565645, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => N
}), n(896048), n(65821);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(311907),
    l = n(724442),
    c = n(692051),
    u = n(129185),
    d = n(776231),
    f = n(830178),
    p = n(253932),
    _ = n(256415),
    h = n(486020),
    m = n(690521),
    g = n(218394),
    E = n(732139);

function y(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            y(e, t, n[t])
        })
    }
    return e
}

function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function v(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function A(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = I(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function I(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let S = __OVERLAY__ ? () => (0, s.bG)([_.default], () => _.default.isInstanceFocused()) : g.j;

function T(e) {
    var t, n;
    let {
        src: a,
        alt: s,
        className: c,
        emojiId: f,
        emojiName: _,
        channelId: g,
        messageId: y,
        animated: O,
        size: I = "default",
        isInteracting: T = !1,
        shouldAnimate: C,
        onMouseEnter: N,
        onMouseLeave: w,
        canSelect: R = !0,
        autoplay: P,
        registerInnerRef: D,
        registerAnimatedElementRef: L,
        surrogate: x
    } = e, M = A(e, ["src", "alt", "className", "emojiId", "emojiName", "channelId", "messageId", "animated", "size", "isInteracting", "shouldAnimate", "onMouseEnter", "onMouseLeave", "canSelect", "autoplay", "registerInnerRef", "registerAnimatedElementRef", "surrogate"]), [j, k] = i.useState(!1), [U, G] = i.useState(void 0), F = i.useRef(void 0), {
        triggerAnimation: V,
        untriggerAnimation: B
    } = i.useContext(u.wE), H = p.Sf.useSetting(), Y = S(), W = null == P ? H : P, K = E.Ec[I], z = i.useRef(null), q = i.useMemo(() => {
        if (null != a) return a;
        if (null != f) {
            let e = !0 === C && W;
            return h.Ay.getEmojiURL({
                id: f,
                animated: Y && !0 === O && (e || j || !0 === T),
                size: K
            })
        }
        if (null != _) return m.Ay.getURL(_);
        throw Error("Unknown Src for Emoji")
    }, [O, W, f, _, K, Y, j, T, C, a]), Z = i.useCallback(() => {
        null != q && (F.current = (0, d.yt)(q, e => {
            e || G(Date.now())
        }))
    }, [q]), Q = i.useCallback(e => {
        O && k(!0), null == f && V(_), null == N || N(e)
    }, [O, _, N, V, f]), X = i.useCallback(e => {
        O && k(!1), null == f && B(_), null == w || w(e)
    }, [O, f, _, w, B]), J = i.useMemo(() => {
        let e = null != f && "" !== f ? {
            "data-id": f
        } : {
            "data-name": _
        };
        return b(v(b({}, M), {
            className: o()("emoji", c, {
                jumboable: "jumbo" === I
            }),
            onError: Z,
            onMouseEnter: Q,
            onMouseLeave: X,
            "data-type": "emoji"
        }), e)
    }, [c, f, _, Q, X, Z, M, I]);
    i.useEffect(() => () => {
        var e;
        return null == (e = F.current) ? void 0 : e.call(F)
    }, []);
    let $ = i.useCallback(e => {
            z.current = e, null == D || D(e), null == L || L(e)
        }, [D, L]),
        ee = (0, l.A)(z);
    return null == q || "" === q ? (0, r.jsx)("span", v(b({}, J), {
        ref: $,
        className: o()("emoji", "emoji-text"),
        children: null != x ? x : _
    })) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.q6, {
            channelId: g,
            messageId: y,
            emojiName: _,
            disable: !1 === W || !1 === H,
            emojiRef: ee
        }), R ? (0, r.jsx)("img", v(b({}, J), {
            ref: $,
            src: q,
            alt: null != (t = null != s ? s : _) ? t : void 0,
            draggable: !1
        }), U) : (0, r.jsx)("div", v(b({}, J), {
            ref: $,
            role: "img",
            "aria-label": null != (n = null != s ? s : _) ? n : void 0,
            style: {
                backgroundImage: "url(".concat(q, ")"),
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
            }
        }), U)]
    })
}

function C(e) {
    let {
        useThoughtfullyAnimated: t
    } = i.useContext(f.W), {
        animate: n,
        registerRef: a
    } = t(), {
        disableAnimations: o
    } = i.useContext(c.Y);
    return (0, r.jsx)(T, v(b({}, e), {
        registerAnimatedElementRef: a,
        shouldAnimate: n && !o
    }))
}

function N(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src ? null : e.animated && void 0 === e.shouldAnimate ? (0, r.jsx)(C, b({}, e)) : (0, r.jsx)(T, b({}, e))
}