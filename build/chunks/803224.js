/** chunk id: 803224, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => O
});
var r, i = n(311907),
    a = n(73153),
    o = n(723702),
    s = n(652215);

function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            l(e, t, n[t])
        })
    }
    return e
}
let u = {
        desktopType: o.isPlatformEmbedded ? s.nRU.ALL : s.nRU.NEVER,
        disableAllSounds: !1,
        disabledSounds: [],
        ttsType: s.aVn.NEVER,
        disableUnreadBadge: !1,
        taskbarFlash: !0,
        notifyMessagesInSelectedChannel: !1
    },
    d = u;

function f(e) {
    let {
        desktopType: t
    } = e;
    d.desktopType = t
}

function p(e) {
    let {
        sounds: t
    } = e;
    d.disabledSounds = t
}

function _() {
    d.disableAllSounds = !d.disableAllSounds
}

function h(e) {
    let {
        ttsType: t
    } = e;
    d.ttsType = t
}

function m(e) {
    let {
        disableUnreadBadge: t
    } = e;
    d.disableUnreadBadge = t
}

function g(e) {
    let {
        taskbarFlash: t
    } = e;
    d.taskbarFlash = t
}

function E(e) {
    let {
        notify: t
    } = e;
    d.notifyMessagesInSelectedChannel = t
}

function y(e) {
    let {
        enabled: t
    } = e;
    t === s.kCE.BLOCKED ? f({
        desktopType: s.nRU.NEVER
    }) : t === s.kCE.ENABLED && f({
        desktopType: s.nRU.ALL
    })
}
class b extends(r = i.Ay.DeviceSettingsStore) {
    initialize(e) {
        d = c({}, u, e)
    }
    getUserAgnosticState() {
        return d
    }
    getDesktopType() {
        return d.desktopType
    }
    getTTSType() {
        return d.ttsType
    }
    getDisabledSounds() {
        return d.disabledSounds
    }
    getDisableAllSounds() {
        return d.disableAllSounds
    }
    getDisableUnreadBadge() {
        return d.disableUnreadBadge
    }
    getNotifyMessagesInSelectedChannel() {
        return d.notifyMessagesInSelectedChannel
    }
    get taskbarFlash() {
        return d.taskbarFlash
    }
    isSoundDisabled(e) {
        return d.disableAllSounds || -1 !== d.disabledSounds.indexOf(e)
    }
}
l(b, "displayName", "NotificationSettingsStore"), l(b, "persistKey", "notifications"), l(b, "migrations", [e => {
    let t = c({}, e);
    return t.disabledSounds = t.disabledSounds || [], t.disableUnreadBadge = t.disableUnreadBadge || !1, t.taskbarFlash = null == t.taskbarFlash || t.taskbarFlash, t.ttsType = t.ttsType || s.aVn.NEVER, null == t.desktopType && (t.desktopType = o.isPlatformEmbedded ? s.nRU.ALL : s.nRU.NEVER), t
}]);
let O = new b(a.h, {
    NOTIFICATIONS_SET_DESKTOP_TYPE: f,
    NOTIFICATIONS_SET_TTS_TYPE: h,
    NOTIFICATIONS_SET_DISABLED_SOUNDS: p,
    NOTIFICATIONS_TOGGLE_ALL_DISABLED: _,
    NOTIFICATIONS_SET_PERMISSION_STATE: y,
    NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: m,
    NOTIFICATIONS_SET_TASKBAR_FLASH: g,
    NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: E
})