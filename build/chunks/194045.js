/** chunk id: 194045 params = (module,exports,require) **/
n.d(t, {
    A: () => y
});
var i = n(627968);
n(64700);
var a = n(397927),
    r = n(73153),
    l = n(626584),
    s = n(450510),
    o = n(891540),
    d = n(594061),
    c = n(734057),
    u = n(430452),
    A = n(309010),
    h = n(532624),
    _ = n(518647),
    m = n(796774),
    g = n(209932),
    p = n(123973),
    E = n(646202),
    I = n(102597),
    f = n(904054),
    C = n(857179),
    T = n(652215),
    N = n(731854);
let S = new l.A("SoundboardManager");
class x extends _.A {
    playingSoundsWeb = new Map;
    _initialize() {
        super._initialize(), __OVERLAY__ || (r.h.subscribe("OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", this._handleOverlaySoundboardSoundsFetchRequest), r.h.subscribe("RTC_CONNECTION_STATE", this._handleRTCConnectionState))
    }
    _terminate() {
        super._terminate(), __OVERLAY__ || (r.h.unsubscribe("OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", this._handleOverlaySoundboardSoundsFetchRequest), r.h.unsubscribe("RTC_CONNECTION_STATE", this._handleRTCConnectionState))
    }
    _stopAndClearSounds = () => {
        u.Ay.supports(N.O5.SAMPLE_PLAYBACK) && u.Ay.getMediaEngine().eachConnection(e => {
            e.stopAllSamplesLocalPlayback()
        }), this.playingSoundsWeb.forEach(e => {
            e.pause(), e.src = ""
        }), this.playingSoundsWeb = new Map
    };
    _playSound = (() => {
        var e = this;
        return async function(t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                i = arguments.length > 2 ? arguments[2] : void 0,
                a = arguments.length > 3 ? arguments[3] : void 0,
                r = null != a && A.A.getVoiceChannelId() === a;
            if ((null == a || r) && !u.Ay.isDeaf() && !g.A.isLocalSoundboardMuted(i)) try {
                let a = {
                    soundKey: `${i}-${t}`,
                    soundURL: (0, I.A)(t),
                    soundVolume: (0, f.A)(n),
                    reportSoundStartedPlaying: () => (0, m.dZ)(t, i)
                };
                u.Ay.supports(N.O5.SAMPLE_PLAYBACK) ? await (0, C.o)(a) : await (0, C.G)(a, e.playingSoundsWeb)
            } catch (e) {
                S.warn(`Error playing soundboard sound: ${e.message}`)
            } finally {
                (0, m.g0)(t, i)
            }
        }
    })();
    _handleRTCConnectionState = e => {
        let {
            state: t
        } = e;
        t === T.S7L.RTC_CONNECTED && (0, E.fN)("SoundboardManager") && (d.bW.loadIfNecessary(), (0, m.E7)({
            disableAnalytics: !0
        }))
    };
    _handleOverlaySoundboardSoundsFetchRequest = () => {
        (0, m.E7)()
    };
    _handleOpenEducationModal = (e, t) => {
        if (null == e) return;
        let r = c.A.getChannel(t),
            l = h.Ay.getKeybindForAction(T.hCu.SOUNDBOARD_HOLD);
        null != r && (0, p.Ay)(r) && null != l && o.A.hasHotspot(s._2.SOUNDBOARD_WHEEL_EDUCATION_MODAL) && (0, a.mMO)(async () => {
            let {
                default: t
            } = await n.e("51143").then(n.bind(n, 888762));
            return n => (0, i.jsx)(t, {
                ...n,
                guildId: e,
                keybind: l,
                channel: r
            })
        })
    }
}
let y = new x