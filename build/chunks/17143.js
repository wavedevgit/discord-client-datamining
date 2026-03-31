/** chunk id: 17143 params = (module,exports,require) **/
i.d(t, {
    A: () => E,
    V: () => A.V
});
var n = i(627968),
    a = i(64700),
    l = i(503698),
    s = i.n(l),
    r = i(735438),
    o = i.n(r),
    c = i(311907),
    d = i(205693),
    u = i(451988),
    m = i(990078),
    _ = i(397927),
    p = i(827343),
    h = i(765671),
    A = i(123902),
    g = i(430452),
    f = i(383501),
    v = i(954571),
    S = i(652215),
    I = i(985018),
    T = i(685049);
class C extends a.PureComponent {
    _initTimeout = new u.Ep;
    _silenceTimeout = new u.Ep;
    _messageTimeout = new u.Ep;
    _micTestStartTime;
    state = {
        volume: -100,
        isMicTesting: !1,
        isDetectingInput: !0,
        didDeafenUser: !1
    };
    componentDidMount() {
        this._initTimeout.start(1e3, this.setupVoiceActivity)
    }
    setupVoiceActivity = () => {
        g.Ay.getMediaEngine().on(d.bg.VoiceActivity, this.handleVoiceActivity)
    };
    componentWillUnmount() {
        this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), g.Ay.getMediaEngine().removeListener(d.bg.VoiceActivity, this.handleVoiceActivity)
    }
    handleVoiceActivity = e => {
        let {
            isMicTesting: t
        } = this.state;
        if (t && e <= -100) {
            this._silenceTimeout.isStarted() || this._silenceTimeout.start(2e3, () => {
                this.setState({
                    isDetectingInput: !1
                })
            }), this.setState({
                volume: -100
            });
            return
        }
        this._silenceTimeout.stop(), this.setState({
            volume: e,
            isDetectingInput: !0
        })
    };
    _micTestStart() {
        let {
            isVoiceConnected: e,
            inputDeviceName: t,
            inputVolume: i,
            outputDeviceName: n,
            outputVolume: a,
            inputMode: l,
            vadAutoThreshold: s,
            vadThreshold: r,
            location: o,
            isDeafened: c
        } = this.props, d = !1;
        e && !c && (p.A.toggleSelfDeaf(), d = !0), p.A.setLoopback("mic_test", !0), this._micTestStartTime = Date.now(), this.setState({
            isMicTesting: !0,
            isDetectingInput: !0,
            didDeafenUser: d
        }), v.default.track(S.HAw.MIC_TESTING_STARTED, {
            input_device_name: t,
            input_device_volume: i,
            output_device_name: n,
            output_device_volume: a,
            input_mode: l,
            input_sensitivity_is_automatic: s,
            input_sensitivity_threshold: Math.round(r),
            location: o
        })
    }
    _micTestStop() {
        let {
            didDeafenUser: e,
            isMicTesting: t
        } = this.state, {
            isVoiceConnected: i,
            isDeafened: n
        } = this.props;
        t && (i && n && e && p.A.toggleSelfDeaf(), p.A.setLoopback("mic_test", !1), this.setState({
            isMicTesting: !1,
            didDeafenUser: !1
        }), null != this._micTestStartTime && v.default.track(S.HAw.MIC_TESTING_STOPPED, {
            testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1e3)
        }))
    }
    handleToggleMicTest = () => {
        this.state.isMicTesting ? this._micTestStop() : this._micTestStart()
    };
    renderCaption() {
        let {
            captionVoice: e,
            captionNoVoice: t
        } = this.props, {
            isMicTesting: i,
            isDetectingInput: a
        } = this.state;
        return null == e && null == t ? null : (0, n.jsx)(_.Text, {
            variant: "text-xs/normal",
            color: "text-subtle",
            className: T.Qe,
            children: i ? a ? e : t : void 0
        })
    }
    render() {
        let {
            isVoiceConnected: e,
            title: t,
            description: i,
            notchBackground: a,
            buttonTest: l = "",
            buttonStop: r = "",
            buttonVariant: o = "secondary",
            size: c = "sm",
            isDeafened: d,
            buttonMinWidth: u,
            measureButtonRef: p,
            meterOnly: h = !1,
            containerClassName: g,
            helpText: f
        } = this.props, {
            isMicTesting: v,
            volume: S,
            isDetectingInput: C
        } = this.state, E = e && !v ? I.intl.string(I.t["9viE2A"]) : null;
        v && e && !d && this._micTestStop();
        let y = r.length >= l.length ? r : l;
        return (0, n.jsxs)("div", {
            className: s()(T.kL, g),
            children: [(0, n.jsx)(_.D0$, {
                label: t ?? void 0,
                hideLabel: h,
                description: h ? null : i,
                children: (0, n.jsxs)("div", {
                    className: s()(T.ak, {
                        [T.mi]: h,
                        [T.EX]: "sm" === c
                    }),
                    children: [!h && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: T.km,
                            "aria-hidden": !0,
                            children: (0, n.jsx)(_.Button, {
                                buttonRef: p,
                                size: c,
                                variant: o,
                                text: y
                            })
                        }), (0, n.jsx)(m.m, {
                            text: E,
                            children: (0, n.jsx)("div", {
                                style: null != u ? {
                                    minWidth: u
                                } : {
                                    visibility: "hidden"
                                },
                                children: (0, n.jsx)(_.Button, {
                                    size: c,
                                    variant: o,
                                    text: v ? r : l,
                                    onClick: this.handleToggleMicTest,
                                    fullWidth: !0
                                })
                            })
                        })]
                    }), (0, n.jsx)(A.A, {
                        progress: v || h ? S + 100 : 0,
                        notchBackground: a,
                        notchClassName: this.props.notchClassName,
                        size: c
                    }), this.renderCaption()]
                })
            }), null != f && (0, n.jsx)(_.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                style: {
                    visibility: v && !C ? "hidden" : "visible"
                },
                children: f
            })]
        })
    }
}

function E(e) {
    let {
        inputDevice: t,
        outputDevice: i,
        threshold: a,
        autoThreshold: l,
        inputVolume: s,
        outputVolume: r,
        inputMode: d,
        isDeafened: u
    } = (0, c.cf)([g.Ay], () => {
        let e = g.Ay.getInputDeviceId(),
            t = g.Ay.getInputDevices(),
            i = o().find(t, t => {
                let {
                    id: i
                } = t;
                return i === e
            }),
            n = g.Ay.getOutputDeviceId(),
            a = g.Ay.getOutputDevices(),
            l = o().find(a, e => {
                let {
                    id: t
                } = e;
                return t === n
            }),
            {
                threshold: s,
                autoThreshold: r
            } = g.Ay.getModeOptions(),
            c = g.Ay.getInputVolume(),
            d = g.Ay.getOutputVolume();
        return {
            inputDevice: i,
            outputDevice: l,
            threshold: s,
            autoThreshold: r,
            inputVolume: c,
            outputVolume: d,
            inputMode: g.Ay.getMode(),
            isDeafened: g.Ay.isSelfDeaf()
        }
    }), m = (0, c.bG)([f.A], () => f.A.isConnected()), {
        ref: _,
        width: p
    } = (0, h.Ay)();
    return (0, n.jsx)(C, {
        isVoiceConnected: m,
        inputVolume: s,
        outputVolume: r,
        inputMode: d,
        isDeafened: u,
        vadThreshold: a,
        vadAutoThreshold: l,
        inputDeviceName: t?.name ?? "",
        outputDeviceName: i?.name ?? "",
        measureButtonRef: _,
        buttonMinWidth: p,
        ...e
    })
}