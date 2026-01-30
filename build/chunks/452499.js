/** chunk id: 452499, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
}), n(896048);
var r = n(64700),
    i = n(486020),
    l = n(791275),
    s = n(652215);

function a(e, t, n) {
    var a, o;
    let {
        isLoading: c,
        error: d,
        highlightedCreatorDetails: u
    } = (0, l.A)(e), g = null == u ? void 0 : u.store_page, m = r.useMemo(() => {
        var e, t, n;
        let r, i = (n = null == g || null == (e = g.role_subscription) ? void 0 : e.group_listings, r = new Set, null == n || n.forEach(e => {
                var t;
                null == (t = e.subscription_listings) || t.forEach(e => {
                    r.add(e.role_id)
                })
            }), r),
            l = null == g || null == (t = g.role_subscription) ? void 0 : t.benefit_emojis;
        return null == l ? void 0 : l.filter(e => e.roles.some(e => i.has(e)))
    }, [null == g ? void 0 : g.role_subscription]), p = null == g ? void 0 : g.guild.icon_hash, f = i.Ay.getGuildIconURL({
        id: e,
        icon: p,
        size: n
    }), h = r.useMemo(() => null != m && m.length > t ? m.slice(0, t) : m, [m, t]), b = null != m && m.length > t ? m.length - t : null, x = null == u ? void 0 : u.slug, j = null != x ? s.X7G.ROLE_SUBSCRIPTION_STORE_PAGE(x) : void 0, _ = null == g || null == (a = g.guild) ? void 0 : a.name, O = null == g || null == (o = g.role_subscription) ? void 0 : o.subscriber_count, v = !c && null != _ && null != p && null != f;
    return v ? {
        hasAllImperativeDetails: v,
        isLoading: c,
        details: {
            guildName: _,
            guildIcon: p,
            guildAvatarUrl: f,
            storePageUrl: j,
            subscriberCount: O,
            emojisToShow: h,
            notShownEmojiCount: b
        }
    } : {
        hasAllImperativeDetails: v,
        isLoading: c,
        error: d
    }
}