/** chunk id: 17143, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A,
    V: () => g.V
}), n(228524), n(896048);
var i = n(627968),
    r = n(64700),
    o = n(503698),
    s = n.n(o),
    l = n(735438),
    c = n.n(l),
    a = n(311907),
    u = n(205693),
    p = n(451988),
    d = n(990078),
    h = n(397927),
    m = n(827343),
    f = n(765671),
    g = n(123902),
    v = n(430452),
    b = n(383501),
    O = n(954571),
    y = n(652215),
    j = n(985018),
    _ = n(265891);

function D(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class x extends r.PureComponent {
    componentDidMount() {
        this._initTimeout.start(1e3, this.setupVoiceActivity)
    }
    componentWillUnmount() {
        this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), v.A.getMediaEngine().removeListener(u.bg.VoiceActivity, this.handleVoiceActivity)
    }
    _micTestStart() {
        let {
            isVoiceConnected: e,
            inputDeviceName: t,
            inputVolume: n,
            outputDeviceName: i,
            outputVolume: r,
            inputMode: o,
            vadAutoThreshold: s,
            vadThreshold: l,
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
            input_sensitivity_is_automatic: s,
            input_sensitivity_threshold: Math.round(l),
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
            className: _.Qe,
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
            buttonStop: l = "",
            buttonVariant: c = "secondary",
            isDeafened: a,
            buttonMinWidth: u,
            measureButtonRef: p,
            meterOnly: m = !1,
            containerClassName: f
        } = this.props, {
            isMicTesting: v,
            volume: b
        } = this.state, O = e && !v ? j.intl.string(j.t["9viE2A"]) : null;
        v && e && !a && this._micTestStop();
        let y = l.length >= o.length ? l : o;
        return (0, i.jsx)("div", {
            className: s()(_.kL, f),
            children: (0, i.jsx)(h.D0$, {
                label: null != t ? t : void 0,
                hideLabel: m,
                description: m ? null : n,
                children: (0, i.jsxs)("div", {
                    className: _.ak,
                    children: [!m && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)("div", {
                            className: _.km,
                            "aria-hidden": !0,
                            children: [(0, i.jsx)(h.Button, {
                                buttonRef: p,
                                size: "sm",
                                variant: c,
                                text: y
                            }), (0, i.jsx)("div", {
                                className: _.qB
                            })]
                        }), (0, i.jsx)(d.m, {
                            text: O,
                            children: (0, i.jsx)("div", {
                                className: _._o,
                                style: null != u ? {
                                    minWidth: u
                                } : {
                                    visibility: "hidden"
                                },
                                children: (0, i.jsx)(h.Button, {
                                    size: "sm",
                                    variant: c,
                                    text: v ? l : o,
                                    onClick: this.handleToggleMicTest,
                                    fullWidth: !0
                                })
                            })
                        })]
                    }), (0, i.jsx)(g.A, {
                        progress: v || m ? b + 100 : 0,
                        notchBackground: r,
                        notchClassName: this.props.notchClassName,
                        children: this.renderCaption()
                    })]
                })
            })
        })
    }
    constructor(...e) {
        super(...e), D(this, "_initTimeout", new p.Ep), D(this, "_silenceTimeout", new p.Ep), D(this, "_messageTimeout", new p.Ep), D(this, "_micTestStartTime", void 0), D(this, "state", {
            volume: -100,
            isMicTesting: !1,
            isDetectingInput: !0,
            didDeafenUser: !1
        }), D(this, "setupVoiceActivity", () => {
            v.A.getMediaEngine().on(u.bg.VoiceActivity, this.handleVoiceActivity)
        }), D(this, "handleVoiceActivity", e => {
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
        }), D(this, "handleToggleMicTest", () => {
            this.state.isMicTesting ? this._micTestStop() : this._micTestStart()
        })
    }
}

function A(e) {
    var t, n;
    let {
        inputDevice: r,
        outputDevice: o,
        threshold: s,
        autoThreshold: l,
        inputVolume: u,
        outputVolume: p,
        inputMode: d,
        isDeafened: h
    } = (0, a.cf)([v.A], () => {
        let e = v.A.getInputDeviceId(),
            t = v.A.getInputDevices(),
            n = c().find(t, t => {
                let {
                    id: n
                } = t;
                return n === e
            }),
            i = v.A.getOutputDeviceId(),
            r = v.A.getOutputDevices(),
            o = c().find(r, e => {
                let {
                    id: t
                } = e;
                return t === i
            }),
            {
                threshold: s,
                autoThreshold: l
            } = v.A.getModeOptions(),
            a = v.A.getInputVolume(),
            u = v.A.getOutputVolume();
        return {
            inputDevice: n,
            outputDevice: o,
            threshold: s,
            autoThreshold: l,
            inputVolume: a,
            outputVolume: u,
            inputMode: v.A.getMode(),
            isDeafened: v.A.isSelfDeaf()
        }
    }), m = (0, a.bG)([b.A], () => b.A.isConnected()), {
        ref: g,
        width: O
    } = (0, f.Ay)();
    return (0, i.jsx)(x, function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
                D(e, t, n[t])
            })
        }
        return e
    }({
        isVoiceConnected: m,
        inputVolume: u,
        outputVolume: p,
        inputMode: d,
        isDeafened: h,
        vadThreshold: s,
        vadAutoThreshold: l,
        inputDeviceName: null != (t = null == r ? void 0 : r.name) ? t : "",
        outputDeviceName: null != (n = null == o ? void 0 : o.name) ? n : "",
        measureButtonRef: g,
        buttonMinWidth: O
    }, e))
}