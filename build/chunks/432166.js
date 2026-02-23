/** chunk id: 432166, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => m
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(451988),
    o = n(235986),
    d = n(703740);

function u(t) {
    let {
        percentage: e,
        isSingleLine: n
    } = t;
    return (0, i.jsx)("div", {
        className: a()({
            [d.M0]: n,
            [d.Sg]: !n
        }),
        children: (0, i.jsx)("div", {
            className: d.qT,
            style: {
                width: `${100*Math.max(Math.min(e,1),0)}%`
            }
        })
    })
}

function c(t) {
    return String(t).padStart(2, "0")
}

function A(t) {
    let {
        time: e,
        padLargestUnit: n
    } = t, i = Math.floor(e) % 60, l = Math.floor(e / 60) % 60, r = Math.floor(e / 3600);
    return 0 === r ? n ? `${c(l)}:${c(i)}` : `${l}:${c(i)}` : n ? `${c(r)}:${c(l)}:${c(i)}` : `${r}:${c(l)}:${c(i)}`
}
class p extends l.PureComponent {
    static defaultProps = {
        themed: !1
    };
    timer = new s.IX;
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
            start: t,
            end: e,
            className: n,
            themed: l,
            singleLine: r = !1
        } = this.props, {
            now: s
        } = this.state, c = (e - t) / 1e3, p = Math.max(Math.min((s - t) / 1e3, c), 0);
        return r ? (0, i.jsxs)("div", {
            className: a()(n, {
                [d.Sp]: l
            }, d.Od),
            children: [(0, i.jsx)("div", {
                className: d.Iq,
                children: A({
                    time: p,
                    padLargestUnit: !0
                })
            }), (0, i.jsx)("div", {
                className: d.h7,
                children: (0, i.jsx)(u, {
                    percentage: p / c,
                    isSingleLine: !0
                })
            }), (0, i.jsx)("div", {
                className: d.EL,
                children: A({
                    time: c,
                    padLargestUnit: !0
                })
            })]
        }) : (0, i.jsxs)("div", {
            className: a()(n, {
                [d.Sp]: l
            }),
            children: [(0, i.jsx)(u, {
                percentage: p / c,
                isSingleLine: !1
            }), (0, i.jsxs)(o.A, {
                children: [(0, i.jsx)(o.A.Child, {
                    grow: 1,
                    className: d.n_,
                    children: A({
                        time: p,
                        padLargestUnit: !1
                    })
                }), (0, i.jsx)(o.A.Child, {
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
let m = p