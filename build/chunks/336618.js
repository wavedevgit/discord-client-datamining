/** Chunk was on web.js **/
/** chunk id: 336618, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => W
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(877624),
    l = n(311907),
    c = n(554146),
    u = n(533781),
    d = n(435371),
    f = n(397927),
    p = n(793574),
    _ = n(688810),
    h = n(357186),
    m = n(379848),
    g = n(532794),
    E = n(810498),
    y = n(40493),
    b = n(412260),
    O = n(404036),
    v = n(594832),
    A = n(186111),
    I = n(287809),
    S = n(927813),
    T = n(661191),
    C = n(240248),
    N = n(427262),
    w = n(184761),
    R = n(743477),
    P = n(545428),
    D = n(652215),
    x = n(49999),
    L = n(985018),
    j = n(455424),
    M = n(111314);

function k(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            k(e, t, n[t])
        })
    }
    return e
}

function G(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function V(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function F(e) {
    let {
        tooltipsWithKeybinds: t
    } = w.C.useConfig({
        location: "GiftBoxAnimationButton"
    }), n = i.useCallback(() => Promise.resolve({
        default: e.boxAnimationUrl
    }), [e.boxAnimationUrl]);
    return (0, r.jsx)(d.m_, {
        shouldShow: t,
        text: L.intl.string(L.t.Ve9Ge6),
        children: (0, r.jsx)(P.A, {
            className: M.x6,
            "aria-label": L.intl.string(L.t.Z1RnTk),
            isActive: !1,
            noHover: !0,
            onClick: e.onClick,
            children: (0, r.jsx)("div", {
                className: j.zc,
                children: e.hovered ? (0, r.jsx)(f.akl, {
                    className: j.Hl,
                    importData: n
                }) : (0, r.jsx)(f.okO, {})
            })
        })
    })
}

function B(e) {
    let {
        Component: t,
        events: n,
        play: a
    } = (0, u.T)(), {
        tooltipsWithKeybinds: s
    } = w.C.useConfig({
        location: "TrinketsAnimationButton"
    }), o = i.useCallback(() => Promise.resolve({
        default: e.trinketAnimationUrl
    }), [e.trinketAnimationUrl]), l = i.useCallback(() => Promise.resolve({
        default: e.trinketGlowAnimationUrl
    }), [e.trinketGlowAnimationUrl]), c = () => {
        var t;
        a(), null == (t = e.onClick) || t.call(e)
    };
    return (0, r.jsx)(d.m_, {
        shouldShow: s,
        text: L.intl.string(L.t.Ve9Ge6),
        children: (0, r.jsx)(P.A, V(U({
            className: M.x6,
            "aria-label": L.intl.string(L.t.Z1RnTk),
            isActive: !1,
            noHover: !0,
            onClick: c
        }, n), {
            children: (0, r.jsxs)("div", {
                className: j.zc,
                children: [(0, r.jsx)(t, {
                    className: j.is,
                    color: "currentColor"
                }), e.hovered && (0, r.jsxs)(r.Fragment, {
                    children: [null != e.trinketAnimationUrl && (0, r.jsx)(f.akl, {
                        className: j.rY,
                        importData: o
                    }), null != e.trinketGlowAnimationUrl && (0, r.jsx)(f.akl, {
                        className: j.c5,
                        importData: l
                    })]
                })]
            })
        }))
    })
}
let H = S.A.Millis.DAYS_30;

function Y(e) {
    var t, n;
    let {
        disabled: a,
        channel: u
    } = e, {
        analyticsLocations: d
    } = (0, _.Ay)(p.A.GIFT_BUTTON), [f, S] = i.useState(!1), w = (0, l.bG)([A.A], () => !(null === A.A || void 0 === A.A ? void 0 : A.A.hasLayers())), P = (0, l.bG)([I.default], () => I.default.getCurrentUser()), L = null != P ? T.default.age(P.id) : 0, M = (0, l.bG)([b.A], () => {
        let e = b.A.getMarketingComponentByType(o.C.GIFT_ICON);
        return null == e || "giftIcon" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftIcon
    }), k = (0, l.bG)([b.A], () => {
        let e = b.A.getMarketingComponentByType(o.C.GIFT_ICON_COACHMARK);
        return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftIconCoachmark
    }), U = i.useMemo(() => {
        let e = null == M ? void 0 : M.gradient;
        if (null == e || null == e.colors || e.colors.length < 2) return;
        let t = (0, E.K5)({
            gradient: e.colors,
            angle: e.angle
        }, {
            defaultAngle: 180
        });
        if ((null == t ? void 0 : t.background) != null) return {
            "--custom-promotion-gradient": t.background
        }
    }, [null == M ? void 0 : M.gradient]), G = !(0, C.uJ)(null == M ? void 0 : M.boxAnimationUrl), V = (!(0, C.uJ)(null == M ? void 0 : M.trinketAnimationUrl) || !(0, C.uJ)(null == M ? void 0 : M.trinketGlowAnimationUrl)) && !G, Y = null != k && !a && w && L >= H, [W, K] = (0, m.RF)(Y ? c.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, (0, h.c)(c.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK)), z = null != W, q = f || z, Z = (0, N.R1)(u), X = u.type === D.rbe.DM, Q = (0, v.tA)({
        location: "gift-promotion-button",
        isGift: !0,
        giftRecipient: Z
    });
    if (a) return null;
    let J = () => {
            Q && X && null != Z ? (0, O.A)({
                giftRecipient: Z,
                analyticsLocations: d,
                analyticsObject: {
                    page: u.isPrivate() ? D.liQ.DM_CHANNEL : D.liQ.GUILD_CHANNEL,
                    section: D.JJy.CHANNEL_TEXT_AREA,
                    object: D.ZSU.BUTTON_ICON,
                    objectType: D.AnalyticsObjectTypes.GIFT
                }
            }) : (0, g.A)({
                isGift: !0,
                giftRecipient: null == Z ? void 0 : Z,
                initialPlanId: null,
                analyticsLocations: d,
                analyticsObject: {
                    page: u.isPrivate() ? D.liQ.DM_CHANNEL : D.liQ.GUILD_CHANNEL,
                    section: D.JJy.CHANNEL_TEXT_AREA,
                    object: D.ZSU.GIFTING_PROMOTION_BUTTON,
                    objectType: D.AnalyticsObjectTypes.GIFT
                }
            })
        },
        $ = () => {
            S(!1), K(x.i.TAKE_ACTION), J()
        },
        ee = G && (null == M ? void 0 : M.boxAnimationUrl) != null ? (0, r.jsx)(F, {
            boxAnimationUrl: M.boxAnimationUrl,
            hovered: q,
            onClick: $
        }) : V ? (0, r.jsx)(B, {
            trinketAnimationUrl: null != (t = null == M ? void 0 : M.trinketAnimationUrl) ? t : null,
            trinketGlowAnimationUrl: null != (n = null == M ? void 0 : M.trinketGlowAnimationUrl) ? n : null,
            hovered: q,
            onClick: $
        }) : (0, r.jsx)(R.A, {
            disabled: a,
            channel: u
        });
    return (0, r.jsx)("div", {
        className: s()(j.kL, {
            [j.DM]: q
        }),
        style: U,
        onMouseEnter: () => {
            f || S(!0)
        },
        onMouseLeave: () => {
            S(!1)
        },
        children: z ? (0, r.jsx)(y.A, {
            onComplete: () => S(!1),
            onCheckItOutClick: J,
            markAsDismissed: K,
            coachmarkConfig: k,
            children: ee
        }) : ee
    })
}
let W = i.memo(Y)