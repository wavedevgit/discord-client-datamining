/** chunk id: 72432, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(896048);
var r = n(141931),
    i = n(401843),
    l = n(15285),
    a = n(674966),
    s = n(253932),
    o = n(929921),
    c = n(734057),
    u = n(71393),
    d = n(430452),
    p = n(309010),
    m = n(287809),
    f = n(723702),
    g = n(258585),
    _ = n(874124),
    h = n(476697),
    b = n(571044),
    y = n(310689),
    A = n(753070),
    v = n(765682);
let O = new Set(["356943187589201930"]);
async function x(e, t) {
    var n, x, E, j, C, I, S, T, N, P;
    let w = m.default.getCurrentUser(),
        R = p.A.getVoiceChannelId(),
        D = c.A.getChannel(R),
        L = null == D ? void 0 : D.getGuildId(),
        M = null == (S = u.A.getGuild(L)) ? void 0 : S.premiumTier;
    if (null == w || null == D || null == R) return [!1, "no user or channel"];
    let k = null;
    if (null == (k = "number" == typeof e ? l.Ay.getGameForPID(e) : e)) return [!1, "no source"];
    if (!d.A.getUseSystemScreensharePicker() && !await a.A.hasPermission(v.iL.SCREEN_RECORDING, {
            showAuthorizationError: !1
        })) return [!1, "no permission"];
    let {
        preset: U,
        resolution: G,
        fps: B,
        soundshareEnabled: F
    } = o.A.getState(), H = null != (n = null == t ? void 0 : t.preset) ? n : U, {
        allowAutoQuality: V
    } = (0, g.eO)({
        location: "startStreamWithSource"
    });
    H !== A.jQ.PRESET_AUTO || V || (H = A.jQ.PRESET_VIDEO);
    let z = H === A.jQ.PRESET_AUTO ? A.jQ.PRESET_VIDEO : H,
        [W, K] = null != (x = (0, h.A)(z, w, M)) ? x : [],
        Y = null != (E = null != W ? W : null == t ? void 0 : t.resolution) ? E : G,
        q = null != (j = null != K ? K : null == t ? void 0 : t.fps) ? j : B,
        Q = null != (C = null == t ? void 0 : t.previewDisabled) ? C : s.uh.getSetting(),
        J = null != (I = null == t ? void 0 : t.soundshareEnabled) ? I : F;
    return (0, _.A)(z, Y, q, w, M, D) || (H = A.jQ.PRESET_VIDEO, Y = A.on.RESOLUTION_720, q = A.kn.FPS_30), (0, i.Xd)({
        preset: H,
        resolution: Y,
        frameRate: q,
        soundshareEnabled: J
    }), (0, i.XI)(L, R, (N = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r
            })
        }
        return e
    }({}, function(e) {
        var t;
        let n;
        if (e.hasOwnProperty("pid")) return {
            pid: e.pid
        };
        let i = (0, y.A)(void 0, e, l.Ay.getRunningGames()),
            a = !(0, f.isWindows)() || null == i || null != (n = i.id) && O.has(n) || (null == e ? void 0 : e.id.startsWith(r.fS.CAMERA)),
            s = null != i ? i.pid : null;
        return a || null == s ? (null == s && (null == (t = e.id) ? void 0 : t.startsWith("prepicked:")) && (s = b.Ay.getLastPickedContentPID()), {
            sourceId: e.id,
            sourceName: e.name,
            sourceIcon: e.icon,
            sourcePid: s
        }) : {
            pid: s
        }
    }(k)), P = P = {
        audioSourceId: (null == (T = k.id) ? void 0 : T.startsWith(r.fS.CAMERA)) ? null == t ? void 0 : t.audioSourceId : void 0,
        sound: J,
        previewDisabled: Q,
        goLiveModalDurationMs: null == t ? void 0 : t.goLiveModalDurationMs,
        analyticsLocations: null == t ? void 0 : t.analyticsLocations
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(N, Object.getOwnPropertyDescriptors(P)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(P)).forEach(function(e) {
        Object.defineProperty(N, e, Object.getOwnPropertyDescriptor(P, e))
    }), N)), [!0, void 0]
}