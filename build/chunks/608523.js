/** chunk id: 608523, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(46054),
    s = n(861662),
    d = n(985018),
    o = n(322367),
    c = n(473169);
let u = e => {
        let {
            data: {
                title: t,
                subtitle: n,
                description: u,
                placeholder: _,
                rows: m,
                character_limit: x,
                pattern: p
            },
            onChange: g,
            initialText: h,
            isRequired: A
        } = e, b = a.useMemo(() => r.A.reactParserFor({
            ...r.A.defaultRules,
            link: s.B
        }), []), [v, f] = a.useState(""), [T, j] = a.useState(null);
        a.useEffect(() => {
            f(h?.value ?? "")
        }, [h]);
        let C = a.useCallback(e => {
            let t = null != p ? new RegExp(p) : null;
            null == t || t.test(e) ? null != e && (j(null), f(e), g({
                value: e,
                isValid: !0
            })) : (j(d.intl.string(d.t["24xrGb"])), g({
                value: e,
                isValid: !1
            }))
        }, [g, p]);
        return (0, l.jsxs)("div", {
            className: c.QB,
            children: [(0, l.jsxs)("div", {
                className: c.QB,
                children: [null != t && (0, l.jsxs)(i.Text, {
                    variant: "text-sm/bold",
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
                maxLength: x,
                onChange: C,
                value: v,
                error: T,
                placeholder: _,
                autoFocus: !0
            }) : (0, l.jsx)(i.fs1, {
                maxLength: x,
                onChange: C,
                value: v,
                error: T,
                rows: m,
                placeholder: _,
                autoFocus: !0
            }), null != n && (0, l.jsx)("div", {
                className: c.a5,
                children: (0, l.jsx)(i.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: b(n)
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
            children: i
        })
    }