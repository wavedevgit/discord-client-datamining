/** chunk id: 595738, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => o
});
var n = r(627968);
r(64700);
var a = r(503698),
    s = r.n(a),
    l = r(397927),
    i = r(376092),
    c = r(920082);

function o(e) {
    let {
        grantedPermissions: t,
        disabledPermissions: r,
        grantedPermissionsHeader: a,
        disabledPermissionsHeader: o,
        className: u
    } = e;
    return (0, n.jsxs)("div", {
        className: s()(c.p_, u),
        children: [null != t && t.length > 0 ? (0, n.jsxs)(n.Fragment, {
            children: [null != a ? (0, n.jsx)(l.Heading, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                className: c.wx,
                children: a
            }) : null, (0, n.jsx)("div", {
                className: c.kL,
                children: t.map(e => (0, n.jsxs)("div", {
                    className: c.EK,
                    children: [(0, n.jsx)(l.A9s, {
                        size: "xs",
                        color: "currentColor",
                        className: c.z6
                    }), (0, n.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: (0, i.hx)(e)
                    })]
                }, e.toString()))
            })]
        }) : null, null != r && r.length > 0 ? (0, n.jsxs)(n.Fragment, {
            children: [null != o ? (0, n.jsx)(l.Heading, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                className: c.wx,
                children: o
            }) : null, (0, n.jsx)("div", {
                className: c.kL,
                children: r.map(e => (0, n.jsxs)("div", {
                    className: c.EK,
                    children: [(0, n.jsx)(l.PGe, {
                        size: "xs",
                        color: "currentColor",
                        className: c.$A
                    }), (0, n.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: (0, i.hx)(e)
                    })]
                }, e.toString()))
            })]
        }) : null]
    })
}