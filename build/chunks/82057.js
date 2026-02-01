/** chunk id: 82057, original params: e,t,n (module,exports,require) **/
"use strict";
let r;
n.d(t, {
    A: () => Z
}), n(896048);
var i, a = n(735438),
    o = n.n(a),
    s = n(311907),
    l = n(73153),
    c = n(432703),
    u = n(49463),
    d = n(655116),
    f = n(961350),
    p = n(963307),
    _ = n(761640),
    h = n(734057),
    m = n(919638),
    g = n(696451),
    E = n(71393),
    y = n(383501),
    b = n(994500),
    O = n(309010),
    v = n(967198),
    A = n(652215);

function I(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let S = new c.Ay(e => {
    for (let t in e) null != E.A.getGuild(t) || m.A.isUnavailable(t) || delete e[t];
    l.h.dispatch({
        type: "GUILD_SUBSCRIPTIONS_FLUSH",
        subscriptions: e
    })
});

function T(e, t) {
    let n = {};
    S.forEach(i => {
        var a;
        i !== v.A.getGuildId() && i !== y.A.getGuildId() && i !== (null == (a = h.A.getChannel(O.A.getChannelId())) ? void 0 : a.getGuildId()) && (null == r || r.guildId !== i) && (S.clearWithoutFlushing(i, e), t && (n[i] = S.get(i)))
    }), o().isEmpty(n) || l.h.dispatch({
        type: "GUILD_SUBSCRIPTIONS_FLUSH",
        subscriptions: n
    })
}

function C(e, t) {
    return S.subscribeToGuild(e), null != t && _.Ay.getSection(t) === A.YvQ.MEMBERS && N(e, t, c.LD)
}

function N(e, t, n) {
    if (t === p.sN) return S.subscribeChannel(e, t, n);
    let r = h.A.getChannel(t);
    if (null == r) return !1;
    let i = r.getGuildId();
    return (i !== e && e === A.YYv && S.subscribeToGuild(i), null != r && r.isThread()) ? r.type === A.rbe.ANNOUNCEMENT_THREAD ? S.subscribeChannel(i, r.parent_id, n) : !!r.isActiveThread() && S.subscribeThreadMemberList(i, t, O.A.getChannelId()) : S.subscribeChannel(i, t, n)
}

function w(e) {
    let {
        type: t
    } = e;
    "CONNECTION_OPEN" === t && T(!0, !1);
    let n = v.A.getGuildId();
    null != n && C(n, O.A.getChannelId(n));
    let r = {};
    S.forEach(e => {
        null == E.A.getGuild(e) ? S.clearWithoutFlushing(e, !0) : r[e] = S.get(e)
    }), o().isEmpty(r) || l.h.dispatch({
        type: "GUILD_SUBSCRIPTIONS_FLUSH",
        subscriptions: r
    })
}

function R() {
    T(!1, !1)
}

function P(e) {
    let {
        idle: t
    } = e;
    if (!t) return !1;
    T(!1, !0)
}

function D() {
    S.reset()
}

function L(e) {
    let {
        guild: t
    } = e;
    t.id === v.A.getGuildId() && H()
}

function x(e) {
    let {
        guild: t
    } = e;
    S.clearWithoutFlushing(t.id, !0)
}

function M(e) {
    let {
        guildId: t,
        userIds: n
    } = e;
    return n.forEach(e => {
        e !== f.default.getId() && S.subscribeUser(t, e)
    }), !1
}

function j(e) {
    let {
        guildId: t,
        userIds: n
    } = e;
    return n.forEach(e => {
        S.unsubscribeUser(t, e)
    }), !1
}

function k(e) {
    let {
        guildId: t
    } = e;
    S.subscribeToMemberUpdates(t)
}

function U(e) {
    let {
        guildId: t
    } = e;
    S.unsubscribeFromMemberUpdates(t)
}

function G(e) {
    let {
        guildId: t
    } = e;
    return S.subscribeToGuild(t)
}

function V(e) {
    let {
        guildId: t,
        channelId: n,
        ranges: r
    } = e;
    return N(t, n, r)
}

function F(e) {
    let {
        guildId: t,
        channelId: n
    } = e;
    return C(t, n)
}

function B(e) {
    let {
        guildId: t,
        channelId: n
    } = e;
    return !m.A.isUnavailable(t) && C(t, n)
}

function H() {
    return C(v.A.getGuildId(), O.A.getChannelId())
}

function Y(e) {
    let {
        channel: t
    } = e;
    return t.isArchivedThread() ? S.unsubscribeThreadMemberList(t.guild_id, t.id) : !!t.isActiveThread() && O.A.getChannelId() === t.id && void S.subscribeThreadMemberList(t.guild_id, t.id, O.A.getChannelId())
}

function W(e) {
    let {
        channel: t
    } = e;
    return S.unsubscribeThreadMemberList(t.guild_id, t.id)
}

function K() {
    let e = d.A.getSyncingWith();
    if (null == e) null != r && (S.unsubscribeUser(r.guildId, r.userId), r = null);
    else {
        let {
            userId: t
        } = e;
        if (null != r && r.userId === t || b.A.isFriend(t)) return !1;
        let n = g.Ay.memberOf(t);
        if (0 === n.length) return !1;
        let [i] = n;
        r = {
            guildId: i,
            userId: t
        }, S.subscribeUser(i, t)
    }
    return !1
}

function z(e) {
    let {
        guildIds: t
    } = e;
    for (let e of t) null != e && S.subscribeToGuild(e);
    return !1
}
class q extends(i = s.Ay.Store) {
    initialize() {
        this.waitFor(f.default, _.Ay, h.A, u.A, m.A, g.Ay, E.A, y.A, b.A, O.A, v.A, d.A), this.syncWith([d.A], K), this.syncWith([_.Ay], H)
    }
    getSubscribedThreadIds() {
        return S.getSubscribedThreadIds()
    }
    isSubscribedToThreads(e) {
        return S.isSubscribedToThreads(e)
    }
    isSubscribedToAnyMember(e) {
        return S.isSubscribedToAnyMember(e)
    }
    isSubscribedToMemberUpdates(e) {
        return S.isSubscribedToMemberUpdates(e)
    }
    isSubscribedToAnyGuildChannel(e) {
        let t = S.get(e).channels;
        return null != t && Object.keys(t).length > 0
    }
}
I(q, "displayName", "GuildSubscriptionsStore");
let Z = new q(l.h, {
    CONNECTION_OPEN: w,
    CONNECTION_RESUMED: w,
    CONNECTION_CLOSED: R,
    IDLE: P,
    LOGOUT: D,
    VOICE_CHANNEL_SELECT: B,
    CHANNEL_SELECT: B,
    GUILD_CREATE: L,
    GUILD_DELETE: x,
    GUILD_SUBSCRIPTIONS_MEMBERS_ADD: M,
    GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: j,
    GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: k,
    GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: U,
    GUILD_SUBSCRIPTIONS_CHANNEL: V,
    GUILD_SUBSCRIPTIONS: G,
    CHANNEL_PRELOAD: F,
    INBOX_OPEN: z,
    THREAD_UPDATE: Y,
    THREAD_DELETE: W,
    THREAD_LIST_SYNC: H
})