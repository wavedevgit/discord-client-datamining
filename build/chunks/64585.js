/** chunk id: 64585 params = (module,exports,require) **/
n.d(e, {
    A: () => R
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
    _ = n(652215);
let C = (0, l.aN)("poggermode_applause", s.A.getSoundpack()),
    A = !1,
    g = !1,
    E = [],
    T = null,
    L = () => {
        C.stop(), A = !1
    },
    I = () => {
        let t = u.A.isEnabled(),
            e = u.A.comboSoundsEnabled;
        return !!t && !!e && null != c.A.getChannelId()
    },
    O = () => {
        if (0 === E.length || !I() || g) return;
        g = !0;
        let [t, e] = E[E.length - 1];
        (0, l.Ak)(t, e), T = setTimeout(S, 1e3)
    },
    S = () => {
        E.pop(), g = !1, O()
    },
    p = function(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = o.A.isConnected();
        E.push([t, e * (n ? .1 : 1)]), O()
    };
class m extends r.A {
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
        e === _.S7L.RTC_CONNECTED ? C.volume = .1 : C.volume = 1
    }
    handleTypingStop(t) {
        let {
            userId: e
        } = t;
        a.default.getId() === e && L()
    }
    stopAudio() {
        L()
    }
    startAudio() {
        if (!I()) return;
        let t = c.A.getChannelId();
        if (null == t) return;
        let e = a.default.getId(),
            n = d.A.isTyping(t, e),
            i = h.Ay.getUserCombo(e, t),
            r = i?.multiplier ?? 1;
        n && r >= 7 ? A || (C.loop(), A = !0) : L()
    }
    playAchievementUnlockSound() {
        I() && p("poggermode_achievement_unlock")
    }
}
let R = new m