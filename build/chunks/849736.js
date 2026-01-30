/** chunk id: 849736, original params: t,e,n (module,exports,require) **/
n.d(e, {
    J7: () => R,
    Nx: () => m,
    OE: () => G,
    SA: () => I,
    Tf: () => y,
    b3: () => P,
    b6: () => S,
    e7: () => O,
    gt: () => N,
    lL: () => b
});
var r = n(284009),
    i = n.n(r),
    a = n(136722),
    l = n(562465),
    o = n(308528);
n(686956);
var u = n(155718),
    d = n(58149),
    s = n(662502),
    c = n(309010),
    E = n(977997),
    A = n(488926),
    _ = n(323443),
    f = n(110618),
    h = n(602146),
    p = n(105530),
    T = n(418208),
    v = n(652215),
    g = n(835002);

function C(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), r.forEach(function(e) {
            var r;
            r = n[e], e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r
        })
    }
    return t
}

function R(t, e) {
    let n = t.getGuildId();
    return i()(null != n, "This channel cannot be guildless."), e && (0, d.zV)(v.HAw.REQUEST_TO_SPEAK_INITIATED, C({}, (0, f.l7)(t))), l.Bo.patch({
        url: v.Rsh.UPDATE_VOICE_STATE(n),
        body: {
            request_to_speak_timestamp: e ? new Date().toISOString() : null,
            channel_id: t.id
        },
        rejectWithError: !1
    })
}

function I(t, e) {
    let n = t.getGuildId();
    return i()(null != n, "This channel cannot be guildless."), l.Bo.patch({
        url: v.Rsh.UPDATE_VOICE_STATE(n, e),
        body: {
            suppress: !1,
            request_to_speak_timestamp: new Date().toISOString(),
            channel_id: t.id
        },
        rejectWithError: !1
    }).catch(t => (t.code === v.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && s.A.showFailedToast(g.OB.GENERIC_ERROR), t))
}

function O(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = null == t ? void 0 : t.getGuildId();
    i()(null != r, "This channel cannot be guildless.");
    let a = E.A.getVoiceStateForChannel(t.id),
        o = (0, p.eY)(a);
    return !e && (0, T.Cf)() ? Promise.resolve() : (o !== p.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || e || (0, d.zV)(v.HAw.PROMOTED_TO_SPEAKER, C({}, (0, f.l7)(t))), l.Bo.patch({
        url: v.Rsh.UPDATE_VOICE_STATE(r),
        body: C({
            suppress: e,
            request_to_speak_timestamp: null,
            channel_id: t.id
        }, n ? {
            silent: n
        } : {}),
        rejectWithError: !1
    }))
}

function y(t) {
    let e = null == t ? void 0 : t.getGuildId();
    return i()(null != e, "This channel cannot be guildless."), l.Bo.patch({
        url: v.Rsh.UPDATE_VOICE_STATE(e),
        body: {
            suppress: !0,
            channel_id: t.id,
            self_video: !1,
            self_stream: !1
        },
        rejectWithError: !1
    })
}

function b(t, e, n) {
    let r = t.getGuildId();
    return i()(null != r, "This channel cannot be guildless."), l.Bo.patch({
        url: v.Rsh.UPDATE_VOICE_STATE(r, e),
        body: {
            suppress: n,
            channel_id: t.id
        },
        rejectWithError: !1
    }).catch(t => (t.code === v.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && s.A.showFailedToast(g.OB.GENERIC_ERROR), t))
}

function N(t, e) {
    if (null == e || null == t) return;
    let n = e.getGuildId();
    return i()(null != n, "This channel cannot be guildless."), b(e, t.id, !0), l.Bo.patch({
        url: v.Rsh.UPDATE_VOICE_STATE(n, t.id),
        body: {
            suppress: !0,
            channel_id: e.id,
            self_video: !1,
            self_stream: !1
        },
        rejectWithError: !1
    })
}

function S(t, e, n) {
    let r = t.getGuildId();
    i()(null != r, "Channel cannot be guildless");
    let l = t.permissionOverwrites[r],
        d = C({
            id: r,
            type: u.r2.ROLE,
            allow: A.x3,
            deny: A.x3
        }, l);
    n ? (d.allow = a.WQ(d.allow, e), d.deny = a.TF(d.deny, e)) : (d.allow = a.TF(d.allow, e), d.deny = a.WQ(d.deny, e)), o.A.updatePermissionOverwrite(t.id, d)
}
async function m(t, e, n, r) {
    if ("" === e) return;
    c.A.getVoiceChannelId() !== t.id && (0, _.cy)(t);
    let i = await (0, h.yG)(t.id, e, n, r);
    return O(t, !1, !0), i
}
async function P(t, e, n) {
    if ("" !== e) return await (0, h.RY)(t.id, e, n)
}
async function G(t) {
    await (0, h.RR)(t.id)
}