/** Chunk was on 12236 **/
/** chunk id: 905074, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(896048), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956), n(747238);
var l = n(627968),
    r = n(64700),
    i = n(397927),
    a = n(46054),
    s = n(861662),
    o = n(985018),
    d = n(322367),
    c = n(473169);
let u = ["cdn.discord.com", "cdn.discordapp.com", "media.discordapp.net"],
    m = /^https:\/\/(?:ptb\.|canary\.)?discord(?:app)?\.com\/channels\/(?:@me|\d+)\/\d+\/\d+$/;

function p(e) {
    try {
        return new URL(e), !0
    } catch (e) {
        return !1
    }
}

function b(e) {
    return "" !== e && !!p(e) && ! function(e) {
        try {
            let t = new URL(e);
            return u.some(e => t.hostname === e)
        } catch (e) {
            return !1
        }
    }(e)
}
let _ = e => {
        let {
            data: {
                title: t,
                subtitle: n,
                placeholder: u,
                message_link_title: _,
                message_link_placeholder: g
            },
            onChange: x,
            initialContentUrl: h,
            initialMessageUrl: v,
            isRequired: f
        } = e, j = r.useMemo(() => {
            var e, t;
            return a.A.reactParserFor((e = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), l.forEach(function(t) {
                        var l;
                        l = n[t], t in e ? Object.defineProperty(e, t, {
                            value: l,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = l
                    })
                }
                return e
            }({}, a.A.defaultRules), t = t = {
                link: s.B
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, l)
                }
                return n
            })(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }), e))
        }, []), [A, y] = r.useState(""), [O, S] = r.useState(""), [T, N] = r.useState(null), [k, w] = r.useState(null), [C, I] = r.useState(!1);
        r.useEffect(() => {
            var e, t;
            y(null != (e = null == h ? void 0 : h.value) ? e : ""), S(null != (t = null == v ? void 0 : v.value) ? t : ""), (null == h ? void 0 : h.value) != null && "" !== h.value && I(b(h.value))
        }, [h, v]);
        let P = r.useCallback(e => {
                if (y(e), "" === e) {
                    N(null), I(!1), S(""), w(null), x({
                        value: e,
                        isValid: !1
                    });
                    return
                }
                if (!p(e)) {
                    N(o.intl.string(o.t["24xrGb"])), I(!1), S(""), w(null), x({
                        value: e,
                        isValid: !1
                    });
                    return
                }
                let t = b(e);
                I(t), N(null), t ? "" === O ? x({
                    value: e,
                    isValid: !1
                }) : m.test(O) ? x({
                    value: e,
                    isValid: !0
                }, {
                    value: O,
                    isValid: !0
                }) : x({
                    value: e,
                    isValid: !1
                }, {
                    value: O,
                    isValid: !1
                }) : (S(""), w(null), x({
                    value: e,
                    isValid: !0
                }))
            }, [x, O]),
            E = r.useCallback(e => {
                if (S(e), "" === e || !m.test(e)) {
                    w(o.intl.string(o.t["24xrGb"])), x({
                        value: A,
                        isValid: !1
                    }, {
                        value: e,
                        isValid: !1
                    });
                    return
                }
                w(null), x({
                    value: A,
                    isValid: !0
                }, {
                    value: e,
                    isValid: !0
                })
            }, [x, A]);
        return (0, l.jsxs)("div", {
            children: [(0, l.jsxs)(i.BJc, {
                gap: 16,
                children: [(0, l.jsxs)("div", {
                    className: c.QB,
                    children: [null != t && (0, l.jsx)("div", {
                        className: c.QB,
                        children: (0, l.jsxs)(i.Text, {
                            variant: "text-sm/bold",
                            children: [t, f && (0, l.jsx)("span", {
                                className: d.m,
                                children: "*"
                            })]
                        })
                    }), (0, l.jsx)(i.ksK, {
                        onChange: P,
                        value: A,
                        error: T,
                        placeholder: u,
                        autoFocus: !0
                    })]
                }), C && null != _ && (0, l.jsxs)("div", {
                    className: c.QB,
                    children: [(0, l.jsx)("div", {
                        className: c.QB,
                        children: (0, l.jsxs)(i.Text, {
                            variant: "text-sm/bold",
                            children: [_, f && (0, l.jsx)("span", {
                                className: d.m,
                                children: "*"
                            })]
                        })
                    }), (0, l.jsx)(i.ksK, {
                        onChange: E,
                        value: O,
                        error: k,
                        placeholder: g
                    })]
                })]
            }), null != n && (0, l.jsx)(i.Text, {
                variant: "text-xs/normal",
                children: j(n)
            })]
        })
    },
    g = e => {
        let {
            element: t,
            onChange: n,
            state: i
        } = e, a = t.name, s = "".concat(t.name, "_message_link"), o = r.useCallback((e, t) => {
            null != t ? n(a, e.value, e.isValid && t.isValid, s, t.value) : n(a, e.value, e.isValid, s, void 0)
        }, [n, a, s]);
        return (0, l.jsx)(_, {
            data: t.data,
            onChange: o,
            initialContentUrl: null == i ? void 0 : i[a],
            initialMessageUrl: null == i ? void 0 : i[s],
            isRequired: t.should_submit_data
        })
    }