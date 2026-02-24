/** chunk id: 17143, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => C,
    V: () => g.V
});
var s = i(627968),
    n = i(64700),
    l = i(503698),
    a = i.n(l),
    o = i(735438),
    c = i.n(o),
    r = i(311907),
    u = i(205693),
    d = i(451988),
    h = i(990078),
    m = i(397927),
    p = i(827343),
    v = i(765671),
    g = i(123902),
    _ = i(430452),
    x = i(383501),
    A = i(954571),
    T = i(652215),
    D = i(985018),
    f = i(463369);
class S extends n.PureComponent {
    _initTimeout = new d.Ep;
    _silenceTimeout = new d.Ep;
    _messageTimeout = new d.Ep;
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
        _.Ay.getMediaEngine().on(u.bg.VoiceActivity, this.handleVoiceActivity)
    };
    componentWillUnmount() {
        this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), _.Ay.getMediaEngine().removeListener(u.bg.VoiceActivity, this.handleVoiceActivity)
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
            outputDeviceName: s,
            outputVolume: n,
            inputMode: l,
            vadAutoThreshold: a,
            vadThreshold: o,
            location: c,
            isDeafened: r
        } = this.props, u = !1;
        e && !r && (p.A.toggleSelfDeaf(), u = !0), p.A.setLoopback("mic_test", !0), this._micTestStartTime = Date.now(), this.setState({
            isMicTesting: !0,
            isDetectingInput: !0,
            didDeafenUser: u
        }), A.default.track(T.HAw.MIC_TESTING_STARTED, {
            input_device_name: t,
            input_device_volume: i,
            output_device_name: s,
            output_device_volume: n,
            input_mode: l,
            input_sensitivity_is_automatic: a,
            input_sensitivity_threshold: Math.round(o),
            location: c
        })
    }
    _micTestStop() {
        let {
            didDeafenUser: e,
            isMicTesting: t
        } = this.state, {
            isVoiceConnected: i,
            isDeafened: s
        } = this.props;
        t && (i && s && e && p.A.toggleSelfDeaf(), p.A.setLoopback("mic_test", !1), this.setState({
            isMicTesting: !1,
            didDeafenUser: !1
        }), null != this._micTestStartTime && A.default.track(T.HAw.MIC_TESTING_STOPPED, {
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
            isDetectingInput: n
        } = this.state;
        return null == e && null == t ? null : (0, s.jsx)(m.Text, {
            variant: "text-xs/normal",
            color: "text-subtle",
            className: f.Qe,
            children: i ? n ? e : t : void 0
        })
    }
    render() {
        let {
            isVoiceConnected: e,
            title: t,
            description: i,
            notchBackground: n,
            buttonTest: l = "",
            buttonStop: o = "",
            buttonVariant: c = "secondary",
            size: r = "sm",
            isDeafened: u,
            buttonMinWidth: d,
            measureButtonRef: p,
            meterOnly: v = !1,
            containerClassName: _,
            helpText: x
        } = this.props, {
            isMicTesting: A,
            volume: T,
            isDetectingInput: S
        } = this.state, C = e && !A ? D.intl.string(D.t["9viE2A"]) : null;
        A && e && !u && this._micTestStop();
        let I = o.length >= l.length ? o : l;
        return (0, s.jsxs)("div", {
            className: a()(f.kL, _),
            children: [(0, s.jsx)(m.D0$, {
                label: t ?? void 0,
                hideLabel: v,
                description: v ? null : i,
                children: (0, s.jsxs)("div", {
                    className: a()(f.ak, {
                        [f.mi]: v,
                        [f.EX]: "sm" === r
                    }),
                    children: [!v && (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: f.km,
                            "aria-hidden": !0,
                            children: (0, s.jsx)(m.Button, {
                                buttonRef: p,
                                size: r,
                                variant: c,
                                text: I
                            })
                        }), (0, s.jsx)(h.m, {
                            text: C,
                            children: (0, s.jsx)("div", {
                                style: null != d ? {
                                    minWidth: d
                                } : {
                                    visibility: "hidden"
                                },
                                children: (0, s.jsx)(m.Button, {
                                    size: r,
                                    variant: c,
                                    text: A ? o : l,
                                    onClick: this.handleToggleMicTest,
                                    fullWidth: !0
                                })
                            })
                        })]
                    }), (0, s.jsx)(g.A, {
                        progress: A || v ? T + 100 : 0,
                        notchBackground: n,
                        notchClassName: this.props.notchClassName,
                        size: r
                    }), this.renderCaption()]
                })
            }), null != x && (0, s.jsx)(m.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                style: {
                    visibility: A && !S ? "hidden" : "visible"
                },
                children: x
            })]
        })
    }
}

function C(e) {
    let {
        inputDevice: t,
        outputDevice: i,
        threshold: n,
        autoThreshold: l,
        inputVolume: a,
        outputVolume: o,
        inputMode: u,
        isDeafened: d
    } = (0, r.cf)([_.Ay], () => {
        let e = _.Ay.getInputDeviceId(),
            t = _.Ay.getInputDevices(),
            i = c().find(t, t => {
                let {
                    id: i
                } = t;
                return i === e
            }),
            s = _.Ay.getOutputDeviceId(),
            n = _.Ay.getOutputDevices(),
            l = c().find(n, e => {
                let {
                    id: t
                } = e;
                return t === s
            }),
            {
                threshold: a,
                autoThreshold: o
            } = _.Ay.getModeOptions(),
            r = _.Ay.getInputVolume(),
            u = _.Ay.getOutputVolume();
        return {
            inputDevice: i,
            outputDevice: l,
            threshold: a,
            autoThreshold: o,
            inputVolume: r,
            outputVolume: u,
            inputMode: _.Ay.getMode(),
            isDeafened: _.Ay.isSelfDeaf()
        }
    }), h = (0, r.bG)([x.A], () => x.A.isConnected()), {
        ref: m,
        width: p
    } = (0, v.Ay)();
    return (0, s.jsx)(S, {
        isVoiceConnected: h,
        inputVolume: a,
        outputVolume: o,
        inputMode: u,
        isDeafened: d,
        vadThreshold: n,
        vadAutoThreshold: l,
        inputDeviceName: t?.name ?? "",
        outputDeviceName: i?.name ?? "",
        measureButtonRef: m,
        buttonMinWidth: p,
        ...e
    })
}