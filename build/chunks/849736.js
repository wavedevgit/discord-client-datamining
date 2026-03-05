/** chunk id: 849736, original params: e,n,t (module,exports,require) **/
t.d(n, {
    J7: () => b,
    Nx: () => y,
    OE: () => R,
    SA: () => T,
    Tf: () => j,
    b3: () => O,
    b6: () => S,
    e7: () => v,
    gt: () => I,
    lL: () => C
});
var i = t(284009),
    l = t.n(i),
    r = t(136722),
    a = t(562465),
    s = t(308528);
t(686956);
var d = t(155718),
    o = t(58149),
    c = t(662502),
    u = t(309010),
    h = t(977997),
    A = t(488926),
    g = t(323443),
    m = t(110618),
    _ = t(602146),
    p = t(105530),
    f = t(418208),
    E = t(652215),
    x = t(835002);

function b(e, n) {
    let t = e.getGuildId();
    return l()(null != t, "This channel cannot be guildless."), n && (0, o.zV)(E.HAw.REQUEST_TO_SPEAK_INITIATED, {
        ...(0, m.l7)(e)
    }), a.Bo.patch({
        url: E.Rsh.UPDATE_VOICE_STATE(t),
        body: {
            request_to_speak_timestamp: n ? new Date().toISOString() : null,
            channel_id: e.id
        },
        rejectWithError: !1
    })
}

function T(e, n) {
    let t = e.getGuildId();
    return l()(null != t, "This channel cannot be guildless."), a.Bo.patch({
        url: E.Rsh.UPDATE_VOICE_STATE(t, n),
        body: {
            suppress: !1,
            request_to_speak_timestamp: new Date().toISOString(),
            channel_id: e.id
        },
        rejectWithError: !1
    }).catch(e => (e.code === E.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && c.A.showFailedToast(x.OB.GENERIC_ERROR), e))
}

function v(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = e?.getGuildId();
    l()(null != i, "This channel cannot be guildless.");
    let r = h.A.getVoiceStateForChannel(e.id),
        s = (0, p.eY)(r);
    return !n && (0, f.Cf)() ? Promise.resolve() : (s !== p.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || n || (0, o.zV)(E.HAw.PROMOTED_TO_SPEAKER, {
        ...(0, m.l7)(e)
    }), a.Bo.patch({
        url: E.Rsh.UPDATE_VOICE_STATE(i),
        body: {
            suppress: n,
            request_to_speak_timestamp: null,
            channel_id: e.id,
            ...t ? {
                silent: t
            } : {}
        },
        rejectWithError: !1
    }))
}

function j(e) {
    let n = e?.getGuildId();
    return l()(null != n, "This channel cannot be guildless."), a.Bo.patch({
        url: E.Rsh.UPDATE_VOICE_STATE(n),
        body: {
            suppress: !0,
            channel_id: e.id,
            self_video: !1,
            self_stream: !1
        },
        rejectWithError: !1
    })
}

function C(e, n, t) {
    let i = e.getGuildId();
    return l()(null != i, "This channel cannot be guildless."), a.Bo.patch({
        url: E.Rsh.UPDATE_VOICE_STATE(i, n),
        body: {
            suppress: t,
            channel_id: e.id
        },
        rejectWithError: !1
    }).catch(e => (e.code === E.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && c.A.showFailedToast(x.OB.GENERIC_ERROR), e))
}

function I(e, n) {
    if (null == n || null == e) return;
    let t = n.getGuildId();
    return l()(null != t, "This channel cannot be guildless."), C(n, e.id, !0), a.Bo.patch({
        url: E.Rsh.UPDATE_VOICE_STATE(t, e.id),
        body: {
            suppress: !0,
            channel_id: n.id,
            self_video: !1,
            self_stream: !1
        },
        rejectWithError: !1
    })
}

function S(e, n, t) {
    let i = e.getGuildId();
    l()(null != i, "Channel cannot be guildless");
    let a = e.permissionOverwrites[i],
        o = {
            id: i,
            type: d.r2.ROLE,
            allow: A.x3,
            deny: A.x3,
            ...a
        };
    t ? (o.allow = r.WQ(o.allow, n), o.deny = r.TF(o.deny, n)) : (o.allow = r.TF(o.allow, n), o.deny = r.WQ(o.deny, n)), s.A.updatePermissionOverwrite(e.id, o)
}
async function y(e, n, t, i) {
    if ("" === n) return;
    u.A.getVoiceChannelId() !== e.id && (0, g.cy)(e);
    let l = await (0, _.yG)(e.id, n, t, i);
    return v(e, !1, !0), l
}
async function O(e, n, t) {
    if ("" !== n) return await (0, _.RY)(e.id, n, t)
}
async function R(e) {
    await (0, _.RR)(e.id)
}