/** chunk id: 608523, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048), n(591487), n(727858), n(747238);
var l = n(627968),
    r = n(64700),
    i = n(397927),
    a = n(46054),
    s = n(861662),
    o = n(985018),
    d = n(322367),
    c = n(473169);
let u = e => {
        let {
            data: {
                title: t,
                subtitle: n,
                description: u,
                placeholder: m,
                rows: p,
                character_limit: b,
                pattern: _
            },
            onChange: g,
            initialText: x,
            isRequired: h
        } = e, v = r.useMemo(() => {
            var e, t;
            return a.A.reactParserFor((e = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), l.forEach(function(t) {
                        var l;
                        l = n[t], t in e ? Object.defineProperty(e, t, {
                            value: l,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = l
                    })
                }
                return e
            }({}, a.A.defaultRules), t = t = {
                link: s.B
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, l)
                }
                return n
            })(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }), e))
        }, []), [f, j] = r.useState(""), [A, y] = r.useState(null);
        r.useEffect(() => {
            var e;
            j(null != (e = null == x ? void 0 : x.value) ? e : "")
        }, [x]);
        let O = r.useCallback(e => {
            let t = null != _ ? new RegExp(_) : null;
            null == t || t.test(e) ? null != e && (y(null), j(e), g({
                value: e,
                isValid: !0
            })) : (y(o.intl.string(o.t["24xrGb"])), g({
                value: e,
                isValid: !1
            }))
        }, [g, _]);
        return (0, l.jsxs)("div", {
            className: c.QB,
            children: [(0, l.jsxs)("div", {
                className: c.QB,
                children: [null != t && (0, l.jsxs)(i.Text, {
                    variant: "text-sm/bold",
                    children: [t, h && (0, l.jsx)("span", {
                        className: d.m,
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
            }), 1 === p ? (0, l.jsx)(i.ksK, {
                maxLength: b,
                onChange: O,
                value: f,
                error: A,
                placeholder: m,
                autoFocus: !0
            }) : (0, l.jsx)(i.fs1, {
                maxLength: b,
                onChange: O,
                value: f,
                error: A,
                rows: p,
                placeholder: m,
                autoFocus: !0
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
    m = e => {
        let {
            elements: t,
            onChange: n,
            state: r
        } = e, i = t.map(e => {
            var t;
            let i = e.name;
            return (0, l.jsx)(u, {
                data: e.data,
                onChange: e => n(i, e.value, e.isValid),
                initialText: null != (t = null == r ? void 0 : r[i]) ? t : void 0,
                isRequired: e.should_submit_data
            }, i)
        });
        return (0, l.jsx)("div", {
            children: i
        })
    }