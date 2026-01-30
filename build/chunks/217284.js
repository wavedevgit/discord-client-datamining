/** chunk id: 217284, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    getKrispModel: () => i,
    setKrispModelOverride: () => o,
    setKrispSuppressionLevel: () => a
});
var r = n(77729);

function i() {
    try {
        return r.A.nativeModules.requireModule("discord_krisp").getNcModelFilename()
    } catch (e) {
        return Promise.resolve(null)
    }
}

function a(e) {
    try {
        var t, n;
        null == (t = (n = r.A.nativeModules.requireModule("discord_krisp")).setSuppressionLevel) || t.call(n, e)
    } catch (e) {}
}

function o(e) {
    try {
        r.A.nativeModules.requireModule("discord_krisp").setNcModel(e)
    } catch (e) {}
}