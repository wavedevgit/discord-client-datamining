/** chunk id: 389234, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    H: () => l
});
var r = n(643501),
    i = n(964404),
    a = n(961350),
    o = n(71393),
    s = n(977997);

function l(e) {
    if (i.Ay.disableVoiceChannelChangeAlert) return !1;
    let t = r.default.getRemoteSessionId();
    if (null != s.A.getVoiceStateForSession(a.default.getId(), t) || !s.A.isCurrentClientInVoiceChannel() || s.A.isInChannel(e.id)) return !1;
    let n = o.A.getGuild(e.getGuildId());
    return !((null == n ? void 0 : n.afkChannelId) != null && s.A.isInChannel(n.afkChannelId))
}