/** chunk id: 454058, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(311907),
    s = n(73153),
    l = n(334738),
    r = n(940382),
    a = n(617617),
    d = n(961350),
    h = n(734057),
    o = n(808728),
    u = n(696451),
    c = n(71393),
    g = n(222823),
    C = n(543465),
    p = n(927813),
    I = n(661191),
    S = n(652215);
let y = new Set,
    A = {},
    f = {};

function E(e, t) {
    let n = A[e];
    null != n && null != t && n.has(t) && C.Ay.isOptInEnabled(e) && !h.A.getChannel(t)?.isThread() && null == g.Ay.ackMessageId(t) && s.h.wait(() => (0, l.ack)(t, {
        object: S.ZSU.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
        objectType: S.AnalyticsObjectTypes.ACK_AUTOMATIC
    }, !0, !0, I.default.atPreviousMillisecond(t)))
}

function _(e) {
    if (null != A[e]) return;
    let t = o.Ay.getChannels(e)[o.I6].map(e => e.channel.id),
        n = u.Ay.getMember(e, d.default.getId())?.joinedAt;
    if (null == n) return;
    A[e] = new Set;
    let i = new Date(n).getTime();
    0 !== t.length && (A[e] = new Set(t.filter(t => {
        let n = I.default.extractTimestamp(t);
        return null == g.Ay.getTrackedAckMessageId(t) && n > Date.now() - p.A.Millis.WEEK && n > a.A.getGuildRecentsDismissedAt(e) && n > i && !C.Ay.isChannelOrParentOptedIn(e, t)
    })), f[e] = Date.now())
}

function v() {
    I.default.keys(A).forEach(e => {
        let t = A[e];
        A[e] = new Set([...t].filter(t => !C.Ay.isChannelOrParentOptedIn(e, t)))
    })
}
class w extends i.Ay.Store {
    static displayName = "NewChannelsStore";
    initialize() {
        this.waitFor(d.default, h.A, o.Ay, u.Ay, c.A, g.Ay, C.Ay, a.A), this.syncWith([C.Ay], v)
    }
    getNewChannelIds(e) {
        return null != e && null == A[e] && _(e), null != e ? A[e] ?? y : y
    }
    shouldIndicateNewChannel(e, t) {
        if (null == e) return !1;
        let n = c.A.getGuild(e);
        return null != n && !!n.features.has(S.GuildFeatures.COMMUNITY) && (null != e && null == A[e] && _(e), A[e]?.has(t) && null == g.Ay.getTrackedAckMessageId(t))
    }
}
let m = new w(s.h, {
    BULK_CLEAR_RECENTS: function(e) {
        let {
            guildId: t,
            channelIds: n
        } = e;
        if (null == A[t]) return !1;
        n.forEach(e => A[t].delete(e)), 0 === A[t].size && delete A[t]
    },
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: function(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        return null != t && (null == A[t] || f[t] < Date.now() - p.A.Millis.HOUR ? (_(t), !0) : (null != n && E(t, n), !1))
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
        delete A[t.id]
    },
    CHANNEL_CREATE: function(e) {
        let {
            channel: t
        } = e;
        t.isVocal() || (A[t.guild_id] = A[t.guild_id] ?? new Set, A[t.guild_id].add(t.id))
    }
})