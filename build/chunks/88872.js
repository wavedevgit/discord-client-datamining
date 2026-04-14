/** chunk id: 88872 params = (module,exports,require) **/
"use strict";
l.d(t, {
    default: () => f
});
var a = l(627968),
    s = l(64700),
    n = l(158954),
    r = l(450507),
    o = l(397927),
    i = l(256311),
    c = l(954571),
    u = l(824611),
    d = l(45813),
    p = l(559868),
    h = l(652215),
    m = l(985018);
class g extends s.PureComponent {
    maxScrolledPercentage = 0;
    mountedAt = 0;
    componentDidMount() {
        this.mountedAt = Date.now(), this.maxScrolledPercentage = 0, this.track(h.HAw.CHANGE_LOG_OPENED, {}, !0)
    }
    close = () => ((0, o.OoC)(p.lb), Promise.resolve());
    handleScroll = e => {
        let {
            offsetHeight: t,
            scrollHeight: l,
            scrollTop: a
        } = e.getScrollerState();
        this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, a / (l - t)), 1)
    };
    track = (() => {
        var e = this;
        return function(t) {
            let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                {
                    changeLog: s
                } = e.props,
                {
                    date: n,
                    revision: r
                } = s,
                o = {
                    change_log_id: `${n}:${r}`,
                    ...l
                };
            a || (o = {
                seconds_open: Math.round((Date.now() - e.mountedAt) / 1e3),
                max_scrolled_percentage: 100 * parseInt(e.maxScrolledPercentage.toPrecision(4), 10),
                ...o
            }), c.default.track(t, o)
        }
    })();
    componentWillUnmount() {
        this.track(h.HAw.CHANGE_LOG_CLOSED)
    }
    render() {
        return (0, a.jsx)(d.A, {
            ...this.props,
            changeLog: this.props.changeLog,
            onClose: this.close,
            onScroll: this.handleScroll,
            track: this.track
        })
    }
}

function f(e) {
    let {
        changelog: t,
        loaded: l,
        clientTooOld: o
    } = (0, u.J)();
    if (s.useEffect(() => {
            if (l && null != t) return () => i.A.markChangelogAsSeen(t.id, t.date)
        }, [l, t]), o) return (0, a.jsx)(n.Modal, {
        title: m.intl.string(m.t.V9ospk),
        actions: [{
            text: m.intl.string(m.t.BddRzS),
            onClick: e.onClose
        }],
        ...e
    });
    if (null == t)
        if (l) return (0, a.jsx)(n.Modal, {
            title: m.intl.string(m.t.O1iRT8),
            actions: [{
                text: m.intl.string(m.t.BddRzS),
                onClick: e.onClose
            }],
            ...e
        });
        else return (0, r.A)(e);
    return (0, a.jsx)(g, {
        ...e,
        changeLog: t
    })
}