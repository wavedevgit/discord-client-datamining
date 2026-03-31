/** chunk id: 432166 params = (module,exports,require) **/
i.d(t, {
    A: () => p
});
var n = i(627968),
    a = i(64700),
    l = i(503698),
    s = i.n(l),
    r = i(451988),
    o = i(235986),
    c = i(230566);

function d(e) {
    let {
        percentage: t,
        isSingleLine: i
    } = e;
    return (0, n.jsx)("div", {
        className: s()({
            [c.M0]: i,
            [c.Sg]: !i
        }),
        children: (0, n.jsx)("div", {
            className: c.qT,
            style: {
                width: `${100*Math.max(Math.min(t,1),0)}%`
            }
        })
    })
}

function u(e) {
    return String(e).padStart(2, "0")
}

function m(e) {
    let {
        time: t,
        padLargestUnit: i
    } = e, n = Math.floor(t) % 60, a = Math.floor(t / 60) % 60, l = Math.floor(t / 3600);
    return 0 === l ? i ? `${u(a)}:${u(n)}` : `${a}:${u(n)}` : i ? `${u(l)}:${u(a)}:${u(n)}` : `${l}:${u(a)}:${u(n)}`
}
class _ extends a.PureComponent {
    static defaultProps = {
        themed: !1
    };
    timer = new r.IX;
    state = {
        now: Date.now()
    };
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
            className: i,
            themed: a,
            singleLine: l = !1
        } = this.props, {
            now: r
        } = this.state, u = (t - e) / 1e3, _ = Math.max(Math.min((r - e) / 1e3, u), 0);
        return l ? (0, n.jsxs)("div", {
            className: s()(i, {
                [c.Sp]: a
            }, c.Od),
            children: [(0, n.jsx)("div", {
                className: c.Iq,
                children: m({
                    time: _,
                    padLargestUnit: !0
                })
            }), (0, n.jsx)("div", {
                className: c.h7,
                children: (0, n.jsx)(d, {
                    percentage: _ / u,
                    isSingleLine: !0
                })
            }), (0, n.jsx)("div", {
                className: c.EL,
                children: m({
                    time: u,
                    padLargestUnit: !0
                })
            })]
        }) : (0, n.jsxs)("div", {
            className: s()(i, {
                [c.Sp]: a
            }),
            children: [(0, n.jsx)(d, {
                percentage: _ / u,
                isSingleLine: !1
            }), (0, n.jsxs)(o.A, {
                children: [(0, n.jsx)(o.A.Child, {
                    grow: 1,
                    className: c.n_,
                    children: m({
                        time: _,
                        padLargestUnit: !1
                    })
                }), (0, n.jsx)(o.A.Child, {
                    grow: 0,
                    className: c.EL,
                    children: m({
                        time: u,
                        padLargestUnit: !1
                    })
                })]
            })]
        })
    }
}
let p = _