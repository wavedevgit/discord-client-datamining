/** chunk id: 67414 params = (module,exports,require) **/
n.d(t, {
    A: () => O
});
var i = n(627968),
    l = n(64700),
    a = n(110259),
    r = n(311907),
    s = n(397927),
    o = n(966327),
    c = n(793574),
    u = n(688810),
    d = n(139286),
    _ = n(21119),
    A = n(287809),
    m = n(954571),
    E = n(242874),
    T = n(275759),
    I = n(51501),
    N = n(233971),
    g = n(788868),
    f = n(652215),
    C = n(778712),
    h = n(985018),
    p = n(431046);
let S = (0, s.FT9)(C._3.SIZE_56),
    x = (0, s.FT9)(C._3.SIZE_24);

function R(e) {
    let {
        user: t,
        ariaLabel: n,
        showCutout: a
    } = e, r = l.useId(), s = "u" > typeof document && document.documentElement?.dir === "rtl" ? -2 : S - x - -2, c = S - x - -3;
    return (0, i.jsxs)("svg", {
        width: S,
        height: S,
        viewBox: `0 0 ${S} ${S}`,
        className: p.XH,
        children: [a && (0, i.jsxs)("mask", {
            id: r,
            maskUnits: "userSpaceOnUse",
            children: [(0, i.jsx)("rect", {
                x: 0,
                y: 0,
                width: S,
                height: S,
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
            width: S,
            height: S,
            mask: a ? `url(#${r})` : void 0,
            children: (0, i.jsx)(o.A, {
                className: p.A6,
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
        analyticsPage: x,
        analyticsSection: O,
        innerRef: M
    } = e, D = (0, r.bG)([A.default], () => A.default.getCurrentUser()), {
        analyticsLocations: L
    } = (0, u.Ay)(c.A.PREMIUM_GIFT_INTENT_CARD), U = (0, r.bG)([T.Ay], () => T.Ay.getFriendAnniversaryYears(S.id)), P = (0, I.$)(t), {
        openGiftModal: v
    } = (0, N.$)({
        giftRecipient: S,
        analyticsLocations: L,
        analyticsLocation: P.chat,
        analyticsObject: {
            page: x,
            section: O,
            object: f.ZSU.BUTTON_CTA,
            objectType: f.AnalyticsObjectTypes.GIFT
        },
        location: "gift-intent-card"
    });
    l.useEffect(() => {
        (0, d.x)({
            name: a.ImpressionNames.GIFT_INTENT_CARD,
            type: a.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                num_friend_anniversaries: T.Ay.getFriendAnniversaries().length
            }
        })
    }, [t]);
    let y = () => t === g.np.FRIEND_ANNIVERSARY ? h.intl.string(h.t.ilhtIa) : (0, E.yE)(t);
    return (0, i.jsx)("div", {
        ref: M,
        className: p.Qs,
        children: (0, i.jsxs)("div", {
            className: p.gx,
            children: [(0, i.jsxs)("div", {
                className: p.ou,
                children: [(0, i.jsxs)("div", {
                    className: p.HD,
                    children: [(0, i.jsx)(R, {
                        user: S,
                        ariaLabel: S.username,
                        showCutout: null != D
                    }), null != D && (0, i.jsx)(o.A, {
                        className: p.GM,
                        user: D,
                        "aria-label": S.username,
                        size: C._3.SIZE_24
                    })]
                }), (0, i.jsxs)("div", {
                    className: p.FS,
                    children: [(0, i.jsx)(s.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        lineClamp: 3,
                        children: t === g.np.FRIEND_ANNIVERSARY ? h.intl.string(h.t.CeQIwZ) : (0, E.yE)(t)
                    }), (0, i.jsxs)("div", {
                        className: p.jA,
                        children: [(0, i.jsx)(s.$yI, {
                            size: "xs"
                        }), (0, i.jsx)(s.Text, {
                            className: p.Tm,
                            variant: "text-md/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: t === g.np.FRIEND_ANNIVERSARY ? h.intl.formatToPlainString(h.t.PpG27s, {
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
                        e.stopPropagation(), m.default.track(f.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                            gift_intent_type: t,
                            cta_type: "send_message",
                            location_stack: L
                        }), (0, s.mMO)(async () => {
                            let {
                                default: e
                            } = await n.e("95501").then(n.bind(n, 367516));
                            return n => (0, i.jsx)(e, {
                                ...n,
                                giftIntentType: t,
                                analyticsLocationHistory: L
                            })
                        })
                    }
                }), (0, i.jsx)(s.Button, {
                    size: "sm",
                    variant: "expressive",
                    text: y(),
                    icon: s.okO,
                    "aria-label": y(),
                    onClick: e => {
                        e.stopPropagation();
                        let n = _.A.getUserAffinity(S.id);
                        m.default.track(f.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                            gift_intent_type: t,
                            affinity: n?.dmProbability,
                            location_stack: L
                        }), v()
                    }
                })]
            })]
        })
    })
}