/** Chunk was on 5606 **/
/** chunk id: 388773, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
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

function p(e) {
    var t;
    let n, {
            node: p
        } = e,
        [_, m] = i.useState(!1),
        {
            layout: g,
            collapseAfter: f,
            useCollapsibleTitle: b,
            useCollapsedSubtitle: h,
            initialize: A
        } = p,
        E = null != f ? g.slice(0, f) : g,
        x = null != f ? g.slice(f) : [],
        O = null != (t = null == b ? void 0 : b(_, x.length)) ? t : (n = x.length, _ ? d.intl.formatToPlainString(d.t["3SHL+d"], {
            count: n
        }) : d.intl.formatToPlainString(d.t["8JRFyZ"], {
            count: n
        })),
        C = null == h ? void 0 : h();
    return (0, o.Z)(A), (0, r.jsxs)(l.BJc, {
        gap: 8,
        children: [E.map((e, t) => (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsx)(s.A, {
                node: e
            }), t !== E.length - 1 && (0, r.jsx)(a.A, {})]
        }, e.key)), x.length > 0 && (0, r.jsxs)("div", {
            className: u.CT,
            children: [(0, r.jsx)(a.A, {
                className: u.mn
            }), (0, r.jsx)(c.f, {
                title: O,
                collapsedSubtitle: C,
                isExpanded: _,
                onExpandedChange: m,
                children: (0, r.jsx)(l.BJc, {
                    gap: 8,
                    children: x.map((e, t) => (0, r.jsxs)(i.Fragment, {
                        children: [(0, r.jsx)(s.A, {
                            node: e
                        }), t !== x.length - 1 && (0, r.jsx)(a.A, {})]
                    }, e.key))
                })
            })]
        })]
    })
}