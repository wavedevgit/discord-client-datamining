/** chunk id: 899699, original params: e,t,n (module,exports,require) **/
"use strict";
let r;
n.d(t, {
    R: () => c,
    m: () => u
}), n(896048), n(65821);
var i = n(626584),
    a = n(837921),
    o = n(672396);
let s = new i.A("OverlayModuleUtils"),
    l = null;

function c() {
    function e(e) {
        for (let t of ["createHostProcess", "connectProcess", "disconnectProcess", "destroyHostProcess"]) null == e[t] && (s.info("polyfilling OverlayModule.".concat(t, "(); Overlay module is probably out of date.")), e[t] = () => void 0);
        return e
    }
    async function t() {
        if (!o.OX) throw s.error("Attempted to load overlay on an unsupported platform."), Error("Overlay is not supported on this platform.");
        try {
            return await a.Ay.ensureModule("discord_overlay2"), r = e(a.Ay.requireModule("discord_overlay2"))
        } catch (e) {
            s.error("failed ensuring discord_overlay2", e);
            return
        }
    }
    return null != r ? Promise.resolve(r) : (null == l && (l = t()), l)
}

function u() {
    if (null == r) try {
        r = a.Ay.requireModule("discord_overlay2")
    } catch (e) {
        s.error("failed ensuring discord_overlay2", e);
        return
    }
    return r
}