/** chunk id: 595738 params = (module,exports,require) **/
a.d(t, {
    A: () => d
});
var r = a(627968);
a(64700);
var n = a(503698),
    l = a.n(n),
    s = a(397927),
    i = a(376092),
    o = a(565928);

function d(e) {
    let {
        grantedPermissions: t,
        disabledPermissions: a,
        grantedPermissionsHeader: n,
        disabledPermissionsHeader: d,
        className: c
    } = e;
    return (0, r.jsxs)("div", {
        className: l()(o.p_, c),
        children: [null != t && t.length > 0 ? (0, r.jsxs)(r.Fragment, {
            children: [null != n ? (0, r.jsx)(s.Heading, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                className: o.wx,
                children: n
            }) : null, (0, r.jsx)("div", {
                className: o.kL,
                children: t.map(e => (0, r.jsxs)("div", {
                    className: o.EK,
                    children: [(0, r.jsx)(s.A9s, {
                        size: "xs",
                        color: "currentColor",
                        className: o.z6
                    }), (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: (0, i.hx)(e)
                    })]
                }, e.toString()))
            })]
        }) : null, null != a && a.length > 0 ? (0, r.jsxs)(r.Fragment, {
            children: [null != d ? (0, r.jsx)(s.Heading, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                className: o.wx,
                children: d
            }) : null, (0, r.jsx)("div", {
                className: o.kL,
                children: a.map(e => (0, r.jsxs)("div", {
                    className: o.EK,
                    children: [(0, r.jsx)(s.PGe, {
                        size: "xs",
                        color: "currentColor",
                        className: o.$A
                    }), (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: (0, i.hx)(e)
                    })]
                }, e.toString()))
            })]
        }) : null]
    })
}