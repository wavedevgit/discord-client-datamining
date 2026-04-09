/** chunk id: 612340 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    a = n(64700),
    l = n(780964),
    r = n(858897),
    s = n(926466),
    o = n(652215),
    d = n(985018),
    c = n(72692);
class u extends a.PureComponent {
    render() {
        return (0, i.jsx)(s.A, {
            guild: this.props.guild,
            onClick: () => (0, r.openUserSettings)(l.X.ACCOUNT_PANEL),
            message: d.intl.format(d.t["oCd+at"], {}),
            cta: d.intl.string(d.t["8dCrV9"]),
            trackingSource: o.kZU.GUILD_MFA_WARNING,
            type: o.n5X.MFA_WARNING,
            image: c,
            imageMarginX: 54,
            undismissable: !0
        })
    }
}
let A = u