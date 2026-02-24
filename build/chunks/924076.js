/** chunk id: 924076, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => h
}), n(938796);
var i = n(627968),
    r = n(64700),
    l = n(311907),
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

function h(t) {
    let {
        handleStepChange: e,
        handleClose: n
    } = t, {
        subscriptionMetadataRequest: h,
        selectedSku: b,
        selectedStoreListing: A,
        application: j
    } = (0, u.P5)(), S = (0, a.A)(x.Y), v = (0, l.bG)([c.A], () => c.A.getGuild(h?.guild_id)), C = r.useCallback(() => e(m.pn.REVIEW), [e]);
    if (null == b) return null;
    let N = (0, s.bg)(b.flags);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(f.dZ, {
            children: S ? (0, i.jsx)(d.E, {
                confirmCta: g.intl.string(g.t.PBHFSq),
                onConfirm: C,
                onCancel: n,
                title: g.intl.format(g.t["6n6oXA"], {
                    tier: b.name
                }),
                subtitle: N ? g.intl.string(g.t.lzAoKB) : g.intl.formatToPlainString(g.t["GqaY/j"], {
                    guildName: v?.name
                }),
                showOpenDiscord: !1
            }) : (0, i.jsx)(o.Uf, {
                icon: A?.thumbnail,
                storeListingBenefits: A?.benefits,
                application: j ?? void 0,
                title: g.intl.format(g.t.haiCxc, {
                    tier: b.name
                }),
                subtitle: N ? g.intl.string(g.t.RvtbP5) : g.intl.string(g.t.zY39Zu),
                description: N ? g.intl.formatToPlainString(g.t.QCe4rY, {
                    applicationName: j?.name
                }) : g.intl.string(g.t.n1Pu8C)
            })
        }), !S && (0, i.jsx)(f.UX, {
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