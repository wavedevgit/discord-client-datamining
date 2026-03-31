/** chunk id: 849736 params = (module,exports,require) **/
n.d(e, {
    J7: () => p,
    Nx: () => I,
    OE: () => x,
    SA: () => m,
    Tf: () => S,
    b3: () => C,
    b6: () => D,
    e7: () => N,
    gt: () => b,
    lL: () => G
});
var l = n(284009),
    i = n.n(l),
    r = n(136722),
    a = n(562465),
    d = n(308528);
n(686956);
var s = n(155718),
    u = n(58149),
    o = n(662502),
    c = n(309010),
    E = n(977997),
    A = n(488926),
    g = n(323443),
    _ = n(110618),
    h = n(602146),
    T = n(105530),
    f = n(418208),
    y = n(652215),
    v = n(835002);

function p(t, e) {
    let n = t.getGuildId();
    return i()(null != n, "This channel cannot be guildless."), e && (0, u.zV)(y.HAw.REQUEST_TO_SPEAK_INITIATED, {
        ...(0, _.l7)(t)
    }), a.Bo.patch({
        url: y.Rsh.UPDATE_VOICE_STATE(n),
        body: {
            request_to_speak_timestamp: e ? new Date().toISOString() : null,
            channel_id: t.id
        },
        rejectWithError: !1
    })
}

function m(t, e) {
    let n = t.getGuildId();
    return i()(null != n, "This channel cannot be guildless."), a.Bo.patch({
        url: y.Rsh.UPDATE_VOICE_STATE(n, e),
        body: {
            suppress: !1,
            request_to_speak_timestamp: new Date().toISOString(),
            channel_id: t.id
        },
        rejectWithError: !1
    }).catch(t => (t.code === y.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && o.A.showFailedToast(v.OB.GENERIC_ERROR), t))
}

function N(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = t?.getGuildId();
    i()(null != l, "This channel cannot be guildless.");
    let r = E.A.getVoiceStateForChannel(t.id),
        d = (0, T.eY)(r);
    return !e && (0, f.Cf)() ? Promise.resolve() : (d !== T.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || e || (0, u.zV)(y.HAw.PROMOTED_TO_SPEAKER, {
        ...(0, _.l7)(t)
    }), a.Bo.patch({
        url: y.Rsh.UPDATE_VOICE_STATE(l),
        body: {
            suppress: e,
            request_to_speak_timestamp: null,
            channel_id: t.id,
            ...n ? {
                silent: n
            } : {}
        },
        rejectWithError: !1
    }))
}

function S(t) {
    let e = t?.getGuildId();
    return i()(null != e, "This channel cannot be guildless."), a.Bo.patch({
        url: y.Rsh.UPDATE_VOICE_STATE(e),
        body: {
            suppress: !0,
            channel_id: t.id,
            self_video: !1,
            self_stream: !1
        },
        rejectWithError: !1
    })
}

function G(t, e, n) {
    let l = t.getGuildId();
    return i()(null != l, "This channel cannot be guildless."), a.Bo.patch({
        url: y.Rsh.UPDATE_VOICE_STATE(l, e),
        body: {
            suppress: n,
            channel_id: t.id
        },
        rejectWithError: !1
    }).catch(t => (t.code === y.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && o.A.showFailedToast(v.OB.GENERIC_ERROR), t))
}

function b(t, e) {
    if (null == e || null == t) return;
    let n = e.getGuildId();
    return i()(null != n, "This channel cannot be guildless."), G(e, t.id, !0), a.Bo.patch({
        url: y.Rsh.UPDATE_VOICE_STATE(n, t.id),
        body: {
            suppress: !0,
            channel_id: e.id,
            self_video: !1,
            self_stream: !1
        },
        rejectWithError: !1
    })
}

function D(t, e, n) {
    let l = t.getGuildId();
    i()(null != l, "Channel cannot be guildless");
    let a = t.permissionOverwrites[l],
        u = {
            id: l,
            type: s.r2.ROLE,
            allow: A.x3,
            deny: A.x3,
            ...a
        };
    n ? (u.allow = r.WQ(u.allow, e), u.deny = r.TF(u.deny, e)) : (u.allow = r.TF(u.allow, e), u.deny = r.WQ(u.deny, e)), d.A.updatePermissionOverwrite(t.id, u)
}
async function I(t, e, n, l) {
    if ("" === e) return;
    c.A.getVoiceChannelId() !== t.id && (0, g.cy)(t);
    let i = await (0, h.yG)(t.id, e, n, l);
    return N(t, !1, !0), i
}
async function C(t, e, n) {
    if ("" !== e) return await (0, h.RY)(t.id, e, n)
}
async function x(t) {
    await (0, h.RR)(t.id)
}