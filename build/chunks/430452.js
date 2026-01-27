/** Chunk was on web.js **/
/** chunk id: 430452, original params: e,t,n (module,exports,require) **/
"use strict";
let r, i, a, o, s, l, c, u;
n.d(t, {
    A: () => rQ
}), n(896048), n(228524), n(492834), n(321073), n(638769), n(457529), n(790599);
var d, f = n(284009),
    p = n.n(f),
    _ = n(735438),
    h = n.n(_),
    m = n(299855),
    g = n.n(m),
    E = n(490138),
    y = n(311907),
    b = n(205693),
    O = n(506774),
    v = n(451988),
    A = n(73153),
    I = n(77729),
    S = n(719129),
    T = n(894539),
    C = n(274372),
    N = n(915618),
    w = n(572164),
    R = n(626584),
    P = n(211597),
    D = n(709710),
    L = n(49463),
    x = n(784113),
    M = n(15285),
    j = n(540305),
    k = n(17300),
    U = n(593595),
    G = n(788601),
    F = n(626078),
    V = n(509034),
    B = n(638188),
    H = n(269377),
    Y = n(934341),
    W = n(658046),
    K = n(525286),
    z = n(780732),
    q = n(495439),
    Z = n(927170),
    Q = n(233232),
    X = n(140175),
    J = n(267378),
    $ = n(223572),
    ee = n(276006),
    et = n(670470),
    en = n(896014),
    er = n(75076),
    ei = n(674966),
    ea = n(559633),
    eo = n(3527),
    es = n(714763),
    el = n(879172),
    ec = n(555444),
    eu = n(617617),
    ed = n(996744),
    ef = n(28075),
    ep = n(954571),
    e_ = n(353835),
    eh = n(927813),
    em = n(723702),
    eg = n(290805),
    eE = n(728458),
    ey = n(837921),
    eb = n(350535),
    eO = n(961350),
    ev = n(131319),
    eA = n(347481),
    eI = n(734057),
    eS = n(383501),
    eT = n(851581),
    eC = n(287809),
    eN = n(117549),
    ew = n(652215),
    eR = n(502075),
    eP = n(765682),
    eD = n(355097),
    eL = n(509381),
    ex = n(731854),
    eM = n(985018);

function ej(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function ek(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            ej(e, t, n[t])
        })
    }
    return e
}

function eU(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function eG(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eU(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let eF = new R.A("MediaEngineStore"),
    eV = "MediaEngineStore",
    eB = 4,
    eH = 1,
    eY = 1,
    eW = 1,
    eK = .5,
    ez = {
        left: 1,
        right: 1
    },
    eq = 500,
    eZ = 5 * eh.A.Millis.SECOND,
    eQ = -60,
    eX = 100,
    eJ = 2 * eh.A.Millis.SECOND,
    e$ = 30 * eh.A.Millis.SECOND,
    e0 = !0,
    e1 = "deep_noise_suppression",
    e2 = 0;

function e3() {
    return {
        mode: ew.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eQ,
            autoThreshold: em.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eK,
            vadLeading: 5,
            vadTrailing: 25,
            delay: 20,
            shortcut: []
        },
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: !1,
        deaf: !1,
        echoCancellation: !0,
        noiseSuppression: !1,
        automaticGainControl: !0,
        noiseCancellation: !0,
        bypassSystemInputProcessing: !0,
        mostRecentlyRequestedVoiceFilter: null,
        voiceFilterPlaybackEnabled: !0,
        hardwareEnabledVersion: 0,
        silenceWarning: !0,
        attenuation: 0,
        attenuateWhileSpeakingSelf: !1,
        attenuateWhileSpeakingOthers: !0,
        localMutes: {},
        disabledLocalVideos: {},
        videoToggleStateMap: {},
        localVolumes: {},
        localPans: {},
        inputVolume: ex.Hz,
        outputVolume: ex.Hz,
        inputDeviceId: ex.dx,
        outputDeviceId: ex.dx,
        videoDeviceId: ex.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: e4.supports(ex.O5.VIDEO_HOOK),
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: !0,
        vadThrehsoldMigrated: !1,
        aecDumpEnabled: !1,
        sidechainCompression: !0,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: !0,
        activeInputProfile: null
    }
}
let e6 = {
        [eL.my.CUSTOM]: {},
        [eL.my.VOICE_ISOLATION]: {
            modeOptions: {
                autoThreshold: !0,
                vadUseKrisp: !0
            },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0
        },
        [eL.my.STUDIO]: {
            mode: ew.TBI.VOICE_ACTIVITY,
            modeOptions: {
                threshold: -84,
                autoThreshold: !1,
                vadUseKrisp: !1
            },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0
        }
    },
    e4 = (0, b.hB)((0, b.WI)());
eF.enableNativeLogger(!0);
let e5 = {},
    e7 = new Set([ex.x.DEFAULT]),
    e8 = e4.supports(ex.O5.AUTO_ENABLE),
    e9 = !1,
    te = ex.x.STREAM,
    tt = performance.now(),
    tn = {
        [ex.dx]: np("No Input Devices")
    },
    tr = {
        [ex.dx]: np("No Output Devices")
    },
    ti = {
        [ex.dx]: np("No Video Devices")
    },
    ta = new v.Ep,
    to = !1,
    ts = !1,
    tl = !1,
    tc = !1,
    tu = !1,
    td = ex.qe,
    tf = ex.qe,
    tp = !1,
    t_ = !1,
    th = !1,
    tm = new v.Ep,
    tg = !1,
    tE = !1,
    ty = null,
    tb = !1,
    tO = !1,
    tv = !1,
    tA = !1,
    tI = !1,
    tS = [],
    tT = !1,
    tC = null,
    tN = null,
    tw = null,
    tR = null,
    tP = null,
    tD = !1,
    tL = !1,
    tx = !1,
    tM = null,
    tj = null,
    tk = !1,
    tU = !1;
ei.A.hasPermission(eP.iL.AUDIO, {
    showAuthorizationError: !1
}), ei.A.hasPermission(eP.iL.CAMERA, {
    showAuthorizationError: !1
});
let tG = !1,
    tF = new Set,
    tV = tG,
    tB = new Set,
    tH = {},
    tY = null,
    tW = !0,
    tK = !1,
    tz = !1,
    tq = !1,
    tZ = !1;

function tQ() {
    var e, t;
    return null != (e = null == (t = eC.default.getCurrentUser()) ? void 0 : t.isStaff()) && e ? "always" : eg.y === E.O.CANARY ? "permittedDevicesOnly" : "never"
}
async function tX() {
    if ("u" < typeof window || "u" < typeof navigator || !("mediaCapabilities" in navigator) || null == navigator.mediaCapabilities) return !1;
    try {
        let e = await navigator.mediaCapabilities.decodingInfo({
            type: "file",
            video: {
                contentType: 'video/mp4; codecs="hev1.1.6.L153.B0"',
                width: 1920,
                height: 1080,
                bitrate: 2e6,
                framerate: 30
            }
        });
        return e.supported && e.powerEfficient
    } catch (e) {
        return !1
    }
}

function tJ() {
    return null != tj ? tj : "u" > typeof window ? tj = tX().then(e => (tM = e, e)) : Promise.resolve(!1)
}

function t$() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT,
        t = e5[e];
    return null == t && (t = e3(), e5[e] = t), t
}

function t0() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT,
        i = t$(r),
        a = e6[null != (e = i.activeInputProfile) ? e : eL.my.CUSTOM],
        o = ek({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
    if (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, $.R)({
            location: "getSettings"
        }).enabled), null == o.vadKrispActivationThreshold && !0 === a.automaticGainControl || !0 === i.automaticGainControl) {
        let e = (0, k.F)({
            location: "getSettings"
        });
        null != e.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = e.vadKrispActivationThreshold)
    }
    return eG(ek({}, i, a), {
        modeOptions: o
    })
}

function t1(e) {
    var t, n;
    let r = t0(e.context),
        i = r.mode;
    e.context === ex.x.DEFAULT && ((0, ec.H)({
        location: "setInputMode",
        autoTrackExposure: !1
    }).enableLatching && i === ew.TBI.PUSH_TO_TALK && r.modeOptions.pttLatchingEnabled && (i = ew.TBI.VOICE_ACTIVITY), (0, X.N)(!1, !1, !1)), e.setInputMode(i, {
        vadThreshold: r.modeOptions.threshold,
        vadAutoThreshold: r.modeOptions.autoThreshold,
        vadUseKrisp: r.modeOptions.vadUseKrisp && rp(),
        vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eK,
        vadLeading: r.modeOptions.vadLeading,
        vadTrailing: r.modeOptions.vadTrailing,
        vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
        pttReleaseDelay: Math.round(r.modeOptions.delay)
    })
}

function t2(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.Hz;
    return h().clamp(e, 0, t)
}

function t3(e) {
    let t = t0(e.context),
        n = !e8 || t.mute || t.deaf;
    e.context === ex.x.DEFAULT ? n = n || to || ts || tl || !ei.A.didHavePermission(eP.iL.AUDIO) : e.context === ex.x.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === ex.x.DEFAULT && T.A.updateNativeMute()
}

function t6(e) {
    e !== te && (null != a && e4.setGoLiveSource(null, te), te = e)
}

