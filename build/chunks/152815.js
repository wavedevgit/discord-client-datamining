/** chunk id: 152815 params = (module,exports,require) **/
n.d(t, {
    P: () => v,
    ThirdPartyPromotionsModal: () => N
});
var i = n(627968);
n(64700);
var r = n(158954),
    a = n(311907),
    s = n(397927),
    l = n(793574),
    o = n(954571),
    c = n(975571),
    d = n(597758),
    u = n(35587),
    _ = n(412260),
    m = n(116011),
    p = n(881373),
    A = n(125877),
    g = n(652215),
    f = n(962995),
    h = n(985018),
    b = n(75662);
let x = {
        Logitech30P: {
            title: f.default.jkdhZq,
            titleParams: {
                discountPercent: p.aW
            },
            body: f.default.Yl5ww1
        },
        "Logitech G": {
            title: f.default.jkdhZq,
            titleParams: {
                discountPercent: p.aW
            },
            body: f.default.Yl5ww1
        },
        Logitech5PNI: {
            title: f.default.zeBjoX,
            titleParams: {
                discountPercent: p.y$
            },
            body: f.default.fC4abC,
            bodyParams: {
                months: 6
            }
        },
        "Logitech 5%": {
            title: f.default.zeBjoX,
            titleParams: {
                discountPercent: p.y$
            },
            body: f.default.fC4abC,
            bodyParams: {
                months: 6
            }
        },
        Logitech5PGS: {
            title: f.default.ogcfac,
            titleParams: {
                discountPercent: p.K2
            }
        }
    },
    R = {
        logitech: {
            modalTitle: f.default["2I7nK+"],
            modalSubtitle: {
                message: f.default.W8jOD0,
                values: {
                    termsUrl: c.A.getArticleURL(g.MVz.LOGITECH_PROMOTION)
                }
            },
            landingUrl: "https://www.logitech.com/"
        }
    },
    C = (e, t) => {
        let n = x[e.outboundTitle];
        return {
            id: e.id,
            partnerId: e.partnerId ?? "",
            title: null != n ? h.intl.formatToPlainString(n.title, n.titleParams ?? {}) : "",
            body: null != n && null != n.body ? h.intl.formatToPlainString(n.body, n.bodyParams ?? {}) : "",
            startDate: e.startDate,
            endDate: e.endDate,
            redemptionURL: e.outboundRedemptionPageLink,
            code: t
        }
    },
    N = e => {
        let {
            partnerId: t,
            transitionState: n,
            onClose: s
        } = e, o = R[t], [c, d] = (0, a.yK)([_.A], () => {
            let {
                recurring: e,
                oneTime: n
            } = _.A.getPromotionsByPartner(t);
            return [e, n]
        }), {
            promotionsLoaded: p,
            claimedOutboundPromotionCodeMap: g
        } = (0, u.y7)();
        if (!p) return (0, i.jsx)(r.y$y, {});
        let x = o?.modalSubtitle != null ? h.intl.format(o.modalSubtitle.message, o.modalSubtitle.values) : void 0,
            N = null == o ? t : h.intl.string(o.modalTitle);
        return (0, i.jsx)(r.Modal, {
            title: N,
            subtitle: x,
            actions: [],
            transitionState: n,
            onClose: s,
            children: (0, i.jsxs)("div", {
                className: b.kL,
                children: [c.length > 0 && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(r.EYj, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: h.intl.string(f.default["9Y2p6p"])
                    }), (0, i.jsx)("div", {
                        className: b.kR,
                        children: c.map(e => (0, i.jsx)(m.wx, {
                            recurrence: {
                                ...C(e, g[e.id] ?? null),
                                asset: m.oL[e.partnerId ?? ""]?.asset ?? ""
                            },
                            showPartnerImage: !0,
                            displayCTAInDedicatedFooter: !0,
                            analyticsLocations: [l.A.THIRD_PARTY_PROMOTIONS_MODAL]
                        }, e.id))
                    })]
                }), d.length > 0 && (0, i.jsxs)("div", {
                    className: b.E7,
                    children: [(0, i.jsx)(r.EYj, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: h.intl.string(f.default.Wm58LR)
                    }), (0, i.jsx)("div", {
                        className: b.kR,
                        children: d.map(e => (0, i.jsx)(A.$, {
                            promotion: C(e, g[e.id] ?? null),
                            analyticsLocations: [l.A.THIRD_PARTY_PROMOTIONS_MODAL]
                        }, e.id))
                    })]
                })]
            })
        })
    },
    v = e => {
        let {
            partnerId: t
        } = e;
        o.default.track(g.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, {
            partner_id: t
        }), d.Ay.fetchActivePromotions(), (0, s.mMO)(async () => {
            let {
                ThirdPartyPromotionsModal: e
            } = await Promise.resolve().then(n.bind(n, 152815));
            return n => (0, i.jsx)(e, {
                ...n,
                partnerId: t
            })
        })
    }