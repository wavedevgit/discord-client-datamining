/** chunk id: 924076 params = (module,exports,require) **/
n.d(t, {
    A: () => b
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
    x = n(987616),
    g = n(376747),
    h = n(985018);

function b(e) {
    let {
        handleStepChange: t,
        handleClose: n
    } = e, {
        subscriptionMetadataRequest: b,
        selectedStoreListing: A,
        application: j
    } = (0, u.P5)(), S = (0, x.S3)(), v = (0, a.A)(g.Y), _ = (0, l.bG)([c.A], () => c.A.getGuild(b?.guild_id)), C = r.useCallback(() => t(m.pn.REVIEW), [t]);
    if (null == S) return null;
    let N = (0, s.bg)(S.flags);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(f.dZ, {
            children: v ? (0, i.jsx)(d.E, {
                confirmCta: h.intl.string(h.t.PBHFSq),
                onConfirm: C,
                onCancel: n,
                title: h.intl.format(h.t["6n6oXA"], {
                    tier: S.name
                }),
                subtitle: N ? h.intl.string(h.t.lzAoKB) : h.intl.formatToPlainString(h.t["GqaY/j"], {
                    guildName: _?.name
                }),
                showOpenDiscord: !1
            }) : (0, i.jsx)(o.Uf, {
                icon: A?.thumbnail,
                storeListingBenefits: A?.benefits,
                application: j ?? void 0,
                title: h.intl.format(h.t.haiCxc, {
                    tier: S.name
                }),
                subtitle: N ? h.intl.string(h.t.RvtbP5) : h.intl.string(h.t.zY39Zu),
                description: N ? h.intl.formatToPlainString(h.t.QCe4rY, {
                    applicationName: j?.name
                }) : h.intl.string(h.t.n1Pu8C)
            })
        }), !v && (0, i.jsx)(f.UX, {
            children: (0, i.jsx)(p.Ay, {
                onBack: n,
                backText: h.intl.string(h.t.TQBY1J),
                onPrimary: C,
                primaryCTA: p.ti.CONTINUE,
                primaryText: h.intl.string(h.t["gZhF+3"])
            })
        })]
    })
}