/** chunk id: 8088, original params: e,t,n (module,exports,require) **/
"use strict";
let i;
n.d(t, {
    A: () => eO
}), n(321073);
var r = n(627968),
    s = n(64700),
    l = n(503698),
    o = n.n(l),
    a = n(695497),
    c = n.n(a),
    d = n(111956),
    u = n.n(d),
    p = n(33851),
    h = n.n(p),
    f = n(311907),
    g = n(397927),
    y = n(442433),
    m = n(684013),
    _ = n(684136),
    b = n(34968),
    A = n(775121),
    O = n(836753),
    v = n(793574),
    E = n(688810),
    x = n(235986);
n(607470);
var S = n(15285),
    j = n(880144),
    C = n(905552),
    I = n(768841),
    w = n(265367),
    N = n(616356),
    T = n(961350),
    P = n(734057),
    D = n(71393),
    R = n(555528),
    k = n(430452),
    L = n(309010),
    M = n(70142),
    G = n(157257),
    U = n(712687),
    V = n(532624),
    z = n(242286),
    H = n(899699),
    W = n(256415),
    K = n(531685),
    B = n(927813),
    F = n(723702),
    Y = n(837921),
    Z = n(316501),
    X = n(350535),
    J = n(9302),
    Q = n(641376),
    q = n(41984),
    $ = n(589051),
    ee = n(223251),
    et = n(764559),
    en = n(227308),
    ei = n(409110),
    er = n(160162),
    es = n(395809),
    el = n(755029),
    eo = n(592598),
    ea = n(672396);
n(644434);
var ec = n(652215),
    ed = n(985018),
    eu = n(675490);

function ep(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function eh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            ep(e, t, n[t])
        })
    }
    return e
}

function ef(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
f.Ay.PersistedStore.disableWrites = __OVERLAY__, f.Ay.initialize();
let eg = null;

function ey(e) {
    e.preventDefault()
}

function em(e) {
    (0, y.L3)(e, async () => {
        let {
            default: e
        } = await n.e("92843").then(n.bind(n, 254790));
        return t => (0, r.jsx)(e, ef(eh({}, t), {
            version: 0
        }))
    })
}
F.isPlatformEmbedded;
let e_ = e => {
        let {
            keybind: t,
            onClick: n,
            isPreviewingInGame: i,
            locked: s
        } = e, l = s ? g.DUT : "div";
        return (0, r.jsx)(l, {
            className: o()(eu.LK, {
                [eu.Zo]: !s,
                [eu.vZ]: s,
                [eu.Az]: !s && i
            }),
            onMouseDown: e => {
                let {
                    currentTarget: t,
                    target: i,
                    button: r
                } = e;
                r === ec.hE4.PRIMARY && t === i && n()
            },
            onContextMenu: em,
            children: s ? null : (0, r.jsx)("div", {
                className: eu.G3,
                children: (0, r.jsx)(_.A, {
                    variant: _.A.Variants.BOLD,
                    keybind: t,
                    closeAction: n
                })
            })
        })
    },
    eb = e => {
        let {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: r,
            ctrlKey: s
        } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: r,
            ctrlKey: s
        }
    };
