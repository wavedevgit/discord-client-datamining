/** chunk id: 388773 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(641324),
    a = n(46373),
    o = n(78837),
    d = n(985018),
    c = n(125422);

function u(e) {
    let t, {
            node: n
        } = e,
        [u, m] = s.useState(!1),
        {
            layout: g,
            collapseAfter: _,
            useCollapsibleTitle: x,
            useCollapsedSubtitle: h
        } = n,
        A = null != _ ? g.slice(0, _) : g,
        p = null != _ ? g.slice(_) : [],
        T = x?.(u, p.length) ?? (t = p.length, u ? d.intl.formatToPlainString(d.t["3SHL+d"], {
            count: t
        }) : d.intl.formatToPlainString(d.t["8JRFyZ"], {
            count: t
        })),
        f = h?.();
    return (0, i.jsxs)(l.BJc, {
        gap: 8,
        children: [A.map((e, t) => (0, i.jsxs)(s.Fragment, {
            children: [(0, i.jsx)(r.A, {
                node: e
            }), t !== A.length - 1 && (0, i.jsx)(a.A, {})]
        }, e.key)), p.length > 0 && (0, i.jsxs)("div", {
            className: c.CT,
            children: [(0, i.jsx)(a.A, {
                className: c.mn
            }), (0, i.jsx)(o.f, {
                title: T,
                collapsedSubtitle: f,
                isExpanded: u,
                onExpandedChange: m,
                children: (0, i.jsx)(l.BJc, {
                    gap: 8,
                    children: p.map((e, t) => (0, i.jsxs)(s.Fragment, {
                        children: [(0, i.jsx)(r.A, {
                            node: e
                        }), t !== p.length - 1 && (0, i.jsx)(a.A, {})]
                    }, e.key))
                })
            })]
        })]
    })
}