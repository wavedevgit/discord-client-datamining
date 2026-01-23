/** Chunk was on 48403 **/
/** chunk id: 183742, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => d
});
var n = r(627968),
    i = r(64700),
    a = r(284009),
    l = r.n(a),
    o = r(311907),
    c = r(885377),
    s = r(287809),
    p = r(927578),
    m = r(985018);
class u extends i.Component {
    render() {
        let {
            user: e,
            transitionState: t,
            onClose: r
        } = this.props;
        return (0, n.jsx)(c.A, {
            transitionState: t,
            onClose: async () => {
                await r(!1)
            },
            "aria-label": m.intl.string(m.t.BNg1ir),
            title: m.intl.string(m.t.BNg1ir),
            premiumModalType: c.A.Types.UPGRADE,
            primary: {
                onClick: () => r(!0),
                label: m.intl.string(m.t.P3etAv)
            },
            children: p.Ay.isPremium(e) && !p.Ay.canInstallPremiumApplications(e) ? m.intl.string(m.t.mKA9OJ) : m.intl.string(m.t.sqSlm4)
        })
    }
}
let d = o.Ay.connectStores([s.default], () => {
    let e = s.default.getCurrentUser();
    return l()(null != e, "PremiumRequiredModal: user cannot be null"), {
        user: e
    }
})(u)