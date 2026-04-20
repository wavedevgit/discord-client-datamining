/** chunk id: 746793 params = (module,exports,require) **/
n.d(t, {
    A: () => O
}), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
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
    b = n(985018),
    v = n(417376);
class y extends l.PureComponent {
    videoRef = null;
    _noProblemsTimeout = null;
    _problemsTimeout = null;
    _connectedSound = this.createSound();
    _loadingText = (function() {
        let e = [b.intl.string(b.t.Ex79K6), b.intl.string(b.t["+v5zsT"]), b.intl.string(b.t["RLx6+Y"]), b.intl.string(b.t.Q1PZkN), b.intl.string(b.t.x7sfVg), b.intl.format(b.t.PHuQsQ, {
            tabHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "tab",
                className: v.P
            }, t)
        }), b.intl.string(b.t["il/GZt"]), b.intl.string(b.t["5qAKlq"]), b.intl.format(b.t.FVVp79, {
            F6Hook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "f6",
                className: v.P
            }, t),
            tabHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "tab",
                className: v.P
            }, t)
        }), b.intl.string(b.t["7Y1hFH"]), b.intl.string(b.t.UcCW71), b.intl.string(b.t.E5Ghfc), b.intl.string(b.t.bANqo8), b.intl.string(b.t.yOEVDr), b.intl.string(b.t["u0Ra/G"]), b.intl.string(b.t.un4cQ7), b.intl.string(b.t["2cyYx1"]), b.intl.string(b.t.KCmze1), b.intl.string(b.t.I98MEE), b.intl.format(b.t.c0YCIx, {}), b.intl.string(b.t.z8AvIN), b.intl.string(b.t.IjX3P1), b.intl.string(b.t.lg3Ckc), b.intl.string(b.t["4GaLhY"]), b.intl.string(b.t.qHKbUw), b.intl.string(b.t.mJxKDw), b.intl.string(b.t.iiQBXF), b.intl.string(b.t.YPD46Q), b.intl.string(b.t.O8Bpga), b.intl.string(b.t.xzFwfi), b.intl.string(b.t["4G3fsX"]), b.intl.string(b.t["/jPyKC"]), b.intl.string(b.t["8x7D5c"]), b.intl.string(b.t.G6Q8H3), b.intl.string(b.t["9Cx+xL"]), b.intl.string(b.t.WsZ8dW), b.intl.string(b.t.btoe7M), b.intl.string(b.t.E6Y0j7), b.intl.string(b.t["7KZ81/"]), b.intl.string(b.t.hm7OKu), b.intl.string(b.t["H535i+"]), b.intl.string(b.t["08WJUR"]), b.intl.string(b.t.hhtfyi), b.intl.string(b.t.on980U), b.intl.string(b.t.AL6c01), b.intl.string(b.t.iLTeF6), b.intl.string(b.t.b3vSu7), b.intl.string(b.t.f8ao58), b.intl.format(b.t["1v1h8o"], {
            asterisks: "**"
        }), b.intl.format(b.t.MUlAVW, {
            quickSwitcherHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "mod+k",
                className: v.P
            }, t)
        }), b.intl.format(b.t.aes5VI, {
            markUnreadHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "alt+click",
                className: v.P
            }, t)
        }), b.intl.format(b.t.md9Svv, {
            markServerUnreadHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "shift+esc",
                className: v.P
            }, t)
        }), b.intl.format(b.t["X0Tu+u"], {
            navigateUnreadHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "shift+alt+up",
                className: v.P
            }, t),
            downHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "down",
                className: v.P
            }, t)
        }), b.intl.format(b.t.AkoeIY, {
            keyboardShortcutsHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "mod+/",
                className: v.P
            }, t)
        }), b.intl.format(b.t.P9sfAH, {
            messageNewlineHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "shift+return",
                className: v.P
            }, t)
        }), b.intl.format(b.t["3Ox33f"], {
            shiftHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "shift",
                className: v.P
            }, t)
        }), b.intl.format(b.t.enCV6b, {
            upHook: (e, t) => (0, i.jsx)(u.e7I, {
                shortcut: "up",
                className: v.P
            }, t)
        })];
        return I.default.locale.startsWith("en-") && e.push(b.intl.string(b.t.dQ9Wqk)), e[o().random(e.length - 1)]
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
            problems: l
        } = this.state, {
            connected: a,
            soundpack: r
        } = this.props, s = a && n && !i && !l;
        e.soundpack !== r && (this._connectedSound = this.createSound()), e.connected !== a || s ? (a && (0, E.D)(), a && null != this.videoRef && c.w.get(x.wqg) && this._connectedSound.play(), this.setState({
            problems: !1,
            hide: a
        })) : t.hide !== i ? (i ? this.clearProblemsTimeout() : this.setProblemsTimeout(), this.setState({
            shouldRender: !0
        }), setTimeout(() => this.setState({
            shouldRender: !i
        }), 200)) : t.problems !== l && l && A.A.checkIncidents()
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
            let l = this._loadingText,
                a = null;
            return null != this._eventLoadingText && (l = this._eventLoadingText), null != t && (l = t.name, a = t.incident_updates[0].body), (0, i.jsxs)("div", {
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
                        className: r()(v.bE, this.state.ready ? v.Gc : "")
                    }), (0, i.jsxs)("div", {
                        className: v.Qq,
                        children: [null != t ? null : (0, i.jsx)("div", {
                            className: v.mu,
                            children: b.intl.string(b.t.v0R1Lh)
                        }), (0, i.jsx)("div", {
                            className: null != t ? v.DD : v.uN,
                            children: l
                        }), (0, i.jsx)("div", {
                            className: v.rf,
                            children: a
                        })]
                    })]
                }), (0, i.jsxs)("div", {
                    className: r()(v.Bk, {
                        [v.ly]: this.state.problems
                    }),
                    children: [(0, i.jsx)("div", {
                        className: v.u1,
                        children: b.intl.string(b.t.AG2zPM)
                    }), (0, i.jsxs)("div", {
                        children: [(0, i.jsxs)(u.MzZ, {
                            className: v.AR,
                            href: x.qF7.TWITTER_SUPPORT,
                            target: "_blank",
                            children: [(0, i.jsx)(u.p3p, {
                                size: "xs",
                                color: "currentColor",
                                className: v.Kk
                            }), b.intl.string(b.t.KlyTbj)]
                        }), (0, i.jsxs)(u.MzZ, {
                            className: v.gy,
                            href: x.qF7.STATUS,
                            target: "_blank",
                            children: [(0, i.jsx)(C.A, {
                                className: v.Kk
                            }), b.intl.string(b.t.AgXXyy)]
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
        incident: l,
        soundpack: a,
        reducedMotion: r
    } = e;
    return t ? (0, i.jsx)(y, {
        reducedMotion: r,
        soundpack: a,
        connected: n,
        incident: l
    }) : null
})