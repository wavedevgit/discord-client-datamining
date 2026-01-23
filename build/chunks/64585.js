/** Chunk was on web.js **/
/** chunk id: 64585, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => R
}), n(896048), n(321073);
var r = n(73153),
    i = n(272355),
    a = n(400492),
    s = n(312671),
    o = n(961350),
    l = n(383501),
    c = n(309010),
    u = n(741961),
    d = n(3137),
    f = n(559908),
    p = n(652215);
let _ = (0, a.aN)("poggermode_applause", s.A.getSoundpack()),
    h = 7,
    m = 1,
    g = .1,
    E = 1e3,
    y = !1,
    b = !1,
    O = [],
    v = null,
    A = () => {
        y || (_.loop(), y = !0)
    },
    I = () => {
        _.stop(), y = !1
    },
    S = () => {
        let e = d.A.isEnabled(),
            t = d.A.comboSoundsEnabled;
        return !!e && !!t && null != c.A.getChannelId()
    },
    T = () => {
        if (0 === O.length || !S() || b) return;
        b = !0;
        let [e, t] = O[O.length - 1];
        (0, a.Ak)(e, t), v = setTimeout(C, E)
    },
    C = () => {
        O.pop(), b = !1, T()
    },
    N = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = l.A.isConnected() ? g : m;
        O.push([e, t * n]), T()
    };
class w extends i.A {
    _initialize() {
        f.Ay.addChangeListener(this.startAudio), r.h.subscribe("RTC_CONNECTION_STATE", this.setVolume), r.h.subscribe("TYPING_STOP", this.stopAudio), r.h.subscribe("TYPING_STOP_LOCAL", this.stopAudio), r.h.subscribe("CHANNEL_SELECT", this.stopAudio), r.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
    }
    _terminate() {
        f.Ay.removeChangeListener(this.startAudio), r.h.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), r.h.unsubscribe("TYPING_STOP", this.stopAudio), r.h.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), r.h.unsubscribe("CHANNEL_SELECT", this.stopAudio), r.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(v)
    }
    setVolume(e) {
        let {
            state: t
        } = e;
        t === p.S7L.RTC_CONNECTED ? _.volume = g : _.volume = m
    }
    handleTypingStop(e) {
        let {
            userId: t
        } = e;
        o.default.getId() === t && I()
    }
    stopAudio() {
        I()
    }
    startAudio() {
        var e;
        if (!S()) return;
        let t = c.A.getChannelId();
        if (null == t) return;
        let n = o.default.getId(),
            r = u.A.isTyping(t, n),
            i = f.Ay.getUserCombo(n, t),
            a = null != (e = null == i ? void 0 : i.multiplier) ? e : 1;
        r && a >= h ? A() : I()
    }
    playAchievementUnlockSound() {
        S() && N("poggermode_achievement_unlock")
    }
}
let R = new w