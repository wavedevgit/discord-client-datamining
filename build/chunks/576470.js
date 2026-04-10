/** chunk id: 576470 params = (module,exports,require) **/
n.d(e, {
    A: () => d
});
var i = n(627968),
    l = n(64700),
    a = n(735438),
    s = n.n(a),
    r = n(405269),
    o = n(985018);
class c extends l.PureComponent {
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
            onInterval: e
        } = this.props;
        this._interval = setInterval(() => {
            this.forceUpdate(), e?.()
        }, t)
    }
    componentWillUnmount() {
        null != this._interval && clearInterval(this._interval)
    }
    defaultRender(t) {
        let {
            showDays: e,
            showUnits: n,
            className: l
        } = this.props, a = [t.days, t.hours, t.minutes, t.seconds], r = [o.intl.string(o.t["6m/6nM"]), o.intl.string(o.t.n7dksO), o.intl.string(o.t["1LyF1h"]), o.intl.string(o.t.QJyuxY)];
        if (0 === t.days) a.shift();
        else if (!e) {
            let t = a.shift();
            a[0] += 24 * t
        }
        let c = s()(a).map(t => t < 10 ? `0${t}` : t).map((t, e) => [e > 0 && !n ? ":" : " ", (0, i.jsxs)("span", {
            children: [t, n ? r[a.length - e - 1] : null]
        }, e)]).flatten().value();
        return (0, i.jsx)("span", {
            className: l,
            children: c
        })
    }
    render() {
        let {
            deadline: t,
            children: e,
            className: n,
            stopAtOneSec: l
        } = this.props;
        if (t === 1 / 0) return (0, i.jsx)("span", {
            className: n,
            "aria-label": o.intl.string(o.t.PqEzn8),
            children: "∞"
        });
        let a = (0, r.Tf)(Date.now(), t, l);
        return null != e ? e(a, this.defaultRender.bind(this, a)) : this.defaultRender(a)
    }
}
let d = c