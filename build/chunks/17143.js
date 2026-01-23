/** Chunk was on web.js **/
/** chunk id: 17143, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => N,
    V: () => m.V
}), n(228524), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    c = n(311907),
    u = n(205693),
    d = n(451988),
    f = n(990078),
    p = n(397927),
    _ = n(827343),
    h = n(765671),
    m = n(123902),
    g = n(430452),
    E = n(383501),
    y = n(954571),
    b = n(652215),
    O = n(985018),
    v = n(265891);

function A(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            A(e, t, n[t])
        })
    }
    return e
}
let S = 2e3,
    T = -100;
class C extends i.PureComponent {
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
            outputDeviceName: r,
            outputVolume: i,
            inputMode: a,
            vadAutoThreshold: s,
            vadThreshold: o,
            location: l,
            isDeafened: c
        } = this.props, u = !1;
        e && !c && (_.A.toggleSelfDeaf(), u = !0), _.A.setLoopback("mic_test", !0), this._micTestStartTime = Date.now(), this.setState({
            isMicTesting: !0,
            isDetectingInput: !0,
            didDeafenUser: u
        }), y.default.track(b.HAw.MIC_TESTING_STARTED, {
            input_device_name: t,
            input_device_volume: n,
            output_device_name: r,
            output_device_volume: i,
            input_mode: a,
            input_sensitivity_is_automatic: s,
            input_sensitivity_threshold: Math.round(o),
            location: l
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
        t && (n && r && e && _.A.toggleSelfDeaf(), _.A.setLoopback("mic_test", !1), this.setState({
            isMicTesting: !1,
            didDeafenUser: !1
        }), null != this._micTestStartTime && y.default.track(b.HAw.MIC_TESTING_STOPPED, {
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
        return (0, r.jsx)(p.Text, {
            variant: "text-xs/normal",
            color: "text-subtle",
            className: v.Qe,
            children: n ? i ? e : t : null
        })
    }
    render() {
        let {
            isVoiceConnected: e,
            title: t,
            description: n,
            notchBackground: i,
            buttonTest: a = "",
            buttonStop: o = "",
            buttonVariant: l = "secondary",
            isDeafened: c,
            buttonMinWidth: u,
            measureButtonRef: d,
            meterOnly: _ = !1,
            containerClassName: h
        } = this.props, {
            isMicTesting: g,
            volume: E
        } = this.state, y = e && !g ? O.intl.string(O.t["9viE2A"]) : null;
        g && e && !c && this._micTestStop();
        let b = o.length >= a.length ? o : a;
        return (0, r.jsx)("div", {
            className: s()(v.kL, h),
            children: (0, r.jsx)(p.D0$, {
                label: null != t ? t : void 0,
                hideLabel: _,
                description: _ ? null : n,
                children: (0, r.jsxs)("div", {
                    className: v.ak,
                    children: [!_ && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)("div", {
                            className: v.km,
                            "aria-hidden": !0,
                            children: [(0, r.jsx)(p.Button, {
                                buttonRef: d,
                                size: "sm",
                                variant: l,
                                text: b
                            }), (0, r.jsx)("div", {
                                className: v.qB
                            })]
                        }), (0, r.jsx)(f.m, {
                            text: y,
                            children: (0, r.jsx)("div", {
                                className: v._o,
                                style: null != u ? {
                                    minWidth: u
                                } : {
                                    visibility: "hidden"
                                },
                                children: (0, r.jsx)(p.Button, {
                                    size: "sm",
                                    variant: l,
                                    text: g ? o : a,
                                    onClick: this.handleToggleMicTest,
                                    fullWidth: !0
                                })
                            })
                        })]
                    }), (0, r.jsx)(m.A, {
                        progress: g || _ ? E + 100 : 0,
                        notchBackground: i,
                        notchClassName: this.props.notchClassName,
                        children: this.renderCaption()
                    })]
                })
            })
        })
    }
    constructor(...e) {
        super(...e), A(this, "_initTimeout", new d.Ep), A(this, "_silenceTimeout", new d.Ep), A(this, "_messageTimeout", new d.Ep), A(this, "_micTestStartTime", void 0), A(this, "state", {
            volume: T,
            isMicTesting: !1,
            isDetectingInput: !0,
            didDeafenUser: !1
        }), A(this, "setupVoiceActivity", () => {
            g.A.getMediaEngine().on(u.bg.VoiceActivity, this.handleVoiceActivity)
        }), A(this, "handleVoiceActivity", e => {
            let {
                isMicTesting: t
            } = this.state;
            if (t && e <= T) {
                this._silenceTimeout.isStarted() || this._silenceTimeout.start(S, () => {
                    this.setState({
                        isDetectingInput: !1
                    })
                }), this.setState({
                    volume: T
                });
                return
            }
            this._silenceTimeout.stop(), this.setState({
                volume: e,
                isDetectingInput: !0
            })
        }), A(this, "handleToggleMicTest", () => {
            this.state.isMicTesting ? this._micTestStop() : this._micTestStart()
        })
    }
}

function N(e) {
    var t, n;
    let {
        inputDevice: i,
        outputDevice: a,
        threshold: s,
        autoThreshold: o,
        inputVolume: u,
        outputVolume: d,
        inputMode: f,
        isDeafened: p
    } = (0, c.cf)([g.A], () => {
        let e = g.A.getInputDeviceId(),
            t = g.A.getInputDevices(),
            n = l().find(t, t => {
                let {
                    id: n
                } = t;
                return n === e
            }),
            r = g.A.getOutputDeviceId(),
            i = g.A.getOutputDevices(),
            a = l().find(i, e => {
                let {
                    id: t
                } = e;
                return t === r
            }),
            {
                threshold: s,
                autoThreshold: o
            } = g.A.getModeOptions(),
            c = g.A.getInputVolume(),
            u = g.A.getOutputVolume();
        return {
            inputDevice: n,
            outputDevice: a,
            threshold: s,
            autoThreshold: o,
            inputVolume: c,
            outputVolume: u,
            inputMode: g.A.getMode(),
            isDeafened: g.A.isSelfDeaf()
        }
    }), _ = (0, c.bG)([E.A], () => E.A.isConnected()), {
        ref: m,
        width: y
    } = (0, h.Ay)();
    return (0, r.jsx)(C, I({
        isVoiceConnected: _,
        inputVolume: u,
        outputVolume: d,
        inputMode: f,
        isDeafened: p,
        vadThreshold: s,
        vadAutoThreshold: o,
        inputDeviceName: null != (t = null == i ? void 0 : i.name) ? t : "",
        outputDeviceName: null != (n = null == a ? void 0 : a.name) ? n : "",
        measureButtonRef: m,
        buttonMinWidth: y
    }, e))
}