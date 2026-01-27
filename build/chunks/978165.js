/** Chunk was on web.js **/
/** chunk id: 978165, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d,
    j: () => u
}), n(938796);
var r = n(665260),
    i = n(311907),
    a = n(164956),
    o = n(696451),
    s = n(927813),
    l = n(340837);

function c(e, t, n) {
    var i;
    if (n.isFullServerPreview(e)) return !0;
    let a = t.getSelfMember(e);
    if (null == a) return !1;
    let o = t.getSelfMemberJoinedAt(e);
    return !(null == o || (0, r.Lt)(null != (i = a.flags) ? i : 0, l.D.COMPLETED_HOME_ACTIONS)) && Date.now() - o.getTime() < s.A.Millis.WEEK
}

function u(e) {
    return c(e, o.Ay, a.A)
}

function d(e) {
    return (0, i.bG)([o.Ay, a.A], () => c(e, o.Ay, a.A))
}