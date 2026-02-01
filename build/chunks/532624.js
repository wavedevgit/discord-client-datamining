/** chunk id: 532624, original params: e,t,n (module,exports,require) **/
"use strict";
let r;
n.d(t, {
    Ay: () => ev,
    DV: () => k,
    aS: () => V,
    xC: () => D
}), n(896048), n(321073), n(747238), n(812715);
var i, a = n(812729),
    o = n.n(a),
    s = n(735438),
    l = n.n(s),
    c = n(311907),
    u = n(73153),
    d = n(775121),
    f = n(626584),
    p = n(549205),
    _ = n(641376),
    h = n(430452),
    m = n(954571),
    g = n(723702),
    E = n(837921),
    y = n(316501),
    b = n(350535),
    O = n(242286),
    v = n(652215),
    A = n(696016),
    I = n(980504),
    S = n(650583),
    T = n(72290);

function C(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            C(e, t, n[t])
        })
    }
    return e
}

function w(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function R(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let P = new f.A("KeybindsStore"),
    D = {
        id: "1000",
        action: v.hCu.TOGGLE_MUTE,
        shortcut: (0, b.OH)("mod+shift+m"),
        enabled: !0,
        managed: !0,
        params: {}
    };

function L() {
    var e;
    let t = null != (e = (0, y.Ze)(!1).get("Backquote")) ? e : "`";
    return "+" === t ? t = "plus" : 0 === t.length && (t = "`"), "shift+".concat(t)
}
let x = "1001",
    M = 10,
    j = function(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return {
            id: x,
            action: v.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
            shortcut: e,
            enabled: t,
            managed: !0,
            params: {}
        }
    },
    k = e => {
        let t = (0, b.Z0)("shift");
        return null != t && (1 !== e.length || e[0][1] !== t)
    },
    U = (e, t, n, r) => {
        var i, a;
        let o = (0, y.Ze)(!1).get("Backquote"),
            s = (0, y.Ze)(!0).get("Backquote");
        P.log(e, {
            tags: {
                backquoteKey: null != o ? o : "unknown",
                nativeBackquoteKey: null != s ? s : "unknown",
                backquoteCode: "".concat(null == (i = (0, y.Q_)(null != o ? o : "`")) ? void 0 : i.keyCode),
                nativeBackquoteCode: "".concat(null == (a = (0, y.Q_)(null != s ? s : "`")) ? void 0 : a.keyCode)
            },
            extra: N({
                keyCombo: t,
                combo: n,
                layoutMapBacktick: o,
                env: S.g$[(0, b._$)()],
                backtickEventShape: (0, y.Q_)("`"),
                backquoteKeyShape: (0, y.Q_)(null != o ? o : "`"),
                nativeBackquoteKeyShape: (0, y.Q_)(null != s ? s : "`")
            }, r)
        })
    };

function G(e) {
    var t;
    let n = (0, b.OH)(e),
        r = (0, y.Q_)("`"),
        i = null != (t = null == r ? void 0 : r.keyCode) ? t : (0, b.Z0)("`");
    return k(n) ? n : null == i ? (U("Unable to get backtick code for overlay default keybind", e, n, {
        rawBacktickShape: r
    }), null) : (U("Default overlay keybind is unsupported", e, n, {
        rawBacktickCode: i
    }), [...n, [S.zY.KEYBOARD_KEY, i, (0, b._$)()]])
}
let V = () => {
        let e = L();
        "shift" === e && (U("Default overlay keybind is only shift", e, null), e = "shift+`");
        let t = G(e);
        if (null == t) return j([], !1);
        if (k(t)) return j(t, !0);
        let n = (0, b.Z0)("shift"),
            r = (0, y.Q_)("`");
        return 0 === t.length ? U("Default overlay keybind combo is empty", e, t) : null == n ? U("Unable to get shift code", e, t, {
            shiftCode: n
        }) : null == r && U("Unable to get backtick code", e, t), j(t, !1)
    },
    F = {},
    B = {},
    H = 0,
    Y = !0,
    W = {},
    K = !1,
    z = !1,
    q = [v.hCu.PUSH_TO_TALK, v.hCu.TOGGLE_OVERLAY_INPUT_LOCK, v.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET],
    Z = [];

function Q(e) {
    switch (e) {
        case D.id:
            return D;
        case V().id:
            return V();
        default:
            return B[e]
    }
}

function X(e, t) {
    return !(e.shortcut.length >= t.shortcut.length) && e.shortcut.every(e => t.shortcut.some(t => t[0] === e[0] && t[1] === e[1]))
}

function J(e, t, n) {
    m.default.track(v.HAw.KEYBOARD_SHORTCUT_USED, {
        shortcut_name: n.action,
        shortcut_combo: (0, b.dI)(n.shortcut),
        is_native_keyboard_event: !0
    }), t.onTrigger(e, n)
}

function $(e, t) {
    var n;
    let r = Q(e);
    if (null == r) return;
    let i = null == (n = W[r.action]) ? void 0 : n.keyEvents;
    if (null == i) return;
    let a = W[r.action];
    if (i.keydown && i.keyup) {
        null != a && J(t, W[r.action], r);
        return
    }
    Z.push(e), setTimeout(() => {
        for (let t of Z) {
            if (t === e) continue;
            let n = Q(t);
            if (null != n && X(r, n)) {
                Z.includes(e) && Z.splice(Z.indexOf(e), 1);
                return
            }
        }
        try {
            null != a && J(t, a, r)
        } finally {
            setTimeout(() => {
                Z.includes(e) && Z.splice(Z.indexOf(e), 1)
            }, M)
        }
    }, M)
}

function ee() {
    let e = V();
    null == l().find(B, t => e.action === t.action && t.enabled && t.shortcut.length > 0) && Y && !z && (es(e), z = !0)
}

function et() {
    let e = V();
    z && (eo(e.id), z = !1)
}

function en() {
    let {
        showKeybindIndicators: e
    } = _.A.getCurrentConfig({
        location: "KeybindsStore"
    });
    null == l().find(B, e => D.action === e.action && e.enabled && e.shortcut.length > 0) && !__OVERLAY__ && !K && Y && e && (es(D), K = !0)
}

function er() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (K || e) && (eo(D.id), K = !1)
}

function ei(e) {
    let {
        showKeybindIndicators: t
    } = e;
    t ? en() : er(!0)
}

function ea(e, t, n, r) {
    if (g.isPlatformEmbedded) try {
        E.Ay.inputEventRegister(e, t, n, r)
    } catch (n) {
        throw P.error("Failed to register native keybind", {
            eventId: e,
            shortcut: t
        }, n), n
    } else {
        eo(e.toString());
        let i = (0, p.I)(document);
        r.keyup && i.bindGlobal((0, b.dI)(t), () => n(!1), "keyup"), r.keydown && i.bindGlobal((0, b.dI)(t), () => n(!0), "keydown"), F[e] = i
    }
}

function eo(e) {
    if (g.isPlatformEmbedded) E.Ay.inputEventUnregister(parseInt(e, 10));
    else {
        let t = F[e];
        if (null != t) {
            let n = B[e];
            if (null != n) {
                let e = W[n.action];
                (null == e ? void 0 : e.isPressed) === !0 && T.nextTick(() => J(!1, e, n))
            }
            t.reset(), F[e] = null
        }
    }
}

function es(e) {
    if (!Y || __OVERLAY__) return;
    let {
        shortcut: t,
        action: n,
        enabled: r
    } = e;
    if (0 === t.length || null == t || n === v.hCu.UNASSIGNED || !r) return;
    if (null == W[n]) return void P.error("[kb store] KeybindStore: Looking for callback action ".concat(n, " but it doesn't exist in this version. Skipping"));
    let i = e.id,
        a = parseInt(i, 10);
    if (isNaN(a)) return void P.error("[kb store] KeybindStore: Keybind id is not a number. Skipping registration.", {
        keybind: e
    });
    let o = W[n].keyEvents;
    e.action === v.hCu.TOGGLE_MUTE && er(), e.action === v.hCu.TOGGLE_OVERLAY_INPUT_LOCK && et(), ea(a, t, e => $(i, e), N({
        focused: !0,
        blurred: !0,
        keydown: !1,
        keyup: !1
    }, o)), d.A.validateKeybind((0, b.dI)(t))
}

function el(e) {
    let t = N({
        id: H.toString(),
        enabled: !0,
        action: v.hCu.UNASSIGNED,
        shortcut: [],
        managed: !1,
        params: {}
    }, e);
    return B = R(N({}, B), {
        [t.id]: t
    }), H += 1, t
}

function ec(e) {
    eo(e.id), B = N({}, B), delete B[e.id], e.action === v.hCu.TOGGLE_MUTE && en(), e.action === v.hCu.TOGGLE_OVERLAY_INPUT_LOCK && ee()
}

function eu(e) {
    let {
        keybind: t
    } = e;
    es(el(t))
}

function ed(e) {
    let {
        id: t
    } = e, n = B[t];
    __OVERLAY__ || m.default.track(v.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
        keybind_action: n.action,
        keybind_is_bound: !1,
        keybind_has_shortcut: !1
    }), null != n && ec(n)
}

