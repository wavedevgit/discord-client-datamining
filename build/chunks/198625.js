/** chunk id: 198625, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(228524), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(280230),
    o = n.n(s),
    c = n(397927),
    d = n(558179),
    u = n(151890),
    p = n(985018),
    h = n(191817);
let m = o().parserFor(u.A),
    g = o().reactFor(o().ruleOutput(u.A, "react"));

function _(e) {
    let {
        description: t,
        supportsMarkdown: n
    } = e, [i, s] = l.useState(!1), o = l.useRef(null);
    l.useEffect(() => {
        if (null == o.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            s((null != (e = null == (n = o.current) ? void 0 : n.scrollHeight) ? e : 0) - (null != (t = null == (r = o.current) ? void 0 : r.clientHeight) ? t : 0) > 1)
        });
        return e.observe(o.current), () => e.disconnect()
    }, []);
    let [u, p] = l.useState(!1), _ = l.useCallback(() => {
        p(e => !e)
    }, []);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
            ref: o,
            className: a()({
                [h.mA]: !u,
                [h.ii]: !u && "Safari" === platform.name
            }),
            children: n ? (0, r.jsx)(d.A, {
                className: h.R4,
                parser: m,
                output: g,
                state: {
                    allowLinks: !0
                },
                children: t
            }) : (0, r.jsx)(c.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: t
            })
        }), i || u ? (0, r.jsx)(b, {
            isShowingMore: u,
            onToggle: _
        }) : null]
    })
}

function b(e) {
    let {
        onToggle: t,
        isShowingMore: n
    } = e, i = l.useMemo(() => (0, r.jsxs)("div", {
        className: h.eR,
        children: [(0, r.jsx)(c.Text, {
            variant: "text-md/semibold",
            color: "interactive-text-default",
            children: n ? p.intl.string(p.t["vtfc4+"]) : p.intl.string(p.t.ZDRyuq)
        }), n ? (0, r.jsx)(c.tN5, {
            size: "md",
            color: "currentColor",
            className: h.ys
        }) : (0, r.jsx)(c.abt, {
            size: "md",
            color: "currentColor",
            className: h.ys
        })]
    }), [n]);
    return (0, r.jsxs)(c.DUT, {
        className: h.dO,
        onClick: t,
        children: [(0, r.jsx)("div", {
            className: h.yF
        }), i, (0, r.jsx)("div", {
            className: h.yF
        })]
    })
}
let f = function(e) {
    var t, n;
    let {
        application: i
    } = e, a = null == (t = i.directory_entry) ? void 0 : t.detailed_description, s = null == (n = i.directory_entry) ? void 0 : n.short_description, o = l.useMemo(() => null != a && a.length > 0 ? (0, r.jsx)(_, {
        description: a,
        supportsMarkdown: !0
    }) : null != s && s.length > 0 ? (0, r.jsx)(_, {
        description: s,
        supportsMarkdown: !1
    }) : null, [a, s]);
    return null == o ? null : (0, r.jsxs)("div", {
        className: h.l4,
        children: [(0, r.jsx)(c.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: p.intl.string(p.t.txraKS)
        }), o]
    })
}