/** chunk id: 839225, original params: e,t,s (module,exports,require) **/
s.d(t, {
    default: () => v
});
var r = s(627968),
    n = s(64700),
    i = s(503698),
    a = s.n(i),
    c = s(554146),
    l = s(732955),
    o = s(397927),
    d = s(367727),
    u = s(954571),
    b = s(871123),
    m = s(44724),
    f = s(652215),
    j = s(49999),
    x = s(818348),
    h = s(985018),
    p = s(992241),
    g = s(642785),
    O = s(78834);

function v(e) {
    n.useEffect(() => {
        u.default.track(f.HAw.OPEN_MODAL, {
            type: "Social Layer Storefront Announcement Modal"
        }), (0, d.d6)(c.M.GAME_SHOP_ANNOUNCEMENT_MODAL, {
            dismissAction: j.i.AUTO_DISMISS
        })
    }, []);
    let t = n.useCallback(() => {
            (0, m.X)({
                guildId: (0, b.zf)()
            })
        }, []),
        {
            onClose: s
        } = e,
        i = n.useCallback(() => {
            (0, m.default)({
                guildId: (0, b.zf)()
            }), s()
        }, [s]);
    return (0, r.jsx)(l.NPJ, {
        theme: x.NJ.DARK,
        children: n => {
            var c, d;
            return (0, r.jsx)(o.dWK, (c = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(s);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(s).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(s, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = s[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }({}, e), d = d = {
                size: "lg",
                children: (0, r.jsxs)("div", {
                    className: a()(n, p.Qs),
                    children: [(0, r.jsx)("div", {
                        className: p.b,
                        children: (0, r.jsx)(l.JnF, {
                            onClick: s
                        })
                    }), (0, r.jsx)("div", {
                        className: p.xX
                    }), (0, r.jsxs)("div", {
                        className: p.gn,
                        children: [(0, r.jsx)(l.DZT, {
                            variant: "display-md",
                            color: "text-strong",
                            className: p.DD,
                            children: h.intl.string(h.t.to0E8U)
                        }), (0, r.jsx)(l.DZT, {
                            variant: "display-md",
                            color: "text-strong",
                            className: p.DD,
                            children: h.intl.string(h.t.BKEkBd)
                        }), (0, r.jsx)(l.DZT, {
                            variant: "heading-lg/medium",
                            color: "text-muted",
                            className: p.VA,
                            children: h.intl.string(h.t.SiXpR2)
                        })]
                    }), (0, r.jsxs)("div", {
                        className: p.qT,
                        children: [(0, r.jsxs)("div", {
                            className: p.N4,
                            children: [(0, r.jsx)("div", {
                                className: p.AD,
                                children: (0, r.jsx)("img", {
                                    src: O,
                                    alt: ""
                                })
                            }), (0, r.jsxs)("div", {
                                className: p.kh,
                                children: [(0, r.jsx)(l.DZT, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: h.intl.string(h.t["5hRbeH"])
                                }), (0, r.jsx)(l.EYj, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: h.intl.string(h.t["72sDuh"])
                                })]
                            })]
                        }), (0, r.jsxs)("div", {
                            className: p.N4,
                            children: [(0, r.jsx)("div", {
                                className: p.AD,
                                children: (0, r.jsx)("img", {
                                    src: g,
                                    alt: ""
                                })
                            }), (0, r.jsxs)("div", {
                                className: p.kh,
                                children: [(0, r.jsx)(l.DZT, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: h.intl.string(h.t.MO4ASw)
                                }), (0, r.jsx)(l.EYj, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: h.intl.string(h.t.o4i2Wx)
                                })]
                            })]
                        })]
                    }), (0, r.jsx)(l.$nd, {
                        variant: "primary",
                        text: h.intl.string(h.t.CekBHq),
                        onClick: i,
                        onMouseDown: t
                    })]
                })
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(d)) : (function(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    s.push.apply(s, r)
                }
                return s
            })(Object(d)).forEach(function(e) {
                Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(d, e))
            }), c))
        }
    })
}