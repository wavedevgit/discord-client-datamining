/** chunk id: 454058 params = (module,exports,require) **/
n.d(t, {
    A: () => m
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
    C = n(222823),
    g = n(543465),
    A = n(927813),
    I = n(661191),
    _ = n(652215);
let E = new Set,
    p = {},
    S = {};

function f(e, t) {
    let n = p[e];
    null != n && null != t && n.has(t) && g.Ay.isOptInEnabled(e) && !o.A.getChannel(t)?.isThread() && null == C.Ay.ackMessageId(t) && s.h.wait(() => (0, r.ack)(t, {
        object: _.ZSU.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
        objectType: _.AnalyticsObjectTypes.ACK_AUTOMATIC
    }, !0, !0, I.default.atPreviousMillisecond(t)))
}

function y(e) {
    if (null != p[e]) return;
    let t = h.Ay.getChannels(e)[h.I6].map(e => e.channel.id),
        n = u.Ay.getMember(e, d.default.getId())?.joinedAt;
    if (null == n) return;
    p[e] = new Set;
    let i = new Date(n).getTime();
    0 !== t.length && (p[e] = new Set(t.filter(t => {
        let n = I.default.extractTimestamp(t);
        return null == C.Ay.getTrackedAckMessageId(t) && n > Date.now() - A.A.Millis.WEEK && n > a.A.getGuildRecentsDismissedAt(e) && n > i && !g.Ay.isChannelOrParentOptedIn(e, t)
    })), S[e] = Date.now())
}

function v() {
    I.default.keys(p).forEach(e => {
        let t = p[e];
        p[e] = new Set([...t].filter(t => !g.Ay.isChannelOrParentOptedIn(e, t)))
    })
}
class L extends i.Ay.Store {
    static displayName = "NewChannelsStore";
    initialize() {
        this.waitFor(d.default, o.A, h.Ay, u.Ay, c.A, C.Ay, g.Ay, a.A), this.syncWith([g.Ay], v)
    }
    getNewChannelIds(e) {
        return null != e && null == p[e] && y(e), null != e ? p[e] ?? E : E
    }
    shouldIndicateNewChannel(e, t) {
        if (null == e) return !1;
        let n = c.A.getGuild(e);
        return null != n && !!n.features.has(_.GuildFeatures.COMMUNITY) && (null != e && null == p[e] && y(e), p[e]?.has(t) && null == C.Ay.getTrackedAckMessageId(t))
    }
}
let m = new L(s.h, {
    BULK_CLEAR_RECENTS: function(e) {
        let {
            guildId: t,
            channelIds: n
        } = e;
        if (null == p[t]) return !1;
        n.forEach(e => p[t].delete(e)), 0 === p[t].size && delete p[t]
    },
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: function(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        return null != t && (null == p[t] || S[t] < Date.now() - A.A.Millis.HOUR ? (y(t), !0) : (null != n && f(t, n), !1))
    },
    SIDEBAR_VIEW_CHANNEL: function(e) {
        let {
            guildId: t,
            channelId: n,
            sidebarType: i
        } = e;
        return null != t && i === l.PE.VIEW_CHANNEL && (f(t, n), !1)
    },
    SIDEBAR_VIEW_GUILD: function(e) {
        let {
            guildId: t,
            baseChannelId: n
        } = e;
        return null != t && (f(t, n), !1)
    },
    GUILD_DELETE: function(e) {
        let {
            guild: t
        } = e;
        delete p[t.id]
    },
    CHANNEL_CREATE: function(e) {
        let {
            channel: t
        } = e;
        t.isVocal() || (p[t.guild_id] = p[t.guild_id] ?? new Set, p[t.guild_id].add(t.id))
    }
})