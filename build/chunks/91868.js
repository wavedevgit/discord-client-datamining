/** chunk id: 91868 params = (module,exports,require) **/
n.d(t, {
    A: () => R,
    Y: () => p
}), n(321073);
var i, r = n(311907),
    l = n(713402),
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
let _ = new l.J(function(e) {
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

function C(e) {
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
        let r = I.A.hasActiveNowChannelId({
                kind: I.u.Text,
                channelId: e
            }),
            l = i && (a.A.getChannelHistory().includes(e) || A.A.getTextChannelHistory().includes(e)),
            s = d.Ay.hasUnread(e) || d.Ay.getMentionCount(e) > 0,
            h = null != t.lastMessageId ? g.default.extractTimestamp(t.lastMessageId) : 0,
            m = (() => {
                var t;
                if (n) return `DM\0${T(h)}\0${e}`;
                if (r) {
                    let n;
                    return t = I.A.getScoreForChannelId(e) ?? 0, n = Math.floor(Math.max(0, Math.min(0x2540be3ff, 1e6 * t))), `AN\0${String(0x2540be3ff-n).padStart(10,"0")}\0${e}`
                }
                return `GT\0${s?"0":"1"}\0${T(h)}\0${e}`
            })();
        return {
            id: e,
            channelId: e,
            isInActiveNow: r,
            isInDmsList: n,
            isInRecentTextList: l,
            hasUnread: s,
            lastActivityAtMs: h,
            sortKey: m
        }
    }(e);
    return null == t ? _.delete(e) : _.set(e, t)
}

function N() {
    let e = I.A.getActiveNowChannelIds({
            kind: I.u.Text
        }),
        t = new Set(e),
        n = !1;
    for (let t of e) n = C(t) || n;
    for (let e of [..._.values("ACTIVE_NOW")]) t.has(e.channelId) || (n = C(e.channelId) || n);
    return x = t, n
}

function v() {
    _.clear(), x = new Set;
    let e = !1;
    for (let t of h.default.getPrivateChannelIds()) e = C(t) || e;
    for (let t of a.A.getChannelHistory()) e = C(t) || e;
    for (let t of A.A.getTextChannelHistory()) e = C(t) || e;
    let t = I.A.getActiveNowChannelIds({
        kind: I.u.Text
    });
    for (let n of (x = new Set(t), t)) e = C(n) || e;
    return e
}

function y(e) {
    let t = u.A.getDMFromUserId(e);
    return null != t && C(t)
}
class M extends r.Ay.Store {
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
let b = e => (0, f.v$)(e, "FriendsWidgetMessagesStore"),
    R = new M(s.h, __OVERLAY__ ? {} : {
        OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: b(function(e) {
            return e.tab === m.x.MESSAGES && C(e.targetId)
        }),
        CHANNEL_SELECT: b(function(e) {
            let t = e.channelId ?? null,
                n = S;
            S = t;
            let i = !1;
            null != n && (i = C(n) || i), null != t && (i = C(t) || i);
            let r = N();
            return i || r
        }),
        MESSAGE_CREATE: b(function(e) {
            if (e.optimistic) return !1;
            let t = C(e.channelId),
                n = N();
            return t || n
        }),
        MESSAGE_ACK: b(function(e) {
            return C(e.channelId)
        }),
        TYPING_START: b(function(e) {
            var t = e.channelId;
            let n = new Set(I.A.getActiveNowChannelIds({
                    kind: I.u.Text
                })),
                i = !1;
            for (let e of (i = C(t) || i, n)) x.has(e) || (i = C(e) || i);
            for (let e of x) n.has(e) || (i = C(e) || i);
            return x = n, i
        }),
        RTC_CONNECTION_STATE: b(function() {
            return N()
        }),
        VOICE_CHANNEL_SELECT: b(function() {
            return N()
        }),
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: b(N),
        USER_GUILD_SETTINGS_GUILD_UPDATE: b(N),
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: b(N),
        RELATIONSHIP_ADD: b(function(e) {
            return y(e.relationship.id)
        }),
        RELATIONSHIP_REMOVE: b(function(e) {
            return y(e.relationship.id)
        }),
        RELATIONSHIP_UPDATE: b(function(e) {
            return y(e.relationship.id)
        }),
        RELATIONSHIP_PENDING_INCOMING_REMOVED: b(function(e) {
            let t = !1;
            for (let e of h.default.getPrivateChannelIds()) {
                let n = u.A.getChannel(e);
                null != n && n.isDM() && (t = C(e) || t)
            }
            return t
        }),
        OVERLAY_INITIALIZE: b(v),
        POST_CONNECTION_OPEN: b(v),
        CACHE_LOADED: b(v),
        CACHE_LOADED_LAZY: b(v),
        FRIENDS_LIST_POPOUT_MOUNTED: b(v),
        LOGOUT: b(function() {
            let e = _.size() > 0;
            return _.clear(), S = null, x = new Set, e
        })
    })