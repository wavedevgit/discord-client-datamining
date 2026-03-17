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
            onChange: h,
            initialText: g,
            isRequired: A
        } = e, v = a.useMemo(() => i.A.reactParserFor({
            ...i.A.defaultRules,
            link: s.B
        }), []), [b, f] = a.useState(""), [j, T] = a.useState(null);
        a.useEffect(() => {
            f(g?.value ?? "")
        }, [g]);
        let C = a.useCallback(e => {
            let t = null != p ? new RegExp(p) : null;
            null == t || t.test(e) ? null != e && (T(null), f(e), h({
                value: e,
                isValid: !0
            })) : (T(d.intl.string(d.t["24xrGb"])), h({
                value: e,
                isValid: !1
            }))
        }, [h, p]);
        return (0, l.jsxs)("div", {
            className: c.QB,
            children: [(0, l.jsxs)("div", {
                className: c.QB,
                children: [null != t && (0, l.jsxs)(r.Text, {
                    variant: "text-sm/bold",
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
                maxLength: x,
                onChange: C,
                value: b,
                error: j,
                placeholder: _,
                autoFocus: !0
            }) : (0, l.jsx)(r.fs1, {
                maxLength: x,
                onChange: C,
                value: b,
                error: j,
                rows: m,
                placeholder: _,
                autoFocus: !0
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
            children: r
        })
    }