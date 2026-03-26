/** chunk id: 653813 params = (module,exports,require) **/
t.d(i, {
    default: () => p
});
var r = t(627968),
    n = t(64700),
    a = t(397927),
    s = t(937008),
    l = t(156312),
    o = t(532794),
    d = t(232516),
    c = t(788868),
    _ = t(652215),
    m = t(985018),
    u = t(245526);

function f(e) {
    let {
        giftRecipient: i,
        onClose: t,
        transitionState: s,
        analyticsLocations: f,
        analyticsLocation: p,
        analyticsObject: h,
        giftMessage: g
    } = e, {
        priceOptions: I
    } = (0, l.P5)(), C = n.useCallback(e => {
        (0, o.A)({
            isGift: !0,
            giftRecipient: i,
            subscriptionTier: e,
            giftingOrigin: c.vQ.DM_CHANNEL,
            analyticsLocations: f ?? [],
            analyticsLocation: p,
            analyticsObject: h ?? {
                page: _.liQ.DM_CHANNEL,
                section: _.JJy.CHANNEL_TEXT_AREA,
                object: _.ZSU.BUTTON_ICON,
                objectType: _.AnalyticsObjectTypes.GIFT
            },
            giftMessage: g
        }), t()
    }, [i, f, p, h, g, t]);
    return (0, r.jsxs)(a.EOs, {
        transitionState: s,
        size: a.rIJ.DYNAMIC,
        className: u.jT,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [(0, r.jsx)(a.rQ0, {
            className: u.Hc,
            "data-migration-pending": !0,
            children: (0, r.jsxs)(a.BJc, {
                direction: "horizontal",
                justify: "space-between",
                children: [(0, r.jsx)(a.Heading, {
                    variant: "heading-md/semibold",
                    children: m.intl.string(m.t["wg/30i"])
                }), (0, r.jsx)(a.s_y, {
                    onClick: t,
                    "data-migration-pending": !0
                })]
            })
        }), (0, r.jsx)(a.$mQ, {
            className: u.S3,
            "data-migration-pending": !0,
            children: (0, r.jsx)(d.A, {
                onSelectSku: C,
                giftRecipient: i,
                priceOptions: I,
                onWishlistItemClick: t
            })
        })]
    })
}

function p(e) {
    let {
        giftRecipient: i,
        onClose: t,
        transitionState: n,
        analyticsLocations: a,
        analyticsLocation: o,
        analyticsObject: d,
        giftMessage: _
    } = e;
    return (0, r.jsx)(l.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: c.T7,
        isGift: !0,
        children: (0, r.jsx)(s.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: c.vQ.DM_CHANNEL,
            children: (0, r.jsx)(f, {
                giftRecipient: i,
                onClose: t,
                transitionState: n,
                analyticsLocations: a,
                analyticsLocation: o,
                analyticsObject: d,
                giftMessage: _
            })
        })
    })
}