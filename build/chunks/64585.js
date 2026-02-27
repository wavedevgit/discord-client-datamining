/** chunk id: 64585, original params: e,t,n (module,exports,require) **/
n.d(t, {
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
    C = n(652215);
let E = (0, l.aN)("poggermode_applause", s.A.getSoundpack()),
    A = !1,
    _ = !1,
    g = [],
    p = null,
    m = () => {
        E.stop(), A = !1
    },
    L = () => {
        let e = u.A.isEnabled(),
            t = u.A.comboSoundsEnabled;
        return !!e && !!t && null != c.A.getChannelId()
    },
    O = () => {
        if (0 === g.length || !L() || _) return;
        _ = !0;
        let [e, t] = g[g.length - 1];
        (0, l.Ak)(e, t), p = setTimeout(f, 1e3)
    },
    f = () => {
        g.pop(), _ = !1, O()
    },
    T = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = o.A.isConnected();
        g.push([e, t * (n ? .1 : 1)]), O()
    };
class I extends r.A {
    _initialize() {
        h.Ay.addChangeListener(this.startAudio), i.h.subscribe("RTC_CONNECTION_STATE", this.setVolume), i.h.subscribe("TYPING_STOP", this.stopAudio), i.h.subscribe("TYPING_STOP_LOCAL", this.stopAudio), i.h.subscribe("CHANNEL_SELECT", this.stopAudio), i.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
    }
    _terminate() {
        h.Ay.removeChangeListener(this.startAudio), i.h.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), i.h.unsubscribe("TYPING_STOP", this.stopAudio), i.h.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), i.h.unsubscribe("CHANNEL_SELECT", this.stopAudio), i.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(p)
    }
    setVolume(e) {
        let {
            state: t
        } = e;
        t === C.S7L.RTC_CONNECTED ? E.volume = .1 : E.volume = 1
    }
    handleTypingStop(e) {
        let {
            userId: t
        } = e;
        a.default.getId() === t && m()
    }
    stopAudio() {
        m()
    }
    startAudio() {
        if (!L()) return;
        let e = c.A.getChannelId();
        if (null == e) return;
        let t = a.default.getId(),
            n = d.A.isTyping(e, t),
            i = h.Ay.getUserCombo(t, e),
            r = i?.multiplier ?? 1;
        n && r >= 7 ? A || (E.loop(), A = !0) : m()
    }
    playAchievementUnlockSound() {
        L() && T("poggermode_achievement_unlock")
    }
}
let R = new I