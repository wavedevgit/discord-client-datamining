/** chunk id: 905074, original params: e,t,n (module,exports,require) **/
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
            initialMessageUrl: v,
            isRequired: b
        } = e, f = a.useMemo(() => i.A.reactParserFor({
            ...i.A.defaultRules,
            link: d.B
        }), []), [C, j] = a.useState(""), [T, N] = a.useState(""), [I, y] = a.useState(null), [S, k] = a.useState(null), [E, w] = a.useState(!1);
        a.useEffect(() => {
            j(A?.value ?? ""), N(v?.value ?? ""), A?.value != null && "" !== A.value && w(g(A.value))
        }, [A, v]);
        let R = a.useCallback(e => {
                if (j(e), "" === e) {
                    y(null), w(!1), N(""), k(null), h({
                        value: e,
                        isValid: !1
                    });
                    return
                }
                if (!p(e)) {
                    y(o.intl.string(o.t["24xrGb"])), w(!1), N(""), k(null), h({
                        value: e,
                        isValid: !1
                    });
                    return
                }
                let t = g(e);
                w(t), y(null), t ? "" === T ? h({
                    value: e,
                    isValid: !1
                }) : x.test(T) ? h({
                    value: e,
                    isValid: !0
                }, {
                    value: T,
                    isValid: !0
                }) : h({
                    value: e,
                    isValid: !1
                }, {
                    value: T,
                    isValid: !1
                }) : (N(""), k(null), h({
                    value: e,
                    isValid: !0
                }))
            }, [h, T]),
            M = a.useCallback(e => {
                if (N(e), "" === e || !x.test(e)) {
                    k(o.intl.string(o.t["24xrGb"])), h({
                        value: C,
                        isValid: !1
                    }, {
                        value: e,
                        isValid: !1
                    });
                    return
                }
                k(null), h({
                    value: C,
                    isValid: !0
                }, {
                    value: e,
                    isValid: !0
                })
            }, [h, C]);
        return (0, l.jsxs)("div", {
            children: [(0, l.jsxs)(r.BJc, {
                gap: 16,
                children: [(0, l.jsxs)("div", {
                    className: u.QB,
                    children: [null != t && (0, l.jsx)("div", {
                        className: u.QB,
                        children: (0, l.jsxs)(r.Text, {
                            variant: "text-sm/bold",
                            children: [t, b && (0, l.jsx)("span", {
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
                }), E && null != _ && (0, l.jsxs)("div", {
                    className: u.QB,
                    children: [(0, l.jsx)("div", {
                        className: u.QB,
                        children: (0, l.jsxs)(r.Text, {
                            variant: "text-sm/bold",
                            children: [_, b && (0, l.jsx)("span", {
                                className: c.m,
                                children: "*"
                            })]
                        })
                    }), (0, l.jsx)(r.ksK, {
                        onChange: M,
                        value: T,
                        error: S,
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
        return (0, l.jsx)(h, {
            data: t.data,
            onChange: d,
            initialContentUrl: r?.[i],
            initialMessageUrl: r?.[s],
            isRequired: t.should_submit_data
        })
    }