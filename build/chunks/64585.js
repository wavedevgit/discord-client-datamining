/** chunk id: 64585, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => S
}), i(321073);
var n = i(73153),
    r = i(272355),
    l = i(400492),
    a = i(312671),
    s = i(961350),
    o = i(383501),
    c = i(309010),
    d = i(741961),
    u = i(3137),
    h = i(559908),
    C = i(652215);
let E = (0, l.aN)("poggermode_applause", a.A.getSoundpack()),
    A = !1,
    g = !1,
    _ = [],
    p = null,
    m = () => {
        E.stop(), A = !1
    },
    L = () => {
        let e = u.A.isEnabled(),
            t = u.A.comboSoundsEnabled;
        return !!e && !!t && null != c.A.getChannelId()
    },
    O = () => {
        if (0 === _.length || !L() || g) return;
        g = !0;
        let [e, t] = _[_.length - 1];
        (0, l.Ak)(e, t), p = setTimeout(f, 1e3)
    },
    f = () => {
        _.pop(), g = !1, O()
    },
    I = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            i = o.A.isConnected();
        _.push([e, t * (i ? .1 : 1)]), O()
    };
class T extends r.A {
    _initialize() {
        h.Ay.addChangeListener(this.startAudio), n.h.subscribe("RTC_CONNECTION_STATE", this.setVolume), n.h.subscribe("TYPING_STOP", this.stopAudio), n.h.subscribe("TYPING_STOP_LOCAL", this.stopAudio), n.h.subscribe("CHANNEL_SELECT", this.stopAudio), n.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
    }
    _terminate() {
        h.Ay.removeChangeListener(this.startAudio), n.h.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), n.h.unsubscribe("TYPING_STOP", this.stopAudio), n.h.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), n.h.unsubscribe("CHANNEL_SELECT", this.stopAudio), n.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(p)
    }
    setVolume(e) {
        let {
            state: t
        } = e;
        t === C.S7L.RTC_CONNECTED ? E.volume = .1 : E.volume = 1
    }
    handleTypingStop(e) {
        let {
            userId: t
        } = e;
        s.default.getId() === t && m()
    }
    stopAudio() {
        m()
    }
    startAudio() {
        if (!L()) return;
        let e = c.A.getChannelId();
        if (null == e) return;
        let t = s.default.getId(),
            i = d.A.isTyping(e, t),
            n = h.Ay.getUserCombo(t, e),
            r = n?.multiplier ?? 1;
        i && r >= 7 ? A || (E.loop(), A = !0) : m()
    }
    playAchievementUnlockSound() {
        L() && I("poggermode_achievement_unlock")
    }
}
let S = new T