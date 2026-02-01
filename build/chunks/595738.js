/** chunk id: 595738, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => i
});
var a = n(627968);
n(64700);
var r = n(503698),
    o = n.n(r),
    _ = n(397927),
    c = n(376092),
    l = n(565928);

function i(e) {
    let {
        grantedPermissions: t,
        disabledPermissions: n,
        grantedPermissionsHeader: r,
        disabledPermissionsHeader: i,
        className: s
    } = e;
    return (0, a.jsxs)("div", {
        className: o()(l.p_, s),
        children: [null != t && t.length > 0 ? (0, a.jsxs)(a.Fragment, {
            children: [null != r ? (0, a.jsx)(_.Heading, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                className: l.wx,
                children: r
            }) : null, (0, a.jsx)("div", {
                className: l.kL,
                children: t.map(e => (0, a.jsxs)("div", {
                    className: l.EK,
                    children: [(0, a.jsx)(_.A9s, {
                        size: "xs",
                        color: "currentColor",
                        className: l.z6
                    }), (0, a.jsx)(_.Text, {
                        variant: "text-sm/normal",
                        children: (0, c.hx)(e)
                    })]
                }, e.toString()))
            })]
        }) : null, null != n && n.length > 0 ? (0, a.jsxs)(a.Fragment, {
            children: [null != i ? (0, a.jsx)(_.Heading, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                className: l.wx,
                children: i
            }) : null, (0, a.jsx)("div", {
                className: l.kL,
                children: n.map(e => (0, a.jsxs)("div", {
                    className: l.EK,
                    children: [(0, a.jsx)(_.PGe, {
                        size: "xs",
                        color: "currentColor",
                        className: l.$A
                    }), (0, a.jsx)(_.Text, {
                        variant: "text-sm/normal",
                        children: (0, c.hx)(e)
                    })]
                }, e.toString()))
            })]
        }) : null]
    })
}