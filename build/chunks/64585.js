/** chunk id: 64585 params = (module,exports,require) **/
n.d(e, {
    A: () => R
}), n(321073);
var i = n(73153),
    r = n(272355),
    l = n(400492),
    a = n(312671),
    s = n(961350),
    o = n(383501),
    c = n(309010),
    d = n(741961),
    u = n(3137),
    h = n(559908),
    C = n(652215);
let g = (0, l.aN)("poggermode_applause", a.A.getSoundpack()),
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
            n = o.A.isConnected();
        _.push([t, e * (n ? .1 : 1)]), O()
    };
class f extends r.A {
    _initialize() {
        h.Ay.addChangeListener(this.startAudio), i.h.subscribe("RTC_CONNECTION_STATE", this.setVolume), i.h.subscribe("TYPING_STOP", this.stopAudio), i.h.subscribe("TYPING_STOP_LOCAL", this.stopAudio), i.h.subscribe("CHANNEL_SELECT", this.stopAudio), i.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
    }
    _terminate() {
        h.Ay.removeChangeListener(this.startAudio), i.h.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), i.h.unsubscribe("TYPING_STOP", this.stopAudio), i.h.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), i.h.unsubscribe("CHANNEL_SELECT", this.stopAudio), i.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(m)
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
        s.default.getId() === e && p()
    }
    stopAudio() {
        p()
    }
    startAudio() {
        if (!L()) return;
        let t = c.A.getChannelId();
        if (null == t) return;
        let e = s.default.getId(),
            n = d.A.isTyping(t, e),
            i = h.Ay.getUserCombo(e, t),
            r = i?.multiplier ?? 1;
        n && r >= 7 ? A || (g.loop(), A = !0) : p()
    }
    playAchievementUnlockSound() {
        L() && I("poggermode_achievement_unlock")
    }
}
let R = new f