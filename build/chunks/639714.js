/** chunk id: 639714 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E,
    o: () => b
});
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(505779),
    c = n(311907),
    o = n(397927),
    d = n(73153),
    u = n(714991),
    m = n(970163),
    x = n(184989),
    h = n(486020),
    f = n(240248),
    g = n(409626),
    p = n(305080),
    _ = n(652215),
    j = n(985018),
    v = n(728528),
    A = n(272746),
    I = n(639142);

function E(e) {
    let {
        detectedGame: t,
        trackClick: n,
        onInviteResolved: i,
        closeModal: f
    } = e, [p, I] = a.useState(), E = (0, c.bG)([x.A], () => p?.guild?.id != null && x.A.isMember(p?.guild?.id)), b = a.useMemo(() => t.websites?.find(e => {
        let {
            category: t
        } = e;
        return t === s.V.DISCORD
    }), [t.websites]);
    if (a.useEffect(() => {
            let e = async e => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (null != p && p.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, m.A)(t);
                    !0 !== e.banned && (I(e.invite), null != e.invite && i?.(e.invite))
                }
            };
            null != b && e(b.url)
        }, [b, i, p]), null == p || null == p.guild || !p.guild.features.includes(_.GuildFeatures.VERIFIED)) return null;
    let N = h.Ay.getGuildIconURL({
        id: p.guild.id,
        icon: p.guild.icon,
        size: 32
    });
    return (0, l.jsxs)("div", {
        className: v.fi,
        children: [(0, l.jsx)(o.Heading, {
            className: v.bV,
            variant: "text-xs/semibold",
            color: "text-default",
            children: j.intl.string(j.t.kBDZSL)
        }), (0, l.jsxs)("div", {
            className: r()(v.nM, v.mX),
            children: [(0, l.jsx)("img", {
                className: A.$f,
                src: N,
                alt: j.intl.formatToPlainString(j.t.xm6W9D, {
                    guildName: p.guild.name
                })
            }), (0, l.jsxs)("div", {
                className: A.U5,
                children: [(0, l.jsxs)("div", {
                    className: A.YS,
                    children: [(0, l.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        children: p.guild.name
                    }), (0, l.jsx)(u.A, {
                        guild: p.guild,
                        size: 16
                    })]
                }), null != p.approximate_member_count && (0, l.jsx)(o.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: j.intl.format(j.t.zRl6XR, {
                        count: p.approximate_member_count
                    })
                })]
            })]
        }), (0, l.jsx)(o.Button, {
            variant: "secondary",
            text: E ? j.intl.string(j.t.cEnaWx) : j.intl.string(j.t.XpeFYr),
            onClick: () => {
                f(), n(g.Ws.JoinOfficialServer), d.h.dispatch({
                    type: "INVITE_MODAL_OPEN",
                    invite: p,
                    code: p.code,
                    context: _.BRT.APP
                })
            },
            fullWidth: !0
        })]
    })
}

function b(e) {
    let {
        trackClick: t,
        closeModal: n
    } = e, {
        canStartAuthorization: a,
        hasAlreadyLinked: i,
        officialInvite: r,
        isMember: s
    } = (0, p.c)();
    if (null == r || null == r.guild || !r.guild.features.includes(_.GuildFeatures.VERIFIED)) return null;
    let c = h.Ay.getGuildIconURL({
            id: r.guild.id,
            icon: r.guild.icon,
            size: 48
        }),
        m = h.Ay.getGuildSplashURL({
            id: r.guild.id,
            splash: r.guild.splash
        }),
        x = a && !i || null == m,
        v = (0, l.jsx)("img", {
            className: I.$f,
            src: c,
            alt: j.intl.formatToPlainString(j.t.xm6W9D, {
                guildName: r.guild.name
            })
        }),
        A = x ? I.To : I.Kt,
        E = x ? I.yj : I.FS;
    return (0, l.jsxs)("div", {
        className: I.uW,
        children: [(0, l.jsx)(o.Heading, {
            className: I.Gf,
            variant: "heading-sm/semibold",
            color: "text-strong",
            children: j.intl.string(j.t["U2N+ci"])
        }), (0, l.jsxs)("div", {
            className: I.kL,
            children: [!x && null != m && (0, l.jsx)("img", {
                className: I.ll,
                src: m,
                alt: ""
            }), (0, l.jsxs)("div", {
                className: I.hQ,
                children: [(0, l.jsxs)("div", {
                    className: A,
                    children: [x ? v : (0, l.jsx)("div", {
                        className: I._C,
                        children: (0, l.jsx)("div", {
                            className: I.kW,
                            children: v
                        })
                    }), (0, l.jsxs)("div", {
                        className: E,
                        children: [(0, l.jsxs)("div", {
                            className: I.YS,
                            children: [(0, l.jsx)(u.A, {
                                guild: r.guild,
                                size: 16
                            }), (0, l.jsx)(o.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                children: r.guild.name
                            })]
                        }), !(0, f.uJ)(r.guild?.description) && (0, l.jsx)(o.Text, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: r.guild?.description
                        }), null != r.approximate_member_count || null != r.approximate_presence_count ? (0, l.jsxs)("div", {
                            className: I.iR,
                            children: [null != r.approximate_presence_count && (0, l.jsxs)("div", {
                                className: I.Tb,
                                children: [(0, l.jsx)("i", {
                                    className: I._o
                                }), (0, l.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: j.intl.format(j.t["LC+S+m"], {
                                        membersOnline: r.approximate_presence_count
                                    })
                                })]
                            }), null != r.approximate_member_count && (0, l.jsxs)("div", {
                                className: I.Tb,
                                children: [(0, l.jsx)("i", {
                                    className: I.jk
                                }), (0, l.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: j.intl.format(j.t.zRl6XR, {
                                        count: r.approximate_member_count
                                    })
                                })]
                            })]
                        }) : null]
                    })]
                }), (0, l.jsx)(o.Button, {
                    variant: "secondary",
                    text: s ? j.intl.string(j.t.cEnaWx) : j.intl.string(j.t.XpeFYr),
                    onClick: () => {
                        n(), t(g.Ws.JoinOfficialServer), d.h.dispatch({
                            type: "INVITE_MODAL_OPEN",
                            invite: r,
                            code: r.code,
                            context: _.BRT.APP
                        })
                    },
                    fullWidth: !0
                })]
            })]
        })]
    })
}