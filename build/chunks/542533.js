/** chunk id: 542533, original params: e,l,t (module,exports,require) **/
t.d(l, {
    a: () => A
});
var n = t(627968),
    s = t(64700),
    i = t(158954),
    a = t(765671),
    r = t(688810),
    o = t(954571),
    d = t(439303),
    c = t(961977),
    u = t(183802),
    _ = t(748959),
    g = t(793885),
    p = t(896447),
    I = t(65356),
    x = t(652215),
    f = t(131841);

function A(e) {
    let {
        applicationId: l,
        guildId: t,
        page: A
    } = e, {
        ref: h,
        width: m
    } = (0, a.Ay)(), E = (0, d.jM)(), {
        analyticsLocations: j
    } = (0, r.Ay)(), S = s.useRef(null), {
        handleScroll: k
    } = (0, I.b)(S, E, j), [b, R] = s.useMemo(() => {
        if (A?.skuIds == null || 0 === A.skuIds.length) return [
            [],
            []
        ];
        let e = Math.round(m ?? 0);
        return A?.leaderboard == null || null == e || e < 564 ? [
            [], A.skuIds
        ] : e < 1104 ? A.skuIds.length >= 2 ? [
            [], A.skuIds
        ] : [A.skuIds.slice(0, 1), A.skuIds.slice(1)] : [A.skuIds.slice(0, 2), A.skuIds.slice(2)]
    }, [A, m]), N = 1 === b.length && null != m && m >= 834;
    return (s.useEffect(() => {
        let {
            sessionId: e,
            guildId: l,
            pageIndex: t,
            pageTitle: n,
            isUserGuildMember: s,
            pageHasLeaderboard: i
        } = E;
        o.default.track(x.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            page_index: t,
            page_title: n,
            is_user_guild_member: s,
            page_has_leaderboard: i,
            location_stack: j
        })
    }, [E, j]), null == A) ? null : (0, n.jsxs)(i.ChK, {
        ref: S,
        onScroll: k,
        children: [(0, n.jsx)(c.A, {
            location: "social_layer_storefront_page"
        }), (0, n.jsxs)("section", {
            ref: h,
            className: f.k,
            children: [(0, n.jsx)(g.m, {
                applicationId: l,
                backgroundImageAssetId: A.leaderboard?.backgroundImageAssetId
            }), (0, n.jsx)(_.I, {
                analyticsSectionId: "leaderboard",
                leaderboard: A.leaderboard,
                skuId: N ? b[0] : void 0,
                applicationId: l,
                guildId: t,
                analyticsLocations: j
            }), (0, n.jsx)(p.A, {
                analyticsSectionId: "featured-top-section",
                applicationId: l,
                guildId: t,
                skuIds: N ? void 0 : b,
                variant: u.s.MEDIUM
            }), (0, n.jsx)(p.A, {
                analyticsSectionId: "non-featured-top-section",
                applicationId: l,
                guildId: t,
                skuIds: R
            }), A.sections?.map((e, s) => (0, n.jsx)(p.A, {
                analyticsSectionId: `index:${s}`,
                guildId: t,
                applicationId: l,
                sectionTitle: e.title ?? void 0,
                skuIds: e.skuIds
            }, `${e.title}-${s}`))]
        })]
    })
}