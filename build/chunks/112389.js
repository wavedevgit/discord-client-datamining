/** chunk id: 112389, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    S: () => c
});
var r = n(136722);
n(311907);
var i = n(717125),
    a = n(734057),
    o = n(488926),
    s = n(652215);

function l(e) {
    return null != e && s.kvI.GUILD_VOCAL.has(e.type) ? r.kg(s.xBc.VIEW_CHANNEL, s.xBc.CONNECT) : s.xBc.VIEW_CHANNEL
}

function c(e, t) {
    let n = l(a.A.getChannel(t));
    return i.A.isChannelGated(e, t) || o.MJ(n, a.A.getChannel(t))
}