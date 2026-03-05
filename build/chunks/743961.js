/** chunk id: 743961, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(641324),
    r = n(577806),
    o = n(279423);
let d = s.memo(function(e) {
    let {
        node: t
    } = e, {
        useTitle: n,
        icon: s,
        useSubnavLabel: d,
        useSubtitle: c,
        layout: u,
        useInlineNotice: _,
        useHeaderDecoration: g
    } = t, m = n?.(), A = c?.(), h = _?.(), p = g?.(), x = null != n || null != d;
    return (0, i.jsxs)(i.Fragment, {
        children: [null != m && (0, i.jsx)(r._, {
            title: m,
            icon: s,
            subtitle: A,
            decoration: p
        }), (0, i.jsx)("div", {
            "data-settings-category-key": x ? t.key : void 0,
            "aria-hidden": !0,
            style: {
                height: 1
            }
        }), (0, i.jsxs)(l.BJc, {
            gap: "md",
            children: [null != h && (0, i.jsx)(o.A, {
                notice: h
            }), u.map(e => (0, i.jsx)(a.A, {
                node: e
            }, e.key))]
        })]
    })
})