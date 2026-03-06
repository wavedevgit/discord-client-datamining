/** chunk id: 924076 params = (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(938796);
var i = n(627968),
    l = n(64700),
    r = n(311907),
    a = n(241524),
    s = n(163437),
    o = n(490744),
    d = n(594508),
    c = n(71393),
    u = n(156312),
    m = n(166532),
    p = n(19311),
    f = n(482132),
    x = n(376747),
    g = n(985018);

function h(e) {
    let {
        handleStepChange: t,
        handleClose: n
    } = e, {
        subscriptionMetadataRequest: h,
        selectedSku: b,
        selectedStoreListing: A,
        application: j
    } = (0, u.P5)(), v = (0, a.A)(x.Y), S = (0, r.bG)([c.A], () => c.A.getGuild(h?.guild_id)), C = l.useCallback(() => t(m.pn.REVIEW), [t]);
    if (null == b) return null;
    let _ = (0, s.bg)(b.flags);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(f.dZ, {
            children: v ? (0, i.jsx)(d.E, {
                confirmCta: g.intl.string(g.t.PBHFSq),
                onConfirm: C,
                onCancel: n,
                title: g.intl.format(g.t["6n6oXA"], {
                    tier: b.name
                }),
                subtitle: _ ? g.intl.string(g.t.lzAoKB) : g.intl.formatToPlainString(g.t["GqaY/j"], {
                    guildName: S?.name
                }),
                showOpenDiscord: !1
            }) : (0, i.jsx)(o.Uf, {
                icon: A?.thumbnail,
                storeListingBenefits: A?.benefits,
                application: j ?? void 0,
                title: g.intl.format(g.t.haiCxc, {
                    tier: b.name
                }),
                subtitle: _ ? g.intl.string(g.t.RvtbP5) : g.intl.string(g.t.zY39Zu),
                description: _ ? g.intl.formatToPlainString(g.t.QCe4rY, {
                    applicationName: j?.name
                }) : g.intl.string(g.t.n1Pu8C)
            })
        }), !v && (0, i.jsx)(f.UX, {
            children: (0, i.jsx)(p.Ay, {
                onBack: n,
                backText: g.intl.string(g.t.TQBY1J),
                onPrimary: C,
                primaryCTA: p.ti.CONTINUE,
                primaryText: g.intl.string(g.t["gZhF+3"])
            })
        })]
    })
}