class eA extends s.Component {
    handleLock() {
        (0, g.ueM)() || U.A.isOpen() || m.A.setInputLocked(!0, (0, J.getPID)())
    }
    handleDeactivate() {
        m.A.deactivateAllRegions()
    }
    componentDidMount() {
        m.A.startSession(), I.A.initialize(), O.A.initialize(), w.A.initialize()
    }
    componentDidUpdate(e) {
        let {
            initialized: t
        } = this.props;
        if (t) {
            if (t && !this.didUpdate) {
                this.didUpdate = !0, this.initialSetup();
                return
            }
            if (!e.locked && this.props.locked) {
                if (window.addEventListener("contextmenu", ey, !1), null != eg) {
                    let e = Date.now() - eg;
                    m.A.track(ec.HAw.OVERLAY_LOCKED, {
                        unlocked_duration: e
                    }), eg = null
                }
                A.A.disable(), this.activeKeyEventShapes = [], W.default.isPinned(ec.uss.TEXT) && (A.A.setLayout(b.dY), A.A.enable())
            } else e.locked && !this.props.locked && (window.removeEventListener("contextmenu", ey, !1), null == eg && (eg = Date.now(), m.A.track(ec.HAw.OVERLAY_UNLOCKED)), A.A.disable(), this.activeKeyEventShapes = [], A.A.setLayout(b.CJ), A.A.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, X.pi)(this.props.keybindKeyCodes))
        }
    }
    initialSetup() {
        let e, {
            connectedToVoice: t,
            locked: i,
            canGoLive: s,
            isStreaming: l,
            voiceGuild: o,
            voiceChannelId: a,
            game: c,
            showKeybindNotification: d,
            dismissKeybindNotification: u
        } = this.props;
        m.A.track(ec.HAw.OVERLAY_INITIALIZED, {
            voice_widget_connected: t,
            text_widget_connected: W.default.isPinned(ec.uss.TEXT),
            overlay_render_method: q.Ue[q.Ue.Hook],
            unpinned_widget_types: R.A.getAllUnpinnedPinnedWidgets(J.OVERLAY_LAYOUT_ID)
        }), Q.A.trackExposure({
            location: "Overlay"
        });
        let p = s && !l && null != c,
            h = t && null != o && null != a,
            f = eo.A.isNotificationDisabled(ea.KS.WelcomeNudge),
            y = eo.A.isNotificationDisabled(ea.KS.GoLiveNudge);
        if (f || (e = {
                type: ea.Jr.WELCOME
            }), d && !f ? e = {
                type: ea.Jr.KEYBIND_INDICATORS,
                markAsDismissed: u
            } : p && h && !y ? e = {
                type: ea.Jr.GO_LIVE_VOICE,
                game: c,
                voiceChannelId: a,
                voiceGuild: o
            } : p && !y && (e = {
                type: ea.Jr.GO_LIVE_NON_VOICE,
                game: c
            }), setTimeout(async () => {
                await (0, Z.pF)(), null != e ? m.A.overlayMounted(e) : m.A.overlayMounted()
            }, 128), window.addEventListener("resize", this.handleWindowResize), i && window.addEventListener("contextmenu", ey, !1), F.isPlatformEmbedded) {
            let e = (0, H.m)();
            if (null == e) return;
            if (void 0 !== e.setPerfInfoCallback) {
                var _;
                e.setPerfInfoCallback(e => {
                    m.A.track(ec.HAw.OVERLAY_PERF_INFO, e)
                }), null == (_ = e.broadcastCommand) || _.call(e, {
                    message: "set_perf_report_interval",
                    interval: 15 * B.A.Millis.MINUTE
                })
            }
            Y.Ay.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                W.default.getDisableExternalLinkAlert() || t === M.A.getLastURL() ? Y.Ay.send("OPEN_EXTERNAL_URL", t) : (0, g.mMO)(async () => {
                    let {
                        default: e
                    } = await n.e("30582").then(n.bind(n, 613429));
                    return n => (0, r.jsx)(e, ef(eh({}, n), {
                        url: t
                    }))
                })
            })
        }
        window.addEventListener("keydown", this.onKeyDownGlobal, !0), window.addEventListener("keyup", this.onKeyUpGlobal, !0)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowResize), window.removeEventListener("keydown", this.onKeyDownGlobal, !0), window.removeEventListener("keyup", this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener("contextmenu", ey, !1), I.A.terminate(), O.A.terminate(), w.A.terminate()
    }
    renderInvalidSizeMessage() {
        return (0, r.jsx)(x.A, {
            justify: x.A.Justify.CENTER,
            align: x.A.Align.CENTER,
            className: eu.rU,
            children: (0, r.jsx)("div", {
                className: eu.JV,
                children: ed.intl.format(ed.t.ketnW0, J.OVERLAY_MIN_RESOLUTION)
            })
        })
    }
    render() {
        let {
            locked: e,
            keybind: t,
            incompatibleApp: n,
            initialized: s,
            isPreviewingInGame: l,
            activeRegions: a,
            windowSize: c,
            voiceGuild: d,
            voiceChannelId: u
        } = this.props, {
            width: p,
            height: h
        } = c;
        if (0 === p || 0 === h || n || !s) return null;
        let f = e || l,
            g = T.default.getId();
        return (0, r.jsxs)("div", {
            className: eu.Lw,
            children: [(0, r.jsx)(er.A, {}), l && (0, r.jsx)("header", {
                className: eu.tk,
                children: ed.intl.string(ed.t.iOq96m)
            }), i, (!e || a.has(ec.ajI.TEXT_WIDGET)) && (0, r.jsx)(e_, {
                locked: e,
                keybind: t,
                onClick: e ? this.handleDeactivate : this.handleLock,
                isPreviewingInGame: l
            }), (0, J.validResolution)(c) ? (0, r.jsx)(ei.A, {
                className: o()({
                    [eu.ZK]: e,
                    [eu.al]: !e
                })
            }) : e ? null : this.renderInvalidSizeMessage(), (0, r.jsx)(el.A, {}), null != d && null != u && (0, r.jsx)(es.A, {
                streamerId: g,
                guildId: d.id,
                channelId: u
            }), (0, r.jsx)(en.A, {
                locked: f,
                keybind: t
            }), (0, r.jsx)(ee.A, {}), (0, r.jsx)("div", {
                className: eu._C
            })]
        })
    }
    constructor(e) {
        super(e), ep(this, "didUpdate", !1), ep(this, "debouncedForceUpdate", u()(() => {
            this.forceUpdate()
        }, 500)), ep(this, "handleWindowResize", () => {
            z.default.isFocusedPidOutOfProcess() ? this.forceUpdate() : this.debouncedForceUpdate()
        }), ep(this, "activeKeyEventShapes", []), ep(this, "lockEventShape", (0, X.pi)(this.props.keybindKeyCodes)), ep(this, "getActiveKeyEventIndex", e => this.activeKeyEventShapes.findIndex(t => h()(t, e))), ep(this, "onKeyDownGlobal", e => {
            let t = eb(e),
                n = this.getActiveKeyEventIndex(t) > -1,
                i = [16, 17, 18, 91].includes(e.keyCode);
            n || i || this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every(e => this.activeKeyEventShapes.some(t => h()(e, t))) && (e.preventDefault(), e.stopPropagation());
            let {
                locked: r,
                activeRegions: s
            } = this.props;
            t.keyCode === c().codes.esc && r && s.has(ec.ajI.TEXT_WIDGET) && m.A.deactivateAllRegions()
        }), ep(this, "onKeyUpGlobal", e => {
            let t = eb(e),
                n = this.getActiveKeyEventIndex(t);
            n > -1 && this.activeKeyEventShapes.splice(n, 1)
        });
        const t = e.locked && W.default.isPinned(ec.uss.TEXT);
        A.A.setLayout(t ? b.dY : b.CJ), t && A.A.enable()
    }
}

