/** chunk id: 905278, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    l: () => o
}), n(896048), n(311907);
var r = n(696451),
    i = n(71393),
    a = n(488926);
let o = function(e, t) {
    let [n, o] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.A, r.Ay];
    if (null == e || null == t) return null;
    let s = n.getGuild(e);
    if (null == s) return null;
    let l = o.getMember(s.id, t);
    return null == l ? null : a.li(s, l)
}