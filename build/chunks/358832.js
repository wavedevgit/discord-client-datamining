/** chunk id: 358832 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    a = n(64700),
    r = n(311907),
    l = n(397927),
    s = n(157559),
    o = n(229224),
    d = n(189252),
    c = n(987482),
    u = n(598384),
    A = n(383501),
    _ = n(985018),
    h = n(459251);
class m extends a.PureComponent {
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
        (0, l.qfG)(e => (0, i.jsx)(c.default, {
            source: "Links",
            ...e
        }))
    }
    handleInstallDownload = () => {
        A.A.isConnected() ? s.A.show({
            title: _.intl.string(_.t.tiu1ly),
            body: _.intl.string(_.t["zK+lqW"]),
            onConfirm: this.doUpdate,
            cancelText: _.intl.string(_.t["ETE/oC"]),
            confirmText: _.intl.string(_.t["QDX/qu"]),
            confirmVariant: "critical-primary"
        }) : this.doUpdate()
    };
    doUpdate = () => {
        this.state.clicked || (this.setState({
            clicked: !0
        }), (0, o.a)())
    };
    render() {
        let e = "UPDATE_AVAILABLE" === this.props.mode,
            t = "UPDATE_DOWNLOADED" === this.props.mode || "UPDATE_MANUALLY" === this.props.mode;
        return e || t ? (0, i.jsx)(d.A, {
            tooltip: e ? _.intl.string(_.t["zp9d/4"]) : _.intl.string(_.t.u18OXF),
            color: l.LU0.unsafe_rawColors.GREEN_360.css,
            colorClass: e ? h.z : void 0,
            onClick: this.handleInstallDownload,
            icon: l.s3U,
            disabled: e
        }) : null
    }
}
let g = r.Ay.connectStores([u.A], () => ({
    mode: u.A.getState()
}))(m)