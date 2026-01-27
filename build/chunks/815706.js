/** Chunk was on web.js **/
/** chunk id: 815706, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    p: () => g,
    z: () => E
});
var r = n(77729),
    i = n(15285),
    a = n(41984),
    o = n(833551),
    s = n(243612),
    l = n(929921),
    c = n(430452),
    u = n(383501),
    d = n(157257),
    f = n(954571),
    p = n(58149),
    _ = n(652215);

function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            h(e, t, n[t])
        })
    }
    return e
}

function g() {
    let e, t, n, r, a, o = c.A.getGoLiveSource(),
        s = l.A.getState().preset;
    if (null != o && (e = o.quality.resolution, t = o.quality.frameRate, null != o.desktopSource)) {
        var u, d;
        n = o.desktopSource.soundshareSession;
        let e = null != o.desktopSource.sourcePid ? i.Ay.getGameForPID(o.desktopSource.sourcePid) : null;
        r = null != (u = null == e ? void 0 : e.name) ? u : null, a = null != (d = null == e ? void 0 : e.id) ? d : null
    }
    return {
        video_input_resolution: e,
        video_input_frame_rate: t,
        soundshare_session: n,
        share_game_name: r,
        share_game_id: a,
        quality_preset: s
    }
}
async function E(e, t) {
    var n, l, c, h, g, E;
    let y = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        b = __OVERLAY__ ? d.A.getGame() : (0, s.qv)(),
        O = i.Ay.getRunningGames().find(e => e.name === (null == b ? void 0 : b.name)),
        v = (null == O ? void 0 : O.pid) != null ? o.default.getTrackedGameByPid(null == O ? void 0 : O.pid) : null,
        A = null != (n = null == v ? void 0 : v.source) ? n : null,
        I = null != (l = null != (c = null == v ? void 0 : v.overlayMethod) ? c : o.default.getRenderMethod(null == O ? void 0 : O.pid)) ? l : null,
        S = {
            overlay_game_source: A,
            overlay_game_name: null != b ? b.name : "Unknown Game",
            overlay_app_id: null != b ? b.id : null,
            overlay_render_method: null != I ? a.Ue[I] : null,
            media_session_id: u.A.getMediaSessionId(),
            overlay_game_elevated: null == O ? void 0 : O.elevated,
            input_service_initialized: i.Ay.isSystemServiceInitialized("input-service"),
            hardware_display_count: null != (h = await (null === r.A || void 0 === r.A || null == (E = r.A.hardware) || null == (g = E.getDisplayCount) ? void 0 : g.call(E))) ? h : null
        };
    switch (__OVERLAY__ && (S.overlay_render_method = a.Ue[a.Ue.Hook]), t = m({}, S, t), e) {
        case _.HAw.VOICE_CHANNEL_SELECTED:
        case _.HAw.SETTINGS_PANE_VIEWED:
        case _.HAw.GUILD_VIEWED:
        case _.HAw.CHANNEL_OPENED:
            return (0, p.zV)(e, t, y);
        default:
            return f.default.track(e, t, {
                flush: y
            })
    }
}