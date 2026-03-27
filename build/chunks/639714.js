/** chunk id: 639714 params = (module,exports,require) **/
n.d(t, {
    A: () => C,
    o: () => I
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
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
    _ = n(305080),
    p = n(652215),
    v = n(985018),
    A = n(282063),
    j = n(682209),
    E = n(862809);

function C(e) {
    let {
        detectedGame: t,
        trackAction: n,
        onInviteResolved: l,
        closeModal: f
    } = e, [_, E] = i.useState(), C = (0, c.bG)([x.A], () => _?.guild?.id != null && x.A.isMember(_?.guild?.id)), I = i.useMemo(() => t.websites?.find(e => {
        let {
            category: t
        } = e;
        return t === s.V.DISCORD
    }), [t.websites]);
    i.useEffect(() => {
        let e = async e => {
            let t = e.split("/").pop();
            if (null != t) {
                if (null != _ && _.code.toLowerCase() === t.toLowerCase()) return;
                let e = await (0, m.A)(t);
                !0 !== e.banned && (E(e.invite), null != e.invite && l?.(e.invite))
            }
        };
        null != I && e(I.url)
    }, [I, l, _]);
    let N = i.useCallback(() => {
        null != _ && (n(g.Ws.JoinOfficialServer), f(), d.h.dispatch({
            type: "INVITE_MODAL_OPEN",
            invite: _,
            code: _.code,
            context: p.BRT.APP
        }))
    }, [_, n, f]);
    if (null == _ || null == _.guild || !_.guild.features.includes(p.GuildFeatures.VERIFIED)) return null;
    let b = h.Ay.getGuildIconURL({
        id: _.guild.id,
        icon: _.guild.icon,
        size: 32
    });
    return (0, a.jsxs)("div", {
        className: A.fi,
        children: [(0, a.jsx)(o.Heading, {
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
                    children: [(0, a.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        children: _.guild.name
                    }), (0, a.jsx)(u.A, {
                        guild: _.guild,
                        size: 16
                    })]
                }), null != _.approximate_member_count && (0, a.jsx)(o.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: v.intl.format(v.t.zRl6XR, {
                        count: _.approximate_member_count
                    })
                })]
            })]
        }), (0, a.jsx)(o.Button, {
            variant: "secondary",
            text: C ? v.intl.string(v.t.cEnaWx) : v.intl.string(v.t.XpeFYr),
            onClick: N,
            fullWidth: !0
        })]
    })
}

function I(e) {
    let {
        trackAction: t,
        closeModal: n
    } = e, {
        canStartAuthorization: l,
        hasAlreadyLinked: r,
        officialInvite: s,
        isMember: c
    } = (0, _.c)(), m = i.useCallback(() => {
        null != s && (t(g.Ws.JoinOfficialServer), n(), d.h.dispatch({
            type: "INVITE_MODAL_OPEN",
            invite: s,
            code: s.code,
            context: p.BRT.APP
        }))
    }, [s, t, n]);
    if (null == s || null == s.guild || !s.guild.features.includes(p.GuildFeatures.VERIFIED)) return null;
    let x = h.Ay.getGuildIconURL({
            id: s.guild.id,
            icon: s.guild.icon,
            size: 48
        }),
        A = h.Ay.getGuildSplashURL({
            id: s.guild.id,
            splash: s.guild.splash
        }),
        j = l && !r || null == A,
        C = (0, a.jsx)("img", {
            className: E.$f,
            src: x,
            alt: v.intl.formatToPlainString(v.t.xm6W9D, {
                guildName: s.guild.name
            })
        }),
        I = j ? E.To : E.Kt,
        N = j ? E.yj : E.FS;
    return (0, a.jsxs)("div", {
        className: E.uW,
        children: [(0, a.jsx)(o.Heading, {
            className: E.Gf,
            variant: "heading-sm/semibold",
            color: "text-strong",
            children: v.intl.string(v.t["U2N+ci"])
        }), (0, a.jsxs)("div", {
            className: E.kL,
            children: [!j && null != A && (0, a.jsx)("img", {
                className: E.ll,
                src: A,
                alt: ""
            }), (0, a.jsxs)("div", {
                className: E.hQ,
                children: [(0, a.jsxs)("div", {
                    className: I,
                    children: [j ? C : (0, a.jsx)("div", {
                        className: E._C,
                        children: (0, a.jsx)("div", {
                            className: E.kW,
                            children: C
                        })
                    }), (0, a.jsxs)("div", {
                        className: N,
                        children: [(0, a.jsxs)("div", {
                            className: E.YS,
                            children: [(0, a.jsx)(u.A, {
                                guild: s.guild,
                                size: 16
                            }), (0, a.jsx)(o.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                children: s.guild.name
                            })]
                        }), !(0, f.uJ)(s.guild?.description) && (0, a.jsx)(o.Text, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: s.guild?.description
                        }), null != s.approximate_member_count || null != s.approximate_presence_count ? (0, a.jsxs)("div", {
                            className: E.iR,
                            children: [null != s.approximate_presence_count && (0, a.jsxs)("div", {
                                className: E.Tb,
                                children: [(0, a.jsx)("i", {
                                    className: E._o
                                }), (0, a.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: v.intl.format(v.t["LC+S+m"], {
                                        membersOnline: s.approximate_presence_count
                                    })
                                })]
                            }), null != s.approximate_member_count && (0, a.jsxs)("div", {
                                className: E.Tb,
                                children: [(0, a.jsx)("i", {
                                    className: E.jk
                                }), (0, a.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: v.intl.format(v.t.zRl6XR, {
                                        count: s.approximate_member_count
                                    })
                                })]
                            })]
                        }) : null]
                    })]
                }), (0, a.jsx)(o.Button, {
                    variant: "secondary",
                    text: c ? v.intl.string(v.t.cEnaWx) : v.intl.string(v.t.XpeFYr),
                    onClick: m,
                    fullWidth: !0
                })]
            })]
        })]
    })
}