/** chunk id: 905074, original params: e,t,n (module,exports,require) **/
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
    c = n(298789),
    u = n(522759);
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
            initialMessageUrl: b,
            isRequired: v
        } = e, f = a.useMemo(() => r.A.reactParserFor({
            ...r.A.defaultRules,
            link: d.B
        }), []), [T, j] = a.useState(""), [C, I] = a.useState(""), [N, S] = a.useState(null), [k, y] = a.useState(null), [E, M] = a.useState(!1);
        a.useEffect(() => {
            j(A?.value ?? ""), I(b?.value ?? ""), A?.value != null && "" !== A.value && M(g(A.value))
        }, [A, b]);
        let R = a.useCallback(e => {
                if (j(e), "" === e) {
                    S(null), M(!1), I(""), y(null), h({
                        value: e,
                        isValid: !1
                    });
                    return
                }
                if (!p(e)) {
                    S(o.intl.string(o.t["24xrGb"])), M(!1), I(""), y(null), h({
                        value: e,
                        isValid: !1
                    });
                    return
                }
                let t = g(e);
                M(t), S(null), t ? "" === C ? h({
                    value: e,
                    isValid: !1
                }) : x.test(C) ? h({
                    value: e,
                    isValid: !0
                }, {
                    value: C,
                    isValid: !0
                }) : h({
                    value: e,
                    isValid: !1
                }, {
                    value: C,
                    isValid: !1
                }) : (I(""), y(null), h({
                    value: e,
                    isValid: !0
                }))
            }, [h, C]),
            w = a.useCallback(e => {
                if (I(e), "" === e || !x.test(e)) {
                    y(o.intl.string(o.t["24xrGb"])), h({
                        value: T,
                        isValid: !1
                    }, {
                        value: e,
                        isValid: !1
                    });
                    return
                }
                y(null), h({
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
                            variant: "text-sm/bold",
                            children: [t, v && (0, l.jsx)("span", {
                                className: c.m,
                                children: "*"
                            })]
                        })
                    }), (0, l.jsx)(i.ksK, {
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
                        children: (0, l.jsxs)(i.Text, {
                            variant: "text-sm/bold",
                            children: [_, v && (0, l.jsx)("span", {
                                className: c.m,
                                children: "*"
                            })]
                        })
                    }), (0, l.jsx)(i.ksK, {
                        onChange: w,
                        value: C,
                        error: k,
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