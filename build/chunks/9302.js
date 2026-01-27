/** Chunk was on web.js **/
/** chunk id: 9302, original params: e,t,n (module,exports,require) **/
"use strict";
let r;
n.r(t), n.d(t, {
    DEV_PID: () => _,
    OVERLAY_DEFAULT_RESOLUTION: () => d,
    OVERLAY_LAYOUT_ID: () => p,
    OVERLAY_MIN_RESOLUTION: () => f,
    OVERLAY_VERSION: () => u,
    UNSET_PID: () => h,
    getPID: () => g,
    getRPCAuthToken: () => b,
    isValidGamePID: () => y,
    log: () => O,
    setOutOfProcessSupport: () => A,
    setPID: () => E,
    supportsLegacy: () => S,
    supportsOutOfProcess: () => I,
    validResolution: () => v
}), n(896048), n(680155), n(323874), n(14289), n(35956), n(747238);
var i = n(719129),
    a = n(996308),
    o = n(723702),
    s = n(837921),
    l = n(652215),
    c = n(672396);
let u = 2,
    d = {
        width: 3840,
        height: 2160
    },
    f = {
        width: 768,
        height: 432
    },
    p = "overlay_default",
    _ = -2,
    h = -1,
    m = !1;

function g() {
    var e;
    if (void 0 !== r && r !== h) return r;
    let t = parseInt(null != (e = new URLSearchParams(window.location.search).get("pid")) ? e : "", 10);
    return isNaN(t) && (t = h), r = t
}

function E(e) {
    r = e
}

function y(e) {
    return null != e && 0 !== e && e !== h
}

function b() {
    return new URLSearchParams(window.location.search).get("rpc_auth_token")
}

function O(e) {
    (0, a.tN)({
        type: l.kGV.LOG_MESSAGES,
        pid: g(),
        token: b(),
        payload: e
    })
}

function v(e) {
    return !o.isPlatformEmbedded || e.width >= f.width && e.height >= f.height
}

function A(e) {
    m = e
}

function I() {
    return m
}

function S() {
    let e = (0, o.isWindows)() && "arm64" === s.Ay.architecture;
    return c.OX && !e && !(0, i.Zi)()
}