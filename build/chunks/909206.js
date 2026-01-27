/** Chunk was on web.js **/
/** chunk id: 909206, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    MJ: () => o,
    _9: () => s,
    c2: () => i,
    ri: () => a
});
var r = n(73153);

function i() {
    r.h.dispatch({
        type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE"
    })
}

function a(e) {
    r.h.dispatch({
        type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE",
        activityUrlOverride: e
    })
}

function o(e) {
    r.h.dispatch({
        type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED",
        applicationId: e,
        timestamp: new Date().getTime()
    })
}

function s(e) {
    r.h.dispatch({
        type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER",
        filter: e
    })
}