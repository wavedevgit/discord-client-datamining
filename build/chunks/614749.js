/** chunk id: 614749 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(936504),
    r = n(946015),
    a = n(311907),
    o = n(397927),
    d = n(100406),
    c = n(878460),
    u = n(253932),
    m = n(779733),
    g = n(652215),
    _ = n(431144),
    x = n(221425),
    h = n(985018),
    A = n(475112);
let p = () => {
    let e = u.dm.useSetting(),
        {
            categories: t,
            initialized: n
        } = (0, a.cf)([c.A], () => c.A.getEmailSettings());
    return s.useEffect(() => {
        null == n && (0, d.cR)()
    }, [n]), (0, i.jsx)("div", {
        className: A.kL,
        children: (0, i.jsxs)(o.nVY, {
            label: h.intl.string(x.default.USIXU7),
            children: [(0, i.jsx)(o.dOG, {
                checked: e,
                description: h.intl.string(x.default["5MdB3j"]),
                onChange: u.dm.updateSetting,
                label: h.intl.string(x.default.zkEceS)
            }), e ? (0, i.jsx)(o.ZpM, {
                className: A.MT,
                type: o.ZpM.Types.CUSTOM,
                outline: !0,
                children: (0, i.jsxs)(r.s, {
                    justify: r.s.Justify.END,
                    children: [(0, i.jsx)(r.s.Child, {
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            children: h.intl.string(x.default.xAVm7K)
                        })
                    }), (0, i.jsx)(o.DUT, {
                        children: (0, i.jsx)(l.N_, {
                            onClick: m.default,
                            to: {
                                pathname: g.BVt.FAMILY_CENTER,
                                state: {
                                    scrollRestoration: !1
                                }
                            },
                            children: h.intl.string(x.default.cUIXFY)
                        })
                    }), (0, i.jsx)(o.fkz, {
                        icon: o.EdP,
                        className: A.UE,
                        disableColor: !0
                    })]
                })
            }) : null, (0, i.jsx)(o.dOG, {
                checked: !!t[_.HO.FAMILY_CENTER_DIGEST],
                description: h.intl.string(x.default.y34S46),
                onChange: function(e) {
                    (0, d.CA)(_.HO.FAMILY_CENTER_DIGEST, e)
                },
                label: h.intl.string(x.default.irvJKR)
            })]
        })
    })
}