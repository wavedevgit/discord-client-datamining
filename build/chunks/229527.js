/** Chunk was on web.js **/
/** chunk id: 229527, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    TR: () => u,
    ix: () => d,
    wR: () => l,
    wj: () => c
}), n(896048), n(321073), n(938796);
var r = n(665260),
    i = n(311907),
    a = n(696451),
    o = n(340837);
let s = [o.D.AUTOMOD_QUARANTINED_BIO, o.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME, o.D.AUTOMOD_QUARANTINED_SERVER_TAG];

function l(e) {
    return null == e ? new Set : new Set(s.reduce((t, n) => ((0, r.Lt)(null != e ? e : 0, n) && t.push(n), t), []))
}

function c(e) {
    return null == e ? new Set : l(e.flags)
}

function u(e) {
    return null != e && null != e.flags && s.some(t => {
        var n;
        return (0, r.Lt)(null != (n = e.flags) ? n : 0, t)
    })
}

function d(e) {
    return (0, i.bG)([a.Ay], () => null != e && u(a.Ay.getSelfMember(e)), [e])
}