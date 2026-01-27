/** Chunk was on web.js **/
/** chunk id: 859007, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    y: () => l
});
var r = n(587895),
    i = n(625180),
    a = n(91242),
    o = n(207371),
    s = n(580954);

function l(e) {
    let {
        applicationId: t,
        leavesCurrentFrame: n = !0
    } = e, l = r.A.getApplication(t), c = null != l && (0, o.x)(l);
    if (n) {
        let e = a.A.getConnectedFrame();
        null != e && (0, s.A)().leaveFrame({
            applicationId: e.applicationId
        })
    }
    return !!c && (i.A.launchFrame({
        applicationId: t
    }), !0)
}