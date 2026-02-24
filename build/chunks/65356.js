/** chunk id: 65356, original params: e,l,t (module,exports,require) **/
t.d(l, {
    b: () => o
});
var n = t(64700),
    s = t(59520),
    i = t(954571),
    a = t(652215);

function r(e, l, t, n) {
    let {
        scrollTop: s = 0,
        scrollOffset: a = 0,
        scrollHeight: r = 0,
        scrollWidth: o = 0
    } = n;
    if (r > 0) {
        let n = (s + a) / r;
        if (n > 0) {
            let {
                sessionId: s,
                guildId: a,
                pageIndex: d,
                pageTitle: c,
                isUserGuildMember: u,
                pageHasLeaderboard: _
            } = l;
            i.default.track(e, {
                slayer_storefront_session_id: s,
                guild_id: a,
                page_index: d,
                page_title: c,
                is_user_guild_member: u,
                page_has_leaderboard: _,
                scroll_visible_percent: n,
                page_height: Math.round(r),
                page_width: Math.round(o),
                location_stack: t
            })
        }
    }
}
let o = (e, l, t) => {
    let i = n.useRef(l);
    n.useEffect(() => {
        i.current = l
    }, [l]);
    let o = (0, s.I)(r, 5e3, [], {
        trailing: !0
    });
    return {
        handleScroll: n.useCallback(() => {
            if (null != e.current) {
                let l = e.current.getScrollerNode(),
                    n = i.current;
                null != l && o(a.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, t, {
                    scrollTop: l.scrollTop,
                    scrollOffset: l.offsetHeight,
                    scrollHeight: l.scrollHeight,
                    scrollWidth: l.scrollWidth
                })
            }
        }, [o, t, e])
    }
}