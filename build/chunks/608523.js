/** chunk id: 608523 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var l = n(627968),
    a = n(64700),
    r = n(397927),
    i = n(46054),
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
                pattern: g
            },
            onChange: h,
            initialText: x,
            isRequired: A
        } = e, v = a.useMemo(() => i.A.reactParserFor({
            ...i.A.defaultRules,
            link: s.B
        }), []), [f, b] = a.useState(""), [T, S] = a.useState(null);
        a.useEffect(() => {
            b(x?.value ?? "")
        }, [x]);
        let E = a.useCallback(e => {
            let t = null != g ? new RegExp(g) : null;
            null == t || t.test(e) ? null != e && (S(null), b(e), h({
                value: e,
                isValid: !0
            })) : (S(d.intl.string(d.t["24xrGb"])), h({
                value: e,
                isValid: !1
            }))
        }, [h, g]);
        return (0, l.jsxs)("div", {
            children: [(0, l.jsxs)("div", {
                className: c.QB,
                children: [null != t && (0, l.jsxs)(r.Text, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: [t, A && (0, l.jsx)("span", {
                        className: o.m,
                        children: "*"
                    })]
                }), null != u && (0, l.jsx)("div", {
                    className: c.a5,
                    children: (0, l.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: u
                    })
                })]
            }), 1 === m ? (0, l.jsx)(r.ksK, {
                maxLength: p,
                onChange: E,
                value: f,
                error: T,
                placeholder: _
            }) : (0, l.jsx)(r.fs1, {
                maxLength: p,
                onChange: E,
                value: f,
                error: T,
                rows: m,
                placeholder: _
            }), null != n && (0, l.jsx)("div", {
                className: c.a5,
                children: (0, l.jsx)(r.Text, {
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
        } = e, r = t.map(e => {
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
            children: r
        })
    }