/** chunk id: 892040 params = (module,exports,require) **/
n.d(t, {
    K: () => s
});
var i = n(627968);
n(64700);
var a = n(397927),
    r = n(985018),
    l = n(874628);

function s(e) {
    let {
        onDiscardApplication: t,
        onContinueApplication: n,
        guild: s
    } = e;
    return (0, i.jsxs)("div", {
        className: l.EL,
        children: [(0, i.jsx)("div", {
            className: l.P0,
            children: (0, i.jsx)(a.pun, {
                size: "md",
                color: a.LU0.colors.INTERACTIVE_TEXT_ACTIVE
            })
        }), (0, i.jsx)(a.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: null != s ? r.intl.formatToPlainString(r.t.f5Jaw7, {
                guildName: s.name
            }) : r.intl.string(r.t["0sTyEb"])
        }), (0, i.jsxs)("div", {
            className: l.rn,
            children: [(0, i.jsx)(a.Button, {
                fullWidth: !0,
                onClick: n,
                variant: "secondary",
                size: "md",
                text: r.intl.string(r.t.h3aGmv)
            }), (0, i.jsx)(a.Button, {
                fullWidth: !0,
                onClick: t,
                variant: "critical-primary",
                size: "md",
                text: r.intl.string(r.t.OQFlFD)
            })]
        })]
    })
}