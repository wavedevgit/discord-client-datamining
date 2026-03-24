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
    _ = n(652215);
let A = (0, l.aN)("poggermode_applause", a.A.getSoundpack()),
    C = !1,
    E = !1,
    g = [],
    T = null,
    I = () => {
        A.stop(), C = !1
    },
    f = () => {
        let t = u.A.isEnabled(),
            e = u.A.comboSoundsEnabled;
        return !!t && !!e && null != c.A.getChannelId()
    },
    O = () => {
        if (0 === g.length || !f() || E) return;
        E = !0;
        let [t, e] = g[g.length - 1];
        (0, l.Ak)(t, e), T = setTimeout(L, 1e3)
    },
    L = () => {
        g.pop(), E = !1, O()
    },
    p = function(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = o.A.isConnected();
        g.push([t, e * (n ? .1 : 1)]), O()
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
        if (!f()) return;
        let t = c.A.getChannelId();
        if (null == t) return;
        let e = s.default.getId(),
            n = d.A.isTyping(t, e),
            i = h.Ay.getUserCombo(e, t),
            r = i?.multiplier ?? 1;
        n && r >= 7 ? C || (A.loop(), C = !0) : I()
    }
    playAchievementUnlockSound() {
        f() && p("poggermode_achievement_unlock")
    }
}
let R = new S