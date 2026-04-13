/** chunk id: 152815 params = (module,exports,require) **/
n.d(t, {
    P: () => v,
    ThirdPartyPromotionsModal: () => R
});
var i = n(627968);
n(64700);
var r = n(158954),
    a = n(311907),
    s = n(397927),
    l = n(793574),
    c = n(954571),
    o = n(975571),
    d = n(597758),
    u = n(35587),
    _ = n(412260),
    m = n(116011),
    p = n(881373),
    g = n(125877),
    A = n(652215),
    x = n(113273),
    h = n(985018),
    f = n(276478);
let b = {
        Logitech30P: {
            title: x.default.jkdhZq,
            titleParams: {
                discountPercent: p.aW
            },
            body: x.default.Yl5ww1
        },
        "Logitech G": {
            title: x.default.jkdhZq,
            titleParams: {
                discountPercent: p.aW
            },
            body: x.default.Yl5ww1
        },
        Logitech5PNI: {
            title: x.default.zeBjoX,
            titleParams: {
                discountPercent: p.y$
            },
            body: x.default.fC4abC,
            bodyParams: {
                months: 6
            }
        },
        "Logitech 5%": {
            title: x.default.zeBjoX,
            titleParams: {
                discountPercent: p.y$
            },
            body: x.default.fC4abC,
            bodyParams: {
                months: 6
            }
        },
        Logitech5PGS: {
            title: x.default.ogcfac,
            titleParams: {
                discountPercent: p.K2
            }
        }
    },
    N = {
        logitech: {
            modalTitle: x.default["2I7nK+"],
            modalSubtitle: {
                message: x.default.W8jOD0,
                values: {
                    termsUrl: o.A.getArticleURL(A.MVz.LOGITECH_PROMOTION)
                }
            },
            landingUrl: "https://www.logitech.com/"
        }
    },
    C = (e, t) => {
        let n = b[e.outboundTitle];
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
    R = e => {
        let {
            partnerId: t,
            transitionState: n,
            onClose: s
        } = e, c = N[t], [o, d] = (0, a.yK)([_.A], () => {
            let {
                recurring: e,
                oneTime: n
            } = _.A.getPromotionsByPartner(t);
            return [e, n]
        }), {
            promotionsLoaded: p,
            claimedOutboundPromotionCodeMap: A
        } = (0, u.y7)();
        if (!p) return (0, i.jsx)(r.y$y, {});
        let b = c?.modalSubtitle != null ? h.intl.format(c.modalSubtitle.message, c.modalSubtitle.values) : void 0,
            R = null == c ? t : h.intl.string(c.modalTitle);
        return (0, i.jsx)(r.Modal, {
            title: R,
            subtitle: b,
            actions: [],
            transitionState: n,
            onClose: s,
            children: (0, i.jsxs)("div", {
                className: f.kL,
                children: [o.length > 0 && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(r.EYj, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: h.intl.string(x.default["9Y2p6p"])
                    }), (0, i.jsx)("div", {
                        className: f.kR,
                        children: o.map(e => (0, i.jsx)(m.wx, {
                            recurrence: {
                                ...C(e, A[e.id] ?? null),
                                asset: m.oL[e.partnerId ?? ""]?.asset ?? ""
                            },
                            showPartnerImage: !0,
                            displayCTAInDedicatedFooter: !0,
                            analyticsLocations: [l.A.THIRD_PARTY_PROMOTIONS_MODAL]
                        }, e.id))
                    })]
                }), d.length > 0 && (0, i.jsxs)("div", {
                    className: f.E7,
                    children: [(0, i.jsx)(r.EYj, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: h.intl.string(x.default.Wm58LR)
                    }), (0, i.jsx)("div", {
                        className: f.kR,
                        children: d.map(e => (0, i.jsx)(g.$, {
                            promotion: C(e, A[e.id] ?? null),
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
        c.default.track(A.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, {
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