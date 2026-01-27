/** Chunk was on web.js **/
/** chunk id: 950191, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    AP: () => u,
    Ay: () => l
}), n(896048), n(64700);
var r = n(311907),
    i = n(287809),
    a = n(583613),
    o = n(204369),
    s = n(622543);

function l(e, t) {
    return (0, r.bG)([i.default, s.A], () => null == e ? null : u(e, t, [i.default, s.A]))
}
n(576622);
let c = (0, a.L_)((e, t) => new o.A(e, t));

function u(e, t) {
    let [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.default, s.A];
    if (null === e) return null;
    let a = n.getUser(e),
        o = r.getUserProfile(e),
        l = r.getGuildMemberProfile(e, t);
    return null == a || null == o ? null : c(o, l)
}