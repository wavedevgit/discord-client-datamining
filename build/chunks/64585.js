/** chunk id: 64585 params = (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(321073);
var i = n(73153),
    a = n(272355),
    l = n(400492),
    r = n(312671),
    s = n(961350),
    o = n(383501),
    d = n(309010),
    c = n(741961),
    u = n(3137),
    A = n(559908),
    h = n(652215);
let _ = (0, l.aN)("poggermode_applause", r.A.getSoundpack()),
    m = !1,
    g = !1,
    p = [],
    E = null,
    I = () => {
        _.stop(), m = !1
    },
    f = () => {
        let e = u.A.isEnabled(),
            t = u.A.comboSoundsEnabled;
        return !!e && !!t && null != d.A.getChannelId()
    },
    C = () => {
        if (0 === p.length || !f() || g) return;
        g = !0;
        let [e, t] = p[p.length - 1];
        (0, l.Ak)(e, t), E = setTimeout(T, 1e3)
    },
    T = () => {
        p.pop(), g = !1, C()
    },
    N = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = o.A.isConnected();
        p.push([e, t * (n ? .1 : 1)]), C()
    };
class S extends a.A {
    _initialize() {
        A.Ay.addChangeListener(this.startAudio), i.h.subscribe("RTC_CONNECTION_STATE", this.setVolume), i.h.subscribe("TYPING_STOP", this.stopAudio), i.h.subscribe("TYPING_STOP_LOCAL", this.stopAudio), i.h.subscribe("CHANNEL_SELECT", this.stopAudio), i.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
    }
    _terminate() {
        A.Ay.removeChangeListener(this.startAudio), i.h.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), i.h.unsubscribe("TYPING_STOP", this.stopAudio), i.h.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), i.h.unsubscribe("CHANNEL_SELECT", this.stopAudio), i.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(E)
    }
    setVolume(e) {
        let {
            state: t
        } = e;
        t === h.S7L.RTC_CONNECTED ? _.volume = .1 : _.volume = 1
    }
    handleTypingStop(e) {
        let {
            userId: t
        } = e;
        s.default.getId() === t && I()
    }
    stopAudio() {
        I()
    }
    startAudio() {
        if (!f()) return;
        let e = d.A.getChannelId();
        if (null == e) return;
        let t = s.default.getId(),
            n = c.A.isTyping(e, t),
            i = A.Ay.getUserCombo(t, e),
            a = i?.multiplier ?? 1;
        n && a >= 7 ? m || (_.loop(), m = !0) : I()
    }
    playAchievementUnlockSound() {
        f() && N("poggermode_achievement_unlock")
    }
}
let x = new S