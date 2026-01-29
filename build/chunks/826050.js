/** Chunk was on 1113 **/
/** chunk id: 826050, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(896048);
var r, l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(615300),
    c = n(451988),
    u = n(397927),
    d = n(203982),
    h = n(652215),
    p = n(985018),
    g = n(792728);

function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let m = {
    friction: 15,
    tension: 100
};
class b extends(r = i.PureComponent) {
    componentDidMount() {
        this.setState({
            shown: !0
        }), d._.subscribe(h.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus)
    }
    componentWillUnmount() {
        this.focusTimeout.stop(), d._.unsubscribe(h.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus)
    }
    componentDidUpdate() {
        let {
            hasQuery: e
        } = this.props;
        e || this.springTo(0)
    }
    springTo(e) {
        let {
            reducedMotion: t
        } = this.context;
        !0 !== t.enabled && o.A.spring(this.state.translateY, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    f(e, t, n[t])
                })
            }
            return e
        }({
            toValue: Math.min(e, 250)
        }, m)).start()
    }
    renderArrowGroup(e) {
        return (0, l.jsxs)("div", {
            className: a()(g.XN, e),
            children: [(0, l.jsx)(o.A.div, {
                className: a()(g.Hf, g.xM),
                style: this.getStyle(),
                children: (0, l.jsx)("img", {
                    alt: "",
                    src: n(824829),
                    className: g.D6
                })
            }), (0, l.jsx)("div", {
                className: a()(g.Hf, g.JM),
                children: (0, l.jsx)("img", {
                    alt: "",
                    src: n(162206),
                    className: g.D6
                })
            }), (0, l.jsx)("div", {
                className: a()(g.Hf, g.QJ),
                children: (0, l.jsx)("img", {
                    alt: "",
                    src: n(298607),
                    className: g.D6
                })
            })]
        })
    }
    renderContent() {
        return (0, l.jsxs)("div", {
            className: g.fi,
            children: [(0, l.jsx)("div", {
                className: g.Iv,
                children: p.intl.string(p.t.Mp0IGK)
            }), (0, l.jsx)("div", {
                className: g.kp,
                children: p.intl.string(p.t["3CbpwH"])
            })]
        })
    }
    render() {
        let {
            hasQuery: e
        } = this.props, {
            shown: t
        } = this.state;
        return (0, l.jsxs)("div", {
            ref: this.rootRef,
            className: a()(g.d$, {
                [g.SP]: t,
                [g.tG]: e
            }),
            children: [this.renderContent(), this.renderArrowGroup(g.__invalid_left), this.renderArrowGroup(g.pG)]
        })
    }
    getStyle() {
        let {
            reducedMotion: e
        } = this.context;
        return !0 === e.enabled ? {} : {
            opacity: 1,
            transform: [{
                translateY: this.state.translateY.interpolate({
                    inputRange: [0, 250],
                    outputRange: ["0px", "".concat(250, "px")]
                })
            }, {
                translateZ: 0
            }]
        }
    }
    constructor(...e) {
        super(...e), f(this, "state", {
            shown: !1,
            translateY: new o.A.Value(0)
        }), f(this, "rootRef", i.createRef()), f(this, "focusTimeout", new c.Ep), f(this, "handleResultFocus", e => {
            let {
                node: t
            } = e;
            this.focusTimeout.start(1, () => {
                if (this.props.hasQuery && null != t && null != this.rootRef.current) {
                    let {
                        top: e
                    } = this.rootRef.current.getBoundingClientRect(), {
                        top: n
                    } = t.getBoundingClientRect(), r = Math.abs(e - n);
                    this.springTo(r - 118 + 9)
                } else this.springTo(0)
            })
        })
    }
}
f(b, "contextType", u.CZY);
let A = b