function t4() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tu,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if ((null == s ? void 0 : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) && (null != s.desktopSource.soundshareId && (0, em.isWindows)() && S.c1(s.desktopSource.soundshareId), e4.setGoLiveSource(null, te)), (null == s ? void 0 : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) && e4.setGoLiveSource(null, te), tu || i) {
        let e = t0().videoDeviceId;
        tu && e === ex.dx && tf === ex.dx && td !== ex.qe ? e = td : tf = e, td = (tu = i) ? nh(ti, e) : ex.qe, e4.setVideoInputDevice(td)
    }
    if (a = o, null != o) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate
        };
        if (null != o.desktopSource) {
            let t = tQ(),
                n = t0().videoHook,
                i = nn(),
                a = i ? nr() ? eR.zl : eR.eg : 0,
                s = (0, em.isWindows)() && (0, ee.b)("updateVideo").enabled;
            e4.setGoLiveSource({
                desktopDescription: {
                    id: o.desktopSource.id,
                    soundshareId: o.desktopSource.soundshareId,
                    useVideoHook: n,
                    useGraphicsCapture: i,
                    useGraphicsCaptureApiLevel: a,
                    useCaptureDeviceForEncode: s,
                    useLoopback: r.getExperimentalSoundshare(),
                    useQuartzCapturer: !0,
                    allowScreenCaptureKit: ni(),
                    videoHookStaleFrameTimeoutMs: eq,
                    graphicsCaptureStaleFrameTimeoutMs: eZ,
                    hdrCaptureMode: t,
                    enableGlobalFramePoolLock: (0, W.H)({
                        location: "updateVideo"
                    }).enabled
                },
                quality: e
            }, te)
        }
        null != o.cameraSource && e4.setGoLiveSource({
            cameraDescription: {
                videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                audioDeviceGuid: o.cameraSource.audioDeviceGuid
            },
            quality: e
        }, te)
    }
}

function t5(e) {
    switch (e) {
        case ex.CO.CPU_OVERUSE:
            return D.B6.NoiseCancellerCpuOveruse;
        case ex.CO.FAILED:
            return D.B6.NoiseCancellerFailed;
        case ex.CO.VAD_CPU_OVERUSE:
            return D.B6.NoiseCancellerVadCpuOveruse;
        default:
            return
    }
}

function t7(e) {
    let t = (0, k.F)({
        location: "getAutomaticGainControlConfig",
        disable: !e
    }).noiseCancellationConfig;
    return ek({
        enabled: e
    }, t)
}

function t8(e, t) {
    e.setAutomaticGainControl(t7(t))
}

function t9(e, t) {
    let n = (0, eo.A)(t, r.getSystemMicrophoneMode(), {
        location: "setNoiseCancellation"
    });
    n !== t && eF.info("Falling back to system noise suppression."), t = n, e.setNoiseCancellation(t);
    let {
        noiseCancellationDuringProcessing: i
    } = (0, k.F)({
        location: "setNoiseCancellation",
        disable: !t
    });
    e.setNoiseCancellationDuringProcessing(i);
    let {
        noiseCancellationAfterProcessing: a,
        vadAfterWebrtc: o
    } = (0, Z.$)({
        location: "setNoiseCancellation"
    });
    e.setNoiseCancellationAfterProcessing(a), e.setVADAfterWebrtc(o)
}

function ne(e) {
    let t = t0(),
        n = t.inputDeviceId;
    if (e.setEchoCancellation(eA.A.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(eA.A.hasNoiseSuppression(n) || t.noiseSuppression), t8(e, eA.A.hasAutomaticGainControl(n) || t.automaticGainControl), t9(e, t.noiseCancellation), e.setVoiceFilterId(tC), (0, em.isWeb)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n)
    }
}

