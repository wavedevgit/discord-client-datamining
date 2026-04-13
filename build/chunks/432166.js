/** chunk id: 432166 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(451988),
    c = n(235986),
    o = n(624215);

function d(e) {
    let {
        percentage: t,
        isSingleLine: n
    } = e;
    return (0, i.jsx)("div", {
        className: s()({
            [o.M0]: n,
            [o.Sg]: !n
        }),
        children: (0, i.jsx)("div", {
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
        padLargestUnit: n
    } = e, i = Math.floor(t) % 60, a = Math.floor(t / 60) % 60, l = Math.floor(t / 3600);
    return 0 === l ? n ? `${u(a)}:${u(i)}` : `${a}:${u(i)}` : n ? `${u(l)}:${u(a)}:${u(i)}` : `${l}:${u(a)}:${u(i)}`
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
            className: n,
            themed: a,
            singleLine: l = !1
        } = this.props, {
            now: r
        } = this.state, u = (t - e) / 1e3, m = Math.max(Math.min((r - e) / 1e3, u), 0);
        return l ? (0, i.jsxs)("div", {
            className: s()(n, {
                [o.Sp]: a
            }, o.Od),
            children: [(0, i.jsx)("div", {
                className: o.Iq,
                children: p({
                    time: m,
                    padLargestUnit: !0
                })
            }), (0, i.jsx)("div", {
                className: o.h7,
                children: (0, i.jsx)(d, {
                    percentage: m / u,
                    isSingleLine: !0
                })
            }), (0, i.jsx)("div", {
                className: o.EL,
                children: p({
                    time: u,
                    padLargestUnit: !0
                })
            })]
        }) : (0, i.jsxs)("div", {
            className: s()(n, {
                [o.Sp]: a
            }),
            children: [(0, i.jsx)(d, {
                percentage: m / u,
                isSingleLine: !1
            }), (0, i.jsxs)(c.A, {
                children: [(0, i.jsx)(c.A.Child, {
                    grow: 1,
                    className: o.n_,
                    children: p({
                        time: m,
                        padLargestUnit: !1
                    })
                }), (0, i.jsx)(c.A.Child, {
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
let h = m