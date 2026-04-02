/** chunk id: 816709 params = (module,exports,require) **/
i.d(t, {
    A: () => a
});
var s = i(627968);
i(64700);
var r = i(9578),
    n = i(985018),
    l = i(301403);

function a(e) {
    let {
        termsOfServiceUrl: t,
        privacyPolicyUrl: i
    } = e;
    return null == t && null == i ? null : (0, s.jsxs)("span", {
        className: l.Q,
        children: [null != t && (0, s.jsx)(r.A, {
            href: t,
            children: n.intl.string(n.t["8S0kcM"])
        }), null != t && null != i && (0, s.jsx)("span", {
            "aria-disabled": "true",
            children: "•"
        }), null != i && (0, s.jsx)(r.A, {
            href: i,
            children: n.intl.string(n.t.ZpyeCm)
        })]
    })
}