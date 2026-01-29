/** Chunk was on 2827 **/
/** chunk id: 388773, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(641324),
    a = n(46373),
    o = n(112715),
    c = n(78837),
    d = n(985018),
    u = n(115686);

function _(e) {
    var t;
    let n, {
            node: _
        } = e,
        [p, m] = i.useState(!1),
        {
            layout: g,
            collapseAfter: A,
            useCollapsibleTitle: f,
            useCollapsedSubtitle: b,
            initialize: h
        } = _,
        E = null != A ? g.slice(0, A) : g,
        O = null != A ? g.slice(A) : [],
        C = null != (t = null == f ? void 0 : f(p, O.length)) ? t : (n = O.length, p ? d.intl.formatToPlainString(d.t["3SHL+d"], {
            count: n
        }) : d.intl.formatToPlainString(d.t["8JRFyZ"], {
            count: n
        })),
        x = null == b ? void 0 : b();
    return (0, o.Z)(h), (0, r.jsxs)(l.BJc, {
        gap: 8,
        children: [E.map((e, t) => (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsx)(s.A, {
                node: e
            }), t !== E.length - 1 && (0, r.jsx)(a.A, {})]
        }, e.key)), O.length > 0 && (0, r.jsxs)("div", {
            className: u.CT,
            children: [(0, r.jsx)(a.A, {
                className: u.mn
            }), (0, r.jsx)(c.f, {
                title: C,
                collapsedSubtitle: x,
                isExpanded: p,
                onExpandedChange: m,
                children: (0, r.jsx)(l.BJc, {
                    gap: 8,
                    children: O.map((e, t) => (0, r.jsxs)(i.Fragment, {
                        children: [(0, r.jsx)(s.A, {
                            node: e
                        }), t !== O.length - 1 && (0, r.jsx)(a.A, {})]
                    }, e.key))
                })
            })]
        })]
    })
}