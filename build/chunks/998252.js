/** Chunk was on 5606 **/
/** chunk id: 998252, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(521933),
    s = n(452357),
    a = n(985018),
    o = n(139674);

function c(e) {
    let {
        currentUser: t
    } = e;
    return t.isClaimed() ? null == t.email ? null : t.verified ? void 0 : (0, r.jsxs)(i.wx6, {
        type: "warning",
        children: [(0, r.jsx)(i.Heading, {
            variant: "heading-md/medium",
            children: a.intl.string(a.t.tuGzBT)
        }), (0, r.jsx)(i.Text, {
            variant: "text-sm/normal",
            className: o.PA,
            children: a.intl.string(a.t.NAzplE)
        }), (0, r.jsx)(s.A, {
            size: "sm",
            variant: "secondary"
        })]
    }) : (0, r.jsxs)(i.wx6, {
        type: "critical",
        children: [(0, r.jsx)(i.Heading, {
            variant: "heading-md/medium",
            children: a.intl.string(a.t["/3qnL/"])
        }), (0, r.jsx)(i.Text, {
            variant: "text-sm/normal",
            className: o.PA,
            children: a.intl.string(a.t.qKs3vg)
        }), (0, r.jsx)(i.Button, {
            variant: "secondary",
            size: "sm",
            text: a.intl.string(a.t["7psymi"]),
            onClick: () => l.A.openClaimAccountModal()
        })]
    })
}