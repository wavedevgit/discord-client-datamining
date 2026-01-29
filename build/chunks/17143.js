/** Chunk was on 6500 **/
/** chunk id: 17143, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => I,
    V: () => _.V
}), n(228524), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(735438),
    o = n.n(s),
    c = n(311907),
    u = n(205693),
    d = n(451988),
    p = n(990078),
    f = n(397927),
    m = n(827343),
    g = n(765671),
    _ = n(123902),
    y = n(430452),
    A = n(383501),
    b = n(954571),
    h = n(652215),
    v = n(985018),
    O = n(265891);

function j(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class S extends i.PureComponent {
    componentDidMount() {
        this._initTimeout.start(1e3, this.setupVoiceActivity)
    }
    componentWillUnmount() {
        this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), y.A.getMediaEngine().removeListener(u.bg.VoiceActivity, this.handleVoiceActivity)
    }
    _micTestStart() {
        let {
            isVoiceConnected: e,
            inputDeviceName: t,
            inputVolume: n,
            outputDeviceName: r,
            outputVolume: i,
            inputMode: l,
            vadAutoThreshold: a,
            vadThreshold: s,
            location: o,
            isDeafened: c
        } = this.props, u = !1;
        e && !c && (m.A.toggleSelfDeaf(), u = !0), m.A.setLoopback("mic_test", !0), this._micTestStartTime = Date.now(), this.setState({
            isMicTesting: !0,
            isDetectingInput: !0,
            didDeafenUser: u
        }), b.default.track(h.HAw.MIC_TESTING_STARTED, {
            input_device_name: t,
            input_device_volume: n,
            output_device_name: r,
            output_device_volume: i,
            input_mode: l,
            input_sensitivity_is_automatic: a,
            input_sensitivity_threshold: Math.round(s),
            location: o
        })
    }
    _micTestStop() {
        let {
            didDeafenUser: e,
            isMicTesting: t
        } = this.state, {
            isVoiceConnected: n,
            isDeafened: r
        } = this.props;
        t && (n && r && e && m.A.toggleSelfDeaf(), m.A.setLoopback("mic_test", !1), this.setState({
            isMicTesting: !1,
            didDeafenUser: !1
        }), null != this._micTestStartTime && b.default.track(h.HAw.MIC_TESTING_STOPPED, {
            testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1e3)
        }))
    }
    renderCaption() {
        let {
            captionVoice: e,
            captionNoVoice: t
        } = this.props, {
            isMicTesting: n,
            isDetectingInput: i
        } = this.state;
        return (0, r.jsx)(f.Text, {
            variant: "text-xs/normal",
            color: "text-subtle",
            className: O.Qe,
            children: n ? i ? e : t : null
        })
    }
    render() {
        let {
            isVoiceConnected: e,
            title: t,
            description: n,
            notchBackground: i,
            buttonTest: l = "",
            buttonStop: s = "",
            buttonVariant: o = "secondary",
            isDeafened: c,
            buttonMinWidth: u,
            measureButtonRef: d,
            meterOnly: m = !1,
            containerClassName: g
        } = this.props, {
            isMicTesting: y,
            volume: A
        } = this.state, b = e && !y ? v.intl.string(v.t["9viE2A"]) : null;
        y && e && !c && this._micTestStop();
        let h = s.length >= l.length ? s : l;
        return (0, r.jsx)("div", {
            className: a()(O.kL, g),
            children: (0, r.jsx)(f.D0$, {
                label: null != t ? t : void 0,
                hideLabel: m,
                description: m ? null : n,
                children: (0, r.jsxs)("div", {
                    className: O.ak,
                    children: [!m && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)("div", {
                            className: O.km,
                            "aria-hidden": !0,
                            children: [(0, r.jsx)(f.Button, {
                                buttonRef: d,
                                size: "sm",
                                variant: o,
                                text: h
                            }), (0, r.jsx)("div", {
                                className: O.qB
                            })]
                        }), (0, r.jsx)(p.m, {
                            text: b,
                            children: (0, r.jsx)("div", {
                                className: O._o,
                                style: null != u ? {
                                    minWidth: u
                                } : {
                                    visibility: "hidden"
                                },
                                children: (0, r.jsx)(f.Button, {
                                    size: "sm",
                                    variant: o,
                                    text: y ? s : l,
                                    onClick: this.handleToggleMicTest,
                                    fullWidth: !0
                                })
                            })
                        })]
                    }), (0, r.jsx)(_.A, {
                        progress: y || m ? A + 100 : 0,
                        notchBackground: i,
                        notchClassName: this.props.notchClassName,
                        children: this.renderCaption()
                    })]
                })
            })
        })
    }
    constructor(...e) {
        super(...e), j(this, "_initTimeout", new d.Ep), j(this, "_silenceTimeout", new d.Ep), j(this, "_messageTimeout", new d.Ep), j(this, "_micTestStartTime", void 0), j(this, "state", {
            volume: -100,
            isMicTesting: !1,
            isDetectingInput: !0,
            didDeafenUser: !1
        }), j(this, "setupVoiceActivity", () => {
            y.A.getMediaEngine().on(u.bg.VoiceActivity, this.handleVoiceActivity)
        }), j(this, "handleVoiceActivity", e => {
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
        }), j(this, "handleToggleMicTest", () => {
            this.state.isMicTesting ? this._micTestStop() : this._micTestStart()
        })
    }
}

function I(e) {
    var t, n;
    let {
        inputDevice: i,
        outputDevice: l,
        threshold: a,
        autoThreshold: s,
        inputVolume: u,
        outputVolume: d,
        inputMode: p,
        isDeafened: f
    } = (0, c.cf)([y.A], () => {
        let e = y.A.getInputDeviceId(),
            t = y.A.getInputDevices(),
            n = o().find(t, t => {
                let {
                    id: n
                } = t;
                return n === e
            }),
            r = y.A.getOutputDeviceId(),
            i = y.A.getOutputDevices(),
            l = o().find(i, e => {
                let {
                    id: t
                } = e;
                return t === r
            }),
            {
                threshold: a,
                autoThreshold: s
            } = y.A.getModeOptions(),
            c = y.A.getInputVolume(),
            u = y.A.getOutputVolume();
        return {
            inputDevice: n,
            outputDevice: l,
            threshold: a,
            autoThreshold: s,
            inputVolume: c,
            outputVolume: u,
            inputMode: y.A.getMode(),
            isDeafened: y.A.isSelfDeaf()
        }
    }), m = (0, c.bG)([A.A], () => A.A.isConnected()), {
        ref: _,
        width: b
    } = (0, g.Ay)();
    return (0, r.jsx)(S, function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                j(e, t, n[t])
            })
        }
        return e
    }({
        isVoiceConnected: m,
        inputVolume: u,
        outputVolume: d,
        inputMode: p,
        isDeafened: f,
        vadThreshold: a,
        vadAutoThreshold: s,
        inputDeviceName: null != (t = null == i ? void 0 : i.name) ? t : "",
        outputDeviceName: null != (n = null == l ? void 0 : l.name) ? n : "",
        measureButtonRef: _,
        buttonMinWidth: b
    }, e))
}