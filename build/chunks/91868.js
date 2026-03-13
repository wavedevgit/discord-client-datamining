/** chunk id: 91868 params = (module,exports,require) **/
n.d(t, {
    A: () => R,
    Y: () => S
}), n(321073);
var l, i = n(311907),
    r = n(713402),
    s = n(73153),
    a = n(174768),
    u = n(95701),
    o = n(734057),
    d = n(222823),
    c = n(994500),
    h = n(645959),
    g = n(661191),
    I = n(914853),
    A = n(956753),
    f = n(648427),
    E = n(316541),
    m = n(652215),
    S = ((l = {}).ACTIVE_NOW = "ACTIVE_NOW", l.DMS = "DMS", l.RECENT_TEXT = "RECENT_TEXT", l);
let _ = new r.J(function(e) {
        let t = [];
        return e.isInActiveNow && t.push("ACTIVE_NOW"), e.isInDmsList && t.push("DMS"), e.isInRecentTextList && t.push("RECENT_TEXT"), t
    }, function(e) {
        return e.sortKey
    }),
    p = null,
    N = new Set;

function T(e) {
    return String(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(e)))).padStart(13, "0")
}

function y(e) {
    let t = function(e) {
        let t = o.A.getChannel(e);
        if (null == t) return null;
        let n = t.isPrivate(),
            l = !n && (0, u.ke)(t.type);
        if (!n && !l) return null;
        if (t.isDM()) {
            let e = t.getRecipientId?.();
            if (null != e && c.A.getRelationshipType(e) === m.eA$.PENDING_INCOMING && (c.A.isIgnored(e) || c.A.isSpam(e))) return null
        }
        let i = E.A.hasActiveNowChannelId({
                kind: E.u.Text,
                channelId: e
            }),
            r = l && (a.A.getChannelHistory().includes(e) || f.A.getTextChannelHistory().includes(e)),
            s = d.Ay.hasUnread(e) || d.Ay.getMentionCount(e) > 0,
            h = null != t.lastMessageId ? g.default.extractTimestamp(t.lastMessageId) : 0,
            I = (() => {
                var t;
                if (n) return `DM\0${T(h)}\0${e}`;
                if (i) {
                    let n;
                    return t = E.A.getScoreForChannelId(e) ?? 0, n = Math.floor(Math.max(0, Math.min(0x2540be3ff, 1e6 * t))), `AN\0${String(0x2540be3ff-n).padStart(10,"0")}\0${e}`
                }
                return `GT\0${s?"0":"1"}\0${T(h)}\0${e}`
            })();
        return {
            id: e,
            channelId: e,
            isInActiveNow: i,
            isInDmsList: n,
            isInRecentTextList: r,
            hasUnread: s,
            lastActivityAtMs: h,
            sortKey: I
        }
    }(e);
    return null == t ? _.delete(e) : _.set(e, t)
}

function C() {
    let e = E.A.getActiveNowChannelIds({
            kind: E.u.Text
        }),
        t = new Set(e),
        n = !1;
    for (let t of e) n = y(t) || n;
    for (let e of [..._.values("ACTIVE_NOW")]) t.has(e.channelId) || (n = y(e.channelId) || n);
    return N = t, n
}

function x() {
    _.clear(), N = new Set;
    let e = !1;
    for (let t of h.default.getPrivateChannelIds()) e = y(t) || e;
    for (let t of a.A.getChannelHistory()) e = y(t) || e;
    for (let t of f.A.getTextChannelHistory()) e = y(t) || e;
    let t = E.A.getActiveNowChannelIds({
        kind: E.u.Text
    });
    for (let n of (N = new Set(t), t)) e = y(n) || e;
    return e
}

function v(e) {
    let t = o.A.getDMFromUserId(e);
    return null != t && y(t)
}
class M extends i.Ay.Store {
    static displayName = "FriendsWidgetMessagesStore";
    initialize() {
        this.waitFor(o.A, E.A, a.A, d.Ay, c.A, h.default, f.A), x()
    }
    getRows(e) {
        return [_.values(e), _.version]
    }
    getChannel(e) {
        return _.get(e)
    }
}
let D = e => (0, A.v$)(e, "FriendsWidgetMessagesStore"),
    R = new M(s.h, __OVERLAY__ ? {} : {
        OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: D(function(e) {
            return e.tab === I.x.MESSAGES && y(e.targetId)
        }),
        CHANNEL_SELECT: D(function(e) {
            let t = e.channelId ?? null,
                n = p;
            p = t;
            let l = !1;
            null != n && (l = y(n) || l), null != t && (l = y(t) || l);
            let i = C();
            return l || i
        }),
        MESSAGE_CREATE: D(function(e) {
            if (e.optimistic) return !1;
            let t = y(e.channelId),
                n = C();
            return t || n
        }),
        MESSAGE_ACK: D(function(e) {
            return y(e.channelId)
        }),
        TYPING_START: D(function(e) {
            var t = e.channelId;
            let n = new Set(E.A.getActiveNowChannelIds({
                    kind: E.u.Text
                })),
                l = !1;
            for (let e of (l = y(t) || l, n)) N.has(e) || (l = y(e) || l);
            for (let e of N) n.has(e) || (l = y(e) || l);
            return N = n, l
        }),
        RTC_CONNECTION_STATE: D(function() {
            return C()
        }),
        VOICE_CHANNEL_SELECT: D(function() {
            return C()
        }),
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: D(C),
        USER_GUILD_SETTINGS_GUILD_UPDATE: D(C),
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: D(C),
        RELATIONSHIP_ADD: D(function(e) {
            return v(e.relationship.id)
        }),
        RELATIONSHIP_REMOVE: D(function(e) {
            return v(e.relationship.id)
        }),
        RELATIONSHIP_UPDATE: D(function(e) {
            return v(e.relationship.id)
        }),
        RELATIONSHIP_PENDING_INCOMING_REMOVED: D(function(e) {
            let t = !1;
            for (let e of h.default.getPrivateChannelIds()) {
                let n = o.A.getChannel(e);
                null != n && n.isDM() && (t = y(e) || t)
            }
            return t
        }),
        OVERLAY_INITIALIZE: D(x),
        POST_CONNECTION_OPEN: D(x),
        CACHE_LOADED: D(x),
        CACHE_LOADED_LAZY: D(x),
        FRIENDS_LIST_POPOUT_MOUNTED: D(x),
        LOGOUT: D(function() {
            let e = _.size() > 0;
            return _.clear(), p = null, N = new Set, e
        })
    })