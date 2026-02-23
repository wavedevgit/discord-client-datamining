/** chunk id: 998252, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var s = n(397927),
    a = n(521933),
    l = n(452357),
    r = n(985018),
    o = n(139674);

function c(e) {
    let {
        currentUser: t
    } = e;
    return t.isClaimed() ? null == t.email ? null : t.verified ? void 0 : (0, i.jsxs)(s.wx6, {
        type: "warning",
        children: [(0, i.jsx)(s.Heading, {
            variant: "heading-md/medium",
            children: r.intl.string(r.t.tuGzBT)
        }), (0, i.jsx)(s.Text, {
            variant: "text-sm/normal",
            className: o.PA,
            children: r.intl.string(r.t.NAzplE)
        }), (0, i.jsx)(l.A, {
            size: "sm",
            variant: "secondary"
        })]
    }) : (0, i.jsxs)(s.wx6, {
        type: "critical",
        children: [(0, i.jsx)(s.Heading, {
            variant: "heading-md/medium",
            children: r.intl.string(r.t["/3qnL/"])
        }), (0, i.jsx)(s.Text, {
            variant: "text-sm/normal",
            className: o.PA,
            children: r.intl.string(r.t.qKs3vg)
        }), (0, i.jsx)(s.Button, {
            variant: "secondary",
            size: "sm",
            text: r.intl.string(r.t["7psymi"]),
            onClick: () => a.A.openClaimAccountModal()
        })]
    })
}