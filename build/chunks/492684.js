/** chunk id: 492684, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => o
});
var n = i(627968),
    l = i(64700),
    r = i(451988),
    s = i(985018);

function a(t) {
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
            return null != t.end ? this.getDiff(e, a(t.end) / 1e3) : null != t.start ? this.getDiff(a(t.start) / 1e3, e) : {
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
            let i = Math.max(e - t, 0),
                n = Math.floor(i) % 60,
                l = Math.floor(i / 60) % 60;
            return {
                hours: Math.floor(i / 3600) % 24,
                minutes: l,
                seconds: n
            }
        }
        render() {
            let {
                timestamps: e,
                ...i
            } = this.props, l = this.renderTime(this.state.hours, !0), r = this.renderTime(this.state.minutes), a = this.renderTime(this.state.seconds), o = -1 === l ? `${r}:${a}` : `${l}:${r}:${a}`;
            return null != e.end ? (0, n.jsx)(t, {
                ...i,
                message: s.intl.formatToPlainString(s.t["I/J7vI"], {
                    duration: o
                })
            }) : null != e.start ? (0, n.jsx)(t, {
                ...i,
                message: s.intl.formatToPlainString(s.t.M9Fexd, {
                    duration: o
                })
            }) : null
        }
    }
}