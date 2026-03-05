/** chunk id: 696028 params = (module,exports,require) **/
n.d(t, {
    Z: () => s
});
var a = n(64700),
    r = n(954571),
    l = n(652215);

function s(e, t, n, s) {
    let i = a.useRef(!1),
        o = a.useRef(t),
        u = a.useRef({
            positionInSection: n,
            analyticsLocations: s
        });
    return a.useEffect(() => {
        o.current = t
    }, [t]), {
        handleCardHover: a.useCallback(() => {
            if (!i.current) {
                let {
                    sessionId: t,
                    guildId: n,
                    pageIndex: a,
                    pageTitle: s,
                    pageSection: c,
                    pageSectionTitle: d,
                    isUserGuildMember: _,
                    pageHasLeaderboard: m
                } = o.current, {
                    positionInSection: f,
                    analyticsLocations: T
                } = u.current;
                r.default.track(l.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                    slayer_storefront_session_id: t,
                    sku_id: e,
                    guild_id: n,
                    page_index: a,
                    page_title: s,
                    page_section: c,
                    page_section_title: d,
                    position_in_section: f,
                    is_user_guild_member: _,
                    page_has_leaderboard: m,
                    location_stack: T
                }), i.current = !0
            }
        }, [e]),
        handleCardUnhover: a.useCallback(() => {
            i.current = !1
        }, [])
    }
}