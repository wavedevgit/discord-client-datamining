/** chunk id: 854721, original params: e,l,t (module,exports,require) **/
t.r(l), t.d(l, {
    default: () => L
});
var n = t(627968),
    s = t(64700),
    i = t(503698),
    a = t.n(i),
    r = t(835245),
    o = t(311907),
    d = t(397927),
    c = t(444927),
    u = t(793574),
    _ = t(688810),
    g = t(976860),
    p = t(594832),
    I = t(961350),
    x = t(696451),
    f = t(71393),
    A = t(67480),
    h = t(449054),
    m = t(733391),
    E = t(439303),
    j = t(35826),
    S = t(429635),
    k = t(317560),
    b = t(964395),
    R = t(542533),
    N = t(652215),
    v = t(151439);

function C(e) {
    let {
        storefront: l,
        guildId: t,
        selectedPageIndex: i,
        selectedSku: a
    } = e, r = (0, E.jM)(), o = s.useRef(r);
    s.useEffect(() => {
        o.current = r
    }, [r]);
    let d = a?.id;
    return s.useEffect(() => {
        if (null != d) return (0, k.R)({
            skuId: d,
            applicationId: l.applicationId,
            guildId: t,
            isStorefront: !0,
            analyticsLocations: [u.A.SOCIAL_LAYER_STOREFRONT],
            analyticsContext: o.current,
            onClose: () => {
                (0, g.JK)().location.pathname.indexOf(N.BVt.CHANNELS_GAME_SHOP(t, i)) >= 0 && (0, j.A)({
                    guildId: t,
                    pageIndex: i
                })
            }
        }), () => {
            (0, k.j)()
        }
    }, [t, i, d, l.applicationId]), (0, n.jsxs)("div", {
        className: v.k,
        children: [(0, n.jsx)(b.A, {
            guildId: t,
            storefront: l,
            selectedPageIndex: i
        }), (0, n.jsx)(R.a, {
            applicationId: l.applicationId,
            guildId: t,
            page: l.pages[i]
        })]
    })
}

function L(e) {
    let {
        match: l
    } = e, {
        guildId: t,
        gameShopPageIndex: i,
        gameShopSkuId: g
    } = l.params, {
        analyticsLocations: j
    } = (0, _.Ay)(u.A.SOCIAL_LAYER_STOREFRONT), k = (0, S.A)({
        guildId: t,
        location: "Social Layer Storefront"
    }), b = (0, o.bG)([I.default], () => I.default.getSessionId(), []), R = (0, o.bG)([A.A], () => A.A.get(g), [g]);
    (0, p.pE)();
    let N = (0, c.A)((0, r.A)()),
        L = (0, o.bG)([x.Ay, I.default], () => x.Ay.isMember(t, I.default.getId())),
        M = s.useMemo(() => {
            if (null == i) return 0;
            let e = parseInt(i, 10);
            return isNaN(e) || null != k && null != k.storefront && e >= k.storefront.pages.length ? 0 : e
        }, [i, k]),
        T = k?.storefront?.pages[M]?.title ?? null,
        y = k?.storefront?.pages[M]?.leaderboard != null,
        O = s.useMemo(() => ({
            sessionId: N,
            guildId: t,
            pageIndex: M,
            pageTitle: T,
            isUserGuildMember: L,
            pageHasLeaderboard: y
        }), [N, t, M, T, L, y]);
    return (s.useEffect(() => {
        null != t && (0, m.SP)(t, M, null != g ? g : null)
    }, [t, M, g]), s.useEffect(() => {
        null == t || null == b || null == f.A.getGuild(t) && (0, h.Z2)(t, {}, {
            shouldNavigate: !1
        })
    }, [t, b]), null == t || k?.storefront == null) ? (0, n.jsx)("div", {
        className: a()(v.u, v.k),
        children: (0, n.jsx)(d.y$y, {})
    }) : (0, n.jsx)(_.f5, {
        value: j,
        children: (0, n.jsx)(E.E9, {
            newValue: O,
            children: (0, n.jsx)(C, {
                storefront: k.storefront,
                guildId: t,
                selectedPageIndex: M,
                selectedSku: R
            })
        })
    })
}