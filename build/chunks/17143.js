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
    m = i(990078),
    A = i(397927),
    p = i(827343),
    h = i(765671),
    g = i(123902),
    f = i(430452),
    T = i(383501),
    v = i(954571),
    C = i(652215),
    S = i(985018),
    E = i(463369);
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
        f.Ay.getMediaEngine().on(u.bg.VoiceActivity, this.handleVoiceActivity)
    };
    componentWillUnmount() {
        this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), f.Ay.getMediaEngine().removeListener(u.bg.VoiceActivity, this.handleVoiceActivity)
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
        t && !d && (p.A.toggleSelfDeaf(), u = !0), p.A.setLoopback("mic_test", !0), this._micTestStartTime = Date.now(), this.setState({
            isMicTesting: !0,
            isDetectingInput: !0,
            didDeafenUser: u
        }), v.default.track(C.HAw.MIC_TESTING_STARTED, {
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
        e && (i && n && t && p.A.toggleSelfDeaf(), p.A.setLoopback("mic_test", !1), this.setState({
            isMicTesting: !1,
            didDeafenUser: !1
        }), null != this._micTestStartTime && v.default.track(C.HAw.MIC_TESTING_STOPPED, {
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
        return null == t && null == e ? null : (0, n.jsx)(A.Text, {
            variant: "text-xs/normal",
            color: "text-subtle",
            className: E.Qe,
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
            measureButtonRef: p,
            meterOnly: h = !1,
            containerClassName: f,
            helpText: T
        } = this.props, {
            isMicTesting: v,
            volume: C,
            isDetectingInput: x
        } = this.state, y = t && !v ? S.intl.string(S.t["9viE2A"]) : null;
        v && t && !u && this._micTestStop();
        let _ = a.length >= r.length ? a : r;
        return (0, n.jsxs)("div", {
            className: s()(E.kL, f),
            children: [(0, n.jsx)(A.D0$, {
                label: e ?? void 0,
                hideLabel: h,
                description: h ? null : i,
                children: (0, n.jsxs)("div", {
                    className: s()(E.ak, {
                        [E.mi]: h,
                        [E.EX]: "sm" === d
                    }),
                    children: [!h && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: E.km,
                            "aria-hidden": !0,
                            children: (0, n.jsx)(A.Button, {
                                buttonRef: p,
                                size: d,
                                variant: o,
                                text: _
                            })
                        }), (0, n.jsx)(m.m, {
                            text: y,
                            children: (0, n.jsx)("div", {
                                style: null != c ? {
                                    minWidth: c
                                } : {
                                    visibility: "hidden"
                                },
                                children: (0, n.jsx)(A.Button, {
                                    size: d,
                                    variant: o,
                                    text: v ? a : r,
                                    onClick: this.handleToggleMicTest,
                                    fullWidth: !0
                                })
                            })
                        })]
                    }), (0, n.jsx)(g.A, {
                        progress: v || h ? C + 100 : 0,
                        notchBackground: l,
                        notchClassName: this.props.notchClassName,
                        size: d
                    }), this.renderCaption()]
                })
            }), null != T && (0, n.jsx)(A.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                style: {
                    visibility: v && !x ? "hidden" : "visible"
                },
                children: T
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
    } = (0, d.cf)([f.Ay], () => {
        let t = f.Ay.getInputDeviceId(),
            e = f.Ay.getInputDevices(),
            i = o().find(e, e => {
                let {
                    id: i
                } = e;
                return i === t
            }),
            n = f.Ay.getOutputDeviceId(),
            l = f.Ay.getOutputDevices(),
            r = o().find(l, t => {
                let {
                    id: e
                } = t;
                return e === n
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
    }), m = (0, d.bG)([T.A], () => T.A.isConnected()), {
        ref: A,
        width: p
    } = (0, h.Ay)();
    return (0, n.jsx)(x, {
        isVoiceConnected: m,
        inputVolume: s,
        outputVolume: a,
        inputMode: u,
        isDeafened: c,
        vadThreshold: l,
        vadAutoThreshold: r,
        inputDeviceName: e?.name ?? "",
        outputDeviceName: i?.name ?? "",
        measureButtonRef: A,
        buttonMinWidth: p,
        ...t
    })
}