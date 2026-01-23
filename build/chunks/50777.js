/** Chunk was on web.js **/
/** chunk id: 50777, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
});
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(397927),
    l = n(793574),
    c = n(688810),
    u = n(594832),
    d = n(287809),
    f = n(67480),
    p = n(328968),
    _ = n(580630),
    h = n(871123),
    m = n(733391),
    g = n(317560),
    E = n(533406),
    y = n(300182),
    b = n(183802),
    O = n(818348),
    v = n(985018),
    A = n(928625);

function I(e) {
    var t, n, I, S, T, C, N, w;
    let {
        guildId: R,
        skuId: P,
        channel: D
    } = e, x = (0, s.bG)([p.A], () => p.A.isFetchingForSKU(P)), L = (0, s.bG)([f.A], () => f.A.get(P)), j = null == L ? void 0 : L.applicationId, {
        analyticsLocations: M
    } = (0, c.Ay)(l.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
    (0, u.pE)();
    let k = (0, s.bG)([d.default], () => D.isDM() && null != D.recipients && 0 !== D.recipients.length ? d.default.getUser(D.recipients[0]) : null),
        {
            primaryIconAsset: U,
            primaryIconLabel: G
        } = i.useMemo(() => (0, h.Cv)(L, j), [L, j]);
    i.useEffect(() => {
        null == R || null == P || p.A.isFetchingForSKU(P) || (0, m.qf)(R, P)
    }, [R, P]);
    let V = i.useCallback(e => {
            e.stopPropagation(), (null == L ? void 0 : L.applicationId) != null && null != R && (0, g.R)({
                skuId: P,
                applicationId: L.applicationId,
                guildId: R,
                isStorefront: !1,
                analyticsLocations: M
            })
        }, [P, null == L ? void 0 : L.applicationId, R, M]),
        F = i.useCallback(() => {
            null != L && (0, E.a)(L, {
                isGift: !1
            }, {
                analyticsLocations: [l.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON]
            })
        }, [L]),
        B = i.useCallback(() => {
            null != L && (0, E.a)(L, {
                isGift: !0,
                giftRecipient: null != k ? k : void 0
            }, {
                analyticsLocations: [l.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON]
            })
        }, [L, k]);
    return x && null == L ? (0, r.jsx)("div", {
        className: A.kL,
        children: (0, r.jsx)(o.y$y, {
            className: A.u1
        })
    }) : null == L ? null : (0, r.jsxs)("div", {
        className: A.kL,
        children: [(0, r.jsx)(b.A, {
            className: A.Nr,
            applicationId: L.applicationId,
            skuId: P,
            guildId: R,
            variant: b.s.EMBEDDED,
            onClick: V,
            analyticsLocations: M
        }), (0, r.jsxs)("div", {
            className: A.zH,
            children: [(0, r.jsxs)("div", {
                className: A.lI,
                children: [(0, r.jsx)(o.Text, {
                    variant: "text-md/medium",
                    lineClamp: 1,
                    children: L.name
                }), (0, r.jsxs)("div", {
                    className: A.PB,
                    children: [null != U && (0, r.jsx)("img", {
                        src: U.toString(),
                        alt: G,
                        className: A.ye
                    }), (0, r.jsx)(o.Text, {
                        variant: "text-md/bold",
                        lineClamp: 1,
                        children: (0, _.$g)(null != (t = null == (T = L.price) ? void 0 : T.amount) ? t : 0, null != (n = null == (C = L.price) ? void 0 : C.currency) ? n : O.Yr.USD)
                    })]
                })]
            }), (0, r.jsxs)(a.e2v, {
                wrap: !1,
                fullWidth: !0,
                children: [(0, r.jsx)(a.$nd, {
                    variant: "secondary",
                    onClick: V,
                    text: v.intl.string(v.t.KLBTgF),
                    fullWidth: !0
                }), (0, r.jsx)(a.$nd, {
                    variant: "primary",
                    onClick: F,
                    text: v.intl.format(v.t.Xp5WTn, {
                        price: (0, _.$g)(null != (I = null == (N = L.price) ? void 0 : N.amount) ? I : 0, null != (S = null == (w = L.price) ? void 0 : w.currency) ? S : O.Yr.USD)
                    }),
                    fullWidth: !0
                }), (0, r.jsx)(y.A, {
                    onGift: B
                })]
            })]
        })]
    })
}