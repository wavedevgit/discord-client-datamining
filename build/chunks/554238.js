/** chunk id: 554238, original params: e,t,a (module,exports,require) **/
a.r(t), a.d(t, {
    default: () => h
}), a(896048);
var r = a(627968),
    s = a(64700),
    l = a(341856),
    n = a(955874),
    i = a(560958),
    o = a(311907),
    c = a(817281),
    d = a(773669),
    u = a(954571),
    _ = a(652215),
    N = a(985018),
    A = a(58682);
class p extends s.Component {
    shouldScrollToTop(e) {
        let {
            location: t
        } = e;
        return t.pathname.startsWith(_.BVt.APPLICATION_STORE_LISTING_SKU("")) || t.pathname.startsWith(_.BVt.APPLICATION_STORE_LISTING_APPLICATION(""))
    }
    render() {
        let {
            location: e,
            className: t,
            render: a,
            locale: o
        } = this.props;
        return (0, r.jsx)(i.A, {
            className: t,
            shouldScrollToTop: this.shouldScrollToTop,
            render: (t, i) => (0, r.jsxs)(s.Fragment, {
                children: [(0, r.jsx)(n.Y, {
                    avoidRouter: !0,
                    locale: o,
                    authRedirectTo: e.pathname,
                    track: u.default.track,
                    className: A.Kn,
                    onChangeLocale: this.handleHeaderLocaleChange,
                    mobileClassName: A.Kn,
                    openNavAriaLabel: N.intl.string(N.t.Fs9k3K),
                    hideNavAriaLabel: N.intl.string(N.t.AbfyHI),
                    skipToContentLabel: N.intl.string(N.t["18gavA"])
                }), a(t, i), (0, r.jsx)(l.w, {
                    locale: o,
                    authRedirectTo: e.pathname,
                    avoidRouter: !0,
                    track: u.default.track,
                    className: A.wn
                })]
            })
        })
    }
    constructor(...e) {
        super(...e),
            function(e, t, a) {
                t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a
            }(this, "handleHeaderLocaleChange", e => {
                e !== this.props.locale && c.Ay.overrideLocale(e)
            })
    }
}
let h = o.Ay.connectStores([d.default], () => ({
    locale: d.default.locale
}))(p)