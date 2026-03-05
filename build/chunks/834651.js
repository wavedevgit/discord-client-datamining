/** chunk id: 834651, original params: e,t,n (module,exports,require) **/
n.d(t, {
    j: () => p
});
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(576470),
    r = n(989985),
    o = n(961350),
    c = n(696451),
    d = n(723508),
    u = n(264388),
    h = n(914662),
    m = n(200700),
    A = n(985018),
    g = n(312965);

function p(e) {
    let {
        guild: t,
        disabledUntil: n
    } = e, [p, f] = (0, u.n)(t.id), _ = (0, l.bG)([c.Ay, o.default], () => c.Ay.getMember(t.id, o.default.getId()), [t.id]);
    return (0, d.X)(_), (0, i.jsxs)("div", {
        children: [p ? (0, i.jsx)(h.A, {
            onClose: () => f(t.id),
            guildName: t.name
        }) : null, (0, i.jsx)(r._, {
            bannerIcon: (0, i.jsx)(s.gQi, {
                size: "md",
                color: "currentColor",
                className: g.q3
            }),
            bannerHeader: A.intl.string(A.t["9UoK6Y"]),
            bannerSubtext: A.intl.format(A.t["4ZwD5G"], {
                link: m.MO
            }),
            textStyles: g.cI,
            headerStyles: g.U_,
            children: (0, i.jsx)(s.Text, {
                variant: "text-sm/semibold",
                children: (0, i.jsx)(a.A, {
                    deadline: new Date(n),
                    showUnits: !0,
                    stopAtOneSec: !0
                })
            })
        })]
    })
}