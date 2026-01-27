/** Chunk was on 92917 **/
/** chunk id: 50777, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
});
var r = n(627968),
    i = n(64700),
    l = n(158954),
    a = n(311907),
    s = n(397927),
    o = n(793574),
    c = n(688810),
    u = n(594832),
    d = n(287809),
    p = n(67480),
    m = n(328968),
    f = n(580630),
    g = n(871123),
    h = n(733391),
    _ = n(317560),
    b = n(533406),
    A = n(300182),
    y = n(183802),
    v = n(818348),
    x = n(985018),
    O = n(928625);

function E(e) {
    var t, n, E, j, C, I, S, T;
    let {
        guildId: N,
        skuId: P,
        channel: w
    } = e, R = (0, a.bG)([m.A], () => m.A.isFetchingForSKU(P)), D = (0, a.bG)([p.A], () => p.A.get(P)), L = null == D ? void 0 : D.applicationId, {
        analyticsLocations: M
    } = (0, c.Ay)(o.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, u.pE)();
    let k = (0, a.bG)([d.default], () => w.isDM() && null != w.recipients && 0 !== w.recipients.length ? d.default.getUser(w.recipients[0]) : null),
        {
            primaryIconAsset: U,
            primaryIconLabel: G
        } = i.useMemo(() => (0, g.Cv)(D, L), [D, L]);
    i.useEffect(() => {
        null == N || null == P || m.A.isFetchingForSKU(P) || (0, h.qf)(N, P)
    }, [N, P]);
    let B = i.useCallback(e => {
            e.stopPropagation(), (null == D ? void 0 : D.applicationId) != null && null != N && (0, _.R)({
                skuId: P,
                applicationId: D.applicationId,
                guildId: N,
                isStorefront: !1,
                analyticsLocations: M
            })
        }, [P, null == D ? void 0 : D.applicationId, N, M]),
        F = i.useCallback(() => {
            null != D && (0, b.a)(D, {
                isGift: !1
            }, {
                analyticsLocations: [o.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON]
            })
        }, [D]),
        H = i.useCallback(() => {
            null != D && (0, b.a)(D, {
                isGift: !0,
                giftRecipient: null != k ? k : void 0
            }, {
                analyticsLocations: [o.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON]
            })
        }, [D, k]);
    return R && null == D ? (0, r.jsx)("div", {
        className: O.kL,
        children: (0, r.jsx)(s.y$y, {
            className: O.u1
        })
    }) : null == D ? null : (0, r.jsxs)("div", {
        className: O.kL,
        children: [(0, r.jsx)(y.A, {
            className: O.Nr,
            applicationId: D.applicationId,
            skuId: P,
            guildId: N,
            variant: y.s.EMBEDDED,
            onClick: B,
            analyticsLocations: M
        }), (0, r.jsxs)("div", {
            className: O.zH,
            children: [(0, r.jsxs)("div", {
                className: O.lI,
                children: [(0, r.jsx)(s.Text, {
                    variant: "text-md/medium",
                    lineClamp: 1,
                    children: D.name
                }), (0, r.jsxs)("div", {
                    className: O.PB,
                    children: [null != U && (0, r.jsx)("img", {
                        src: U.toString(),
                        alt: G,
                        className: O.ye
                    }), (0, r.jsx)(s.Text, {
                        variant: "text-md/bold",
                        lineClamp: 1,
                        children: (0, f.$g)(null != (t = null == (C = D.price) ? void 0 : C.amount) ? t : 0, null != (n = null == (I = D.price) ? void 0 : I.currency) ? n : v.Yr.USD)
                    })]
                })]
            }), (0, r.jsxs)(l.e2v, {
                wrap: !1,
                fullWidth: !0,
                children: [(0, r.jsx)(l.$nd, {
                    variant: "secondary",
                    onClick: B,
                    text: x.intl.string(x.t.KLBTgF),
                    fullWidth: !0
                }), (0, r.jsx)(l.$nd, {
                    variant: "primary",
                    onClick: F,
                    text: x.intl.format(x.t.Xp5WTn, {
                        price: (0, f.$g)(null != (E = null == (S = D.price) ? void 0 : S.amount) ? E : 0, null != (j = null == (T = D.price) ? void 0 : T.currency) ? j : v.Yr.USD)
                    }),
                    fullWidth: !0
                }), (0, r.jsx)(A.A, {
                    onGift: H
                })]
            })]
        })]
    })
}