/** Chunk was on web.js **/
/** chunk id: 312006, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => M
}), n(896048);
var r, i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(734057),
    c = n(696451),
    u = n(317525),
    d = n(71393),
    f = n(287809),
    p = n(977997),
    _ = n(488926),
    h = n(233993),
    m = n(105530),
    g = n(418208);

function E(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let y = {},
    b = {
        speaker: !1,
        moderator: !1
    };

function O(e, t) {
    let n = p.A.getVoiceStateForChannel(t, e);
    return (0, m.eY)(n) === m.zF.ON_STAGE
}

function v(e, t, n) {
    return _.$3({
        permission: h.QY,
        user: e,
        context: t,
        overwrites: n.permissionOverwrites,
        roles: u.A.getUnsafeMutableRoles(t.id)
    })
}

function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = l.A.getChannel(t),
        i = null == r ? void 0 : r.getGuildId(),
        a = d.A.getGuild(i);
    return null != a && null != r && r.isGuildStageVoice() ? {
        speaker: O(e, t),
        moderator: n ? v(e, a, r) : null
    } : b
}

function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    null == y[t] && (y[t] = {});
    let r = A(e, t, n);
    return y[t][e] = r, r
}

function S(e, t) {
    var n;
    if (null == t) return !1;
    let r = l.A.getChannel(t);
    return null != r && !!r.isGuildStageVoice() && (null == (n = y[t]) || delete n[e], !0)
}

function T(e, t) {
    for (let n in y) {
        let r = l.A.getBasicChannel(n);
        null != r && r.guild_id === t && delete y[n][e]
    }
    return !0
}

function C(e) {
    let t = Object.values(l.A.getMutableGuildChannelsForGuild(e)).filter(e => e.isGuildStageVoice());
    for (let e of t) delete y[e.id];
    return t.length > 0
}

function N(e) {
    let {
        channels: t
    } = e;
    for (let e of t) delete y[e.id]
}

function w(e) {
    let {
        guildId: t
    } = e;
    C(t)
}

function R(e) {
    let {
        guildId: t,
        user: n
    } = e;
    return null != n && null != t && T(n.id, t)
}

function P(e) {
    let {
        voiceStates: t
    } = e;
    return !a().isEmpty(y) && t.reduce((e, t) => {
        let {
            userId: n,
            channelId: r
        } = t;
        return S(n, r) || e
    }, !1)
}

function D(e) {
    return C(e.guildId)
}

function x() {
    y = {}
}

function L(e) {
    let {
        guild: t
    } = e;
    for (let e in y) {
        let n = l.A.getBasicChannel(e);
        (null == n || n.guild_id === t.id) && delete y[e]
    }
}
class j extends(r = s.Ay.Store) {
    initialize() {
        this.waitFor(c.Ay, l.A, d.A, f.default, p.A, u.A)
    }
    isSpeaker(e, t) {
        return this.getPermissionsForUser(e, t).speaker
    }
    isModerator(e, t) {
        var n;
        return null != (n = this.getPermissionsForUser(e, t, !0).moderator) && n
    }
    isAudienceMember(e, t) {
        let n = this.getPermissionsForUser(e, t);
        return !n.speaker && !n.moderator
    }
    getPermissionsForUser(e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e || null == t || e === (null == (n = f.default.getCurrentUser()) ? void 0 : n.id) && (0, g.o$)()) return b;
        let a = null == (r = y[t]) ? void 0 : r[e];
        if (null != a)
            if (i && null == a.moderator) return I(e, t, !0);
            else return a;
        return I(e, t, i)
    }
}
E(j, "displayName", "StageChannelRoleStore");
let M = new j(o.h, {
    CHANNEL_UPDATES: N,
    CONNECTION_OPEN: x,
    GUILD_MEMBER_REMOVE: R,
    GUILD_MEMBER_UPDATE: R,
    GUILD_ROLE_UPDATE: w,
    PASSIVE_UPDATE_V2: D,
    VOICE_STATE_UPDATES: P,
    GUILD_CREATE: L,
    GUILD_DELETE: L
})