function nt() {
    ta.start(e$, () => {
        eF.error("Device enumeration timed out"), ep.default.track(ew.HAw.DEVICE_ENUMERATION_TIMEOUT, {})
    }), e4.on(b.bg.Connection, e => {
        t1(e), t3(e), ne(e);
        let t = t0();
        e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers), e.setQoS(t.qos);
        let n = (0, q.K)({
            location: "setupMediaEngine"
        }).treatment;
        tk = n === q.c.NoSoftwareDecodeWithFallback, n === q.c.NoSoftwareDecode || n === q.c.NoSoftwareDecodeWithFallback ? (e.setExperimentFlag(ex.fd.H265_HARDWARE_ONLY, !0), (0, em.isWindows)() ? tJ().then(t => {
            e.setExperimentFlag(ex.fd.H265_HARDWARE_DECODE_AVAILABLE, t)
        }) : (0, em.isMac)() && e.setExperimentFlag(ex.fd.H265_HARDWARE_DECODE_AVAILABLE, !0)) : n === q.c.Disabled && (e.setExperimentFlag(ex.fd.H265_HARDWARE_ONLY, !0), e.setExperimentFlag(ex.fd.H265_HARDWARE_DECODE_AVAILABLE, !1)), (0, em.isWindows)() && (0, z.r)({
            location: "setupMediaEngine"
        }).enabled && e.setExperimentFlag(ex.fd.USE_H264_MF_DECODER, !0);
        let i = eS.A.getGuildId(),
            {
                muteBeforeProcessing: o,
                pttBeforeProcessing: s,
                skipEncode: l
            } = (null != i ? H.A : B.A).getCurrentConfig({
                location: "setupMediaEngine",
                guildId: null != i ? i : void 0
            }, {
                autoTrackExposure: !0
            });
        o && e.setExperimentFlag(ex.fd.MUTE_BEFORE_PROCESSING, !0), s && e.setExperimentFlag(ex.fd.PTT_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(ex.fd.SKIP_ENCODE, !0), (0, Q.J)({
            location: "setupMediaEngine"
        }).enabled && e.setExperimentFlag(ex.fd.LOW_LATENCY_RATE_CONTROL, !0);
        let c = !1,
            u = !0;
        if (e.setExperimentFlag(ex.fd.RESET_DECODER_ON_ERRORS, !0), c && e.setExperimentFlag(ex.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0), u && e.setExperimentFlag(ex.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0), e.context === ex.x.STREAM) {
            let t = ng(tr);
            e.setSoundshareDiscardRearChannels(t);
            let {
                simulcastEnabled: n,
                lqStreamBitrate: r
            } = K.A.getConfig();
            e.configureGoLiveSimulcast(n, r)
        }
        if ((0, em.isWindows)() ? e.setExperimentFlag(ex.fd.SIGNAL_AV1, !0) : ((0, em.isMac)() || (0, em.isLinux)()) && e.setExperimentFlag(ex.fd.SIGNAL_AV1_DECODE, !0), (0, em.isWindows)() && e.setExperimentFlag(ex.fd.SIGNAL_AV1_HARDWARE_DECODE, !0), (0, em.isWeb)()) {
            let {
                enabled: t
            } = (0, Y.O)("MediaEngineStore");
            e.setExperimentFlag(ex.fd.BROWSER_HEVC, t)
        }
        if ((0, em.isWindows)() && (null == tY ? void 0 : tY.startsWith("AMD")) && (0, en.F)("MediaEngineStore").enabled && e.setExperimentFlag(ex.fd.WMF_GPU_ENCODE, !0), (0, em.isWindows)() && (null == tY ? void 0 : tY.startsWith("Qualcomm")) && (0, en.F)("MediaEngineStore").enabled && e.setExperimentFlag(ex.fd.WMF_GPU_ENCODE, !0), e4.setHasFullbandPerformance((0, P.A)()), e.setRemoteAudioHistory(1e3), (0, N.A)(r)) {
            let {
                enableViewerClipping: t
            } = et.A.getCurrentConfig({
                location: "f627ab_15"
            }, {
                autoTrackExposure: !1
            });
            e.setViewerSideClip(t), e.setClipsKeyFrameInterval(ex.X1)
        }
        for (let n of (t = t0(e.context), e.setPostponeDecodeLevel(eX), Object.keys(t.localMutes))) n !== eO.default.getId() && e.setLocalMute(n, t.localMutes[n]);
        for (let n of Object.keys(t.localVolumes)) n !== eO.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
        for (let n of Object.keys(t.localPans)) {
            let r = t.localPans[n];
            e.setLocalPan(n, r.left, r.right)
        }
        for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
        e.on(b.yq.Speaking, (t, n, r, i) => {
            A.h.dispatch({
                type: "SPEAKING",
                context: e.context,
                userId: t,
                speakingFlags: n,
                voiceDb: i
            })
        }), e.context === ex.x.DEFAULT && (t_ = !1, th = !1, e.on(b.yq.SpeakingWhileMuted, () => {
            t_ = !0, th = !0, r.emitChange(), tm.stop(), tm.start(eJ, () => {
                th = !1, r.emitChange()
            })
        })), e.on(b.yq.DesktopSourceEnd, (t, n) => {
            A.h.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: {
                    context: e.context
                },
                endReason: t,
                errorCode: n
            })
        }), e.on(b.yq.InteractionRequired, e => {
            A.h.dispatch({
                type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                required: e
            })
        }), e.on(b.yq.VideoHookInitialize, (e, t, n, r, i, o) => {
            (null == a ? void 0 : a.desktopSource) != null && ep.default.track(ew.HAw.VIDEOHOOK_INITIALIZED, ek({
                backend: e,
                format: t,
                framebuffer_format: n,
                sample_count: r,
                success: i,
                reinitialization: o
            }, (0, j.A)(null == a ? void 0 : a.desktopSource)))
        }), e.on(b.yq.NoiseCancellationError, e => {
            eF.warn("noisecancellererror event: ".concat(e)), (0, D.QW)({
                type: D.iy.NOISE_CANCELLER_ERROR,
                underlyingError: t5(e)
            }), tD = !0, ep.default.track(ew.HAw.VOICE_PROCESSING, {
                noise_canceller_error: e
            }), A.h.dispatch({
                type: "AUDIO_SET_NOISE_SUPPRESSION",
                enabled: !0
            }), A.h.dispatch({
                type: "AUDIO_SET_NOISE_CANCELLATION",
                enabled: !1
            }), A.h.dispatch({
                type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
                code: e
            })
        }), e.on(b.yq.VoiceActivityDetectorError, e => {
            eF.warn("voiceactivitydetectorerror event: ".concat(e)), (0, D.QW)({
                type: D.iy.NOISE_CANCELLER_ERROR,
                underlyingError: t5(e)
            }), ep.default.track(ew.HAw.VOICE_PROCESSING, {
                noise_canceller_error: e
            }), A.h.dispatch({
                type: "AUDIO_SET_MODE",
                context: ex.x.DEFAULT,
                mode: ew.TBI.VOICE_ACTIVITY,
                options: eG(ek({}, t0(ex.x.DEFAULT).modeOptions), {
                    vadUseKrisp: !1
                })
            }), A.h.dispatch({
                type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                code: e
            })
        }), e.on(b.yq.SdpError, (e, t, n, r) => {
            ep.default.track(ew.HAw.SDP_ERROR, {
                operation: e,
                error: t,
                type: n,
                sdp: r
            })
        }), e.on(b.yq.VideoState, t => {
            A.h.dispatch({
                type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
                videoState: t,
                context: e.context
            })
        }), e.setBitRate(ev.A.bitrate), e.applyVideoQualityMode(eN.A.mode), e4.supports(ex.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) && e4.setAsyncVideoInputDeviceInit((0, F.v)("setupMediaEngine").enabled)
    }), e4.on(b.bg.DeviceChange, (e, t, n) => {
        ta.stop(), A.h.dispatch({
            type: "MEDIA_ENGINE_DEVICES",
            inputDevices: e,
            outputDevices: t,
            videoDevices: n
        })
    }), e4.on(b.bg.VolumeChange, (e, t) => {
        A.h.dispatch({
            type: "AUDIO_VOLUME_CHANGE",
            inputVolume: e,
            outputVolume: t
        })
    }), e4.on(b.bg.DesktopSourceEnd, (e, t) => {
        A.h.dispatch({
            type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
            settings: null,
            endReason: e,
            errorCode: t
        })
    }), e4.on(b.bg.AudioPermission, e => {
        tU = !0, A.h.dispatch({
            type: "MEDIA_ENGINE_PERMISSION",
            kind: "audio",
            granted: e
        })
    }), e4.on(b.bg.VideoPermission, e => {
        A.h.dispatch({
            type: "MEDIA_ENGINE_PERMISSION",
            kind: "video",
            granted: e
        })
    }), e4.on(b.bg.WatchdogTimeout, async () => {
        let e;
        try {
            await e_.A.submitLiveCrashReport({
                message: {
                    message: "Voice Watchdog Timeout"
                }
            })
        } catch (t) {
            "number" == typeof t.status && (e = t.status)
        }
        eF.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), ep.default.track(ew.HAw.VOICE_WATCHDOG_TIMEOUT, {
            minidump_submission_error: e
        })
    }), e4.on(b.bg.VideoInputInitialized, e => {
        ep.default.track(ew.HAw.VIDEO_INPUT_INITIALIZED, {
            device_name: e.description.name,
            time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * eh.A.Millis.SECOND),
            timed_out: e.initializationTimerExpired,
            activity: e.entropy,
            media_session_id: eS.A.getMediaSessionId(),
            rtc_connection_id: eS.A.getRTCConnectionId()
        })
    }), e4.on(b.bg.AudioInputInitialized, e => {
        ep.default.track(ew.HAw.AUDIO_INPUT_INITIALIZED, {
            device_name: e.description.name,
            time_to_initialized_ms: Math.round(e.timeToInitialized * eh.A.Millis.SECOND),
            rtc_connection_id: eS.A.getRTCConnectionId()
        })
    }), e4.on(b.bg.ClipsRecordingRestartNeeded, () => {
        A.h.dispatch({
            type: "CLIPS_RESTART"
        })
    }), e4.on(b.bg.ClipsInitFailure, (e, t) => {
        A.h.wait(() => {
            A.h.dispatch({
                type: "CLIPS_INIT_FAILURE",
                errMsg: e,
                applicationName: t
            })
        })
    }), e4.on(b.bg.ClipsRecordingEnded, (e, t) => {
        var n, r;
        (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && S.c1(t), o = null)
    }), e4.on(b.bg.NativeScreenSharePickerUpdate, (e, t) => {
        A.h.dispatch({
            type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
            existing: e,
            content: t
        })
    }), e4.on(b.bg.NativeScreenSharePickerCancel, e => {
        A.h.dispatch({
            type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
            existing: e
        })
    }), e4.on(b.bg.NativeScreenSharePickerError, e => {
        A.h.dispatch({
            type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
            error: e
        })
    }), e4.on(b.bg.AudioDeviceModuleError, (e, t, n) => {
        ep.default.track(ew.HAw.AUDIO_DEVICE_MODULE_ERROR, {
            audio_device_module: e,
            code: t,
            device_name: n
        })
    }), e4.on(b.bg.VideoCodecError, e => {
        let t = "encode" === e.mode ? D.iy.VIDEO_ENCODE_ERROR : D.iy.VIDEO_DECODE_ERROR,
            n = {
                videoCodec: e.codecStandard,
                errorMessage: e.message
            };
        (0, D.QW)(t === D.iy.VIDEO_ENCODE_ERROR ? eG(ek({
            type: t
        }, n), {
            videoEncoder: e.implName
        }) : eG(ek({
            type: t
        }, n), {
            videoDecoder: e.implName
        }))
    }), e4.on(b.bg.ConnectionStats, e => {
        A.h.dispatch({
            type: "MEDIA_ENGINE_CONNECTION_STATS",
            connectionStats: e.map(e => {
                let {
                    stats: t,
                    connection: n
                } = e;
                return {
                    stats: t,
                    mediaEngineConnectionId: n.mediaEngineConnectionId,
                    version: e2++,
                    context: n.context
                }
            })
        })
    }), e4.on(b.bg.VoiceQueueMetrics, e => {
        let t = rZ(e);
        null !== t && ep.default.track(ew.HAw.VOICE_QUEUE_METRICS, t)
    }), e4.setOnVideoContainerResized((e, t, n) => {
        A.h.wait(() => A.h.dispatch({
            type: "VIDEO_SIZE_UPDATE",
            streamId: e,
            dimensions: {
                width: t,
                height: n
            }
        }))
    }), n3(), n4(), e4.supports(ex.O5.ASYNC_CLIPS_SOURCE_DEINIT) && e4.setAsyncClipsSourceDeinit((0, V.V)("setupMediaEngine").enabled), ns.reset(), (0, eT.w)().then(e => {
        null != e && (tY = e.gpu_brand)
    }), e4.on(b.bg.SystemMicrophoneModeChange, e => {
        u = e, e4.eachConnection(ne)
    })
}

function nn() {
    return (0, em.isWindows)() && g().satisfies(null === I.A || void 0 === I.A ? void 0 : I.A.os.release, eR.yg)
}

function nr() {
    return (0, em.isWindows)() && g().satisfies(null === I.A || void 0 === I.A ? void 0 : I.A.os.release, eR.fG)
}

function ni() {
    return (0, em.isMac)() && e4.supports(ex.O5.SCREEN_CAPTURE_KIT) && g().satisfies(null === I.A || void 0 === I.A ? void 0 : I.A.os.release, eR.e)
}

function na() {
    return (0, em.isWindows)() && e4.supports(ex.O5.AUTOMATIC_AUDIO_SUBSYSTEM) && e4.supports(ex.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
}

function no() {
    return e4.supports(ex.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING)
}
let ns = new class {
    start() {
        this.started || (this.started = !0, e4.on(b.bg.Silence, this.handleSilence))
    }
    stop() {
        this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), e4.removeListener(b.bg.Silence, this.handleSilence), A.h.dispatch({
            type: "AUDIO_INPUT_DETECTED",
            inputDetected: null
        }))
    }
    update() {
        let e = t0();
        !tb && eS.A.getState() === ew.S7L.RTC_CONNECTED && e.mode === ew.TBI.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
    }
    reset() {
        this.stop(), this.update()
    }
    constructor() {
        ej(this, "stateChangeTimeout", void 0), ej(this, "noVoiceTimeout", 5e3), ej(this, "voiceTimeout", 1500), ej(this, "started", !1), ej(this, "handleSilence", e => {
            let t = !e;
            null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
                this.stateChangeTimeout = null, this.started && (A.h.dispatch({
                    type: "AUDIO_INPUT_DETECTED",
                    inputDetected: t
                }), e && (tO = !0))
            }, t ? this.voiceTimeout : this.noVoiceTimeout)
        })
    }
};

