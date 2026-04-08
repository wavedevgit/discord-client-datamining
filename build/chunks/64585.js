/** chunk id: 64585 params = (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(321073);
var i = n(73153),
    a = n(272355),
    r = n(400492),
    s = n(312671),
    l = n(961350),
    o = n(383501),
    c = n(309010),
    d = n(741961),
    _ = n(3137),
    h = n(559908),
    u = n(652215);
let C = (0, r.aN)("poggermode_applause", s.A.getSoundpack()),
    A = !1,
    g = !1,
    E = [],
    T = null,
    m = () => {
        C.stop(), A = !1
    },
    p = () => {
        let e = _.A.isEnabled(),
            t = _.A.comboSoundsEnabled;
        return !!e && !!t && null != c.A.getChannelId()
    },
    L = () => {
        if (0 === E.length || !p() || g) return;
        g = !0;
        let [e, t] = E[E.length - 1];
        (0, r.Ak)(e, t), T = setTimeout(O, 1e3)
    },
    O = () => {
        E.pop(), g = !1, L()
    },
    I = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = o.A.isConnected();
        E.push([e, t * (n ? .1 : 1)]), L()
    };
class S extends a.A {
    _initialize() {
        h.Ay.addChangeListener(this.startAudio), i.h.subscribe("RTC_CONNECTION_STATE", this.setVolume), i.h.subscribe("TYPING_STOP", this.stopAudio), i.h.subscribe("TYPING_STOP_LOCAL", this.stopAudio), i.h.subscribe("CHANNEL_SELECT", this.stopAudio), i.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
    }
    _terminate() {
        h.Ay.removeChangeListener(this.startAudio), i.h.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), i.h.unsubscribe("TYPING_STOP", this.stopAudio), i.h.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), i.h.unsubscribe("CHANNEL_SELECT", this.stopAudio), i.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(T)
    }
    setVolume(e) {
        let {
            state: t
        } = e;
        t === u.S7L.RTC_CONNECTED ? C.volume = .1 : C.volume = 1
    }
    handleTypingStop(e) {
        let {
            userId: t
        } = e;
        l.default.getId() === t && m()
    }
    stopAudio() {
        m()
    }
    startAudio() {
        if (!p()) return;
        let e = c.A.getChannelId();
        if (null == e) return;
        let t = l.default.getId(),
            n = d.A.isTyping(e, t),
            i = h.Ay.getUserCombo(t, e),
            a = i?.multiplier ?? 1;
        n && a >= 7 ? A || (C.loop(), A = !0) : m()
    }
    playAchievementUnlockSound() {
        p() && I("poggermode_achievement_unlock")
    }
}
let b = new S