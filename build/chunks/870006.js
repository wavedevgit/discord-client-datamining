/** Chunk was on 41727 **/
/** chunk id: 870006, original params: e,t,n (module,exports,require) **/
n.d(t, {
    u: () => O
}), n(896048);
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    s = n(793574),
    a = n(688810),
    o = n(989985),
    c = n(206835),
    u = n(961350),
    d = n(696451),
    p = n(229527),
    h = n(81400),
    f = n(652215),
    g = n(340837),
    m = n(355097),
    b = n(985018),
    A = n(169880);

function y(e) {
    var t;
    let {
        guild: n
    } = e, l = (0, c.A)({
        scrollPosition: m._F.GUILD_TAG
    });
    return (0, r.jsx)("div", {
        children: (0, r.jsx)(o._, {
            bannerIcon: (0, r.jsx)(i._mZ, {
                size: "lg",
                color: "currentColor",
                className: A.q3
            }),
            bannerHeader: b.intl.format(b.t.GgMwjk, {
                guildName: null != (t = null == n ? void 0 : n.name) ? t : ""
            }),
            bannerSubtext: b.intl.string(b.t.ONjwD5),
            textStyles: A.cI,
            headerStyles: A.U_,
            children: (0, r.jsx)(i.Button, {
                variant: "primary",
                size: "sm",
                text: b.intl.string(b.t.Viksoo),
                onClick: () => l()
            })
        })
    })
}

function _(e) {
    var t, n;
    let {
        guild: l
    } = e, {
        analyticsLocations: c
    } = (0, a.Ay)(s.A.AUTOMOD_PROFILE_QUARANTINE_ALERT), [u, d] = (0, h.j8)({
        guildId: null != (t = null == l ? void 0 : l.id) ? t : f.dJq,
        analyticsLocations: c
    }), p = d ? b.intl.string(b.t["9ph2v7"]) : b.intl.string(b.t.ldh9Cg), g = d ? b.intl.string(b.t["/PGQf0"]) : b.intl.string(b.t.WikgZ1);
    return (0, r.jsx)("div", {
        children: (0, r.jsx)(o._, {
            bannerIcon: (0, r.jsx)(i._mZ, {
                size: "lg",
                color: "currentColor",
                className: A.q3
            }),
            bannerHeader: b.intl.format(b.t.kcYdTq, {
                guildName: null != (n = null == l ? void 0 : l.name) ? n : ""
            }),
            bannerSubtext: p,
            textStyles: A.cI,
            headerStyles: A.U_,
            children: (0, r.jsx)(i.Button, {
                variant: "primary",
                size: "sm",
                text: g,
                onClick: () => {
                    u()
                }
            })
        })
    })
}

function O(e) {
    let {
        guild: t
    } = e, n = (0, l.bG)([u.default, d.Ay], () => {
        if (null == t) return new Set;
        let e = u.default.getId();
        return (0, p.wj)(d.Ay.getMember(t.id, e))
    }, [t]);
    return n.has(g.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || n.has(g.D.AUTOMOD_QUARANTINED_BIO) ? (0, r.jsx)(_, {
        guild: t
    }) : n.has(g.D.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, r.jsx)(y, {
        guild: t
    }) : (0, r.jsx)(_, {
        guild: t
    })
}