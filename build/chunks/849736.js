/** chunk id: 849736, original params: e,n,t (module,exports,require) **/
t.d(n, {
    J7: () => S,
    Nx: () => P,
    OE: () => v,
    SA: () => y,
    Tf: () => I,
    b3: () => C,
    b6: () => N,
    e7: () => R,
    gt: () => w,
    lL: () => m
});
var i = t(284009),
    l = t.n(i),
    r = t(136722),
    a = t(562465),
    o = t(308528);
t(686956);
var _ = t(155718),
    c = t(58149),
    d = t(662502),
    s = t(309010),
    u = t(977997),
    h = t(488926),
    E = t(323443),
    T = t(110618),
    g = t(602146),
    A = t(105530),
    f = t(418208),
    p = t(652215),
    O = t(835002);

function b(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.forEach(function(n) {
            var i;
            i = t[n], n in e ? Object.defineProperty(e, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = i
        })
    }
    return e
}

function S(e, n) {
    let t = e.getGuildId();
    return l()(null != t, "This channel cannot be guildless."), n && (0, c.zV)(p.HAw.REQUEST_TO_SPEAK_INITIATED, b({}, (0, T.l7)(e))), a.Bo.patch({
        url: p.Rsh.UPDATE_VOICE_STATE(t),
        body: {
            request_to_speak_timestamp: n ? new Date().toISOString() : null,
            channel_id: e.id
        },
        rejectWithError: !1
    })
}

function y(e, n) {
    let t = e.getGuildId();
    return l()(null != t, "This channel cannot be guildless."), a.Bo.patch({
        url: p.Rsh.UPDATE_VOICE_STATE(t, n),
        body: {
            suppress: !1,
            request_to_speak_timestamp: new Date().toISOString(),
            channel_id: e.id
        },
        rejectWithError: !1
    }).catch(e => (e.code === p.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && d.A.showFailedToast(O.OB.GENERIC_ERROR), e))
}

function R(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = null == e ? void 0 : e.getGuildId();
    l()(null != i, "This channel cannot be guildless.");
    let r = u.A.getVoiceStateForChannel(e.id),
        o = (0, A.eY)(r);
    return !n && (0, f.Cf)() ? Promise.resolve() : (o !== A.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || n || (0, c.zV)(p.HAw.PROMOTED_TO_SPEAKER, b({}, (0, T.l7)(e))), a.Bo.patch({
        url: p.Rsh.UPDATE_VOICE_STATE(i),
        body: b({
            suppress: n,
            request_to_speak_timestamp: null,
            channel_id: e.id
        }, t ? {
            silent: t
        } : {}),
        rejectWithError: !1
    }))
}

function I(e) {
    let n = null == e ? void 0 : e.getGuildId();
    return l()(null != n, "This channel cannot be guildless."), a.Bo.patch({
        url: p.Rsh.UPDATE_VOICE_STATE(n),
        body: {
            suppress: !0,
            channel_id: e.id,
            self_video: !1,
            self_stream: !1
        },
        rejectWithError: !1
    })
}

function m(e, n, t) {
    let i = e.getGuildId();
    return l()(null != i, "This channel cannot be guildless."), a.Bo.patch({
        url: p.Rsh.UPDATE_VOICE_STATE(i, n),
        body: {
            suppress: t,
            channel_id: e.id
        },
        rejectWithError: !1
    }).catch(e => (e.code === p.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && d.A.showFailedToast(O.OB.GENERIC_ERROR), e))
}

function w(e, n) {
    if (null == n || null == e) return;
    let t = n.getGuildId();
    return l()(null != t, "This channel cannot be guildless."), m(n, e.id, !0), a.Bo.patch({
        url: p.Rsh.UPDATE_VOICE_STATE(t, e.id),
        body: {
            suppress: !0,
            channel_id: n.id,
            self_video: !1,
            self_stream: !1
        },
        rejectWithError: !1
    })
}

function N(e, n, t) {
    let i = e.getGuildId();
    l()(null != i, "Channel cannot be guildless");
    let a = e.permissionOverwrites[i],
        c = b({
            id: i,
            type: _.r2.ROLE,
            allow: h.x3,
            deny: h.x3
        }, a);
    t ? (c.allow = r.WQ(c.allow, n), c.deny = r.TF(c.deny, n)) : (c.allow = r.TF(c.allow, n), c.deny = r.WQ(c.deny, n)), o.A.updatePermissionOverwrite(e.id, c)
}
async function P(e, n, t, i) {
    if ("" === n) return;
    s.A.getVoiceChannelId() !== e.id && (0, E.cy)(e);
    let l = await (0, g.yG)(e.id, n, t, i);
    return R(e, !1, !0), l
}
async function C(e, n, t) {
    if ("" !== n) return await (0, g.RY)(e.id, n, t)
}
async function v(e) {
    await (0, g.RR)(e.id)
}