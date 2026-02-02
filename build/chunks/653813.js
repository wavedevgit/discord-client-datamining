/** chunk id: 653813, original params: e,t,i (module,exports,require) **/
i.d(t, {
    default: () => _
});
var n = i(627968),
    r = i(64700),
    l = i(397927),
    s = i(937008),
    a = i(156312),
    o = i(532794),
    u = i(232516),
    c = i(788868),
    d = i(652215),
    m = i(985018),
    p = i(431389);

function f(e) {
    let {
        giftRecipient: t,
        onClose: i,
        transitionState: s,
        analyticsLocations: f,
        analyticsLocation: _,
        analyticsObject: h,
        giftMessage: g
    } = e, {
        priceOptions: I
    } = (0, a.P5)(), S = r.useCallback(e => {
        (0, o.A)({
            isGift: !0,
            giftRecipient: t,
            subscriptionTier: e,
            giftingOrigin: c.vQ.DM_CHANNEL,
            analyticsLocations: null != f ? f : [],
            analyticsLocation: _,
            analyticsObject: null != h ? h : {
                page: d.liQ.DM_CHANNEL,
                section: d.JJy.CHANNEL_TEXT_AREA,
                object: d.ZSU.BUTTON_ICON,
                objectType: d.AnalyticsObjectTypes.GIFT
            },
            giftMessage: g
        }), i()
    }, [t, f, _, h, g, i]);
    return (0, n.jsxs)(l.EOs, {
        transitionState: s,
        size: l.rIJ.DYNAMIC,
        className: p.jT,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [(0, n.jsx)(l.rQ0, {
            className: p.Hc,
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
            className: p.S3,
            "data-migration-pending": !0,
            children: (0, n.jsx)(u.A, {
                onSelectSku: S,
                giftRecipient: t,
                priceOptions: I,
                onWishlistItemClick: i
            })
        })]
    })
}

function _(e) {
    let {
        giftRecipient: t,
        onClose: i,
        transitionState: r,
        analyticsLocations: l,
        analyticsLocation: o,
        analyticsObject: u,
        giftMessage: d
    } = e;
    return (0, n.jsx)(a.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: c.T7,
        isGift: !0,
        children: (0, n.jsx)(s.dX, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: c.vQ.DM_CHANNEL,
            children: (0, n.jsx)(f, {
                giftRecipient: t,
                onClose: i,
                transitionState: r,
                analyticsLocations: l,
                analyticsLocation: o,
                analyticsObject: u,
                giftMessage: d
            })
        })
    })
}