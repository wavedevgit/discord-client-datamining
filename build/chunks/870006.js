/** chunk id: 870006, original params: e,t,n (module,exports,require) **/
n.d(t, {
    u: () => v
}), n(896048);
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    a = n(793574),
    s = n(688810),
    o = n(989985),
    c = n(206835),
    u = n(961350),
    d = n(696451),
    h = n(229527),
    p = n(81400),
    f = n(652215),
    m = n(340837),
    g = n(355097),
    A = n(985018),
    b = n(169880);

function _(e) {
    var t;
    let {
        guild: n
    } = e, r = (0, c.A)({
        scrollPosition: g._F.GUILD_TAG
    });
    return (0, l.jsx)("div", {
        children: (0, l.jsx)(o._, {
            bannerIcon: (0, l.jsx)(i._mZ, {
                size: "lg",
                color: "currentColor",
                className: b.q3
            }),
            bannerHeader: A.intl.format(A.t.GgMwjk, {
                guildName: null != (t = null == n ? void 0 : n.name) ? t : ""
            }),
            bannerSubtext: A.intl.string(A.t.ONjwD5),
            textStyles: b.cI,
            headerStyles: b.U_,
            children: (0, l.jsx)(i.Button, {
                variant: "primary",
                size: "sm",
                text: A.intl.string(A.t.Viksoo),
                onClick: () => r()
            })
        })
    })
}

function y(e) {
    var t, n;
    let {
        guild: r
    } = e, {
        analyticsLocations: c
    } = (0, s.Ay)(a.A.AUTOMOD_PROFILE_QUARANTINE_ALERT), [u, d] = (0, p.j8)({
        guildId: null != (t = null == r ? void 0 : r.id) ? t : f.dJq,
        analyticsLocations: c
    }), h = d ? A.intl.string(A.t["9ph2v7"]) : A.intl.string(A.t.ldh9Cg), m = d ? A.intl.string(A.t["/PGQf0"]) : A.intl.string(A.t.WikgZ1);
    return (0, l.jsx)("div", {
        children: (0, l.jsx)(o._, {
            bannerIcon: (0, l.jsx)(i._mZ, {
                size: "lg",
                color: "currentColor",
                className: b.q3
            }),
            bannerHeader: A.intl.format(A.t.kcYdTq, {
                guildName: null != (n = null == r ? void 0 : r.name) ? n : ""
            }),
            bannerSubtext: h,
            textStyles: b.cI,
            headerStyles: b.U_,
            children: (0, l.jsx)(i.Button, {
                variant: "primary",
                size: "sm",
                text: m,
                onClick: () => {
                    u()
                }
            })
        })
    })
}

function v(e) {
    let {
        guild: t
    } = e, n = (0, r.bG)([u.default, d.Ay], () => {
        if (null == t) return new Set;
        let e = u.default.getId();
        return (0, h.wj)(d.Ay.getMember(t.id, e))
    }, [t]);
    return n.has(m.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || n.has(m.D.AUTOMOD_QUARANTINED_BIO) ? (0, l.jsx)(y, {
        guild: t
    }) : n.has(m.D.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, l.jsx)(_, {
        guild: t
    }) : (0, l.jsx)(y, {
        guild: t
    })
}