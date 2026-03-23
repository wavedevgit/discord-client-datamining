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
    c = n(191563);

function u(e) {
    let {
        node: t
    } = e, {
        destinationKey: n,
        useTrailingDecoration: u,
        useTitle: m,
        useSubtitle: _
    } = t, g = u?.(), A = _?.(), {
        parentPanelNode: x,
        parentSidebarItemNode: p
    } = (0, a.x)(n), h = m?.(), T = x?.useTitle?.(), E = h ?? T, f = (0, r.q)(t);
    if (null == x || null == E) return null;
    let S = null != p ? p.icon : void 0;
    return (0, i.jsx)(o.U, {
        title: E,
        description: A,
        leadingElement: null != S && (0, i.jsx)("div", {
            className: c.z,
            children: (0, i.jsx)(S, {
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
            }), f()
        }
    })
}