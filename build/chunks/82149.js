/** Chunk was on web.js **/
/** chunk id: 82149, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Cy: () => h,
    IS: () => m,
    UW: () => _,
    eL: () => p
}), n(896048), n(747238);
var r = n(961350),
    i = n(734057),
    a = n(71393),
    o = n(312006),
    s = n(516607),
    l = n(652215);
let c = "stage:",
    u = 1,
    d = 2,
    f = 4;

function p(e, t) {
    let n = 0,
        i = r.default.getId();
    o.Ay.isSpeaker(i, e.id) && (n |= u);
    let s = a.A.getGuild(e.getGuildId());
    null != s && (s.features.has(l.GuildFeatures.PARTNERED) && (n |= d), s.features.has(l.GuildFeatures.VERIFIED) && (n |= f));
    let p = n.toString(16);
    return "".concat(c).concat(e.guild_id, ":").concat(e.id, ":").concat(p, ":").concat(t.id)
}

function _(e) {
    if (null == e || null == e.party) return;
    let {
        id: t,
        size: n
    } = e.party;
    try {
        if (null == t || !t.startsWith(c)) return;
        let [, e, r, i, a] = t.split(":"), o = parseInt(i, 16);
        return {
            guildId: e,
            channelId: r,
            size: n,
            userIsSpeaker: (o & u) != 0,
            guildIsPartnered: (o & d) != 0,
            guildIsVerified: (o & f) != 0,
            stageInstanceId: a
        }
    } catch (e) {
        return null
    }
}

function h(e) {
    return (null == e ? void 0 : e.application_id) === s.SS
}

function m(e) {
    let t = _(e);
    if (null == t) return !1;
    let {
        channelId: n
    } = t;
    return null != i.A.getChannel(n)
}