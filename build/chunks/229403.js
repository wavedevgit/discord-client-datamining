/** Chunk was on web.js **/
/** chunk id: 229403, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    o = n(397927),
    s = n(493405),
    l = n(812745),
    c = n(70142),
    u = n(825755),
    d = n(985018),
    f = n(666491);
class p extends i.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && s.fB()
    }
    componentDidUpdate(e) {
        null == e.venmoClient && null != this.props.venmoClient && s.fB()
    }
    componentWillUnmount() {
        s._b().then(() => {
            null != c.A.getClient() && s.DD()
        })
    }
    render() {
        let {
            venmoUsername: e,
            className: t,
            venmoClient: n
        } = this.props, i = null != e && "" !== e;
        return (0, r.jsxs)("div", {
            className: t,
            children: [(0, r.jsx)(l.Ay, {
                type: l.Ay.Types.VENMO,
                size: l.y3.MEDIUM,
                className: f.Z
            }), i ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(o.Heading, {
                    variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                    className: f.y,
                    children: d.intl.format(d.t.DowIre, {
                        venmoUsername: e
                    })
                }), (0, r.jsx)(o.Text, {
                    variant: "text-md/medium",
                    className: f.y,
                    children: d.intl.string(d.t.kmEvnR)
                })]
            }) : (0, r.jsx)(o.Text, {
                variant: "text-md/medium",
                className: f.y,
                children: null == n ? d.intl.string(d.t["2ouZDU"]) : d.intl.string(d.t.mIL6Jb)
            })]
        })
    }
}
let _ = a.Ay.connectStores([c.A, u.A], () => ({
    venmoUsername: u.A.venmoUsername,
    venmoClient: c.A.getVenmoClient()
}))(p)