/** chunk id: 905074 params = (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(323874), n(14289), n(35956);
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(46054),
    s = n(403362),
    d = n(861662),
    o = n(985018),
    c = n(773680),
    u = n(885106);
let _ = ["cdn.discordapp.com", "media.discordapp.net"],
    m = /^(?:localhost|127\.0\.0\.1|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/,
    p = (0, s.m6)() ? /^https?:\/\/(?:(?:ptb\.|canary\.)?discord(?:app)?\.com|localhost(?::\d+)?|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d+)?)\/channels\/(?:@me|\d+)\/\d+\/\d+$/ : /^https:\/\/(?:ptb\.|canary\.)?discord(?:app)?\.com\/channels\/(?:@me|\d+)\/\d+\/\d+$/;

function h(e) {
    try {
        return new URL(e), !0
    } catch {
        return !1
    }
}

function x(e) {
    return "" !== e && !!h(e) && ! function(e) {
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
            isRequired: b
        } = e, f = l.useMemo(() => r.A.reactParserFor({
            ...r.A.defaultRules,
            link: d.B
        }), []), [T, S] = l.useState(""), [E, I] = l.useState(""), [C, N] = l.useState(null), [j, y] = l.useState(null), [k, R] = l.useState(!1);
        l.useEffect(() => {
            S(A?.value ?? ""), I(v?.value ?? ""), A?.value != null && "" !== A.value && R(x(A.value))
        }, [A, v]);
        let D = l.useCallback(e => {
                if (S(e), "" === e) {
                    N(null), R(!1), I(""), y(null), g({
                        value: e,
                        isValid: !1
                    });
                    return
                }
                if (!h(e)) {
                    N(o.intl.string(o.t["24xrGb"])), R(!1), I(""), y(null), g({
                        value: e,
                        isValid: !1
                    });
                    return
                }
                let t = x(e);
                R(t), N(null), t ? "" === E ? g({
                    value: e,
                    isValid: !1
                }) : p.test(E) ? g({
                    value: e,
                    isValid: !0
                }, {
                    value: E,
                    isValid: !0
                }) : g({
                    value: e,
                    isValid: !1
                }, {
                    value: E,
                    isValid: !1
                }) : (I(""), y(null), g({
                    value: e,
                    isValid: !0
                }))
            }, [g, E]),
            M = l.useCallback(e => {
                if (I(e), "" === e || !p.test(e)) {
                    y(o.intl.string(o.t["24xrGb"])), g({
                        value: T,
                        isValid: !1
                    }, {
                        value: e,
                        isValid: !1
                    });
                    return
                }
                y(null), g({
                    value: T,
                    isValid: !0
                }, {
                    value: e,
                    isValid: !0
                })
            }, [g, T]);
        return (0, a.jsxs)("div", {
            children: [(0, a.jsxs)(i.BJc, {
                gap: 16,
                children: [(0, a.jsxs)("div", {
                    className: u.QB,
                    children: [null != t && (0, a.jsx)("div", {
                        className: u.QB,
                        children: (0, a.jsxs)(i.Text, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            children: [t, b && (0, a.jsx)("span", {
                                className: c.m,
                                children: "*"
                            })]
                        })
                    }), (0, a.jsx)(i.ksK, {
                        onChange: D,
                        value: T,
                        error: C,
                        placeholder: s,
                        autoFocus: !0
                    })]
                }), k && null != _ && (0, a.jsxs)("div", {
                    className: u.QB,
                    children: [(0, a.jsx)("div", {
                        className: u.QB,
                        children: (0, a.jsxs)(i.Text, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            children: [_, b && (0, a.jsx)("span", {
                                className: c.m,
                                children: "*"
                            })]
                        })
                    }), (0, a.jsx)(i.ksK, {
                        onChange: M,
                        value: E,
                        error: j,
                        placeholder: m
                    })]
                })]
            }), null != n && (0, a.jsx)(i.Text, {
                variant: "text-xs/normal",
                children: f(n)
            })]
        })
    },
    A = e => {
        let {
            element: t,
            onChange: n,
            state: i
        } = e, r = t.name, s = `${t.name}_message_link`, d = l.useCallback((e, t) => {
            null != t ? n(r, e.value, e.isValid && t.isValid, s, t.value) : n(r, e.value, e.isValid, s, void 0)
        }, [n, r, s]);
        return (0, a.jsx)(g, {
            data: t.data,
            onChange: d,
            initialContentUrl: i?.[r],
            initialMessageUrl: i?.[s],
            isRequired: t.should_submit_data
        })
    }