function nl() {
    var e;
    let t = O.w.get("audio");
    null != t && (O.w.set(eV, {
        [ex.x.DEFAULT]: t
    }), O.w.remove("audio")), e5 = null != (e = O.w.get(eV)) ? e : {}, h().each(e5, e => {
        if (h().defaultsDeep(e, e3()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, eb.OH)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eB && (e.vadUseKrispSettingVersion = eB, e.modeOptions.vadUseKrisp = !0), e.qosMigrated || (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
            var t;
            e.vadThrehsoldMigrated = !0, (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eQ)
        }
        e4.supports(ex.O5.SIDECHAIN_COMPRESSION) && e.sidechainCompressionSettingVersion < eW && (e.sidechainCompressionSettingVersion = eW, e.sidechainCompression = !0), (0, em.isWeb)() ? e.ncUseKrispjsSettingVersion !== eY && (e.ncUseKrispjsSettingVersion = eY, e.noiseSuppression = !1, e.noiseCancellation = !0) : e.ncUseKrispSettingVersion !== eH && (e.ncUseKrispSettingVersion = eH, e.noiseSuppression = !1, e.noiseCancellation = !0)
    }), nd()
}

function nc(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = t$(t);
    return Object.assign(r, e), !__OVERLAY__ && n && O.w.set(eV, e5), r
}

function nu() {
    O.w.remove(eV), location.reload()
}

function nd() {
    let e = t0();
    e4.setAudioInputDevice(e.inputDeviceId), e4.setAudioOutputDevice(e.outputDeviceId), t4(), e4.setInputVolume(e.inputVolume), e4.setOutputVolume(e.outputVolume), e4.setAecDump(e.aecDumpEnabled), e4.setSidechainCompression(e.sidechainCompression), e4.setSidechainCompressionStrength(e.sidechainCompressionStrength), e4.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing)
}

function nf() {
    e8 || e4.enable().then(() => A.h.dispatch({
        type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
        enabled: !0,
        unmute: !1
    }))
}

function np(e) {
    return {
        id: ex.dx,
        index: 0,
        name: e,
        disabled: !0,
        guid: void 0,
        hardwareId: void 0,
        containerId: void 0
    }
}

function n_(e, t) {
    if (0 === e.length) {
        let e = np(t);
        return {
            [e.id]: e
        }
    }
    return h()(e).map(e => ({
        id: e.id,
        index: e.index,
        name: e.name,
        disabled: !1,
        facing: e.facing,
        guid: e.originalId,
        hardwareId: e.hardwareId,
        containerId: e.containerId,
        effects: e.effects
    })).keyBy("id").value()
}

function nh(e, t) {
    var n, r;
    let i = null != (n = null != (r = e[t]) ? r : e[ex.dx]) ? n : h()(e).values().first();
    return null != i ? i.id : t
}

function nm(e) {
    let t = tn;
    if (tn = n_(e, eM.intl.string(eM.t["/QIjDA"])), !h().isEqual(tn, t)) {
        let e = t0(),
            t = nh(tn, e.inputDeviceId);
        e4.setAudioInputDevice(t), e4.eachConnection(ne)
    }
}

function ng(e) {
    return Object.values(e).some(e => e.name.toLowerCase().includes("dualsense"))
}

function nE(e) {
    e4.eachConnection(t => {
        t.context === ex.x.STREAM && t.setSoundshareDiscardRearChannels(e)
    })
}

function ny(e) {
    let t = tr;
    if (tr = n_(e, eM.intl.string(eM.t.xlUg0v)), !h().isEqual(tr, t)) {
        let e = t0(),
            n = nh(tr, e.outputDeviceId);
        e4.setAudioOutputDevice(n);
        let r = ng(t),
            i = ng(tr);
        r !== i && nE(i)
    }
}

function nb(e) {
    tE = e.length > 0;
    let t = ti;
    if (ti = n_(e, eM.intl.string(eM.t.WKWARY)), tu && !h().isEqual(ti, t)) {
        var n;
        let e = void 0 !== ti[td],
            r = td === ex.dx && (null == (n = t[ex.dx]) ? void 0 : n.disabled);
        t4(e || r)
    }
}

function nO() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r = null != (e = eu.A.settings.audioContextSettings) ? e : {
            user: {},
            stream: {}
        };
    for (let e of Object.keys(r)) {
        let i = e === eD.W.USER ? ex.x.DEFAULT : ex.x.STREAM,
            a = i === ex.x.STREAM ? ex.Cn : ex.Hz,
            o = null != (t = r[e]) ? t : {},
            {
                localMutes: s,
                localVolumes: l
            } = t0(i);
        for (let [e, t] of Object.entries(o)) null == (0, el.tM)(i, e) && (t.muted ? s[e] = !0 : delete s[e], t.volume !== a ? l[e] = t.volume : delete l[e], e4.eachConnection(n => {
            n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
        }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)])) null == o[e] && (delete s[e], delete l[e], e4.eachConnection(t => {
                t.setLocalVolume(e, a), t.setLocalMute(e, !1)
            }, i));
        nc({
            localMutes: s,
            localVolumes: l
        }, i)
    }
}

function nv(e) {
    if (null == r) return eF.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
        soundshareId: null,
        soundshareSession: ""
    };
    {
        let t = r.getExperimentalSoundshare() ? e : e_.A.getAudioPid(e),
            n = "";
        return null != t && (n = e_.A.generateSessionFromPid(t)), {
            soundshareId: t,
            soundshareSession: n
        }
    }
}

function nA(e, t) {
    (0, em.isWindows)() && e > 1 && S.GH(e, {
        soundshare_session: t
    }).then(t => {
        null == t || M.Ay.shouldContinueWithoutElevatedProcessForPID(e) || A.h.wait(() => {
            A.h.dispatch({
                type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                errorMessage: t
            })
        })
    })
}

function nI(e) {
    i = e.sessionId, to = !1, tc = !1;
    let t = t0();
    if (na() && (no() ? rA(ex.rB.AUTOMATIC) : t.automaticAudioSubsystem && rI()), e4.supports(ex.O5.OFFLOAD_ADM_CONTROLS)) {
        let e = !1;
        (0, em.isDesktop)() ? e = (0, U.i)({
            location: "handleConnectionOpen"
        }).enabled: ((0, em.isIOS)() || (0, em.isAndroid)()) && (e = (0, G.Y)({
            location: "handleConnectionOpen"
        }).enabled), e4.setOffloadAdmControls(e)
    }(0, ed.Lb)({
        location: "MediaEngineStore",
        autoTrackExposure: !1
    }) && null !== t.mostRecentlyRequestedVoiceFilter && (0, em.isDesktop)() && (ef.A.getLastInitAttemptMayHaveCrashed() ? (A.h.dispatch({
        type: "AUDIO_SET_SELF_MUTE",
        mute: !0,
        context: ex.x.DEFAULT,
        playSoundEffect: !0
    }), nc({
        mostRecentlyRequestedVoiceFilter: null
    })) : n(342887).md()), nO()
}

function nS(e) {
    let {
        mediaEngineState: t
    } = e;
    e5 = t.settingsByContext, tn = t.inputDevices, tr = t.outputDevices, tH = t.appSupported, tI = t.krispModuleLoaded, s = t.krispVersion, te = t.goLiveContext
}

function nT() {
    i = null
}

function nC() {
    if ((0, em.isWeb)()) {
        let e = J.f1.getCurrentConfig({
            location: "MediaEngineStore handlePostConnectionOpen"
        });
        e.loadWasmModule && e.preload && r.startDavePreload()
    }
    return !1
}

function nN(e) {
    switch (e.state) {
        case ew.S7L.CONNECTING:
            nf();
            break;
        case ew.S7L.RTC_CONNECTING:
            tb = !1, tO = !1;
            break;
        case ew.S7L.RTC_CONNECTED:
            t4();
            break;
        case ew.S7L.DISCONNECTED:
            nk(), nU()
    }
    ns.update()
}

function nw(e) {
    let {
        voiceStates: t
    } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            to = t.mute || t.suppress, tc = t.deaf, e4.eachConnection(t3);
            let e = null != t.guildId && null != t.channelId && null != tP && tP !== t.channelId,
                n = !tv && null == t.channelId;
            return t4(!e && !n && tu), tP = t.channelId, !0
        }
        return __OVERLAY__ || t.userId !== eO.default.getId() || null != eS.A.getChannelId() || t4(!1, null), e
    }, !1)
}

function nR(e) {
    let {
        mute: t
    } = e;
    ts = t, e4.eachConnection(t3)
}

function nP(e) {
    let {
        context: t,
        playSoundEffect: n
    } = e, {
        mute: r,
        deaf: i
    } = t0(t);
    if (t === ex.x.DEFAULT && (ei.A.requestPermission(eP.iL.AUDIO), tl)) return !1;
    (r = !i && !r) || (i = !1), n || (tp = !0), nc({
        mute: r,
        deaf: i
    }, t), e4.eachConnection(t3)
}

function nD(e) {
    let {
        context: t,
        mute: n,
        playSoundEffect: r
    } = e;
    nc({
        mute: n
    }, t), r || (tp = !0), e4.eachConnection(t3)
}

