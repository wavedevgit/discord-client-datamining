/** Chunk was on web.js **/
/** chunk id: 956518, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => a,
    sF: () => s
});
var r = n(147964),
    i = n(10716);

function a(e) {
    return s() ? i.A.getState().activityUrlOverride : r.A.inTestModeForEmbeddedApplication(e) ? r.A.testModeOriginURL : o(e)
}

function o(e) {
    let t = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST;
    return null == t ? null : "https://".concat(e, ".").concat(t)
}

function s() {
    let e = i.A.getState();
    return e.useActivityUrlOverride && null != e.activityUrlOverride && "" !== e.activityUrlOverride
}