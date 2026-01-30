/** chunk id: 156189, original params: e,t,a (module,exports,require) **/
a.d(t, {
    default: () => u
}), a(896048);
var n = a(627968),
    c = a(64700),
    i = a(732955),
    l = a(397927),
    r = a(321563),
    s = a(782997),
    o = a(652215),
    _ = a(670455),
    m = a(985018);

function u(e) {
    let {
        onClose: t,
        transitionState: u
    } = e, [d, b] = c.useState(null);
    return (0, n.jsx)(i.aFV, {
        title: m.intl.string(m.t.BIbnR2),
        subtitle: m.intl.string(m.t.j2kf2m),
        onClose: t,
        actions: [],
        transitionState: u,
        children: (0, n.jsxs)(l.BJc, {
            gap: 16,
            children: [(0, n.jsx)(r.A, {
                ratingOptions: [_.P0.GOOD, _.P0.BAD],
                emojiKind: "thumb",
                selectedRating: d,
                onChangeRating: function(e) {
                    b(e), null != e && ((0, s.A)({
                        rating: e
                    }), t(), (0, l.mMO)(async () => {
                        let {
                            default: e
                        } = await a.e("37836").then(a.bind(a, 845671));
                        return t => (0, n.jsx)(e, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(a);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(a, e).enumerable
                                }))), n.forEach(function(t) {
                                    var n;
                                    n = a[t], t in e ? Object.defineProperty(e, t, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : e[t] = n
                                })
                            }
                            return e
                        }({
                            body: m.intl.string(m.t.IuPjpE)
                        }, t))
                    }))
                }
            }), (0, n.jsx)(l.Text, {
                variant: "text-md/normal",
                children: m.intl.format(m.t.zru1K0, {
                    safetyCenterUrl: o.X7G.SAFETY_CENTER
                })
            })]
        })
    })
}