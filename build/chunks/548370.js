/** Chunk was on web.js **/
/** chunk id: 548370, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    D$: () => s,
    s1: () => p,
    xA: () => l
});
var r = n(808180),
    i = n(624694);
let a = 10 * n(927813).A.Millis.SECOND,
    o = 15;

function s() {
    return r.X.isIncomingVideoEnabled() && performance.now() - r.X.lastIncomingVideoEnabledChangeTime() > a
}

function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o,
        r = i.A.getAccumulatedPerformanceStats(e, t, "short"),
        a = i.A.getAccumulatedPerformanceStats(e, t, "long");
    return null == r || null == a || r.numDatapoints < n || a.numDatapoints < n ? null : {
        short: r,
        long: a
    }
}
let c = 30,
    u = 15,
    d = 8,
    f = 3;

function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
    return e <= 5 ? f : e <= 15 ? d : e <= 30 ? u : c
}