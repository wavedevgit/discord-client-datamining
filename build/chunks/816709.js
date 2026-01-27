/** Chunk was on 13088 **/
/** chunk id: 816709, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => o
});
var l = n(627968);
n(64700);
var r = n(9578),
    i = n(985018),
    u = n(202509);

function o(t) {
    let {
        termsOfServiceUrl: e,
        privacyPolicyUrl: n
    } = t;
    return null == e && null == n ? null : (0, l.jsxs)("span", {
        className: u.Q,
        children: [null != e && (0, l.jsx)(r.A, {
            href: e,
            children: i.intl.string(i.t["8S0kcM"])
        }), null != e && null != n && (0, l.jsx)("span", {
            "aria-disabled": "true",
            children: "•"
        }), null != n && (0, l.jsx)(r.A, {
            href: n,
            children: i.intl.string(i.t.ZpyeCm)
        })]
    })
}