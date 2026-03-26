/** chunk id: 17143 params = (module,exports,require) **/
i.d(e, {
    A: () => y,
    V: () => g.V
});
var n = i(627968),
    l = i(64700),
    r = i(503698),
    s = i.n(r),
    a = i(735438),
    o = i.n(a),
    d = i(311907),
    u = i(205693),
    c = i(451988),
    p = i(990078),
    m = i(397927),
    h = i(827343),
    A = i(765671),
    g = i(123902),
    T = i(430452),
    f = i(383501),
    S = i(954571),
    E = i(652215),
    C = i(985018),
    v = i(163014);
class x extends l.PureComponent {
    _initTimeout = new c.Ep;
    _silenceTimeout = new c.Ep;
    _messageTimeout = new c.Ep;
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
        T.Ay.getMediaEngine().on(u.bg.VoiceActivity, this.handleVoiceActivity)
    };
    componentWillUnmount() {
        this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), T.Ay.getMediaEngine().removeListener(u.bg.VoiceActivity, this.handleVoiceActivity)
    }
    handleVoiceActivity = t => {
        let {
            isMicTesting: e
        } = this.state;
        if (e && t <= -100) {
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
            volume: t,
            isDetectingInput: !0
        })
    };
    _micTestStart() {
        let {
            isVoiceConnected: t,
            inputDeviceName: e,
            inputVolume: i,
            outputDeviceName: n,
            outputVolume: l,
            inputMode: r,
            vadAutoThreshold: s,
            vadThreshold: a,
            location: o,
            isDeafened: d
        } = this.props, u = !1;
        t && !d && (h.A.toggleSelfDeaf(), u = !0), h.A.setLoopback("mic_test", !0), this._micTestStartTime = Date.now(), this.setState({
            isMicTesting: !0,
            isDetectingInput: !0,
            didDeafenUser: u
        }), S.default.track(E.HAw.MIC_TESTING_STARTED, {
            input_device_name: e,
            input_device_volume: i,
            output_device_name: n,
            output_device_volume: l,
            input_mode: r,
            input_sensitivity_is_automatic: s,
            input_sensitivity_threshold: Math.round(a),
            location: o
        })
    }
    _micTestStop() {
        let {
            didDeafenUser: t,
            isMicTesting: e
        } = this.state, {
            isVoiceConnected: i,
            isDeafened: n
        } = this.props;
        e && (i && n && t && h.A.toggleSelfDeaf(), h.A.setLoopback("mic_test", !1), this.setState({
            isMicTesting: !1,
            didDeafenUser: !1
        }), null != this._micTestStartTime && S.default.track(E.HAw.MIC_TESTING_STOPPED, {
            testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1e3)
        }))
    }
    handleToggleMicTest = () => {
        this.state.isMicTesting ? this._micTestStop() : this._micTestStart()
    };
    renderCaption() {
        let {
            captionVoice: t,
            captionNoVoice: e
        } = this.props, {
            isMicTesting: i,
            isDetectingInput: l
        } = this.state;
        return null == t && null == e ? null : (0, n.jsx)(m.Text, {
            variant: "text-xs/normal",
            color: "text-subtle",
            className: v.Qe,
            children: i ? l ? t : e : void 0
        })
    }
    render() {
        let {
            isVoiceConnected: t,
            title: e,
            description: i,
            notchBackground: l,
            buttonTest: r = "",
            buttonStop: a = "",
            buttonVariant: o = "secondary",
            size: d = "sm",
            isDeafened: u,
            buttonMinWidth: c,
            measureButtonRef: h,
            meterOnly: A = !1,
            containerClassName: T,
            helpText: f
        } = this.props, {
            isMicTesting: S,
            volume: E,
            isDetectingInput: x
        } = this.state, y = t && !S ? C.intl.string(C.t["9viE2A"]) : null;
        S && t && !u && this._micTestStop();
        let _ = a.length >= r.length ? a : r;
        return (0, n.jsxs)("div", {
            className: s()(v.kL, T),
            children: [(0, n.jsx)(m.D0$, {
                label: e ?? void 0,
                hideLabel: A,
                description: A ? null : i,
                children: (0, n.jsxs)("div", {
                    className: s()(v.ak, {
                        [v.mi]: A,
                        [v.EX]: "sm" === d
                    }),
                    children: [!A && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: v.km,
                            "aria-hidden": !0,
                            children: (0, n.jsx)(m.Button, {
                                buttonRef: h,
                                size: d,
                                variant: o,
                                text: _
                            })
                        }), (0, n.jsx)(p.m, {
                            text: y,
                            children: (0, n.jsx)("div", {
                                style: null != c ? {
                                    minWidth: c
                                } : {
                                    visibility: "hidden"
                                },
                                children: (0, n.jsx)(m.Button, {
                                    size: d,
                                    variant: o,
                                    text: S ? a : r,
                                    onClick: this.handleToggleMicTest,
                                    fullWidth: !0
                                })
                            })
                        })]
                    }), (0, n.jsx)(g.A, {
                        progress: S || A ? E + 100 : 0,
                        notchBackground: l,
                        notchClassName: this.props.notchClassName,
                        size: d
                    }), this.renderCaption()]
                })
            }), null != f && (0, n.jsx)(m.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                style: {
                    visibility: S && !x ? "hidden" : "visible"
                },
                children: f
            })]
        })
    }
}

function y(t) {
    let {
        inputDevice: e,
        outputDevice: i,
        threshold: l,
        autoThreshold: r,
        inputVolume: s,
        outputVolume: a,
        inputMode: u,
        isDeafened: c
    } = (0, d.cf)([T.Ay], () => {
        let t = T.Ay.getInputDeviceId(),
            e = T.Ay.getInputDevices(),
            i = o().find(e, e => {
                let {
                    id: i
                } = e;
                return i === t
            }),
            n = T.Ay.getOutputDeviceId(),
            l = T.Ay.getOutputDevices(),
            r = o().find(l, t => {
                let {
                    id: e
                } = t;
                return e === n
            }),
            {
                threshold: s,
                autoThreshold: a
            } = T.Ay.getModeOptions(),
            d = T.Ay.getInputVolume(),
            u = T.Ay.getOutputVolume();
        return {
            inputDevice: i,
            outputDevice: r,
            threshold: s,
            autoThreshold: a,
            inputVolume: d,
            outputVolume: u,
            inputMode: T.Ay.getMode(),
            isDeafened: T.Ay.isSelfDeaf()
        }
    }), p = (0, d.bG)([f.A], () => f.A.isConnected()), {
        ref: m,
        width: h
    } = (0, A.Ay)();
    return (0, n.jsx)(x, {
        isVoiceConnected: p,
        inputVolume: s,
        outputVolume: a,
        inputMode: u,
        isDeafened: c,
        vadThreshold: l,
        vadAutoThreshold: r,
        inputDeviceName: e?.name ?? "",
        outputDeviceName: i?.name ?? "",
        measureButtonRef: m,
        buttonMinWidth: h,
        ...t
    })
}