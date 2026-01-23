/** Chunk was on 6759 **/
/** chunk id: 851091, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var l = n(627968);
n(64700);
var i = n(284009),
    s = n.n(i),
    r = n(158954),
    a = n(397927),
    c = n(263063),
    o = n(976860),
    d = n(985018),
    u = n(100135);

function m(e) {
    let {
        directoryGuildName: t,
        guildToAdd: n,
        isExistingGuildFlow: i,
        onClose: m
    } = e;
    return s()(null != n, "Missing guild in Hub add guild confirmation"), (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(r.cwr, {
            children: (0, l.jsxs)("div", {
                className: u.Qs,
                children: [(0, l.jsx)(c.A, {
                    guild: n,
                    size: c.A.Sizes.XLARGE,
                    active: !0
                }), (0, l.jsx)(a.Heading, {
                    className: u.DD,
                    variant: "heading-xl/semibold",
                    children: d.intl.string(d.t.CueiPY)
                }), (0, l.jsx)(a.Text, {
                    color: "text-default",
                    variant: "text-md/normal",
                    children: i ? d.intl.formatToPlainString(d.t.R7Pqn5, {
                        guildName: t
                    }) : d.intl.formatToPlainString(d.t.eIxPSv, {
                        guildName: t
                    })
                })]
            })
        }), (0, l.jsx)(r.H7u, {
            actionsFullWidth: !0,
            actions: i ? [{
                text: d.intl.string(d.t["X0WK+6"]),
                variant: "primary",
                onClick: m
            }] : [{
                text: d.intl.string(d.t["X/VABv"]),
                variant: "secondary",
                onClick: m
            }, {
                text: d.intl.string(d.t.DymAQt),
                variant: "primary",
                onClick: () => {
                    (0, o.uh)(n.id), null == m || m()
                }
            }]
        })]
    })
}