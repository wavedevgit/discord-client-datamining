/** chunk id: 291823, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    J: () => s
});
var r = n(686956),
    i = n(71393),
    a = n(287809),
    o = n(248194);

function s() {
    let e = a.default.getCurrentUser();
    (null == e ? void 0 : e.isStaff()) && null != i.A.getGuild(o.U) && r.A.requestMembers(o.U, "", 0, !1)
}