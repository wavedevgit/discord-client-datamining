/** chunk id: 743477, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
});
var r = n(627968),
    i = n(64700),
    a = n(533781),
    o = n(990078),
    s = n(397927),
    l = n(793574),
    c = n(688810),
    u = n(532794),
    d = n(547065),
    f = n(404036),
    p = n(594832),
    _ = n(427262),
    h = n(545428),
    m = n(652215),
    g = n(985018),
    E = n(111314);

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

function A(e) {
    let {
        disabled: t,
        channel: i
    } = e, {
        analyticsLocations: y
    } = (0, c.Ay)(l.A.GIFT_BUTTON), O = (0, _.R1)(i), {
        Component: A,
        events: I,
        play: S
    } = (0, a.T)(), {
        enabled: T
    } = d.P.useExperiment({
        location: "gift-button"
    }, {
        autoTrackExposure: !1
    }), C = i.type === m.rbe.DM, N = (0, p.tA)({
        location: "gift-button",
        isGift: !0,
        giftRecipient: O
    });
    if (t) return null;
    let w = () => {
        N && C && null != O ? (0, f.A)({
            giftRecipient: O,
            analyticsLocations: y,
            analyticsObject: {
                page: i.isPrivate() ? m.liQ.DM_CHANNEL : m.liQ.GUILD_CHANNEL,
                section: m.JJy.CHANNEL_TEXT_AREA,
                object: m.ZSU.BUTTON_ICON,
                objectType: m.AnalyticsObjectTypes.GIFT
            }
        }) : T && C && null != O ? (0, s.mMO)(async () => {
            let {
                default: e
            } = await n.e("22841").then(n.bind(n, 561376));
            return t => (0, r.jsx)(e, b({
                analyticsObject: {
                    page: m.liQ.DM_CHANNEL,
                    section: m.JJy.CHANNEL_TEXT_AREA,
                    object: m.ZSU.BUTTON_ICON,
                    objectType: m.AnalyticsObjectTypes.GIFT
                },
                analyticsLocations: y,
                giftRecipient: O
            }, t))
        }) : (0, u.A)({
            isGift: !0,
            giftRecipient: null === O ? void 0 : O,
            initialPlanId: null,
            analyticsLocations: y,
            analyticsObject: {
                page: i.isPrivate() ? m.liQ.DM_CHANNEL : m.liQ.GUILD_CHANNEL,
                section: m.JJy.CHANNEL_TEXT_AREA,
                object: m.ZSU.BUTTON_ICON,
                objectType: m.AnalyticsObjectTypes.GIFT
            }
        })
    };
    return (0, r.jsx)(o.m, {
        ariaHidden: N,
        text: g.intl.string(N ? g.t.TW4JV0 : g.t.sWtWDX),
        children: (0, r.jsx)(h.A, v(b({
            className: E.x6,
            isActive: !1,
            "aria-label": g.intl.string(N ? g.t.TW4JV0 : g.t.Z1RnTk),
            "aria-haspopup": "dialog",
            onClick: () => {
                w(), S()
            }
        }, I), {
            children: (0, r.jsx)(A, {
                size: "refresh_sm",
                color: "currentColor"
            })
        }))
    })
}
let I = i.memo(A)