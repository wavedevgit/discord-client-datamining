/** chunk id: 17143, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A,
    V: () => v.V
}), n(228524), n(896048);
var i = n(627968),
    r = n(64700),
    o = n(503698),
    l = n.n(o),
    s = n(735438),
    c = n.n(s),
    a = n(311907),
    u = n(205693),
    d = n(451988),
    p = n(990078),
    h = n(397927),
    m = n(827343),
    f = n(765671),
    v = n(123902),
    g = n(430452),
    b = n(383501),
    O = n(954571),
    y = n(652215),
    j = n(985018),
    x = n(265891);

function w(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class _ extends r.PureComponent {
    componentDidMount() {
        this._initTimeout.start(1e3, this.setupVoiceActivity)
    }
    componentWillUnmount() {
        this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), g.A.getMediaEngine().removeListener(u.bg.VoiceActivity, this.handleVoiceActivity)
    }
    _micTestStart() {
        let {
            isVoiceConnected: e,
            inputDeviceName: t,
            inputVolume: n,
            outputDeviceName: i,
            outputVolume: r,
            inputMode: o,
            vadAutoThreshold: l,
            vadThreshold: s,
            location: c,
            isDeafened: a
        } = this.props, u = !1;
        e && !a && (m.A.toggleSelfDeaf(), u = !0), m.A.setLoopback("mic_test", !0), this._micTestStartTime = Date.now(), this.setState({
            isMicTesting: !0,
            isDetectingInput: !0,
            didDeafenUser: u
        }), O.default.track(y.HAw.MIC_TESTING_STARTED, {
            input_device_name: t,
            input_device_volume: n,
            output_device_name: i,
            output_device_volume: r,
            input_mode: o,
            input_sensitivity_is_automatic: l,
            input_sensitivity_threshold: Math.round(s),
            location: c
        })
    }
    _micTestStop() {
        let {
            didDeafenUser: e,
            isMicTesting: t
        } = this.state, {
            isVoiceConnected: n,
            isDeafened: i
        } = this.props;
        t && (n && i && e && m.A.toggleSelfDeaf(), m.A.setLoopback("mic_test", !1), this.setState({
            isMicTesting: !1,
            didDeafenUser: !1
        }), null != this._micTestStartTime && O.default.track(y.HAw.MIC_TESTING_STOPPED, {
            testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1e3)
        }))
    }
    renderCaption() {
        let {
            captionVoice: e,
            captionNoVoice: t
        } = this.props, {
            isMicTesting: n,
            isDetectingInput: r
        } = this.state;
        return (0, i.jsx)(h.Text, {
            variant: "text-xs/normal",
            color: "text-subtle",
            className: x.Qe,
            children: n ? r ? e : t : null
        })
    }
    render() {
        let {
            isVoiceConnected: e,
            title: t,
            description: n,
            notchBackground: r,
            buttonTest: o = "",
            buttonStop: s = "",
            buttonVariant: c = "secondary",
            isDeafened: a,
            buttonMinWidth: u,
            measureButtonRef: d,
            meterOnly: m = !1,
            containerClassName: f
        } = this.props, {
            isMicTesting: g,
            volume: b
        } = this.state, O = e && !g ? j.intl.string(j.t["9viE2A"]) : null;
        g && e && !a && this._micTestStop();
        let y = s.length >= o.length ? s : o;
        return (0, i.jsx)("div", {
            className: l()(x.kL, f),
            children: (0, i.jsx)(h.D0$, {
                label: null != t ? t : void 0,
                hideLabel: m,
                description: m ? null : n,
                children: (0, i.jsxs)("div", {
                    className: x.ak,
                    children: [!m && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)("div", {
                            className: x.km,
                            "aria-hidden": !0,
                            children: [(0, i.jsx)(h.Button, {
                                buttonRef: d,
                                size: "sm",
                                variant: c,
                                text: y
                            }), (0, i.jsx)("div", {
                                className: x.qB
                            })]
                        }), (0, i.jsx)(p.m, {
                            text: O,
                            children: (0, i.jsx)("div", {
                                className: x._o,
                                style: null != u ? {
                                    minWidth: u
                                } : {
                                    visibility: "hidden"
                                },
                                children: (0, i.jsx)(h.Button, {
                                    size: "sm",
                                    variant: c,
                                    text: g ? s : o,
                                    onClick: this.handleToggleMicTest,
                                    fullWidth: !0
                                })
                            })
                        })]
                    }), (0, i.jsx)(v.A, {
                        progress: g || m ? b + 100 : 0,
                        notchBackground: r,
                        notchClassName: this.props.notchClassName,
                        children: this.renderCaption()
                    })]
                })
            })
        })
    }
    constructor(...e) {
        super(...e), w(this, "_initTimeout", new d.Ep), w(this, "_silenceTimeout", new d.Ep), w(this, "_messageTimeout", new d.Ep), w(this, "_micTestStartTime", void 0), w(this, "state", {
            volume: -100,
            isMicTesting: !1,
            isDetectingInput: !0,
            didDeafenUser: !1
        }), w(this, "setupVoiceActivity", () => {
            g.A.getMediaEngine().on(u.bg.VoiceActivity, this.handleVoiceActivity)
        }), w(this, "handleVoiceActivity", e => {
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
        }), w(this, "handleToggleMicTest", () => {
            this.state.isMicTesting ? this._micTestStop() : this._micTestStart()
        })
    }
}

function A(e) {
    var t, n;
    let {
        inputDevice: r,
        outputDevice: o,
        threshold: l,
        autoThreshold: s,
        inputVolume: u,
        outputVolume: d,
        inputMode: p,
        isDeafened: h
    } = (0, a.cf)([g.A], () => {
        let e = g.A.getInputDeviceId(),
            t = g.A.getInputDevices(),
            n = c().find(t, t => {
                let {
                    id: n
                } = t;
                return n === e
            }),
            i = g.A.getOutputDeviceId(),
            r = g.A.getOutputDevices(),
            o = c().find(r, e => {
                let {
                    id: t
                } = e;
                return t === i
            }),
            {
                threshold: l,
                autoThreshold: s
            } = g.A.getModeOptions(),
            a = g.A.getInputVolume(),
            u = g.A.getOutputVolume();
        return {
            inputDevice: n,
            outputDevice: o,
            threshold: l,
            autoThreshold: s,
            inputVolume: a,
            outputVolume: u,
            inputMode: g.A.getMode(),
            isDeafened: g.A.isSelfDeaf()
        }
    }), m = (0, a.bG)([b.A], () => b.A.isConnected()), {
        ref: v,
        width: O
    } = (0, f.Ay)();
    return (0, i.jsx)(_, function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
                w(e, t, n[t])
            })
        }
        return e
    }({
        isVoiceConnected: m,
        inputVolume: u,
        outputVolume: d,
        inputMode: p,
        isDeafened: h,
        vadThreshold: l,
        vadAutoThreshold: s,
        inputDeviceName: null != (t = null == r ? void 0 : r.name) ? t : "",
        outputDeviceName: null != (n = null == o ? void 0 : o.name) ? n : "",
        measureButtonRef: v,
        buttonMinWidth: O
    }, e))
}