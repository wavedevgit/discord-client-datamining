/** chunk id: 653813, original params: e,t,i (module,exports,require) **/
i.d(t, {
    default: () => h
});
var n = i(627968),
    s = i(64700),
    l = i(397927),
    r = i(937008),
    o = i(156312),
    a = i(532794),
    d = i(232516),
    u = i(788868),
    c = i(652215),
    m = i(985018),
    _ = i(220283);

function f(e) {
    let {
        giftRecipient: t,
        onClose: i,
        transitionState: r,
        analyticsLocations: f,
        analyticsLocation: h,
        analyticsObject: p,
        giftMessage: I
    } = e, {
        priceOptions: S
    } = (0, o.P5)(), g = s.useCallback(e => {
        (0, a.A)({
            isGift: !0,
            giftRecipient: t,
            subscriptionTier: e,
            giftingOrigin: u.vQ.DM_CHANNEL,
            analyticsLocations: f ?? [],
            analyticsLocation: h,
            analyticsObject: p ?? {
                page: c.liQ.DM_CHANNEL,
                section: c.JJy.CHANNEL_TEXT_AREA,
                object: c.ZSU.BUTTON_ICON,
                objectType: c.AnalyticsObjectTypes.GIFT
            },
            giftMessage: I
        }), i()
    }, [t, f, h, p, I, i]);
    return (0, n.jsxs)(l.EOs, {
        transitionState: r,
        size: l.rIJ.DYNAMIC,
        className: _.jT,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [(0, n.jsx)(l.rQ0, {
            className: _.Hc,
            "data-migration-pending": !0,
            children: (0, n.jsxs)(l.BJc, {
                direction: "horizontal",
                justify: "space-between",
                children: [(0, n.jsx)(l.Heading, {
                    variant: "heading-md/semibold",
                    children: m.intl.string(m.t["wg/30i"])
                }), (0, n.jsx)(l.s_y, {
                    onClick: i,
                    "data-migration-pending": !0
                })]
            })
        }), (0, n.jsx)(l.$mQ, {
            className: _.S3,
            "data-migration-pending": !0,
            children: (0, n.jsx)(d.A, {
                onSelectSku: g,
                giftRecipient: t,
                priceOptions: S,
                onWishlistItemClick: i
            })
        })]
    })
}

function h(e) {
    let {
        giftRecipient: t,
        onClose: i,
        transitionState: s,
        analyticsLocations: l,
        analyticsLocation: a,
        analyticsObject: d,
        giftMessage: c
    } = e;
    return (0, n.jsx)(o.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: u.T7,
        isGift: !0,
        children: (0, n.jsx)(r.dX, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: u.vQ.DM_CHANNEL,
            children: (0, n.jsx)(f, {
                giftRecipient: t,
                onClose: i,
                transitionState: s,
                analyticsLocations: l,
                analyticsLocation: a,
                analyticsObject: d,
                giftMessage: c
            })
        })
    })
}