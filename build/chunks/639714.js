/** chunk id: 639714 params = (module,exports,require) **/
n.d(t, {
    A: () => I,
    o: () => C
});
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(505779),
    o = n(311907),
    c = n(397927),
    d = n(73153),
    u = n(714991),
    m = n(970163),
    x = n(184989),
    h = n(486020),
    f = n(240248),
    g = n(409626),
    _ = n(305080),
    p = n(652215),
    v = n(985018),
    A = n(851822),
    j = n(921380),
    E = n(20440);

function I(e) {
    let {
        detectedGame: t,
        trackClick: n,
        onInviteResolved: i,
        closeModal: f
    } = e, [_, E] = l.useState(), I = (0, o.bG)([x.A], () => _?.guild?.id != null && x.A.isMember(_?.guild?.id)), C = l.useMemo(() => t.websites?.find(e => {
        let {
            category: t
        } = e;
        return t === s.V.DISCORD
    }), [t.websites]);
    if (l.useEffect(() => {
            let e = async e => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (null != _ && _.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, m.A)(t);
                    !0 !== e.banned && (E(e.invite), null != e.invite && i?.(e.invite))
                }
            };
            null != C && e(C.url)
        }, [C, i, _]), null == _ || null == _.guild || !_.guild.features.includes(p.GuildFeatures.VERIFIED)) return null;
    let b = h.Ay.getGuildIconURL({
        id: _.guild.id,
        icon: _.guild.icon,
        size: 32
    });
    return (0, a.jsxs)("div", {
        className: A.fi,
        children: [(0, a.jsx)(c.Heading, {
            className: A.bV,
            variant: "text-xs/semibold",
            color: "text-default",
            children: v.intl.string(v.t.kBDZSL)
        }), (0, a.jsxs)("div", {
            className: r()(A.nM, A.mX),
            children: [(0, a.jsx)("img", {
                className: j.$f,
                src: b,
                alt: v.intl.formatToPlainString(v.t.xm6W9D, {
                    guildName: _.guild.name
                })
            }), (0, a.jsxs)("div", {
                className: j.U5,
                children: [(0, a.jsxs)("div", {
                    className: j.YS,
                    children: [(0, a.jsx)(c.Text, {
                        variant: "text-sm/semibold",
                        children: _.guild.name
                    }), (0, a.jsx)(u.A, {
                        guild: _.guild,
                        size: 16
                    })]
                }), null != _.approximate_member_count && (0, a.jsx)(c.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: v.intl.format(v.t.zRl6XR, {
                        count: _.approximate_member_count
                    })
                })]
            })]
        }), (0, a.jsx)(c.Button, {
            variant: "secondary",
            text: I ? v.intl.string(v.t.cEnaWx) : v.intl.string(v.t.XpeFYr),
            onClick: () => {
                f(), n(g.Ws.JoinOfficialServer), d.h.dispatch({
                    type: "INVITE_MODAL_OPEN",
                    invite: _,
                    code: _.code,
                    context: p.BRT.APP
                })
            },
            fullWidth: !0
        })]
    })
}

function C(e) {
    let {
        trackClick: t,
        closeModal: n
    } = e, {
        canStartAuthorization: l,
        hasAlreadyLinked: i,
        officialInvite: r,
        isMember: s
    } = (0, _.c)();
    if (null == r || null == r.guild || !r.guild.features.includes(p.GuildFeatures.VERIFIED)) return null;
    let o = h.Ay.getGuildIconURL({
            id: r.guild.id,
            icon: r.guild.icon,
            size: 48
        }),
        m = h.Ay.getGuildSplashURL({
            id: r.guild.id,
            splash: r.guild.splash
        }),
        x = l && !i || null == m,
        A = (0, a.jsx)("img", {
            className: E.$f,
            src: o,
            alt: v.intl.formatToPlainString(v.t.xm6W9D, {
                guildName: r.guild.name
            })
        }),
        j = x ? E.To : E.Kt,
        I = x ? E.yj : E.FS;
    return (0, a.jsxs)("div", {
        className: E.uW,
        children: [(0, a.jsx)(c.Heading, {
            className: E.Gf,
            variant: "heading-sm/semibold",
            color: "text-strong",
            children: v.intl.string(v.t["U2N+ci"])
        }), (0, a.jsxs)("div", {
            className: E.kL,
            children: [!x && null != m && (0, a.jsx)("img", {
                className: E.ll,
                src: m,
                alt: ""
            }), (0, a.jsxs)("div", {
                className: E.hQ,
                children: [(0, a.jsxs)("div", {
                    className: j,
                    children: [x ? A : (0, a.jsx)("div", {
                        className: E._C,
                        children: (0, a.jsx)("div", {
                            className: E.kW,
                            children: A
                        })
                    }), (0, a.jsxs)("div", {
                        className: I,
                        children: [(0, a.jsxs)("div", {
                            className: E.YS,
                            children: [(0, a.jsx)(u.A, {
                                guild: r.guild,
                                size: 16
                            }), (0, a.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                children: r.guild.name
                            })]
                        }), !(0, f.uJ)(r.guild?.description) && (0, a.jsx)(c.Text, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: r.guild?.description
                        }), null != r.approximate_member_count || null != r.approximate_presence_count ? (0, a.jsxs)("div", {
                            className: E.iR,
                            children: [null != r.approximate_presence_count && (0, a.jsxs)("div", {
                                className: E.Tb,
                                children: [(0, a.jsx)("i", {
                                    className: E._o
                                }), (0, a.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: v.intl.format(v.t["LC+S+m"], {
                                        membersOnline: r.approximate_presence_count
                                    })
                                })]
                            }), null != r.approximate_member_count && (0, a.jsxs)("div", {
                                className: E.Tb,
                                children: [(0, a.jsx)("i", {
                                    className: E.jk
                                }), (0, a.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: v.intl.format(v.t.zRl6XR, {
                                        count: r.approximate_member_count
                                    })
                                })]
                            })]
                        }) : null]
                    })]
                }), (0, a.jsx)(c.Button, {
                    variant: "secondary",
                    text: s ? v.intl.string(v.t.cEnaWx) : v.intl.string(v.t.XpeFYr),
                    onClick: () => {
                        n(), t(g.Ws.JoinOfficialServer), d.h.dispatch({
                            type: "INVITE_MODAL_OPEN",
                            invite: r,
                            code: r.code,
                            context: p.BRT.APP
                        })
                    },
                    fullWidth: !0
                })]
            })]
        })]
    })
}