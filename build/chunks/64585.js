/** Chunk was on 32502 **/
/** chunk id: 64585, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
}), n(896048), n(321073);
var i = n(73153),
    l = n(272355),
    s = n(400492),
    r = n(312671),
    a = n(961350),
    o = n(383501),
    c = n(309010),
    d = n(741961),
    u = n(3137),
    h = n(559908),
    g = n(652215);
let x = (0, s.aN)("poggermode_applause", r.A.getSoundpack()),
    p = !1,
    m = !1,
    A = [],
    b = null,
    j = () => {
        x.stop(), p = !1
    },
    O = () => {
        let e = u.A.isEnabled(),
            t = u.A.comboSoundsEnabled;
        return !!e && !!t && null != c.A.getChannelId()
    },
    E = () => {
        if (0 === A.length || !O() || m) return;
        m = !0;
        let [e, t] = A[A.length - 1];
        (0, s.Ak)(e, t), b = setTimeout(S, 1e3)
    },
    S = () => {
        A.pop(), m = !1, E()
    },
    f = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = o.A.isConnected();
        A.push([e, t * (n ? .1 : 1)]), E()
    };
class C extends l.A {
    _initialize() {
        h.Ay.addChangeListener(this.startAudio), i.h.subscribe("RTC_CONNECTION_STATE", this.setVolume), i.h.subscribe("TYPING_STOP", this.stopAudio), i.h.subscribe("TYPING_STOP_LOCAL", this.stopAudio), i.h.subscribe("CHANNEL_SELECT", this.stopAudio), i.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
    }
    _terminate() {
        h.Ay.removeChangeListener(this.startAudio), i.h.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), i.h.unsubscribe("TYPING_STOP", this.stopAudio), i.h.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), i.h.unsubscribe("CHANNEL_SELECT", this.stopAudio), i.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(b)
    }
    setVolume(e) {
        let {
            state: t
        } = e;
        t === g.S7L.RTC_CONNECTED ? x.volume = .1 : x.volume = 1
    }
    handleTypingStop(e) {
        let {
            userId: t
        } = e;
        a.default.getId() === t && j()
    }
    stopAudio() {
        j()
    }
    startAudio() {
        var e;
        if (!O()) return;
        let t = c.A.getChannelId();
        if (null == t) return;
        let n = a.default.getId(),
            i = d.A.isTyping(t, n),
            l = h.Ay.getUserCombo(n, t),
            s = null != (e = null == l ? void 0 : l.multiplier) ? e : 1;
        i && s >= 7 ? p || (x.loop(), p = !0) : j()
    }
    playAchievementUnlockSound() {
        O() && f("poggermode_achievement_unlock")
    }
}
let v = new C