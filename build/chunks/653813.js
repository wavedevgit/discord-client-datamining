/** chunk id: 653813 params = (module,exports,require) **/
t.d(i, {
    default: () => f
});
var n = t(627968),
    r = t(64700),
    s = t(397927),
    a = t(937008),
    l = t(156312),
    o = t(532794),
    d = t(232516),
    c = t(788868),
    _ = t(652215),
    u = t(985018),
    m = t(220283);

function p(e) {
    let {
        giftRecipient: i,
        onClose: t,
        transitionState: a,
        analyticsLocations: p,
        analyticsLocation: f,
        analyticsObject: h,
        giftMessage: g
    } = e, {
        priceOptions: I
    } = (0, l.P5)(), C = r.useCallback(e => {
        (0, o.A)({
            isGift: !0,
            giftRecipient: i,
            subscriptionTier: e,
            giftingOrigin: c.vQ.DM_CHANNEL,
            analyticsLocations: p ?? [],
            analyticsLocation: f,
            analyticsObject: h ?? {
                page: _.liQ.DM_CHANNEL,
                section: _.JJy.CHANNEL_TEXT_AREA,
                object: _.ZSU.BUTTON_ICON,
                objectType: _.AnalyticsObjectTypes.GIFT
            },
            giftMessage: g
        }), t()
    }, [i, p, f, h, g, t]);
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
                    children: u.intl.string(u.t["wg/30i"])
                }), (0, n.jsx)(s.s_y, {
                    onClick: t,
                    "data-migration-pending": !0
                })]
            })
        }), (0, n.jsx)(s.$mQ, {
            className: m.S3,
            "data-migration-pending": !0,
            children: (0, n.jsx)(d.A, {
                onSelectSku: C,
                giftRecipient: i,
                priceOptions: I,
                onWishlistItemClick: t
            })
        })]
    })
}

function f(e) {
    let {
        giftRecipient: i,
        onClose: t,
        transitionState: r,
        analyticsLocations: s,
        analyticsLocation: o,
        analyticsObject: d,
        giftMessage: _
    } = e;
    return (0, n.jsx)(l.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: c.T7,
        isGift: !0,
        children: (0, n.jsx)(a.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: c.vQ.DM_CHANNEL,
            children: (0, n.jsx)(p, {
                giftRecipient: i,
                onClose: t,
                transitionState: r,
                analyticsLocations: s,
                analyticsLocation: o,
                analyticsObject: d,
                giftMessage: _
            })
        })
    })
}