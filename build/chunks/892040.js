/** chunk id: 892040 params = (module,exports,require) **/
n.d(t, {
    K: () => s
});
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(985018),
    a = n(400783);

function s(e) {
    let {
        onDiscardApplication: t,
        onContinueApplication: n,
        guild: s
    } = e;
    return (0, i.jsxs)("div", {
        className: a.EL,
        children: [(0, i.jsx)("div", {
            className: a.P0,
            children: (0, i.jsx)(r.pun, {
                size: "md",
                color: r.LU0.colors.INTERACTIVE_TEXT_ACTIVE
            })
        }), (0, i.jsx)(r.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: null != s ? l.intl.formatToPlainString(l.t.f5Jaw7, {
                guildName: s.name
            }) : l.intl.string(l.t["0sTyEb"])
        }), (0, i.jsxs)("div", {
            className: a.rn,
            children: [(0, i.jsx)(r.Button, {
                fullWidth: !0,
                onClick: n,
                variant: "secondary",
                size: "md",
                text: l.intl.string(l.t.h3aGmv)
            }), (0, i.jsx)(r.Button, {
                fullWidth: !0,
                onClick: t,
                variant: "critical-primary",
                size: "md",
                text: l.intl.string(l.t.OQFlFD)
            })]
        })]
    })
}