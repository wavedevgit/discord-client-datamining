/** chunk id: 64585 params = (module,exports,require) **/
n.d(e, {
    A: () => b
}), n(321073);
var i = n(73153),
    r = n(272355),
    l = n(400492),
    a = n(312671),
    s = n(961350),
    o = n(383501),
    d = n(309010),
    c = n(741961),
    u = n(3137),
    h = n(559908),
    _ = n(652215);
let A = (0, l.aN)("poggermode_applause", a.A.getSoundpack()),
    C = !1,
    g = !1,
    E = [],
    T = null,
    I = () => {
        A.stop(), C = !1
    },
    O = () => {
        let t = u.A.isEnabled(),
            e = u.A.comboSoundsEnabled;
        return !!t && !!e && null != d.A.getChannelId()
    },
    f = () => {
        if (0 === E.length || !O() || g) return;
        g = !0;
        let [t, e] = E[E.length - 1];
        (0, l.Ak)(t, e), T = setTimeout(L, 1e3)
    },
    L = () => {
        E.pop(), g = !1, f()
    },
    p = function(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = o.A.isConnected();
        E.push([t, e * (n ? .1 : 1)]), f()
    };
class S extends r.A {
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
        e === _.S7L.RTC_CONNECTED ? A.volume = .1 : A.volume = 1
    }
    handleTypingStop(t) {
        let {
            userId: e
        } = t;
        s.default.getId() === e && I()
    }
    stopAudio() {
        I()
    }
    startAudio() {
        if (!O()) return;
        let t = d.A.getChannelId();
        if (null == t) return;
        let e = s.default.getId(),
            n = c.A.isTyping(t, e),
            i = h.Ay.getUserCombo(e, t),
            r = i?.multiplier ?? 1;
        n && r >= 7 ? C || (A.loop(), C = !0) : I()
    }
    playAchievementUnlockSound() {
        O() && p("poggermode_achievement_unlock")
    }
}
let b = new S