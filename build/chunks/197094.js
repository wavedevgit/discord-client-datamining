/** chunk id: 197094, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    B: () => a,
    b: () => o
});
var r = n(562465),
    i = n(73153);

function a(e) {
    return r.Bo.get({
        url: "".concat("https:").concat(window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT, "?v=").concat(e),
        rejectWithError: !1
    })
}

function o(e, t) {
    i.h.dispatch({
        type: "RTC_LATENCY_TEST_COMPLETE",
        latencyRankedRegions: e,
        geoRankedRegions: t
    })
}