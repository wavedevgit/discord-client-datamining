/** chunk id: 868711, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => p
});
var l = t(627968);
t(64700);
var r = t(311907),
    i = t(397927),
    a = t(997509),
    o = t(489673),
    c = t(71393),
    s = t(576705),
    u = t(652215),
    d = t(985018),
    g = t(563959);

function p(e) {
    let {
        guildId: n,
        onClose: t
    } = e, p = (0, r.bG)([c.A, s.A], () => {
        let e = c.A.getGuild(n);
        return s.A.can(u.xBc.MANAGE_ROLES, e)
    }, [n]);
    return (0, l.jsxs)("div", {
        className: g.kL,
        children: [(0, l.jsx)(o.A, {
            children: (0, l.jsx)("div", {
                className: g.n1,
                children: (0, l.jsx)(i.CTc, {
                    size: "custom",
                    color: "currentColor",
                    height: 40,
                    width: 40,
                    className: g.Kk
                })
            })
        }), (0, l.jsx)(i.Heading, {
            color: "text-strong",
            variant: "heading-xl/semibold",
            className: g.DD,
            children: d.intl.string(d.t["WgZ+3D"])
        }), (0, l.jsx)(i.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            className: g.VA,
            children: d.intl.string(d.t["v/S/PG"])
        }), p && (0, l.jsx)(i.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            className: g.Ec,
            children: d.intl.format(d.t["K+DH2o"], {
                onClick: () => {
                    a.A.open(n, u.BEX.ROLES), t()
                }
            })
        })]
    })
}