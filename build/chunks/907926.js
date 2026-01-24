/** Chunk was on web.js **/
/** chunk id: 907926, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => T
}), n(896048);
var r = n(118356),
    i = n(205693),
    a = n(827343),
    s = n(439372),
    o = n(624694),
    l = n(929921),
    c = n(616356),
    u = n(71393),
    d = n(430452),
    f = n(162605),
    p = n(287809),
    _ = n(927813),
    h = n(258585),
    m = n(652896),
    g = n(476697),
    E = n(753070);

function y(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let b = 10,
    O = 20,
    v = 10,
    A = new r.Vy("AutoQualityStreamingManager"),
    I = 0;
class S extends s.A {
    handleStats() {
        var e, t, n, r;
        if ((I += 1) % v != 0) return;
        let s = c.A.getCurrentUserActiveStream();
        if (null == s) return;
        let h = f.A.getRTCConnection((0, m._z)(s)),
            y = d.A.getGoLiveSource();
        if (null == h || null == y || !h.hasActiveRemoteWants()) return;
        let S = l.A.getState();
        if (S.preset !== E.jQ.PRESET_AUTO) return;
        if ((null == (r = c.A.getStreamerActiveStreamMetadata()) ? void 0 : r.id) != null) return void A.info("Skipping auto quality checker for game stream.");
        let T = o.A.getAccumulatedPerformanceStats(h.getMediaEngineConnectionId(), s.ownerId, "long"),
            C = (null != (e = h.analyticsContext.getDuration()) ? e : 30) >= 30 * _.A.Millis.SECOND ? 30 : 15;
        if (null == T || T.numDatapoints < C) return;
        let N = p.default.getCurrentUser(),
            w = u.A.getGuild(s.guildId),
            [R, P] = null != (t = (0, g.A)(E.jQ.PRESET_DOCUMENTS, N, null == w ? void 0 : w.premiumTier)) ? t : [E.on.RESOLUTION_SOURCE, E.kn.FPS_5],
            [D, x] = null != (n = (0, g.A)(E.jQ.PRESET_VIDEO, N, null == w ? void 0 : w.premiumTier)) ? n : [E.on.RESOLUTION_720, E.kn.FPS_30],
            L = null;
        if (T.entropy < b && (S.resolution !== R || S.fps !== P) ? (A.info("Low entropy average, switching to screenshare preset."), L = {
                qualityOptions: {
                    preset: E.jQ.PRESET_AUTO,
                    resolution: R,
                    frameRate: P
                },
                context: i.x.STREAM
            }) : T.entropy > O && (S.resolution !== D || S.fps !== x) && (A.info("High entropy average, switching to video preset."), L = {
                qualityOptions: {
                    preset: E.jQ.PRESET_AUTO,
                    resolution: D,
                    frameRate: x
                },
                context: i.x.STREAM
            }), null != L) {
            if (null != y.desktopSource) L.desktopSettings = {
                sourceId: y.desktopSource.id,
                sound: S.soundshareEnabled
            };
            else {
                if (null == y.cameraSource) return;
                L.cameraSettings = {
                    videoDeviceGuid: y.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: y.cameraSource.audioDeviceGuid
                }
            }
            h.autoQualityChange(), a.A.setGoLiveSource(L)
        }
    }
    handlePostConnectionOpen() {
        (0, h.pn)()
    }
    constructor(...e) {
        super(...e), y(this, "actions", {
            MEDIA_ENGINE_CONNECTION_STATS: this.handleStats,
            POST_CONNECTION_OPEN: this.handlePostConnectionOpen
        })
    }
}
let T = new S