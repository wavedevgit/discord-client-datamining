/** chunk id: 240935 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(311907),
    s = n(73153),
    r = n(734057),
    l = n(309010),
    a = n(543465);
let d = {},
    o = {},
    h = {};

function u() {
    let e = l.A.getChannelId();
    if (null == e) return;
    let t = r.A.getChannel(e);
    if (null == t || null == t.guild_id) return;
    let n = t.guild_id;
    if (null == h[e] && (h[e] = 0), t.isThread() || a.Ay.isOptInEnabled(n) && !a.Ay.isChannelOrParentOptedIn(n, t.id)) {
        delete h[e], null != d[n] && d[n].delete(e);
        return
    }
    return (h[e]++, null == d[n] && (d[n] = new Set), a.Ay.isFavorite(n, e)) ? void d[n].delete(e) : (null == o[n] || !o[n].has(e)) && h[e] > 50 ? (d[n].add(e), !0) : void 0
}
class c extends i.Ay.PersistedStore {
    static displayName = "FavoritesSuggestionStore";
    static persistKey = "FavoritesSuggestionStore";
    initialize(e) {
        if (this.waitFor(r.A, l.A, a.Ay), this.syncWith([l.A], u), null == e) return;
        let {
            suggestedChannels: t,
            dismissedSuggestions: n,
            channelOpensByChannelId: i
        } = e;
        if (null != t)
            for (let e in t) d[e] = new Set(t[e]) ?? new Set;
        if (null != n)
            for (let e in n) o[e] = new Set(n[e]) ?? new Set;
        h = i ?? {}
    }
    getSuggestedChannelId(e) {
        return null
    }
    getState() {
        return {
            suggestedChannels: {},
            dismissedSuggestions: {},
            channelOpensByChannelId: {}
        }
    }
}
let C = new c(s.h, {
    DISMISS_FAVORITE_SUGGESTION: function(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        return null == o[t] && (o[t] = new Set), o[t].add(n), d[t].delete(n), !0
    }
})