function nL(e) {
    let {
        settings: {
            type: t
        },
        local: n,
        wasSaved: r
    } = e;
    if (t !== eD.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nO(!0)
}

function nx(e) {
    let {
        context: t
    } = e;
    nc({
        deaf: !t0(t).deaf
    }, t), e4.eachConnection(t3)
}

function nM(e) {
    let {
        context: t,
        userId: n
    } = e;
    if (n === eO.default.getId()) return;
    let {
        localMutes: r
    } = t0(t);
    r[n] ? delete r[n] : r[n] = !0, nc({
        localMutes: r
    }, t), e4.eachConnection(e => e.setLocalMute(n, r[n] || !1), t)
}

function nj(e) {
    var t, n, r, i, a, o, s;
    let {
        context: l,
        userId: c,
        videoToggleState: u,
        persist: d,
        isAutomatic: f
    } = e;
    p()(!(d && f), "These are not allowed to both be true.");
    let _ = u === ew.bb8.DISABLED,
        {
            disabledLocalVideos: h
        } = t0(l),
        m = null != (t = h[c]) && t,
        g = tF.has(c),
        E = u === ew.bb8.AUTO_ENABLED || u === ew.bb8.MANUAL_ENABLED;
    eF.info("disableVideo=".concat(_, " currentlyDisabled=").concat(m, " currentlyAutoDisabled=").concat(g, ", isVideoShown=").concat(E)), p()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
    let y = _ !== m,
        b = l === ex.x.DEFAULT,
        O = f && y && b,
        v = d && y && b;
    eF.info("changed=".concat(y, " isDefaultContext=").concat(b, " isUpdateCausedByVideoHealthManager=").concat(O, " isManualToggleByUser=").concat(v));
    let {
        videoToggleStateMap: A
    } = t0(l);
    if (A[c] === ew.bb8.AUTO_PROBING && u === ew.bb8.AUTO_ENABLED && (0, er.A)(c, _ ? ex.Al.AUTO_DISABLE : ex.Al.AUTO_ENABLE, E), A[c] = u, nc({
            videoToggleStateMap: A
        }, l, d), u === ew.bb8.AUTO_PROBING ? null == (n = eS.A.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0) : null == (r = eS.A.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1), tV || (eF.info("isAutoDisableAllowed=".concat(tV, " - disabling VideoHealthManager")), null == (a = eS.A.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O) {
        if (!_ && !g || _ && !tV) return;
        (0, er.A)(c, _ ? ex.Al.AUTO_DISABLE : ex.Al.AUTO_ENABLE, E), _ ? tF.add(c) : tF.delete(c)
    } else v && (g && !_ ? (eF.info("disallowing auto-disable for this session because of manual override by user"), tV = !1, null == (s = eS.A.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, er.A)(c, ex.Al.MANUAL_REENABLE, E)) : (0, er.A)(c, _ ? ex.Al.MANUAL_DISABLE : ex.Al.MANUAL_ENABLE, E));
    b && !_ && tF.delete(c), _ ? h[c] = !0 : delete h[c], nc({
        disabledLocalVideos: h
    }, l, d), e4.eachConnection(e => {
        var t;
        return e.setLocalVideoDisabled(c, null != (t = h[c]) && t)
    }, l)
}

function nk() {
    if (0 === tF.size) return;
    let e = ex.x.DEFAULT,
        {
            disabledLocalVideos: t
        } = t0(e);
    tF.forEach(n => {
        p()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], e4.eachConnection(e => e.setLocalVideoDisabled(n, !1), e)
    }), tF.clear(), nc({
        disabledLocalVideos: t
    }, e, !1)
}

function nU() {
    let e = ex.x.DEFAULT,
        {
            videoToggleStateMap: t
        } = t0(e);
    for (let [e, n] of Object.entries(t)) n === ew.bb8.AUTO_PROBING && delete t[e];
    nc({
        videoToggleStateMap: t
    }, e, !1)
}

function nG(e) {
    let {
        context: t,
        userId: n,
        volume: r
    } = e;
    if (n === eO.default.getId()) return;
    let i = t === ex.x.STREAM ? ex.Cn : ex.Hz,
        {
            localVolumes: a
        } = t0(t);
    r === i ? delete a[n] : a[n] = r, nc({
        localVolumes: a
    }, t), e4.eachConnection(e => e.setLocalVolume(n, r), t)
}

function nF(e) {
    let {
        context: t,
        userId: n,
        left: r,
        right: i
    } = e, {
        localPans: a
    } = t0(t);
    a[n] = {
        left: r,
        right: i
    }, nc({
        localPans: a
    }, t), e4.eachConnection(e => e.setLocalPan(n, r, i), t)
}

function nV(e) {
    let {
        context: t,
        mode: n,
        options: r
    } = e;
    nc({
        mode: n,
        modeOptions: r
    }, t), e4.eachConnection(t1), ns.update()
}

function nB(e) {
    let {
        volume: t
    } = e;
    nc({
        inputVolume: t2(t)
    }), e4.setInputVolume(t)
}

function nH(e) {
    let {
        volume: t
    } = e;
    nc({
        outputVolume: t
    }), e4.setOutputVolume(t)
}

function nY(e) {
    let {
        id: t
    } = e;
    t = nh(tn, t), tt = performance.now(), nc({
        inputDeviceId: t
    }), e4.setAudioInputDevice(t), e4.eachConnection(ne)
}

function nW(e) {
    let {
        id: t
    } = e;
    nc({
        outputDeviceId: t = nh(tr, t)
    }), e4.setAudioOutputDevice(t)
}

function nK(e) {
    let {
        id: t
    } = e;
    nc({
        videoDeviceId: t = nh(ti, t)
    }), t4()
}

function nz(e) {
    let {
        inputProfile: t
    } = e;
    nc({
        activeInputProfile: t
    });
    let n = t0();
    e4.eachConnection(e => {
        t1(e), ne(e)
    }), e4.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing), ns.update(), n6()
}

function nq(e) {
    return e9 !== e.required && (e9 = e.required, e.required || e4.interact(), !0)
}

function nZ(e) {
    let {
        inputDevices: t,
        outputDevices: n,
        videoDevices: r
    } = e;
    nm(t), ny(n), nb(r)
}

function nQ(e) {
    let {
        inputVolume: t,
        outputVolume: n
    } = e;
    nc({
        inputVolume: t2(t),
        outputVolume: n
    })
}

function nX(e) {
    var t;
    let n = t0(),
        i = e4.getAudioSubsystem(),
        a = e4.getAudioLayer(),
        o = nh(tn, n.inputDeviceId),
        s = null == (t = tn[o]) ? void 0 : t.name,
        l = (0, eo.A)(n.noiseCancellation, r.getSystemMicrophoneMode(), {
            location: "trackVoiceProcessing"
        });
    ep.default.track(ew.HAw.VOICE_PROCESSING, {
        echo_cancellation: n.echoCancellation,
        noise_cancellation: n.noiseCancellation,
        noise_suppression: n.noiseSuppression,
        automatic_gain_control: n.automaticGainControl,
        location: e,
        bypass_system_input_processing: n.bypassSystemInputProcessing,
        audio_subsystem: i,
        audio_layer: a,
        input_device: s,
        effective_noise_cancellation: l
    })
}

function nJ(e) {
    let t = nc({
        echoCancellation: e.enabled
    });
    e4.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), n6(), nX(e.location)
}

function n$(e) {
    n1(e.enabled)
}

function n0(e) {
    let t = nc({
        sidechainCompressionStrength: e.strength
    });
    e4.setSidechainCompressionStrength(t.sidechainCompressionStrength)
}

function n1(e) {
    let t = nc({
        sidechainCompression: e
    });
    e4.setSidechainCompression(t.sidechainCompression)
}

function n2(e) {
    let {
        enabled: t,
        loopbackReason: n
    } = e;
    return t ? tB.add(n) : tB.delete(n), n3(), n6()
}

function n3() {
    let e = !tB.has("voice_filter_preview") && !tB.has("mic_test");
    e4.setMaybePreprocessMute(e)
}

function n6() {
    let e = t0(),
        t = tB.size > 0,
        n = e.inputDeviceId,
        r = eA.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = eA.A.hasNoiseSuppression(n) || e.noiseSuppression,
        o = t7(eA.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== tC,
        c = tB.has("voice_filter") && 1 === tB.size;
    e4.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c
    })
}
async function n4() {
    var e, t, n, r;
    if (!e4.supports(ex.O5.VAAPI)) return;
    let i = 4098;
    (null == (n = window.DiscordNative) || null == (t = n.processUtils) ? void 0 : t.getSystemInfo) == null || (null != (e = null == (r = (await window.DiscordNative.processUtils.getSystemInfo()).electronGPUInfo) ? void 0 : r.gpuDevice) ? e : []).some(e => e.vendorId === i) && (tq = !0, tz = e4.supports(ex.O5.GAMESCOPE_CAPTURE))
}

function n5(e) {
    let t = nc({
        noiseSuppression: e.enabled
    });
    e4.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), n6(), nX(e.location)
}

function n7(e) {
    let t = nc({
        automaticGainControl: e.enabled
    });
    e4.eachConnection(e => t8(e, t.automaticGainControl)), n6(), nX(e.location)
}

