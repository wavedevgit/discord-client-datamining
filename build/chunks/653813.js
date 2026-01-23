/** Chunk was on 55926 **/
/** chunk id: 653813, original params: i,e,t (module,exports,require) **/
t.d(e, {
    default: () => g
});
var n = t(627968),
    s = t(64700),
    l = t(397927),
    r = t(937008),
    a = t(156312),
    o = t(532794),
    c = t(232516),
    d = t(788868),
    u = t(652215),
    m = t(985018),
    h = t(431389);

function p(i) {
    let {
        giftRecipient: e,
        onClose: t,
        transitionState: r,
        analyticsLocations: p,
        analyticsLocation: g,
        analyticsObject: I,
        giftMessage: f
    } = i, {
        priceOptions: j
    } = (0, a.P5)(), x = s.useCallback(i => {
        (0, o.A)({
            isGift: !0,
            giftRecipient: e,
            subscriptionTier: i,
            giftingOrigin: d.vQ.DM_CHANNEL,
            analyticsLocations: null != p ? p : [],
            analyticsLocation: g,
            analyticsObject: null != I ? I : {
                page: u.liQ.DM_CHANNEL,
                section: u.JJy.CHANNEL_TEXT_AREA,
                object: u.ZSU.BUTTON_ICON,
                objectType: u.AnalyticsObjectTypes.GIFT
            },
            giftMessage: f
        }), t()
    }, [e, p, g, I, f, t]);
    return (0, n.jsxs)(l.EOs, {
        transitionState: r,
        size: l.rIJ.DYNAMIC,
        className: h.jT,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [(0, n.jsx)(l.rQ0, {
            className: h.Hc,
            "data-migration-pending": !0,
            children: (0, n.jsxs)(l.BJc, {
                direction: "horizontal",
                justify: "space-between",
                children: [(0, n.jsx)(l.Heading, {
                    variant: "heading-md/semibold",
                    children: m.intl.string(m.t["wg/30i"])
                }), (0, n.jsx)(l.s_y, {
                    onClick: t,
                    "data-migration-pending": !0
                })]
            })
        }), (0, n.jsx)(l.$mQ, {
            className: h.S3,
            "data-migration-pending": !0,
            children: (0, n.jsx)(c.A, {
                onSelectSku: x,
                giftRecipient: e,
                priceOptions: j,
                onWishlistItemClick: t
            })
        })]
    })
}

function g(i) {
    let {
        giftRecipient: e,
        onClose: t,
        transitionState: s,
        analyticsLocations: l,
        analyticsLocation: o,
        analyticsObject: c,
        giftMessage: u
    } = i;
    return (0, n.jsx)(a.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: d.T7,
        isGift: !0,
        children: (0, n.jsx)(r.dX, {
            isGift: !0,
            giftRecipient: e,
            giftingOrigin: d.vQ.DM_CHANNEL,
            children: (0, n.jsx)(p, {
                giftRecipient: e,
                onClose: t,
                transitionState: s,
                analyticsLocations: l,
                analyticsLocation: o,
                analyticsObject: c,
                giftMessage: u
            })
        })
    })
}