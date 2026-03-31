/** chunk id: 152815 params = (module,exports,require) **/
n.d(t, {
    P: () => f,
    ThirdPartyPromotionsModal: () => T
});
var i = n(627968);
n(64700);
var s = n(158954),
    l = n(311907),
    a = n(397927),
    r = n(597758),
    o = n(35587),
    d = n(412260),
    c = n(116011),
    u = n(881373),
    m = n(125877),
    g = n(284498),
    _ = n(985018),
    A = n(616825);
let x = {
        Logitech30P: {
            title: g.default.jkdhZq,
            titleParams: {
                discountPercent: u.aW
            },
            body: g.default.Yl5ww1
        },
        Logitech5PNI: {
            title: g.default.zeBjoX,
            titleParams: {
                discountPercent: u.y$
            },
            body: g.default.fC4abC,
            bodyParams: {
                months: 6
            }
        },
        Logitech5PGS: {
            title: g.default.ogcfac,
            titleParams: {
                discountPercent: u.K2
            },
            body: g.default.Yl5ww1
        }
    },
    h = {
        logitech: {
            modalTitle: g.default["2I7nK+"],
            modalSubtitle: {
                message: g.default.W8jOD0,
                values: {
                    termsUrl: "https://www.logitech.com/terms"
                }
            },
            landingUrl: "https://www.logitech.com/"
        }
    },
    p = (e, t) => {
        let n = x[e.outboundTitle];
        return {
            id: e.id,
            partnerId: e.partnerId ?? "",
            title: null != n ? _.intl.formatToPlainString(n.title, n.titleParams ?? {}) : "",
            body: null != n ? _.intl.formatToPlainString(n.body, n.bodyParams ?? {}) : "",
            startDate: e.startDate,
            endDate: e.endDate,
            redemptionURL: e.outboundRedemptionPageLink,
            code: t
        }
    },
    T = e => {
        let {
            partnerId: t,
            transitionState: n,
            onClose: a
        } = e, r = h[t], [u, x] = (0, l.yK)([d.A], () => {
            let {
                recurring: e,
                oneTime: n
            } = d.A.getPromotionsByPartner(t);
            return [e, n]
        }), {
            promotionsLoaded: T,
            claimedOutboundPromotionCodeMap: f
        } = (0, o.y7)();
        if (!T) return (0, i.jsx)(s.y$y, {});
        let E = r?.modalSubtitle != null ? _.intl.format(r.modalSubtitle.message, r.modalSubtitle.values) : void 0,
            S = null == r ? t : _.intl.string(r.modalTitle);
        return (0, i.jsx)(s.Modal, {
            title: S,
            subtitle: E,
            actions: [],
            transitionState: n,
            onClose: a,
            children: (0, i.jsxs)("div", {
                className: A.kL,
                children: [u.length > 0 && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(s.EYj, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: _.intl.string(g.default["9Y2p6p"])
                    }), (0, i.jsx)("div", {
                        className: A.kR,
                        children: u.map(e => (0, i.jsx)(c.wx, {
                            recurrence: {
                                ...p(e, f[e.id] ?? null),
                                asset: c.oL[e.partnerId ?? ""]?.asset ?? ""
                            },
                            showPartnerImage: !0,
                            displayCTAInDedicatedFooter: !0
                        }, e.id))
                    })]
                }), x.length > 0 && (0, i.jsxs)("div", {
                    className: A.E7,
                    children: [(0, i.jsx)(s.EYj, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: _.intl.string(g.default.Wm58LR)
                    }), (0, i.jsx)("div", {
                        className: A.kR,
                        children: x.map(e => (0, i.jsx)(m.$, {
                            promotion: p(e, f[e.id] ?? null)
                        }, e.id))
                    })]
                })]
            })
        })
    },
    f = e => {
        let {
            partnerId: t
        } = e;
        r.Ay.fetchActivePromotions(), (0, a.mMO)(async () => {
            let {
                ThirdPartyPromotionsModal: e
            } = await Promise.resolve().then(n.bind(n, 152815));
            return n => (0, i.jsx)(e, {
                ...n,
                partnerId: t
            })
        })
    }