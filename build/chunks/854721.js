/** Chunk was on 14078 **/
/** chunk id: 854721, original params: e,l,t (module,exports,require) **/
t.r(l), t.d(l, {
    default: () => R
}), t(747238);
var n = t(627968),
    s = t(64700),
    a = t(503698),
    i = t.n(a),
    d = t(835245),
    r = t(311907),
    o = t(397927),
    c = t(444927),
    u = t(793574),
    g = t(688810),
    _ = t(976860),
    p = t(594832),
    I = t(961350),
    f = t(696451),
    x = t(71393),
    h = t(67480),
    A = t(449054),
    m = t(733391),
    k = t(439303),
    v = t(35826),
    j = t(429635),
    b = t(317560),
    E = t(964395),
    S = t(542533),
    C = t(652215),
    N = t(332217);

function L(e) {
    let {
        storefront: l,
        guildId: t,
        selectedPageIndex: a,
        selectedSku: i
    } = e, d = (0, k.jM)(), r = s.useRef(d);
    s.useEffect(() => {
        r.current = d
    }, [d]);
    let o = null == i ? void 0 : i.id;
    return s.useEffect(() => {
        if (null != o) return (0, b.R)({
            skuId: o,
            applicationId: l.applicationId,
            guildId: t,
            isStorefront: !0,
            analyticsLocations: [u.A.SOCIAL_LAYER_STOREFRONT],
            analyticsContext: r.current,
            onClose: () => {
                (0, _.JK)().location.pathname.indexOf(C.BVt.CHANNELS_GAME_SHOP(t, a)) >= 0 && (0, v.A)({
                    guildId: t,
                    pageIndex: a
                })
            }
        }), () => {
            (0, b.j)()
        }
    }, [t, a, o, l.applicationId]), (0, n.jsxs)("div", {
        className: N.k,
        children: [(0, n.jsx)(E.A, {
            guildId: t,
            storefront: l,
            selectedPageIndex: a
        }), (0, n.jsx)(S.a, {
            applicationId: l.applicationId,
            guildId: t,
            page: l.pages[a]
        })]
    })
}

function R(e) {
    var l, t, a, _, v;
    let {
        match: b
    } = e, {
        guildId: E,
        gameShopPageIndex: S,
        gameShopSkuId: C
    } = b.params, {
        analyticsLocations: R
    } = (0, g.Ay)(u.A.SOCIAL_LAYER_STOREFRONT), T = (0, j.A)({
        guildId: E,
        location: "Social Layer Storefront"
    }), y = (0, r.bG)([I.default], () => I.default.getSessionId(), []), M = (0, r.bG)([h.A], () => h.A.get(C), [C]);
    (0, p.pE)();
    let O = (0, c.A)((0, d.A)()),
        w = (0, r.bG)([f.Ay, I.default], () => f.Ay.isMember(E, I.default.getId())),
        G = s.useMemo(() => {
            if (null == S) return 0;
            let e = parseInt(S, 10);
            return isNaN(e) || null != T && null != T.storefront && e >= T.storefront.pages.length ? 0 : e
        }, [S, T]),
        Y = null != (l = null == T || null == (a = T.storefront) || null == (t = a.pages[G]) ? void 0 : t.title) ? l : null,
        P = (null == T || null == (v = T.storefront) || null == (_ = v.pages[G]) ? void 0 : _.leaderboard) != null,
        H = s.useMemo(() => ({
            sessionId: O,
            guildId: E,
            pageIndex: G,
            pageTitle: Y,
            isUserGuildMember: w,
            pageHasLeaderboard: P
        }), [O, E, G, Y, w, P]);
    return (s.useEffect(() => {
        null != E && (0, m.SP)(E, G, null != C ? C : null)
    }, [E, G, C]), s.useEffect(() => {
        null == E || null == y || null == x.A.getGuild(E) && (0, A.Z2)(E, {}, {
            shouldNavigate: !1
        })
    }, [E, y]), null == E || (null == T ? void 0 : T.storefront) == null) ? (0, n.jsx)("div", {
        className: i()(N.u, N.k),
        children: (0, n.jsx)(o.y$y, {})
    }) : (0, n.jsx)(g.f5, {
        value: R,
        children: (0, n.jsx)(k.E9, {
            newValue: H,
            children: (0, n.jsx)(L, {
                storefront: T.storefront,
                guildId: E,
                selectedPageIndex: G,
                selectedSku: M
            })
        })
    })
}