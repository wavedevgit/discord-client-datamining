/** chunk id: 162396, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
});
var r = n(627968),
    o = n(64700),
    a = n(503698),
    i = n.n(a),
    l = n(397927),
    c = n(975807),
    s = n(212031),
    u = n(975571),
    _ = n(809465),
    d = n(652215),
    b = n(985018),
    p = n(535790);

function f(e) {
    let {
        onClose: t
    } = e;
    return (0, r.jsx)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "settings-footer-more-menu",
        onClose: t,
        onSelect: () => {},
        "aria-label": "More options",
        children: (0, r.jsxs)(l.rXV, {
            children: [(0, r.jsx)(l.Drp, {
                id: "changelog",
                label: b.intl.string(b.t.LRmNAl),
                action: () => (0, s.j)(!0)
            }), (0, r.jsx)(l.Drp, {
                id: "acknowledgements",
                label: b.intl.string(b.t["0nUKy3"]),
                action: () => (0, c.A)(d.X7G.ACKNOWLEDGEMENTS)
            }), (0, r.jsx)(l.Drp, {
                id: "support",
                label: b.intl.string(b.t["Yl/Riu"]),
                action: () => (0, c.A)(u.C)
            })]
        })
    })
}

function y() {
    let e = o.useRef(null);
    return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(_.A, {
            compact: !0
        }), (0, r.jsxs)("div", {
            className: p.yJ,
            children: [(0, r.jsx)(l.MzZ, {
                href: d.X7G.PRIVACY,
                children: (0, r.jsx)(l.Text, {
                    tag: "span",
                    variant: "text-xxs/normal",
                    color: "currentColor",
                    children: b.intl.string(b.t["Knf/f/"])
                })
            }), (0, r.jsx)("span", {
                className: p.xE,
                "aria-hidden": "true",
                children: "•"
            }), (0, r.jsx)(l.MzZ, {
                href: d.X7G.TERMS,
                children: (0, r.jsx)(l.Text, {
                    tag: "span",
                    variant: "text-xxs/normal",
                    color: "currentColor",
                    children: b.intl.string(b.t.uFSTGq)
                })
            }), (0, r.jsx)("span", {
                className: p.xE,
                "aria-hidden": "true",
                children: "•"
            }), (0, r.jsx)(l.YNO, {
                targetElementRef: e,
                position: "top",
                align: "center",
                spacing: 0,
                animation: l.YNO.Animation.NONE,
                renderPopout: e => {
                    let {
                        closePopout: t
                    } = e;
                    return (0, r.jsx)(f, {
                        onClose: t
                    })
                },
                children: (t, n) => {
                    var o, a;
                    return (0, r.jsx)(l.MzZ, (o = function(e) {
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
                    }({}, t), a = a = {
                        ref: e,
                        useDefaultUnderlineStyles: !1,
                        className: i()(p.Mj, {
                            [p.vu]: n.isShown
                        }),
                        children: (0, r.jsx)(l.Text, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: b.intl.string(b.t["UKOtz+"])
                        })
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(a)).forEach(function(e) {
                        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e))
                    }), o))
                }
            })]
        })]
    })
}