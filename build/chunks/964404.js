/** Chunk was on web.js **/
/** chunk id: 964404, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => C
});
var r, i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(506774),
    l = n(73153);
n(677313), n(743898);
var c = n(185928),
    u = n(652215),
    d = n(698279),
    f = n(815968);

function p(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            p(e, t, n[t])
        })
    }
    return e
}
let h = (window.innerWidth - u.MdR) / 2,
    m = "standard",
    g = null;

function E() {
    return null == g && (g = Math.max((window.innerWidth - u.MdR) * .4, u.da6)), g
}
let y = {};

function b(e) {
    y = _({}, y, e.settings)
}

function O() {
    y = {
        useSystemTheme: y.useSystemTheme,
        darkSidebar: y.darkSidebar
    }
}

function v() {
    null == y && (y = {})
}

function A() {}

function I() {
    return y.darkSidebar = !y.darkSidebar, !0
}

function S() {
    var e;
    let t = s.Ay.PersistedStore.migrateAndReadStoreState("AccessibilityStore", []).state;
    return null != (e = null == t ? void 0 : t.darkSidebar) && e
}
class T extends(r = s.Ay.DeviceSettingsStore) {
    initialize(e) {
        var t, n;
        (y = null != e ? e : {}).darkSidebar = null != (t = y.darkSidebar) ? t : S(), y.hdrDynamicRange = null != (n = y.hdrDynamicRange) ? n : "no-limit"
    }
    getUserAgnosticState() {
        return y
    }
    get displayCompactAvatars() {
        var e;
        return null != (e = y.displayCompactAvatars) && e
    }
    get lowQualityImageMode() {
        var e;
        return null != (e = y.lowQualityImageMode) && e
    }
    get videoUploadQuality() {
        var e;
        return null != (e = y.videoUploadQuality) ? e : m
    }
    get dataSavingMode() {
        var e, t;
        return null != (e = null != (t = y.dataSavingMode) ? t : y.lowQualityImageMode) && e
    }
    get expressionPickerWidth() {
        var e;
        return null != (e = y.expressionPickerWidth) ? e : d.wp.MIN
    }
    get messageRequestSidebarWidth() {
        var e;
        return null != (e = y.messageRequestSidebarWidth) ? e : u.ItT
    }
    get threadSidebarWidth() {
        var e;
        return null != (e = y.threadSidebarWidth) ? e : u.da6
    }
    get postSidebarWidth() {
        var e;
        return null != (e = y.postSidebarWidth) ? e : h
    }
    get callChatSidebarWidth() {
        var e;
        return null != (e = y.callChatSidebarWidth) ? e : u.da6
    }
    get homeSidebarWidth() {
        var e;
        return null != (e = y.homeSidebarWidth) ? e : E()
    }
    get callParticipantsSidebarWidth() {
        var e;
        return null != (e = y.callParticipantsSidebarWidth) ? e : 360
    }
    get callHeaderHeight() {
        return y.callHeaderHeight
    }
    get useSystemTheme() {
        var e;
        return null != (e = y.useSystemTheme) ? e : c.Q_.UNSET
    }
    get activityPanelHeight() {
        return y.activityPanelHeight
    }
    get disableVoiceChannelChangeAlert() {
        var e;
        return null != (e = y.disableVoiceChannelChangeAlert) && e
    }
    get disableEmbeddedActivityPopOutAlert() {
        var e;
        return null != (e = y.disableEmbeddedActivityPopOutAlert) && e
    }
    get disableActivityHardwareAccelerationPrompt() {
        var e;
        return null != (e = y.disableActivityHardwareAccelerationPrompt) && e
    }
    get disableInviteWithTextChannelActivityLaunch() {
        var e;
        return null != (e = y.disableInviteWithTextChannelActivityLaunch) && e
    }
    get disableHideSelfStreamAndVideoConfirmationAlert() {
        var e;
        return null != (e = y.disableHideSelfStreamAndVideoConfirmationAlert) && e
    }
    get pushUpsellUserSettingsDismissed() {
        var e;
        return null != (e = y.pushUpsellDismissed) && e
    }
    get disableActivityHostLeftNitroUpsell() {
        var e;
        return null != (e = y.disableActivityHostLeftNitroUpsell) && e
    }
    get disableCallUserConfirmationPrompt() {
        var e;
        return null != (e = y.disableCallUserConfirmationPrompt) && e
    }
    get disableApplicationSubscriptionCancellationSurvey() {
        var e;
        return null != (e = y.disableApplicationSubscriptionCancellationSurvey) && e
    }
    get darkSidebar() {
        var e;
        return null != (e = y.darkSidebar) && e
    }
    get saveCameraUploadsToDevice() {
        var e;
        return null == (e = y.saveCameraUploadsToDevice) || e
    }
    isVisualRefreshDisabled(e) {
        var t;
        return null != (t = y.disableVisualRefresh) ? t : e
    }
    get listDensity() {
        var e;
        return null != (e = y.listDensity) ? e : f.YP.COZY
    }
    get hdrDynamicRange() {
        var e;
        return null != (e = y.hdrDynamicRange) ? e : "no-limit"
    }
}
p(T, "displayName", "UnsyncedUserSettingsStore"), p(T, "persistKey", "UnsyncedUserSettingsStore"), p(T, "migrations", [() => {
    let e = o.w.get("UserSettingsStore");
    return o.w.remove("UserSettingsStore"), a().pick(e, "dataSavingMode", "videoUploadQuality", "lowQualityImageMode", "useSystemTheme", "expressionPickerWidth", "disableVoiceChannelChangeAlert", "disableHideSelfStreamAndVideoConfirmationAlert", "pushUpsellDismissed", "disableEmbeddedActivityPopOutAlert", "disableActivityHardwareAccelerationPrompt", "disableInviteWithTextChannelActivityLaunch", "disableActivityHostLeftNitroUpsell", "disableCallUserConfirmationPrompt", "disableApplicationSubscriptionCancellationSurvey", "enableAndroidChatListAnimations")
}, e => {
    delete e.disableVisualRefresh
}]);
let C = new T(l.h, {
    UNSYNCED_USER_SETTINGS_UPDATE: b,
    LOGOUT: O,
    LOGIN_SUCCESS: v,
    REGISTER_SUCCESS: A,
    ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: I
})