/** chunk id: 67414 params = (module,exports,require) **/
n.d(t, {
    A: () => O
});
var i = n(627968),
    a = n(64700),
    l = n(110259),
    r = n(311907),
    s = n(397927),
    o = n(966327),
    c = n(793574),
    d = n(688810),
    u = n(139286),
    _ = n(21119),
    m = n(287809),
    A = n(954571),
    E = n(242874),
    I = n(275759),
    T = n(979474),
    f = n(51501),
    N = n(788868),
    C = n(652215),
    g = n(778712),
    h = n(985018),
    p = n(989712);
let R = (0, s.FT9)(g._3.SIZE_56),
    x = (0, s.FT9)(g._3.SIZE_24);

function S(e) {
    let {
        user: t,
        ariaLabel: n,
        showCutout: l
    } = e, r = a.useId(), s = "u" > typeof document && document.documentElement?.dir === "rtl" ? -2 : R - x - -2, c = R - x - -3;
    return (0, i.jsxs)("svg", {
        width: R,
        height: R,
        viewBox: `0 0 ${R} ${R}`,
        className: p.XH,
        children: [l && (0, i.jsxs)("mask", {
            id: r,
            maskUnits: "userSpaceOnUse",
            children: [(0, i.jsx)("rect", {
                x: 0,
                y: 0,
                width: R,
                height: R,
                fill: "white"
            }), (0, i.jsx)("circle", {
                cx: s + x / 2,
                cy: c + x / 2,
                r: x / 2 + 2,
                fill: "black"
            })]
        }), (0, i.jsx)("foreignObject", {
            x: 0,
            y: 0,
            width: R,
            height: R,
            mask: l ? `url(#${r})` : void 0,
            children: (0, i.jsx)(o.A, {
                className: p.A6,
                user: t,
                "aria-label": n,
                size: g._3.SIZE_56
            })
        })]
    })
}

function O(e) {
    let {
        giftIntentType: t,
        recipientUser: R,
        analyticsPage: x,
        analyticsSection: O,
        innerRef: M
    } = e, D = (0, r.bG)([m.default], () => m.default.getCurrentUser()), {
        analyticsLocations: P
    } = (0, d.Ay)(c.A.PREMIUM_GIFT_INTENT_CARD), U = (0, r.bG)([I.Ay], () => I.Ay.getFriendAnniversaryYears(R.id)), v = (0, f.$)(t), {
        openGiftModal: L
    } = (0, T.$)({
        giftRecipient: R,
        analyticsLocations: P,
        analyticsLocation: v.chat,
        analyticsObject: {
            page: x,
            section: O,
            object: C.ZSU.BUTTON_CTA,
            objectType: C.AnalyticsObjectTypes.GIFT
        },
        location: "gift-intent-card"
    });
    a.useEffect(() => {
        (0, u.x)({
            name: l.ImpressionNames.GIFT_INTENT_CARD,
            type: l.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                num_friend_anniversaries: I.Ay.getFriendAnniversaries().length
            }
        })
    }, [t]);
    let j = () => t === N.np.FRIEND_ANNIVERSARY ? h.intl.string(h.t.ilhtIa) : (0, E.yE)(t);
    return (0, i.jsx)("div", {
        ref: M,
        className: p.Qs,
        children: (0, i.jsxs)("div", {
            className: p.gx,
            children: [(0, i.jsxs)("div", {
                className: p.ou,
                children: [(0, i.jsxs)("div", {
                    className: p.HD,
                    children: [(0, i.jsx)(S, {
                        user: R,
                        ariaLabel: R.username,
                        showCutout: null != D
                    }), null != D && (0, i.jsx)(o.A, {
                        className: p.GM,
                        user: D,
                        "aria-label": R.username,
                        size: g._3.SIZE_24
                    })]
                }), (0, i.jsxs)("div", {
                    className: p.FS,
                    children: [(0, i.jsx)(s.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        lineClamp: 3,
                        children: t === N.np.FRIEND_ANNIVERSARY ? h.intl.string(h.t.CeQIwZ) : (0, E.yE)(t)
                    }), (0, i.jsxs)("div", {
                        className: p.jA,
                        children: [(0, i.jsx)(s.$yI, {
                            size: "xs"
                        }), (0, i.jsx)(s.Text, {
                            className: p.Tm,
                            variant: "text-md/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: t === N.np.FRIEND_ANNIVERSARY ? h.intl.formatToPlainString(h.t.PpG27s, {
                                numberOfYears: U
                            }) : (0, E.yE)(t)
                        })]
                    })]
                })]
            }), (0, i.jsxs)("div", {
                className: p.UD,
                children: [(0, i.jsx)(s.Button, {
                    size: "sm",
                    variant: "secondary",
                    text: h.intl.string(h.t.nffuyb),
                    "aria-label": h.intl.string(h.t.nffuyb),
                    onClick: e => {
                        e.stopPropagation(), A.default.track(C.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                            gift_intent_type: t,
                            cta_type: "send_message",
                            location_stack: P
                        }), (0, s.mMO)(async () => {
                            let {
                                default: e
                            } = await n.e("95501").then(n.bind(n, 367516));
                            return n => (0, i.jsx)(e, {
                                ...n,
                                giftIntentType: t,
                                analyticsLocationHistory: P
                            })
                        })
                    }
                }), (0, i.jsx)(s.Button, {
                    size: "sm",
                    variant: "expressive",
                    text: j(),
                    icon: s.okO,
                    "aria-label": j(),
                    onClick: e => {
                        e.stopPropagation();
                        let n = _.A.getUserAffinity(R.id);
                        A.default.track(C.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                            gift_intent_type: t,
                            affinity: n?.dmProbability,
                            location_stack: P
                        }), L()
                    }
                })]
            })]
        })
    })
}