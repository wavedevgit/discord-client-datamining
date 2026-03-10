/** chunk id: 653813 params = (module,exports,require) **/
i.d(t, {
    default: () => p
});
var n = i(627968),
    r = i(64700),
    s = i(397927),
    a = i(937008),
    l = i(156312),
    o = i(532794),
    d = i(232516),
    c = i(788868),
    u = i(652215),
    _ = i(985018),
    m = i(431389);

function f(e) {
    let {
        giftRecipient: t,
        onClose: i,
        transitionState: a,
        analyticsLocations: f,
        analyticsLocation: p,
        analyticsObject: h,
        giftMessage: g
    } = e, {
        priceOptions: I
    } = (0, l.P5)(), C = r.useCallback(e => {
        (0, o.A)({
            isGift: !0,
            giftRecipient: t,
            subscriptionTier: e,
            giftingOrigin: c.vQ.DM_CHANNEL,
            analyticsLocations: f ?? [],
            analyticsLocation: p,
            analyticsObject: h ?? {
                page: u.liQ.DM_CHANNEL,
                section: u.JJy.CHANNEL_TEXT_AREA,
                object: u.ZSU.BUTTON_ICON,
                objectType: u.AnalyticsObjectTypes.GIFT
            },
            giftMessage: g
        }), i()
    }, [t, f, p, h, g, i]);
    return (0, n.jsxs)(s.EOs, {
        transitionState: a,
        size: s.rIJ.DYNAMIC,
        className: m.jT,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [(0, n.jsx)(s.rQ0, {
            className: m.Hc,
            "data-migration-pending": !0,
            children: (0, n.jsxs)(s.BJc, {
                direction: "horizontal",
                justify: "space-between",
                children: [(0, n.jsx)(s.Heading, {
                    variant: "heading-md/semibold",
                    children: _.intl.string(_.t["wg/30i"])
                }), (0, n.jsx)(s.s_y, {
                    onClick: i,
                    "data-migration-pending": !0
                })]
            })
        }), (0, n.jsx)(s.$mQ, {
            className: m.S3,
            "data-migration-pending": !0,
            children: (0, n.jsx)(d.A, {
                onSelectSku: C,
                giftRecipient: t,
                priceOptions: I,
                onWishlistItemClick: i
            })
        })]
    })
}

function p(e) {
    let {
        giftRecipient: t,
        onClose: i,
        transitionState: r,
        analyticsLocations: s,
        analyticsLocation: o,
        analyticsObject: d,
        giftMessage: u
    } = e;
    return (0, n.jsx)(l.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: c.T7,
        isGift: !0,
        children: (0, n.jsx)(a.dX, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: c.vQ.DM_CHANNEL,
            children: (0, n.jsx)(f, {
                giftRecipient: t,
                onClose: i,
                transitionState: r,
                analyticsLocations: s,
                analyticsLocation: o,
                analyticsObject: d,
                giftMessage: u
            })
        })
    })
}