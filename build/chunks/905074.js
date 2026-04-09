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
    p = (0, s.m6)() ? /^https?:\/\/(?:(?:ptb\.|canary\.)?discord(?:app)?\.com|localhost(?::\d+)?|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d+)?)\/channels\/(?:@me|\d+)\/\d+\/\d+$/ : /^https:\/\/(?:ptb\.|canary\.)?discord(?:app)?\.com\/channels\/(?:@me|\d+)\/\d+\/\d+$/;

function g(e) {
    try {
        return new URL(e), !0
    } catch {
        return !1
    }
}

function h(e) {
    return "" !== e && !!g(e) && ! function(e) {
        try {
            let t = new URL(e);
            if (_.some(e => t.hostname === e) || (0, s.m6)() && m.test(t.hostname)) return !0;
            return !1
        } catch {
            return !1
        }
    }(e)
}
let x = e => {
        let {
            data: {
                title: t,
                subtitle: n,
                placeholder: s,
                message_link_title: _,
                message_link_placeholder: m
            },
            onChange: x,
            initialContentUrl: A,
            initialMessageUrl: v,
            isRequired: b
        } = e, f = a.useMemo(() => i.A.reactParserFor({
            ...i.A.defaultRules,
            link: d.B
        }), []), [T, S] = a.useState(""), [E, I] = a.useState(""), [C, N] = a.useState(null), [j, y] = a.useState(null), [k, R] = a.useState(!1);
        a.useEffect(() => {
            S(A?.value ?? ""), I(v?.value ?? ""), A?.value != null && "" !== A.value && R(h(A.value))
        }, [A, v]);
        let D = a.useCallback(e => {
                if (S(e), "" === e) {
                    N(null), R(!1), I(""), y(null), x({
                        value: e,
                        isValid: !1
                    });
                    return
                }
                if (!g(e)) {
                    N(o.intl.string(o.t["24xrGb"])), R(!1), I(""), y(null), x({
                        value: e,
                        isValid: !1
                    });
                    return
                }
                let t = h(e);
                R(t), N(null), t ? "" === E ? x({
                    value: e,
                    isValid: !1
                }) : p.test(E) ? x({
                    value: e,
                    isValid: !0
                }, {
                    value: E,
                    isValid: !0
                }) : x({
                    value: e,
                    isValid: !1
                }, {
                    value: E,
                    isValid: !1
                }) : (I(""), y(null), x({
                    value: e,
                    isValid: !0
                }))
            }, [x, E]),
            M = a.useCallback(e => {
                if (I(e), "" === e || !p.test(e)) {
                    y(o.intl.string(o.t["24xrGb"])), x({
                        value: T,
                        isValid: !1
                    }, {
                        value: e,
                        isValid: !1
                    });
                    return
                }
                y(null), x({
                    value: T,
                    isValid: !0
                }, {
                    value: e,
                    isValid: !0
                })
            }, [x, T]);
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
                            children: [t, b && (0, l.jsx)("span", {
                                className: c.m,
                                children: "*"
                            })]
                        })
                    }), (0, l.jsx)(r.ksK, {
                        onChange: D,
                        value: T,
                        error: C,
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
                            children: [_, b && (0, l.jsx)("span", {
                                className: c.m,
                                children: "*"
                            })]
                        })
                    }), (0, l.jsx)(r.ksK, {
                        onChange: M,
                        value: E,
                        error: j,
                        placeholder: m
                    })]
                })]
            }), null != n && (0, l.jsx)(r.Text, {
                variant: "text-xs/normal",
                children: f(n)
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
        return (0, l.jsx)(x, {
            data: t.data,
            onChange: d,
            initialContentUrl: r?.[i],
            initialMessageUrl: r?.[s],
            isRequired: t.should_submit_data
        })
    }