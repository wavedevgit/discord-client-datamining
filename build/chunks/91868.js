/** chunk id: 91868 params = (module,exports,require) **/
n.d(t, {
    A: () => D,
    Y: () => p
}), n(321073);
var i, l = n(311907),
    r = n(713402),
    s = n(73153),
    a = n(174768),
    o = n(95701),
    u = n(734057),
    d = n(222823),
    c = n(994500),
    h = n(645959),
    g = n(661191),
    m = n(914853),
    f = n(956753),
    A = n(648427),
    I = n(316541),
    E = n(652215),
    p = ((i = {}).ACTIVE_NOW = "ACTIVE_NOW", i.DMS = "DMS", i.RECENT_TEXT = "RECENT_TEXT", i);
let _ = new r.J(function(e) {
        let t = [];
        return e.isInActiveNow && t.push("ACTIVE_NOW"), e.isInDmsList && t.push("DMS"), e.isInRecentTextList && t.push("RECENT_TEXT"), t
    }, function(e) {
        return e.sortKey
    }),
    S = null,
    x = new Set;

function T(e) {
    return String(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(e)))).padStart(13, "0")
}

function N(e) {
    let t = function(e) {
        let t = u.A.getChannel(e);
        if (null == t) return null;
        let n = t.isPrivate(),
            i = !n && (0, o.ke)(t.type);
        if (!n && !i) return null;
        if (t.isDM()) {
            let e = t.getRecipientId?.();
            if (null != e && c.A.getRelationshipType(e) === E.eA$.PENDING_INCOMING && (c.A.isIgnored(e) || c.A.isSpam(e))) return null
        }
        let l = I.A.hasActiveNowChannelId({
                kind: I.u.Text,
                channelId: e
            }),
            r = i && (a.A.getChannelHistory().includes(e) || A.A.getTextChannelHistory().includes(e)),
            s = d.Ay.hasUnread(e) || d.Ay.getMentionCount(e) > 0,
            h = null != t.lastMessageId ? g.default.extractTimestamp(t.lastMessageId) : 0,
            m = (() => {
                var t;
                if (n) return `DM\0${T(h)}\0${e}`;
                if (l) {
                    let n;
                    return t = I.A.getScoreForChannelId(e) ?? 0, n = Math.floor(Math.max(0, Math.min(0x2540be3ff, 1e6 * t))), `AN\0${String(0x2540be3ff-n).padStart(10,"0")}\0${e}`
                }
                return `GT\0${s?"0":"1"}\0${T(h)}\0${e}`
            })();
        return {
            id: e,
            channelId: e,
            isInActiveNow: l,
            isInDmsList: n,
            isInRecentTextList: r,
            hasUnread: s,
            lastActivityAtMs: h,
            sortKey: m
        }
    }(e);
    return null == t ? _.delete(e) : _.set(e, t)
}

function C() {
    let e = I.A.getActiveNowChannelIds({
            kind: I.u.Text
        }),
        t = new Set(e),
        n = !1;
    for (let t of e) n = N(t) || n;
    for (let e of [..._.values("ACTIVE_NOW")]) t.has(e.channelId) || (n = N(e.channelId) || n);
    return x = t, n
}

function v() {
    _.clear(), x = new Set;
    let e = !1;
    for (let t of h.default.getPrivateChannelIds()) e = N(t) || e;
    for (let t of a.A.getChannelHistory()) e = N(t) || e;
    for (let t of A.A.getTextChannelHistory()) e = N(t) || e;
    let t = I.A.getActiveNowChannelIds({
        kind: I.u.Text
    });
    for (let n of (x = new Set(t), t)) e = N(n) || e;
    return e
}

function y(e) {
    let t = u.A.getDMFromUserId(e);
    return null != t && N(t)
}
class M extends l.Ay.Store {
    static displayName = "FriendsWidgetMessagesStore";
    initialize() {
        this.waitFor(u.A, I.A, a.A, d.Ay, c.A, h.default, A.A), v()
    }
    getRows(e) {
        return [_.values(e), _.version]
    }
    getChannel(e) {
        return _.get(e)
    }
}
let R = e => (0, f.v$)(e, "FriendsWidgetMessagesStore"),
    D = new M(s.h, __OVERLAY__ ? {} : {
        OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: R(function(e) {
            return e.tab === m.x.MESSAGES && N(e.targetId)
        }),
        CHANNEL_SELECT: R(function(e) {
            let t = e.channelId ?? null,
                n = S;
            S = t;
            let i = !1;
            null != n && (i = N(n) || i), null != t && (i = N(t) || i);
            let l = C();
            return i || l
        }),
        MESSAGE_CREATE: R(function(e) {
            if (e.optimistic) return !1;
            let t = N(e.channelId),
                n = C();
            return t || n
        }),
        MESSAGE_ACK: R(function(e) {
            return N(e.channelId)
        }),
        TYPING_START: R(function(e) {
            var t = e.channelId;
            let n = new Set(I.A.getActiveNowChannelIds({
                    kind: I.u.Text
                })),
                i = !1;
            for (let e of (i = N(t) || i, n)) x.has(e) || (i = N(e) || i);
            for (let e of x) n.has(e) || (i = N(e) || i);
            return x = n, i
        }),
        RTC_CONNECTION_STATE: R(function() {
            return C()
        }),
        VOICE_CHANNEL_SELECT: R(function() {
            return C()
        }),
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: R(C),
        USER_GUILD_SETTINGS_GUILD_UPDATE: R(C),
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: R(C),
        RELATIONSHIP_ADD: R(function(e) {
            return y(e.relationship.id)
        }),
        RELATIONSHIP_REMOVE: R(function(e) {
            return y(e.relationship.id)
        }),
        RELATIONSHIP_UPDATE: R(function(e) {
            return y(e.relationship.id)
        }),
        RELATIONSHIP_PENDING_INCOMING_REMOVED: R(function(e) {
            let t = !1;
            for (let e of h.default.getPrivateChannelIds()) {
                let n = u.A.getChannel(e);
                null != n && n.isDM() && (t = N(e) || t)
            }
            return t
        }),
        OVERLAY_INITIALIZE: R(v),
        POST_CONNECTION_OPEN: R(v),
        CACHE_LOADED: R(v),
        CACHE_LOADED_LAZY: R(v),
        FRIENDS_LIST_POPOUT_MOUNTED: R(v),
        LOGOUT: R(function() {
            let e = _.size() > 0;
            return _.clear(), S = null, x = new Set, e
        })
    })