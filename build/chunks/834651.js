/** chunk id: 834651, original params: e,t,n (module,exports,require) **/
n.d(t, {
    j: () => g
}), n(896048);
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    a = n(576470),
    s = n(989985),
    o = n(961350),
    c = n(696451),
    u = n(723508),
    d = n(264388),
    h = n(914662),
    p = n(200700),
    f = n(985018),
    m = n(719931);

function g(e) {
    let {
        guild: t,
        disabledUntil: n
    } = e, [g, A] = (0, d.n)(t.id), b = (0, r.bG)([c.Ay, o.default], () => c.Ay.getMember(t.id, o.default.getId()), [t.id]);
    return (0, u.X)(b), (0, l.jsxs)("div", {
        children: [g ? (0, l.jsx)(h.A, {
            onClose: () => A(t.id),
            guildName: t.name
        }) : null, (0, l.jsx)(s._, {
            bannerIcon: (0, l.jsx)(i.gQi, {
                size: "md",
                color: "currentColor",
                className: m.q3
            }),
            bannerHeader: f.intl.string(f.t["9UoK6Y"]),
            bannerSubtext: f.intl.format(f.t["4ZwD5G"], {
                link: p.MO
            }),
            textStyles: m.cI,
            headerStyles: m.U_,
            children: (0, l.jsx)(i.Text, {
                variant: "text-sm/semibold",
                children: (0, l.jsx)(a.A, {
                    deadline: new Date(n),
                    showUnits: !0,
                    stopAtOneSec: !0
                })
            })
        })]
    })
}