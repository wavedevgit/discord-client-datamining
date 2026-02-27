/** chunk id: 905074, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(323874), n(14289), n(35956);
var l = n(627968),
    a = n(64700),
    r = n(397927),
    i = n(46054),
    s = n(403362),
    d = n(861662),
    o = n(985018),
    c = n(322367),
    u = n(473169);
let _ = ["cdn.discordapp.com", "media.discordapp.net"],
    m = /^(?:localhost|127\.0\.0\.1|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/,
    x = (0, s.m6)() ? /^https?:\/\/(?:(?:ptb\.|canary\.)?discord(?:app)?\.com|localhost(?::\d+)?|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d+)?)\/channels\/(?:@me|\d+)\/\d+\/\d+$/ : /^https:\/\/(?:ptb\.|canary\.)?discord(?:app)?\.com\/channels\/(?:@me|\d+)\/\d+\/\d+$/;

function p(e) {
    try {
        return new URL(e), !0
    } catch {
        return !1
    }
}

function g(e) {
    return "" !== e && !!p(e) && ! function(e) {
        try {
            let t = new URL(e);
            if (_.some(e => t.hostname === e) || (0, s.m6)() && m.test(t.hostname)) return !0;
            return !1
        } catch {
            return !1
        }
    }(e)
}
let A = e => {
        let {
            data: {
                title: t,
                subtitle: n,
                placeholder: s,
                message_link_title: _,
                message_link_placeholder: m
            },
            onChange: A,
            initialContentUrl: h,
            initialMessageUrl: b,
            isRequired: v
        } = e, f = a.useMemo(() => i.A.reactParserFor({
            ...i.A.defaultRules,
            link: d.B
        }), []), [T, C] = a.useState(""), [j, I] = a.useState(""), [N, S] = a.useState(null), [k, y] = a.useState(null), [E, M] = a.useState(!1);
        a.useEffect(() => {
            C(h?.value ?? ""), I(b?.value ?? ""), h?.value != null && "" !== h.value && M(g(h.value))
        }, [h, b]);
        let R = a.useCallback(e => {
                if (C(e), "" === e) {
                    S(null), M(!1), I(""), y(null), A({
                        value: e,
                        isValid: !1
                    });
                    return
                }
                if (!p(e)) {
                    S(o.intl.string(o.t["24xrGb"])), M(!1), I(""), y(null), A({
                        value: e,
                        isValid: !1
                    });
                    return
                }
                let t = g(e);
                M(t), S(null), t ? "" === j ? A({
                    value: e,
                    isValid: !1
                }) : x.test(j) ? A({
                    value: e,
                    isValid: !0
                }, {
                    value: j,
                    isValid: !0
                }) : A({
                    value: e,
                    isValid: !1
                }, {
                    value: j,
                    isValid: !1
                }) : (I(""), y(null), A({
                    value: e,
                    isValid: !0
                }))
            }, [A, j]),
            O = a.useCallback(e => {
                if (I(e), "" === e || !x.test(e)) {
                    y(o.intl.string(o.t["24xrGb"])), A({
                        value: T,
                        isValid: !1
                    }, {
                        value: e,
                        isValid: !1
                    });
                    return
                }
                y(null), A({
                    value: T,
                    isValid: !0
                }, {
                    value: e,
                    isValid: !0
                })
            }, [A, T]);
        return (0, l.jsxs)("div", {
            children: [(0, l.jsxs)(r.BJc, {
                gap: 16,
                children: [(0, l.jsxs)("div", {
                    className: u.QB,
                    children: [null != t && (0, l.jsx)("div", {
                        className: u.QB,
                        children: (0, l.jsxs)(r.Text, {
                            variant: "text-sm/bold",
                            children: [t, v && (0, l.jsx)("span", {
                                className: c.m,
                                children: "*"
                            })]
                        })
                    }), (0, l.jsx)(r.ksK, {
                        onChange: R,
                        value: T,
                        error: N,
                        placeholder: s,
                        autoFocus: !0
                    })]
                }), E && null != _ && (0, l.jsxs)("div", {
                    className: u.QB,
                    children: [(0, l.jsx)("div", {
                        className: u.QB,
                        children: (0, l.jsxs)(r.Text, {
                            variant: "text-sm/bold",
                            children: [_, v && (0, l.jsx)("span", {
                                className: c.m,
                                children: "*"
                            })]
                        })
                    }), (0, l.jsx)(r.ksK, {
                        onChange: O,
                        value: j,
                        error: k,
                        placeholder: m
                    })]
                })]
            }), null != n && (0, l.jsx)(r.Text, {
                variant: "text-xs/normal",
                children: f(n)
            })]
        })
    },
    h = e => {
        let {
            element: t,
            onChange: n,
            state: r
        } = e, i = t.name, s = `${t.name}_message_link`, d = a.useCallback((e, t) => {
            null != t ? n(i, e.value, e.isValid && t.isValid, s, t.value) : n(i, e.value, e.isValid, s, void 0)
        }, [n, i, s]);
        return (0, l.jsx)(A, {
            data: t.data,
            onChange: d,
            initialContentUrl: r?.[i],
            initialMessageUrl: r?.[s],
            isRequired: t.should_submit_data
        })
    }