function eO() {
    let {
        locked: e,
        initialized: t,
        incompatibleApp: n,
        activeRegions: i,
        isPreviewingInGame: l
    } = (0, f.cf)([W.default], () => ({
        locked: W.default.isLocked((0, J.getPID)()),
        initialized: W.default.initialized,
        incompatibleApp: W.default.incompatibleApp,
        activeRegions: W.default.getActiveRegions(),
        isPreviewingInGame: W.default.isPreviewingInGame()
    })), o = (0, f.bG)([K.A], () => K.A.windowSize()), a = (0, f.bG)([V.Ay], () => V.Ay.getOverlayKeybind()), c = (0, f.bG)([L.A], () => L.A.getVoiceChannelId()), d = (0, f.bG)([P.A], () => P.A.getChannel(c)), u = (0, f.bG)([D.A], () => null != d ? D.A.getGuild(d.guild_id) : null), p = (0, f.bG)([S.Ay, G.A], () => (0, C.A)(S.Ay, G.A)), h = (0, f.bG)([k.A], () => (0, j.A)(k.A)), g = (0, f.bG)([N.A], () => null != N.A.getCurrentUserActiveStream()), {
        analyticsLocations: y
    } = (0, E.Ay)(v.A.OVERLAY), {
        showKeybindIndicators: m,
        dismissKeybindNotification: _
    } = (0, et.B)();
    return s.useEffect(() => {
        t && (0, $.E)()
    }, [t]), (0, r.jsx)(E.f5, {
        value: y,
        children: (0, r.jsx)(eA, {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: l,
            windowSize: o,
            keybind: null != a ? (0, X.dI)(a.shortcut, !0) : "???",
            keybindKeyCodes: null != a ? a.shortcut : [],
            connectedToVoice: null != c,
            voiceChannelId: null != d ? d.id : null,
            voiceGuild: u,
            game: p,
            canGoLive: h,
            isStreaming: g,
            showKeybindNotification: m,
            dismissKeybindNotification: _
        })
    })
}