/** Chunk was on 72752 **/
/** chunk id: 88872, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => y
}), r(896048);
var n = r(627968),
    o = r(64700),
    l = r(158954),
    a = r(450507),
    i = r(397927),
    c = r(256311),
    d = r(954571),
    s = r(824611),
    u = r(45813),
    _ = r(559868),
    m = r(652215),
    h = r(985018);

function b(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
            b(e, t, r[t])
        })
    }
    return e
}

function g(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
        }
        return r
    })(Object(t)).forEach(function(r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
    }), e
}
class f extends o.PureComponent {
    componentDidMount() {
        this.mountedAt = Date.now(), this.maxScrolledPercentage = 0, this.track(m.HAw.CHANGE_LOG_OPENED, {}, !0)
    }
    componentWillUnmount() {
        this.track(m.HAw.CHANGE_LOG_CLOSED)
    }
    render() {
        return (0, n.jsx)(u.A, g(p({}, this.props), {
            changeLog: this.props.changeLog,
            onClose: this.close,
            onScroll: this.handleScroll,
            track: this.track
        }))
    }
    constructor(...e) {
        var t;
        super(...e), t = this, b(this, "maxScrolledPercentage", 0), b(this, "mountedAt", 0), b(this, "close", () => ((0, i.OoC)(_.lb), Promise.resolve())), b(this, "handleScroll", e => {
            let {
                offsetHeight: t,
                scrollHeight: r,
                scrollTop: n
            } = e.getScrollerState();
            this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, n / (r - t)), 1)
        }), b(this, "track", function(e) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                {
                    changeLog: o
                } = t.props,
                {
                    date: l,
                    revision: a
                } = o,
                i = p({
                    change_log_id: "".concat(l, ":").concat(a)
                }, r);
            n || (i = p({
                seconds_open: Math.round((Date.now() - t.mountedAt) / 1e3),
                max_scrolled_percentage: 100 * parseInt(t.maxScrolledPercentage.toPrecision(4), 10)
            }, i)), d.default.track(e, i)
        })
    }
}

function y(e) {
    let {
        changelog: t,
        loaded: r,
        clientTooOld: i
    } = (0, s.J)();
    if (o.useEffect(() => {
            if (r && null != t) return () => c.A.markChangelogAsSeen(t.id, t.date)
        }, [r, t]), i) return (0, n.jsx)(l.Modal, p({
        title: h.intl.string(h.t.V9ospk),
        actions: [{
            text: h.intl.string(h.t.BddRzS),
            onClick: e.onClose
        }]
    }, e));
    if (null == t)
        if (r) return (0, n.jsx)(l.Modal, p({
            title: h.intl.string(h.t.O1iRT8),
            actions: [{
                text: h.intl.string(h.t.BddRzS),
                onClick: e.onClose
            }]
        }, e));
        else return (0, a.A)(e);
    return (0, n.jsx)(f, g(p({}, e), {
        changeLog: t
    }))
}