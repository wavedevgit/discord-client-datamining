/** Chunk was on 1113 **/
/** chunk id: 729081, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
}), n(896048), n(638769);
var r = n(627968),
    l = n(64700),
    i = n(735438),
    s = n(835245),
    a = n(158954),
    o = n(311907),
    c = n(587895),
    u = n(568598),
    d = n(313961),
    h = n(246356),
    p = n(290863),
    g = n(954571),
    f = n(403362),
    m = n(871123),
    b = n(79871),
    A = n(592356),
    y = n(398025),
    O = n(188275),
    _ = n(652215),
    x = n(806931),
    j = n(985018),
    v = n(877409);
let E = "vc-gifting-".concat((0, s.A)());

function C(e) {
    var t;
    let {
        isHovered: n,
        closePopout: s,
        onMouseEnter: C,
        onMouseLeave: S,
        channel: I
    } = e;
    l.useEffect(() => {
        n || s()
    }, [s, n]);
    let N = (0, o.bG)([c.A], () => c.A.getApplication(O.XR)),
        [T] = (0, o.bG)([d.A], () => null != I.id ? [d.A.getParticipants(I.id), d.A.getParticipantsVersion(I.id)] : [
            [], 0
        ], [I.id], u.hS),
        P = (0, o.yK)([p.A], () => {
            let e = new Set;
            for (let n of T)
                if ((0, x.Xw)(n) || (0, x.Ay)(n))
                    for (let r of p.A.getActivities(n.user.id)) {
                        var t;
                        if (r.application_id === (null == N ? void 0 : N.id) || (null == N || null == (t = N.linkedGames) ? void 0 : t.some(e => e.id === r.application_id)) === !0) {
                            e.add(n.user.id);
                            break
                        }
                    }
            return Array.from(e).sort()
        }, [T, N]),
        w = l.useMemo(() => {
            let e = T.map(e => (0, x.Xw)(e) || (0, x.Ay)(e) ? e.user.id : null).filter(f.Vq);
            return (0, i.uniq)([...P, ...e])
        }, [T, P]),
        {
            state: R,
            recommendations: D,
            skuIdToUserIdsReasons: L
        } = (0, A.A)({
            guildId: (0, m.zf)(),
            applicationId: O.XR,
            numWishlistItems: A.o,
            userIds: w,
            location: "Social Layer Gifting Mini Shelf",
            includeWishlists: !0
        }),
        M = l.useMemo(() => {
            let e = new Set(w);
            return D.map(t => {
                var n, l;
                let i = null != (n = null == (l = L[t.skuId]) ? void 0 : l.filter(t => t.reason === b.G.WISHLIST && e.has(t.userId)).map(e => e.userId).filter(f.Vq)) ? n : [];
                return (0, r.jsx)(y.A, {
                    variant: i.length > 0 ? y.$.WISHLIST : y.$.POPULAR,
                    wishlistItem: t,
                    userIdsForRecommendation: i,
                    userIdsForGifting: w,
                    guildId: I.guild_id,
                    channelId: I.id,
                    contextContainerClassName: v.RL
                }, t.skuId)
            })
        }, [I.guild_id, I.id, D, L, w]);
    return l.useEffect(() => {
        0 !== D.length && g.default.track(_.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
            guild_id: I.guild_id,
            channel_id: I.id,
            sku_ids: D.map(e => e.skuId)
        })
    }, [I.id, I.guild_id, D]), (0, r.jsx)(h.A, {
        children: (0, r.jsx)(a.lGe, {
            "aria-labelledby": E,
            modal: !1,
            children: (0, r.jsxs)("div", {
                className: v.kL,
                onMouseEnter: C,
                onMouseLeave: S,
                children: [(0, r.jsx)(a.DZT, {
                    className: v.DD,
                    variant: "text-lg/bold",
                    color: "text-strong",
                    children: j.intl.string(j.t.xLP3bi)
                }), (0, r.jsx)(a.EYj, {
                    className: v.VA,
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: j.intl.format(j.t["+SqhBF"], {
                        applicationName: null != (t = null == N ? void 0 : N.name) ? t : j.intl.string(j.t["/1hhto"])
                    })
                }), (0, r.jsx)("div", {
                    className: v.Xb,
                    children: "loading" === R || 0 === D.length ? (0, r.jsx)(a.y$y, {
                        className: v.Lq
                    }) : M
                })]
            })
        })
    })
}