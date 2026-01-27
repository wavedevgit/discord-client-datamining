/** Chunk was on web.js **/
/** chunk id: 576705, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => ee
}), n(896048);
var r, i = n(735438),
    a = n.n(i),
    o = n(136722),
    s = n(311907),
    l = n(73153),
    c = n(164956),
    u = n(857071),
    d = n(446600),
    f = n(152007),
    p = n(882733),
    _ = n(95701),
    h = n(260509),
    m = n(427157),
    g = n(799422),
    E = n(860689),
    y = n(488926),
    b = n(734057),
    O = n(696451),
    v = n(71393),
    A = n(287809),
    I = n(652215),
    S = n(402655);

function T(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let C = {},
    N = {},
    w = {},
    R = 0;

function P(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = C[e];
    if (null != n) return n;
    let r = A.default.getCurrentUser();
    if (null == r) return y.x3;
    let i = v.A.getGuild(e);
    return null == i ? y.x3 : C[e] = y.cc({
        user: r,
        context: i,
        checkElevated: t
    })
}

function D(e) {
    var t;
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = A.default.getCurrentUser();
    if (null == r) return y.x3;
    let i = b.A.getChannel(e);
    if (null == i) return y.x3;
    let o = i.getGuildId(),
        s = null != o && (u.A.isLurking(o) || (null == (t = O.Ay.getMember(o, r.id)) ? void 0 : t.isPending));
    return !i.isScheduledForDeletion() && !s && a().isEmpty(i.permissionOverwrites) && null != o ? P(o) : y.cc({
        user: r,
        context: i,
        checkElevated: n
    })
}

function L(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = N[e];
    return null != n ? n : N[e] = D(e, t)
}

function x(e) {
    if (null != e) {
        var t;
        w[e] = (null != (t = w[e]) ? t : 0) + 1
    }
}

function M() {
    for (let e in C = {}, N = {}, w) w[e] += 1;
    R += 1
}

function j() {
    M()
}

function k() {
    $()
}

function U() {
    M()
}

function G(e) {
    var t;
    let {
        user: n
    } = e;
    if (n.id !== (null == (t = A.default.getCurrentUser()) ? void 0 : t.id)) return !1;
    M()
}

function F(e) {
    let {
        channel: {
            id: t
        }
    } = e, n = b.A.getChannel(t);
    if (null == n || n.isPrivate()) return !1;
    let r = A.default.getCurrentUser(),
        i = y.cc({
            user: r,
            context: n
        });
    if (N[n.id] === i) return !1;
    N[n.id] = i, R += 1, x(n.getGuildId())
}

function V(e) {
    let {
        channels: t
    } = e, n = !1;
    for (let {
            id: e
        }
        of t) {
        let t = b.A.getChannel(e);
        if (null == t || t.isPrivate()) continue;
        let r = A.default.getCurrentUser(),
            i = y.cc({
                user: r,
                context: t
            });
        N[t.id] !== i && (N[t.id] = i, x(t.getGuildId()), n = !0)
    }
    return !!n && (R += 1, n)
}

function B() {
    return !0
}

function H(e) {
    var t;
    return (null == (t = A.default.getCurrentUser()) ? void 0 : t.id) === e.userId && (x(e.guildId), !0)
}

function Y(e) {
    return !!(0, p.k)(e) && (x(e.guildId), !0)
}

function W(e) {
    let {
        messages: t
    } = e;
    return t.some(e => null != e.thread)
}

function K(e) {
    let {
        data: t
    } = e;
    return t.some(e => {
        let {
            messages: t,
            threads: n
        } = e;
        return n.length > 0 || t.some(e => e.some(e => null != e.thread))
    })
}

function z(e) {
    let {
        channel: t
    } = e;
    return delete N[t.id], R += 1, x(t.guild_id), !1
}

function q(e) {
    let {
        guildId: t
    } = e;
    delete C[t];
    let n = b.A.getMutableBasicGuildChannelsForGuild(t);
    a().forEach(n, e => {
        delete N[e.id]
    }), R += 1, x(t)
}

function Z(e) {
    let {
        instance: t
    } = e, n = b.A.getChannel(t.channel_id);
    if (null == n) return !1;
    let r = A.default.getCurrentUser(),
        i = y.cc({
            user: r,
            context: n
        });
    if (i === N[n.id]) return !1;
    N[n.id] = i, R += 1
}

function Q(e) {
    let {
        guildId: t
    } = e;
    delete C[t];
    let n = b.A.getMutableBasicGuildChannelsForGuild(t);
    a().forEach(n, e => {
        delete N[e.id]
    }), R += 1, x(t)
}

function X(e, t, n, r) {
    let i = y.x3;
    if (e instanceof _.YB) {
        if (_.Le.has(e.type)) {
            let i = b.A.getChannel(e.parent_id);
            return null == i ? y.x3 : y.TJ(e, X(i, t, n, r), f.A.hasJoined(e.id), O.Ay.isCurrentUserGuest(e.guild_id))
        }
        i = L(e.id)
    } else(0, E.fh)(e) && (i = P(e.id));
    return void 0 !== t || void 0 !== n || void 0 !== r ? y.cc({
        user: A.default.getCurrentUser(),
        context: e,
        overwrites: t,
        roles: n,
        checkElevated: !0,
        excludeGuildPermissions: r
    }) : i
}
class J extends(r = s.Ay.Store) {
    initialize() {
        this.waitFor(b.A, O.Ay, v.A, c.A, f.A, u.A, d.A, A.default)
    }
    getChannelPermissions(e) {
        return _.Le.has(e.type) ? D(e.id) : L(e.id)
    }
    getGuildPermissions(e) {
        return P(e.id)
    }
    getGuildPermissionProps(e) {
        let t = A.default.getCurrentUser();
        return {
            canManageGuild: this.can(I.xBc.MANAGE_GUILD, e),
            canManageChannels: this.can(I.xBc.MANAGE_CHANNELS, e),
            canManageRoles: this.can(I.xBc.MANAGE_ROLES, e),
            canManageBans: this.can(I.xBc.BAN_MEMBERS, e),
            canManageNicknames: this.can(I.xBc.MANAGE_NICKNAMES, e),
            canManageGuildExpressions: this.can(I.xBc.MANAGE_GUILD_EXPRESSIONS, e) || this.can(I.xBc.CREATE_GUILD_EXPRESSIONS, e),
            canViewAuditLog: this.can(I.xBc.VIEW_AUDIT_LOG, e),
            canViewAuditLogV2: this.can(I.xBc.VIEW_AUDIT_LOG, e),
            canManageWebhooks: this.can(I.xBc.MANAGE_WEBHOOKS, e),
            canViewGuildAnalytics: this.can(I.xBc.VIEW_GUILD_ANALYTICS, e),
            canAccessMembersPage: this.canAccessMemberSafetyPage(e),
            isGuildAdmin: this.can(I.xBc.ADMINISTRATOR, e),
            isOwner: null != t && (0, h.bM)(e, t),
            isOwnerWithRequiredMfaLevel: null != t && (0, h.ok)(e, t),
            guild: e
        }
    }
    canAccessMemberSafetyPage(e) {
        return o.X8(P(e.id), S.M)
    }
    canAccessGuildSettings(e) {
        return o.X8(P(e.id), y.yC)
    }
    canWithPartialContext(e, t) {
        return "channelId" in t && "string" == typeof t.channelId ? this.can(e, b.A.getChannel(t.channelId)) : "guildId" in t && "string" == typeof t.guildId && this.can(e, v.A.getGuild(t.guildId))
    }
    can(e, t, n, r, i) {
        let a = X(t, n, r, i);
        return o.zy(a, e)
    }
    canBasicChannel(e, t, n, r, i) {
        return "basicPermissions" in t ? g.A.has(t.basicPermissions, e) : o.zy(X(t, n, r, i), g.A.asBigFlag(e))
    }
    computePermissions(e, t, n, r) {
        return X(e, t, n, r)
    }
    computeBasicPermissions(e) {
        return "basicPermissions" in e ? e.basicPermissions : g.A.asBasicFlag(X(e))
    }
    canManageUser(e, t, n) {
        let r = t instanceof m.A ? t.id : t;
        if ((0, h.bM)(n, r)) return !1;
        let i = A.default.getCurrentUser();
        if (!this.can(e, n)) return !1;
        let a = null != i ? y.HJ(n, i.id) : void 0,
            o = y.HJ(n, r);
        return null != i && y.wO(n, i.id, a, o)
    }
    getHighestRole(e) {
        let t = A.default.getCurrentUser();
        return null != t ? y.HJ(e, t.id) : null
    }
    isRoleHigher(e, t, n) {
        let r = A.default.getCurrentUser(),
            i = c.A.isViewingRoles(e.id);
        return y.wO(e, i || null == r ? void 0 : r.id, t, n)
    }
    canImpersonateRole(e, t) {
        let n = this.getHighestRole(e),
            r = this.can(I.xBc.MANAGE_GUILD, e) && this.can(I.xBc.MANAGE_ROLES, e),
            i = this.isRoleHigher(e, n, t);
        return r && (i || t.id === (null == n ? void 0 : n.id))
    }
    getGuildVersion(e) {
        var t;
        return null != (t = w[e]) ? t : 0
    }
    getChannelsVersion() {
        return R
    }
}

function $() {
    N = {}, C = {}, w = {}, R = 0
}
T(J, "displayName", "PermissionStore");
let ee = new J(l.h, {
    BACKGROUND_SYNC: j,
    CONNECTION_OPEN: j,
    OVERLAY_INITIALIZE: j,
    CACHE_LOADED: j,
    CACHE_LOADED_LAZY: j,
    CONNECTION_CLOSED: k,
    GUILD_CREATE: U,
    GUILD_UPDATE: U,
    GUILD_DELETE: U,
    GUILD_MEMBER_ADD: G,
    GUILD_MEMBER_UPDATE: G,
    CURRENT_USER_UPDATE: G,
    CHANNEL_CREATE: F,
    THREAD_CREATE: B,
    THREAD_UPDATE: B,
    THREAD_LIST_SYNC: B,
    LOAD_THREADS_SUCCESS: B,
    LOAD_ARCHIVED_THREADS_SUCCESS: B,
    CHANNEL_UPDATES: V,
    LOAD_MESSAGES_SUCCESS: W,
    SEARCH_MESSAGES_SUCCESS: K,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: K,
    THREAD_MEMBER_UPDATE: H,
    THREAD_MEMBERS_UPDATE: Y,
    CHANNEL_DELETE: z,
    GUILD_ROLE_CREATE: q,
    GUILD_ROLE_UPDATE: q,
    GUILD_ROLE_DELETE: q,
    LOGOUT: $,
    STAGE_INSTANCE_CREATE: Z,
    STAGE_INSTANCE_UPDATE: Z,
    STAGE_INSTANCE_DELETE: Z,
    IMPERSONATE_UPDATE: Q,
    IMPERSONATE_STOP: Q
})