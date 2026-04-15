/** chunk id: 892040 params = (module,exports,require) **/
n.d(t, {
    K: () => s
});
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(985018),
    r = n(874628);

function s(e) {
    let {
        onDiscardApplication: t,
        onContinueApplication: n,
        guild: s
    } = e;
    return (0, i.jsxs)("div", {
        className: r.EL,
        children: [(0, i.jsx)("div", {
            className: r.P0,
            children: (0, i.jsx)(l.pun, {
                size: "md",
                color: l.LU0.colors.INTERACTIVE_TEXT_ACTIVE
            })
        }), (0, i.jsx)(l.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: null != s ? a.intl.formatToPlainString(a.t.f5Jaw7, {
                guildName: s.name
            }) : a.intl.string(a.t["0sTyEb"])
        }), (0, i.jsxs)("div", {
            className: r.rn,
            children: [(0, i.jsx)(l.Button, {
                fullWidth: !0,
                onClick: n,
                variant: "secondary",
                size: "md",
                text: a.intl.string(a.t.h3aGmv)
            }), (0, i.jsx)(l.Button, {
                fullWidth: !0,
                onClick: t,
                variant: "critical-primary",
                size: "md",
                text: a.intl.string(a.t.OQFlFD)
            })]
        })]
    })
}