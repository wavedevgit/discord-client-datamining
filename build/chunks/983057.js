/** chunk id: 983057, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => i
});
var r = n(73153);

function i(e) {
    let {
        channelId: t,
        applicationId: n,
        intent: i,
        inviterUserId: a,
        analyticsLocations: o,
        commandOrigin: s
    } = e;
    r.h.dispatch({
        type: "EMBEDDED_ACTIVITY_DEFERRED_OPEN",
        channelId: t,
        applicationId: n,
        intent: i,
        inviterUserId: a,
        analyticsLocations: o,
        commandOrigin: s
    })
}