function n8(e) {
    let t = nc({
        noiseCancellation: e.enabled
    });
    e4.eachConnection(e => t9(e, t.noiseCancellation)), n6(), nX(e.location)
}

function n9(e) {
    ea.A.setKrispModelOverride(e.model), c = e.model, n6()
}

function re(e) {
    var t;
    (0, em.isWeb)() || (tT = e.enabled, null == (t = e4.setNoiseCancellationEnableStats) || t.call(e4, e.enabled))
}

function rt(e) {
    nc({
        silenceWarning: e.enabled
    }), ns.update()
}

function rn(e) {
    e4.setDebugLogging(e.enabled)
}

function rr(e) {
    let {
        level: t
    } = e;
    l = t, ea.A.setKrispSuppressionLevel(t)
}

function ri(e) {
    nc({
        videoHook: e.enabled
    })
}

function ra(e) {
    nc({
        experimentalSoundshare2: e.enabled
    })
}

function ro(e) {
    let {
        enabled: t
    } = e;
    nc({
        useSystemScreensharePicker: t
    })
}

function rs(e) {
    let {
        attenuation: t,
        attenuateWhileSpeakingSelf: n,
        attenuateWhileSpeakingOthers: r
    } = e, i = nc({
        attenuation: t,
        attenuateWhileSpeakingSelf: n,
        attenuateWhileSpeakingOthers: r
    });
    e4.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers))
}

function rl(e) {
    let {
        enabled: t
    } = e;
    nc({
        qos: t
    }), e4.eachConnection(e => e.setQoS(t))
}

function rc() {
    nu()
}

function ru(e) {
    let {
        inputDetected: t
    } = e;
    ty = t, !tb && ty && (tb = !0, ns.update())
}

function rd(e) {
    let {
        hasPermission: t
    } = e, n = !t;
    if (n === tl) return !1;
    tl = n, e4.eachConnection(t3)
}

function rf(e) {
    let {
        state: t,
        permissionType: n
    } = e, r = t === eP.hL.ACCEPTED;
    switch (n) {
        case eP.iL.AUDIO:
            tU = !0, e4.eachConnection(t3);
            break;
        case eP.iL.CAMERA:
            !r && tu && t4(!1);
            break;
        default:
            return !1
    }
}

function rp() {
    return tI || !1
}
async function r_() {
    try {
        var e, t, n, i;
        await ey.Ay.ensureModule("discord_krisp");
        let a = ey.Ay.requireModule("discord_krisp");
        tI = !0, s = null == (t = a.getSdkVersion) ? void 0 : t.call(a), l = null != (e = null == (n = a.getSuppressionLevel) ? void 0 : n.call(a)) ? e : 100, null == (i = a.getNcModels) || i.call(a).then(e => {
            tS = e, r.emitChange()
        }), r.emitChange()
    } catch (t) {
        eF.warn("Failed to load Krisp module: ".concat(t.message)), eE.A.captureException(t);
        let e = ex.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? ex.CO.INITIALIZED : n
        }
        ep.default.track(ew.HAw.VOICE_PROCESSING, {
            noise_canceller_error: e
        }), nc({
            noiseCancellation: !1
        })
    } finally {
        tA = !1
    }
}

function rh() {
    return (0, em.isWindows)() || (0, em.isLinux)() || (0, em.isMac)()
}

function rm() {
    !rh() || __OVERLAY__ || tA || tI ? (0, em.isWeb)() && e4.supports(ex.O5.NOISE_CANCELLATION) ? (tI = !0, r.emitChange()) : (0, em.isWeb)() && nc({
        noiseCancellation: !1
    }) : (tA = !0, r_())
}

function rg(e) {
    let {
        enabled: t
    } = e;
    ep.default.track(ew.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tC ? tC : null,
        enabled: t
    }), nc({
        voiceFilterPlaybackEnabled: t
    })
}

function rE(e) {
    let {
        newVoiceFilterId: t
    } = e;
    nc({
        mostRecentlyRequestedVoiceFilter: t
    }), e4.eachConnection(e => e.setVoiceFilterId(t))
}

function ry() {
    nc({
        mostRecentlyRequestedVoiceFilter: null
    })
}

function rb(e) {
    let {
        voiceFilterId: t
    } = e;
    tw = tC, tR = tN, tC = t, tN = null === t ? null : Date.now()
}

function rO(e) {
    let t = e.bypassEnabled;
    nc({
        bypassSystemInputProcessing: t
    }), e4.setAudioInputBypassSystemProcessing(t), nX(e.location)
}

function rv(e) {
    rA(e.subsystem)
}

function rA(e) {
    e === ex.rB.AUTOMATIC ? (nc({
        automaticAudioSubsystem: !0
    }), rI()) : (nc({
        automaticAudioSubsystem: !1
    }), e4.setAudioSubsystem(e))
}

function rI() {
    e4.queueAudioSubsystem(ex.rB.EXPERIMENTAL)
}

function rS(e) {
    let {
        guildId: t,
        channelId: n,
        currentVoiceChannelId: r,
        video: i
    } = e;
    if (r !== n && t4(i, null), null != t || null == n) {
        tv = !1;
        return
    }
    if (tv) return;
    tv = !0;
    let a = t0();
    (a.mute || a.deaf) && (nc({
        deaf: !1,
        mute: !1
    }), e4.eachConnection(t3))
}

function rT(e) {
    let {
        application: t
    } = e;
    e7.add(t.id)
}

function rC(e) {
    let {
        application: t
    } = e;
    e7.delete(t.id)
}

function rN(e) {
    let {
        kind: t,
        granted: n
    } = e;
    if (!n) switch (t) {
        case "audio":
            e8 = !1, e4.eachConnection(t3);
            break;
        case "video":
            t4(!1)
    }
}

function rw(e) {
    e8 = e.enabled, e.unmute && nc({
        mute: !1,
        deaf: !1
    }), e4.eachConnection(t3)
}

function rR(e) {
    let {
        enabled: t
    } = e;
    ei.A.requestPermission(eP.iL.CAMERA), t4(t)
}

function rP(e) {
    let {
        sourceId: t,
        applicationName: n,
        quality: i
    } = e;
    if (!(0, w.Ao)() || null == I.A) return !1;
    let a = null,
        s = null,
        l = e_.A.getPidFromDesktopSource(t);
    ({
        soundshareId: a,
        soundshareSession: s
    } = nv(l));
    let c = {
        desktopSource: {
            id: t,
            sourcePid: l,
            soundshareId: a,
            soundshareSession: s
        },
        quality: i
    };
    null != o && (e4.setClipsSource(null), (0, em.isWindows)() && null != o.desktopSource.soundshareId && S.c1(o.desktopSource.soundshareId)), null != a && nA(a, s), o = c;
    let u = tQ(),
        d = t0().videoHook;
    e4.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: nn(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: ni(),
            videoHookStaleFrameTimeoutMs: eq,
            graphicsCaptureStaleFrameTimeoutMs: eZ,
            hdrCaptureMode: u
        },
        quality: i,
        applicationName: n
    })
}

function rD(e) {
    let {
        settings: t
    } = e;
    !1 === t.decoupledClipsEnabled && (o = null, e4.setClipsSource(null))
}

function rL(e) {
    var t, n, r, i;
    let {
        settings: a
    } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            {
                sourceId: i,
                sound: o
            } = a.desktopSettings,
            s = null != (t = a.context) ? t : ex.x.DEFAULT,
            l = null != (n = a.qualityOptions) ? n : {
                resolution: 720,
                frameRate: 30
            },
            c = !1 === o ? null : e_.A.getPidFromDesktopSource(i);
        em.isPlatformEmbedded && !0 === o && ({
            soundshareId: e,
            soundshareSession: r
        } = nv(c), null != e && nA(e, r)), t6(s), t4(s === ex.x.STREAM && tu, {
            desktopSource: {
                id: i,
                sourcePid: c,
                soundshareId: e,
                soundshareSession: r
            },
            quality: {
                resolution: l.resolution,
                frameRate: l.frameRate
            }
        })
    } else if ((null == a ? void 0 : a.cameraSettings) != null) {
        let e = null != (r = a.context) ? r : ex.x.DEFAULT,
            {
                videoDeviceGuid: t,
                audioDeviceGuid: n
            } = a.cameraSettings,
            o = e === ex.x.STREAM && tu,
            s = null != (i = a.qualityOptions) ? i : {
                resolution: 720,
                frameRate: 30
            };
        t4(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate
            }
        })
    } else t4(tu, null)
}

function rx(e) {
    let {
        section: t
    } = e;
    return t === ew.nc_.VOICE && nf(), !1
}

function rM() {
    return e4.eachConnection(ne), !1
}

function rj(e) {
    let {
        enabled: t
    } = e, n = nc({
        aecDumpEnabled: t
    });
    e4.setAecDump(n.aecDumpEnabled)
}

function rk(e) {
    let {
        overrides: t
    } = e;
    if (__OVERLAY__) return !1;
    e5 = Object.values(ex.x).reduce((e, n) => {
        let r = n,
            i = e3();
        return e[r] = h().merge(i, t[r]), e
    }, {}), O.w.set(eV, e5), nd()
}

