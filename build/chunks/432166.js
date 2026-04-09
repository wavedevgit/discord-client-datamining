/** chunk id: 432166 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(451988),
    o = n(235986),
    d = n(624215);

function c(e) {
    let {
        percentage: t,
        isSingleLine: n
    } = e;
    return (0, i.jsx)("div", {
        className: a()({
            [d.M0]: n,
            [d.Sg]: !n
        }),
        children: (0, i.jsx)("div", {
            className: d.qT,
            style: {
                width: `${100*Math.max(Math.min(t,1),0)}%`
            }
        })
    })
}

function u(e) {
    return String(e).padStart(2, "0")
}

function h(e) {
    let {
        time: t,
        padLargestUnit: n
    } = e, i = Math.floor(t) % 60, l = Math.floor(t / 60) % 60, s = Math.floor(t / 3600);
    return 0 === s ? n ? `${u(l)}:${u(i)}` : `${l}:${u(i)}` : n ? `${u(s)}:${u(l)}:${u(i)}` : `${s}:${u(l)}:${u(i)}`
}
class A extends l.PureComponent {
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
            themed: l,
            singleLine: s = !1
        } = this.props, {
            now: r
        } = this.state, u = (t - e) / 1e3, A = Math.max(Math.min((r - e) / 1e3, u), 0);
        return s ? (0, i.jsxs)("div", {
            className: a()(n, {
                [d.Sp]: l
            }, d.Od),
            children: [(0, i.jsx)("div", {
                className: d.Iq,
                children: h({
                    time: A,
                    padLargestUnit: !0
                })
            }), (0, i.jsx)("div", {
                className: d.h7,
                children: (0, i.jsx)(c, {
                    percentage: A / u,
                    isSingleLine: !0
                })
            }), (0, i.jsx)("div", {
                className: d.EL,
                children: h({
                    time: u,
                    padLargestUnit: !0
                })
            })]
        }) : (0, i.jsxs)("div", {
            className: a()(n, {
                [d.Sp]: l
            }),
            children: [(0, i.jsx)(c, {
                percentage: A / u,
                isSingleLine: !1
            }), (0, i.jsxs)(o.A, {
                children: [(0, i.jsx)(o.A.Child, {
                    grow: 1,
                    className: d.n_,
                    children: h({
                        time: A,
                        padLargestUnit: !1
                    })
                }), (0, i.jsx)(o.A.Child, {
                    grow: 0,
                    className: d.EL,
                    children: h({
                        time: u,
                        padLargestUnit: !1
                    })
                })]
            })]
        })
    }
}
let _ = A