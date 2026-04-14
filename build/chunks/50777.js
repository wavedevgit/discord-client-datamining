/** chunk id: 50777 params = (module,exports,require) **/
n.d(t, {
    A: () => w
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(158954),
    o = n(311907),
    d = n(990078),
    c = n(397927),
    u = n(793574),
    _ = n(688810),
    m = n(587895),
    h = n(875444),
    p = n(429913),
    g = n(993046),
    A = n(801228),
    x = n(594832),
    f = n(287809),
    C = n(328968),
    E = n(871123),
    I = n(733391),
    v = n(832163),
    b = n(207654),
    T = n(317560),
    y = n(533406),
    S = n(971146),
    N = n(300182),
    j = n(183802),
    L = n(652215),
    R = n(985018),
    P = n(23542);

function M(e) {
    let {
        sku: t,
        normalPrice: n,
        discountedPrice: l,
        discountPercent: o
    } = e, d = a.useMemo(() => null != t.orbsReward && t.orbsReward > 0 ? (0, i.jsx)("div", {
        className: P.pt,
        children: (0, i.jsx)(c.Text, {
            variant: "text-sm/semibold",
            color: "currentColor",
            children: R.intl.format(R.t.GiVd2Q, {
                orbCount: t.orbsReward,
                orbIconHook: () => (0, i.jsx)(s.Cp8, {
                    size: "xs",
                    color: "currentColor"
                }, "orbs-icon")
            })
        })
    }) : null, [t.orbsReward]), u = null != o && null != l;
    return (0, i.jsx)("div", {
        className: r()(P.PB, {
            [P.un]: u
        }),
        children: u ? (0, i.jsxs)(i.Fragment, {
            children: [null != n && (0, i.jsx)(c.Text, {
                className: P.of,
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: n
            }), (0, i.jsx)(c.Text, {
                variant: "text-md/bold",
                lineClamp: 1,
                children: l
            }), (0, i.jsxs)(c.Text, {
                variant: "text-md/bold",
                color: "text-feedback-positive",
                lineClamp: 1,
                children: ["(", o, ")"]
            }), d]
        }) : (0, i.jsxs)(i.Fragment, {
            children: [null != n && (0, i.jsx)(c.Text, {
                variant: "text-md/bold",
                lineClamp: 1,
                children: n
            }), d]
        })
    })
}

function w(e) {
    let {
        guildId: t,
        skuId: n,
        channel: l
    } = e, r = (0, o.bG)([C.A], () => C.A.isFetchingForSKU(n)), w = (0, A.A)({
        skuId: n,
        location: "SocialLayerStorefrontProductDetailsEmbed"
    }), D = w?.applicationId, k = (0, o.bG)([m.A], () => null != D && m.A.isFetchingApplication(D)), O = (0, o.bG)([m.A], () => null != D && m.A.didFetchingApplicationFail(D)), U = (0, p.h)(D), B = (0, b.b)({
        location: "product_details_embed"
    }), {
        analyticsLocations: G
    } = (0, _.Ay)(u.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, x.pE)();
    let F = (0, o.bG)([f.default], () => l.isDM() && null != l.recipients && 0 !== l.recipients.length ? f.default.getUser(l.recipients[0]) : null),
        H = (0, o.bG)([v.A], () => null != n ? v.A.getNormalizedSKUEligibility(n) : void 0, [n]),
        {
            primaryIconAsset: V,
            primaryIconLabel: q
        } = a.useMemo(() => (0, E.Cv)(w, D), [w, D]),
        {
            normalPrice: W,
            discountedPrice: z,
            discountPercent: Y
        } = (0, g.ou)({
            sku: w,
            priceSetAssignmentPurchaseType: L.lid.DEFAULT
        });
    a.useEffect(() => {
        null == t || null == n || C.A.isFetchingForSKU(n) || (0, I.qf)(t, n)
    }, [t, n]);
    let Q = a.useCallback(e => {
            e.stopPropagation(), w?.applicationId != null && (0, T.R)({
                skuId: n,
                applicationId: w.applicationId,
                isStorefront: !1,
                analyticsLocations: G
            })
        }, [n, w, G]),
        K = a.useCallback(() => {
            null != w && H && (0, y.a)(w, {
                isGift: !1
            }, {
                analyticsLocations: [u.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON],
                guildId: t
            })
        }, [w, t, H]),
        X = a.useCallback(() => {
            null != w && (0, y.a)(w, {
                isGift: !0,
                giftRecipient: F ?? void 0
            }, {
                analyticsLocations: [u.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON]
            })
        }, [w, F]),
        J = null != D && null == U && !O;
    if ((r || k || J) && (null == w || null == U)) return (0, i.jsx)("div", {
        className: P.kL,
        children: (0, i.jsx)(c.y$y, {
            className: P.u1
        })
    });
    if (null == w || null == U || !(0, h.A)(U) || U.guildId !== t) return null;
    let Z = z ?? W;
    return (0, i.jsxs)("div", {
        className: P.kL,
        children: [(0, i.jsx)(j.A, {
            className: P.Nr,
            skuId: n,
            variant: j.s.EMBEDDED,
            onClick: Q,
            analyticsLocations: G
        }), (0, i.jsxs)("div", {
            className: P.zH,
            children: [(0, i.jsxs)("div", {
                className: P.lI,
                children: [B && (0, i.jsx)(S.V, {}), (0, i.jsxs)("div", {
                    className: P.PB,
                    children: [null != V && (0, i.jsx)("img", {
                        src: V.toString(),
                        alt: q,
                        className: P.ye
                    }), (0, i.jsx)(c.Text, {
                        variant: "text-md/medium",
                        lineClamp: 1,
                        children: w.name
                    })]
                }), (0, i.jsx)(M, {
                    sku: w,
                    normalPrice: W,
                    discountedPrice: z,
                    discountPercent: Y
                })]
            }), (0, i.jsxs)(s.e2v, {
                wrap: !1,
                fullWidth: !0,
                children: [(0, i.jsx)(d.m, {
                    text: H ? void 0 : R.intl.string(R.t.IqlPbQ),
                    children: (0, i.jsx)(s.$nd, {
                        variant: H ? "secondary" : "primary",
                        onClick: Q,
                        text: R.intl.string(R.t.KLBTgF),
                        fullWidth: !0
                    })
                }), H && (0, i.jsx)(s.$nd, {
                    variant: "primary",
                    onClick: K,
                    text: null != Z ? R.intl.format(R.t.Xp5WTn, {
                        price: Z
                    }) : R.intl.string(R.t.boqtTA),
                    fullWidth: !0
                }), (0, i.jsx)(N.A, {
                    onGift: X
                })]
            })]
        })]
    })
}