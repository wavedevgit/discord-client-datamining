/** chunk id: 955874, original params: e,t,a (module,exports,require) **/
a.d(t, {
    Y: () => N
});
var r = a(627968),
    s = a(64700),
    l = a(503698),
    n = a.n(l),
    i = a(409291),
    o = a(829869),
    c = a(280617),
    d = a(855522),
    u = a(730555);
let _ = null;
class N extends s.PureComponent {
    render() {
        let {
            token: e,
            className: t,
            onChangeLocale: a,
            mainContentId: l,
            mobileClassName: i,
            avoidRouter: d,
            authRedirectTo: N,
            openNavAriaLabel: A,
            hideNavAriaLabel: p,
            skipToContentLabel: h
        } = this.props;
        return null == _ ? null : (0, r.jsxs)(s.Fragment, {
            children: [(0, r.jsx)(o.Q, {
                className: n()(u.q, t),
                TrackClick: _,
                token: e,
                avoidRouter: d,
                authRedirectTo: N,
                onChangeLocale: a,
                mainContentId: l,
                skipToContentLabel: h
            }), (0, r.jsx)(c.i, {
                className: n()(u.O, i),
                token: e,
                avoidRouter: d,
                TrackClick: _,
                onChangeLocale: a,
                openNavAriaLabel: A,
                hideNavAriaLabel: p
            })]
        })
    }
    constructor(e) {
        super(e), null != e.locale && d.A.setLocale(e.locale), _ = t => (0, r.jsx)(i.A, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(a);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable
                }))), r.forEach(function(t) {
                    var r;
                    r = a[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r
                })
            }
            return e
        }({
            track: e.track,
            trackOutboundLink: e.trackOutboundLink
        }, t))
    }
}