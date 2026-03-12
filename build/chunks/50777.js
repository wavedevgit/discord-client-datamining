/** chunk id: 50777 params = (module,exports,require) **/
n.d(t, {
    A: () => j
});
var i = n(627968),
    r = n(64700),
    a = n(158954),
    l = n(311907),
    s = n(990078),
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
    x = n(580630),
    f = n(871123),
    C = n(733391),
    E = n(832163),
    I = n(317560),
    b = n(533406),
    T = n(300182),
    v = n(183802),
    S = n(818348),
    y = n(985018),
    N = n(919095);

function j(e) {
    let {
        guildId: t,
        skuId: n,
        channel: j
    } = e, L = (0, l.bG)([A.A], () => A.A.isFetchingForSKU(n)), R = (0, l.bG)([g.A], () => g.A.get(n)), P = R?.applicationId, M = (0, l.bG)([u.A], () => null != P && u.A.isFetchingApplication(P)), O = (0, l.bG)([u.A], () => null != P && u.A.didFetchingApplicationFail(P)), D = (0, m.h)(P), {
        analyticsLocations: w
    } = (0, c.Ay)(d.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, h.pE)();
    let k = (0, l.bG)([p.default], () => j.isDM() && null != j.recipients && 0 !== j.recipients.length ? p.default.getUser(j.recipients[0]) : null),
        U = (0, l.bG)([E.A], () => null != n ? E.A.getNormalizedSKUEligibility(n) : void 0, [n]),
        {
            primaryIconAsset: G,
            primaryIconLabel: B
        } = r.useMemo(() => (0, f.Cv)(R, P), [R, P]);
    r.useEffect(() => {
        null == t || null == n || A.A.isFetchingForSKU(n) || (0, C.qf)(t, n)
    }, [t, n]);
    let F = r.useCallback(e => {
            e.stopPropagation(), R?.applicationId != null && null != t && (0, I.R)({
                skuId: n,
                applicationId: R.applicationId,
                guildId: t,
                isStorefront: !1,
                analyticsLocations: w
            })
        }, [n, R?.applicationId, t, w]),
        H = r.useCallback(() => {
            null != R && U && (0, b.a)(R, {
                isGift: !1
            }, {
                analyticsLocations: [d.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON],
                guildId: t
            })
        }, [R, t, U]),
        V = r.useCallback(() => {
            null != R && (0, b.a)(R, {
                isGift: !0,
                giftRecipient: k ?? void 0
            }, {
                analyticsLocations: [d.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON]
            })
        }, [R, k]),
        W = null != P && null == D && !O;
    return (L || M || W) && (null == R || null == D) ? (0, i.jsx)("div", {
        className: N.kL,
        children: (0, i.jsx)(o.y$y, {
            className: N.u1
        })
    }) : null != R && null != D && (0, _.A)(D) && D.guildId === t ? (0, i.jsxs)("div", {
        className: N.kL,
        children: [(0, i.jsx)(v.A, {
            className: N.Nr,
            applicationId: R.applicationId,
            skuId: n,
            guildId: t,
            variant: v.s.EMBEDDED,
            onClick: F,
            analyticsLocations: w
        }), (0, i.jsxs)("div", {
            className: N.zH,
            children: [(0, i.jsxs)("div", {
                className: N.lI,
                children: [(0, i.jsxs)("div", {
                    className: N.PB,
                    children: [null != G && (0, i.jsx)("img", {
                        src: G.toString(),
                        alt: B,
                        className: N.ye
                    }), (0, i.jsx)(o.Text, {
                        variant: "text-md/medium",
                        lineClamp: 1,
                        children: R.name
                    })]
                }), (0, i.jsxs)("div", {
                    className: N.PB,
                    children: [(0, i.jsx)(o.Text, {
                        variant: "text-md/bold",
                        lineClamp: 1,
                        children: (0, x.$g)(R.price?.amount ?? 0, R.price?.currency ?? S.Yr.USD)
                    }), null != R.orbsReward && R.orbsReward > 0 && (0, i.jsx)("div", {
                        className: N.pt,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-sm/semibold",
                            color: "currentColor",
                            children: y.intl.format(y.t.GiVd2Q, {
                                orbCount: R.orbsReward,
                                orbIconHook: () => (0, i.jsx)(a.Cp8, {
                                    size: "xs",
                                    color: "currentColor"
                                }, "orbs-icon")
                            })
                        })
                    })]
                })]
            }), (0, i.jsxs)(a.e2v, {
                wrap: !1,
                fullWidth: !0,
                children: [(0, i.jsx)(s.m, {
                    text: U ? void 0 : y.intl.string(y.t.IqlPbQ),
                    children: (0, i.jsx)(a.$nd, {
                        variant: U ? "secondary" : "primary",
                        onClick: F,
                        text: y.intl.string(y.t.KLBTgF),
                        fullWidth: !0
                    })
                }), U && (0, i.jsx)(a.$nd, {
                    variant: "primary",
                    onClick: H,
                    text: y.intl.format(y.t.Xp5WTn, {
                        price: (0, x.$g)(R.price?.amount ?? 0, R.price?.currency ?? S.Yr.USD)
                    }),
                    fullWidth: !0
                }), (0, i.jsx)(T.A, {
                    onGift: V
                })]
            })]
        })]
    }) : null
}