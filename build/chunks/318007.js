/** chunk id: 318007, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    t: () => T
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(421380),
    l = n(397927),
    c = n(937008),
    u = n(650588),
    d = n(45938),
    f = n(242874),
    p = n(170887),
    _ = n(367371),
    h = n(75825),
    m = n(238017),
    g = n(903618),
    E = n(985018),
    y = n(120459);

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

function I(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = S(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function S(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let T = e => {
    let {
        isShopGift: t,
        className: n,
        optionsContainerClassName: a
    } = e, {
        giftRecipient: b,
        selectedGiftStyle: v,
        setSelectedGiftStyle: S,
        emojiConfetti: T,
        soundEffect: C,
        setEmojiConfetti: N,
        setSoundEffect: w
    } = (0, c.Pv)(), [R, P] = i.useState(!1), D = i.useRef(null), L = (0, s._u)({
        orientation: "horizontal"
    }), {
        ref: x
    } = L, M = I(L, ["ref"]), j = (0, d.lo)(b, t), k = j === d.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD, U = j !== d.tB.DEFAULT, G = (0, _._)(), V = (0, p.A)({
        location: "GiftAnimationOptions"
    }), F = e => {
        null != w && w(null == e ? void 0 : e)
    };
    return (0, r.jsxs)("div", {
        children: [U && (0, r.jsxs)("div", {
            className: o()(y.Os, n),
            children: [null != v ? (0, r.jsx)(h.A, {
                giftStyle: v,
                defaultAnimationState: f.oA.ACTION,
                idleAnimationState: f.oA.LOOP,
                shouldAnimate: !0,
                className: y.lY
            }) : (0, r.jsx)(l.y$y, {
                className: y.u1
            }), k && (0, r.jsxs)("div", {
                className: o()(y.b7, V && y.Ow),
                children: [(0, r.jsx)(u.A, {
                    sound: C,
                    onSelect: F
                }), (0, r.jsx)(m.A, {
                    setEmojiConfetti: N,
                    emojiConfetti: null == T ? void 0 : T
                })]
            })]
        }), (0, r.jsx)("div", A(O({
            tabIndex: null != v || R ? void 0 : 0,
            onFocus: e => {
                var t;
                e.target === e.currentTarget && (null == (t = D.current) || t.focus())
            },
            className: o()(y.Qh, a),
            "aria-label": E.intl.string(E.t.v54NrN),
            ref: x
        }, M), {
            children: null != G && !V && G.map((e, t) => (0, r.jsx)(g.A, {
                isSelected: v === e,
                giftStyle: e,
                setSelectedGiftStyle: S,
                ref: 0 === t ? D : null,
                onFocus: () => P(!0),
                onBlur: () => P(!1)
            }, e))
        })), (0, r.jsx)("div", {
            className: y.__invalid_selectPlanDivider
        })]
    })
}