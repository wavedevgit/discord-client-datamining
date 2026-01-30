/** chunk id: 643501, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    default: () => I
}), n(896048);
var r, i = n(311907),
    a = n(73153),
    o = n(528767),
    s = n(977997);

function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let c = null,
    u = null,
    d = new Set,
    f = {},
    p = {},
    _ = new Set;

function h(e) {
    let {
        sessionId: t
    } = e;
    c = t, u = null
}

function m() {
    c = null, u = null
}

function g(e) {
    let {
        sessionType: t,
        nonce: n,
        channelId: r,
        deviceId: i,
        commandId: a
    } = e;
    u = {
        type: t,
        nonce: n,
        channelId: r,
        startedAt: Date.now(),
        deviceId: i,
        commandId: a
    }
}

function E(e) {
    let {
        platform: t
    } = e;
    _.add(t)
}

function y(e) {
    let {
        platform: t,
        devices: n
    } = e;
    _.delete(t);
    let r = f[t] = {},
        i = {};
    for (let e of n) r[e.id] = e, p[t] === e.id && (i[t] = e.id);
    p = i
}

function b(e) {
    let {
        platform: t
    } = e;
    _.delete(t)
}

function O(e) {
    let {
        platform: t,
        deviceId: n
    } = e;
    p[t] = n
}
let v = Object.freeze({});
class A extends(r = i.Ay.DeviceSettingsStore) {
    initialize(e) {
        null != e && (p = e.lastSelectedDeviceByPlatform), this.waitFor(o.A, s.A)
    }
    getUserAgnosticState() {
        return {
            lastSelectedDeviceByPlatform: p
        }
    }
    getDevicesForPlatform(e) {
        var t;
        return null != (t = f[e]) ? t : v
    }
    getLastSelectedDeviceByPlatform(e) {
        return p[e]
    }
    getDevice(e, t) {
        var n;
        return null == (n = f[e]) ? void 0 : n[t]
    }
    getFetchingDevices(e) {
        return _.has(e)
    }
    getPendingDeviceCommands() {
        return d
    }
    getRemoteSessionId() {
        return c
    }
    getAwaitingRemoteSessionInfo() {
        return u
    }
}
l(A, "displayName", "GameConsoleStore"), l(A, "persistKey", "GameConsoleStore");
let I = new A(a.h, {
    REMOTE_SESSION_CONNECT: h,
    REMOTE_SESSION_DISCONNECT: m,
    WAIT_FOR_REMOTE_SESSION: g,
    GAME_CONSOLE_FETCH_DEVICES_START: E,
    GAME_CONSOLE_FETCH_DEVICES_SUCCESS: y,
    GAME_CONSOLE_FETCH_DEVICES_FAIL: b,
    GAME_CONSOLE_SELECT_DEVICE: O
})