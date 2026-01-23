/** Chunk was on web.js **/
/** chunk id: 321090, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => R
}), n(896048);
var r, i = n(311907),
    a = n(73153),
    s = n(77729),
    o = n(626584),
    l = n(837921),
    c = n(41984),
    u = n(680243),
    d = n(672396);

function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let p = new o.A("OverlayV3NativeGPUBoostManager"),
    _ = new Set,
    h = !1,
    m = !1;

function g(e, t) {
    t ? _.add(e) : _.delete(e), O()
}

function E(e) {
    m = e, O()
}

function y() {
    _.clear(), O()
}

function b() {
    return !m && _.size > 0
}
async function O() {
    var e, t, n;
    try {
        let n = b();
        if (h === n || !d.OX) return;
        let r = await (null === s.A || void 0 === s.A || null == (t = s.A.processUtils) || null == (e = t.getGpuProcessId) ? void 0 : e.call(t));
        if (null == r) return;
        l.Ay.SetGPUBoostEnabledByPid(r, n) && (h = n), w.emitChange()
    } catch (e) {
        (null == (n = e.message) ? void 0 : n.includes("IPC method called after context was released")) && y(), p.error("Error during GPU boost request flush:", e)
    }
}

function v(e) {
    g(e.reason, e.enabled)
}

function A(e) {
    let {
        enabled: t,
        mode: n
    } = e;
    n === c.x7.DisabledGPUBoost && E(t), n === c.x7.ForceGPUBoost && g(c.y7.DEV_FORCED_GPU_BOOST, t)
}

function I() {
    y()
}

function S(e) {
    g(c.y7.OVERLAY_UNLOCKED, !e.locked)
}

function T() {
    l.Ay.IsHardwareAcceleratedGPUSchedulingEnabled() && g(c.y7.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED, !0), g(c.y7.OVERLAY_RENDERING, !0)
}

function C() {
    y()
}
class N extends(r = i.Ay.Store) {
    initialize() {
        this.waitFor(u.A)
    }
    getGPUBoostRequests() {
        return _
    }
    isGPUBoosted() {
        return h
    }
    getIsDisabledGPUBoost() {
        return m
    }
}
f(N, "displayName", "Overlay-v3-Native-GPU-Boost-Store");
let w = new N(a.h, __OVERLAY__ || !d.OX ? {} : {
        OVERLAY_SET_GPU_BOOST_REQUESTED: v,
        OVERLAY_RENDER_DEBUG_MODE: A,
        OVERLAY_CRASHED: I,
        OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: T,
        OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: C,
        OVERLAY_SET_INPUT_LOCKED: S
    }),
    R = w