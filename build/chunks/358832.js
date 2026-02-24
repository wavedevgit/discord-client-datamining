/** chunk id: 358832, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(157559),
    o = n(229224),
    d = n(987482),
    c = n(598384),
    u = n(383501),
    A = n(58736),
    h = n(985018),
    _ = n(512147);
class m extends r.PureComponent {
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.memoizedMode ? {
            memoizedMode: e.mode,
            clicked: !1
        } : null
    }
    state = {
        memoizedMode: this.props.mode,
        clicked: !1
    };
    handleDownloadApps() {
        (0, a.qfG)(e => (0, i.jsx)(d.default, {
            source: "Links",
            ...e
        }))
    }
    handleInstallDownload = () => {
        u.A.isConnected() ? s.A.show({
            title: h.intl.string(h.t.tiu1ly),
            body: h.intl.string(h.t["zK+lqW"]),
            onConfirm: this.doUpdate,
            cancelText: h.intl.string(h.t["ETE/oC"]),
            confirmText: h.intl.string(h.t["QDX/qu"]),
            confirmVariant: "critical-primary"
        }) : this.doUpdate()
    };
    doUpdate = () => {
        this.state.clicked || (this.setState({
            clicked: !0
        }), (0, o.a)())
    };
    render() {
        switch (this.props.mode) {
            case "UPDATE_AVAILABLE":
                return (0, i.jsx)(A.In, {
                    tooltip: h.intl.string(h.t["zp9d/4"]),
                    foreground: _.el,
                    background: _.gg,
                    icon: a.s3U,
                    className: this.props.className
                });
            case "UPDATE_MANUALLY":
            case "UPDATE_DOWNLOADED":
                return (0, i.jsx)(A.In, {
                    tooltip: h.intl.string(h.t.u18OXF),
                    foreground: _.wV,
                    onClick: this.handleInstallDownload,
                    icon: a.s3U,
                    className: this.props.className
                });
            default:
                return null
        }
    }
}
let p = l.Ay.connectStores([c.A], () => ({
    mode: c.A.getState()
}))(m)