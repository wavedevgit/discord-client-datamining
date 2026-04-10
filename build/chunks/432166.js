/** chunk id: 432166 params = (module,exports,require) **/
i.d(t, {
    A: () => _
});
var n = i(627968),
    a = i(64700),
    l = i(503698),
    s = i.n(l),
    r = i(451988),
    c = i(235986),
    o = i(624215);

function d(e) {
    let {
        percentage: t,
        isSingleLine: i
    } = e;
    return (0, n.jsx)("div", {
        className: s()({
            [o.M0]: i,
            [o.Sg]: !i
        }),
        children: (0, n.jsx)("div", {
            className: o.qT,
            style: {
                width: `${100*Math.max(Math.min(t,1),0)}%`
            }
        })
    })
}

function u(e) {
    return String(e).padStart(2, "0")
}

function p(e) {
    let {
        time: t,
        padLargestUnit: i
    } = e, n = Math.floor(t) % 60, a = Math.floor(t / 60) % 60, l = Math.floor(t / 3600);
    return 0 === l ? i ? `${u(a)}:${u(n)}` : `${a}:${u(n)}` : i ? `${u(l)}:${u(a)}:${u(n)}` : `${l}:${u(a)}:${u(n)}`
}
class m extends a.PureComponent {
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
        } = this.state, u = (t - e) / 1e3, m = Math.max(Math.min((r - e) / 1e3, u), 0);
        return l ? (0, n.jsxs)("div", {
            className: s()(i, {
                [o.Sp]: a
            }, o.Od),
            children: [(0, n.jsx)("div", {
                className: o.Iq,
                children: p({
                    time: m,
                    padLargestUnit: !0
                })
            }), (0, n.jsx)("div", {
                className: o.h7,
                children: (0, n.jsx)(d, {
                    percentage: m / u,
                    isSingleLine: !0
                })
            }), (0, n.jsx)("div", {
                className: o.EL,
                children: p({
                    time: u,
                    padLargestUnit: !0
                })
            })]
        }) : (0, n.jsxs)("div", {
            className: s()(i, {
                [o.Sp]: a
            }),
            children: [(0, n.jsx)(d, {
                percentage: m / u,
                isSingleLine: !1
            }), (0, n.jsxs)(c.A, {
                children: [(0, n.jsx)(c.A.Child, {
                    grow: 1,
                    className: o.n_,
                    children: p({
                        time: m,
                        padLargestUnit: !1
                    })
                }), (0, n.jsx)(c.A.Child, {
                    grow: 0,
                    className: o.EL,
                    children: p({
                        time: u,
                        padLargestUnit: !1
                    })
                })]
            })]
        })
    }
}
let _ = m