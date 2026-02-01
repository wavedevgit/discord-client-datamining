/** chunk id: 478677, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    c = n(87664),
    u = n(287809),
    d = n(427262),
    p = n(198525),
    h = n(652215),
    g = n(985018),
    m = n(816751),
    f = n(140869);
let A = function(e) {
    let {
        quest: t
    } = e, [n, l] = i.useState(!1), A = i.useRef(null), _ = (0, s.bG)([u.default], () => u.default.getCurrentUser()), b = d.Ay.useName(_), E = (0, c.A)(null == _ ? void 0 : _.id), O = i.useCallback(e => {
        var n, i;
        return (0, r.jsx)(p.A, (n = function(e) {
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
            name: b,
            quest: t,
            memberListItemRef: A,
            applicationStream: E
        }, e), i = i = {
            closePopout: () => {
                l(!1)
            }
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(i)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n))
    }, [t, E, b]);
    return (0, r.jsx)("div", {
        className: m.x3,
        children: (0, r.jsxs)("div", {
            className: m.B0,
            children: [(0, r.jsx)(o.Heading, {
                className: f.R_,
                variant: "heading-md/semibold",
                children: g.intl.string(g.t.jY7Zxg)
            }), (0, r.jsx)("div", {
                className: f.$Q,
                children: g.intl.string(g.t.q3hbne)
            }), (0, r.jsx)("div", {
                className: f.k0,
                children: (0, r.jsx)(o.YNO, {
                    targetElementRef: A,
                    renderPopout: O,
                    position: "bottom",
                    shouldShow: n,
                    onRequestClose: () => l(!1),
                    nudgeAlignIntoViewport: !1,
                    useRawTargetDimensions: !0,
                    animation: o.YNO.Animation.NONE,
                    spacing: -3,
                    fixed: !0,
                    scrollBehavior: "close",
                    children: () => (0, r.jsx)("div", {
                        ref: A,
                        className: a()(f.Tn, {
                            [f.wH]: n
                        }),
                        children: (0, r.jsx)(o.DUT, {
                            onClick: () => l(!n),
                            tabIndex: 0,
                            children: (0, r.jsxs)("div", {
                                className: f.lm,
                                children: [(0, r.jsx)(o.euF, {
                                    size: o._3J.SIZE_32,
                                    src: null == _ ? void 0 : _.getAvatarURL(void 0, 32),
                                    status: h.clD.ONLINE,
                                    "aria-label": null == _ ? void 0 : _.username
                                }), (0, r.jsxs)("div", {
                                    className: f.Fj,
                                    children: [(0, r.jsx)(o.Text, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        children: b
                                    }), (0, r.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: g.intl.string(g.t.b9w3bO)
                                    })]
                                })]
                            })
                        })
                    })
                })
            })]
        })
    })
}