/** chunk id: 746793 params = (module,exports,require) **/
n.d(t, {
    A: () => O
}), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(735438),
    o = n.n(s),
    d = n(311907),
    c = n(506774),
    u = n(397927),
    A = n(785796),
    h = n(775602),
    _ = n(142120),
    m = n(552122),
    p = n(400492),
    g = n(312671),
    E = n(210714),
    I = n(773669),
    f = n(437959),
    C = n(828184),
    T = n(723702),
    N = n(837921),
    S = n(902811),
    v = n(652215),
    x = n(985018),
    y = n(939015);
class b extends r.PureComponent {
    videoRef = null;
    _noProblemsTimeout = null;
    _problemsTimeout = null;
    _connectedSound = this.createSound();
    _loadingText = (function() {
        let e = [x.intl.string(x.t.Ex79K6), x.intl.string(x.t["+v5zsT"]), x.intl.string(x.t["RLx6+Y"]), x.intl.string(x.t.Q1PZkN), x.intl.string(x.t.x7sfVg), x.intl.format(x.t.PHuQsQ, {
            tabHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "tab",
                className: y.P
            }, t)
        }), x.intl.string(x.t.UorX4T), x.intl.string(x.t["il/GZt"]), x.intl.string(x.t.HKBJvw), x.intl.format(x.t.FVVp79, {
            F6Hook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "f6",
                className: y.P
            }, t),
            tabHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "tab",
                className: y.P
            }, t)
        }), x.intl.string(x.t["7Y1hFH"]), x.intl.string(x.t.UcCW71), x.intl.string(x.t.E5Ghfc), x.intl.string(x.t.bANqo8), x.intl.string(x.t.yOEVDr), x.intl.string(x.t["u0Ra/G"]), x.intl.string(x.t.un4cQ7), x.intl.string(x.t["2cyYx1"]), x.intl.string(x.t.KCmze1), x.intl.string(x.t.I98MEE), x.intl.format(x.t.c0YCIx, {}), x.intl.string(x.t.z8AvIN), x.intl.string(x.t.IjX3P1), x.intl.string(x.t.lg3Ckc), x.intl.string(x.t["4GaLhY"]), x.intl.string(x.t.qHKbUw), x.intl.string(x.t.mJxKDw), x.intl.string(x.t.iiQBXF), x.intl.string(x.t.YPD46Q), x.intl.string(x.t.O8Bpga), x.intl.string(x.t.xzFwfi), x.intl.string(x.t["4G3fsX"]), x.intl.string(x.t["/jPyKC"]), x.intl.string(x.t["8x7D5c"]), x.intl.string(x.t.G6Q8H3), x.intl.string(x.t["9Cx+xL"]), x.intl.string(x.t.WsZ8dW), x.intl.string(x.t.btoe7M), x.intl.string(x.t.E6Y0j7), x.intl.string(x.t["7KZ81/"]), x.intl.string(x.t.hm7OKu), x.intl.string(x.t["H535i+"]), x.intl.string(x.t["08WJUR"]), x.intl.string(x.t.hhtfyi), x.intl.string(x.t.on980U), x.intl.string(x.t.AL6c01), x.intl.string(x.t.iLTeF6), x.intl.string(x.t.b3vSu7), x.intl.string(x.t.f8ao58), x.intl.format(x.t["1v1h8o"], {
            asterisks: "**"
        }), x.intl.format(x.t.MUlAVW, {
            quickSwitcherHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "mod+k",
                className: y.P
            }, t)
        }), x.intl.format(x.t.aes5VI, {
            markUnreadHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "alt+click",
                className: y.P
            }, t)
        }), x.intl.format(x.t.md9Svv, {
            markServerUnreadHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "shift+esc",
                className: y.P
            }, t)
        }), x.intl.format(x.t["X0Tu+u"], {
            navigateUnreadHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "shift+alt+up",
                className: y.P
            }, t),
            downHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "down",
                className: y.P
            }, t)
        }), x.intl.format(x.t.AkoeIY, {
            keyboardShortcutsHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "mod+/",
                className: y.P
            }, t)
        }), x.intl.format(x.t.P9sfAH, {
            messageNewlineHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "shift+return",
                className: y.P
            }, t)
        }), x.intl.format(x.t["3Ox33f"], {
            shiftHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "shift",
                className: y.P
            }, t)
        }), x.intl.format(x.t.enCV6b, {
            upHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "up",
                className: y.P
            }, t)
        })];
        return I.default.locale.startsWith("en-") && e.push(x.intl.string(x.t.dQ9Wqk)), e[o().random(e.length - 1)]
    })();
    _eventLoadingText = (function() {
        let e = m.A.getLoadingTips();
        if (null != e && e.length > 0) return e[o().random(e.length - 1)]
    })();
    constructor(e) {
        super(e);
        const {
            connected: t
        } = e;
        this.state = {
            ready: t,
            hide: t,
            problems: !1,
            shouldRender: !t
        }, this._connectedSound.volume = 1
    }
    createSound() {
        let {
            soundpack: e
        } = this.props, t = (0, p.aN)("discodo", e);
        return t.volume = 1, t
    }
    componentDidMount() {
        this.setProblemsTimeout(), this.props.connected && (0, E.D)()
    }
    componentDidUpdate(e, t) {
        let {
            ready: n,
            hide: i,
            problems: r
        } = this.state, {
            connected: a,
            soundpack: l
        } = this.props, s = a && n && !i && !r;
        e.soundpack !== l && (this._connectedSound = this.createSound()), e.connected !== a || s ? (a && (0, E.D)(), a && null != this.videoRef && c.w.get(v.wqg) && this._connectedSound.play(), this.setState({
            problems: !1,
            hide: a
        })) : t.hide !== i ? (i ? this.clearProblemsTimeout() : this.setProblemsTimeout(), this.setState({
            shouldRender: !0
        }), setTimeout(() => this.setState({
            shouldRender: !i
        }), 200)) : t.problems !== r && r && A.A.checkIncidents()
    }
    componentWillUnmount() {
        this.clearProblemsTimeout()
    }
    handleReady = () => {
        this.setState({
            ready: !0
        }), (0, T.isDesktop)() && (N.Ay.send("UPDATED_QUOTES", ["Hold Tight — Loading Discord"]), N.Ay.send("UPDATE_OPEN_ON_STARTUP"))
    };
    setVideoRef = e => {
        this.videoRef = e
    };
    setProblemsTimeout = () => {
        null == this._problemsTimeout && (this._problemsTimeout = setTimeout(() => this.setState({
            problems: !0
        }), 1e4))
    };
    clearProblemsTimeout = () => {
        clearTimeout(this._problemsTimeout), this._problemsTimeout = null
    };
    render() {
        let {
            connected: e,
            incident: t
        } = this.props, {
            hide: n
        } = this.state;
        if (!this.state.shouldRender) return null;
        {
            let r = this._loadingText,
                a = null;
            return null != this._eventLoadingText && (r = this._eventLoadingText), null != t && (r = t.name, a = t.incident_updates[0].body), (0, i.jsxs)("div", {
                className: y.kL,
                "data-fade": n,
                style: {
                    "--connecting-container-fade-duration": "200ms",
                    "--connecting-content-fade-duration": "150ms"
                },
                children: [(0, i.jsxs)("div", {
                    className: y.Qs,
                    children: [(0, i.jsx)(S.A, {
                        autoPlay: !0,
                        loop: !e,
                        setRef: this.setVideoRef,
                        onReady: this.handleReady,
                        className: l()(y.bE, this.state.ready ? y.Gc : "")
                    }), (0, i.jsxs)("div", {
                        className: y.Qq,
                        children: [null != t ? null : (0, i.jsx)("div", {
                            className: y.mu,
                            children: x.intl.string(x.t.v0R1Lh)
                        }), (0, i.jsx)("div", {
                            className: null != t ? y.DD : y.uN,
                            children: r
                        }), (0, i.jsx)("div", {
                            className: y.rf,
                            children: a
                        })]
                    })]
                }), (0, i.jsxs)("div", {
                    className: l()(y.Bk, {
                        [y.ly]: this.state.problems
                    }),
                    children: [(0, i.jsx)("div", {
                        className: y.u1,
                        children: x.intl.string(x.t.AG2zPM)
                    }), (0, i.jsxs)("div", {
                        children: [(0, i.jsxs)(u.MzZ, {
                            className: y.AR,
                            href: v.qF7.TWITTER_SUPPORT,
                            target: "_blank",
                            children: [(0, i.jsx)(u.p3p, {
                                size: "xs",
                                color: "currentColor",
                                className: y.Kk
                            }), x.intl.string(x.t.KlyTbj)]
                        }), (0, i.jsxs)(u.MzZ, {
                            className: y.gy,
                            href: v.qF7.STATUS,
                            target: "_blank",
                            children: [(0, i.jsx)(C.A, {
                                className: y.Kk
                            }), x.intl.string(x.t.AgXXyy)]
                        })]
                    })]
                })]
            })
        }
    }
}
let O = d.Ay.connectStores([_.A, f.A, g.A, h.A], () => ({
    isTryingToConnect: _.A.isTryingToConnect(),
    connected: _.A.isConnected(),
    incident: f.A.getIncident(),
    soundpack: g.A.getSoundpack(),
    reducedMotion: h.A.useReducedMotion
}))(e => {
    let {
        isTryingToConnect: t,
        connected: n,
        incident: r,
        soundpack: a,
        reducedMotion: l
    } = e;
    return t ? (0, i.jsx)(b, {
        reducedMotion: l,
        soundpack: a,
        connected: n,
        incident: r
    }) : null
})