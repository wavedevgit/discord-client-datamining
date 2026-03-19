/** chunk id: 777426 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(110259),
    o = n(311907),
    d = n(3203),
    c = n(397927),
    u = n(793574),
    A = n(688810),
    h = n(139286),
    _ = n(414711),
    m = n(187696),
    g = n(723690),
    p = n(21119),
    E = n(994500),
    I = n(954571),
    f = n(45787),
    C = n(275759),
    T = n(979474),
    N = n(652215);
n(646363);
var S = n(985018),
    x = n(187449);

function v(e) {
    let {
        ref: t,
        isFocused: r,
        isActive: v,
        status: y,
        activities: b,
        applicationStream: O,
        isGameRelationship: L,
        isMobile: R,
        isVR: P,
        onOtherHover: D,
        onClick: M,
        recipientUser: j,
        giftIntentType: w
    } = e, {
        analyticsLocations: U
    } = (0, A.Ay)(u.A.PREMIUM_GIFT_INTENT_FRIEND_ROW), {
        Component: G
    } = (0, d.V)(), k = (0, o.bG)([C.Ay], () => C.Ay.getFriendAnniversaryYears(j.id)), {
        openGiftModal: V
    } = (0, T.$)({
        giftRecipient: j,
        analyticsLocations: U,
        analyticsLocation: N.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
        analyticsObject: {
            page: N.liQ.FRIENDS_LIST,
            section: N.JJy.FRIENDS_LIST_FRIEND_ROW,
            object: N.ZSU.BUTTON_CTA,
            objectType: N.AnalyticsObjectTypes.GIFT
        },
        location: "gift-intent-friend-row"
    });
    a.useEffect(() => {
        let e = p.A.getUserAffinity(j.id);
        (0, h.x)({
            name: s.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: s.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: w,
                affinity: e?.communicationProbability
            }
        })
    }, [j, w]);
    let B = e => {
        e.stopPropagation();
        let t = p.A.getUserAffinity(j.id);
        I.default.track(N.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
            gift_intent_type: w,
            affinity: t?.dmProbability,
            location_stack: U
        }), V()
    };
    return (0, i.jsx)(_.A, {
        ref: t,
        isFocused: r,
        isActive: v,
        user: j,
        onOtherHover: D,
        onClick: M,
        height: 72,
        children: e => (0, i.jsxs)("div", {
            className: l()(x.a4, x.Z$),
            children: [(0, i.jsx)(g.A, {
                className: x.Cv,
                user: j,
                status: y,
                isMobile: R,
                isVR: P,
                subText: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(m.A, {
                        hovered: e,
                        activities: b,
                        applicationStream: O,
                        status: y,
                        user: j,
                        userIgnored: E.A.isIgnored(j.id)
                    }), (0, i.jsxs)("div", {
                        className: x.K3,
                        children: [(0, i.jsx)(c.$yI, {
                            size: "xxs",
                            color: "currentColor"
                        }), (0, i.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: S.intl.formatToPlainString(S.t.S3fdq7, {
                                numberOfYears: k
                            })
                        })]
                    })]
                }),
                hovered: e,
                showAccountIdentifier: !L && !j.isProvisional
            }), (0, i.jsxs)("div", {
                className: x.o1,
                children: [(0, i.jsx)(c.K0, {
                    size: "sm",
                    variant: "secondary",
                    icon: G,
                    "aria-label": S.intl.string(S.t.I61IsE),
                    onClick: () => {
                        I.default.track(N.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                            gift_intent_type: w,
                            cta_type: "send_message",
                            location_stack: U
                        }), (0, f.xs)(j.id), (0, c.mMO)(async () => {
                            let {
                                default: e
                            } = await n.e("95501").then(n.bind(n, 367516));
                            return t => (0, i.jsx)(e, {
                                ...t,
                                giftIntentType: w ?? void 0,
                                analyticsLocationHistory: U
                            })
                        })
                    }
                }), (0, i.jsx)(c.Button, {
                    size: "sm",
                    text: S.intl.string(S.t.PEjaCx),
                    icon: c.okO,
                    "aria-label": S.intl.string(S.t.PEjaCx),
                    onClick: B
                })]
            })]
        })
    })
}