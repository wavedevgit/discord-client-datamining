/** chunk id: 653813, original params: e,t,i (module,exports,require) **/
i.d(t, {
    default: () => p
});
var r = i(627968),
    n = i(64700),
    a = i(397927),
    l = i(937008),
    s = i(156312),
    o = i(532794),
    d = i(232516),
    u = i(788868),
    c = i(652215),
    m = i(985018),
    f = i(431389);

function _(e) {
    let {
        giftRecipient: t,
        onClose: i,
        transitionState: l,
        analyticsLocations: _,
        analyticsLocation: p,
        analyticsObject: g,
        giftMessage: h
    } = e, {
        priceOptions: I
    } = (0, s.P5)(), C = n.useCallback(e => {
        (0, o.A)({
            isGift: !0,
            giftRecipient: t,
            subscriptionTier: e,
            giftingOrigin: u.vQ.DM_CHANNEL,
            analyticsLocations: null != _ ? _ : [],
            analyticsLocation: p,
            analyticsObject: null != g ? g : {
                page: c.liQ.DM_CHANNEL,
                section: c.JJy.CHANNEL_TEXT_AREA,
                object: c.ZSU.BUTTON_ICON,
                objectType: c.AnalyticsObjectTypes.GIFT
            },
            giftMessage: h
        }), i()
    }, [t, _, p, g, h, i]);
    return (0, r.jsxs)(a.EOs, {
        transitionState: l,
        size: a.rIJ.DYNAMIC,
        className: f.jT,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [(0, r.jsx)(a.rQ0, {
            className: f.Hc,
            "data-migration-pending": !0,
            children: (0, r.jsxs)(a.BJc, {
                direction: "horizontal",
                justify: "space-between",
                children: [(0, r.jsx)(a.Heading, {
                    variant: "heading-md/semibold",
                    children: m.intl.string(m.t["wg/30i"])
                }), (0, r.jsx)(a.s_y, {
                    onClick: i,
                    "data-migration-pending": !0
                })]
            })
        }), (0, r.jsx)(a.$mQ, {
            className: f.S3,
            "data-migration-pending": !0,
            children: (0, r.jsx)(d.A, {
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
        transitionState: n,
        analyticsLocations: a,
        analyticsLocation: o,
        analyticsObject: d,
        giftMessage: c
    } = e;
    return (0, r.jsx)(s.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: u.T7,
        isGift: !0,
        children: (0, r.jsx)(l.dX, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: u.vQ.DM_CHANNEL,
            children: (0, r.jsx)(_, {
                giftRecipient: t,
                onClose: i,
                transitionState: n,
                analyticsLocations: a,
                analyticsLocation: o,
                analyticsObject: d,
                giftMessage: c
            })
        })
    })
}