/** Chunk was on web.js **/
/** chunk id: 650338, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Bs: () => O,
    HB: () => g,
    K2: () => I,
    ME: () => b,
    N5: () => A,
    OI: () => m,
    wz: () => v
});
var r = n(64700),
    i = n(311907),
    a = n(929921),
    o = n(961350),
    s = n(71393),
    l = n(383501),
    c = n(287809),
    u = n(954571),
    d = n(652215),
    f = n(753070),
    p = n(788868),
    _ = n(731854),
    h = n(985018);

function m(e) {
    if (null == e) return;
    let t = e.maxResolution.type === _.ei.SOURCE ? f.on.RESOLUTION_SOURCE : e.maxResolution.height,
        n = (0, f.F0)(t);
    return (0, f.AC)(e.maxFrameRate) !== f.kn.FPS_5 && null == f.ZV.find(e => e.resolution === n && e.fps !== f.kn.FPS_5 && !E(e))
}

function g(e) {
    if (null == e) return;
    let t = (0, f.AC)(e.maxFrameRate);
    return null == f.ZV.find(e => e.fps === t && !E(e))
}

function E(e) {
    return null != e.quality || null != e.guildPremiumTier
}

function y(e, t, n) {
    return f.ZV.find(r => (null == r.preset || r.preset === e) && r.resolution === t && r.fps === n)
}

function b(e) {
    return e.type === _.ei.SOURCE ? h.intl.string(h.t.XjXqzh) : h.intl.formatToPlainString(h.t.TEOC0I, {
        resolution: e.height
    })
}

function O(e) {
    return h.intl.formatToPlainString(h.t.Qb44XH, {
        fps: e
    })
}

function v(e) {
    return null == e.maxResolution || null == e.maxFrameRate ? null : {
        maxFrameRate: e.maxFrameRate,
        maxResolution: e.maxResolution
    }
}

function A(e) {
    let t = (0, i.cf)([a.A], () => a.A.getState()),
        n = (0, i.bG)([o.default], () => o.default.getId());
    return r.useMemo(() => n === e.user.id ? {
        maxFrameRate: t.fps,
        maxResolution: {
            height: t.resolution,
            width: 0,
            type: 0 === t.resolution ? _.ei.SOURCE : _.ei.FIXED
        }
    } : v(e), [n, e, t])
}

function I(e, t, n) {
    let r = y(e, t, n),
        i = c.default.getCurrentUser(),
        a = l.A.getGuildId(),
        o = null != a ? s.A.getGuild(a) : null;
    u.default.track(d.HAw.STREAM_SETTINGS_UPDATE, {
        user_premium_tier: null == i ? void 0 : i.premiumType,
        guild_premium_tier: null == o ? void 0 : o.premiumTier,
        stream_quality_user_premium_tier: (null == r ? void 0 : r.quality) != null ? p.Kq[r.quality] : null,
        stream_quality_guild_premium_tier: null == r ? void 0 : r.guildPremiumTier,
        stream_quality_preset: e,
        stream_quality_resolution: t,
        stream_quality_frame_rate: n
    })
}