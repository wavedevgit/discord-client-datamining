/** chunk id: 905074 params = (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(323874), n(14289), n(35956);
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(46054),
    s = n(403362),
    d = n(861662),
    o = n(985018),
    c = n(716213),
    u = n(153335);
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

function x(e) {
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
let h = e => {
        let {
            data: {
                title: t,
                subtitle: n,
                placeholder: s,
                message_link_title: _,
                message_link_placeholder: m
            },
            onChange: h,
            initialContentUrl: A,
            initialMessageUrl: v,
            isRequired: b
        } = e, f = a.useMemo(() => r.A.reactParserFor({
            ...r.A.defaultRules,
            link: d.B
        }), []), [T, E] = a.useState(""), [S, I] = a.useState(""), [C, N] = a.useState(null), [y, j] = a.useState(null), [k, R] = a.useState(!1);
        a.useEffect(() => {
            E(A?.value ?? ""), I(v?.value ?? ""), A?.value != null && "" !== A.value && R(x(A.value))
        }, [A, v]);
        let M = a.useCallback(e => {
                if (E(e), "" === e) {
                    N(null), R(!1), I(""), j(null), h({
                        value: e,
                        isValid: !1
                    });
                    return
                }
                if (!g(e)) {
                    N(o.intl.string(o.t["24xrGb"])), R(!1), I(""), j(null), h({
                        value: e,
                        isValid: !1
                    });
                    return
                }
                let t = x(e);
                R(t), N(null), t ? "" === S ? h({
                    value: e,
                    isValid: !1
                }) : p.test(S) ? h({
                    value: e,
                    isValid: !0
                }, {
                    value: S,
                    isValid: !0
                }) : h({
                    value: e,
                    isValid: !1
                }, {
                    value: S,
                    isValid: !1
                }) : (I(""), j(null), h({
                    value: e,
                    isValid: !0
                }))
            }, [h, S]),
            O = a.useCallback(e => {
                if (I(e), "" === e || !p.test(e)) {
                    j(o.intl.string(o.t["24xrGb"])), h({
                        value: T,
                        isValid: !1
                    }, {
                        value: e,
                        isValid: !1
                    });
                    return
                }
                j(null), h({
                    value: T,
                    isValid: !0
                }, {
                    value: e,
                    isValid: !0
                })
            }, [h, T]);
        return (0, l.jsxs)("div", {
            children: [(0, l.jsxs)(i.BJc, {
                gap: 16,
                children: [(0, l.jsxs)("div", {
                    className: u.QB,
                    children: [null != t && (0, l.jsx)("div", {
                        className: u.QB,
                        children: (0, l.jsxs)(i.Text, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            children: [t, b && (0, l.jsx)("span", {
                                className: c.m,
                                children: "*"
                            })]
                        })
                    }), (0, l.jsx)(i.ksK, {
                        onChange: M,
                        value: T,
                        error: C,
                        placeholder: s,
                        autoFocus: !0
                    })]
                }), k && null != _ && (0, l.jsxs)("div", {
                    className: u.QB,
                    children: [(0, l.jsx)("div", {
                        className: u.QB,
                        children: (0, l.jsxs)(i.Text, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            children: [_, b && (0, l.jsx)("span", {
                                className: c.m,
                                children: "*"
                            })]
                        })
                    }), (0, l.jsx)(i.ksK, {
                        onChange: O,
                        value: S,
                        error: y,
                        placeholder: m
                    })]
                })]
            }), null != n && (0, l.jsx)(i.Text, {
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
        } = e, r = t.name, s = `${t.name}_message_link`, d = a.useCallback((e, t) => {
            null != t ? n(r, e.value, e.isValid && t.isValid, s, t.value) : n(r, e.value, e.isValid, s, void 0)
        }, [n, r, s]);
        return (0, l.jsx)(h, {
            data: t.data,
            onChange: d,
            initialContentUrl: i?.[r],
            initialMessageUrl: i?.[s],
            isRequired: t.should_submit_data
        })
    }