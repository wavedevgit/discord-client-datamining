/** chunk id: 925931, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    g: () => r
});
var i = n(927813),
    s = n(427262),
    l = n(985018);
let a = +i.A.Millis.DAY;

function r(e) {
    if ((0, s.mv)(e.user)) return l.intl.string(l.t.VaCdhQ);
    let t = e.member?.joinedAt;
    return null == t ? l.intl.string(l.t.CQmzib) : null != e.member && e.member.roles.length > 0 ? e.role?.name ?? l.intl.string(l.t["97/NdO"]) : new Date().getTime() - Date.parse(t) < a ? l.intl.string(l.t.IKE48n) : l.intl.string(l.t.u0gUWt)
}