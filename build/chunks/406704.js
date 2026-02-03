/** chunk id: 406704, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    AI: () => v,
    D1: () => b,
    Et: () => P,
    H_: () => j,
    Id: () => D,
    NI: () => C,
    NR: () => T,
    R: () => I,
    Tb: () => O,
    UJ: () => x,
    _M: () => G,
    io: () => E,
    jr: () => L,
    lK: () => R,
    n: () => y,
    qi: () => U,
    s5: () => F
}), n(896048);
var r = n(735438),
    i = n.n(r),
    a = n(136722),
    o = n(311907),
    s = n(323073),
    l = n(143770),
    c = n(753727),
    u = n(143413),
    d = n(95701),
    f = n(961350),
    p = n(734057),
    _ = n(576705),
    h = n(661191),
    m = n(863005),
    g = n(652215);
let E = (0, l.A)({
    id: "2022-07_voice_in_threads",
    label: "Voice in Threads",
    kind: "guild",
    defaultConfig: {
        enabled: !1
    },
    treatments: [{
        id: 1,
        label: "On",
        config: {
            enabled: !0
        }
    }]
});

function y(e, t) {
    return A((0, o.bG)([_.A], () => {
        let t = e.isForumLikeChannel() ? g.xBc.SEND_MESSAGES : a.kg(g.xBc.CREATE_PUBLIC_THREADS, g.xBc.READ_MESSAGE_HISTORY);
        return _.A.can(t, e)
    }, [e]), e, t)
}

function b(e, t) {
    let n = e.isForumLikeChannel() ? g.xBc.SEND_MESSAGES : a.kg(g.xBc.CREATE_PUBLIC_THREADS, g.xBc.READ_MESSAGE_HISTORY);
    return A(_.A.can(n, e), e, t)
}

function O(e) {
    let t = (0, o.bG)([_.A], () => _.A.can(a.kg(g.xBc.CREATE_PRIVATE_THREADS), e), [e]);
    return e.type === g.rbe.GUILD_TEXT && A(t, e)
}

function v(e) {
    let t = y(e),
        n = O(e);
    return t || n
}

function A(e, t, n) {
    return !(__OVERLAY__ || !e || !d.wE.has(t.type) || null != n && (n.hasFlag(g.pr7.HAS_THREAD) || (0, u.A)(n))) && !0
}

function I(e) {
    let t = (0, o.bG)([p.A], () => p.A.getChannel(h.default.castMessageIdAsChannelId(e.id)), [e]);
    return S((0, o.bG)([_.A], () => _.A.can(g.xBc.VIEW_CHANNEL, t), [t]), e, t)
}

function S(e, t, n) {
    return !!t.hasFlag(g.pr7.HAS_THREAD) && null != n && !!e
}

function T(e) {
    return (0, o.cf)([m.A, _.A], () => {
        let t = m.A.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = m.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
            r = m.A.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            a = i()(n).some(e => _.A.can(g.xBc.VIEW_CHANNEL, e.channel)),
            o = i()(t).some(e => !(e.channel.id in n) && _.A.can(g.xBc.VIEW_CHANNEL, e.channel)),
            s = i()(r).some(e => _.A.can(g.xBc.VIEW_CHANNEL, e));
        return {
            hasActiveThreads: a || o || s,
            hasMoreActiveThreads: s || o
        }
    })
}

function C(e) {
    let t = (0, o.bG)([p.A], () => p.A.getChannel(null == e ? void 0 : e.parent_id)),
        n = (0, o.bG)([_.A], () => null != t && _.A.can(g.xBc.MANAGE_THREADS, t), [t]),
        r = (0, o.bG)([f.default], () => f.default.getId());
    return null != e && null != t && !!e.isThread() && (!!n || !e.isLockedThread() && e.ownerId === r)
}

function N(e, t) {
    return null != e && t.can(g.xBc.SEND_MESSAGES_IN_THREADS, e)
}

function w(e, t, n) {
    var r;
    return null != e && !!e.isThread() && ((null == (r = e.threadMetadata) ? void 0 : r.locked) ? n : t)
}

function R(e) {
    let t = (0, o.bG)([_.A], () => N(e, _.A)),
        n = j(e);
    return w(e, t, n)
}

function P(e) {
    let t = N(e, _.A),
        n = k(e);
    return w(e, t, n)
}

function D(e) {
    var t;
    let n = (0, o.bG)([_.A], () => null != e && _.A.can(g.xBc.SEND_MESSAGES_IN_THREADS, e));
    return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null == (t = e.threadMetadata) ? void 0 : t.locked) !== !0 && n)
}

function L(e) {
    var t;
    return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null == (t = e.threadMetadata) ? void 0 : t.locked) !== !0 && _.A.can(g.xBc.SEND_MESSAGES_IN_THREADS, e))
}

function x(e) {
    let t = _.A.can(g.xBc.MANAGE_THREADS, e);
    return e.isArchivedLockedThread() && !t
}

function M(e, t) {
    return null != e && t.can(g.xBc.MANAGE_THREADS, e)
}

function j(e) {
    return (0, o.bG)([_.A], () => k(e, [_.A]))
}

function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [_.A],
        [n] = t;
    return M(e, n)
}

function U(e) {
    return (0, o.bG)([p.A, _.A, f.default], () => {
        let t = p.A.getChannel(e);
        if (null == t) return !1;
        let n = f.default.getId();
        return t.type === g.rbe.PRIVATE_THREAD && t.ownerId === n || k(t, [_.A])
    })
}

function G(e) {
    let t = (0, c.A)(),
        n = (0, o.bG)([_.A], () => _.A.can(g.xBc.CONNECT, e)),
        r = D(e),
        i = E.useExperiment({
            guildId: e.guild_id,
            location: "e791ea_1"
        }, {
            autoTrackExposure: !1
        }).enabled,
        a = (0, s.a9)() && (0, s.UK)(e.id);
    return !t && e.isVocalThread() && i && n && r && !a
}

function F(e) {
    let t = j(e);
    return e.isLockedThread() && !t
}