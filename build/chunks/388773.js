/** chunk id: 388773, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(641324),
    r = n(46373),
    o = n(78837),
    d = n(985018),
    c = n(177259);

function u(e) {
    let t, {
            node: n
        } = e,
        [u, _] = s.useState(!1),
        {
            layout: g,
            collapseAfter: m,
            useCollapsibleTitle: A,
            useCollapsedSubtitle: h
        } = n,
        p = null != m ? g.slice(0, m) : g,
        x = null != m ? g.slice(m) : [],
        E = A?.(u, x.length) ?? (t = x.length, u ? d.intl.formatToPlainString(d.t["3SHL+d"], {
            count: t
        }) : d.intl.formatToPlainString(d.t["8JRFyZ"], {
            count: t
        })),
        T = h?.();
    return (0, i.jsxs)(l.BJc, {
        gap: 8,
        children: [p.map((e, t) => (0, i.jsxs)(s.Fragment, {
            children: [(0, i.jsx)(a.A, {
                node: e
            }), t !== p.length - 1 && (0, i.jsx)(r.A, {})]
        }, e.key)), x.length > 0 && (0, i.jsxs)("div", {
            className: c.CT,
            children: [(0, i.jsx)(r.A, {
                className: c.mn
            }), (0, i.jsx)(o.f, {
                title: E,
                collapsedSubtitle: T,
                isExpanded: u,
                onExpandedChange: _,
                children: (0, i.jsx)(l.BJc, {
                    gap: 8,
                    children: x.map((e, t) => (0, i.jsxs)(s.Fragment, {
                        children: [(0, i.jsx)(a.A, {
                            node: e
                        }), t !== x.length - 1 && (0, i.jsx)(r.A, {})]
                    }, e.key))
                })
            })]
        })]
    })
}