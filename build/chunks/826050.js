/** Chunk was on 41727 **/
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
    p = n(652215),
    h = n(985018),
    f = n(792728);

function g(e, t, n) {
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
        }), d._.subscribe(p.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus)
    }
    componentWillUnmount() {
        this.focusTimeout.stop(), d._.unsubscribe(p.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus)
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
                    g(e, t, n[t])
                })
            }
            return e
        }({
            toValue: Math.min(e, 250)
        }, m)).start()
    }
    renderArrowGroup(e) {
        return (0, l.jsxs)("div", {
            className: a()(f.XN, e),
            children: [(0, l.jsx)(o.A.div, {
                className: a()(f.Hf, f.xM),
                style: this.getStyle(),
                children: (0, l.jsx)("img", {
                    alt: "",
                    src: n(824829),
                    className: f.D6
                })
            }), (0, l.jsx)("div", {
                className: a()(f.Hf, f.JM),
                children: (0, l.jsx)("img", {
                    alt: "",
                    src: n(162206),
                    className: f.D6
                })
            }), (0, l.jsx)("div", {
                className: a()(f.Hf, f.QJ),
                children: (0, l.jsx)("img", {
                    alt: "",
                    src: n(298607),
                    className: f.D6
                })
            })]
        })
    }
    renderContent() {
        return (0, l.jsxs)("div", {
            className: f.fi,
            children: [(0, l.jsx)("div", {
                className: f.Iv,
                children: h.intl.string(h.t.Mp0IGK)
            }), (0, l.jsx)("div", {
                className: f.kp,
                children: h.intl.string(h.t["3CbpwH"])
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
            className: a()(f.d$, {
                [f.SP]: t,
                [f.tG]: e
            }),
            children: [this.renderContent(), this.renderArrowGroup(f.__invalid_left), this.renderArrowGroup(f.pG)]
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
        super(...e), g(this, "state", {
            shown: !1,
            translateY: new o.A.Value(0)
        }), g(this, "rootRef", i.createRef()), g(this, "focusTimeout", new c.Ep), g(this, "handleResultFocus", e => {
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
g(b, "contextType", u.CZY);
let A = b