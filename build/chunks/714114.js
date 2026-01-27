/** Chunk was on web.js **/
/** chunk id: 714114, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(311907),
    i = n(734057),
    a = n(576705),
    o = n(977997),
    s = n(818348);

function l(e) {
    let {
        userId: t,
        guildId: n
    } = e, l = (0, r.bG)([o.A], () => null != n && null != t ? o.A.getDiscoverableVoiceState(n, t) : null != t ? o.A.getDiscoverableVoiceStateForUser(t) : void 0), c = null == l ? void 0 : l.channelId, u = (0, r.bG)([i.A], () => {
        if (null != c) return i.A.getChannel(c)
    });
    return (0, r.bG)([a.A], () => (null == u ? void 0 : u.isPrivate()) || a.A.can(s.xB.VIEW_CHANNEL, u)) ? {
        voiceState: l,
        voiceChannel: u
    } : {}
}