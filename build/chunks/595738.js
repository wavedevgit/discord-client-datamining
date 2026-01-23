/** Chunk was on 73169 **/
/** chunk id: 595738, original params: s,e,l (module,exports,require) **/
l.d(e, {
    A: () => d
});
var a = l(627968);
l(64700);
var n = l(503698),
    r = l.n(n),
    t = l(397927),
    i = l(376092),
    c = l(565928);

function d(s) {
    let {
        grantedPermissions: e,
        disabledPermissions: l,
        grantedPermissionsHeader: n,
        disabledPermissionsHeader: d,
        className: x
    } = s;
    return (0, a.jsxs)("div", {
        className: r()(c.p_, x),
        children: [null != e && e.length > 0 ? (0, a.jsxs)(a.Fragment, {
            children: [null != n ? (0, a.jsx)(t.Heading, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                className: c.wx,
                children: n
            }) : null, (0, a.jsx)("div", {
                className: c.kL,
                children: e.map(s => (0, a.jsxs)("div", {
                    className: c.EK,
                    children: [(0, a.jsx)(t.A9s, {
                        size: "xs",
                        color: "currentColor",
                        className: c.z6
                    }), (0, a.jsx)(t.Text, {
                        variant: "text-sm/normal",
                        children: (0, i.hx)(s)
                    })]
                }, s.toString()))
            })]
        }) : null, null != l && l.length > 0 ? (0, a.jsxs)(a.Fragment, {
            children: [null != d ? (0, a.jsx)(t.Heading, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                className: c.wx,
                children: d
            }) : null, (0, a.jsx)("div", {
                className: c.kL,
                children: l.map(s => (0, a.jsxs)("div", {
                    className: c.EK,
                    children: [(0, a.jsx)(t.PGe, {
                        size: "xs",
                        color: "currentColor",
                        className: c.$A
                    }), (0, a.jsx)(t.Text, {
                        variant: "text-sm/normal",
                        children: (0, i.hx)(s)
                    })]
                }, s.toString()))
            })]
        }) : null]
    })
}