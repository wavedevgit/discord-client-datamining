/** chunk id: 48686, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Q: () => c,
    t: () => l
});
var r = n(311907),
    i = n(734057),
    a = n(71393),
    o = n(309010),
    s = n(652215);
let l = () => {
        let e = o.A.getVoiceChannelId();
        if (null == e) return !1;
        let t = i.A.getChannel(e);
        if (null == t) return !1;
        let n = a.A.getGuild(t.getGuildId());
        return null != n && n.features.has(s.GuildFeatures.HUB)
    },
    c = e => (0, r.bG)([o.A, i.A, a.A], () => {
        let t = o.A.getVoiceChannelId();
        if (null == t) return !1;
        let n = i.A.getChannel(t);
        if (null == n) return !1;
        let r = a.A.getGuild(n.getGuildId());
        return null != r && r.id === e
    })