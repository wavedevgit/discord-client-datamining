/** chunk id: 454058 params = (module,exports,require) **/
n.d(t, {
    A: () => w
});
var i = n(311907),
    s = n(73153),
    r = n(334738),
    l = n(940382),
    a = n(617617),
    d = n(961350),
    o = n(734057),
    h = n(808728),
    u = n(696451),
    c = n(71393),
    g = n(222823),
    C = n(543465),
    p = n(927813),
    A = n(661191),
    I = n(652215);
let f = new Set,
    S = {},
    y = {};

function E(e, t) {
    let n = S[e];
    null != n && null != t && n.has(t) && C.Ay.isOptInEnabled(e) && !o.A.getChannel(t)?.isThread() && null == g.Ay.ackMessageId(t) && s.h.wait(() => (0, r.ack)(t, {
        object: I.ZSU.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
        objectType: I.AnalyticsObjectTypes.ACK_AUTOMATIC
    }, !0, !0, A.default.atPreviousMillisecond(t)))
}

function v(e) {
    if (null != S[e]) return;
    let t = h.Ay.getChannels(e)[h.I6].map(e => e.channel.id),
        n = u.Ay.getMember(e, d.default.getId())?.joinedAt;
    if (null == n) return;
    S[e] = new Set;
    let i = new Date(n).getTime();
    0 !== t.length && (S[e] = new Set(t.filter(t => {
        let n = A.default.extractTimestamp(t);
        return null == g.Ay.getTrackedAckMessageId(t) && n > Date.now() - p.A.Millis.WEEK && n > a.A.getGuildRecentsDismissedAt(e) && n > i && !C.Ay.isChannelOrParentOptedIn(e, t)
    })), y[e] = Date.now())
}

function _() {
    A.default.keys(S).forEach(e => {
        let t = S[e];
        S[e] = new Set([...t].filter(t => !C.Ay.isChannelOrParentOptedIn(e, t)))
    })
}
class m extends i.Ay.Store {
    static displayName = "NewChannelsStore";
    initialize() {
        this.waitFor(d.default, o.A, h.Ay, u.Ay, c.A, g.Ay, C.Ay, a.A), this.syncWith([C.Ay], _)
    }
    getNewChannelIds(e) {
        return null != e && null == S[e] && v(e), null != e ? S[e] ?? f : f
    }
    shouldIndicateNewChannel(e, t) {
        if (null == e) return !1;
        let n = c.A.getGuild(e);
        return null != n && !!n.features.has(I.GuildFeatures.COMMUNITY) && (null != e && null == S[e] && v(e), S[e]?.has(t) && null == g.Ay.getTrackedAckMessageId(t))
    }
}
let w = new m(s.h, {
    BULK_CLEAR_RECENTS: function(e) {
        let {
            guildId: t,
            channelIds: n
        } = e;
        if (null == S[t]) return !1;
        n.forEach(e => S[t].delete(e)), 0 === S[t].size && delete S[t]
    },
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: function(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        return null != t && (null == S[t] || y[t] < Date.now() - p.A.Millis.HOUR ? (v(t), !0) : (null != n && E(t, n), !1))
    },
    SIDEBAR_VIEW_CHANNEL: function(e) {
        let {
            guildId: t,
            channelId: n,
            sidebarType: i
        } = e;
        return null != t && i === l.PE.VIEW_CHANNEL && (E(t, n), !1)
    },
    SIDEBAR_VIEW_GUILD: function(e) {
        let {
            guildId: t,
            baseChannelId: n
        } = e;
        return null != t && (E(t, n), !1)
    },
    GUILD_DELETE: function(e) {
        let {
            guild: t
        } = e;
        delete S[t.id]
    },
    CHANNEL_CREATE: function(e) {
        let {
            channel: t
        } = e;
        t.isVocal() || (S[t.guild_id] = S[t.guild_id] ?? new Set, S[t.guild_id].add(t.id))
    }
})