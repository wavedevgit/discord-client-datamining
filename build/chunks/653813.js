/** chunk id: 653813 params = (module,exports,require) **/
t.d(i, {
    default: () => h
});
var r = t(627968),
    n = t(64700),
    a = t(397927),
    s = t(937008),
    l = t(156312),
    o = t(532794),
    c = t(232516),
    d = t(788868),
    _ = t(652215),
    u = t(985018),
    m = t(757515);

function p(e) {
    let {
        giftRecipient: i,
        onClose: t,
        transitionState: s,
        analyticsLocations: p,
        analyticsLocation: h,
        analyticsObject: f,
        giftMessage: g
    } = e, {
        priceOptions: I
    } = (0, l.P5)(), b = n.useCallback(e => {
        (0, o.A)({
            isGift: !0,
            giftRecipient: i,
            subscriptionTier: e,
            giftingOrigin: d.vQ.DM_CHANNEL,
            analyticsLocations: p ?? [],
            analyticsLocation: h,
            analyticsObject: f ?? {
                page: _.liQ.DM_CHANNEL,
                section: _.JJy.CHANNEL_TEXT_AREA,
                object: _.ZSU.BUTTON_ICON,
                objectType: _.AnalyticsObjectTypes.GIFT
            },
            giftMessage: g
        }), t()
    }, [i, p, h, f, g, t]);
    return (0, r.jsxs)(a.EOs, {
        transitionState: s,
        size: a.rIJ.DYNAMIC,
        className: m.jT,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [(0, r.jsx)(a.rQ0, {
            className: m.Hc,
            "data-migration-pending": !0,
            children: (0, r.jsxs)(a.BJc, {
                direction: "horizontal",
                justify: "space-between",
                children: [(0, r.jsx)(a.Heading, {
                    variant: "heading-md/semibold",
                    children: u.intl.string(u.t["wg/30i"])
                }), (0, r.jsx)(a.s_y, {
                    onClick: t,
                    "data-migration-pending": !0
                })]
            })
        }), (0, r.jsx)(a.$mQ, {
            className: m.S3,
            "data-migration-pending": !0,
            children: (0, r.jsx)(c.A, {
                onSelectSku: b,
                giftRecipient: i,
                priceOptions: I,
                onWishlistItemClick: t
            })
        })]
    })
}

function h(e) {
    let {
        giftRecipient: i,
        onClose: t,
        transitionState: n,
        analyticsLocations: a,
        analyticsLocation: o,
        analyticsObject: c,
        giftMessage: _
    } = e;
    return (0, r.jsx)(l.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: d.T7,
        isGift: !0,
        children: (0, r.jsx)(s.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: d.vQ.DM_CHANNEL,
            children: (0, r.jsx)(p, {
                giftRecipient: i,
                onClose: t,
                transitionState: n,
                analyticsLocations: a,
                analyticsLocation: o,
                analyticsObject: c,
                giftMessage: _
            })
        })
    })
}