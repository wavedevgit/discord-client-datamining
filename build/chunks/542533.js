/** Chunk was on 14078 **/
/** chunk id: 542533, original params: e,l,t (module,exports,require) **/
t.d(l, {
    a: () => x
}), t(896048);
var n = t(627968),
    s = t(64700),
    a = t(158954),
    i = t(765671),
    d = t(688810),
    r = t(954571),
    o = t(439303),
    c = t(183802),
    u = t(748959),
    g = t(793885),
    _ = t(896447),
    p = t(65356),
    I = t(652215),
    f = t(131841);

function x(e) {
    var l, t;
    let {
        applicationId: x,
        guildId: h,
        page: A
    } = e, {
        ref: m,
        width: k
    } = (0, i.Ay)(), v = (0, o.jM)(), {
        analyticsLocations: j
    } = (0, d.Ay)(), b = s.useRef(null), {
        handleScroll: E
    } = (0, p.b)(b, v, j), [S, C] = s.useMemo(() => {
        if ((null == A ? void 0 : A.skuIds) == null || 0 === A.skuIds.length) return [
            [],
            []
        ];
        let e = Math.round(null != k ? k : 0);
        return (null == A ? void 0 : A.leaderboard) == null || null == e || e < 564 ? [
            [], A.skuIds
        ] : e < 1104 ? A.skuIds.length >= 2 ? [
            [], A.skuIds
        ] : [A.skuIds.slice(0, 1), A.skuIds.slice(1)] : [A.skuIds.slice(0, 2), A.skuIds.slice(2)]
    }, [A, k]), N = 1 === S.length && null != k && k >= 834;
    return (s.useEffect(() => {
        let {
            sessionId: e,
            guildId: l,
            pageIndex: t,
            pageTitle: n,
            isUserGuildMember: s,
            pageHasLeaderboard: a
        } = v;
        r.default.track(I.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            page_index: t,
            page_title: n,
            is_user_guild_member: s,
            page_has_leaderboard: a,
            location_stack: j
        })
    }, [v, j]), null == A) ? null : (0, n.jsx)(a.ChK, {
        ref: b,
        onScroll: E,
        children: (0, n.jsxs)("section", {
            ref: m,
            className: f.k,
            children: [(0, n.jsx)(g.m, {
                applicationId: x,
                backgroundImageAssetId: null == (l = A.leaderboard) ? void 0 : l.backgroundImageAssetId
            }), (0, n.jsx)(u.I, {
                analyticsSectionId: "leaderboard",
                leaderboard: A.leaderboard,
                skuId: N ? S[0] : void 0,
                applicationId: x,
                guildId: h,
                analyticsLocations: j
            }), (0, n.jsx)(_.A, {
                analyticsSectionId: "featured-top-section",
                applicationId: x,
                guildId: h,
                skuIds: N ? void 0 : S,
                variant: c.s.MEDIUM
            }), (0, n.jsx)(_.A, {
                analyticsSectionId: "non-featured-top-section",
                applicationId: x,
                guildId: h,
                skuIds: C
            }), null == (t = A.sections) ? void 0 : t.map((e, l) => {
                var t;
                return (0, n.jsx)(_.A, {
                    analyticsSectionId: "index:".concat(l),
                    guildId: h,
                    applicationId: x,
                    sectionTitle: null != (t = e.title) ? t : void 0,
                    skuIds: e.skuIds
                }, "".concat(e.title, "-").concat(l))
            })]
        })
    })
}