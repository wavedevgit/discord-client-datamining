/** chunk id: 777414, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => er
}), n(896048), n(65821), n(638769);
var r = n(835245),
    i = n(499979),
    a = n(73153),
    o = n(56562),
    s = n(439372),
    l = n(77729),
    c = n(626584),
    u = n(973522),
    d = n(15285),
    f = n(41984),
    p = n(833551),
    _ = n(592598),
    h = n(157257),
    m = n(242286),
    g = n(256415),
    E = n(954571),
    y = n(837921),
    b = n(9302),
    O = n(365971),
    v = n(427603),
    A = n(710093),
    I = n(652215),
    S = n(672396);

function T(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            T(e, t, n[t])
        })
    }
    return e
}

function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function w(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let R = 7,
    P = !1,
    D = new c.A("OverlayUsageStatsManager");
P || (D.verbose = () => {});
class L {
    increment(e) {
        ++this.actions[e]
    }
    getAnalytics(e, t) {
        let n = this.actions[S.uj.Viewed],
            r = this.actions[S.uj.Clicked];
        return 0 === n && 0 === r ? null : {
            event_uuid: t,
            notification_type: e,
            viewed_count: n,
            clicked_count: r
        }
    }
    constructor() {
        T(this, "actions", {
            [S.uj.Viewed]: 0,
            [S.uj.Clicked]: 0
        })
    }
}
class x {
    static makeEmptyGroupAnalytics() {
        return {
            [S.BR.Nudge]: 0,
            [S.BR.TextChat]: 0,
            [S.BR.VoiceCall]: 0,
            [S.BR.Activity]: 0,
            [S.BR.Clips]: 0,
            [S.BR.Other]: 0
        }
    }
    static makeCounters() {
        let e = {},
            t = Object.values(S.KS);
        for (let n of t) e[n] = new L;
        if (Object.keys(e).length !== t.length) throw Error("NotificationAnalytics: Failed to make counters");
        return e
    }
    increment(e, t) {
        let n = this.groupCounters[t];
        if (null == n) return void D.error("NotificationCounter: Unknown notification action: ".concat(t));
        let r = (0, S.Vo)(e);
        if (!(r in n)) return void D.error("NotificationCounter: Unknown notification action: ".concat(e));
        ++n[r], ++this.actionCounters[t];
        let i = this.counters[e];
        null == i ? D.error("NotificationCounter: Unknown notification type: ".concat(e)) : i.increment(t)
    }
    getAnalytics() {
        let e = this.groupCounters[S.uj.Viewed],
            t = this.groupCounters[S.uj.Clicked];
        return {
            notices_viewed: this.actionCounters[S.uj.Viewed],
            notices_clicked: this.actionCounters[S.uj.Clicked],
            notice_nudge_viewed: e[S.BR.Nudge],
            notice_text_chat_viewed: e[S.BR.TextChat],
            notice_voice_call_viewed: e[S.BR.VoiceCall],
            notice_activity_viewed: e[S.BR.Activity],
            notice_clips_viewed: e[S.BR.Clips],
            notice_other_viewed: e[S.BR.Other],
            notice_nudge_clicked: t[S.BR.Nudge],
            notice_text_chat_clicked: t[S.BR.TextChat],
            notice_voice_call_clicked: t[S.BR.VoiceCall],
            notice_activity_clicked: t[S.BR.Activity],
            notice_clips_clicked: t[S.BR.Clips],
            notice_other_clicked: t[S.BR.Other]
        }
    }
    getCounterAnalytics(e) {
        return Object.entries(this.counters).map(t => {
            let [n, r] = t;
            return r.getAnalytics(n, e)
        }).filter(e => null != e)
    }
    constructor() {
        T(this, "actionCounters", {
            [S.uj.Viewed]: 0,
            [S.uj.Clicked]: 0
        }), T(this, "groupCounters", {
            [S.uj.Viewed]: x.makeEmptyGroupAnalytics(),
            [S.uj.Clicked]: x.makeEmptyGroupAnalytics()
        }), T(this, "counters", x.makeCounters())
    }
}
class M {
    static makeEmptyAnalytics() {
        return {
            initialized: !1,
            pinnedToggledCount: 0,
            visibleDuration: new i.W0,
            pinned: !1
        }
    }
    getByType(e) {
        return this.types[e]
    }
    getByWidget(e) {
        switch (e) {
            case I.uss.VOICE:
                return this.getByType(0);
            case I.uss.TEXT:
                return this.getByType(1);
            default:
                return null
        }
    }
    getAnalytics() {
        let e = this.types[0],
            t = this.types[1];
        return {
            widget_voice_pin_toggle_count: e.pinnedToggledCount,
            widget_voice_visible_duration: e.visibleDuration.elapsed().asMilliseconds(),
            widget_voice_pinned: e.pinned,
            widget_text_pin_toggle_count: t.pinnedToggledCount,
            widget_text_visible_duration: t.visibleDuration.elapsed().asMilliseconds(),
            widget_text_pinned: t.pinned
        }
    }
    constructor() {
        T(this, "types", {
            0: M.makeEmptyAnalytics(),
            1: M.makeEmptyAnalytics()
        })
    }
}
class j {
    update() {
        let e = this.game,
            t = y.Ay.GetWindowFullscreenTypeByPid(e.pid, e.name, e.fullscreenType);
        if (t !== this.lastscreenType) {
            if (!(t in this.counters)) {
                let n = p.default.getTrackedGameByPid(e.pid);
                D.error("ScreenTypeAnalytics: Unknown screen type for ".concat(this.game.name, ": ").concat(t), {
                    rawGame: this.game,
                    overlayTrackedGame: n
                });
                return
            }
            this.counters[t].start(), null != this.lastscreenType && this.counters[this.lastscreenType].stop(), this.lastscreenType = t
        }
    }
    getAnalytics() {
        var e, t, n;
        let r = e => this.counters[e].elapsed().asMilliseconds(),
            i = {
                [o.aI.UNKNOWN]: r(o.aI.UNKNOWN),
                [o.aI.WINDOWED]: r(o.aI.WINDOWED),
                [o.aI.MAXIMIZED]: r(o.aI.MAXIMIZED),
                [o.aI.BORDERLESS_FULLSCREEN]: r(o.aI.BORDERLESS_FULLSCREEN),
                [o.aI.FULLSCREEN]: r(o.aI.FULLSCREEN),
                [o.aI.MINIMIZED]: r(o.aI.MINIMIZED)
            },
            a = Object.entries(i).sort((e, t) => {
                let [n, r] = e, [i, a] = t;
                return a - r
            })[0],
            s = parseInt(a[0], 10),
            l = isNaN(s) ? o.aI.UNKNOWN : s;
        isNaN(s) && D.error("ScreenTypeAnalytics: Unknown most used screen type: ".concat(a), i);
        let c = A.R.getGameDisplayMode(null != (e = this.game.name) ? e : this.game.id);
        A.R.setGameDisplayMode(null != (t = this.game.name) ? t : this.game.id, l);
        let u = {
            screentype_unknown_duration: i[o.aI.UNKNOWN],
            screentype_windowed_duration: i[o.aI.WINDOWED],
            screentype_maximized_duration: i[o.aI.MAXIMIZED],
            screentype_borderless_fullscreen_duration: i[o.aI.BORDERLESS_FULLSCREEN],
            screentype_fullscreen_duration: i[o.aI.FULLSCREEN],
            screentype_minimized_duration: i[o.aI.MINIMIZED]
        };
        return w(C({}, u), {
            screentype_global_supported_duration: u.screentype_windowed_duration + u.screentype_maximized_duration + u.screentype_borderless_fullscreen_duration,
            screentype_global_unsupported_duration: u.screentype_fullscreen_duration,
            screentype_initial: o.aI[this.game.fullscreenType],
            screentype_most_used: o.aI[l],
            screentype_most_used_previous: null == c ? null : o.aI[c],
            screentype_last: o.aI[null != (n = this.lastscreenType) ? n : o.aI.UNKNOWN],
            game_display_mode_is_adjustment_supported: y.Ay.GameDisplayModeIsGameSupported(this.game.name)
        })
    }
    destroy() {
        clearInterval(this.updateScreenInterval)
    }
    constructor(e) {
        T(this, "game", void 0), T(this, "counters", void 0), T(this, "lastscreenType", void 0), T(this, "updateScreenInterval", void 0), this.game = e, this.counters = {
            [o.aI.UNKNOWN]: new i.W0,
            [o.aI.WINDOWED]: new i.W0,
            [o.aI.MAXIMIZED]: new i.W0,
            [o.aI.BORDERLESS_FULLSCREEN]: new i.W0,
            [o.aI.FULLSCREEN]: new i.W0,
            [o.aI.MINIMIZED]: new i.W0
        }, this.lastscreenType = void 0, this.update(), this.updateScreenInterval = setInterval(() => this.update(), 1e4)
    }
}

function k() {
    try {
        return crypto.randomUUID()
    } catch (e) {
        return D.error("OverlayUsageStatsManager: Failed to generate UUID", e), (0, r.A)()
    }
}
class U {
    static get debug() {
        return {
            gamesByPid: U.gamesByPid,
            gamesByName: U.gamesByName
        }
    }
    set successfullyShown(e) {
        this._successfullyShown = e
    }
    getQunsName(e) {
        let t = null != e ? e : o.YL.QUNS_UNKNOWN;
        return o.YL[t]
    }
    buildOverlayMethodStats(e, t) {
        let n = this.overlayMethodStats,
            {
                oopEnabled: r,
                legacyEnabled: i
            } = p.default.getPerGameEnabledStatus(t),
            a = {
                legacy_override: !0 === i,
                enabled: r || i,
                quns_mode: this.getQunsName(o.YL.QUNS_UNKNOWN),
                current_method: e
            };
        if (null != t) {
            let {
                quns: e
            } = y.Ay.GetWindowFullscreenTypeExtraByPid(t.pid, t.gameName);
            a.quns_mode = this.getQunsName(e)
        }
        if (null == e) {
            let e = null != t ? p.default.getRenderMethod(t.pid) : null;
            return C({
                original_method: null != e ? e : f.Ue.Disabled
            }, a)
        }
        if (null == n) return C({
            original_method: e
        }, a);
        let s = e !== n.original_method ? e : void 0;
        return C(w(C({}, n), {
            any_other_method: null != s ? s : n.any_other_method
        }), a)
    }
    static getGameName(e) {
        var t, n;
        return null != (t = null != (n = e.name) ? n : e.id) ? t : null
    }
    static ignoreGame(e) {
        var t;
        return null != (t = e.isLauncher) && t
    }
    static create(e) {
        let t = U.getGameName(e);
        if (U.ignoreGame(e) || null == t) return null;
        let n = new U(C({}, e));
        return n.gameConcurrentGameCount = Object.values(U.gamesByPid).length, U.gamesByPid[e.pid] = n, U.gamesByName[t] = n, n
    }
    static getByName(e) {
        var t;
        if (null == e) return null;
        let n = null == (t = d.Ay.getRunningGames().find(t => {
            var n;
            return (null == (n = (0, d.Zh)(t).name) ? void 0 : n.toLowerCase()) === e.toLowerCase()
        })) ? void 0 : t.pid;
        return null != n ? U.gamesByPid[n] : null
    }
    static getByPid(e) {
        return U.gamesByPid[e]
    }
    static async destroy(e) {
        let t = U.getGameName(e);
        if (U.ignoreGame(e) || null == t) return;
        let n = U.gamesByPid[e.pid];
        if (null != n) {
            n.screenAnalytics.destroy();
            let t = await n.getAnalytics();
            for (let e of (E.default.track(I.HAw.OVERLAY_USAGE_STATS, t.usage), t.notifications)) E.default.track(I.HAw.OVERLAY_USAGE_NOTIFICATION_STATS, e);
            D.verbose("OVERLAY_USAGE_STATS: ".concat(e.name), t), delete U.gamesByPid[e.pid]
        }
        delete U.gamesByName[t]
    }
    setOverlayMethod(e) {
        this.overlayMethod = e, this.overlayMethodStats = this.buildOverlayMethodStats(e, this.game), D.verbose("setOverlayMethod", {
            method: e,
            game: this.game,
            overlayStatus: this.overlayStatus,
            overlayMethodStats: this.overlayMethodStats
        })
    }
    setOverlayState(e, t, n) {
        n || (this.overlayState = e, this.overlayStateReason = t), this.overlayStateRaw = e, this.overlayStateRawReason = t
    }
    getSettingMethod() {
        return null == this.overlayMethod ? f.Ue[f.Ue.Disabled] : f.Ue[this.overlayMethod]
    }
    async getAnalytics() {
        var e, t, n, r, i, a, o, s, c;
        let p = null != (e = this.overlayMethod) ? e : f.Ue.Disabled,
            h = {
                setting_is_enabled: m.default.enabled,
                setting_method: this.getSettingMethod(),
                setting_display_user: g.default.getDisplayUserMode(),
                setting_display_name: g.default.getDisplayNameMode(),
                setting_avatar_size: g.default.getAvatarSizeMode(),
                setting_notification_position: g.default.getNotificationPositionMode(),
                setting_chat_notification: _.A.isNotificationDisabled(S.KS.TextChat) ? "DISABLED" : "ENABLED"
            },
            E = (0, d.hw)(this.game),
            y = (0, u.wH)(this.game),
            b = null != (t = this.overlayMethodStats) ? t : this.buildOverlayMethodStats(p, this.game),
            O = null != b.any_other_method ? f.Ue[b.any_other_method] : null,
            v = null != b.current_method ? f.Ue[b.current_method] : null,
            A = E.enabledLegacy || E.enabledOOP;
        return {
            usage: w(C(w(C({
                event_uuid: this.uuid,
                overlay_usage_stats_version: R
            }, this.notificationAnalytics.getAnalytics(), this.widgetAnalytics.getAnalytics(), this.screenAnalytics.getAnalytics(), h), {
                overlay_status_game_enabled: A,
                overlay_status_game_source: E.source,
                game_name: null != (n = y.gameName) ? n : null,
                game_id: null != (r = y.gameId) ? r : null,
                game_exe: null != (i = y.exe) ? i : null,
                game_elevated: this.game.elevated,
                game_is_launcher: null != (a = this.game.isLauncher) && a,
                game_duration: this.gameTimer.elapsed().asMilliseconds(),
                game_focused_duration: this.gameFocusedTimer.elapsed().asMilliseconds(),
                game_focused_change_count: this.gameFocusChangedCount,
                game_concurrent_game_count: this.gameConcurrentGameCount,
                ui_unlocked_duration: this.unlockedTimer.elapsed().asMilliseconds(),
                ui_unlocked_count: this.uiUnlockedCount,
                ui_locked_count: this.uiLockedCount,
                soundboard_shown_duration: this.soundboardShownTimer.elapsed().asMilliseconds(),
                soundboard_shown_count: this.soundboardShownCount,
                soundboard_keep_open_count: this.soundboardKeepOpenCount,
                hardware_display_count: null != (o = await (null === l.A || void 0 === l.A || null == (c = l.A.hardware) || null == (s = c.getDisplayCount) ? void 0 : s.call(c))) ? o : null,
                message_ack_count: this.overlayMessageAckCount,
                message_created_count: this.overlayMessageCreateCount,
                desktop_message_ack_count: this.desktopMessageAckCount,
                desktop_message_created_count: this.desktopMessageCreateCount,
                desktop_focused_duration: this.desktopFocusedTimer.elapsed().asMilliseconds(),
                desktop_focused_change_count: this.desktopFocusChangedCount,
                rtc_connection_duration: this.rtcConnectionTimer.elapsed().asMilliseconds(),
                mute_toggled_count: this.muteToggledCount,
                overlay_successfully_shown: this._successfullyShown
            }), b), {
                original_method: f.Ue[b.original_method],
                any_other_method: O,
                current_method: v,
                last_overlay_state: this.overlayState,
                last_overlay_state_raw: this.overlayStateRaw,
                last_overlay_state_reason: this.overlayStateReason,
                last_overlay_state_raw_reason: this.overlayStateRawReason
            }),
            notifications: this.notificationAnalytics.getCounterAnalytics(this.uuid)
        }
    }
    setLocked(e) {
        e ? (this.unlockedTimer.stop(), ++this.uiLockedCount) : (this.unlockedTimer.start(), ++this.uiUnlockedCount)
    }
    static gameSetAllUnfocused() {
        for (let e of Object.values(U.gamesByPid)) e.gameFocusedTimer.stop()
    }
    static incrementConcurrentGameCount() {
        for (let e of Object.values(U.gamesByPid)) ++e.gameConcurrentGameCount
    }
    gameSetFocused(e) {
        this.gameFocusedTimer.toggle(e), e && ++this.gameFocusChangedCount
    }
    setSoundboardShown(e, t) {
        this.soundboardShownTimer.toggle(e), e && (++this.soundboardShownCount, t && ++this.soundboardKeepOpenCount)
    }
    static handleMuteToggled() {
        for (let e of Object.values(U.gamesByPid)) ++e.muteToggledCount
    }
    static desktopSetFocused(e) {
        if (e !== U.desktopMainWindowHasFocus) {
            for (let t of Object.values(U.gamesByPid)) ++t.desktopFocusChangedCount, t.desktopFocusedTimer.toggle(e);
            U.desktopMainWindowHasFocus = e
        }
    }
    static desktopMessageEvent(e) {
        for (let t of Object.values(U.gamesByPid)) switch (e) {
            case "ack":
                ++t.desktopMessageAckCount;
                break;
            case "created":
                ++t.desktopMessageCreateCount
        }
    }
    static toggleRtcConnection(e) {
        for (let t of Object.values(U.gamesByPid)) t.rtcConnectionTimer.toggle(e)
    }
    constructor(e) {
        var t, n;
        T(this, "game", void 0), T(this, "uuid", void 0), T(this, "overlayStatus", void 0), T(this, "overlayMethod", void 0), T(this, "overlayMethodStats", void 0), T(this, "overlayState", void 0), T(this, "overlayStateRaw", void 0), T(this, "overlayStateReason", void 0), T(this, "overlayStateRawReason", void 0), T(this, "notificationAnalytics", void 0), T(this, "widgetAnalytics", void 0), T(this, "screenAnalytics", void 0), T(this, "uiUnlockedCount", void 0), T(this, "uiLockedCount", void 0), T(this, "gameFocusChangedCount", void 0), T(this, "gameConcurrentGameCount", void 0), T(this, "overlayMessageAckCount", void 0), T(this, "overlayMessageCreateCount", void 0), T(this, "gameTimer", void 0), T(this, "gameFocusedTimer", void 0), T(this, "unlockedTimer", void 0), T(this, "rtcConnectionTimer", void 0), T(this, "desktopFocusedTimer", void 0), T(this, "desktopFocusChangedCount", void 0), T(this, "desktopMessageAckCount", void 0), T(this, "desktopMessageCreateCount", void 0), T(this, "soundboardShownTimer", void 0), T(this, "soundboardShownCount", void 0), T(this, "soundboardKeepOpenCount", void 0), T(this, "muteToggledCount", void 0), T(this, "_successfullyShown", void 0), this.game = e, this.uuid = k(), this.overlayMethod = null, this.overlayMethodStats = null, this.overlayState = null, this.overlayStateRaw = null, this.overlayStateReason = null, this.overlayStateRawReason = null, this.notificationAnalytics = new x, this.widgetAnalytics = new M, this.uiUnlockedCount = 0, this.uiLockedCount = 0, this.gameFocusChangedCount = 0, this.gameConcurrentGameCount = 0, this.overlayMessageAckCount = 0, this.overlayMessageCreateCount = 0, this.gameTimer = i.W0.startNew(), this.gameFocusedTimer = new i.W0, this.unlockedTimer = new i.W0, this.rtcConnectionTimer = new i.W0, this.desktopFocusedTimer = new i.W0, this.desktopFocusChangedCount = 0, this.desktopMessageAckCount = 0, this.desktopMessageCreateCount = 0, this.soundboardShownTimer = new i.W0, this.soundboardShownCount = 0, this.soundboardKeepOpenCount = 0, this.muteToggledCount = 0, this._successfullyShown = !1, this.screenAnalytics = new j(e), this.overlayStatus = (0, d.hw)(e), this.overlayMethod = null != (t = null == (n = this.overlayStatus) ? void 0 : n.overlayMethod) ? t : null, this.overlayMethodStats = this.buildOverlayMethodStats(this.overlayMethod, e), U.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(), ee.hasConnection() && this.rtcConnectionTimer.start()
    }
}

function G() {
    let e = m.default.getFocusedPID();
    if (null == e || e === b.UNSET_PID || !p.default.isOverlayOOPEnabledForPid(e)) return null;
    let t = p.default.getTrackedGameByPid(e);
    return null == t || null == t.gameName || null == t.applicationId || t.state !== f.AR.OVERLAY_RENDERING ? null : {
        gameName: t.gameName,
        gameId: t.applicationId
    }
}

function V(e) {
    for (let t of (D.verbose("handleRunningGamesChange", e), e.added)) {
        if (null != U.getByPid(t.pid)) {
            D.verbose("handleRunningGamesChange added", t, "already tracked");
            continue
        }
        U.incrementConcurrentGameCount();
        let e = U.create(t);
        D.verbose("handleRunningGamesChange added", t, e)
    }
    for (let t of e.removed) U.destroy(t), D.verbose("handleRunningGamesChange removed", t)
}

function F(e) {
    if (e.pid === b.DEV_PID) return;
    let t = U.getByPid(e.pid);
    (D.verbose("OVERLAY_SET_INPUT_LOCKED", t), null == t) ? D.error("OVERLAY_SET_INPUT_LOCKED: Unable to find game", e, U.debug): t.setLocked(e.locked)
}

function B(e) {
    var t;
    if (D.verbose("OVERLAY_NOTIFICATION_EVENT", e), null == e.gameName && null == e.gameId) return;
    let n = U.getByName(null != (t = e.gameName) ? t : e.gameId);
    null == n ? D.error("OVERLAY_NOTIFICATION_EVENT: Game not found.", e, U.debug) : n.notificationAnalytics.increment(e.notificationType, e.action)
}

function H(e) {
    var t;
    if (D.verbose("OVERLAY_WIDGET_CHANGED", e), null == e.gameName && null == e.gameId) return;
    let n = U.getByName(null != (t = e.gameName) ? t : e.gameId);
    if (null == n) return void D.error("OVERLAY_WIDGET_CHANGED: Game not found", e, U.debug);
    let r = n.widgetAnalytics.getByWidget(e.widgetType);
    null != r && (r.initialized || (r.initialized = !0, r.pinned = e.pinned), r.pinned !== e.pinned && ++r.pinnedToggledCount, r.pinned = e.pinned, r.visibleDuration.toggle(e.visible))
}

function Y(e) {
    if (D.verbose("OVERLAY_FOCUSED", e), U.gameSetAllUnfocused(), null == e.pid || e.pid === b.DEV_PID || e.pid === b.UNSET_PID) return;
    let t = U.getByPid(e.pid);
    null == t ? D.error("OVERLAY_FOCUSED: Game not found", e, U.debug) : t.gameSetFocused(!0)
}

function W(e) {
    var t;
    if (D.verbose("SOUNDBOARD_SET_OVERLAY_ENABLED", e), e.pid === b.DEV_PID) return;
    let n = U.getByPid(e.pid);
    null == n ? D.error("SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found", e, U.debug) : n.setSoundboardShown(e.enabled, !!e.enabled && null != (t = e.keepOpen) && t)
}

function K(e) {
    var t;
    if (D.verbose("OVERLAY_MESSAGE_EVENT_ACTION", e), null == e.gameName && null == e.gameId) return;
    let n = U.getByName(null != (t = e.gameName) ? t : e.gameId);
    if (null == n) return void D.error("OVERLAY_MESSAGE_EVENT_ACTION: Game not found", e, U.debug);
    switch (e.eventType) {
        case "ack":
            ++n.overlayMessageAckCount;
            break;
        case "create":
            ++n.overlayMessageCreateCount
    }
}

function z(e) {
    D.verbose("MESSAGE_ACKED", e);
    let t = G();
    null == t ? U.desktopMessageEvent("ack") : a.h.dispatch({
        type: "OVERLAY_MESSAGE_EVENT_ACTION",
        eventType: "ack",
        gameName: t.gameName,
        gameId: t.gameId
    })
}

function q(e) {
    if (e.message.state !== I.cmJ.SENDING) return;
    D.verbose("MESSAGE_CREATE", e, Error().stack);
    let t = G();
    null == t ? U.desktopMessageEvent("created") : a.h.dispatch({
        type: "OVERLAY_MESSAGE_EVENT_ACTION",
        eventType: "create",
        gameName: t.gameName,
        gameId: t.gameId
    })
}

function Z(e) {
    let t = (0, v.A)();
    null != t && t !== b.DEV_PID && t !== b.UNSET_PID && (D.verbose("AUDIO_TOGGLE_SELF_MUTE", e), U.handleMuteToggled())
}

function Q(e) {
    D.verbose("WINDOW_FOCUS", e);
    let t = (0, O.Xg)();
    e.windowId !== t ? D.verbose("WINDOW_FOCUS: Not main window", {
        action: e,
        mainWindowId: t
    }) : U.desktopSetFocused(e.focused)
}

function X(e) {
    if (e.pid === b.DEV_PID || e.pid === b.UNSET_PID) return;
    let t = U.getByPid(e.pid);
    null == t ? D.error("OVERLAY_SUCCESSFULLY_SHOWN: Game not found", e, U.debug) : t.successfullyShown = !0
}

function J(e) {
    let t = U.getByPid(e.pid);
    null == t ? D.error("OVERLAY_UPDATE_OVERLAY_METHOD: Game not found", e, U.debug) : e.overlayMethod !== f.Ue.Disabled && (D.verbose("OVERLAY_UPDATE_OVERLAY_METHOD", e), t.setOverlayMethod(e.overlayMethod))
}

function $(e) {
    let t = U.getByPid(e.pid);
    if (null == t) return void D.error("OVERLAY_TRACK_STATE_CHANGED: Game not found", e, U.debug);
    if (e.newState !== f.AR.OVERLAY_TEARING_DOWN) {
        if (e.reason.includes("Unknown fullscreen type")) return void t.setOverlayState(e.newState, e.reason, !0);
        t.setOverlayState(e.newState, e.reason, !1)
    }
}
T(U, "gamesByPid", {}), T(U, "gamesByName", {}), T(U, "desktopMainWindowHasFocus", document.hasFocus());
class ee {
    static hasConnection() {
        return ee.connections.size > 0
    }
    static handleRTCConnectionState(e) {
        var t;
        let n = (null != (t = e.channelId) ? t : "unknown") + e.context;
        switch (e.state) {
            case I.S7L.RTC_CONNECTED:
                ee.connections.add(n);
                break;
            case I.S7L.DISCONNECTED:
                ee.connections.delete(n)
        }
        let r = ee.hasConnection();
        ee.previousHasConnection !== r && (U.toggleRtcConnection(r), ee.previousHasConnection = r)
    }
}
T(ee, "connections", new Set), T(ee, "previousHasConnection", !1);
class et {
    static handleMessageAcked(e) {
        D.verbose("MESSAGE_ACKED", e);
        let t = h.A.getGame();
        null == t ? D.error("Game not found.") : a.h.dispatch({
            type: "OVERLAY_MESSAGE_EVENT_ACTION",
            eventType: "ack",
            gameName: t.name,
            gameId: t.id
        })
    }
    static handleMessageCreate(e) {
        if (e.message.state !== I.cmJ.SENDING) return;
        D.verbose("MESSAGE_CREATE", e, Error().stack);
        let t = h.A.getGame();
        null == t ? D.error("Game not found.") : a.h.dispatch({
            type: "OVERLAY_MESSAGE_EVENT_ACTION",
            eventType: "create",
            gameName: t.name,
            gameId: t.id
        })
    }
}
P && !__OVERLAY__ && setInterval(async () => {
    for (let e of Object.values(U.debug.gamesByName)) D.verbose("Game analytics", await e.getAnalytics())
}, 5e3);
class en extends s.A {
    constructor(...e) {
        super(...e), T(this, "actions", __OVERLAY__ ? {
            MESSAGE_ACKED: et.handleMessageAcked,
            MESSAGE_CREATE: et.handleMessageCreate
        } : {
            OVERLAY_FOCUSED: Y,
            OVERLAY_NOTIFICATION_EVENT: B,
            OVERLAY_SET_INPUT_LOCKED: F,
            OVERLAY_WIDGET_CHANGED: H,
            OVERLAY_MESSAGE_EVENT_ACTION: K,
            RUNNING_GAMES_CHANGE: V,
            SOUNDBOARD_SET_OVERLAY_ENABLED: W,
            MESSAGE_ACKED: z,
            MESSAGE_CREATE: q,
            WINDOW_FOCUS: Q,
            RTC_CONNECTION_STATE: ee.handleRTCConnectionState,
            AUDIO_TOGGLE_SELF_MUTE: Z,
            OVERLAY_SUCCESSFULLY_SHOWN: X,
            OVERLAY_UPDATE_OVERLAY_METHOD: J,
            OVERLAY_TRACK_STATE_CHANGED: $
        })
    }
}
let er = new en