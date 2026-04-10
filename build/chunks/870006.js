/** chunk id: 870006 params = (module,exports,require) **/
n.d(t, {
    u: () => x
});
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    s = n(793574),
    r = n(688810),
    o = n(989985),
    c = n(206835),
    d = n(961350),
    u = n(696451),
    h = n(229527),
    m = n(81400),
    A = n(652215),
    g = n(340837),
    p = n(355097),
    _ = n(985018),
    f = n(604137);

function E(e) {
    let {
        guild: t
    } = e, n = (0, c.A)({
        scrollPosition: p._F.GUILD_TAG
    });
    return (0, i.jsx)("div", {
        children: (0, i.jsx)(o._, {
            bannerIcon: (0, i.jsx)(a._mZ, {
                size: "lg",
                color: "currentColor",
                className: f.q3
            }),
            bannerHeader: _.intl.format(_.t.GgMwjk, {
                guildName: t?.name ?? ""
            }),
            bannerSubtext: _.intl.string(_.t.ONjwD5),
            textStyles: f.cI,
            headerStyles: f.U_,
            children: (0, i.jsx)(a.Button, {
                variant: "primary",
                size: "sm",
                text: _.intl.string(_.t.Viksoo),
                onClick: () => n()
            })
        })
    })
}

function C(e) {
    let {
        guild: t
    } = e, {
        analyticsLocations: n
    } = (0, r.Ay)(s.A.AUTOMOD_PROFILE_QUARANTINE_ALERT), [l, c] = (0, m.j8)({
        guildId: t?.id ?? A.dJq,
        analyticsLocations: n
    }), d = c ? _.intl.string(_.t["9ph2v7"]) : _.intl.string(_.t.ldh9Cg), u = c ? _.intl.string(_.t["/PGQf0"]) : _.intl.string(_.t.WikgZ1);
    return (0, i.jsx)("div", {
        children: (0, i.jsx)(o._, {
            bannerIcon: (0, i.jsx)(a._mZ, {
                size: "lg",
                color: "currentColor",
                className: f.q3
            }),
            bannerHeader: _.intl.format(_.t.kcYdTq, {
                guildName: t?.name ?? ""
            }),
            bannerSubtext: d,
            textStyles: f.cI,
            headerStyles: f.U_,
            children: (0, i.jsx)(a.Button, {
                variant: "primary",
                size: "sm",
                text: u,
                onClick: () => {
                    l()
                }
            })
        })
    })
}

function x(e) {
    let {
        guild: t
    } = e, n = (0, l.bG)([d.default, u.Ay], () => {
        if (null == t) return new Set;
        let e = d.default.getId();
        return (0, h.wj)(u.Ay.getMember(t.id, e))
    }, [t]);
    return n.has(g.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || n.has(g.D.AUTOMOD_QUARANTINED_BIO) ? (0, i.jsx)(C, {
        guild: t
    }) : n.has(g.D.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, i.jsx)(E, {
        guild: t
    }) : (0, i.jsx)(C, {
        guild: t
    })
}