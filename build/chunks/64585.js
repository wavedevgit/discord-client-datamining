/** chunk id: 64585 params = (module,exports,require) **/
i.d(e, {
    A: () => R
}), i(321073);
var n = i(73153),
    r = i(272355),
    l = i(400492),
    s = i(312671),
    a = i(961350),
    o = i(383501),
    c = i(309010),
    d = i(741961),
    u = i(3137),
    h = i(559908),
    C = i(652215);
let g = (0, l.aN)("poggermode_applause", s.A.getSoundpack()),
    A = !1,
    E = !1,
    _ = [],
    m = null,
    p = () => {
        g.stop(), A = !1
    },
    L = () => {
        let t = u.A.isEnabled(),
            e = u.A.comboSoundsEnabled;
        return !!t && !!e && null != c.A.getChannelId()
    },
    O = () => {
        if (0 === _.length || !L() || E) return;
        E = !0;
        let [t, e] = _[_.length - 1];
        (0, l.Ak)(t, e), m = setTimeout(T, 1e3)
    },
    T = () => {
        _.pop(), E = !1, O()
    },
    I = function(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            i = o.A.isConnected();
        _.push([t, e * (i ? .1 : 1)]), O()
    };
class f extends r.A {
    _initialize() {
        h.Ay.addChangeListener(this.startAudio), n.h.subscribe("RTC_CONNECTION_STATE", this.setVolume), n.h.subscribe("TYPING_STOP", this.stopAudio), n.h.subscribe("TYPING_STOP_LOCAL", this.stopAudio), n.h.subscribe("CHANNEL_SELECT", this.stopAudio), n.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
    }
    _terminate() {
        h.Ay.removeChangeListener(this.startAudio), n.h.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), n.h.unsubscribe("TYPING_STOP", this.stopAudio), n.h.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), n.h.unsubscribe("CHANNEL_SELECT", this.stopAudio), n.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(m)
    }
    setVolume(t) {
        let {
            state: e
        } = t;
        e === C.S7L.RTC_CONNECTED ? g.volume = .1 : g.volume = 1
    }
    handleTypingStop(t) {
        let {
            userId: e
        } = t;
        a.default.getId() === e && p()
    }
    stopAudio() {
        p()
    }
    startAudio() {
        if (!L()) return;
        let t = c.A.getChannelId();
        if (null == t) return;
        let e = a.default.getId(),
            i = d.A.isTyping(t, e),
            n = h.Ay.getUserCombo(e, t),
            r = n?.multiplier ?? 1;
        i && r >= 7 ? A || (g.loop(), A = !0) : p()
    }
    playAchievementUnlockSound() {
        L() && I("poggermode_achievement_unlock")
    }
}
let R = new f