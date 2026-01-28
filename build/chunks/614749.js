/** Chunk was on 5606 **/
/** chunk id: 614749, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(627968),
    i = n(64700),
    l = n(758879),
    s = n(946015),
    a = n(311907),
    o = n(397927),
    c = n(100406),
    d = n(878460),
    u = n(253932),
    p = n(12901),
    _ = n(652215),
    m = n(431144),
    g = n(842130),
    f = n(985018),
    b = n(753765);
let h = () => {
    let e = u.dm.useSetting(),
        {
            categories: t,
            initialized: n
        } = (0, a.cf)([d.A], () => d.A.getEmailSettings());
    return i.useEffect(() => {
        null == n && (0, c.cR)()
    }, [n]), (0, r.jsx)("div", {
        className: b.kL,
        children: (0, r.jsxs)(o.nVY, {
            label: f.intl.string(g.default.USIXU7),
            children: [(0, r.jsx)(o.dOG, {
                checked: e,
                description: f.intl.string(g.default["5MdB3j"]),
                onChange: u.dm.updateSetting,
                label: f.intl.string(g.default.zkEceS)
            }), e ? (0, r.jsx)(o.ZpM, {
                className: b.MT,
                type: o.ZpM.Types.CUSTOM,
                outline: !0,
                children: (0, r.jsxs)(s.s, {
                    justify: s.s.Justify.END,
                    children: [(0, r.jsx)(s.s.Child, {
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            children: f.intl.string(g.default.xAVm7K)
                        })
                    }), (0, r.jsx)(o.DUT, {
                        children: (0, r.jsx)(l.N_, {
                            onClick: p.default,
                            to: {
                                pathname: _.BVt.FAMILY_CENTER,
                                state: {
                                    scrollRestoration: !1
                                }
                            },
                            children: f.intl.string(g.default.cUIXFY)
                        })
                    }), (0, r.jsx)(o.fkz, {
                        icon: o.EdP,
                        className: b.UE,
                        disableColor: !0
                    })]
                })
            }) : null, (0, r.jsx)(o.dOG, {
                checked: !!t[m.HO.FAMILY_CENTER_DIGEST],
                description: f.intl.string(g.default.y34S46),
                onChange: function(e) {
                    (0, c.CA)(m.HO.FAMILY_CENTER_DIGEST, e)
                },
                label: f.intl.string(g.default.irvJKR)
            })]
        })
    })
}