/** Chunk was on web.js **/
/** chunk id: 538064, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ft: () => s,
    Jt: () => a,
    eY: () => l,
    pf: () => o
});
var r = n(73153),
    i = n(265059);

function a(e) {
    r.h.dispatch({
        type: "DEV_TOOLS_SETTINGS_UPDATE",
        settings: e
    })
}

function o() {
    a({
        displayTools: !i.A.displayTools
    })
}

function s(e) {
    a({
        displayTools: !0,
        lastOpenTabId: e
    })
}

function l() {
    r.h.dispatch({
        type: "ANALYTICS_LOG_CLEAR"
    })
}