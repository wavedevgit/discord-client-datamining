/** Chunk was on 5606 **/
/** chunk id: 442671, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(615300),
    o = n(837381),
    c = n(158954),
    d = n(688810),
    u = n(657331),
    p = n(331011);
let _ = e => {
    let {
        userId: t,
        children: n,
        isLast: l,
        className: _
    } = e, [m, g] = i.useState(!1), {
        analyticsLocations: f
    } = (0, d.Ay)(), b = i.useCallback(() => {
        (0, u.openUserProfileModal)({
            userId: t,
            sourceAnalyticsLocations: f
        })
    }, [t, f]), h = () => {
        g(!0)
    }, A = () => {
        g(!1)
    };
    return (0, r.jsx)(o.tG, {
        id: t,
        children: e => {
            var t, i;
            return (0, r.jsx)(c.vN3, {
                offset: {
                    left: -8,
                    right: -8
                },
                children: (0, r.jsx)(a.A.div, (t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r;
                            r = n[t], t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r
                        })
                    }
                    return e
                }({
                    style: {
                        opacity: 1
                    },
                    className: s()(p.KG, _, {
                        [p.HV]: l,
                        [p.vu]: m
                    }),
                    onMouseEnter: h,
                    onMouseLeave: A,
                    onClick: b
                }, e), i = i = {
                    children: n(m)
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(i)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }), t))
            })
        }
    })
}