/** chunk id: 432166 params = (module,exports,require) **/
i.d(t, {
    A: () => m
});
var n = i(627968),
    l = i(64700),
    r = i(503698),
    s = i.n(r),
    a = i(451988),
    o = i(235986),
    d = i(624215);

function u(e) {
    let {
        percentage: t,
        isSingleLine: i
    } = e;
    return (0, n.jsx)("div", {
        className: s()({
            [d.M0]: i,
            [d.Sg]: !i
        }),
        children: (0, n.jsx)("div", {
            className: d.qT,
            style: {
                width: `${100*Math.max(Math.min(t,1),0)}%`
            }
        })
    })
}

function c(e) {
    return String(e).padStart(2, "0")
}

function A(e) {
    let {
        time: t,
        padLargestUnit: i
    } = e, n = Math.floor(t) % 60, l = Math.floor(t / 60) % 60, r = Math.floor(t / 3600);
    return 0 === r ? i ? `${c(l)}:${c(n)}` : `${l}:${c(n)}` : i ? `${c(r)}:${c(l)}:${c(n)}` : `${r}:${c(l)}:${c(n)}`
}
class h extends l.PureComponent {
    static defaultProps = {
        themed: !1
    };
    timer = new a.IX;
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
            themed: l,
            singleLine: r = !1
        } = this.props, {
            now: a
        } = this.state, c = (t - e) / 1e3, h = Math.max(Math.min((a - e) / 1e3, c), 0);
        return r ? (0, n.jsxs)("div", {
            className: s()(i, {
                [d.Sp]: l
            }, d.Od),
            children: [(0, n.jsx)("div", {
                className: d.Iq,
                children: A({
                    time: h,
                    padLargestUnit: !0
                })
            }), (0, n.jsx)("div", {
                className: d.h7,
                children: (0, n.jsx)(u, {
                    percentage: h / c,
                    isSingleLine: !0
                })
            }), (0, n.jsx)("div", {
                className: d.EL,
                children: A({
                    time: c,
                    padLargestUnit: !0
                })
            })]
        }) : (0, n.jsxs)("div", {
            className: s()(i, {
                [d.Sp]: l
            }),
            children: [(0, n.jsx)(u, {
                percentage: h / c,
                isSingleLine: !1
            }), (0, n.jsxs)(o.A, {
                children: [(0, n.jsx)(o.A.Child, {
                    grow: 1,
                    className: d.n_,
                    children: A({
                        time: h,
                        padLargestUnit: !1
                    })
                }), (0, n.jsx)(o.A.Child, {
                    grow: 0,
                    className: d.EL,
                    children: A({
                        time: c,
                        padLargestUnit: !1
                    })
                })]
            })]
        })
    }
}
let m = h