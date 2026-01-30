/** chunk id: 757989, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => M
}), n(896048);
var r = n(118356),
    i = n(506774),
    a = n(391973),
    o = n(684013),
    s = n(439372),
    l = n(555528),
    c = n(9302),
    u = n(93465),
    d = n(589051),
    f = n(592598),
    p = n(644434),
    _ = n(652215);

function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            h(e, t, n[t])
        })
    }
    return e
}

function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function E(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let y = "overlay-negative-experiment-notification-settings",
    b = "overlay-negative-experiment-widget-settings",
    O = !1,
    v = !1,
    A = !0,
    I = new r.Vy("OverlayNegativeWidgetExperimentManager");

function S(e) {
    switch (e) {
        case _.uss.VOICE:
        case _.uss.TEXT:
        case _.uss.GUILDS:
        case _.uss.GUILDS_TEXT:
        case _.uss.QUICK_ACTIONS:
            return c.OVERLAY_LAYOUT_ID;
        default:
            return p.G
    }
}
let T = {
    [_.uss.VIDEO]: !0,
    [_.uss.VOICE]: !0,
    [_.uss.VOICE_V3]: !0
};

function C(e) {
    let [t] = l.A.getWidgetsByTypeAndLayout(e, S(e));
    if (null != t || ([t] = l.A.getWidgetsByType(e), null != t)) return t;
    for (let t of Object.values(l.A.getAllWidgets()))
        if (t.type === e) return t
}
class N {
    constructor() {
        h(this, "_widgetSettings", void 0), h(this, "_notificationSettings", void 0), h(this, "setWidgetSetting", (e, t) => {
            var n;
            this._widgetSettings[e] = m({}, null != (n = this._widgetSettings[e]) ? n : {}, t), __OVERLAY__ || i.w.set(b, this._widgetSettings)
        }), h(this, "getWidgetSetting", e => this._widgetSettings[e]), h(this, "hasWidgetSetting", e => null != this._widgetSettings[e]), h(this, "setNotificationSetting", (e, t) => {
            var n;
            this._notificationSettings[e] = m({}, null != (n = this._notificationSettings[e]) ? n : {}, t), __OVERLAY__ || i.w.set(y, this._notificationSettings)
        }), h(this, "hasNotificationSetting", e => null != this._notificationSettings[e]), h(this, "getNotificationSetting", e => this._notificationSettings[e]), this._widgetSettings = i.w.get(b, {}), this._notificationSettings = i.w.get(y, {}), __OVERLAY__ && (this._widgetSettings = {}, this._notificationSettings = {})
    }
}
class w {
    constructor() {
        h(this, "_defaultWidgetPinned", {}), h(this, "initializeAllDefaultWidgetConfigs", () => {
            for (let e of Object.keys(_.uss)) {
                let t = e,
                    n = l.A.getWidgetConfig(t);
                null != n && null == this._defaultWidgetPinned[t] && (this._defaultWidgetPinned[t] = n.defaultSettings.pinned)
            }
        }), h(this, "overrideDefaultWidgetPinned", async (e, t) => {
            if (__OVERLAY__) return;
            let n = l.A.getWidgetConfig(e);
            null != n && (null == this._defaultWidgetPinned[e] && (this._defaultWidgetPinned[e] = n.defaultSettings.pinned), await (0, a.qH)(e, {
                defaultSettings: E(m({}, n.defaultSettings), {
                    pinned: t
                })
            }))
        }), h(this, "restoreDefaultWidgetPinned", async e => {
            if (__OVERLAY__) return;
            let t = l.A.getWidgetConfig(e);
            if (null == t || null == this._defaultWidgetPinned[e]) return;
            let n = this._defaultWidgetPinned[e];
            await (0, a.qH)(e, {
                defaultSettings: E(m({}, t.defaultSettings), {
                    pinned: n
                })
            })
        }), h(this, "getDefaultWidgetPinned", e => {
            let t = this._defaultWidgetPinned[e];
            return null != t ? t : e in T && T[e]
        })
    }
}
class R {
    constructor() {
        h(this, "_storage", new N), h(this, "_config", new w), h(this, "updateWidgetPinned", (e, t) => {
            this._storage.setWidgetSetting(e, {
                pinned: t
            })
        }), h(this, "hasWidgetSetting", e => this._storage.hasWidgetSetting(e)), h(this, "initializeWidget", e => {
            let t = C(e);
            if (null == t || this.hasWidgetSetting(e)) return;
            let n = t.pinned;
            this.updateWidgetPinned(e, n)
        }), h(this, "unpinWidget", async e => {
            let t = C(e);
            null != t && (this.initializeWidget(e), __OVERLAY__ || await this._config.overrideDefaultWidgetPinned(e, O), await (0, a.v0)(t.id, {
                forcedPinnedState: O,
                shouldTrack: v
            }))
        }), h(this, "restoreWidget", async e => {
            var t;
            let n = this._storage.getWidgetSetting(e),
                r = this._config.getDefaultWidgetPinned(e),
                i = null != (t = null == n ? void 0 : n.pinned) ? t : r,
                o = C(e);
            null == o || (e === _.uss.VOICE && (i = !0), __OVERLAY__ || await this._config.restoreDefaultWidgetPinned(e), null != i && await (0, a.v0)(o.id, {
                forcedPinnedState: i,
                shouldTrack: v
            }))
        }), h(this, "updateNotificationSetting", (e, t) => {
            this._storage.setNotificationSetting(e, {
                disabled: t
            })
        }), h(this, "hasNotificationSetting", e => this._storage.hasNotificationSetting(e)), h(this, "initializeNotification", e => {
            if (this.hasNotificationSetting(e)) return;
            let t = f.A.isNotificationDisabledBySetting(e);
            this.updateNotificationSetting(e, t)
        }), h(this, "disableNotification", async e => {
            this.initializeNotification(e), await o.A.setNotificationDisabledSetting(e, A, v)
        }), h(this, "restoreNotification", async e => {
            var t;
            let n = this._storage.getNotificationSetting(e),
                r = null != (t = null == n ? void 0 : n.disabled) && t;
            null != r && await o.A.setNotificationDisabledSetting(e, r, v)
        }), this._config.initializeAllDefaultWidgetConfigs()
    }
}

function P() {
    return Object.values(u.M)
}
let D = new Set([u.M.WELCOME_GENERAL, u.M.GO_LIVE_NUDGE, u.M.GAME_ACTIVITY]),
    L = "overlay-negative-widget-experiment-bucket";
class x extends s.A {
    constructor() {
        var e, t;
        super(), e = this, h(this, "_settings", new R), h(this, "_hasInitialized", !1), h(this, "_isProcessing", !1), h(this, "_appliedExperimentBucket", "control"), h(this, "setAppliedExperimentBucket", e => {
            this._appliedExperimentBucket = e, i.w.set(L, e)
        }), h(this, "getRawAppliedExperimentBucket", () => (0, d.H)("applied-experiment-bucket")), h(this, "getWidgetExperimentSettings", e => {
            let {
                voiceWidgetDefaultUnpinned: t,
                videoWidgetDefaultUnpinned: n,
                unlockedOnlyDefaultOverlay: r
            } = (0, d.aS)("".concat(__OVERLAY__ ? "LegacyOverlay" : "MainApp", "_ExperimentManager_WidgetSettings"), e), i = new Set, a = new Set, o = t || r, s = n || r;
            return o ? (i.add(_.uss.VOICE_V3), i.add(_.uss.VOICE)) : (a.add(_.uss.VOICE_V3), a.add(_.uss.VOICE)), s ? i.add(_.uss.VIDEO) : a.add(_.uss.VIDEO), {
                widgetsToOverride: i,
                widgetsToRestore: a
            }
        }), h(this, "processWidgetExperiment", async function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                {
                    widgetsToOverride: n,
                    widgetsToRestore: r
                } = e.getWidgetExperimentSettings(t);
            for (let t of Object.values(_.uss)) e._settings.initializeWidget(t);
            for (let t of r) await e._settings.restoreWidget(t);
            for (let t of n) await e._settings.unpinWidget(t);
            n.size > 0 && I.info("Experiment Override: Widgets", {
                widgetsToRestore: r,
                widgetsToOverride: n
            })
        }), h(this, "getNotificationExperimentSettings", e => {
            let {
                notificationsDefaultOff: t,
                disableWelcomeNotification: n,
                unlockedOnlyDefaultOverlay: r
            } = (0, d.aS)("".concat(__OVERLAY__ ? "LegacyOverlay" : "MainApp", "_ExperimentManager_NotificationSettings"), e), i = new Set, a = new Set;
            for (let e of P()) r ? i.add(e) : n ? D.has(e) ? i.add(e) : a.add(e) : t && e !== u.M.WELCOME_GENERAL ? i.add(e) : a.add(e);
            return {
                notificationsToOverride: i,
                notificationsToRestore: a
            }
        }), h(this, "processNotificationExperiment", async e => {
            if (__OVERLAY__) return;
            let {
                notificationsToOverride: t,
                notificationsToRestore: n
            } = this.getNotificationExperimentSettings(e);
            for (let e of P()) this._settings.initializeNotification(e);
            for (let e of n) await this._settings.restoreNotification(e);
            for (let e of t) await this._settings.disableNotification(e);
            t.size > 0 && I.info("Experiment Override: Notifications", {
                notificationsToRestore: n,
                notificationsToOverride: t
            })
        }), h(this, "processAllExperiments", async e => {
            if (this._isProcessing) return;
            let t = this.getRawAppliedExperimentBucket();
            if (this._appliedExperimentBucket !== t) {
                this._isProcessing = !0;
                try {
                    await this.processWidgetExperiment(e), await this.processNotificationExperiment(e)
                } catch (e) {
                    I.error("Experiments processing failed", {
                        error: e
                    })
                } finally {
                    this._isProcessing = !1, this.setAppliedExperimentBucket(t)
                }
            }
        }), h(this, "handlePostConnectionOpen", async () => {
            __OVERLAY__ || this._isProcessing || this._hasInitialized || (this._hasInitialized = !0, await this.processAllExperiments(!1))
        }), h(this, "handleExperimentOverrideBucket", async () => {
            this._isProcessing || await this.processAllExperiments(!1)
        }), h(this, "handleSetNotificationDisabledSetting", e => {
            let {
                setting: t,
                disabled: n
            } = e;
            this._isProcessing || __OVERLAY__ || this._settings.updateNotificationSetting(t, n)
        }), h(this, "handleSetPinned", e => {
            let {
                widgetId: t,
                pinned: n
            } = e;
            if (this._isProcessing || null != n) return;
            let r = l.A.getWidget(t);
            if (null == r) return;
            let i = r.pinned;
            this._settings.updateWidgetPinned(r.type, i)
        }), h(this, "actions", {
            POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
            EXPERIMENT_OVERRIDE_BUCKET: this.handleExperimentOverrideBucket,
            OVERLAY_SET_NOTIFICATION_DISABLED_SETTING: this.handleSetNotificationDisabledSetting,
            LAYOUT_SET_PINNED: this.handleSetPinned
        }), this._appliedExperimentBucket = null != (t = i.w.get(L)) ? t : "control"
    }
}
let M = new x