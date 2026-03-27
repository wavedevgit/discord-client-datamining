/** chunk id: 318903 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(158954),
    l = n(272053),
    a = n(688897),
    r = n(791498),
    o = n(590089),
    d = n(876813),
    c = n(940880);

function u(e) {
    let {
        node: t
    } = e, {
        destinationKey: n,
        useTrailingDecoration: u,
        useTitle: m,
        useSubtitle: _
    } = t, g = u?.(), x = _?.(), {
        parentPanelNode: A,
        parentSidebarItemNode: h
    } = (0, a.x)(n), p = m?.(), f = A?.useTitle?.(), T = p ?? f, S = (0, r.q)(t);
    if (null == A || null == T) return null;
    let E = null != h ? h.icon : void 0;
    return (0, i.jsx)(o.U, {
        title: T,
        description: x,
        leadingElement: null != E && (0, i.jsx)("div", {
            className: c.z,
            children: (0, i.jsx)(E, {
                color: "currentColor"
            })
        }),
        trailingElement: (0, i.jsxs)("div", {
            className: c.M,
            children: [null != g && (0, i.jsx)(d.Q, {
                decoration: g
            }), (0, i.jsx)(s.uhT, {})]
        }),
        onClick: () => {
            l.A.navigate(n, {
                animateSidebarScroll: !1
            }), S()
        }
    })
}