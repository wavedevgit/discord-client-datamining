/** chunk id: 432166 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var a = n(627968),
    i = n(64700),
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
    return (0, a.jsx)("div", {
        className: s()({
            [o.M0]: n,
            [o.Sg]: !n
        }),
        children: (0, a.jsx)("div", {
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
    } = e, a = Math.floor(t) % 60, i = Math.floor(t / 60) % 60, l = Math.floor(t / 3600);
    return 0 === l ? n ? `${u(i)}:${u(a)}` : `${i}:${u(a)}` : n ? `${u(l)}:${u(i)}:${u(a)}` : `${l}:${u(i)}:${u(a)}`
}
class m extends i.PureComponent {
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
            themed: i,
            singleLine: l = !1
        } = this.props, {
            now: r
        } = this.state, u = (t - e) / 1e3, m = Math.max(Math.min((r - e) / 1e3, u), 0);
        return l ? (0, a.jsxs)("div", {
            className: s()(n, {
                [o.Sp]: i
            }, o.Od),
            children: [(0, a.jsx)("div", {
                className: o.Iq,
                children: p({
                    time: m,
                    padLargestUnit: !0
                })
            }), (0, a.jsx)("div", {
                className: o.h7,
                children: (0, a.jsx)(d, {
                    percentage: m / u,
                    isSingleLine: !0
                })
            }), (0, a.jsx)("div", {
                className: o.EL,
                children: p({
                    time: u,
                    padLargestUnit: !0
                })
            })]
        }) : (0, a.jsxs)("div", {
            className: s()(n, {
                [o.Sp]: i
            }),
            children: [(0, a.jsx)(d, {
                percentage: m / u,
                isSingleLine: !1
            }), (0, a.jsxs)(c.A, {
                children: [(0, a.jsx)(c.A.Child, {
                    grow: 1,
                    className: o.n_,
                    children: p({
                        time: m,
                        padLargestUnit: !1
                    })
                }), (0, a.jsx)(c.A.Child, {
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