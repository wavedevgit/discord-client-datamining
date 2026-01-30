/** chunk id: 327098, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
}), n(896048);
var r = n(311907),
    i = n(933958),
    a = n(429913),
    o = n(574520);

function s(e) {
    let t = (0, r.bG)([o.A], () => o.A.getMatchingActivity(e)),
        [n, s] = (0, a.A)([null == t ? void 0 : t.application_id, "application_id" in e.extra ? e.extra.application_id : void 0]);
    return {
        activity: t,
        embeddedActivity: (0, r.bG)([i.Ay], () => i.Ay.getEmbeddedActivityForUserId(e.author_id, null == n ? void 0 : n.id)),
        anyMatchingApplication: null != n ? n : s,
        activityApplication: n,
        fallbackApplication: s
    }
}