/** chunk id: 50777 params = (module,exports,require) **/
n.d(t, {
    A: () => L
});
var i = n(627968),
    l = n(64700),
    s = n(158954),
    r = n(311907),
    a = n(990078),
    o = n(397927),
    d = n(793574),
    c = n(688810),
    u = n(587895),
    _ = n(875444),
    m = n(429913),
    h = n(594832),
    p = n(287809),
    g = n(67480),
    A = n(328968),
    x = n(871123),
    f = n(733391),
    C = n(832163),
    E = n(207654),
    I = n(317560),
    v = n(533406),
    b = n(971146),
    T = n(300182),
    N = n(183802),
    S = n(652215),
    y = n(985018),
    j = n(23542);

function L(e) {
    let {
        guildId: t,
        skuId: n,
        channel: L
    } = e, R = (0, r.bG)([A.A], () => A.A.isFetchingForSKU(n)), P = (0, r.bG)([g.A], () => g.A.get(n)), D = P?.applicationId, M = (0, r.bG)([u.A], () => null != D && u.A.isFetchingApplication(D)), w = (0, r.bG)([u.A], () => null != D && u.A.didFetchingApplicationFail(D)), O = (0, m.h)(D), k = (0, E.b)({
        location: "product_details_embed"
    }), {
        analyticsLocations: U
    } = (0, c.Ay)(d.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, h.pE)();
    let B = (0, r.bG)([p.default], () => L.isDM() && null != L.recipients && 0 !== L.recipients.length ? p.default.getUser(L.recipients[0]) : null),
        G = (0, r.bG)([C.A], () => null != n ? C.A.getNormalizedSKUEligibility(n) : void 0, [n]),
        {
            primaryIconAsset: F,
            primaryIconLabel: H
        } = l.useMemo(() => (0, x.Cv)(P, D), [P, D]);
    l.useEffect(() => {
        null == t || null == n || A.A.isFetchingForSKU(n) || (0, f.qf)(t, n)
    }, [t, n]);
    let V = l.useCallback(e => {
            e.stopPropagation(), P?.applicationId != null && (0, I.R)({
                skuId: n,
                applicationId: P.applicationId,
                isStorefront: !1,
                analyticsLocations: U
            })
        }, [n, P, U]),
        q = l.useCallback(() => {
            null != P && G && (0, v.a)(P, {
                isGift: !1
            }, {
                analyticsLocations: [d.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON],
                guildId: t
            })
        }, [P, t, G]),
        W = l.useCallback(() => {
            null != P && (0, v.a)(P, {
                isGift: !0,
                giftRecipient: B ?? void 0
            }, {
                analyticsLocations: [d.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON]
            })
        }, [P, B]),
        Y = null != D && null == O && !w;
    return (R || M || Y) && (null == P || null == O) ? (0, i.jsx)("div", {
        className: j.kL,
        children: (0, i.jsx)(o.y$y, {
            className: j.u1
        })
    }) : null != P && null != O && (0, _.A)(O) && O.guildId === t ? (0, i.jsxs)("div", {
        className: j.kL,
        children: [(0, i.jsx)(N.A, {
            className: j.Nr,
            skuId: n,
            variant: N.s.EMBEDDED,
            onClick: V,
            analyticsLocations: U
        }), (0, i.jsxs)("div", {
            className: j.zH,
            children: [(0, i.jsxs)("div", {
                className: j.lI,
                children: [k && null != O && (0, i.jsx)(b.V, {
                    application: O
                }), (0, i.jsxs)("div", {
                    className: j.PB,
                    children: [null != F && (0, i.jsx)("img", {
                        src: F.toString(),
                        alt: H,
                        className: j.ye
                    }), (0, i.jsx)(o.Text, {
                        variant: "text-md/medium",
                        lineClamp: 1,
                        children: P.name
                    })]
                }), (0, i.jsxs)("div", {
                    className: j.PB,
                    children: [(0, i.jsx)(o.Text, {
                        variant: "text-md/bold",
                        lineClamp: 1,
                        children: (0, x.p3)(P, S.lid.DEFAULT)
                    }), null != P.orbsReward && P.orbsReward > 0 && (0, i.jsx)("div", {
                        className: j.pt,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-sm/semibold",
                            color: "currentColor",
                            children: y.intl.format(y.t.GiVd2Q, {
                                orbCount: P.orbsReward,
                                orbIconHook: () => (0, i.jsx)(s.Cp8, {
                                    size: "xs",
                                    color: "currentColor"
                                }, "orbs-icon")
                            })
                        })
                    })]
                })]
            }), (0, i.jsxs)(s.e2v, {
                wrap: !1,
                fullWidth: !0,
                children: [(0, i.jsx)(a.m, {
                    text: G ? void 0 : y.intl.string(y.t.IqlPbQ),
                    children: (0, i.jsx)(s.$nd, {
                        variant: G ? "secondary" : "primary",
                        onClick: V,
                        text: y.intl.string(y.t.KLBTgF),
                        fullWidth: !0
                    })
                }), G && (0, i.jsx)(s.$nd, {
                    variant: "primary",
                    onClick: q,
                    text: y.intl.format(y.t.Xp5WTn, {
                        price: (0, x.p3)(P, S.lid.DEFAULT)
                    }),
                    fullWidth: !0
                }), (0, i.jsx)(T.A, {
                    onGift: W
                })]
            })]
        })]
    }) : null
}