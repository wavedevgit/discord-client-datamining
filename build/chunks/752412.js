/** chunk id: 752412, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(896048);
var r = n(73153),
    i = n(827343),
    l = n(272355),
    a = n(15285),
    s = n(869146),
    o = n(430452),
    c = n(531685),
    u = n(652215),
    d = n(731854);

function p(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let h = new Set,
    g = new Set,
    f = null;

function m() {
    for (let e of h) i.A.setDisableLocalVideo(e, u.bb8.MANUAL_ENABLED, d.x.DEFAULT, !1);
    g.clear(), h.clear()
}
class A extends l.A {
    _initialize() {
        r.h.subscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo), r.h.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle), r.h.subscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange), r.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), s.A.addChangeListener(this.handlePopoutChange)
    }
    _terminate() {
        r.h.unsubscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo), r.h.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle), r.h.unsubscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange), r.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), s.A.removeChangeListener(this.handlePopoutChange), m(), f = null
    }
    handleIncomingVideo(e) {
        let {
            userId: t,
            context: n,
            streamId: r
        } = e;
        if (n !== d.x.DEFAULT || null == r) return;
        let l = null != a.Ay.getVisibleGame(),
            p = c.A.isVisible(),
            f = s.A.getWindowVisible(u.MLl.CHANNEL_CALL_POPOUT),
            m = o.A.isLocalVideoDisabled(t, n),
            A = g.has(t);
        !l || p || f || m || A || (h.add(t), i.A.setDisableLocalVideo(t, u.bb8.DISABLED, n, !1))
    }
    handleManualLocalVideoToggle(e) {
        let {
            userId: t,
            persist: n
        } = e;
        n && (g.add(t), h.delete(t))
    }
    constructor(...e) {
        super(...e), p(this, "handleWindowVisibilityChange", e => {
            let {
                visible: t
            } = e;
            t && m()
        }), p(this, "handleVoiceChannelSelect", e => {
            let {
                channelId: t
            } = e;
            t !== f && (m(), f = t)
        }), p(this, "handlePopoutChange", () => {
            s.A.getWindowVisible(u.MLl.CHANNEL_CALL_POPOUT) && m()
        })
    }
}
let _ = new A