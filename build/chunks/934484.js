/** Chunk was on web.js **/
/** chunk id: 934484, original params: e,t,n (module,exports,require) **/
"use strict";

function r(e) {
    if (e.applications.length > 0) return e.applications[0].id;
    if (e.windows.length > 0) {
        var t, n;
        return null != (t = null == (n = e.windows[0].owningApplication) ? void 0 : n.id) ? t : null
    }
    return null
}
n.d(t, {
    A: () => r
})