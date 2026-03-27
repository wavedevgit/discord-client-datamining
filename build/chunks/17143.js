/** chunk id: 17143 params = (module,exports,require) **/
i.d(t, {
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
    A = i(990078),
    h = i(397927),
    m = i(827343),
    p = i(765671),
    g = i(123902),
    f = i(430452),
    T = i(383501),
    S = i(954571),
    E = i(652215),
    C = i(985018),
    v = i(685049);
class _ extends l.PureComponent {
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
        f.Ay.getMediaEngine().on(u.bg.VoiceActivity, this.handleVoiceActivity)
    };
    componentWillUnmount() {
        this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), f.Ay.getMediaEngine().removeListener(u.bg.VoiceActivity, this.handleVoiceActivity)
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
            outputVolume: l,
            inputMode: r,
            vadAutoThreshold: s,
            vadThreshold: a,
            location: o,
            isDeafened: d
        } = this.props, u = !1;
        e && !d && (m.A.toggleSelfDeaf(), u = !0), m.A.setLoopback("mic_test", !0), this._micTestStartTime = Date.now(), this.setState({
            isMicTesting: !0,
            isDetectingInput: !0,
            didDeafenUser: u
        }), S.default.track(E.HAw.MIC_TESTING_STARTED, {
            input_device_name: t,
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
            didDeafenUser: e,
            isMicTesting: t
        } = this.state, {
            isVoiceConnected: i,
            isDeafened: n
        } = this.props;
        t && (i && n && e && m.A.toggleSelfDeaf(), m.A.setLoopback("mic_test", !1), this.setState({
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
            captionVoice: e,
            captionNoVoice: t
        } = this.props, {
            isMicTesting: i,
            isDetectingInput: l
        } = this.state;
        return null == e && null == t ? null : (0, n.jsx)(h.Text, {
            variant: "text-xs/normal",
            color: "text-subtle",
            className: v.Qe,
            children: i ? l ? e : t : void 0
        })
    }
    render() {
        let {
            isVoiceConnected: e,
            title: t,
            description: i,
            notchBackground: l,
            buttonTest: r = "",
            buttonStop: a = "",
            buttonVariant: o = "secondary",
            size: d = "sm",
            isDeafened: u,
            buttonMinWidth: c,
            measureButtonRef: m,
            meterOnly: p = !1,
            containerClassName: f,
            helpText: T
        } = this.props, {
            isMicTesting: S,
            volume: E,
            isDetectingInput: _
        } = this.state, y = e && !S ? C.intl.string(C.t["9viE2A"]) : null;
        S && e && !u && this._micTestStop();
        let x = a.length >= r.length ? a : r;
        return (0, n.jsxs)("div", {
            className: s()(v.kL, f),
            children: [(0, n.jsx)(h.D0$, {
                label: t ?? void 0,
                hideLabel: p,
                description: p ? null : i,
                children: (0, n.jsxs)("div", {
                    className: s()(v.ak, {
                        [v.mi]: p,
                        [v.EX]: "sm" === d
                    }),
                    children: [!p && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: v.km,
                            "aria-hidden": !0,
                            children: (0, n.jsx)(h.Button, {
                                buttonRef: m,
                                size: d,
                                variant: o,
                                text: x
                            })
                        }), (0, n.jsx)(A.m, {
                            text: y,
                            children: (0, n.jsx)("div", {
                                style: null != c ? {
                                    minWidth: c
                                } : {
                                    visibility: "hidden"
                                },
                                children: (0, n.jsx)(h.Button, {
                                    size: d,
                                    variant: o,
                                    text: S ? a : r,
                                    onClick: this.handleToggleMicTest,
                                    fullWidth: !0
                                })
                            })
                        })]
                    }), (0, n.jsx)(g.A, {
                        progress: S || p ? E + 100 : 0,
                        notchBackground: l,
                        notchClassName: this.props.notchClassName,
                        size: d
                    }), this.renderCaption()]
                })
            }), null != T && (0, n.jsx)(h.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                style: {
                    visibility: S && !_ ? "hidden" : "visible"
                },
                children: T
            })]
        })
    }
}

function y(e) {
    let {
        inputDevice: t,
        outputDevice: i,
        threshold: l,
        autoThreshold: r,
        inputVolume: s,
        outputVolume: a,
        inputMode: u,
        isDeafened: c
    } = (0, d.cf)([f.Ay], () => {
        let e = f.Ay.getInputDeviceId(),
            t = f.Ay.getInputDevices(),
            i = o().find(t, t => {
                let {
                    id: i
                } = t;
                return i === e
            }),
            n = f.Ay.getOutputDeviceId(),
            l = f.Ay.getOutputDevices(),
            r = o().find(l, e => {
                let {
                    id: t
                } = e;
                return t === n
            }),
            {
                threshold: s,
                autoThreshold: a
            } = f.Ay.getModeOptions(),
            d = f.Ay.getInputVolume(),
            u = f.Ay.getOutputVolume();
        return {
            inputDevice: i,
            outputDevice: r,
            threshold: s,
            autoThreshold: a,
            inputVolume: d,
            outputVolume: u,
            inputMode: f.Ay.getMode(),
            isDeafened: f.Ay.isSelfDeaf()
        }
    }), A = (0, d.bG)([T.A], () => T.A.isConnected()), {
        ref: h,
        width: m
    } = (0, p.Ay)();
    return (0, n.jsx)(_, {
        isVoiceConnected: A,
        inputVolume: s,
        outputVolume: a,
        inputMode: u,
        isDeafened: c,
        vadThreshold: l,
        vadAutoThreshold: r,
        inputDeviceName: t?.name ?? "",
        outputDeviceName: i?.name ?? "",
        measureButtonRef: h,
        buttonMinWidth: m,
        ...e
    })
}