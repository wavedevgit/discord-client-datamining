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
    u = n(309010),
    c = n(741961),
    d = n(3137),
    h = n(559908),
    _ = n(652215);
let E = (0, l.aN)("poggermode_applause", a.A.getSoundpack()),
    A = !1,
    C = !1,
    T = [],
    g = null,
    f = () => {
        E.stop(), A = !1
    },
    O = () => {
        let t = d.A.isEnabled(),
            e = d.A.comboSoundsEnabled;
        return !!t && !!e && null != u.A.getChannelId()
    },
    I = () => {
        if (0 === T.length || !O() || C) return;
        C = !0;
        let [t, e] = T[T.length - 1];
        (0, l.Ak)(t, e), g = setTimeout(p, 1e3)
    },
    p = () => {
        T.pop(), C = !1, I()
    },
    L = function(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = o.A.isConnected();
        T.push([t, e * (n ? .1 : 1)]), I()
    };
class S extends r.A {
    _initialize() {
        h.Ay.addChangeListener(this.startAudio), i.h.subscribe("RTC_CONNECTION_STATE", this.setVolume), i.h.subscribe("TYPING_STOP", this.stopAudio), i.h.subscribe("TYPING_STOP_LOCAL", this.stopAudio), i.h.subscribe("CHANNEL_SELECT", this.stopAudio), i.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
    }
    _terminate() {
        h.Ay.removeChangeListener(this.startAudio), i.h.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), i.h.unsubscribe("TYPING_STOP", this.stopAudio), i.h.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), i.h.unsubscribe("CHANNEL_SELECT", this.stopAudio), i.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(g)
    }
    setVolume(t) {
        let {
            state: e
        } = t;
        e === _.S7L.RTC_CONNECTED ? E.volume = .1 : E.volume = 1
    }
    handleTypingStop(t) {
        let {
            userId: e
        } = t;
        s.default.getId() === e && f()
    }
    stopAudio() {
        f()
    }
    startAudio() {
        if (!O()) return;
        let t = u.A.getChannelId();
        if (null == t) return;
        let e = s.default.getId(),
            n = c.A.isTyping(t, e),
            i = h.Ay.getUserCombo(e, t),
            r = i?.multiplier ?? 1;
        n && r >= 7 ? A || (E.loop(), A = !0) : f()
    }
    playAchievementUnlockSound() {
        O() && L("poggermode_achievement_unlock")
    }
}
let R = new S