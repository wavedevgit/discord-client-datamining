/** chunk id: 388773 params = (module,exports,require) **/
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
    c = n(115686);

function u(e) {
    let t, {
            node: n
        } = e,
        [u, m] = s.useState(!1),
        {
            layout: _,
            collapseAfter: g,
            useCollapsibleTitle: A,
            useCollapsedSubtitle: x
        } = n,
        p = null != g ? _.slice(0, g) : _,
        h = null != g ? _.slice(g) : [],
        f = A?.(u, h.length) ?? (t = h.length, u ? d.intl.formatToPlainString(d.t["3SHL+d"], {
            count: t
        }) : d.intl.formatToPlainString(d.t["8JRFyZ"], {
            count: t
        })),
        T = x?.();
    return (0, i.jsxs)(l.BJc, {
        gap: 8,
        children: [p.map((e, t) => (0, i.jsxs)(s.Fragment, {
            children: [(0, i.jsx)(a.A, {
                node: e
            }), t !== p.length - 1 && (0, i.jsx)(r.A, {})]
        }, e.key)), h.length > 0 && (0, i.jsxs)("div", {
            className: c.CT,
            children: [(0, i.jsx)(r.A, {
                className: c.mn
            }), (0, i.jsx)(o.f, {
                title: f,
                collapsedSubtitle: T,
                isExpanded: u,
                onExpandedChange: m,
                children: (0, i.jsx)(l.BJc, {
                    gap: 8,
                    children: h.map((e, t) => (0, i.jsxs)(s.Fragment, {
                        children: [(0, i.jsx)(a.A, {
                            node: e
                        }), t !== h.length - 1 && (0, i.jsx)(r.A, {})]
                    }, e.key))
                })
            })]
        })]
    })
}