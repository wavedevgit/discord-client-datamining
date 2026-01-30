/** chunk id: 536432, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ak: () => R,
    Au: () => w,
    Dv: () => M,
    Ir: () => N,
    ND: () => U,
    Ni: () => G,
    VE: () => x,
    fh: () => L,
    un: () => j,
    wH: () => T
}), n(321073);
var r = n(417597),
    i = n(554146),
    a = n(58149),
    o = n(693806),
    s = n(253932),
    l = n(594061),
    c = n(617617),
    u = n(173660),
    d = n(914616),
    f = n(95701),
    p = n(576705),
    _ = n(287809),
    h = n(954571),
    m = n(927578),
    g = n(427262),
    E = n(796774),
    y = n(209932),
    b = n(807348),
    O = n(123973),
    v = n(984813),
    A = n(980504),
    I = n(652215),
    S = n(698279);

function T() {
    var e;
    let t = s.dG.getSetting();
    return null != (e = null == t ? void 0 : t.volume) ? e : 100
}

function C(e, t) {
    return (null == t ? void 0 : t.guild_id) == null || p.A.can(I.xBc.USE_EXTERNAL_SOUNDS, t) || e.guildId === A.mV || e.guildId === (null == t ? void 0 : t.guild_id)
}

function N(e, t, n) {
    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (m.Ay.canUseSoundboardEverywhere(e) || t.guildId === (null == n ? void 0 : n.guild_id) || t.guildId === A.mV) && C(t, n) && (!r || t.available)
}

function w(e) {
    let {
        mute: t,
        suppress: n
    } = (0, u.k)({
        channel: e
    });
    return !t && !n
}

function R(e, t, n, r) {
    (0, E.qP)(t, e, b.Zm.SOUNDBOARD), (0, d.Wv)(t, e, __OVERLAY__, n, r)
}

function P(e, t) {
    (0, E.qP)(t, e, b.Zm.JOINED_VOICE_CHANNEL), (0, d.Rc)(t, e, __OVERLAY__)
}

function D() {
    var e, t;
    return Object.values(null != (e = null == (t = c.A.settings.guilds) ? void 0 : t.guilds) ? e : {}).some(e => null != e.joinSound)
}
async function L(e) {
    let t = _.default.getCurrentUser(),
        n = (0, o.A)(),
        r = (0, v.z0)(e);
    if (null == n || f.Do.has(n.type) || null == r || !m.Ay.canUseCustomCallSounds(t) || !(0, O.l)()) return;
    await (0, E.E7)();
    let i = r.guildId === A.XH ? A.mV : r.guildId,
        a = y.A.getSound(i, r.soundId);
    if (null != a) {
        if (!C(a, n) || !N(t, a, n, !0) || !w(n)) return null;
        P(a, n.id)
    }
}

function x(e) {
    let {
        isSoundboardButtonDisabled: t = !1
    } = e, n = (0, r.bG)([_.default], () => _.default.getCurrentUser()), a = [];
    if (!t && !D()) {
        let e = (0, g.G2)(n);
        (m.Ay.canUseCustomCallSounds(n) || e) && a.push(i.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL)
    }
    return a
}

function M(e, t) {
    (0, l.TG)(e, n => {
        n.joinSound = void 0, k({
            guildId: e,
            changeType: b.Vr.REMOVED,
            soundType: b.ib.ENTRY,
            location: t
        })
    }, l.Sb.INFREQUENT_USER_ACTION)
}

function j(e, t, n) {
    (0, l.TG)(e, r => {
        let i = t.guildId === A.mV,
            a = i ? b.FH.DEFAULT : b.FH.CUSTOM,
            o = null != r.joinSound ? b.Vr.UPDATED : b.Vr.ADDED;
        r.joinSound = {
            soundId: t.soundId,
            guildId: i ? A.XH : t.guildId
        }, k({
            guildId: e,
            changeType: o,
            soundSource: a,
            soundType: b.ib.ENTRY,
            location: n
        })
    }, l.Sb.INFREQUENT_USER_ACTION)
}

function k(e) {
    let {
        guildId: t,
        changeType: n,
        soundType: r,
        soundSource: i,
        location: a
    } = e;
    h.default.track(I.HAw.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
        location_stack: a,
        guild_id: "" === t ? 0 : Number(t),
        change_type: n,
        sound_type: r,
        sound_source: i
    })
}

function U(e) {
    let {
        location: t
    } = e;
    h.default.track(I.HAw.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, {
        location_stack: t
    })
}

function G(e) {
    let {
        sound: t,
        location: n
    } = e;
    a.Ay.trackWithMetadata(I.HAw.EXPRESSION_FAVORITED, {
        location: n,
        expression_type: S.kx.SOUNDBOARD,
        expression_id: t.soundId,
        expression_name: t.name,
        expression_guild_id: t.guildId
    })
}