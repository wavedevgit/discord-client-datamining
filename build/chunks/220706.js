/** chunk id: 220706, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l, r = n(311907),
    i = n(73153),
    a = n(734057),
    s = n(746080);

function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let c = {},
    u = {};
class d extends(l = r.Ay.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(a.A), c = null != (t = null == e ? void 0 : e.selectedResourceChannelIdByGuildId) ? t : {}
    }
    getState() {
        return {
            selectedResourceChannelIdByGuildId: c
        }
    }
    getSelectedResourceChannelId(e) {
        return null == e ? null : c[e]
    }
    getHomeNavigationChannelId(e) {
        var t;
        return null == e ? null : null != (t = c[e]) ? t : u[e]
    }
}
o(d, "displayName", "GuildOnboardingHomeNavigationStore"), o(d, "persistKey", "GuildOnboardingHomeNavigationStore");
let h = new d(i.h, {
    CHANNEL_SELECT: function(e) {
        let {
            channelId: t,
            guildId: n
        } = e;
        if (null == n || t === s.VV.GUILD_HOME) return;
        let l = a.A.getChannel(t),
            r = c[n],
            i = u[n];
        (null == l ? void 0 : l.isThread()) && (null == l ? void 0 : l.parent_id) != null && [i, r].includes(null == l ? void 0 : l.parent_id) || (t !== r && delete c[n], t !== i && delete u[n])
    },
    SELECT_HOME_RESOURCE_CHANNEL: function(e) {
        let {
            channelId: t,
            guildId: n
        } = e;
        null == t ? delete u[n] : c[n] = t, delete u[n]
    },
    SELECT_NEW_MEMBER_ACTION_CHANNEL: function(e) {
        let {
            channelId: t,
            guildId: n
        } = e;
        delete c[n], u[n] = t
    }
})