/** chunk id: 696028, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Z: () => a
});
var i = n(64700),
    l = n(954571),
    r = n(652215);

function a(e, t, n, a) {
    let s = i.useRef(!1),
        o = i.useRef(t),
        d = i.useRef({
            positionInSection: n,
            analyticsLocations: a
        });
    return i.useEffect(() => {
        o.current = t
    }, [t]), {
        handleCardHover: i.useCallback(() => {
            if (!s.current) {
                let {
                    sessionId: t,
                    guildId: n,
                    pageIndex: i,
                    pageTitle: a,
                    pageSection: c,
                    pageSectionTitle: u,
                    isUserGuildMember: _,
                    pageHasLeaderboard: m
                } = o.current, {
                    positionInSection: h,
                    analyticsLocations: p
                } = d.current;
                l.default.track(r.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                    slayer_storefront_session_id: t,
                    sku_id: e,
                    guild_id: n,
                    page_index: i,
                    page_title: a,
                    page_section: c,
                    page_section_title: u,
                    position_in_section: h,
                    is_user_guild_member: _,
                    page_has_leaderboard: m,
                    location_stack: p
                }), s.current = !0
            }
        }, [e]),
        handleCardUnhover: i.useCallback(() => {
            s.current = !1
        }, [])
    }
}