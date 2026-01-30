/** chunk id: 719129, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    GH: () => I,
    Zi: () => y,
    c1: () => S,
    r6: () => T
}), n(65821);
var r = n(73153),
    i = n(386406),
    a = n(56562),
    o = n(15285),
    s = n(760751),
    l = n(287809),
    c = n(954571),
    u = n(723702),
    d = n(837921),
    f = n(241696),
    p = n(652215);

function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            _(e, t, n[t])
        })
    }
    return e
}

function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function g(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let E = {
    development: [0, 0, 0, 0],
    canary: [1, 0, 30, 10],
    ptb: [1, 0, 1005, 2],
    stable: [1, 0, 9001, 2]
};

function y() {
    var e;
    return !(null === d.Ay || void 0 === d.Ay || null == (e = d.Ay.isModuleVersionAtLeast) ? void 0 : e.call(d.Ay, "discord_hook", E))
}
let b = null;
async function O() {
    if (!(0, u.isWindows)()) return Promise.reject(Error("Hook is only available on Windows"));
    if (y()) return Promise.reject(Error("Hook module is too old"));
    await d.Ay.ensureModule("discord_hook");
    let e = await d.Ay.requireModule("discord_hook");
    return A(e), e
}
async function v() {
    return null != b ? b : b = await O()
}

function A(e) {
    if (null == e.setFlags) return;
    let t = 0,
        n = f.A.getCurrentConfig({
            location: "edd7d3_1"
        }, {
            autoTrackExposure: !1
        });
    n.enableCrashReporting && (console.log("Hook: Enabling crash reporting."), t |= 1);
    let r = l.default.getCurrentUser();
    null != r && (r.isStaff() || n.enableCrashTrigger) && (console.log("Hook: Enabling crash trigger."), t |= 2), e.setFlags(t)
}

function I(e, t) {
    return O().then(n => {
        var l;
        let u = null == (l = o.Ay.getGameForPID(e)) ? void 0 : l.name,
            d = s.A.getGameByName(u),
            f = null;
        return new Promise(s => {
            let l = (e, n) => {
                    c.default.track(p.HAw.HOOK_RESULT, h({
                        game_name: u,
                        game_id: null == d ? null : d.id,
                        success: n,
                        error: e
                    }, t)), null != f && (clearTimeout(f), f = null), n ? s() : s(e = null != e ? e : "Unknown hook error")
                },
                _ = o.Ay.getOverlayOptionsForPID(e),
                m = g(h({}, a.gH, _), {
                    elevate: o.Ay.shouldElevateProcessForPID(e)
                });
            null == m.allowHook || m.allowHook ? (f = setTimeout(() => {
                n.cancelAttachToProcess(e), l("Timed out waiting for hook response", !1)
            }, 12e4), n.attachToProcess(e, m, l), r.h.wait(() => i.A.clearElevatedProcess())) : s("Hook is disabled for this game")
        })
    })
}

function S(e) {
    return O().then(t => {
        t.cancelAttachToProcess(e)
    })
}

function T() {
    return v().then(e => null != e.findSteamProcess ? e.findSteamProcess() : null).catch(() => null)
}