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
    g = n(652215),
    C = n(778712),
    p = n(985018),
    h = n(989712);
let x = (0, s.FT9)(C._3.SIZE_56),
    R = (0, s.FT9)(C._3.SIZE_24);

function S(e) {
    let {
        user: t,
        ariaLabel: n,
        showCutout: l
    } = e, r = a.useId(), s = "u" > typeof document && document.documentElement?.dir === "rtl" ? -2 : x - R - -2, c = x - R - -3;
    return (0, i.jsxs)("svg", {
        width: x,
        height: x,
        viewBox: `0 0 ${x} ${x}`,
        className: h.XH,
        children: [l && (0, i.jsxs)("mask", {
            id: r,
            maskUnits: "userSpaceOnUse",
            children: [(0, i.jsx)("rect", {
                x: 0,
                y: 0,
                width: x,
                height: x,
                fill: "white"
            }), (0, i.jsx)("circle", {
                cx: s + R / 2,
                cy: c + R / 2,
                r: R / 2 + 2,
                fill: "black"
            })]
        }), (0, i.jsx)("foreignObject", {
            x: 0,
            y: 0,
            width: x,
            height: x,
            mask: l ? `url(#${r})` : void 0,
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
        recipientUser: x,
        analyticsPage: R,
        analyticsSection: O,
        innerRef: M
    } = e, D = (0, r.bG)([m.default], () => m.default.getCurrentUser()), {
        analyticsLocations: P
    } = (0, d.Ay)(c.A.PREMIUM_GIFT_INTENT_CARD), U = (0, r.bG)([I.Ay], () => I.Ay.getFriendAnniversaryYears(x.id)), v = (0, f.$)(t), {
        openGiftModal: L
    } = (0, T.$)({
        giftRecipient: x,
        analyticsLocations: P,
        analyticsLocation: v.chat,
        analyticsObject: {
            page: R,
            section: O,
            object: g.ZSU.BUTTON_CTA,
            objectType: g.AnalyticsObjectTypes.GIFT
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
    let j = () => t === N.np.FRIEND_ANNIVERSARY ? p.intl.string(p.t.ilhtIa) : (0, E.yE)(t);
    return (0, i.jsx)("div", {
        ref: M,
        className: h.Qs,
        children: (0, i.jsxs)("div", {
            className: h.gx,
            children: [(0, i.jsxs)("div", {
                className: h.ou,
                children: [(0, i.jsxs)("div", {
                    className: h.HD,
                    children: [(0, i.jsx)(S, {
                        user: x,
                        ariaLabel: x.username,
                        showCutout: null != D
                    }), null != D && (0, i.jsx)(o.A, {
                        className: h.GM,
                        user: D,
                        "aria-label": x.username,
                        size: C._3.SIZE_24
                    })]
                }), (0, i.jsxs)("div", {
                    className: h.FS,
                    children: [(0, i.jsx)(s.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        lineClamp: 3,
                        children: t === N.np.FRIEND_ANNIVERSARY ? p.intl.string(p.t.CeQIwZ) : (0, E.yE)(t)
                    }), (0, i.jsxs)("div", {
                        className: h.jA,
                        children: [(0, i.jsx)(s.$yI, {
                            size: "xs"
                        }), (0, i.jsx)(s.Text, {
                            className: h.Tm,
                            variant: "text-md/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: t === N.np.FRIEND_ANNIVERSARY ? p.intl.formatToPlainString(p.t.PpG27s, {
                                numberOfYears: U
                            }) : (0, E.yE)(t)
                        })]
                    })]
                })]
            }), (0, i.jsxs)("div", {
                className: h.UD,
                children: [(0, i.jsx)(s.Button, {
                    size: "sm",
                    variant: "secondary",
                    text: p.intl.string(p.t.nffuyb),
                    "aria-label": p.intl.string(p.t.nffuyb),
                    onClick: e => {
                        e.stopPropagation(), A.default.track(g.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
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
                        let n = _.A.getUserAffinity(x.id);
                        A.default.track(g.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
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