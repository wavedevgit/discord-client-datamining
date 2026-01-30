/** chunk id: 938136, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => P
}), n(801541);
var r = n(627968);
n(64700);
var i = n(889137),
    a = n(575593),
    o = n(397927),
    s = n(954921),
    l = n(278539),
    c = n(674658),
    u = n(245068),
    d = n(550111),
    f = n(242874),
    p = n(75825),
    _ = n(262737),
    h = n(182592),
    m = n(837921),
    g = n(937008),
    E = n(652215),
    y = n(985018),
    b = n(421514),
    O = n(306499);

function v(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            v(e, t, n[t])
        })
    }
    return e
}

function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function S(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let T = m.Ay.getEnableHardwareAcceleration() ? o.JsQ : o.euF;

function C(e) {
    let {
        avatarDecoration: t
    } = e, {
        avatarDecorationSrc: n,
        eventHandlers: i,
        avatarPlaceholderSrc: a
    } = (0, l.A)({
        avatarDecorationOverride: t,
        size: (0, s.Te)(o._3J.SIZE_152)
    });
    return (0, r.jsx)("div", {
        className: b.rk,
        children: (0, r.jsx)(T, S(A({}, i), {
            avatarDecoration: n,
            src: a,
            className: b.my,
            size: o._3J.SIZE_152,
            "aria-label": y.intl.string(y.t.lqaIxI)
        }))
    })
}

function N(e) {
    var t;
    let {
        skuId: n
    } = e, i = null == (t = (0, _.V)(n)) ? void 0 : t.config;
    return (0, r.jsxs)("div", {
        className: b.YS,
        children: [(0, r.jsx)("img", {
            src: O,
            alt: null == i ? void 0 : i.accessibilityLabel,
            className: b.Zp
        }), (0, r.jsx)(h.A, {
            skuId: n
        })]
    })
}

function w(e) {
    let {
        nameplate: t
    } = e;
    return (0, r.jsx)("div", {
        className: b.rz,
        children: (0, r.jsx)(d.A, {
            nameplate: t,
            className: b.qF,
            nameplatePreviewSize: "xlarge",
            isHighlighted: !0,
            showPlaceholderUser: !0
        })
    })
}
let R = e => {
    let {
        sku: t
    } = e, {
        selectedGiftStyle: n
    } = (0, g.Pv)(), {
        product: o
    } = (0, c.q)(null == t ? void 0 : t.id), s = null == o ? void 0 : o.items[0];
    if ((null == o ? void 0 : o.type) === a.R.BUNDLE) return (0, r.jsx)("div", {
        className: b.ww,
        children: (0, r.jsx)(u.X, {
            product: o,
            isHighlighted: !1
        })
    });
    let l = (0, i.YW)(s).with({
        type: a.R.AVATAR_DECORATION
    }, e => (0, r.jsx)(C, {
        avatarDecoration: e
    })).with({
        type: a.R.PROFILE_EFFECT
    }, e => (0, r.jsx)(N, {
        skuId: e.skuId
    })).with({
        type: a.R.NAMEPLATE
    }, e => (0, r.jsx)(w, {
        nameplate: e
    })).otherwise(() => null);
    return null != n && null == l ? (0, r.jsx)("div", {
        className: b.rk,
        children: (0, r.jsx)(p.A, {
            defaultAnimationState: f.oA.LOOP,
            giftStyle: n,
            shouldAnimate: !0,
            className: b.__invalid_giftMainAnimation
        })
    }) : l
};

function P(e) {
    let {
        sku: t
    } = e;
    return t.productLine === E.EZt.COLLECTIBLES ? (0, r.jsx)(R, {
        sku: t
    }) : null
}