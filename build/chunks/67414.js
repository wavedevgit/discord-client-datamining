/** chunk id: 67414 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var i = n(627968),
    l = n(64700),
    a = n(110259),
    r = n(311907),
    s = n(397927),
    o = n(966327),
    c = n(793574),
    d = n(688810),
    u = n(139286),
    m = n(21119),
    _ = n(287809),
    A = n(954571),
    E = n(242874),
    f = n(275759),
    h = n(979474),
    g = n(51501),
    p = n(788868),
    x = n(652215),
    C = n(778712),
    I = n(985018),
    T = n(989712);
let N = (0, s.FT9)(C._3.SIZE_56),
    S = (0, s.FT9)(C._3.SIZE_24);

function R(e) {
    let {
        user: t,
        ariaLabel: n,
        showCutout: a
    } = e, r = l.useId(), s = "u" > typeof document && document.documentElement?.dir === "rtl" ? -2 : N - S - -2, c = N - S - -3;
    return (0, i.jsxs)("svg", {
        width: N,
        height: N,
        viewBox: `0 0 ${N} ${N}`,
        className: T.XH,
        children: [a && (0, i.jsxs)("mask", {
            id: r,
            maskUnits: "userSpaceOnUse",
            children: [(0, i.jsx)("rect", {
                x: 0,
                y: 0,
                width: N,
                height: N,
                fill: "white"
            }), (0, i.jsx)("circle", {
                cx: s + S / 2,
                cy: c + S / 2,
                r: S / 2 + 2,
                fill: "black"
            })]
        }), (0, i.jsx)("foreignObject", {
            x: 0,
            y: 0,
            width: N,
            height: N,
            mask: a ? `url(#${r})` : void 0,
            children: (0, i.jsx)(o.A, {
                className: T.A6,
                user: t,
                "aria-label": n,
                size: C._3.SIZE_56
            })
        })]
    })
}

function v(e) {
    let {
        giftIntentType: t,
        recipientUser: N,
        analyticsPage: S,
        analyticsSection: v,
        innerRef: O
    } = e, M = (0, r.bG)([_.default], () => _.default.getCurrentUser()), {
        analyticsLocations: j
    } = (0, d.Ay)(c.A.PREMIUM_GIFT_INTENT_CARD), b = (0, r.bG)([f.Ay], () => f.Ay.getFriendAnniversaryYears(N.id)), y = (0, g.$)(t), {
        openGiftModal: L
    } = (0, h.$)({
        giftRecipient: N,
        analyticsLocations: j,
        analyticsLocation: y.chat,
        analyticsObject: {
            page: S,
            section: v,
            object: x.ZSU.BUTTON_CTA,
            objectType: x.AnalyticsObjectTypes.GIFT
        },
        location: "gift-intent-card"
    });
    l.useEffect(() => {
        (0, u.x)({
            name: a.ImpressionNames.GIFT_INTENT_CARD,
            type: a.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                num_friend_anniversaries: f.Ay.getFriendAnniversaries().length
            }
        })
    }, [t]);
    let D = () => t === p.np.FRIEND_ANNIVERSARY ? I.intl.string(I.t.ilhtIa) : (0, E.yE)(t);
    return (0, i.jsx)("div", {
        ref: O,
        className: T.Qs,
        children: (0, i.jsxs)("div", {
            className: T.gx,
            children: [(0, i.jsxs)("div", {
                className: T.ou,
                children: [(0, i.jsxs)("div", {
                    className: T.HD,
                    children: [(0, i.jsx)(R, {
                        user: N,
                        ariaLabel: N.username,
                        showCutout: null != M
                    }), null != M && (0, i.jsx)(o.A, {
                        className: T.GM,
                        user: M,
                        "aria-label": N.username,
                        size: C._3.SIZE_24
                    })]
                }), (0, i.jsxs)("div", {
                    className: T.FS,
                    children: [(0, i.jsx)(s.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        lineClamp: 3,
                        children: t === p.np.FRIEND_ANNIVERSARY ? I.intl.string(I.t.CeQIwZ) : (0, E.yE)(t)
                    }), (0, i.jsxs)("div", {
                        className: T.jA,
                        children: [(0, i.jsx)(s.$yI, {
                            size: "xs"
                        }), (0, i.jsx)(s.Text, {
                            className: T.Tm,
                            variant: "text-md/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: t === p.np.FRIEND_ANNIVERSARY ? I.intl.formatToPlainString(I.t.PpG27s, {
                                numberOfYears: b
                            }) : (0, E.yE)(t)
                        })]
                    })]
                })]
            }), (0, i.jsxs)("div", {
                className: T.UD,
                children: [(0, i.jsx)(s.Button, {
                    size: "sm",
                    variant: "secondary",
                    text: I.intl.string(I.t.nffuyb),
                    "aria-label": I.intl.string(I.t.nffuyb),
                    onClick: e => {
                        e.stopPropagation(), A.default.track(x.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                            gift_intent_type: t,
                            cta_type: "send_message",
                            location_stack: j
                        }), (0, s.mMO)(async () => {
                            let {
                                default: e
                            } = await n.e("95501").then(n.bind(n, 367516));
                            return n => (0, i.jsx)(e, {
                                ...n,
                                giftIntentType: t,
                                analyticsLocationHistory: j
                            })
                        })
                    }
                }), (0, i.jsx)(s.Button, {
                    size: "sm",
                    variant: "expressive",
                    text: D(),
                    icon: s.okO,
                    "aria-label": D(),
                    onClick: e => {
                        e.stopPropagation();
                        let n = m.A.getUserAffinity(N.id);
                        A.default.track(x.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                            gift_intent_type: t,
                            affinity: n?.dmProbability,
                            location_stack: j
                        }), L()
                    }
                })]
            })]
        })
    })
}