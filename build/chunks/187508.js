/** chunk id: 187508, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => eo,
    pK: () => V
}), n(667532), n(321073);
var r, i = n(735438),
    a = n.n(i),
    o = n(311907),
    s = n(506774),
    l = n(499979),
    c = n(73153),
    u = n(323073),
    d = n(141468),
    f = n(451919),
    p = n(143413),
    _ = n(204162),
    h = n(383233),
    m = n(961350),
    g = n(734057),
    E = n(320501),
    y = n(222823),
    b = n(994500),
    O = n(967198),
    v = n(543465),
    A = n(287809),
    I = n(652215);

function S(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            S(e, t, n[t])
        })
    }
    return e
}
let C = "recentMentionFilterSettings",
    N = [],
    w = {},
    R = {},
    P = !1,
    D = !0,
    L = s.w.get(C, {
        guildFilter: I.KE7.ALL_SERVERS,
        everyoneFilter: !0,
        roleFilter: !0
    }),
    x = !1,
    M = 0,
    j = !1;

function k(e) {
    w = {}, e.forEach(e => {
        null == w[e.getChannelId()] && (w[e.getChannelId()] = 0), w[e.getChannelId()]++
    })
}

function U(e) {
    let {
        addedMessages: t,
        deletedMessages: n
    } = e;
    null != t && t.forEach(e => {
        null == w[e.getChannelId()] && (w[e.getChannelId()] = 0), w[e.getChannelId()]++
    }), null != n && n.forEach(e => {
        null != w[e.getChannelId()] && (w[e.getChannelId()] = Math.max(0, w[e.getChannelId()] - 1))
    })
}

function G(e) {
    let {
        guildId: t
    } = e;
    P = !0, null == t && L.guildFilter === I.KE7.THIS_SERVER && Q({
        guildFilter: I.KE7.ALL_SERVERS
    })
}

function F(e) {
    if (e instanceof h.Ay) return e;
    let t = E.A.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, d.rh)(e)
}

function V(e) {
    let t = g.A.getBasicChannel(e.channel_id);
    if (null == t || !I.kvI.GUILD_TEXTUAL.has(t.type) || v.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) || (0, u.UK)(t.id)) return !1;
    switch (v.Ay.resolvedMessageNotifications(t)) {
        case I.orn.ALL_MESSAGES:
            return !0;
        case I.orn.ONLY_MENTIONS:
            let n = v.Ay.isSuppressEveryoneEnabled(t.guild_id),
                r = v.Ay.isSuppressRolesEnabled(t.guild_id),
                i = A.default.getCurrentUser();
            if (null == i) return !1;
            return (0, f.Ay)({
                message: e,
                userId: i.id,
                suppressEveryone: n,
                suppressRoles: r
            });
        case I.orn.NO_MESSAGES:
        default:
            return !1
    }
}

function B(e) {
    let {
        hasMoreAfter: t,
        messages: n,
        isAfter: r
    } = e, i = a().map(n, F);
    U({
        addedMessages: i
    }), r ? N = N.concat(i) : (N = i, R = {}), a().forEach(i, e => {
        R[e.id] = !0
    }), P = !1, D = t, M = (0, l.tB)(), x = !0
}

function H() {
    P = !1
}

function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if ((0, p.A)(e) && !I.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
    null == t && (t = e.channel_id);
    let n = g.A.getChannel(t);
    if (null == n || n.type === I.rbe.DM || L.guildFilter === I.KE7.THIS_SERVER && n.getGuildId() !== O.A.getGuildId()) return null;
    let r = m.default.getId();
    if (b.A.isBlockedOrIgnoredForMessage(e) || (0, _.A)(e, r)) return null;
    e = F(e);
    let i = !L.everyoneFilter,
        a = !L.roleFilter;
    return (0, f.Ay)({
        message: e,
        userId: r,
        suppressEveryone: i,
        suppressRoles: a
    }) ? (j && y.Ay.ackMessageId(n.id) !== e.id && (0, f.Ay)({
        message: e,
        userId: r,
        suppressEveryone: v.Ay.isSuppressEveryoneEnabled(n.getGuildId()),
        suppressRoles: v.Ay.isSuppressRolesEnabled(n.getGuildId())
    }) && (j = !1), e) : null
}

function W(e) {
    let {
        channelId: t,
        message: n
    } = e, r = A.default.getCurrentUser();
    if (null == r || !(0, f.bG)({
            rawMessage: n,
            userId: r.id,
            suppressRoles: !1,
            suppressEveryone: !1
        })) return !1;
    let i = Y(n, t);
    if (null == i) return !1;
    (N = N.slice()).unshift(i), R[i.id] = !0, U({
        addedMessages: [i]
    })
}

function K(e) {
    let t = e.message.id;
    if (null == t || null == R[t]) return !1;
    let n = a().findIndex(N, e => {
            let {
                id: n
            } = e;
            return n === t
        }),
        r = (N = N.slice())[n];
    null != r && (N[n] = (0, d.IU)(r, e.message))
}

function z(e) {
    if (null == R[e]) return !1;
    delete R[e], U({
        deletedMessages: a().filter(N, t => {
            let {
                id: n
            } = t;
            return n === e
        })
    }), N = a().filter(N, t => {
        let {
            id: n
        } = t;
        return n !== e
    })
}

function q(e) {
    let {
        id: t
    } = e;
    return z(t)
}

function Z(e) {
    let {
        ids: t
    } = e;
    a().forEach(t, z)
}

function Q(e) {
    let t = T({}, L);
    L = a().defaults(a().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), L), s.w.set(C, L);
    let n = (e, n) => t[e] !== L[e] && L[e] === n,
        r = n("guildFilter", I.KE7.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
    R = {};
    let i = [];
    r && N.forEach(e => {
        let t = Y(e);
        null != t && (i.push(t), R[t.id] = !0)
    }), k(N = i), 0 === N.length && (x = !1)
}

function X() {
    if (L.guildFilter !== I.KE7.THIS_SERVER) return !1;
    x = !1
}

function J() {
    N = [], R = {}, x = !1, j = !1, w = {}
}

function $(e) {
    let {
        guild: t
    } = e, n = [];
    N = a().filter(N, e => {
        let r = g.A.getChannel(e.channel_id);
        return null != r && r.getGuildId() !== t.id || (delete R[e.id], n.push(e), !1)
    }), U({
        deletedMessages: n
    })
}

function ee() {
    U({
        deletedMessages: a().filter(N, e => b.A.isBlockedOrIgnoredForMessage(e))
    }), N = N.filter(e => !b.A.isBlockedOrIgnoredForMessage(e))
}

function et(e) {
    let {
        channel: t
    } = e, n = [];
    N = a().filter(N, e => e.channel_id !== t.id || (delete R[e.id], n.push(e), !1)), U({
        deletedMessages: n
    })
}

function en(e) {
    J()
}

function er(e) {
    let {
        size: t
    } = e;
    U({
        deletedMessages: N.slice(t)
    });
    for (let e = t; e < N.length; ++e) delete R[N[e].id];
    N.length > (N = N.slice(0, t)).length && (D = !0)
}

function ei(e) {
    j = !0
}
class ea extends(r = o.Ay.Store) {
    initialize() {
        this.waitFor(m.default, g.A, E.A, y.Ay, b.A, O.A, v.Ay, A.default)
    }
    get hasLoadedEver() {
        return x
    }
    get lastLoaded() {
        return M
    }
    getMentions() {
        return x || N.length > 0 ? N : null
    }
    getSettingsFilteredMentions() {
        return x || N.length > 0 ? N.filter(V) : null
    }
    hasMention(e) {
        return R[e]
    }
    get loading() {
        return P
    }
    get hasMore() {
        return D
    }
    get guildFilter() {
        return L.guildFilter
    }
    get everyoneFilter() {
        return L.everyoneFilter
    }
    get roleFilter() {
        return L.roleFilter
    }
    get mentionsAreStale() {
        return j
    }
    get mentionCountByChannel() {
        return w
    }
    getMentionCountForChannel(e) {
        var t;
        return null != (t = w[e]) ? t : 0
    }
}
S(ea, "displayName", "RecentMentionsStore");
let eo = new ea(c.h, {
    LOAD_RECENT_MENTIONS: G,
    LOAD_RECENT_MENTIONS_SUCCESS: B,
    LOAD_RECENT_MENTIONS_FAILURE: H,
    SET_RECENT_MENTIONS_FILTER: Q,
    CLEAR_MENTIONS: en,
    TRUNCATE_MENTIONS: er,
    CHANNEL_SELECT: X,
    CONNECTION_OPEN: J,
    GUILD_DELETE: $,
    MESSAGE_CREATE: W,
    MESSAGE_UPDATE: K,
    MESSAGE_DELETE: q,
    RECENT_MENTION_DELETE: q,
    MESSAGE_DELETE_BULK: Z,
    CHANNEL_DELETE: et,
    THREAD_DELETE: et,
    RELATIONSHIP_ADD: ee,
    RELATIONSHIP_REMOVE: ee,
    RELATIONSHIP_UPDATE: ee,
    SET_RECENT_MENTIONS_STALE: ei
})