/** chunk id: 696028 params = (module,exports,require) **/
n.d(e, {
    Z: () => i
});
var r = n(64700),
    a = n(954571),
    s = n(652215);

function i(t, e, n, i) {
    let l = r.useRef(!1),
        u = r.useRef(e),
        c = r.useRef({
            positionInSection: n,
            analyticsLocations: i
        });
    return r.useEffect(() => {
        u.current = e
    }, [e]), {
        handleCardHover: r.useCallback(() => {
            if (!l.current) {
                let {
                    sessionId: e,
                    guildId: n,
                    pageIndex: r,
                    pageTitle: i,
                    pageSection: o,
                    pageSectionTitle: d,
                    isUserGuildMember: A,
                    pageHasLeaderboard: _
                } = u.current, {
                    positionInSection: g,
                    analyticsLocations: T
                } = c.current;
                a.default.track(s.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                    slayer_storefront_session_id: e,
                    sku_id: t,
                    guild_id: n,
                    page_index: r,
                    page_title: i,
                    page_section: o,
                    page_section_title: d,
                    position_in_section: g,
                    is_user_guild_member: A,
                    page_has_leaderboard: _,
                    location_stack: T
                }), l.current = !0
            }
        }, [t]),
        handleCardUnhover: r.useCallback(() => {
            l.current = !1
        }, [])
    }
}