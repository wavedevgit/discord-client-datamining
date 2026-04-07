/** chunk id: 64585 params = (module,exports,require) **/
n.d(e, {
    A: () => R
}), n(321073);
var i = n(73153),
    r = n(272355),
    s = n(400492),
    l = n(312671),
    a = n(961350),
    o = n(383501),
    c = n(309010),
    d = n(741961),
    h = n(3137),
    u = n(559908),
    C = n(652215);
let _ = (0, s.aN)("poggermode_applause", l.A.getSoundpack()),
    A = !1,
    E = !1,
    g = [],
    T = null,
    L = () => {
        _.stop(), A = !1
    },
    O = () => {
        let t = h.A.isEnabled(),
            e = h.A.comboSoundsEnabled;
        return !!t && !!e && null != c.A.getChannelId()
    },
    S = () => {
        if (0 === g.length || !O() || E) return;
        E = !0;
        let [t, e] = g[g.length - 1];
        (0, s.Ak)(t, e), T = setTimeout(p, 1e3)
    },
    p = () => {
        g.pop(), E = !1, S()
    },
    I = function(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = o.A.isConnected();
        g.push([t, e * (n ? .1 : 1)]), S()
    };
class m extends r.A {
    _initialize() {
        u.Ay.addChangeListener(this.startAudio), i.h.subscribe("RTC_CONNECTION_STATE", this.setVolume), i.h.subscribe("TYPING_STOP", this.stopAudio), i.h.subscribe("TYPING_STOP_LOCAL", this.stopAudio), i.h.subscribe("CHANNEL_SELECT", this.stopAudio), i.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
    }
    _terminate() {
        u.Ay.removeChangeListener(this.startAudio), i.h.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), i.h.unsubscribe("TYPING_STOP", this.stopAudio), i.h.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), i.h.unsubscribe("CHANNEL_SELECT", this.stopAudio), i.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(T)
    }
    setVolume(t) {
        let {
            state: e
        } = t;
        e === C.S7L.RTC_CONNECTED ? _.volume = .1 : _.volume = 1
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
        if (!O()) return;
        let t = c.A.getChannelId();
        if (null == t) return;
        let e = a.default.getId(),
            n = d.A.isTyping(t, e),
            i = u.Ay.getUserCombo(e, t),
            r = i?.multiplier ?? 1;
        n && r >= 7 ? A || (_.loop(), A = !0) : L()
    }
    playAchievementUnlockSound() {
        O() && I("poggermode_achievement_unlock")
    }
}
let R = new m