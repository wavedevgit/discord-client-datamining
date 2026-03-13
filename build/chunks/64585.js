/** chunk id: 64585 params = (module,exports,require) **/
n.d(e, {
    A: () => f
}), n(321073);
var i = n(73153),
    r = n(272355),
    l = n(400492),
    s = n(312671),
    a = n(961350),
    o = n(383501),
    c = n(309010),
    d = n(741961),
    u = n(3137),
    h = n(559908),
    A = n(652215);
let _ = (0, l.aN)("poggermode_applause", s.A.getSoundpack()),
    C = !1,
    g = !1,
    E = [],
    T = null,
    I = () => {
        _.stop(), C = !1
    },
    L = () => {
        let t = u.A.isEnabled(),
            e = u.A.comboSoundsEnabled;
        return !!t && !!e && null != c.A.getChannelId()
    },
    O = () => {
        if (0 === E.length || !L() || g) return;
        g = !0;
        let [t, e] = E[E.length - 1];
        (0, l.Ak)(t, e), T = setTimeout(S, 1e3)
    },
    S = () => {
        E.pop(), g = !1, O()
    },
    m = function(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = o.A.isConnected();
        E.push([t, e * (n ? .1 : 1)]), O()
    };
class p extends r.A {
    _initialize() {
        h.Ay.addChangeListener(this.startAudio), i.h.subscribe("RTC_CONNECTION_STATE", this.setVolume), i.h.subscribe("TYPING_STOP", this.stopAudio), i.h.subscribe("TYPING_STOP_LOCAL", this.stopAudio), i.h.subscribe("CHANNEL_SELECT", this.stopAudio), i.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
    }
    _terminate() {
        h.Ay.removeChangeListener(this.startAudio), i.h.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), i.h.unsubscribe("TYPING_STOP", this.stopAudio), i.h.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), i.h.unsubscribe("CHANNEL_SELECT", this.stopAudio), i.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(T)
    }
    setVolume(t) {
        let {
            state: e
        } = t;
        e === A.S7L.RTC_CONNECTED ? _.volume = .1 : _.volume = 1
    }
    handleTypingStop(t) {
        let {
            userId: e
        } = t;
        a.default.getId() === e && I()
    }
    stopAudio() {
        I()
    }
    startAudio() {
        if (!L()) return;
        let t = c.A.getChannelId();
        if (null == t) return;
        let e = a.default.getId(),
            n = d.A.isTyping(t, e),
            i = h.Ay.getUserCombo(e, t),
            r = i?.multiplier ?? 1;
        n && r >= 7 ? C || (_.loop(), C = !0) : I()
    }
    playAchievementUnlockSound() {
        L() && m("poggermode_achievement_unlock")
    }
}
let f = new p