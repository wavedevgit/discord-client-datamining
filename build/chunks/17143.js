/** chunk id: 17143, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => b,
    V: () => g.V
});
var n = i(627968),
    s = i(64700),
    l = i(503698),
    a = i.n(l),
    o = i(735438),
    r = i.n(o),
    c = i(311907),
    u = i(205693),
    d = i(451988),
    h = i(990078),
    m = i(397927),
    p = i(827343),
    v = i(765671),
    g = i(123902),
    A = i(430452),
    _ = i(383501),
    x = i(954571),
    T = i(652215),
    D = i(985018),
    f = i(265891);
class I extends s.PureComponent {
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
        A.Ay.getMediaEngine().on(u.bg.VoiceActivity, this.handleVoiceActivity)
    };
    componentWillUnmount() {
        this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), A.Ay.getMediaEngine().removeListener(u.bg.VoiceActivity, this.handleVoiceActivity)
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
            outputVolume: s,
            inputMode: l,
            vadAutoThreshold: a,
            vadThreshold: o,
            location: r,
            isDeafened: c
        } = this.props, u = !1;
        e && !c && (p.A.toggleSelfDeaf(), u = !0), p.A.setLoopback("mic_test", !0), this._micTestStartTime = Date.now(), this.setState({
            isMicTesting: !0,
            isDetectingInput: !0,
            didDeafenUser: u
        }), x.default.track(T.HAw.MIC_TESTING_STARTED, {
            input_device_name: t,
            input_device_volume: i,
            output_device_name: n,
            output_device_volume: s,
            input_mode: l,
            input_sensitivity_is_automatic: a,
            input_sensitivity_threshold: Math.round(o),
            location: r
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
        }), null != this._micTestStartTime && x.default.track(T.HAw.MIC_TESTING_STOPPED, {
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
            isDetectingInput: s
        } = this.state;
        return null == e && null == t ? null : (0, n.jsx)(m.Text, {
            variant: "text-xs/normal",
            color: "text-subtle",
            className: f.Qe,
            children: i ? s ? e : t : void 0
        })
    }
    render() {
        let {
            isVoiceConnected: e,
            title: t,
            description: i,
            notchBackground: s,
            buttonTest: l = "",
            buttonStop: o = "",
            buttonVariant: r = "secondary",
            size: c = "sm",
            isDeafened: u,
            buttonMinWidth: d,
            measureButtonRef: p,
            meterOnly: v = !1,
            containerClassName: A,
            helpText: _
        } = this.props, {
            isMicTesting: x,
            volume: T,
            isDetectingInput: I
        } = this.state, b = e && !x ? D.intl.string(D.t["9viE2A"]) : null;
        x && e && !u && this._micTestStop();
        let C = o.length >= l.length ? o : l;
        return (0, n.jsxs)("div", {
            className: a()(f.kL, A),
            children: [(0, n.jsx)(m.D0$, {
                label: t ?? void 0,
                hideLabel: v,
                description: v ? null : i,
                children: (0, n.jsxs)("div", {
                    className: a()(f.ak, {
                        [f.mi]: v,
                        [f.EX]: "sm" === c
                    }),
                    children: [!v && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: f.km,
                            "aria-hidden": !0,
                            children: (0, n.jsx)(m.Button, {
                                buttonRef: p,
                                size: c,
                                variant: r,
                                text: C
                            })
                        }), (0, n.jsx)(h.m, {
                            text: b,
                            children: (0, n.jsx)("div", {
                                style: null != d ? {
                                    minWidth: d
                                } : {
                                    visibility: "hidden"
                                },
                                children: (0, n.jsx)(m.Button, {
                                    size: c,
                                    variant: r,
                                    text: x ? o : l,
                                    onClick: this.handleToggleMicTest,
                                    fullWidth: !0
                                })
                            })
                        })]
                    }), (0, n.jsx)(g.A, {
                        progress: x || v ? T + 100 : 0,
                        notchBackground: s,
                        notchClassName: this.props.notchClassName,
                        size: c
                    }), this.renderCaption()]
                })
            }), null != _ && (0, n.jsx)(m.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                style: {
                    visibility: x && !I ? "hidden" : "visible"
                },
                children: _
            })]
        })
    }
}

function b(e) {
    let {
        inputDevice: t,
        outputDevice: i,
        threshold: s,
        autoThreshold: l,
        inputVolume: a,
        outputVolume: o,
        inputMode: u,
        isDeafened: d
    } = (0, c.cf)([A.Ay], () => {
        let e = A.Ay.getInputDeviceId(),
            t = A.Ay.getInputDevices(),
            i = r().find(t, t => {
                let {
                    id: i
                } = t;
                return i === e
            }),
            n = A.Ay.getOutputDeviceId(),
            s = A.Ay.getOutputDevices(),
            l = r().find(s, e => {
                let {
                    id: t
                } = e;
                return t === n
            }),
            {
                threshold: a,
                autoThreshold: o
            } = A.Ay.getModeOptions(),
            c = A.Ay.getInputVolume(),
            u = A.Ay.getOutputVolume();
        return {
            inputDevice: i,
            outputDevice: l,
            threshold: a,
            autoThreshold: o,
            inputVolume: c,
            outputVolume: u,
            inputMode: A.Ay.getMode(),
            isDeafened: A.Ay.isSelfDeaf()
        }
    }), h = (0, c.bG)([_.A], () => _.A.isConnected()), {
        ref: m,
        width: p
    } = (0, v.Ay)();
    return (0, n.jsx)(I, {
        isVoiceConnected: h,
        inputVolume: a,
        outputVolume: o,
        inputMode: u,
        isDeafened: d,
        vadThreshold: s,
        vadAutoThreshold: l,
        inputDeviceName: t?.name ?? "",
        outputDeviceName: i?.name ?? "",
        measureButtonRef: m,
        buttonMinWidth: p,
        ...e
    })
}