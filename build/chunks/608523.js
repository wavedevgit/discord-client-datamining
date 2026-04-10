/** chunk id: 608523 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(46054),
    s = n(861662),
    d = n(985018),
    o = n(773680),
    c = n(885106);
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
        } = e, v = l.useMemo(() => r.A.reactParserFor({
            ...r.A.defaultRules,
            link: s.B
        }), []), [b, f] = l.useState(""), [T, S] = l.useState(null);
        l.useEffect(() => {
            f(g?.value ?? "")
        }, [g]);
        let E = l.useCallback(e => {
            let t = null != h ? new RegExp(h) : null;
            null == t || t.test(e) ? null != e && (S(null), f(e), x({
                value: e,
                isValid: !0
            })) : (S(d.intl.string(d.t["24xrGb"])), x({
                value: e,
                isValid: !1
            }))
        }, [x, h]);
        return (0, a.jsxs)("div", {
            children: [(0, a.jsxs)("div", {
                className: c.QB,
                children: [null != t && (0, a.jsxs)(i.Text, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: [t, A && (0, a.jsx)("span", {
                        className: o.m,
                        children: "*"
                    })]
                }), null != u && (0, a.jsx)("div", {
                    className: c.a5,
                    children: (0, a.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: u
                    })
                })]
            }), 1 === m ? (0, a.jsx)(i.ksK, {
                maxLength: p,
                onChange: E,
                value: b,
                error: T,
                placeholder: _
            }) : (0, a.jsx)(i.fs1, {
                maxLength: p,
                onChange: E,
                value: b,
                error: T,
                rows: m,
                placeholder: _
            }), null != n && (0, a.jsx)("div", {
                className: c.a5,
                children: (0, a.jsx)(i.Text, {
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
            state: l
        } = e, i = t.map(e => {
            let t = e.name;
            return (0, a.jsx)(u, {
                data: e.data,
                onChange: e => n(t, e.value, e.isValid),
                initialText: l?.[t] ?? void 0,
                isRequired: e.should_submit_data
            }, t)
        });
        return (0, a.jsx)("div", {
            className: o.k,
            children: i
        })
    }