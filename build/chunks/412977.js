/** chunk id: 412977, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(397927),
    o = n(118001),
    c = n(147925),
    d = n(652215),
    u = n(985018),
    g = n(690450);

function m(e) {
    let {
        guild: t
    } = e, l = t.verificationLevel, m = i.useMemo(() => (0, o.RU)(l), [l]);
    return (0, r.jsxs)(a.DUT, {
        onClick: () => (0, a.mMO)(async () => {
            let {
                default: e
            } = await n.e("70232").then(n.bind(n, 313003));
            return n => {
                var i, l;
                return (0, r.jsx)(e, (i = function(e) {
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
                }({}, n), l = l = {
                    guild: t,
                    hideColors: !0
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(l)).forEach(function(e) {
                    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
                }), i))
            }
        }),
        className: s()(g.ph, g.vk),
        children: [(0, r.jsxs)("div", {
            className: g.Ly,
            children: [(0, r.jsx)(a.Heading, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: u.intl.string(u.t.DpRdYK)
            }), (0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: u.intl.string(u.t.mA17eD)
            }), (0, r.jsx)("div", {
                className: g.__invalid_pillRow,
                children: (0, r.jsxs)(a.Text, {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    className: g.Lp,
                    children: [l === d.PvD.VERY_HIGH ? (0, r.jsx)(a.u6o, {
                        size: "custom",
                        color: "currentColor",
                        width: 16,
                        height: 16
                    }) : (0, r.jsx)(a.u6c, {
                        size: "custom",
                        color: "currentColor",
                        width: 16,
                        height: 16
                    }), m]
                })
            })]
        }), (0, r.jsx)(c.A, {
            height: 24,
            width: 24,
            direction: c.A.Directions.RIGHT,
            className: g.OW
        })]
    })
}