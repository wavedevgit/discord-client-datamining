/** chunk id: 688465, original params: e,t,r (module,exports,require) **/
r.d(t, {
    KL: () => y,
    tS: () => b,
    yB: () => C
});
var s = r(627968),
    i = r(64700),
    n = r(735438),
    l = r.n(n),
    a = r(72978),
    o = r(141931),
    c = r(311907),
    d = r(77729),
    u = r(674966),
    f = r(253932),
    h = r(929921),
    x = r(430452),
    p = r(258585),
    m = r(874124),
    _ = r(753070),
    g = r(765682);
let j = {
        screenSources: [],
        windowSources: [],
        deviceSources: [],
        hasPermission: void 0,
        muteStreamAudio: !1,
        notifyFriends: !1,
        hidePreview: !1,
        preset: _.jQ.PRESET_CUSTOM,
        resolution: _.on.RESOLUTION_720,
        fps: _.kn.FPS_30,
        sourceType: o.fS.WINDOW,
        fetchingSources: !0,
        selectedSource: void 0,
        audioSourceId: void 0,
        selectedChannel: void 0,
        nativeSourceType: "",
        discordSourceId: ""
    },
    v = i.createContext(j),
    A = i.createContext(() => {
        throw Error("Using uninitialized GoLiveModalContextDispatch")
    });

function S(e, t) {
    switch (t.type) {
        case "set_mute_audio":
            return {
                ...e, muteStreamAudio: t.value
            };
        case "set_notify_friends":
            return {
                ...e, notifyFriends: t.value
            };
        case "set_has_permission":
            return {
                ...e, hasPermission: t.value
            };
        case "set_source_candidates":
            return {
                ...e, screenSources: t.screenSources, windowSources: t.windowSources, deviceSources: t.deviceSources, fetchingSources: !1
            };
        case "set_preset":
            return {
                ...e, preset: t.preset
            };
        case "set_source_type":
            let r = {
                sourceType: t.sourceType,
                selectedSource: void 0
            };
            return t.sourceType === o.fS.CAMERA ? ((e.preset === _.jQ.PRESET_DOCUMENTS || e.preset === _.jQ.PRESET_AUTO) && (r.preset = _.jQ.PRESET_VIDEO), e.resolution === _.on.RESOLUTION_SOURCE && (r.resolution = _.on.RESOLUTION_720)) : r.selectedSource = null, {
                ...e,
                ...r
            };
        case "set_native_source_type":
            return {
                ...e, nativeSourceType: t.sourceType
            };
        case "set_resolution":
            return {
                ...e, resolution: t.resolution
            };
        case "set_fps":
            return {
                ...e, fps: t.fps
            };
        case "set_hide_preview":
            return {
                ...e, hidePreview: t.hidePreview
            };
        case "set_selected_source": {
            let r = t.source,
                s = {
                    ...e,
                    selectedSource: r
                },
                i = r?.name;
            if (null != r && r.id?.startsWith(o.fS.CAMERA) && null != i) {
                let e = l().maxBy(Object.values(x.Ay.getInputDevices()), e => (0, a.default)(i, e.name));
                s.audioSourceId = e?.id ?? x.Ay.getInputDeviceId()
            }
            return s
        }
        case "set_audio_source":
            return {
                ...e, audioSourceId: t.audioSourceId ?? x.Ay.getInputDeviceId()
            };
        case "set_selected_channel":
            return {
                ...e, selectedChannel: t.channelId
            };
        case "set_discord_source_id":
            return {
                ...e, discordSourceId: t.sourceId
            };
        default:
            return e
    }
}

function y(e) {
    let {
        dispatch: t,
        state: r,
        children: i
    } = e;
    return (0, s.jsx)(A.Provider, {
        value: t,
        children: (0, s.jsx)(v.Provider, {
            value: r,
            children: i
        })
    })
}

function C(e, t, r) {
    let {
        defaultAutoQuality: s,
        allowAutoQuality: n
    } = (0, p.X5)({
        location: "useCreateGoLiveModalState"
    }), {
        preset: l,
        resolution: a,
        fps: o,
        soundshareEnabled: v
    } = (0, c.cf)([h.A], () => h.A.getState());
    s && (l = _.jQ.PRESET_AUTO);
    let A = (0, c.bG)([x.Ay], () => x.Ay.getInputDeviceId()),
        y = f.uh.useSetting() ?? !1,
        C = f.wv.useSetting() ?? !1;
    l in _.jQ && (l !== _.jQ.PRESET_AUTO || n) || (l = _.jQ.PRESET_VIDEO), (0, m.A)(_.jQ.PRESET_CUSTOM, a, o, t, r) || (a = _.on.RESOLUTION_720, o = _.kn.FPS_30);
    let [b, w] = i.useReducer(S, {
        ...j,
        muteStreamAudio: !v,
        preset: l,
        resolution: a,
        fps: o,
        hidePreview: y,
        notifyFriends: C,
        selectedSource: e,
        nativeSourceType: x.Ay.getUseGamescopeCapture() ? "gamescope" : "",
        audioSourceId: A
    });
    return i.useEffect(() => {
        u.A.hasPermission(g.iL.SCREEN_RECORDING, {
            showAuthorizationError: !1
        }).then(e => w({
            type: "set_has_permission",
            value: e
        })), d.A.window.getMediaSourceId?.().then(e => {
            w({
                type: "set_discord_source_id",
                sourceId: e ?? ""
            })
        })
    }, []), {
        state: b,
        dispatch: w
    }
}

function b() {
    return [i.useContext(v), i.useContext(A)]
}