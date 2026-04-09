/** chunk id: 17143 params = (module,exports,require) **/
n.d(e, {
    A: () => N,
    V: () => g.V
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(735438),
    o = n.n(a),
    u = n(311907),
    d = n(205693),
    c = n(451988),
    h = n(990078),
    A = n(397927),
    m = n(827343),
    p = n(765671),
    g = n(123902),
    f = n(430452),
    E = n(383501),
    T = n(954571),
    C = n(652215),
    S = n(985018),
    _ = n(163014);
class y extends l.PureComponent {
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
        f.Ay.getMediaEngine().on(d.bg.VoiceActivity, this.handleVoiceActivity)
    };
    componentWillUnmount() {
        this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), f.Ay.getMediaEngine().removeListener(d.bg.VoiceActivity, this.handleVoiceActivity)
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
            inputVolume: n,
            outputDeviceName: i,
            outputVolume: l,
            inputMode: r,
            vadAutoThreshold: s,
            vadThreshold: a,
            location: o,
            isDeafened: u
        } = this.props, d = !1;
        t && !u && (m.A.toggleSelfDeaf(), d = !0), m.A.setLoopback("mic_test", !0), this._micTestStartTime = Date.now(), this.setState({
            isMicTesting: !0,
            isDetectingInput: !0,
            didDeafenUser: d
        }), T.default.track(C.HAw.MIC_TESTING_STARTED, {
            input_device_name: e,
            input_device_volume: n,
            output_device_name: i,
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
            isVoiceConnected: n,
            isDeafened: i
        } = this.props;
        e && (n && i && t && m.A.toggleSelfDeaf(), m.A.setLoopback("mic_test", !1), this.setState({
            isMicTesting: !1,
            didDeafenUser: !1
        }), null != this._micTestStartTime && T.default.track(C.HAw.MIC_TESTING_STOPPED, {
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
            isMicTesting: n,
            isDetectingInput: l
        } = this.state;
        return null == t && null == e ? null : (0, i.jsx)(A.Text, {
            variant: "text-xs/normal",
            color: "text-subtle",
            className: _.Qe,
            children: n ? l ? t : e : void 0
        })
    }
    render() {
        let {
            isVoiceConnected: t,
            title: e,
            description: n,
            notchBackground: l,
            buttonTest: r = "",
            buttonStop: a = "",
            buttonVariant: o = "secondary",
            size: u = "sm",
            isDeafened: d,
            buttonMinWidth: c,
            measureButtonRef: m,
            meterOnly: p = !1,
            containerClassName: f,
            helpText: E
        } = this.props, {
            isMicTesting: T,
            volume: C,
            isDetectingInput: y
        } = this.state, N = t && !T ? S.intl.string(S.t["9viE2A"]) : null;
        T && t && !d && this._micTestStop();
        let v = a.length >= r.length ? a : r;
        return (0, i.jsxs)("div", {
            className: s()(_.kL, f),
            children: [(0, i.jsx)(A.D0$, {
                label: e ?? void 0,
                hideLabel: p,
                description: p ? null : n,
                children: (0, i.jsxs)("div", {
                    className: s()(_.ak, {
                        [_.mi]: p,
                        [_.EX]: "sm" === u
                    }),
                    children: [!p && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: _.km,
                            "aria-hidden": !0,
                            children: (0, i.jsx)(A.Button, {
                                buttonRef: m,
                                size: u,
                                variant: o,
                                text: v
                            })
                        }), (0, i.jsx)(h.m, {
                            text: N,
                            children: (0, i.jsx)("div", {
                                style: null != c ? {
                                    minWidth: c
                                } : {
                                    visibility: "hidden"
                                },
                                children: (0, i.jsx)(A.Button, {
                                    size: u,
                                    variant: o,
                                    text: T ? a : r,
                                    onClick: this.handleToggleMicTest,
                                    fullWidth: !0
                                })
                            })
                        })]
                    }), (0, i.jsx)(g.A, {
                        progress: T || p ? C + 100 : 0,
                        notchBackground: l,
                        notchClassName: this.props.notchClassName,
                        size: u
                    }), this.renderCaption()]
                })
            }), null != E && (0, i.jsx)(A.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                style: {
                    visibility: T && !y ? "hidden" : "visible"
                },
                children: E
            })]
        })
    }
}

function N(t) {
    let {
        inputDevice: e,
        outputDevice: n,
        threshold: l,
        autoThreshold: r,
        inputVolume: s,
        outputVolume: a,
        inputMode: d,
        isDeafened: c
    } = (0, u.cf)([f.Ay], () => {
        let t = f.Ay.getInputDeviceId(),
            e = f.Ay.getInputDevices(),
            n = o().find(e, e => {
                let {
                    id: n
                } = e;
                return n === t
            }),
            i = f.Ay.getOutputDeviceId(),
            l = f.Ay.getOutputDevices(),
            r = o().find(l, t => {
                let {
                    id: e
                } = t;
                return e === i
            }),
            {
                threshold: s,
                autoThreshold: a
            } = f.Ay.getModeOptions(),
            u = f.Ay.getInputVolume(),
            d = f.Ay.getOutputVolume();
        return {
            inputDevice: n,
            outputDevice: r,
            threshold: s,
            autoThreshold: a,
            inputVolume: u,
            outputVolume: d,
            inputMode: f.Ay.getMode(),
            isDeafened: f.Ay.isSelfDeaf()
        }
    }), h = (0, u.bG)([E.A], () => E.A.isConnected()), {
        ref: A,
        width: m
    } = (0, p.Ay)();
    return (0, i.jsx)(y, {
        isVoiceConnected: h,
        inputVolume: s,
        outputVolume: a,
        inputMode: d,
        isDeafened: c,
        vadThreshold: l,
        vadAutoThreshold: r,
        inputDeviceName: e?.name ?? "",
        outputDeviceName: n?.name ?? "",
        measureButtonRef: A,
        buttonMinWidth: m,
        ...t
    })
}