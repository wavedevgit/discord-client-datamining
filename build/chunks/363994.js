/** chunk id: 363994, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    r = n(64700),
    l = n(800342),
    a = n(847599),
    s = n(506164),
    o = n(985018),
    d = n(601250);
class c extends r.PureComponent {
    handleDisagree = () => {
        (0, l.bf)()
    };
    handleAgree = () => {
        (0, l.VD)()
    };
    render() {
        let {
            game: {
                name: e
            }
        } = this.props;
        return (0, i.jsx)("div", {
            className: d.J,
            children: (0, i.jsx)(s.A, {
                modalType: a.A5.NSFW_APP_LISTING,
                onAgree: this.handleAgree,
                onDisagree: this.handleDisagree,
                title: o.intl.formatToPlainString(o.t.n5PGEY, {
                    name: e
                }),
                description: o.intl.string(o.t["bJx/aL"]),
                agreement: o.intl.string(o.t.odZq8d),
                disagreement: o.intl.string(o.t.hieTsG)
            })
        })
    }
}
let u = c