function ef(e) {
    let {
        keybind: t
    } = e;
    B = R(N({}, B), {
        [t.id]: t
    }), __OVERLAY__ || (m.default.track(v.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
        keybind_action: t.action,
        keybind_is_bound: !0,
        keybind_has_shortcut: t.shortcut.length > 0
    }), t.action === v.hCu.TOGGLE_OVERLAY_INPUT_LOCK ? m.default.track(v.HAw.OVERLAY_SETTINGS_UPDATED, {
        hotkey: t.action === v.hCu.TOGGLE_OVERLAY_INPUT_LOCK ? (0, b.dI)(t.shortcut) : null
    }) : t.action === v.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && m.default.track(v.HAw.OVERLAY_SETTINGS_UPDATED, {
        text_activation_hotkey: t.action === v.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, b.dI)(t.shortcut) : null
    })), es(t)
}

function ep(e) {
    let {
        enable: t
    } = e;
    Y = t, t ? (d.A.enable(), l().forEach(B, es), en(), ee()) : (d.A.disable(), l().forEach(B, e => eo(e.id)), er(), et())
}

function e_(e) {
    let {
        keybinds: t
    } = e;
    W = t, F = {}, H = 0, Object.values(B).filter(e => q.includes(e.action) && e.managed).length !== q.length && eE(), l().forEach(B, e => {
        H = Math.max(parseInt(e.id, 10), H) + 1;
        try {
            es(e)
        } catch (t) {
            P.error("Failed to register keybind", e, t)
        }
    }), Y = !0, null == r && (r = _.A.subscribe({
        location: "KeybindsStore"
    }, ei))
}

