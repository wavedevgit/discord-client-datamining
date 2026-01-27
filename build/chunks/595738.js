/** Chunk was on 73169 **/
/** chunk id: 595738, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => s
});
var a = r(627968);
r(64700);
var n = r(503698),
    _ = r.n(n),
    o = r(397927),
    c = r(376092),
    l = r(565928);

function s(e) {
    let {
        grantedPermissions: t,
        disabledPermissions: r,
        grantedPermissionsHeader: n,
        disabledPermissionsHeader: s,
        className: i
    } = e;
    return (0, a.jsxs)("div", {
        className: _()(l.p_, i),
        children: [null != t && t.length > 0 ? (0, a.jsxs)(a.Fragment, {
            children: [null != n ? (0, a.jsx)(o.Heading, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                className: l.wx,
                children: n
            }) : null, (0, a.jsx)("div", {
                className: l.kL,
                children: t.map(e => (0, a.jsxs)("div", {
                    className: l.EK,
                    children: [(0, a.jsx)(o.A9s, {
                        size: "xs",
                        color: "currentColor",
                        className: l.z6
                    }), (0, a.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: (0, c.hx)(e)
                    })]
                }, e.toString()))
            })]
        }) : null, null != r && r.length > 0 ? (0, a.jsxs)(a.Fragment, {
            children: [null != s ? (0, a.jsx)(o.Heading, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                className: l.wx,
                children: s
            }) : null, (0, a.jsx)("div", {
                className: l.kL,
                children: r.map(e => (0, a.jsxs)("div", {
                    className: l.EK,
                    children: [(0, a.jsx)(o.PGe, {
                        size: "xs",
                        color: "currentColor",
                        className: l.$A
                    }), (0, a.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: (0, c.hx)(e)
                    })]
                }, e.toString()))
            })]
        }) : null]
    })
}