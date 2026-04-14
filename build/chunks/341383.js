/** chunk id: 341383 params = (module,exports,require) **/
n.d(t, {
    A: () => G
});
var i = n(73153),
    l = n(827343),
    r = n(684013),
    a = n(956793),
    s = n(401843),
    o = n(55619),
    d = n(87203),
    c = n(272355),
    u = n(793574),
    A = n(734066),
    h = n(572164),
    _ = n(399925),
    m = n(963169),
    g = n(652896),
    p = n(349963),
    E = n(140175),
    I = n(528772),
    f = n(123973),
    C = n(944775),
    T = n(616356),
    N = n(430452),
    S = n(383501),
    x = n(351906),
    v = n(532624),
    b = n(242286),
    y = n(256415),
    O = n(954571),
    L = n(427603),
    R = n(652215),
    P = n(731854);
let D = new Map;

function j(e, t, n, i) {
    if (!S.A.isConnected()) return;
    let l = i.context ?? P.x.DEFAULT,
        r = D.get(l);
    null == r && (r = {
        held: new Set,
        priorityHeld: new Set
    }, D.set(l, r)), n || (e ? r.held.add(i.id) : r.held.delete(i.id)), t && (e ? r.priorityHeld.add(i.id) : r.priorityHeld.delete(i.id));
    let a = r.held.size > 0,
        s = r.priorityHeld.size > 0;
    (0, E.N)(a, s)
}
let M = {
    [R.hCu.TOGGLE_PRIORITY_SPEAKER]: {
        onTrigger() {},
        keyEvents: {}
    },
    [R.hCu.UNASSIGNED]: {
        onTrigger() {},
        keyEvents: {}
    },
    [R.hCu.PUSH_TO_TALK]: {
        onTrigger(e, t) {
            N.Ay.getMode(t.context) === R.TBI.PUSH_TO_TALK && (M[R.hCu.PUSH_TO_TALK].isPressed = e, j(e, !1, !1, t))
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [R.hCu.PUSH_TO_TALK_PRIORITY]: {
        onTrigger(e, t) {
            N.Ay.getMode() === R.TBI.PUSH_TO_TALK && (M[R.hCu.PUSH_TO_TALK_PRIORITY].isPressed = e, j(e, !0, !1, t))
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [R.hCu.VAD_PRIORITY]: {
        onTrigger(e, t) {
            N.Ay.getMode() === R.TBI.VOICE_ACTIVITY && (M[R.hCu.VAD_PRIORITY].isPressed = e, j(e, !0, !0, t))
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [R.hCu.PUSH_TO_MUTE]: {
        onTrigger(e) {
            N.Ay.getMode() === R.TBI.VOICE_ACTIVITY && (M[R.hCu.PUSH_TO_MUTE].isPressed = e, l.A.setTemporarySelfMute(e))
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [R.hCu.TOGGLE_MUTE]: {
        onTrigger: () => l.A.toggleSelfMute({
            usedKeybind: !0,
            location: "Custom Keybind"
        }),
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [R.hCu.TOGGLE_DEAFEN]: {
        onTrigger: () => l.A.toggleSelfDeaf({
            usedKeybind: !0,
            location: "Custom Keybind"
        }),
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [R.hCu.TOGGLE_CAMERA]: {
        onTrigger: () => (0, d.s)(),
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [R.hCu.TOGGLE_VOICE_MODE]: {
        onTrigger() {
            let e = N.Ay.getMode() === R.TBI.PUSH_TO_TALK ? R.TBI.VOICE_ACTIVITY : R.TBI.PUSH_TO_TALK;
            l.A.setMode(e)
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [R.hCu.TOGGLE_OVERLAY]: {
        onTrigger() {},
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [R.hCu.TOGGLE_OVERLAY_INPUT_LOCK]: {
        onTrigger(e, t) {
            if (!(0, v.DV)(t.shortcut)) return;
            let n = (0, L.A)();
            null != n && r.A.setInputLocked(!y.default.isLocked(n), n)
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [R.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
        onTrigger() {
            let e = b.default.getFocusedPID(),
                t = null != e;
            null != e && t && y.default.isPinned(R.uss.TEXT) && y.default.isLocked(e) && b.default.isReady(e) && r.A.activateRegion(R.ajI.TEXT_WIDGET)
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [R.hCu.TOGGLE_GO_LIVE_STREAMING]: {
        onTrigger() {
            let e = T.A.getCurrentUserActiveStream();
            if (null != e) return (0, s.vN)((0, g._z)(e));
            (0, p.A)(!0, [u.A.GO_LIVE_KEYBIND])
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [R.hCu.TOGGLE_STREAMER_MODE]: {
        onTrigger() {
            o.A.setEnabled(!x.A.enabled)
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [R.hCu.NAVIGATE_BACK]: {
        onTrigger: () => (0, m.OE)("global_keybind"),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1
        }
    },
    [R.hCu.NAVIGATE_FORWARD]: {
        onTrigger: () => (0, m.Qb)("global_keybind"),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1
        }
    },
    [R.hCu.SOUNDBOARD]: {
        onTrigger: () => {
            let e = (0, L.A)();
            if (null != e)
                if (I.A.enabled)(0, C.Lk)(e);
                else {
                    if (!(0, f.lI)()) return;
                    (0, C.hK)(!0, e)
                }
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [R.hCu.SOUNDBOARD_HOLD]: {
        onTrigger: e => {
            let t = (0, L.A)();
            if (null != t) {
                if (e) {
                    if (!(0, f.lI)()) return;
                    (0, C.hK)(!1, t)
                } else(0, C.Lk)(t);
                return
            }
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        }
    },
    [R.hCu.SAVE_CLIP]: {
        onTrigger: () => {
            (0, h.TD)() && (O.default.track(R.HAw.CLIP_SAVE_KEYBIND_PRESSED), (0, _.l0)())
        },
        keyEvents: {
            keyup: !1,
            keydown: !0
        }
    },
    [R.hCu.SAVE_SCREENSHOT]: {
        onTrigger: () => {
            !(0, h.TD)() || (0, A.cx)() && (O.default.track(R.HAw.CLIP_SAVE_KEYBIND_PRESSED), (0, _.yT)())
        },
        keyEvents: {
            keyup: !1,
            keydown: !0
        }
    },
    [R.hCu.SWITCH_TO_VOICE_CHANNEL]: {
        onTrigger(e, t) {
            let {
                params: {
                    channelId: n
                }
            } = t;
            null != n && a.default.selectVoiceChannel(n)
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
            blurred: !0,
            focused: !0
        }
    },
    [R.hCu.DISCONNECT_FROM_VOICE_CHANNEL]: {
        onTrigger() {
            a.default.selectVoiceChannel(null)
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
            blurred: !0,
            focused: !0
        }
    }
};

function w() {
    D.clear(), (0, E.N)(!1, !1)
}
class U extends c.A {
    _initialize() {
        i.h.wait(() => i.h.dispatch({
            type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS",
            keybinds: M
        })), i.h.subscribe("AUDIO_SET_MODE", w), i.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect)
    }
    _terminate() {
        i.h.unsubscribe("AUDIO_SET_MODE", w), i.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect)
    }
    handleVoiceChannelSelect(e) {
        let {
            currentVoiceChannelId: t,
            channelId: n
        } = e;
        t !== n && w()
    }
}
let G = new U