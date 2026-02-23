/** chunk id: 492684, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => o
});
var i = n(627968),
    l = n(64700),
    r = n(451988),
    a = n(985018);

function s(t) {
    return `${t}`.length < 13 ? 1e3 * t : t
}

function o(t) {
    return class extends l.PureComponent {
        _interval;
        constructor(t) {
            super(t), this._interval = new r.IX, this.state = {
                ...this.getUpdatedTime()
            }
        }
        componentDidMount() {
            this._interval.start(1e3, () => this.setState(this.getUpdatedTime()))
        }
        componentWillUnmount() {
            this._interval.stop()
        }
        componentDidUpdate(t) {
            (t.timestamps.end !== this.props.timestamps.end || t.timestamps.start !== this.props.timestamps.start) && this.setState(this.getUpdatedTime())
        }
        getUpdatedTime() {
            let {
                timestamps: t
            } = this.props, e = Date.now() / 1e3;
            return null != t.end ? this.getDiff(e, s(t.end) / 1e3) : null != t.start ? this.getDiff(s(t.start) / 1e3, e) : {
                hours: 0,
                minutes: 0,
                seconds: 0
            }
        }
        renderTime(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return e && t <= 0 ? -1 : t < 10 ? `0${t}` : t
        }
        getDiff(t, e) {
            let n = Math.max(e - t, 0),
                i = Math.floor(n) % 60,
                l = Math.floor(n / 60) % 60;
            return {
                hours: Math.floor(n / 3600) % 24,
                minutes: l,
                seconds: i
            }
        }
        render() {
            let {
                timestamps: e,
                ...n
            } = this.props, l = this.renderTime(this.state.hours, !0), r = this.renderTime(this.state.minutes), s = this.renderTime(this.state.seconds), o = -1 === l ? `${r}:${s}` : `${l}:${r}:${s}`;
            return null != e.end ? (0, i.jsx)(t, {
                ...n,
                message: a.intl.formatToPlainString(a.t["I/J7vI"], {
                    duration: o
                })
            }) : null != e.start ? (0, i.jsx)(t, {
                ...n,
                message: a.intl.formatToPlainString(a.t.M9Fexd, {
                    duration: o
                })
            }) : null
        }
    }
}