/** chunk id: 849736, original params: e,t,n (module,exports,require) **/
n.d(t, {
    J7: () => p,
    Nx: () => m,
    OE: () => C,
    SA: () => R,
    Tf: () => w,
    b3: () => y,
    b6: () => b,
    e7: () => I,
    gt: () => P,
    lL: () => N
});
var i = n(284009),
    l = n.n(i),
    r = n(136722),
    a = n(562465),
    s = n(308528);
n(686956);
var u = n(155718),
    d = n(58149),
    o = n(662502),
    c = n(309010),
    _ = n(977997),
    E = n(488926),
    h = n(323443),
    T = n(110618),
    A = n(602146),
    g = n(105530),
    S = n(418208),
    O = n(652215),
    f = n(835002);

function p(e, t) {
    let n = e.getGuildId();
    return l()(null != n, "This channel cannot be guildless."), t && (0, d.zV)(O.HAw.REQUEST_TO_SPEAK_INITIATED, {
        ...(0, T.l7)(e)
    }), a.Bo.patch({
        url: O.Rsh.UPDATE_VOICE_STATE(n),
        body: {
            request_to_speak_timestamp: t ? new Date().toISOString() : null,
            channel_id: e.id
        },
        rejectWithError: !1
    })
}

function R(e, t) {
    let n = e.getGuildId();
    return l()(null != n, "This channel cannot be guildless."), a.Bo.patch({
        url: O.Rsh.UPDATE_VOICE_STATE(n, t),
        body: {
            suppress: !1,
            request_to_speak_timestamp: new Date().toISOString(),
            channel_id: e.id
        },
        rejectWithError: !1
    }).catch(e => (e.code === O.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && o.A.showFailedToast(f.OB.GENERIC_ERROR), e))
}

function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = e?.getGuildId();
    l()(null != i, "This channel cannot be guildless.");
    let r = _.A.getVoiceStateForChannel(e.id),
        s = (0, g.eY)(r);
    return !t && (0, S.Cf)() ? Promise.resolve() : (s !== g.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || t || (0, d.zV)(O.HAw.PROMOTED_TO_SPEAKER, {
        ...(0, T.l7)(e)
    }), a.Bo.patch({
        url: O.Rsh.UPDATE_VOICE_STATE(i),
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

function w(e) {
    let t = e?.getGuildId();
    return l()(null != t, "This channel cannot be guildless."), a.Bo.patch({
        url: O.Rsh.UPDATE_VOICE_STATE(t),
        body: {
            suppress: !0,
            channel_id: e.id,
            self_video: !1,
            self_stream: !1
        },
        rejectWithError: !1
    })
}

function N(e, t, n) {
    let i = e.getGuildId();
    return l()(null != i, "This channel cannot be guildless."), a.Bo.patch({
        url: O.Rsh.UPDATE_VOICE_STATE(i, t),
        body: {
            suppress: n,
            channel_id: e.id
        },
        rejectWithError: !1
    }).catch(e => (e.code === O.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && o.A.showFailedToast(f.OB.GENERIC_ERROR), e))
}

function P(e, t) {
    if (null == t || null == e) return;
    let n = t.getGuildId();
    return l()(null != n, "This channel cannot be guildless."), N(t, e.id, !0), a.Bo.patch({
        url: O.Rsh.UPDATE_VOICE_STATE(n, e.id),
        body: {
            suppress: !0,
            channel_id: t.id,
            self_video: !1,
            self_stream: !1
        },
        rejectWithError: !1
    })
}

function b(e, t, n) {
    let i = e.getGuildId();
    l()(null != i, "Channel cannot be guildless");
    let a = e.permissionOverwrites[i],
        d = {
            id: i,
            type: u.r2.ROLE,
            allow: E.x3,
            deny: E.x3,
            ...a
        };
    n ? (d.allow = r.WQ(d.allow, t), d.deny = r.TF(d.deny, t)) : (d.allow = r.TF(d.allow, t), d.deny = r.WQ(d.deny, t)), s.A.updatePermissionOverwrite(e.id, d)
}
async function m(e, t, n, i) {
    if ("" === t) return;
    c.A.getVoiceChannelId() !== e.id && (0, h.cy)(e);
    let l = await (0, A.yG)(e.id, t, n, i);
    return I(e, !1, !0), l
}
async function y(e, t, n) {
    if ("" !== t) return await (0, A.RY)(e.id, t, n)
}
async function C(e) {
    await (0, A.RR)(e.id)
}