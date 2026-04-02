/** chunk id: 696028 params = (module,exports,require) **/
n.d(e, {
    Z: () => a
});
var r = n(64700),
    s = n(954571),
    i = n(652215);

function a(t, e, n, a) {
    let l = r.useRef(!1),
        u = r.useRef(e),
        c = r.useRef({
            positionInSection: n,
            analyticsLocations: a
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
                    pageTitle: a,
                    pageSection: o,
                    pageSectionTitle: d,
                    isUserGuildMember: A,
                    pageHasLeaderboard: _
                } = u.current, {
                    positionInSection: g,
                    analyticsLocations: m
                } = c.current;
                s.default.track(i.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                    slayer_storefront_session_id: e,
                    sku_id: t,
                    guild_id: n,
                    page_index: r,
                    page_title: a,
                    page_section: o,
                    page_section_title: d,
                    position_in_section: g,
                    is_user_guild_member: A,
                    page_has_leaderboard: _,
                    location_stack: m
                }), l.current = !0
            }
        }, [t]),
        handleCardUnhover: r.useCallback(() => {
            l.current = !1
        }, [])
    }
}