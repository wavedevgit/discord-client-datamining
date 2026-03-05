/** chunk id: 914887, original params: e,t,n (module,exports,require) **/
n.d(t, {
    a: () => s
});
var a = n(64700),
    r = n(954571),
    l = n(652215);

function s(e, t, n, s) {
    let i = a.useRef(null),
        o = a.useRef(t),
        u = a.useRef({
            positionInSection: n,
            analyticsLocations: s
        });
    a.useEffect(() => {
        o.current = t
    }, [t]);
    let c = a.useCallback(() => {
            let {
                sessionId: t,
                guildId: n,
                pageIndex: a,
                pageTitle: s,
                pageSection: i,
                pageSectionTitle: c,
                isUserGuildMember: d,
                pageHasLeaderboard: _
            } = o.current, {
                positionInSection: m,
                analyticsLocations: f
            } = u.current;
            r.default.track(l.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                slayer_storefront_session_id: t,
                sku_id: e,
                guild_id: n,
                page_index: a,
                page_title: s,
                page_section: i,
                page_section_title: c,
                position_in_section: m,
                is_user_guild_member: d,
                page_has_leaderboard: _,
                location_stack: f
            })
        }, [e]),
        d = a.useCallback(e => {
            e ? null === i.current && (i.current = window.setTimeout(() => {
                c(), i.current = null
            }, 1e3)) : null !== i.current && (clearTimeout(i.current), i.current = null)
        }, [c]);
    return a.useEffect(() => () => {
        null !== i.current && (clearTimeout(i.current), i.current = null)
    }, []), {
        handleCardVisibilityChange: d
    }
}