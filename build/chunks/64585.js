/** chunk id: 64585, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
}), n(321073);
var i = n(73153),
    a = n(272355),
    r = n(400492),
    l = n(312671),
    s = n(961350),
    o = n(383501),
    c = n(309010),
    d = n(741961),
    u = n(3137),
    _ = n(559908),
    h = n(652215);
let C = (0, r.aN)("poggermode_applause", l.A.getSoundpack()),
    g = !1,
    A = !1,
    E = [],
    m = null,
    p = () => {
        C.stop(), g = !1
    },
    I = () => {
        let e = u.A.isEnabled(),
            t = u.A.comboSoundsEnabled;
        return !!e && !!t && null != c.A.getChannelId()
    },
    T = () => {
        if (0 === E.length || !I() || A) return;
        A = !0;
        let [e, t] = E[E.length - 1];
        (0, r.Ak)(e, t), m = setTimeout(b, 1e3)
    },
    b = () => {
        E.pop(), A = !1, T()
    },
    L = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = o.A.isConnected();
        E.push([e, t * (n ? .1 : 1)]), T()
    };
class f extends a.A {
    _initialize() {
        _.Ay.addChangeListener(this.startAudio), i.h.subscribe("RTC_CONNECTION_STATE", this.setVolume), i.h.subscribe("TYPING_STOP", this.stopAudio), i.h.subscribe("TYPING_STOP_LOCAL", this.stopAudio), i.h.subscribe("CHANNEL_SELECT", this.stopAudio), i.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
    }
    _terminate() {
        _.Ay.removeChangeListener(this.startAudio), i.h.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), i.h.unsubscribe("TYPING_STOP", this.stopAudio), i.h.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), i.h.unsubscribe("CHANNEL_SELECT", this.stopAudio), i.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(m)
    }
    setVolume(e) {
        let {
            state: t
        } = e;
        t === h.S7L.RTC_CONNECTED ? C.volume = .1 : C.volume = 1
    }
    handleTypingStop(e) {
        let {
            userId: t
        } = e;
        s.default.getId() === t && p()
    }
    stopAudio() {
        p()
    }
    startAudio() {
        if (!I()) return;
        let e = c.A.getChannelId();
        if (null == e) return;
        let t = s.default.getId(),
            n = d.A.isTyping(e, t),
            i = _.Ay.getUserCombo(t, e),
            a = i?.multiplier ?? 1;
        n && a >= 7 ? g || (C.loop(), g = !0) : p()
    }
    playAchievementUnlockSound() {
        I() && L("poggermode_achievement_unlock")
    }
}
let O = new f