function rU(e) {
    let {
        state: t
    } = e, n = x.A.isEnabled();
    if (t === ew.g6G.BACKGROUND && tu && !n) tg = !0, t4(!1);
    else {
        if (t !== ew.g6G.ACTIVE || !tg) return !1;
        tg = !1, t4(!0)
    }
    return !0
}

function rG(e) {
    e4.eachConnection(t => t.setBitRate(e.bitrate))
}

function rF() {
    if (!tu && null == a || null != eS.A.getRTCConnectionId()) return !1;
    t4(!1, null)
}

function rV() {
    return !!tD && (tD = !1, !0)
}

function rB(e) {
    e4.eachConnection(t => t.applyVideoQualityMode(e.mode))
}

function rH(e) {
    let {
        settings: t
    } = e;
    e4.applyMediaFilterSettings(t).finally(() => {
        tL = !1, r.emitChange()
    })
}

function rY() {
    tL = !0
}

function rW() {
    tL = !1
}

function rK(e) {
    tW = e.enabled
}

function rz() {
    if ((0, em.isDesktop)() && em.isPlatformEmbedded && !tZ) {
        tZ = !0;
        let e = async () => {
            let t = await new Promise(e => {
                ey.Ay.pollQueueMetrics(t => {
                    e(t)
                })
            });
            t.periodMs = ex.tl;
            let n = rZ(t);
            null !== n && ep.default.track(ew.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, ex.tl)
        };
        setTimeout(e, ex.tl)
    }
}
class rq extends(d = y.Ay.Store) {
    initialize() {
        nt(), nl(), rm(), nU(), rz(), tH = {
            [ex.O5.VIDEO]: e4.supports(ex.O5.VIDEO),
            [ex.O5.DESKTOP_CAPTURE]: e4.supports(ex.O5.DESKTOP_CAPTURE),
            [ex.O5.HYBRID_VIDEO]: e4.supports(ex.O5.HYBRID_VIDEO)
        }, this.waitFor(eO.default, ev.A, eA.A, eI.A, C.A, L.A, eS.A, M.Ay, es.A, eu.A, eC.default, eN.A, ef.A)
    }
    supports(e) {
        return e4.supports(e)
    }
    supportsInApp(e) {
        return tH[e] || e4.supports(e)
    }
    isSupported() {
        return e4.supported()
    }
    isNoiseSuppressionSupported() {
        return e4.supports(ex.O5.NOISE_SUPPRESSION)
    }
    isNoiseCancellationSupported() {
        return rp()
    }
    isNoiseCancellationError() {
        return tD
    }
    isAutomaticGainControlSupported() {
        return e4.supports(ex.O5.AUTOMATIC_GAIN_CONTROL)
    }
    shouldOfferManualSubsystemSelection() {
        return !no() && (e4.supports(ex.O5.LEGACY_AUDIO_SUBSYSTEM) || e4.supports(ex.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM))
    }
    showBypassSystemInputProcessing() {
        return e4.supports(ex.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e4.getAudioSubsystem()
    }
    isAdvancedVoiceActivitySupported() {
        return rp()
    }
    isAecDumpSupported() {
        return e4.supports(ex.O5.AEC_DUMP)
    }
    isSimulcastSupported() {
        return e4.supports(ex.O5.VIDEO) && e4.supports(ex.O5.SIMULCAST)
    }
    goLiveSimulcastEnabled() {
        var e;
        return (null == (e = eI.A.getChannel(tP)) ? void 0 : e.type) !== ew.rbe.GUILD_STAGE_VOICE && e0 && K.A.simulcastEnabled()
    }
    isVideoDecoderFallbackEnabled() {
        return tk
    }
    getAecDump() {
        return t0().aecDumpEnabled
    }
    getMediaEngine() {
        return e4
    }
    getVideoComponent() {
        return e4.Video
    }
    getCameraComponent() {
        return e4.Camera
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100
    }
    getKrispEnableStats() {
        return tT
    }
    isEnabled() {
        return e8
    }
    isMute() {
        return this.isSelfMute() || to
    }
    isDeaf() {
        return this.isSelfDeaf() || tc
    }
    hasContext(e) {
        return null != e5[e]
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT;
        return e === ex.x.DEFAULT && ts
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT;
        return !this.isEnabled() || t0(e).mute || !ei.A.didHavePermission(eP.iL.AUDIO) || this.isSelfDeaf(e) || e === ex.x.DEFAULT && tl
    }
    shouldSkipMuteUnmuteSound() {
        return tp
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tp = !1
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eA.A.isHardwareMute(this.getInputDeviceId())
    }
    isEnableHardwareMuteNotice() {
        return tW
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT;
        return !this.isSupported() || t0(e).deaf
    }
    isVideoEnabled() {
        return tu && tE
    }
    isVideoAvailable() {
        return Object.values(ti).some(e => {
            let {
                disabled: t
            } = e;
            return !t
        })
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.STREAM;
        return te === e && null != a
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.STREAM;
        return te === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.x.DEFAULT;
        return e !== eO.default.getId() && (t0(t).localMutes[e] || !1)
    }
    supportsDisableLocalVideo() {
        return e4.supports(ex.O5.DISABLE_VIDEO)
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.x.DEFAULT;
        return null != (t = t0(n).disabledLocalVideos[e]) && t
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.x.DEFAULT;
        return null != (t = t0(n).videoToggleStateMap[e]) ? t : ew.bb8.NONE
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.x.DEFAULT;
        return t === ex.x.DEFAULT && tF.has(e)
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT;
        return e === ex.x.DEFAULT && tF.size > 0
    }
    isMediaFilterSettingLoading() {
        return tL
    }
    isNativeAudioPermissionReady() {
        return tU
    }
    getGoLiveSource() {
        return a
    }
    getGoLiveContext() {
        return te
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tt
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.x.DEFAULT,
            n = t0(t).localPans[e];
        return null != n ? n : ez
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.x.DEFAULT,
            n = t === ex.x.STREAM ? ex.Cn : ex.Hz,
            r = t0(t).localVolumes[e];
        return null != r ? r : n
    }
    getInputVolume() {
        return t0().inputVolume
    }
    getOutputVolume() {
        return t0().outputVolume
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT;
        return t0(e).mode
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT;
        return t0(e).modeOptions
    }
    getActiveVoiceFilter() {
        return tC
    }
    getActiveVoiceFilterAppliedAt() {
        return tN
    }
    getPreviousVoiceFilter() {
        return tw
    }
    getPreviousVoiceFilterAppliedAt() {
        return tR
    }
    getMostRecentlyRequestedVoiceFilter() {
        return t0().mostRecentlyRequestedVoiceFilter
    }
    getVoiceFilterPlaybackEnabled() {
        return t0().voiceFilterPlaybackEnabled
    }
    getShortcuts() {
        let e = {};
        return h().each(e5, (t, n) => {
            let {
                mode: r,
                modeOptions: {
                    shortcut: i
                }
            } = t;
            r === ew.TBI.PUSH_TO_TALK && e7.has(n) && (e[n] = i)
        }), e
    }
    getInputDeviceId() {
        return nh(tn, t0().inputDeviceId)
    }
    getOutputDeviceId() {
        return nh(tr, t0().outputDeviceId)
    }
    getVideoDeviceId() {
        return nh(ti, t0().videoDeviceId)
    }
    getInputDevices() {
        return tn
    }
    getOutputDevices() {
        return tr
    }
    getVideoDevices() {
        return ti
    }
    getEchoCancellation() {
        let e = t0();
        return eA.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
    }
    getSidechainCompression() {
        return e4.supports(ex.O5.SIDECHAIN_COMPRESSION) && t0().sidechainCompression
    }
    getSidechainCompressionStrength() {
        return t0().sidechainCompressionStrength
    }
    getH265Enabled() {
        return t0().h265Enabled
    }
    hasH265HardwareDecode() {
        return null !== tM && tM
    }
    getLoopback() {
        return tB.size > 0
    }
    getLoopbackReasons() {
        return tB
    }
    getNoiseSuppression() {
        let e = t0();
        return eA.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
    }
    getAutomaticGainControl() {
        let e = t0();
        return eA.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
    }
    getBypassSystemInputProcessing() {
        return t0().bypassSystemInputProcessing
    }
    getNoiseCancellation() {
        return t0().noiseCancellation
    }
    getHardwareEncoding() {
        return e0
    }
    getEnableSilenceWarning() {
        return t0().silenceWarning
    }
    getDebugLogging() {
        return e4.getDebugLogging()
    }
    getQoS() {
        return t0().qos
    }
    getAttenuation() {
        return t0().attenuation
    }
    getAttenuateWhileSpeakingSelf() {
        return t0().attenuateWhileSpeakingSelf
    }
    getAttenuateWhileSpeakingOthers() {
        return t0().attenuateWhileSpeakingOthers
    }
    getAudioSubsystem() {
        return na() && t0().automaticAudioSubsystem ? ex.rB.AUTOMATIC : e4.getAudioSubsystem()
    }
    getMLSSigningKey(e, t) {
        return e4.getMLSSigningKey(e, t)
    }
    getActiveInputProfile() {
        return t0().activeInputProfile
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eL.my.CUSTOM
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT;
        return t0(e)
    }
    getState() {
        return {
            settingsByContext: e5,
            inputDevices: tn,
            outputDevices: tr,
            appSupported: tH,
            krispModuleLoaded: tI,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: te
        }
    }
    getInputDetected() {
        return ty
    }
    getNoInputDetectedNotice() {
        return tO
    }
    getPacketDelay() {
        return em.isPlatformEmbedded || this.getMode() !== ew.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
    }
    setCanHavePriority(e, t) {
        e4.eachConnection(n => n.setCanHavePriority(e, t))
    }
    isInteractionRequired() {
        return e9
    }
    getVideoHook() {
        return t0().videoHook
    }
    supportsVideoHook() {
        return e4.supports(ex.O5.VIDEO_HOOK)
    }
    getExperimentalSoundshare() {
        let e = t0().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare())
    }
    supportsExperimentalSoundshare() {
        return e4.supports(ex.O5.EXPERIMENTAL_SOUNDSHARE) && g().satisfies(null === I.A || void 0 === I.A ? void 0 : I.A.os.release, eR.$x)
    }
    supportsHookSoundshare() {
        return (0, em.isWindows)() && e4.supports(ex.O5.SOUNDSHARE) && g().satisfies(null === I.A || void 0 === I.A ? void 0 : I.A.os.release, eR.ws)
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t0().useSystemScreensharePicker,
            n = (0, em.isLinux)();
        return e && (null != t ? t : n)
    }
    supportsSystemScreensharePicker() {
        return e4.supports(ex.O5.NATIVE_SCREENSHARE_PICKER)
    }
    getUseVaapiEncoder() {
        return tq
    }
    getUseGamescopeCapture() {
        return tz
    }
    getEverSpeakingWhileMuted() {
        return t_
    }
    getSpeakingWhileMuted() {
        return th
    }
    getKrispModelOverride() {
        return c
    }
    getKrispModels() {
        return tS
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = t0().modeOptions.vadKrispActivationThreshold) ? e : eK
    }
    hasActiveCallKitCall() {
        return tK
    }
    setHasActiveCallKitCall(e) {
        tK = e
    }
    supportsScreenSoundshare() {
        return (0, em.isMac)() ? e4.supports(ex.O5.SOUNDSHARE) && g().satisfies(null === I.A || void 0 === I.A ? void 0 : I.A.os.release, eR.P$) && ni() : (0, em.isWindows)() ? e4.supports(ex.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, em.isLinux)() && e4.supports(ex.O5.SCREEN_SOUNDSHARE)
    }
    getSystemMicrophoneMode() {
        if ((0, em.isWindows)()) {
            var e, t;
            return null == (t = this.getInputDevices()[this.getInputDeviceId()]) || null == (e = t.effects) ? void 0 : e.find(e => e === e1)
        }
        if ((0, em.isMac)() || (0, em.isIOS)()) return u
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT,
            t = this.supports(ex.O5.VIDEO) ? [{
                rid: "100",
                type: e === ex.x.DEFAULT ? ex.mI.VIDEO : ex.mI.SCREEN,
                quality: ex.Y4
            }] : [];
        return this.isSimulcastSupported() && (e === ex.x.DEFAULT || this.goLiveSimulcastEnabled()) && t.push({
            rid: "50",
            type: e === ex.x.DEFAULT ? ex.mI.VIDEO : ex.mI.SCREEN,
            quality: ex.Cl
        }), t
    }
    fetchAsyncResources() {
        let e = {
            fetchDave: !1
        };
        return (0, em.isWeb)() && (e.fetchDave = J.f1.getCurrentConfig({
            location: "MediaEngineStore fetchAsyncResources"
        }).loadWasmModule), e4.fetchAsyncResources(e)
    }
    startDavePreload() {
        if (!tx && (tx = !0, (0, em.isWeb)())) {
            let e = {
                fetchDave: !0
            };
            e4.fetchAsyncResources(e).catch(e => {
                eF.warn("DAVE preload failed:", e), eE.A.captureException(e)
            })
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, em.isWeb)()) {
            let {
                useWasmModule: e
            } = J.f1.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion"
            });
            if (!e) return 0
        }
        let e = e4.getSupportedSecureFramesProtocolVersion();
        114 === e && (e = 1);
        let t = J.ex.getCurrentConfig({
                location: "MediaEngineStore"
            }),
            n = J.a.getConfig({
                location: "MediaEngineStore"
            });
        return (t.canSupportDaveProtocol || n.allowOptIn && es.A.getPersistentCodesEnabled()) && e >= t.protocolVersionFloor ? e : 0
    }
    hasClipsSource() {
        return null != o
    }
    getGpuBrand() {
        return tY
    }
}

