/** Chunk was on web.js **/
/** chunk id: 216418, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o,
    q: () => s
});
var r = n(64700),
    i = n(587895),
    a = n(360469);

function o(e) {
    return r.useMemo(() => s(e), [e])
}

function s(e) {
    var t, n;
    return !(null != e && a.xW.includes(null != e ? e : "")) || (null == (n = i.A.getApplication(e)) || null == (t = n.embeddedActivityConfig) ? void 0 : t.legacy_responsive_aspect_ratio)
}