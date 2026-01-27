/** Chunk was on web.js **/
/** chunk id: 496767, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    W: () => c,
    h: () => l
});
var r = n(311907),
    i = n(71393),
    a = n(576705),
    o = n(709977),
    s = n(652215);

function l(e) {
    let t = i.A.getGuild(e);
    return null != t && t.features.has(s.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) && a.A.can(s.xBc.KICK_MEMBERS, t)
}

function c(e) {
    let t = (0, r.bG)([i.A], () => i.A.getGuild(e)),
        n = a.A.can(s.xBc.KICK_MEMBERS, t) || a.A.can(s.xBc.MANAGE_GUILD, t);
    return null != t && t.features.has(s.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) && n && (0, o.Qd)(t)
}