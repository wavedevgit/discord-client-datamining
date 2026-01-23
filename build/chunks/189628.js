/** Chunk was on web.js **/
/** chunk id: 189628, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => D
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(435371),
    c = n(397927),
    u = n(442433),
    d = n(775602),
    f = n(508675),
    p = n(770335),
    _ = n(7584),
    h = n(60587),
    m = n(450510),
    g = n(147421),
    E = n(71393),
    y = n(690521),
    b = n(723702),
    O = n(692092),
    v = n(985018),
    A = n(351341);

function I(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            I(e, t, n[t])
        })
    }
    return e
}

function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function C(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function N(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = w(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function w(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let R = (e, t) => "".concat(e, ":").concat(t),
    P = i.forwardRef(function(e, t) {
        let [n, ...i] = [e, t], {
            emoji: a,
            isFavorite: l,
            isLargeSize: u,
            isMediumSize: d,
            isInspected: f,
            isDisabled: _,
            showPulse: m,
            columnIndex: g,
            rowIndex: b,
            size: I,
            surrogateCodePoint: T,
            allowAnimatedEmoji: w,
            selectedItemClassName: R,
            inNitroLockedSection: P
        } = n, D = N(n, ["emoji", "isFavorite", "isLargeSize", "isMediumSize", "isInspected", "isDisabled", "showPulse", "columnIndex", "rowIndex", "size", "surrogateCodePoint", "allowAnimatedEmoji", "selectedItemClassName", "inNitroLockedSection"]), [x] = i, L = (0, o.bG)([E.A], () => a.type === p.i.GUILD ? E.A.getGuild(a.guildId) : void 0, [a]), j = () => {
            let e = (0, y.N)(a);
            return ((null == L ? void 0 : L.name) != null && (e = v.intl.formatToPlainString(v.t["nXv4/B"], {
                names: e,
                guildName: L.name
            })), l) ? v.intl.formatToPlainString(v.t["9FI9Z0"], {
                names: e
            }) : e
        }, M = _ && !P;
        return (0, r.jsx)(c.vN3, {
            children: (0, r.jsx)("button", C(S({}, D), {
                className: s()(A._X, {
                    [A.lG]: u,
                    [A.Lh]: d,
                    [A.Bx]: f,
                    [null != R ? R : ""]: f,
                    [A.TV]: m
                }),
                "data-type": h.g.EMOJI,
                "data-id": a.id,
                "data-name": a.name,
                "data-surrogates": "surrogates" in a ? a.surrogates : null,
                "data-animated": a.animated ? "true" : null,
                ref: x,
                children: (0, r.jsx)(O.A, {
                    "aria-label": j(),
                    columnIndex: g,
                    rowIndex: b,
                    emoji: a,
                    size: I,
                    surrogateCodePoint: T,
                    allowAnimatedEmoji: w,
                    isLocked: M
                })
            }))
        })
    });

function D(e) {
    var t;
    let {
        descriptor: a,
        emojiItemKey: s,
        isInspected: c,
        rowIndex: p,
        channelGuildId: h,
        onInspect: E,
        onSelect: y,
        isScrolling: O,
        isUsingKeyboardNavigation: A,
        showEmojiFavoriteTooltip: I,
        surrogateCodePoint: T,
        selectedItemClassName: w,
        getEmojiItemProps: D,
        isMediumSize: x,
        isLargeSize: L,
        pulseItemKey: j,
        allowAnimatedEmoji: M,
        setPulseItemKey: k,
        messageId: U,
        isBurstReaction: G,
        rowPosition: V,
        inNitroLockedSection: F
    } = e, [B, H] = i.useState(""), Y = (0, o.bG)([d.A], () => d.A.useReducedMotion), W = (0, o.bG)([f.Ay], () => f.Ay.getDisambiguatedEmojiContext(h), [h]), K = i.useRef(null), {
        emoji: z,
        size: q,
        isDisabled: Z,
        columnIndex: X
    } = a, Q = e => {
        if (e.stopPropagation(), O.current || A.current) return;
        let t = e.altKey;
        t && !f.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(z) && k(s), (0, m.sF)(m._2.FAVORITE_EMOJI_TOOLTIP), y(a, {
            isFinalSelection: !e.shiftKey,
            toggleFavorite: t
        })
    }, J = () => {
        O.current || A.current || E(a)
    }, $ = e => {
        (0, u.L3)(e, async () => {
            let {
                default: e
            } = await n.e("46132").then(n.bind(n, 233503));
            return t => (0, r.jsx)(e, S({}, t))
        })
    }, ee = null != (t = D(X, p)) ? t : {}, {
        ref: et,
        tabIndex: en,
        onFocus: er
    } = ee, ei = N(ee, ["ref", "tabIndex", "onFocus"]), ea = B !== R(X, p) ? (0, r.jsx)(P, {
        ref: et,
        emoji: z,
        isFavorite: W.isFavoriteEmojiWithoutFetchingLatest(z),
        isLargeSize: L,
        isMediumSize: x,
        isInspected: c,
        isDisabled: Z,
        showPulse: j === s,
        allowAnimatedEmoji: M,
        onFocus: null != er ? er : J,
        onMouseMove: J,
        onClick: e => {
            if (null != K.current && null != V && null != U && !e.shiftKey && null != z.name && G && !Y && M) {
                let e = null == z.id ? _.Ay.convertNameToSurrogate(z.name) : z.name,
                    t = K.current.getBoundingClientRect();
                t.x = V.x + (X + 1) * q, H(R(X, p)), (0, g.h)(U, e, z.id, t)
            }
            Q(e)
        },
        onContextMenu: $,
        tabIndex: en,
        columnIndex: X,
        rowIndex: p,
        size: q,
        surrogateCodePoint: T,
        selectedItemClassName: w,
        inNitroLockedSection: F
    }) : null;
    return (0, i.createElement)("li", C(S({}, ei), {
        key: s,
        ref: K
    }), I ? (0, r.jsx)(l.m_, {
        text: v.intl.formatToPlainString(v.t.glqNsf, {
            key: (0, b.isMac)() ? "Opt" : "Alt"
        }),
        position: "top",
        delay: 200,
        children: ea
    }) : ea)
}