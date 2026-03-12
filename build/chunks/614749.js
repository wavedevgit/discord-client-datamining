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
    _ = n(12901),
    m = n(652215),
    g = n(431144),
    A = n(870236),
    h = n(985018),
    x = n(617331);
let p = () => {
    let e = u.dm.useSetting(),
        {
            categories: t,
            initialized: n
        } = (0, a.cf)([c.A], () => c.A.getEmailSettings());
    return s.useEffect(() => {
        null == n && (0, d.cR)()
    }, [n]), (0, i.jsx)("div", {
        className: x.kL,
        children: (0, i.jsxs)(o.nVY, {
            label: h.intl.string(A.default.USIXU7),
            children: [(0, i.jsx)(o.dOG, {
                checked: e,
                description: h.intl.string(A.default["5MdB3j"]),
                onChange: u.dm.updateSetting,
                label: h.intl.string(A.default.zkEceS)
            }), e ? (0, i.jsx)(o.ZpM, {
                className: x.MT,
                type: o.ZpM.Types.CUSTOM,
                outline: !0,
                children: (0, i.jsxs)(r.s, {
                    justify: r.s.Justify.END,
                    children: [(0, i.jsx)(r.s.Child, {
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            children: h.intl.string(A.default.xAVm7K)
                        })
                    }), (0, i.jsx)(o.DUT, {
                        children: (0, i.jsx)(l.N_, {
                            onClick: _.default,
                            to: {
                                pathname: m.BVt.FAMILY_CENTER,
                                state: {
                                    scrollRestoration: !1
                                }
                            },
                            children: h.intl.string(A.default.cUIXFY)
                        })
                    }), (0, i.jsx)(o.fkz, {
                        icon: o.EdP,
                        className: x.UE,
                        disableColor: !0
                    })]
                })
            }) : null, (0, i.jsx)(o.dOG, {
                checked: !!t[g.HO.FAMILY_CENTER_DIGEST],
                description: h.intl.string(A.default.y34S46),
                onChange: function(e) {
                    (0, d.CA)(g.HO.FAMILY_CENTER_DIGEST, e)
                },
                label: h.intl.string(A.default.irvJKR)
            })]
        })
    })
}