/** chunk id: 454058 params = (module,exports,require) **/
n.d(t, {
    A: () => w
});
var i = n(311907),
    s = n(73153),
    l = n(334738),
    r = n(940382),
    a = n(617617),
    d = n(961350),
    o = n(734057),
    h = n(808728),
    u = n(696451),
    c = n(71393),
    g = n(222823),
    C = n(543465),
    p = n(927813),
    I = n(661191),
    S = n(652215);
let A = new Set,
    y = {},
    f = {};

function E(e, t) {
    let n = y[e];
    null != n && null != t && n.has(t) && C.Ay.isOptInEnabled(e) && !o.A.getChannel(t)?.isThread() && null == g.Ay.ackMessageId(t) && s.h.wait(() => (0, l.ack)(t, {
        object: S.ZSU.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
        objectType: S.AnalyticsObjectTypes.ACK_AUTOMATIC
    }, !0, !0, I.default.atPreviousMillisecond(t)))
}

function _(e) {
    if (null != y[e]) return;
    let t = h.Ay.getChannels(e)[h.I6].map(e => e.channel.id),
        n = u.Ay.getMember(e, d.default.getId())?.joinedAt;
    if (null == n) return;
    y[e] = new Set;
    let i = new Date(n).getTime();
    0 !== t.length && (y[e] = new Set(t.filter(t => {
        let n = I.default.extractTimestamp(t);
        return null == g.Ay.getTrackedAckMessageId(t) && n > Date.now() - p.A.Millis.WEEK && n > a.A.getGuildRecentsDismissedAt(e) && n > i && !C.Ay.isChannelOrParentOptedIn(e, t)
    })), f[e] = Date.now())
}

function v() {
    I.default.keys(y).forEach(e => {
        let t = y[e];
        y[e] = new Set([...t].filter(t => !C.Ay.isChannelOrParentOptedIn(e, t)))
    })
}
class m extends i.Ay.Store {
    static displayName = "NewChannelsStore";
    initialize() {
        this.waitFor(d.default, o.A, h.Ay, u.Ay, c.A, g.Ay, C.Ay, a.A), this.syncWith([C.Ay], v)
    }
    getNewChannelIds(e) {
        return null != e && null == y[e] && _(e), null != e ? y[e] ?? A : A
    }
    shouldIndicateNewChannel(e, t) {
        if (null == e) return !1;
        let n = c.A.getGuild(e);
        return null != n && !!n.features.has(S.GuildFeatures.COMMUNITY) && (null != e && null == y[e] && _(e), y[e]?.has(t) && null == g.Ay.getTrackedAckMessageId(t))
    }
}
let w = new m(s.h, {
    BULK_CLEAR_RECENTS: function(e) {
        let {
            guildId: t,
            channelIds: n
        } = e;
        if (null == y[t]) return !1;
        n.forEach(e => y[t].delete(e)), 0 === y[t].size && delete y[t]
    },
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: function(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        return null != t && (null == y[t] || f[t] < Date.now() - p.A.Millis.HOUR ? (_(t), !0) : (null != n && E(t, n), !1))
    },
    SIDEBAR_VIEW_CHANNEL: function(e) {
        let {
            guildId: t,
            channelId: n,
            sidebarType: i
        } = e;
        return null != t && i === r.PE.VIEW_CHANNEL && (E(t, n), !1)
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
        delete y[t.id]
    },
    CHANNEL_CREATE: function(e) {
        let {
            channel: t
        } = e;
        t.isVocal() || (y[t.guild_id] = y[t.guild_id] ?? new Set, y[t.guild_id].add(t.id))
    }
})