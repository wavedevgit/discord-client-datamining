/** chunk id: 849736 params = (module,exports,require) **/
n.d(t, {
    J7: () => h,
    Nx: () => f,
    OE: () => D,
    SA: () => S,
    Tf: () => C,
    b3: () => P,
    b6: () => x,
    e7: () => g,
    gt: () => y,
    lL: () => O
});
var i = n(284009),
    l = n.n(i),
    r = n(136722),
    s = n(562465),
    a = n(308528);
n(686956);
var o = n(155718),
    c = n(58149),
    d = n(662502),
    u = n(309010),
    _ = n(977997),
    E = n(488926),
    T = n(323443),
    A = n(110618),
    I = n(602146),
    p = n(105530),
    N = n(418208),
    m = n(652215),
    R = n(835002);

function h(e, t) {
    let n = e.getGuildId();
    return l()(null != n, "This channel cannot be guildless."), t && (0, c.zV)(m.HAw.REQUEST_TO_SPEAK_INITIATED, {
        ...(0, A.l7)(e)
    }), s.Bo.patch({
        url: m.Rsh.UPDATE_VOICE_STATE(n),
        body: {
            request_to_speak_timestamp: t ? new Date().toISOString() : null,
            channel_id: e.id
        },
        rejectWithError: !1
    })
}

function S(e, t) {
    let n = e.getGuildId();
    return l()(null != n, "This channel cannot be guildless."), s.Bo.patch({
        url: m.Rsh.UPDATE_VOICE_STATE(n, t),
        body: {
            suppress: !1,
            request_to_speak_timestamp: new Date().toISOString(),
            channel_id: e.id
        },
        rejectWithError: !1
    }).catch(e => (e.code === m.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && d.A.showFailedToast(R.OB.GENERIC_ERROR), e))
}

function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = e?.getGuildId();
    l()(null != i, "This channel cannot be guildless.");
    let r = _.A.getVoiceStateForChannel(e.id),
        a = (0, p.eY)(r);
    return !t && (0, N.Cf)() ? Promise.resolve() : (a !== p.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || t || (0, c.zV)(m.HAw.PROMOTED_TO_SPEAKER, {
        ...(0, A.l7)(e)
    }), s.Bo.patch({
        url: m.Rsh.UPDATE_VOICE_STATE(i),
        body: {
            suppress: t,
            request_to_speak_timestamp: null,
            channel_id: e.id,
            ...n ? {
                silent: n
            } : {}
        },
        rejectWithError: !1
    }))
}

function C(e) {
    let t = e?.getGuildId();
    return l()(null != t, "This channel cannot be guildless."), s.Bo.patch({
        url: m.Rsh.UPDATE_VOICE_STATE(t),
        body: {
            suppress: !0,
            channel_id: e.id,
            self_video: !1,
            self_stream: !1
        },
        rejectWithError: !1
    })
}

function O(e, t, n) {
    let i = e.getGuildId();
    return l()(null != i, "This channel cannot be guildless."), s.Bo.patch({
        url: m.Rsh.UPDATE_VOICE_STATE(i, t),
        body: {
            suppress: n,
            channel_id: e.id
        },
        rejectWithError: !1
    }).catch(e => (e.code === m.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && d.A.showFailedToast(R.OB.GENERIC_ERROR), e))
}

function y(e, t) {
    if (null == t || null == e) return;
    let n = t.getGuildId();
    return l()(null != n, "This channel cannot be guildless."), O(t, e.id, !0), s.Bo.patch({
        url: m.Rsh.UPDATE_VOICE_STATE(n, e.id),
        body: {
            suppress: !0,
            channel_id: t.id,
            self_video: !1,
            self_stream: !1
        },
        rejectWithError: !1
    })
}

function x(e, t, n) {
    let i = e.getGuildId();
    l()(null != i, "Channel cannot be guildless");
    let s = e.permissionOverwrites[i],
        c = {
            id: i,
            type: o.r2.ROLE,
            allow: E.x3,
            deny: E.x3,
            ...s
        };
    n ? (c.allow = r.WQ(c.allow, t), c.deny = r.TF(c.deny, t)) : (c.allow = r.TF(c.allow, t), c.deny = r.WQ(c.deny, t)), a.A.updatePermissionOverwrite(e.id, c)
}
async function f(e, t, n, i) {
    if ("" === t) return;
    u.A.getVoiceChannelId() !== e.id && (0, T.cy)(e);
    let l = await (0, I.yG)(e.id, t, n, i);
    return g(e, !1, !0), l
}
async function P(e, t, n) {
    if ("" !== t) return await (0, I.RY)(e.id, t, n)
}
async function D(e) {
    await (0, I.RR)(e.id)
}