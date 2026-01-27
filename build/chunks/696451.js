/** Chunk was on web.js **/
/** chunk id: 696451, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => eG,
    DL: () => q,
    vg: () => z
}), n(747238), n(896048), n(938796), n(321073);
var r, i = n(735438),
    a = n.n(i),
    o = n(665260),
    s = n(311907),
    l = n(73153),
    c = n(807605),
    u = n(969151),
    d = n(507698),
    f = n(628856),
    p = n(626584),
    _ = n(945096),
    h = n(316031),
    m = n(264388),
    g = n(164956),
    E = n(403362),
    y = n(7864),
    b = n(661191),
    O = n(961350),
    v = n(734057),
    A = n(317525),
    I = n(71393),
    S = n(340837);

function T(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            T(e, t, n[t])
        })
    }
    return e
}

function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function w(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let R = new p.A("GuildMemberStore"),
    P = {},
    D = {},
    L = {},
    x = {},
    M = {},
    j = !1,
    k = 0,
    U = 0,
    G = {},
    F = {},
    V = {
        added: [],
        removed: []
    };

function B(e, t) {
    if (null == t.communicationDisabledUntil || !(0, h.Z)(t)) return H(e, t.userId);
    let n = K(e, t.userId);
    M[n] !== t.communicationDisabledUntil && (0, h.Z)(t) && (M[n] = t.communicationDisabledUntil, Y(n))
}

function H(e, t) {
    if (null != t) {
        let n = K(e, t);
        null != M[n] && Y(n), W(K(e, t))
    } else
        for (let t in M) {
            let n = t;
            q(n) === e && (Y(t), W(n))
        }
}

function Y(e) {
    k += 1, G[e] = k
}

function W(e) {
    z(e) === O.default.getId() && (0, m.G)(q(e)), delete M[e]
}

function K(e, t) {
    let n = [];
    return n[0] = e, n[1] = t, n.join("-")
}

function z(e) {
    return e.split("-")[1]
}

function q(e) {
    return e.split("-")[0]
}

function Z(e, t) {
    var n, r;
    let i, a, o, s;
    if (0 === t.length) return {
        colorString: null,
        colorStrings: null,
        colorRoleId: void 0,
        hoistRoleId: void 0,
        iconRoleId: void 0,
        highestRoleId: void 0
    };
    for (let n of t) {
        let t = e[n];
        null != t && ((null == s || (0, y.zA)(t, s)) && (s = t), t.color > 0 && (null == i || (0, y.zA)(t, i)) && (i = t), t.hoist && (null == a || (0, y.zA)(t, a)) && (a = t), (null != t.icon || null != t.unicodeEmoji) && (null == o || (0, y.zA)(t, o)) && (o = t))
    }
    return {
        colorString: null != (n = null == i ? void 0 : i.colorString) ? n : null,
        colorStrings: null != (r = null == i ? void 0 : i.colorStrings) ? r : null,
        colorRoleId: null == i ? void 0 : i.id,
        iconRoleId: null == o ? void 0 : o.id,
        hoistRoleId: null == a ? void 0 : a.id,
        highestRoleId: null == s ? void 0 : s.id
    }
}

function Q(e) {
    var t, n;
    let {
        userId: r,
        nick: i,
        guildId: a,
        avatar: s,
        avatarDecoration: l,
        guildRoles: c,
        roles: u,
        premiumSince: d,
        isPending: f,
        joinedAt: p,
        communicationDisabledUntil: _,
        unusualDMActivityUntil: h,
        fullProfileLoadedTimestamp: m,
        flags: E,
        collectibles: y,
        displayNameStyles: v
    } = e, {
        colorString: A,
        colorStrings: I,
        colorRoleId: T,
        iconRoleId: N,
        hoistRoleId: R,
        highestRoleId: D
    } = Z(c, u), x = {
        userId: r,
        nick: i,
        guildId: a,
        avatar: s,
        avatarDecoration: l,
        roles: u,
        colorString: A,
        colorStrings: I,
        colorRoleId: T,
        iconRoleId: N,
        hoistRoleId: R,
        highestRoleId: D,
        premiumSince: d,
        isPending: f,
        joinedAt: p,
        communicationDisabledUntil: _,
        unusualDMActivityUntil: h,
        fullProfileLoadedTimestamp: m,
        flags: E,
        collectibles: y,
        displayNameStyles: v
    };
    if ((0, o.Lt)(null != (t = x.flags) ? t : 0, S.D.IS_GUEST) && (x.flags = (0, o.UI)(null != (n = x.flags) ? n : 0, S.D.BYPASSES_VERIFICATION)), null == P[a]) return x;
    if (r === O.default.getId())
        if (g.A.isViewingRoles(a) || g.A.isFullServerPreview(a)) {
            let e = g.A.getViewingRoles(a);
            L[a] = w(C({}, x, g.A.getMemberOptions(a)), {
                roles: null != e ? b.default.keys(e) : []
            })
        } else null != L[a] && delete L[a];
    return x
}

function X(e) {
    j ? j = !1 : (P = {}, D = {}), M = {}, $(e)
}

function J(e) {
    e.guilds.forEach(e => {
        var t;
        let n = e.id;
        eA({
            id: n,
            members: e.members
        }), null == (t = e.activity_instances) || t.forEach(e => {
            ev(n, e.participants)
        })
    })
}

function $(e) {
    e.guilds.forEach(e => {
        eA(e)
    })
}

function ee(e) {
    let {
        guildMembers: t
    } = e;
    P = C({}, t), D = {}
}

function et(e) {
    let {
        guildMembers: t,
        guilds: n
    } = e;
    j = !0, P = C({}, t), D = {}, x = {}, er(n)
}

function en(e) {
    let {
        guilds: t
    } = e;
    er(t)
}

function er(e) {
    for (let t of e)
        if (null != t.member && (null == x[t.id] ? x[t.id] = t.member : x[t.id] = w(C({}, t.member), {
                roles: t.member.roles
            }), null != P[t.id])) {
            let e = P[t.id];
            null != e[t.member.userId] && (e[t.member.userId] = w(C({}, e[t.member.userId]), {
                roles: t.member.roles
            }))
        }
}

function ei(e) {
    var t, n;
    if (null == e.guildId || null == I.A.getGuild(e.guildId)) return !1;
    j = !0, P[e.guildId] = null != (t = P[e.guildId]) ? t : {};
    let r = !1;
    for (let t of (j = !0, P[e.guildId] = null != (n = P[e.guildId]) ? n : {}, e.members)) null == P[e.guildId][t.userId] && (r = !0, P[e.guildId][t.userId] = t);
    return r
}

function ea(e) {
    var t;
    let {
        guildId: n,
        user: r,
        nick: i,
        avatar: a,
        avatarDecoration: o,
        roles: s,
        premiumSince: l,
        isPending: c,
        joinedAt: u,
        communicationDisabledUntil: f,
        unusualDMActivityUntil: p,
        flags: _,
        collectibles: h,
        displayNameStyles: m
    } = e, g = P[n];
    if (null == g) return !1;
    let E = I.A.getGuild(n);
    if (null == E) return R.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), !1;
    g[r.id] = Q({
        userId: r.id,
        nick: i,
        guildId: n,
        avatar: a,
        avatarDecoration: (0, d.Xq)(o),
        guildRoles: A.A.getUnsafeMutableRoles(E.id),
        roles: s,
        premiumSince: l,
        isPending: c,
        joinedAt: u,
        communicationDisabledUntil: f,
        unusualDMActivityUntil: p,
        fullProfileLoadedTimestamp: null == (t = g[r.id]) ? void 0 : t.fullProfileLoadedTimestamp,
        flags: _,
        collectibles: h,
        displayNameStyles: m
    }), B(n, g[r.id])
}

function eo(e) {
    let {
        guildId: t,
        userId: n,
        roleId: r
    } = e, i = P[t];
    if (null == i) return !1;
    let a = I.A.getGuild(t);
    if (null == a) return R.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), !1;
    let o = i[n];
    if (null == o || o.roles.includes(r)) return !1;
    o.roles = [...o.roles, r];
    let s = Z(A.A.getUnsafeMutableRoles(a.id), o.roles);
    return i[n] = C({}, o, s), !0
}

function es(e) {
    let {
        guildId: t,
        userId: n,
        roleId: r
    } = e, i = P[t];
    if (null == i) return !1;
    let a = I.A.getGuild(t);
    if (null == a) return R.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), !1;
    let o = i[n];
    if (null == o || !o.roles.includes(r)) return !1;
    o.roles = o.roles.filter(e => e !== r);
    let s = Z(A.A.getUnsafeMutableRoles(a.id), o.roles);
    return i[n] = C({}, o, s), !0
}

function el(e) {
    let {
        guildMember: t,
        guildId: n
    } = e, r = P[n];
    if (null == r) return !1;
    let i = I.A.getGuild(n);
    if (null == i) return R.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), !1;
    r[t.user.id] = Q({
        userId: t.user.id,
        nick: t.nick,
        guildId: n,
        avatar: t.avatar,
        avatarDecoration: em(t),
        guildRoles: A.A.getUnsafeMutableRoles(i.id),
        roles: t.roles,
        premiumSince: t.premium_since,
        isPending: t.pending,
        joinedAt: t.joined_at,
        communicationDisabledUntil: t.communication_disabled_until,
        unusualDMActivityUntil: t.unusual_dm_activity_until,
        flags: t.flags,
        fullProfileLoadedTimestamp: Date.now(),
        collectibles: (0, f.t)(t.collectibles),
        displayNameStyles: (0, _.mT)(t.display_name_styles)
    }), B(n, r[t.user.id])
}

function ec(e) {
    let t = !1;
    for (let n of e.chunks) t = eh(n.guildId, n.members) || t;
    return t
}

function eu(e) {
    return e.members.length > 0 && eh(e.guildId, e.members)
}

function ed(e) {
    let {
        guildId: t,
        members: n
    } = e;
    return eh(t, n.map(e => e.member).filter(E.Vq))
}

function ef(e) {
    let {
        guildId: t,
        owners: n
    } = e;
    return eh(t, n)
}

function ep(e) {
    let {
        guildId: t,
        threads: n
    } = e;
    return eh(t, Object.values(n).reduce((e, t) => {
        var n, r, i;
        if (null != t.owner && e.push(t.owner), (null == t || null == (n = t.first_message) ? void 0 : n.message_snapshots) != null) {
            let n = t.first_message.message_snapshots[0];
            (null == (r = n.moderator_report) ? void 0 : r.reported_member) != null && e.push(n.moderator_report.reported_member), (null == (i = n.moderator_report) ? void 0 : i.reporting_member) != null && e.push(n.moderator_report.reporting_member)
        }
        return e
    }, []))
}

function e_(e) {
    let {
        guildId: t,
        addedMembers: n
    } = e;
    return null != n && eh(t, n.map(e => e.member).filter(E.Vq))
}

function eh(e, t) {
    let n = P[e];
    if (null == n) return !1;
    let r = I.A.getGuild(e);
    return null == r ? (R.warn("Guild ".concat(e, " not found during batchUpdateGuildMembers.")), !1) : (t.forEach(t => {
        var i;
        let a = n[t.user.id];
        n[t.user.id] = Q({
            userId: t.user.id,
            nick: t.nick,
            guildId: e,
            avatar: t.avatar,
            avatarDecoration: em(t),
            guildRoles: A.A.getUnsafeMutableRoles(r.id),
            roles: t.roles,
            premiumSince: t.premium_since,
            isPending: t.pending,
            joinedAt: t.joined_at,
            communicationDisabledUntil: t.communication_disabled_until,
            flags: t.flags,
            fullProfileLoadedTimestamp: null == a ? void 0 : a.fullProfileLoadedTimestamp,
            unusualDMActivityUntil: null != (i = t.unusual_dm_activity_until) ? i : null == a ? void 0 : a.unusualDMActivityUntil,
            collectibles: (0, f.t)(t.collectibles),
            displayNameStyles: (0, _.mT)(t.display_name_styles)
        }), B(e, n[t.user.id])
    }), U++, !0)
}

function em(e) {
    return (0, d.Xq)(e.avatar_decoration_data)
}

function eg(e) {
    let {
        guildId: t,
        members: n
    } = e;
    return eh(t, n.map(e => {
        let {
            member: t
        } = e;
        return t
    }))
}

function eE(e) {
    let {
        guildId: t,
        user: n
    } = e;
    eb(t, n.id)
}

function ey(e) {
    let {
        guildId: t,
        userId: n
    } = e;
    eb(t, n)
}

function eb(e, t) {
    let n = P[e];
    if (null == n || null == n[t]) return !1;
    delete n[t], H(e, t), U++
}

function eO(e) {
    let {
        guild: t
    } = e;
    return eA(t)
}

function ev(e, t) {
    return eA({
        id: e,
        members: t.filter(c.A).map(e => e.member)
    })
}

function eA(e) {
    let t = e.id;
    t in P || (P[e.id] = {});
    let n = I.A.getGuild(t);
    if (null == n) return !1;
    let r = P[t];
    for (let a of e.members) {
        var i;
        let o = a.user.id,
            s = r[o],
            l = Q({
                userId: o,
                nick: a.nick,
                guildId: e.id,
                avatar: a.avatar,
                avatarDecoration: em(a),
                guildRoles: A.A.getUnsafeMutableRoles(n.id),
                roles: a.roles,
                premiumSince: a.premium_since,
                isPending: a.pending,
                joinedAt: a.joined_at,
                communicationDisabledUntil: a.communication_disabled_until,
                fullProfileLoadedTimestamp: null == s ? void 0 : s.fullProfileLoadedTimestamp,
                flags: a.flags,
                unusualDMActivityUntil: null != (i = a.unusual_dm_activity_until) ? i : null == s ? void 0 : s.unusualDMActivityUntil,
                collectibles: (0, f.t)(a.collectibles),
                displayNameStyles: (0, _.mT)(a.display_name_styles)
            });
        r[o] = l, B(t, l)
    }
    return !0
}

function eI(e) {
    let {
        guild: t
    } = e;
    delete P[t.id], delete D[t.id], H(t.id)
}

function eS(e) {
    let t = P[e.guildId];
    if (null == t) return !1;
    let n = I.A.getGuild(e.guildId);
    if (null == n) return R.warn("Guild ".concat(e.guildId, " not found during ").concat(e.type, ".")), !1;
    let r = O.default.getId();
    for (let i of b.default.keys(t)) {
        let a = t[i];
        if (null != a.roles && a.roles.length > 0 || null != a.colorString || null != a.hoistRoleId) {
            let o = i === r && "GUILD_ROLE_DELETE" === e.type ? a.roles.filter(t => t !== e.roleId) : a.roles;
            t[i] = Q({
                userId: i,
                nick: a.nick,
                guildId: e.guildId,
                avatar: a.avatar,
                avatarDecoration: a.avatarDecoration,
                guildRoles: A.A.getUnsafeMutableRoles(n.id),
                roles: o,
                premiumSince: a.premiumSince,
                isPending: a.isPending,
                joinedAt: a.joinedAt,
                flags: a.flags,
                fullProfileLoadedTimestamp: null == a ? void 0 : a.fullProfileLoadedTimestamp,
                collectibles: a.collectibles,
                displayNameStyles: a.displayNameStyles
            }), B(e.guildId, t[i])
        }
    }
}

function eT(e) {
    var t, n, r;
    let {
        guildId: i,
        roles: o,
        addedRoleIds: s,
        removedRoleIds: l,
        flags: c
    } = e, u = O.default.getId(), d = P[i], f = null != d ? d[u] : null;
    if (null == f) return !1;
    let p = I.A.getGuild(i);
    if (null == p) return !1;
    let _ = null != (t = F[i]) ? t : {};
    F[i] = {
        added: a().difference(a().union(null != (n = _.added) ? n : [], s), null != l ? l : []),
        removed: a().difference(a().union(null != (r = _.removed) ? r : [], l), null != s ? s : [])
    }, d[u] = Q({
        userId: u,
        guildId: i,
        nick: f.nick,
        avatar: f.avatar,
        avatarDecoration: f.avatarDecoration,
        guildRoles: A.A.getUnsafeMutableRoles(p.id),
        roles: null != o ? o : f.roles,
        premiumSince: f.premiumSince,
        isPending: f.isPending,
        joinedAt: f.joinedAt,
        flags: null != c ? c : f.flags,
        fullProfileLoadedTimestamp: f.fullProfileLoadedTimestamp,
        collectibles: f.collectibles,
        displayNameStyles: f.displayNameStyles
    })
}

function eC(e) {
    let {
        guildId: t
    } = e;
    if (null == t) return !1;
    delete F[t]
}

function eN(e) {
    let {
        guildId: t
    } = e, n = P[t];
    if (null == n) return !1;
    let r = I.A.getGuild(t);
    if (null == r) return R.warn("Guild ".concat(t, " not found during IMPERSONATE_UPDATE.")), !1;
    let i = O.default.getId(),
        a = n[i];
    n[i] = Q({
        userId: i,
        nick: a.nick,
        guildId: t,
        avatar: a.avatar,
        avatarDecoration: a.avatarDecoration,
        guildRoles: A.A.getUnsafeMutableRoles(r.id),
        roles: a.roles,
        premiumSince: a.premiumSince,
        isPending: a.isPending,
        joinedAt: a.joinedAt,
        communicationDisabledUntil: a.communicationDisabledUntil,
        fullProfileLoadedTimestamp: a.fullProfileLoadedTimestamp,
        flags: a.flags,
        collectibles: a.collectibles,
        displayNameStyles: a.displayNameStyles
    })
}

function ew(e, t) {
    if ((null == e ? void 0 : e.members) == null || null == t) return !1;
    eA({
        id: t,
        members: Object.entries(e.members).map(t => {
            var n;
            let [r, i] = t, a = null == e || null == (n = e.users) ? void 0 : n[r];
            if (null != a) return w(C({}, i), {
                user: a
            })
        }).filter(e => null != e)
    })
}

function eR(e, t) {
    var n;
    let r = !1;
    return null == (n = e.message_snapshots) || n.forEach(t => {
        var n, i;
        ew(null == (n = t.message) ? void 0 : n.resolved, null == (i = e.message_reference) ? void 0 : i.guild_id) && (r = !0)
    }), ew(e.resolved, t) || r
}

function eP(e) {
    let {
        message: t,
        guildId: n
    } = e;
    return eR(t, n)
}

function eD(e) {
    let t = v.A.getChannel(e.channel_id);
    eR(e, null == t ? void 0 : t.guild_id)
}

function eL(e) {
    let {
        messages: t
    } = e;
    t.forEach(e => eD(e))
}

function ex(e) {
    let {
        pins: t
    } = e;
    t.forEach(e => {
        let {
            message: t
        } = e;
        return eD(t)
    })
}

function eM(e) {
    let {
        data: t
    } = e, n = [];
    t.forEach(e => {
        let {
            messages: t
        } = e;
        t.forEach(e => {
            e.forEach(e => {
                n.push(e)
            })
        })
    }), eL({
        messages: n
    })
}

function ej(e) {
    let {
        location: t,
        participants: n
    } = e, r = (0, u.D)(t);
    return null != r && ev(r, n)
}

function ek(e) {
    let t = v.A.getChannel(e.channelId);
    return ew(e.resolved, null == t ? void 0 : t.guild_id)
}
class eU extends(r = s.Ay.Store) {
    initialize() {
        this.waitFor(O.default, v.A, A.A, I.A, g.A)
    }
    getMutableAllGuildsAndMembers() {
        return P
    }
    memberOf(e) {
        return a()(P).toPairs().filter(t => {
            let [n, r] = t;
            return null != r[e]
        }).map(e => {
            let [t] = e;
            return t
        }).value()
    }
    getNicknameGuildsMapping(e) {
        let t = {};
        for (let r in P) {
            var n;
            let i = null == (n = P[r][e]) ? void 0 : n.nick;
            null != i && (Object.prototype.hasOwnProperty.call(t, i) || (t[i] = []), t[i].push(r))
        }
        return t
    }
    getNicknames(e) {
        return Object.keys(this.getNicknameGuildsMapping(e))
    }
    isMember(e, t) {
        if (null == e || null == t) return !1;
        let n = P[e];
        return null != n && null != n[t]
    }
    isGuestOrLurker(e, t) {
        var n;
        if (null == e || null == t) return !1;
        let r = P[e];
        return null != r && (null == (n = r[t]) ? void 0 : n.joinedAt) == null
    }
    isCurrentUserGuest(e) {
        if (null == e) return !1;
        let t = O.default.getId(),
            n = P[e];
        if (null == n || null == n[t]) return !1;
        let r = n[t].flags;
        return null != r && (0, o.Lt)(r, S.D.IS_GUEST)
    }
    getMemberIds(e) {
        if (null == e) return [];
        let t = P[e];
        return null == t ? [] : b.default.keys(t)
    }
    getMembers(e) {
        if (null == e) return [];
        let t = P[e];
        return null == t ? [] : Object.values(t)
    }
    getTrueMember(e, t) {
        let n = P[e];
        return null != n ? n[t] : null
    }
    getMember(e, t) {
        let n = this.getTrueMember(e, t);
        if (null != n && t === O.default.getId() && (g.A.isViewingRoles(e) || g.A.isFullServerPreview(e))) {
            var r;
            return null != (r = L[e]) ? r : n
        }
        return n
    }
    getSelfMember(e) {
        return this.getMember(e, O.default.getId())
    }
    getSelfMemberJoinedAt(e) {
        let t = D[e];
        if (null != t) return t;
        let n = this.getSelfMember(e);
        if (null == n || null == n.joinedAt) return null;
        let r = new Date(n.joinedAt);
        return D[e] = r, r
    }
    getCachedSelfMember(e) {
        var t;
        return null != (t = x[e]) ? t : null
    }
    getNick(e, t) {
        if (null == e || null == t) return null;
        let n = this.getMember(e, t);
        return null != n ? n.nick : null
    }
    getCommunicationDisabledUserMap() {
        return M
    }
    getCommunicationDisabledVersion() {
        return k
    }
    getPendingRoleUpdates(e) {
        var t;
        return null != (t = F[e]) ? t : V
    }
    getMemberRoleWithPendingUpdates(e, t) {
        var n, r;
        let i = null != (n = null == (r = this.getMember(e, t)) ? void 0 : r.roles) ? n : [],
            o = F[e];
        return null == o ? i : a().difference(a().union(i, o.added), o.removed)
    }
    getMemberVersion() {
        return U
    }
}
T(eU, "displayName", "GuildMemberStore");
let eG = new eU(l.h, {
    CONNECTION_OPEN: X,
    CONNECTION_OPEN_SUPPLEMENTAL: J,
    OVERLAY_INITIALIZE: ee,
    CACHE_LOADED: et,
    CACHE_LOADED_LAZY: en,
    GUILD_CREATE: eO,
    GUILD_DELETE: eI,
    GUILD_MEMBER_ADD: ea,
    GUILD_MEMBER_UPDATE: ea,
    GUILD_MEMBER_UPDATE_LOCAL: eT,
    GUILD_MEMBERS_CHUNK_BATCH: ec,
    GUILD_MEMBER_REMOVE: eE,
    GUILD_MEMBER_REMOVE_LOCAL: ey,
    THREAD_MEMBER_LIST_UPDATE: ed,
    THREAD_MEMBERS_UPDATE: e_,
    LOAD_ARCHIVED_THREADS_SUCCESS: ef,
    LOAD_FORUM_POSTS: ep,
    GUILD_ROLE_UPDATE: eS,
    GUILD_ROLE_DELETE: eS,
    GUILD_ROLE_MEMBER_REMOVE: es,
    GUILD_ROLE_MEMBER_ADD: eo,
    GUILD_MEMBER_PROFILE_UPDATE: el,
    IMPERSONATE_UPDATE: eN,
    IMPERSONATE_STOP: eN,
    PASSIVE_UPDATE_V2: eu,
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: eC,
    LOCAL_MESSAGES_LOADED: ei,
    MESSAGE_CREATE: eP,
    MESSAGE_UPDATE: eP,
    LOAD_MESSAGES_SUCCESS: eL,
    LOAD_MESSAGES_AROUND_SUCCESS: eL,
    LOAD_RECENT_MENTIONS_SUCCESS: eL,
    LOAD_PINNED_MESSAGES_SUCCESS: ex,
    SEARCH_MESSAGES_SUCCESS: eM,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: eM,
    MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eg,
    EMBEDDED_ACTIVITY_UPDATE_V2: ej,
    INTERACTION_MODAL_CREATE: ek
})