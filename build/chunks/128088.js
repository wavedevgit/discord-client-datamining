/** chunk id: 128088, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => f
}), a(896048);
var r = a(627968),
    n = a(64700),
    s = a(503698),
    l = a.n(s),
    i = a(827734),
    c = a(397927),
    o = a(580630),
    d = a(652215),
    m = a(985018),
    x = a(230378);

function u(e) {
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
}

function _(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            a.push.apply(a, r)
        }
        return a
    })(Object(t)).forEach(function(a) {
        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
    }), e
}

function p(e) {
    let {
        price: t,
        selected: a,
        onClick: n
    } = e;
    return (0, r.jsxs)(c.DUT, {
        className: l()(x.y3, {
            [x.wH]: a
        }),
        onClick: n,
        children: [a ? (0, r.jsx)(c.yr3, {
            size: "custom",
            width: 20,
            height: 20,
            secondaryColor: i.A.unsafe_rawColors.WHITE.css,
            color: i.A.unsafe_rawColors.BRAND_500.css
        }) : (0, r.jsx)("svg", {
            width: "20",
            height: "20",
            children: (0, r.jsx)("circle", {
                cx: 10,
                cy: 10,
                r: 10,
                className: x.n1
            })
        }), (0, r.jsxs)("div", {
            className: x.Z6,
            children: [(0, r.jsx)(c.Text, {
                variant: "text-sm/normal",
                tag: "span",
                children: (0, o.$g)(t, d.Yri.USD)
            }), (0, r.jsx)(c.Text, {
                variant: "text-xxs/medium",
                tag: "span",
                children: "/mo."
            })]
        })]
    })
}

function f(e) {
    let {
        selectedTemplate: t,
        handleSelectTemplate: a,
        newPricesToPick: s
    } = e, [l, i] = n.useState(0);
    return (0, r.jsxs)("div", {
        className: x.kL,
        children: [(0, r.jsxs)("div", {
            className: x.Qs,
            children: [(0, r.jsx)(c.Heading, {
                variant: "heading-md/semibold",
                children: m.intl.format(m.t["5WZ9Ct"], {
                    tierName: t.listings[0].name
                })
            }), (0, r.jsx)(c.Text, {
                variant: "text-sm/normal",
                className: x.G3,
                children: m.intl.format(m.t["5i7Uhb"], {
                    price: (0, o.$g)(t.listings[0].price_tier, d.Yri.USD)
                })
            }), s.map((e, t) => (0, r.jsx)(p, {
                price: e,
                selected: t === l,
                onClick: () => i(t)
            }, e))]
        }), (0, r.jsx)(c.Button, {
            variant: "primary",
            text: m.intl.string(m.t["1W7mCt"]),
            onClick: () => {
                a(_(u({}, t), {
                    listings: [_(u({}, t.listings[0]), {
                        price_tier: s[l]
                    })]
                }))
            }
        })]
    })
}