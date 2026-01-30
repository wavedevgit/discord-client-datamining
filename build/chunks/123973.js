/** chunk id: 123973, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l,
    l: () => s
});
var r = n(734057),
    i = n(576705),
    a = n(309010),
    o = n(652215);

function s() {
    let e = a.A.getVoiceChannelId();
    return l(r.A.getChannel(e))
}

function l(e) {
    if (null == e) return !1;
    if (o.kvI.CALLABLE.has(e.type)) return !0;
    let t = i.A.can(o.xBc.USE_SOUNDBOARD, e),
        n = i.A.can(o.xBc.SPEAK, e);
    return e.isGuildVoiceOrThread() && t && n
}