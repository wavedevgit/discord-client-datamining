/** Chunk was on 54160 **/
/** chunk id: 350277, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => l
});
var n = r(627968);
r(64700);
var i = r(397927),
    a = r(840065),
    s = r(985018),
    o = r(299043);

function l(e) {
    let {
        onClose: t
    } = e;
    return (0, n.jsxs)("div", {
        className: o.op,
        children: [(0, n.jsx)(i.Heading, {
            className: o.qQ,
            color: "text-strong",
            variant: "heading-xl/bold",
            children: s.intl.string(s.t["3C+rbC"])
        }), (0, n.jsx)(i.Text, {
            className: o.AC,
            color: "text-default",
            variant: "text-md/medium",
            children: s.intl.string(s.t.TS1L09)
        }), (0, n.jsx)(i.Text, {
            className: o.mO,
            color: "text-default",
            variant: "text-md/medium",
            children: s.intl.format(s.t.bWE0ZD, {
                onClick: () => {
                    t(), (0, a.openUserSettings)()
                }
            })
        }), (0, n.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: o.x6,
            children: (0, n.jsx)(i.Button, {
                variant: "primary",
                size: "sm",
                text: s.intl.string(s.t["yD/zkn"]),
                type: "button",
                onClick: t
            })
        })]
    })
}