/** chunk id: 746793 params = (module,exports,require) **/
n.d(t, {
    A: () => O
}), n(321073);
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(735438),
    o = n.n(s),
    d = n(311907),
    c = n(506774),
    u = n(397927),
    A = n(785796),
    h = n(775602),
    _ = n(142120),
    m = n(552122),
    g = n(400492),
    p = n(312671),
    E = n(210714),
    I = n(773669),
    f = n(437959),
    C = n(828184),
    T = n(723702),
    N = n(837921),
    S = n(902811),
    x = n(652215),
    y = n(985018),
    v = n(55607);
class b extends a.PureComponent {
    videoRef = null;
    _noProblemsTimeout = null;
    _problemsTimeout = null;
    _connectedSound = this.createSound();
    _loadingText = (function() {
        let e = [y.intl.string(y.t.Ex79K6), y.intl.string(y.t["+v5zsT"]), y.intl.string(y.t["RLx6+Y"]), y.intl.string(y.t.Q1PZkN), y.intl.string(y.t.x7sfVg), y.intl.format(y.t.PHuQsQ, {
            tabHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "tab",
                className: v.P
            }, t)
        }), y.intl.string(y.t.UorX4T), y.intl.string(y.t["il/GZt"]), y.intl.string(y.t.HKBJvw), y.intl.format(y.t.FVVp79, {
            F6Hook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "f6",
                className: v.P
            }, t),
            tabHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "tab",
                className: v.P
            }, t)
        }), y.intl.string(y.t["7Y1hFH"]), y.intl.string(y.t.UcCW71), y.intl.string(y.t.E5Ghfc), y.intl.string(y.t.bANqo8), y.intl.string(y.t.yOEVDr), y.intl.string(y.t["u0Ra/G"]), y.intl.string(y.t.un4cQ7), y.intl.string(y.t["2cyYx1"]), y.intl.string(y.t.KCmze1), y.intl.string(y.t.I98MEE), y.intl.format(y.t.c0YCIx, {}), y.intl.string(y.t.z8AvIN), y.intl.string(y.t.IjX3P1), y.intl.string(y.t.lg3Ckc), y.intl.string(y.t["4GaLhY"]), y.intl.string(y.t.qHKbUw), y.intl.string(y.t.mJxKDw), y.intl.string(y.t.iiQBXF), y.intl.string(y.t.YPD46Q), y.intl.string(y.t.O8Bpga), y.intl.string(y.t.xzFwfi), y.intl.string(y.t["4G3fsX"]), y.intl.string(y.t["/jPyKC"]), y.intl.string(y.t["8x7D5c"]), y.intl.string(y.t.G6Q8H3), y.intl.string(y.t["9Cx+xL"]), y.intl.string(y.t.WsZ8dW), y.intl.string(y.t.btoe7M), y.intl.string(y.t.E6Y0j7), y.intl.string(y.t["7KZ81/"]), y.intl.string(y.t.hm7OKu), y.intl.string(y.t["H535i+"]), y.intl.string(y.t["08WJUR"]), y.intl.string(y.t.hhtfyi), y.intl.string(y.t.on980U), y.intl.string(y.t.AL6c01), y.intl.string(y.t.iLTeF6), y.intl.string(y.t.b3vSu7), y.intl.string(y.t.f8ao58), y.intl.format(y.t["1v1h8o"], {
            asterisks: "**"
        }), y.intl.format(y.t.MUlAVW, {
            quickSwitcherHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "mod+k",
                className: v.P
            }, t)
        }), y.intl.format(y.t.aes5VI, {
            markUnreadHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "alt+click",
                className: v.P
            }, t)
        }), y.intl.format(y.t.md9Svv, {
            markServerUnreadHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "shift+esc",
                className: v.P
            }, t)
        }), y.intl.format(y.t["X0Tu+u"], {
            navigateUnreadHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "shift+alt+up",
                className: v.P
            }, t),
            downHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "down",
                className: v.P
            }, t)
        }), y.intl.format(y.t.AkoeIY, {
            keyboardShortcutsHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "mod+/",
                className: v.P
            }, t)
        }), y.intl.format(y.t.P9sfAH, {
            messageNewlineHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "shift+return",
                className: v.P
            }, t)
        }), y.intl.format(y.t["3Ox33f"], {
            shiftHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "shift",
                className: v.P
            }, t)
        }), y.intl.format(y.t.enCV6b, {
            upHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "up",
                className: v.P
            }, t)
        })];
        return I.default.locale.startsWith("en-") && e.push(y.intl.string(y.t.dQ9Wqk)), e[o().random(e.length - 1)]
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
        } = this.props, t = (0, g.aN)("discodo", e);
        return t.volume = 1, t
    }
    componentDidMount() {
        this.setProblemsTimeout(), this.props.connected && (0, E.D)()
    }
    componentDidUpdate(e, t) {
        let {
            ready: n,
            hide: i,
            problems: a
        } = this.state, {
            connected: r,
            soundpack: l
        } = this.props, s = r && n && !i && !a;
        e.soundpack !== l && (this._connectedSound = this.createSound()), e.connected !== r || s ? (r && (0, E.D)(), r && null != this.videoRef && c.w.get(x.wqg) && this._connectedSound.play(), this.setState({
            problems: !1,
            hide: r
        })) : t.hide !== i ? (i ? this.clearProblemsTimeout() : this.setProblemsTimeout(), this.setState({
            shouldRender: !0
        }), setTimeout(() => this.setState({
            shouldRender: !i
        }), 200)) : t.problems !== a && a && A.A.checkIncidents()
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
            let a = this._loadingText,
                r = null;
            return null != this._eventLoadingText && (a = this._eventLoadingText), null != t && (a = t.name, r = t.incident_updates[0].body), (0, i.jsxs)("div", {
                className: v.kL,
                "data-fade": n,
                style: {
                    "--connecting-container-fade-duration": "200ms",
                    "--connecting-content-fade-duration": "150ms"
                },
                children: [(0, i.jsxs)("div", {
                    className: v.Qs,
                    children: [(0, i.jsx)(S.A, {
                        autoPlay: !0,
                        loop: !e,
                        setRef: this.setVideoRef,
                        onReady: this.handleReady,
                        className: l()(v.bE, this.state.ready ? v.Gc : "")
                    }), (0, i.jsxs)("div", {
                        className: v.Qq,
                        children: [null != t ? null : (0, i.jsx)("div", {
                            className: v.mu,
                            children: y.intl.string(y.t.v0R1Lh)
                        }), (0, i.jsx)("div", {
                            className: null != t ? v.DD : v.uN,
                            children: a
                        }), (0, i.jsx)("div", {
                            className: v.rf,
                            children: r
                        })]
                    })]
                }), (0, i.jsxs)("div", {
                    className: l()(v.Bk, {
                        [v.ly]: this.state.problems
                    }),
                    children: [(0, i.jsx)("div", {
                        className: v.u1,
                        children: y.intl.string(y.t.AG2zPM)
                    }), (0, i.jsxs)("div", {
                        children: [(0, i.jsxs)(u.MzZ, {
                            className: v.AR,
                            href: x.qF7.TWITTER_SUPPORT,
                            target: "_blank",
                            children: [(0, i.jsx)(u.p3p, {
                                size: "xs",
                                color: "currentColor",
                                className: v.Kk
                            }), y.intl.string(y.t.KlyTbj)]
                        }), (0, i.jsxs)(u.MzZ, {
                            className: v.gy,
                            href: x.qF7.STATUS,
                            target: "_blank",
                            children: [(0, i.jsx)(C.A, {
                                className: v.Kk
                            }), y.intl.string(y.t.AgXXyy)]
                        })]
                    })]
                })]
            })
        }
    }
}
let O = d.Ay.connectStores([_.A, f.A, p.A, h.A], () => ({
    isTryingToConnect: _.A.isTryingToConnect(),
    connected: _.A.isConnected(),
    incident: f.A.getIncident(),
    soundpack: p.A.getSoundpack(),
    reducedMotion: h.A.useReducedMotion
}))(e => {
    let {
        isTryingToConnect: t,
        connected: n,
        incident: a,
        soundpack: r,
        reducedMotion: l
    } = e;
    return t ? (0, i.jsx)(b, {
        reducedMotion: l,
        soundpack: r,
        connected: n,
        incident: a
    }) : null
})