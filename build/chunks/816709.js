/** chunk id: 816709 params = (module,exports,require) **/
i.d(e, {
    A: () => r
});
var n = i(627968);
i(64700);
var l = i(9578),
    s = i(985018),
    a = i(301403);

function r(t) {
    let {
        termsOfServiceUrl: e,
        privacyPolicyUrl: i
    } = t;
    return null == e && null == i ? null : (0, n.jsxs)("span", {
        className: a.Q,
        children: [null != e && (0, n.jsx)(l.A, {
            href: e,
            children: s.intl.string(s.t["8S0kcM"])
        }), null != e && null != i && (0, n.jsx)("span", {
            "aria-disabled": "true",
            children: "•"
        }), null != i && (0, n.jsx)(l.A, {
            href: i,
            children: s.intl.string(s.t.ZpyeCm)
        })]
    })
}