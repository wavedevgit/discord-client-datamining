/** Chunk was on 78528 **/
/** chunk id: 834651, original params: e,t,n (module,exports,require) **/
n.d(t, {
    j: () => m
}), n(896048);
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    s = n(576470),
    a = n(989985),
    o = n(961350),
    c = n(696451),
    u = n(723508),
    d = n(264388),
    p = n(914662),
    h = n(200700),
    f = n(985018),
    g = n(719931);

function m(e) {
    let {
        guild: t,
        disabledUntil: n
    } = e, [m, b] = (0, d.n)(t.id), A = (0, l.bG)([c.Ay, o.default], () => c.Ay.getMember(t.id, o.default.getId()), [t.id]);
    return (0, u.X)(A), (0, r.jsxs)("div", {
        children: [m ? (0, r.jsx)(p.A, {
            onClose: () => b(t.id),
            guildName: t.name
        }) : null, (0, r.jsx)(a._, {
            bannerIcon: (0, r.jsx)(i.gQi, {
                size: "md",
                color: "currentColor",
                className: g.q3
            }),
            bannerHeader: f.intl.string(f.t["9UoK6Y"]),
            bannerSubtext: f.intl.format(f.t["4ZwD5G"], {
                link: h.MO
            }),
            textStyles: g.cI,
            headerStyles: g.U_,
            children: (0, r.jsx)(i.Text, {
                variant: "text-sm/semibold",
                children: (0, r.jsx)(s.A, {
                    deadline: new Date(n),
                    showUnits: !0,
                    stopAtOneSec: !0
                })
            })
        })]
    })
}