/** Chunk was on 44411 **/
/** chunk id: 454058, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => w
}), n(896048);
var i, s, r = n(311907),
    l = n(73153),
    o = n(334738),
    a = n(940382),
    d = n(617617),
    u = n(961350),
    c = n(734057),
    h = n(808728),
    p = n(696451),
    g = n(71393),
    f = n(222823),
    C = n(543465),
    y = n(927813),
    v = n(661191),
    b = n(652215);
let m = new Set,
    S = {},
    O = {};

function E(e, t) {
    let n = S[e];
    if (null != n && null != t && n.has(t)) {
        var i;
        !C.Ay.isOptInEnabled(e) || (null == (i = c.A.getChannel(t)) ? void 0 : i.isThread()) || null != f.Ay.ackMessageId(t) || l.h.wait(() => (0, o.ack)(t, {
            object: b.ZSU.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
            objectType: b.AnalyticsObjectTypes.ACK_AUTOMATIC
        }, !0, !0, v.default.atPreviousMillisecond(t)))
    }
}

function A(e) {
    var t;
    if (null != S[e]) return;
    let n = h.Ay.getChannels(e)[h.I6].map(e => e.channel.id),
        i = null == (t = p.Ay.getMember(e, u.default.getId())) ? void 0 : t.joinedAt;
    if (null == i) return;
    S[e] = new Set;
    let s = new Date(i).getTime();
    0 !== n.length && (S[e] = new Set(n.filter(t => {
        let n = v.default.extractTimestamp(t);
        return null == f.Ay.getTrackedAckMessageId(t) && n > Date.now() - y.A.Millis.WEEK && n > d.A.getGuildRecentsDismissedAt(e) && n > s && !C.Ay.isChannelOrParentOptedIn(e, t)
    })), O[e] = Date.now())
}

function I() {
    v.default.keys(S).forEach(e => {
        let t = S[e];
        S[e] = new Set([...t].filter(t => !C.Ay.isChannelOrParentOptedIn(e, t)))
    })
}
class _ extends(i = r.Ay.Store) {
    initialize() {
        this.waitFor(u.default, c.A, h.Ay, p.Ay, g.A, f.Ay, C.Ay, d.A), this.syncWith([C.Ay], I)
    }
    getNewChannelIds(e) {
        var t;
        return null != e && null == S[e] && A(e), null != e && null != (t = S[e]) ? t : m
    }
    shouldIndicateNewChannel(e, t) {
        var n;
        if (null == e) return !1;
        let i = g.A.getGuild(e);
        return null != i && !!i.features.has(b.GuildFeatures.COMMUNITY) && (null != e && null == S[e] && A(e), (null == (n = S[e]) ? void 0 : n.has(t)) && null == f.Ay.getTrackedAckMessageId(t))
    }
}(s = "displayName") in _ ? Object.defineProperty(_, s, {
    value: "NewChannelsStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : _[s] = "NewChannelsStore";
let w = new _(l.h, {
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
        return null != t && (null == S[t] || O[t] < Date.now() - y.A.Millis.HOUR ? (A(t), !0) : (null != n && E(t, n), !1))
    },
    SIDEBAR_VIEW_CHANNEL: function(e) {
        let {
            guildId: t,
            channelId: n,
            sidebarType: i
        } = e;
        return null != t && i === a.PE.VIEW_CHANNEL && (E(t, n), !1)
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
        var t;
        let {
            channel: n
        } = e;
        n.isVocal() || (S[n.guild_id] = null != (t = S[n.guild_id]) ? t : new Set, S[n.guild_id].add(n.id))
    }
})