/** Chunk was on web.js **/
/** chunk id: 265059, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p,
    q: () => c
});
var r, i = n(311907),
    a = n(73153),
    o = n(540999);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            s(e, t, n[t])
        })
    }
    return e
}
let c = 460,
    u = {
        sidebarWidth: 460,
        lastOpenTabId: null,
        displayTools: !1,
        showDevWidget: !1,
        devWidgetPosition: {
            x: 0,
            y: 0
        },
        sortedScreenKeys: []
    };

function d(e) {
    o.A.isDeveloper && (u = l({}, u, e.settings))
}
class f extends(r = i.Ay.DeviceSettingsStore) {
    initialize(e) {
        u = null != e ? e : u, a.h.actionLogger.persist = o.A.isDeveloper
    }
    getUserAgnosticState() {
        return u
    }
    get sidebarWidth() {
        return this.displayTools ? u.sidebarWidth : 0
    }
    get lastOpenTabId() {
        var e;
        return null != (e = u.lastOpenTabId) ? e : null
    }
    get displayTools() {
        return o.A.isDeveloper && u.displayTools
    }
    get showDevWidget() {
        return o.A.isDeveloper && u.showDevWidget
    }
    get devWidgetPosition() {
        return u.devWidgetPosition
    }
    get sortedScreenKeys() {
        return u.sortedScreenKeys
    }
}
s(f, "displayName", "DevToolsSettingsStore"), s(f, "persistKey", "DevToolsSettingsStore");
let p = new f(a.h, {
    DEV_TOOLS_SETTINGS_UPDATE: d
})