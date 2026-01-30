/** chunk id: 763685, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
}), n(896048);
var r = n(812729),
    i = n.n(r),
    a = n(735438),
    o = n.n(a),
    s = n(73153),
    l = n(827343),
    c = n(956793),
    u = n(272355),
    d = n(405018),
    f = n(704877),
    p = n(675991),
    _ = n(442353),
    h = n(734057),
    m = n(430452),
    g = n(309010),
    E = n(723702),
    y = n(837921),
    b = n(652215),
    O = n(985018);

function v(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class A extends u.A {
    _initialize() {
        this.isSupported && (s.h.subscribe("AUDIO_SET_MODE", this.handleViewUpdate), s.h.subscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate), s.h.subscribe("START_SESSION", this.handleViewUpdate), s.h.subscribe("CONNECTION_OPEN", this.handleViewUpdate), s.h.subscribe("CONNECTION_CLOSED", this.handleViewUpdate), s.h.subscribe("CALL_CREATE", this.handleViewUpdate), s.h.subscribe("CALL_UPDATE", this.handleViewUpdate), s.h.subscribe("CALL_DELETE", this.handleViewUpdate), s.h.subscribe("CHANNEL_DELETE", this.handleViewUpdate), s.h.subscribe("VOICE_STATE_UPDATES", this.handleViewUpdate), s.h.subscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate), s.h.subscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate), s.h.subscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate), s.h.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate), y.Ay.on("THUMBAR_BUTTONS_CLICKED", (e, t) => this.buttonClicked(t)))
    }
    _terminate() {
        this.isSupported && (s.h.unsubscribe("AUDIO_SET_MODE", this.handleViewUpdate), s.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate), s.h.unsubscribe("START_SESSION", this.handleViewUpdate), s.h.unsubscribe("CONNECTION_OPEN", this.handleViewUpdate), s.h.unsubscribe("CONNECTION_CLOSED", this.handleViewUpdate), s.h.unsubscribe("CALL_CREATE", this.handleViewUpdate), s.h.unsubscribe("CALL_UPDATE", this.handleViewUpdate), s.h.unsubscribe("CALL_DELETE", this.handleViewUpdate), s.h.unsubscribe("CHANNEL_DELETE", this.handleViewUpdate), s.h.unsubscribe("VOICE_STATE_UPDATES", this.handleViewUpdate), s.h.unsubscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate), s.h.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate), s.h.unsubscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate), s.h.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate))
    }
    setThumbarButtons(e) {
        i()(this.prevButtons, e) || (this.prevButtons = e, y.Ay.setThumbarButtons(e))
    }
    constructor(...e) {
        super(...e), v(this, "callbackActions", {
            [y.dv.VIDEO]: () => {
                m.A.isVideoEnabled() ? l.A.setVideoEnabled(!1) : (0, _.A)(() => l.A.setVideoEnabled(!0), b.BRT.APP)
            },
            [y.dv.MUTE]: () => l.A.toggleSelfMute({
                location: "Thumbar"
            }),
            [y.dv.DEAFEN]: () => l.A.toggleSelfDeaf({
                location: "Thumbar"
            }),
            [y.dv.DISCONNECT]: () => c.default.disconnect()
        }), v(this, "isSupported", (0, E.isMac)() || (0, E.isWindows)()), v(this, "prevButtons", []), v(this, "buttonClicked", e => {
            e.buttonName in this.callbackActions ? this.callbackActions[e.buttonName]() : console.error('ThumbarButtonsManager: Unknown callback eventName: "'.concat(e.buttonName, '"'), e)
        }), v(this, "handleViewUpdate", o().debounce(() => {
            let e = g.A.getVoiceChannelId();
            if (null == e) return void this.setThumbarButtons([]);
            let t = m.A.isSelfMute(),
                n = m.A.isSelfDeaf(),
                r = m.A.isVideoEnabled(),
                i = m.A.isVideoAvailable(),
                a = h.A.getChannel(e),
                o = null == a || (0, f.r)(a),
                {
                    reachedLimit: s,
                    limit: l
                } = null != a ? (0, d.M)(a) : {
                    reachedLimit: void 0,
                    limit: void 0
                },
                c = (0, p.Q)({
                    enabled: r,
                    join: !1,
                    channel: a,
                    cameraUnavailable: !i,
                    hasPermission: o,
                    channelLimit: l,
                    channelLimitReached: s
                });
            this.setThumbarButtons([{
                name: y.dv.VIDEO,
                active: !r,
                tooltip: c,
                flags: i ? [] : ["disabled"]
            }, {
                name: y.dv.MUTE,
                active: t,
                tooltip: t ? O.intl.string(O.t.YqAjXy) : O.intl.string(O.t.w4m945)
            }, {
                name: y.dv.DEAFEN,
                active: n,
                tooltip: n ? O.intl.string(O.t["2US872"]) : O.intl.string(O.t.wjcRFX)
            }, {
                name: y.dv.DISCONNECT,
                active: !0,
                tooltip: O.intl.string(O.t["6vrfgt"])
            }])
        }, 100))
    }
}
let I = new A