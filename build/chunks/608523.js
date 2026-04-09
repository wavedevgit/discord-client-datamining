/** chunk id: 608523 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(46054),
    s = n(861662),
    d = n(985018),
    o = n(716213),
    c = n(153335);
let u = e => {
        let {
            data: {
                title: t,
                subtitle: n,
                description: u,
                placeholder: _,
                rows: m,
                character_limit: p,
                pattern: h
            },
            onChange: x,
            initialText: g,
            isRequired: A
        } = e, v = a.useMemo(() => r.A.reactParserFor({
            ...r.A.defaultRules,
            link: s.B
        }), []), [b, f] = a.useState(""), [T, S] = a.useState(null);
        a.useEffect(() => {
            f(g?.value ?? "")
        }, [g]);
        let E = a.useCallback(e => {
            let t = null != h ? new RegExp(h) : null;
            null == t || t.test(e) ? null != e && (S(null), f(e), x({
                value: e,
                isValid: !0
            })) : (S(d.intl.string(d.t["24xrGb"])), x({
                value: e,
                isValid: !1
            }))
        }, [x, h]);
        return (0, l.jsxs)("div", {
            children: [(0, l.jsxs)("div", {
                className: c.QB,
                children: [null != t && (0, l.jsxs)(i.Text, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: [t, A && (0, l.jsx)("span", {
                        className: o.m,
                        children: "*"
                    })]
                }), null != u && (0, l.jsx)("div", {
                    className: c.a5,
                    children: (0, l.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: u
                    })
                })]
            }), 1 === m ? (0, l.jsx)(i.ksK, {
                maxLength: p,
                onChange: E,
                value: b,
                error: T,
                placeholder: _
            }) : (0, l.jsx)(i.fs1, {
                maxLength: p,
                onChange: E,
                value: b,
                error: T,
                rows: m,
                placeholder: _
            }), null != n && (0, l.jsx)("div", {
                className: c.a5,
                children: (0, l.jsx)(i.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: v(n)
                })
            })]
        })
    },
    _ = e => {
        let {
            elements: t,
            onChange: n,
            state: a
        } = e, i = t.map(e => {
            let t = e.name;
            return (0, l.jsx)(u, {
                data: e.data,
                onChange: e => n(t, e.value, e.isValid),
                initialText: a?.[t] ?? void 0,
                isRequired: e.should_submit_data
            }, t)
        });
        return (0, l.jsx)("div", {
            className: o.k,
            children: i
        })
    }