function rZ(e) {
    if (null == e.taskMetrics || 0 === e.taskMetrics.length || 1 === e.taskMetrics.length) return null;
    let t = {
        metrics_period_ms: e.periodMs,
        total_tasks: 0,
        total_exec_time_ns: 0,
        queue_name: e.queueName
    };
    t.total_tasks = e.taskMetrics.reduce((e, t) => e + t.count, 0), t.total_exec_time_ns = e.taskMetrics.reduce((e, t) => e + t.totalExecTimeNs, 0);
    let n = [...e.taskMetrics].sort((e, t) => t.longestExecTimeNs - e.longestExecTimeNs),
        r = [...e.taskMetrics].sort((e, t) => t.longestQueueTimeNs - e.longestQueueTimeNs);
    for (let e = 0; e < 3; e++)
        if (e < n.length) {
            let r = n[e];
            t["slow_task_".concat(e, "_name")] = r.name, t["slow_task_".concat(e, "_longest_exec_time_ns")] = r.longestExecTimeNs
        } for (let e = 0; e < 3; e++)
        if (e < r.length) {
            let n = r[e];
            t["delayed_task_".concat(e, "_name")] = n.name, t["delayed_task_".concat(e, "_longest_queue_time_ns")] = n.longestQueueTimeNs
        } return t.full_task_report = JSON.stringify(n), t
}
ej(rq, "displayName", "MediaEngineStore");
let rQ = r = new rq(A.h, {
    VOICE_CHANNEL_SELECT: rS,
    VOICE_STATE_UPDATES: nw,
    CONNECTION_OPEN: nI,
    CONNECTION_CLOSED: nT,
    POST_CONNECTION_OPEN: nC,
    RTC_CONNECTION_STATE: nN,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nR,
    AUDIO_TOGGLE_SELF_MUTE: nP,
    AUDIO_SET_SELF_MUTE: nD,
    AUDIO_TOGGLE_SELF_DEAF: nx,
    AUDIO_TOGGLE_LOCAL_MUTE: nM,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nj,
    AUDIO_SET_LOCAL_VOLUME: nG,
    AUDIO_SET_LOCAL_PAN: nF,
    AUDIO_SET_MODE: nV,
    AUDIO_SET_INPUT_VOLUME: nB,
    AUDIO_SET_OUTPUT_VOLUME: nH,
    AUDIO_SET_INPUT_DEVICE: nY,
    AUDIO_SET_OUTPUT_DEVICE: nW,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nz,
    AUDIO_SET_ECHO_CANCELLATION: nJ,
    AUDIO_SET_SIDECHAIN_COMPRESSION: n$,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: n0,
    AUDIO_SET_LOOPBACK: n2,
    AUDIO_SET_NOISE_SUPPRESSION: n5,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: n7,
    AUDIO_SET_NOISE_CANCELLATION: n8,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: n9,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: rt,
    AUDIO_SET_DEBUG_LOGGING: rn,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rr,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: re,
    MEDIA_ENGINE_SET_VIDEO_HOOK: ri,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: ra,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: ro,
    AUDIO_SET_ATTENUATION: rs,
    AUDIO_SET_QOS: rl,
    MEDIA_ENGINE_DEVICES: nZ,
    AUDIO_VOLUME_CHANGE: nQ,
    AUDIO_RESET: rc,
    AUDIO_INPUT_DETECTED: ru,
    AUDIO_SET_SUBSYSTEM: rv,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rO,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rw,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rR,
    MEDIA_ENGINE_PERMISSION: rN,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rL,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nK,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nq,
    USER_SETTINGS_MODAL_INIT: rx,
    USER_SETTINGS_MODAL_SET_SECTION: rx,
    CERTIFIED_DEVICES_SET: rM,
    RPC_APP_CONNECTED: rT,
    RPC_APP_DISCONNECTED: rC,
    OVERLAY_INITIALIZE: nS,
    APP_STATE_UPDATE: rU,
    SET_CHANNEL_BITRATE: rG,
    SET_VAD_PERMISSION: rd,
    SET_NATIVE_PERMISSION: rf,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rB,
    MEDIA_ENGINE_SET_AEC_DUMP: rj,
    MEDIA_ENGINE_RESET_SETTINGS: rk,
    CHANNEL_DELETE: rF,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rV,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rH,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rY,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rW,
    USER_SETTINGS_PROTO_UPDATE: nL,
    CLIPS_INIT: rP,
    CLIPS_SETTINGS_UPDATE: rD,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rK,
    VOICE_FILTER_REQUEST_SWITCH: rE,
    VOICE_FILTER_LOOPBACK_TOGGLE: rg,
    VOICE_FILTER_APPLIED: rb,
    VOICE_FILTER_DOWNLOAD_FAILED: ry,
    VOICE_FILTER_APPLY_FAILED: ry
})