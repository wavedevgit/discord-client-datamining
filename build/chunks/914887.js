/** chunk id: 914887 params = (module,exports,require) **/
n.d(e, {
    a: () => a
});
var r = n(64700),
    s = n(954571),
    i = n(652215);

function a(t, e, n, a) {
    let l = r.useRef(null),
        u = r.useRef(e),
        c = r.useRef({
            positionInSection: n,
            analyticsLocations: a
        });
    r.useEffect(() => {
        u.current = e
    }, [e]);
    let o = r.useCallback(() => {
            let {
                sessionId: e,
                guildId: n,
                pageIndex: r,
                pageTitle: a,
                pageSection: l,
                pageSectionTitle: o,
                isUserGuildMember: d,
                pageHasLeaderboard: A
            } = u.current, {
                positionInSection: _,
                analyticsLocations: g
            } = c.current;
            s.default.track(i.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                slayer_storefront_session_id: e,
                sku_id: t,
                guild_id: n,
                page_index: r,
                page_title: a,
                page_section: l,
                page_section_title: o,
                position_in_section: _,
                is_user_guild_member: d,
                page_has_leaderboard: A,
                location_stack: g
            })
        }, [t]),
        d = r.useCallback(t => {
            t ? null === l.current && (l.current = window.setTimeout(() => {
                o(), l.current = null
            }, 1e3)) : null !== l.current && (clearTimeout(l.current), l.current = null)
        }, [o]);
    return r.useEffect(() => () => {
        null !== l.current && (clearTimeout(l.current), l.current = null)
    }, []), {
        handleCardVisibilityChange: d
    }
}