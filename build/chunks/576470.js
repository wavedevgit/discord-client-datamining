/** chunk id: 576470 params = (module,exports,require) **/
e.d(i, {
    A: () => A
});
var n = e(627968),
    r = e(64700),
    E = e(735438),
    s = e.n(E),
    S = e(405269),
    l = e(985018);
class o extends r.PureComponent {
    static defaultProps = {
        showDays: !0,
        showUnits: !1,
        stopAtOneSec: !1,
        intervalDuration: 1e3
    };
    _interval;
    componentDidMount() {
        let {
            intervalDuration: t,
            onInterval: i
        } = this.props;
        this._interval = setInterval(() => {
            this.forceUpdate(), i?.()
        }, t)
    }
    componentWillUnmount() {
        null != this._interval && clearInterval(this._interval)
    }
    defaultRender(t) {
        let {
            showDays: i,
            showUnits: e,
            className: r
        } = this.props, E = [t.days, t.hours, t.minutes, t.seconds], S = [l.intl.string(l.t["6m/6nM"]), l.intl.string(l.t.n7dksO), l.intl.string(l.t["1LyF1h"]), l.intl.string(l.t.QJyuxY)];
        if (0 === t.days) E.shift();
        else if (!i) {
            let t = E.shift();
            E[0] += 24 * t
        }
        let o = s()(E).map(t => t < 10 ? `0${t}` : t).map((t, i) => [i > 0 && !e ? ":" : " ", (0, n.jsxs)("span", {
            children: [t, e ? S[E.length - i - 1] : null]
        }, i)]).flatten().value();
        return (0, n.jsx)("span", {
            className: r,
            children: o
        })
    }
    render() {
        let {
            deadline: t,
            children: i,
            className: e,
            stopAtOneSec: r
        } = this.props;
        if (t === 1 / 0) return (0, n.jsx)("span", {
            className: e,
            "aria-label": l.intl.string(l.t.PqEzn8),
            children: "∞"
        });
        let E = (0, S.Tf)(Date.now(), t, r);
        return null != i ? i(E, this.defaultRender.bind(this, E)) : this.defaultRender(E)
    }
}
let A = o