/** chunk id: 67414 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => O
});
var i = n(627968),
    r = n(64700),
    l = n(110259),
    s = n(311907),
    a = n(397927),
    o = n(966327),
    c = n(793574),
    u = n(688810),
    d = n(139286),
    _ = n(21119),
    A = n(287809),
    E = n(954571),
    m = n(242874),
    I = n(275759),
    T = n(51501),
    g = n(233971),
    N = n(788868),
    f = n(652215),
    C = n(778712),
    p = n(985018),
    h = n(742345);
let S = (0, a.FT9)(C._3.SIZE_56),
    R = (0, a.FT9)(C._3.SIZE_24);

function x(e) {
    let {
        user: t,
        ariaLabel: n,
        showCutout: l
    } = e, s = r.useId(), a = "u" > typeof document && document.documentElement?.dir === "rtl" ? -2 : S - R - -2, c = S - R - -3;
    return (0, i.jsxs)("svg", {
        width: S,
        height: S,
        viewBox: `0 0 ${S} ${S}`,
        className: h.XH,
        children: [l && (0, i.jsxs)("mask", {
            id: s,
            maskUnits: "userSpaceOnUse",
            children: [(0, i.jsx)("rect", {
                x: 0,
                y: 0,
                width: S,
                height: S,
                fill: "white"
            }), (0, i.jsx)("circle", {
                cx: a + R / 2,
                cy: c + R / 2,
                r: R / 2 + 2,
                fill: "black"
            })]
        }), (0, i.jsx)("foreignObject", {
            x: 0,
            y: 0,
            width: S,
            height: S,
            mask: l ? `url(#${s})` : void 0,
            children: (0, i.jsx)(o.A, {
                className: h.A6,
                user: t,
                "aria-label": n,
                size: C._3.SIZE_56
            })
        })]
    })
}

function O(e) {
    let {
        giftIntentType: t,
        recipientUser: S,
        analyticsPage: R,
        analyticsSection: O,
        innerRef: M
    } = e, D = (0, s.bG)([A.default], () => A.default.getCurrentUser()), {
        analyticsLocations: U
    } = (0, u.Ay)(c.A.PREMIUM_GIFT_INTENT_CARD), P = (0, s.bG)([I.Ay], () => I.Ay.getFriendAnniversaryYears(S.id)), L = (0, T.$)(t), {
        openGiftModal: v
    } = (0, g.$)({
        giftRecipient: S,
        analyticsLocations: U,
        analyticsLocation: L.chat,
        analyticsObject: {
            page: R,
            section: O,
            object: f.ZSU.BUTTON_CTA,
            objectType: f.AnalyticsObjectTypes.GIFT
        },
        location: "gift-intent-card"
    });
    r.useEffect(() => {
        (0, d.x)({
            name: l.ImpressionNames.GIFT_INTENT_CARD,
            type: l.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                num_friend_anniversaries: I.Ay.getFriendAnniversaries().length
            }
        })
    }, [t]);
    let b = () => t === N.np.FRIEND_ANNIVERSARY ? p.intl.string(p.t.ilhtIa) : (0, m.yE)(t);
    return (0, i.jsx)("div", {
        ref: M,
        className: h.Qs,
        children: (0, i.jsxs)("div", {
            className: h.gx,
            children: [(0, i.jsxs)("div", {
                className: h.ou,
                children: [(0, i.jsxs)("div", {
                    className: h.HD,
                    children: [(0, i.jsx)(x, {
                        user: S,
                        ariaLabel: S.username,
                        showCutout: null != D
                    }), null != D && (0, i.jsx)(o.A, {
                        className: h.GM,
                        user: D,
                        "aria-label": S.username,
                        size: C._3.SIZE_24
                    })]
                }), (0, i.jsxs)("div", {
                    className: h.FS,
                    children: [(0, i.jsx)(a.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        lineClamp: 3,
                        children: t === N.np.FRIEND_ANNIVERSARY ? p.intl.string(p.t.CeQIwZ) : (0, m.yE)(t)
                    }), (0, i.jsxs)("div", {
                        className: h.jA,
                        children: [(0, i.jsx)(a.$yI, {
                            size: "xs"
                        }), (0, i.jsx)(a.Text, {
                            className: h.Tm,
                            variant: "text-md/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: t === N.np.FRIEND_ANNIVERSARY ? p.intl.formatToPlainString(p.t.PpG27s, {
                                numberOfYears: P
                            }) : (0, m.yE)(t)
                        })]
                    })]
                })]
            }), (0, i.jsxs)("div", {
                className: h.UD,
                children: [(0, i.jsx)(a.Button, {
                    size: "sm",
                    variant: "secondary",
                    text: p.intl.string(p.t.nffuyb),
                    "aria-label": p.intl.string(p.t.nffuyb),
                    onClick: e => {
                        e.stopPropagation(), E.default.track(f.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                            gift_intent_type: t,
                            cta_type: "send_message",
                            location_stack: U
                        }), (0, a.mMO)(async () => {
                            let {
                                default: e
                            } = await n.e("95501").then(n.bind(n, 367516));
                            return n => (0, i.jsx)(e, {
                                ...n,
                                giftIntentType: t,
                                analyticsLocationHistory: U
                            })
                        })
                    }
                }), (0, i.jsx)(a.Button, {
                    size: "sm",
                    variant: "expressive",
                    text: b(),
                    icon: a.okO,
                    "aria-label": b(),
                    onClick: e => {
                        e.stopPropagation();
                        let n = _.A.getUserAffinity(S.id);
                        E.default.track(f.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                            gift_intent_type: t,
                            affinity: n?.dmProbability,
                            location_stack: U
                        }), v()
                    }
                })]
            })]
        })
    })
}