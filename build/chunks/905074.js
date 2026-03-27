/** chunk id: 905074 params = (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(323874), n(14289), n(35956);
var l = n(627968),
    a = n(64700),
    r = n(397927),
    i = n(46054),
    s = n(403362),
    d = n(861662),
    o = n(985018),
    c = n(773680),
    u = n(885106);
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

function h(e) {
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
let g = e => {
        let {
            data: {
                title: t,
                subtitle: n,
                placeholder: s,
                message_link_title: _,
                message_link_placeholder: m
            },
            onChange: g,
            initialContentUrl: A,
            initialMessageUrl: v,
            isRequired: f
        } = e, b = a.useMemo(() => i.A.reactParserFor({
            ...i.A.defaultRules,
            link: d.B
        }), []), [C, T] = a.useState(""), [j, N] = a.useState(""), [I, S] = a.useState(null), [y, E] = a.useState(null), [k, w] = a.useState(!1);
        a.useEffect(() => {
            T(A?.value ?? ""), N(v?.value ?? ""), A?.value != null && "" !== A.value && w(h(A.value))
        }, [A, v]);
        let R = a.useCallback(e => {
                if (T(e), "" === e) {
                    S(null), w(!1), N(""), E(null), g({
                        value: e,
                        isValid: !1
                    });
                    return
                }
                if (!p(e)) {
                    S(o.intl.string(o.t["24xrGb"])), w(!1), N(""), E(null), g({
                        value: e,
                        isValid: !1
                    });
                    return
                }
                let t = h(e);
                w(t), S(null), t ? "" === j ? g({
                    value: e,
                    isValid: !1
                }) : x.test(j) ? g({
                    value: e,
                    isValid: !0
                }, {
                    value: j,
                    isValid: !0
                }) : g({
                    value: e,
                    isValid: !1
                }, {
                    value: j,
                    isValid: !1
                }) : (N(""), E(null), g({
                    value: e,
                    isValid: !0
                }))
            }, [g, j]),
            M = a.useCallback(e => {
                if (N(e), "" === e || !x.test(e)) {
                    E(o.intl.string(o.t["24xrGb"])), g({
                        value: C,
                        isValid: !1
                    }, {
                        value: e,
                        isValid: !1
                    });
                    return
                }
                E(null), g({
                    value: C,
                    isValid: !0
                }, {
                    value: e,
                    isValid: !0
                })
            }, [g, C]);
        return (0, l.jsxs)("div", {
            children: [(0, l.jsxs)(r.BJc, {
                gap: 16,
                children: [(0, l.jsxs)("div", {
                    className: u.QB,
                    children: [null != t && (0, l.jsx)("div", {
                        className: u.QB,
                        children: (0, l.jsxs)(r.Text, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            children: [t, f && (0, l.jsx)("span", {
                                className: c.m,
                                children: "*"
                            })]
                        })
                    }), (0, l.jsx)(r.ksK, {
                        onChange: R,
                        value: C,
                        error: I,
                        placeholder: s,
                        autoFocus: !0
                    })]
                }), k && null != _ && (0, l.jsxs)("div", {
                    className: u.QB,
                    children: [(0, l.jsx)("div", {
                        className: u.QB,
                        children: (0, l.jsxs)(r.Text, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            children: [_, f && (0, l.jsx)("span", {
                                className: c.m,
                                children: "*"
                            })]
                        })
                    }), (0, l.jsx)(r.ksK, {
                        onChange: M,
                        value: j,
                        error: y,
                        placeholder: m
                    })]
                })]
            }), null != n && (0, l.jsx)(r.Text, {
                variant: "text-xs/normal",
                children: b(n)
            })]
        })
    },
    A = e => {
        let {
            element: t,
            onChange: n,
            state: r
        } = e, i = t.name, s = `${t.name}_message_link`, d = a.useCallback((e, t) => {
            null != t ? n(i, e.value, e.isValid && t.isValid, s, t.value) : n(i, e.value, e.isValid, s, void 0)
        }, [n, i, s]);
        return (0, l.jsx)(g, {
            data: t.data,
            onChange: d,
            initialContentUrl: r?.[i],
            initialMessageUrl: r?.[s],
            isRequired: t.should_submit_data
        })
    }