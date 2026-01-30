/** chunk id: 515925, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    G1: () => l,
    Ih: () => a,
    Oy: () => u,
    kk: () => s,
    t7: () => c,
    tR: () => o,
    uU: () => f,
    xd: () => i.x,
    xy: () => d
});
var r = n(31436),
    i = n(279234);

function a() {
    return (0, r.Ay)().ExperimentCacher
}

function o(e) {
    var t;
    return null != (t = (0, r.Ay)().BlockedDomainsStore.isBlockedDomain(e)) ? t : null
}

function s(e) {
    (0, r.Ay)().BlockedDomainsStore.startFetchingBlockedDomains(e)
}

function l() {
    return "libdiscore logs are part of the main app logs"
}

function c(e, t) {
    return (0, r.Ay)().rustMultiply(e, t)
}

function u() {
    (0, r.Ay)().crash()
}

function d(e) {
    return (0, r.Ay)().generateLaunchSignature(e)
}

function f() {
    return null
}