/** chunk id: 729081 params = (module,exports,require) **/
n.d(t, {
    A: () => B
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n(835245),
    d = n(695095),
    c = n(158954),
    u = n(311907),
    h = n(52133),
    A = n(568598),
    _ = n(313961),
    m = n(246356),
    p = n(178213),
    g = n(332772),
    f = n(594832),
    x = n(631784),
    E = n(721932),
    I = n(310209),
    C = n(961350),
    N = n(290863),
    T = n(954571),
    S = n(403362),
    b = n(871123),
    y = n(832163),
    v = n(453774),
    j = n(533562),
    R = n(568751),
    O = n(620406),
    L = n(84511),
    M = n(652215),
    D = n(806931),
    U = n(985018),
    G = n(788551);
let P = `vc-gifting-${(0,o.A)()}`,
    k = Object.freeze([]);

function w(e, t) {
    let [n, i] = e, [l, s] = t;
    return (0, h.v)(n, l) && (0, h.v)(i, s)
}

function B(e) {
    let {
        isHovered: t,
        closePopout: n,
        onMouseEnter: s,
        onMouseLeave: o,
        channel: h
    } = e;
    l.useEffect(() => {
        t || n()
    }, [n, t]);
    let B = (0, p.GG)("social_layer_storefront_gifting_mini_shelf");
    (0, g.T)({
        location: "social_layer_storefront_gifting_mini_shelf"
    });
    let H = (0, u.bG)([y.A], () => y.A.getDetectableIdsToApplicationIds()),
        F = (0, j.W)(),
        [W] = (0, u.bG)([_.A], () => null != h.id ? [_.A.getParticipants(h.id), _.A.getParticipantsVersion(h.id)] : [
            [], 0
        ], [h.id], A.hS),
        [K, Y] = (0, u.bG)([N.A], () => {
            let e = new Set,
                t = new Set;
            for (let n of (null != F && t.add(F), W))
                if ((0, D.Xw)(n) || (0, D.Ay)(n)) {
                    for (let i of N.A.getActivities(n.user.id))
                        if (null != i.application_id && null != H[i.application_id]) {
                            e.add(n.user.id), t.add(H[i.application_id]);
                            break
                        }
                } return [Array.from(e).sort(), Array.from(t).sort()]
        }, [W, H, F], w),
        z = (0, u.bG)([C.default], () => C.default.getId()),
        q = l.useMemo(() => {
            let e = W.map(e => (0, D.Xw)(e) || (0, D.Ay)(e) ? e.user.id : null).filter(S.Vq);
            return (0, r.uniq)([...K, ...e])
        }, [W, K]),
        X = (0, v.v)(Y),
        {
            status: $,
            recommendations: J,
            skusToUserAndReason: Q
        } = (0, x.XQ)({
            applicationIds: Y,
            numItems: 6,
            userIds: q
        }),
        Z = "loading" === $ || 0 === J.length,
        ee = l.useMemo(() => J.map(e => E.A.fromSKU(e)).filter(S.Vq), [J]),
        et = (0, d.A)(Z ? k : ee, V),
        en = l.useMemo(() => {
            let e = new Set(q),
                {
                    hasWishlist: t,
                    hasPopular: n
                } = (0, b.wH)(J, Q, e),
                l = t && n;
            return et.map(t => {
                let n = Object.entries(Q[t.skuId] ?? {}).filter(t => {
                        let [n, i] = t;
                        return i === I.j.WISHLIST && e.has(n)
                    }).map(e => {
                        let [t] = e;
                        return t
                    }),
                    s = n.filter(e => e !== z),
                    a = q.filter(e => e !== z);
                return B ? (0, i.jsx)(R.A, {
                    sku: t.sku,
                    source: n.length > 0 ? f.uS.WISHLIST : f.uS.POPULAR,
                    application: X[t.sku.applicationId],
                    guildId: h.guild_id,
                    channelId: h.id,
                    showIcons: l,
                    userIdsForGifting: a,
                    userIdsForRecommendation: s
                }, t.skuId) : (0, i.jsx)(O.A, {
                    variant: n.length > 0 ? O.$.WISHLIST : O.$.POPULAR,
                    wishlistItem: t,
                    userIdsForRecommendation: n,
                    userIdsForGifting: q,
                    guildId: h.guild_id,
                    channelId: h.id,
                    contextContainerClassName: G.RL
                }, t.skuId)
            })
        }, [z, q, J, et, Q, B, X, h.guild_id, h.id]);
    return l.useEffect(() => {
        0 !== J.length && T.default.track(M.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
            guild_id: h.guild_id,
            channel_id: h.id,
            sku_ids: J.map(e => e.id)
        })
    }, [h.id, h.guild_id, J]), (0, i.jsx)(m.A, {
        children: (0, i.jsx)(c.lGe, {
            "aria-labelledby": P,
            modal: !1,
            children: (0, i.jsxs)("div", {
                className: G.kL,
                onMouseEnter: s,
                onMouseLeave: o,
                children: [(0, i.jsx)("div", {
                    className: G.wx,
                    children: (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(c.DZT, {
                            className: G.DD,
                            variant: "text-lg/bold",
                            color: "text-strong",
                            children: U.intl.string(U.t.xLP3bi)
                        }), (0, i.jsx)(c.EYj, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: U.intl.format(U.t["+SqhBF"], {
                                applicationName: Object.values(X).length > 0 ? Object.values(X)[0]?.name ?? U.intl.string(U.t["/1hhto"]) : U.intl.string(U.t["/1hhto"])
                            })
                        })]
                    })
                }), (0, i.jsx)("div", {
                    className: a()(G.Xb, {
                        [G.Im]: B
                    }),
                    children: Z ? (0, i.jsx)(c.y$y, {
                        className: B ? G.Dv : G.Lq
                    }) : en
                }), (0, i.jsx)(L.A, {
                    location: "social_layer_gifting_mini_shelf",
                    className: G.Ij
                })]
            })
        })
    })
}

function V(e, t) {
    return e.skuId === t.skuId
}