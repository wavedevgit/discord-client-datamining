/** Chunk was on 21425 **/
/** chunk id: 432166, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
}), n(896048);
var r, i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(451988),
    c = n(235986),
    u = n(703740);

function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function p(e) {
    let {
        percentage: t,
        isSingleLine: n
    } = e;
    return (0, i.jsx)("div", {
        className: s()({
            [u.M0]: n,
            [u.Sg]: !n
        }),
        children: (0, i.jsx)("div", {
            className: u.qT,
            style: {
                width: "".concat(100 * Math.max(Math.min(t, 1), 0), "%")
            }
        })
    })
}

function f(e) {
    return String(e).padStart(2, "0")
}

function m(e) {
    let {
        time: t,
        padLargestUnit: n
    } = e, r = Math.floor(t) % 60, i = Math.floor(t / 60) % 60, l = Math.floor(t / 3600);
    return 0 === l ? n ? "".concat(f(i), ":").concat(f(r)) : "".concat(i, ":").concat(f(r)) : n ? "".concat(f(l), ":").concat(f(i), ":").concat(f(r)) : "".concat(l, ":").concat(f(i), ":").concat(f(r))
}
class g extends(r = l.PureComponent) {
    componentDidMount() {
        this.timer.start(500, () => {
            this.setState({
                now: Date.now()
            })
        })
    }
    componentWillUnmount() {
        this.timer.stop()
    }
    render() {
        let {
            start: e,
            end: t,
            className: n,
            themed: r,
            singleLine: l = !1
        } = this.props, {
            now: a
        } = this.state, o = (t - e) / 1e3, d = Math.max(Math.min((a - e) / 1e3, o), 0);
        return l ? (0, i.jsxs)("div", {
            className: s()(n, {
                [u.Sp]: r
            }, u.Od),
            children: [(0, i.jsx)("div", {
                className: u.Iq,
                children: m({
                    time: d,
                    padLargestUnit: !0
                })
            }), (0, i.jsx)("div", {
                className: u.h7,
                children: (0, i.jsx)(p, {
                    percentage: d / o,
                    isSingleLine: !0
                })
            }), (0, i.jsx)("div", {
                className: u.EL,
                children: m({
                    time: o,
                    padLargestUnit: !0
                })
            })]
        }) : (0, i.jsxs)("div", {
            className: s()(n, {
                [u.Sp]: r
            }),
            children: [(0, i.jsx)(p, {
                percentage: d / o,
                isSingleLine: !1
            }), (0, i.jsxs)(c.A, {
                children: [(0, i.jsx)(c.A.Child, {
                    grow: 1,
                    className: u.n_,
                    children: m({
                        time: d,
                        padLargestUnit: !1
                    })
                }), (0, i.jsx)(c.A.Child, {
                    grow: 0,
                    className: u.EL,
                    children: m({
                        time: o,
                        padLargestUnit: !1
                    })
                })]
            })]
        })
    }
    constructor(...e) {
        super(...e), d(this, "timer", new o.IX), d(this, "state", {
            now: Date.now()
        })
    }
}
d(g, "defaultProps", {
    themed: !1
});
let y = g