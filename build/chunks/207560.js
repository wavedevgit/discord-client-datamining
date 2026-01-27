/** Chunk was on web.js **/
/** chunk id: 207560, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    SJ: () => f,
    TR: () => d,
    To: () => s,
    aX: () => o,
    d6: () => a,
    fk: () => u,
    u0: () => c,
    yv: () => l
});
var r = n(311907),
    i = n(81428);

function a(e) {
    return i.A.isFeatureAgeGated(e)
}

function o(e) {
    return (0, r.bG)([i.A], () => i.A.isFeatureAgeGated(e))
}

function s(e) {
    return i.A.isSettingTeenByDefault(e)
}

function l(e) {
    return (0, r.bG)([i.A], () => i.A.isSettingTeenByDefault(e))
}

function c() {
    return i.A.hasAgeGatedFeatures()
}

function u() {
    return (0, r.bG)([i.A], () => i.A.hasAgeGatedFeatures())
}

function d() {
    return i.A.hasTeenDefaults()
}

function f() {
    return (0, r.bG)([i.A], () => i.A.hasTeenDefaults())
}