function eh(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return null == l().find(B, t => t.action === e && (!n || t.managed === n)) && (es(el({
        action: e,
        enabled: !0,
        shortcut: (0, b.OH)(t),
        managed: !0,
        params: {}
    })), !0)
}

function em(e) {
    let t = !1;
    return l().each(B, n => {
        n.action === e && !0 === n.managed && (ec(n), t = !0)
    }), t
}
let eg = [function() {
    let e = h.A.getShortcuts();
    return l().each(B, t => {
        t.action === v.hCu.PUSH_TO_TALK && !0 === t.managed && (null == t.context || null == e[t.context]) && ec(t)
    }), l().reduce(h.A.getShortcuts(), (e, t, n) => {
        let r = l().find(B, e => e.action === v.hCu.PUSH_TO_TALK && !0 === e.managed && e.context === n);
        if (null == r) es(el({
            action: v.hCu.PUSH_TO_TALK,
            enabled: !0,
            shortcut: t,
            managed: !0,
            params: {},
            context: n
        }));
        else {
            if (null == t) return e || !1;
            ef({
                keybind: R(N({}, r), {
                    shortcut: "string" == typeof t ? (0, b.OH)(t) : t,
                    context: n
                })
            })
        }
        return !0
    }, !1)
}, function() {
    return !!O.default.getAnyGlobalEnabledOverlay() && eh(v.hCu.TOGGLE_OVERLAY_INPUT_LOCK, L())
}, function() {
    return !!O.default.getAnyGlobalEnabledOverlay() && eh(v.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`")
}, function() {
    let e = em(v.hCu.SOUNDBOARD_HOLD);
    return eh(v.hCu.SOUNDBOARD_HOLD, I.XF, !1) || e
}, function() {
    return eh(v.hCu.SAVE_CLIP, A.Ot)
}, function() {
    return eh(v.hCu.SAVE_SCREENSHOT, A.sz)
}];

function eE() {
    return en(), ee(), eg.reduce((e, t) => t() || e, !1)
}

function ey() {
    return (async () => {
        await (0, y.AD)(), eE() && eO.emitChange()
    })(), !1
}
d.A.setGetKeybindList(() => {
    let e = [];
    for (let t in B) B.hasOwnProperty(t) && e.push((0, b.dI)(B[t].shortcut));
    let {
        showKeybindIndicators: t
    } = _.A.getCurrentConfig({
        location: "KeybindsStore"
    });
    return t && e.push((0, b.dI)(D.shortcut)), e
});
class eb extends(i = c.Ay.DeviceSettingsStore) {
    initialize(e) {
        for (let t in __OVERLAY__ || this.waitFor(h.A, O.default), B = null != e ? e : {}) delete B[t].latched, delete B[t].pressedTime
    }
    getUserAgnosticState() {
        return B
    }
    hasKeybind(e, t, n) {
        for (let r in B)
            for (let i of B[r].shortcut)
                if (i[0] === e && i[1] === t && (void 0 === n || n === i[2])) return !0;
        return !1
    }
    hasExactKeybind(e) {
        for (let t in B) {
            let n = B[t];
            if (l().isEqual(n.shortcut, e)) return !0
        }
        return !1
    }
    getKeybindForAction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            {
                showKeybindIndicators: r
            } = _.A.getCurrentConfig({
                location: "KeybindsStore"
            }),
            i = l().find(B, r => r.action === e && (!t || r.managed) && (!n || r.shortcut.length > 0 && r.enabled));
        return null != i ? i : r && e === v.hCu.TOGGLE_MUTE ? D : null
    }
    getOverlayKeybind() {
        let e = this.getKeybindForAction(v.hCu.TOGGLE_OVERLAY_INPUT_LOCK, !0);
        return null != e ? e : V()
    }
    getOverlayChatKeybind() {
        return this.getKeybindForAction(v.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0)
    }
}
C(eb, "displayName", "KeybindsStore"), C(eb, "persistKey", "keybinds"), C(eb, "migrations", [function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        {
            v: t,
            keybinds: n = e
        } = e;
    return l().reduce(n, (e, n, r) => (isNaN(parseInt(n.id, 10)) || n.id !== r || ((null == t || t < 2) && ("string" == typeof n.shortcut ? (n.shortcut = n.shortcut.replace("escape", "esc").replace("capslock", "caps lock").replace("numlock", "num lock").replace("pageup", "page up").replace("pagedown", "page down"), n.shortcut = (0, b.OH)(n.shortcut)) : n.shortcut = n.shortcut.map(e => e.length < 3 ? [...e, (0, b._$)()] : e)), e[r] = n), e), {})
}, e => e, e => {
    let {
        keybinds: t = e
    } = e;
    return l().reduce(t, (e, t, n) => {
        if ((0, g.isLinux)() && t.action === v.hCu.SOUNDBOARD_HOLD) {
            let n = t.shortcut.map(e => e[1]),
                r = (0, b.OH)("`").map(e => e[1]);
            if (o()(n, r)) return e
        }
        return R(N({}, e), {
            [n]: t
        })
    }, {})
}, e => {
    let t = {};
    for (let r in e) {
        let i = e[r];
        if (null != i) {
            if (null == i.params || null == i.enabled) {
                var n;
                i = R(N({}, i), {
                    enabled: !1 !== i.enabled,
                    params: null != (n = i.params) ? n : {}
                })
            }
            t[r] = i
        }
    }
    return t
}, e => l().reduce(e, (e, t, n) => t.action === v.hCu.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : R(N({}, e), {
    [n]: t
}), {})]);
let eO = new eb(u.h, {
        CONNECTION_OPEN: eE,
        LOGIN_SUCCESS: ey,
        AUDIO_SET_MODE: eE,
        OVERLAY_SET_ENABLED: eE,
        RPC_APP_CONNECTED: eE,
        RPC_APP_DISCONNECTED: eE,
        KEYBINDS_ADD_KEYBIND: eu,
        KEYBINDS_DELETE_KEYBIND: ed,
        KEYBINDS_SET_KEYBIND: ef,
        KEYBINDS_ENABLE_ALL_KEYBINDS: ep,
        KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: e_
    }),
    ev = eO