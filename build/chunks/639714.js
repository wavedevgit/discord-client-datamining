/** chunk id: 639714, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v,
    o: () => E
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(505779),
    c = n(311907),
    o = n(397927),
    d = n(73153),
    u = n(714991),
    m = n(970163),
    x = n(184989),
    g = n(486020),
    h = n(409626),
    f = n(652215),
    j = n(985018),
    p = n(851822),
    I = n(921380);

function v(e) {
    let {
        detectedGame: t,
        trackClick: n,
        onInviteResolved: a,
        closeModal: v
    } = e, [E, A] = l.useState(), _ = (0, c.bG)([x.A], () => E?.guild?.id != null && x.A.isMember(E?.guild?.id)), N = l.useMemo(() => t.websites?.find(e => {
        let {
            category: t
        } = e;
        return t === r.V.DISCORD
    }), [t.websites]);
    if (l.useEffect(() => {
            let e = async e => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (null != E && E.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, m.A)(t);
                    !0 !== e.banned && (A(e.invite), null != e.invite && a?.(e.invite))
                }
            };
            null != N && e(N.url)
        }, [N, a, E]), null == E || null == E.guild || !E.guild.features.includes(f.GuildFeatures.VERIFIED)) return null;
    let T = g.Ay.getGuildIconURL({
        id: E.guild.id,
        icon: E.guild.icon,
        size: 32
    });
    return (0, i.jsxs)("div", {
        className: p.fi,
        children: [(0, i.jsx)(o.Heading, {
            className: p.bV,
            variant: "text-xs/semibold",
            color: "text-default",
            children: j.intl.string(j.t.kBDZSL)
        }), (0, i.jsxs)("div", {
            className: s()(p.nM, p.mX),
            children: [(0, i.jsx)("img", {
                className: I.$f,
                src: T,
                alt: j.intl.formatToPlainString(j.t.xm6W9D, {
                    guildName: E.guild.name
                })
            }), (0, i.jsxs)("div", {
                className: I.U5,
                children: [(0, i.jsxs)("div", {
                    className: I.YS,
                    children: [(0, i.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        children: E.guild.name
                    }), (0, i.jsx)(u.A, {
                        guild: E.guild,
                        size: 16
                    })]
                }), null != E.approximate_member_count && (0, i.jsx)(o.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: j.intl.format(j.t.zRl6XR, {
                        count: E.approximate_member_count
                    })
                })]
            })]
        }), (0, i.jsx)(o.Button, {
            variant: "secondary",
            text: _ ? j.intl.string(j.t.cEnaWx) : j.intl.string(j.t.XpeFYr),
            onClick: () => {
                v(), n(h.Ws.JoinOfficialServer), d.h.dispatch({
                    type: "INVITE_MODAL_OPEN",
                    invite: E,
                    code: E.code,
                    context: f.BRT.APP
                })
            },
            fullWidth: !0
        })]
    })
}

function E(e) {
    let {
        detectedGame: t,
        trackClick: n,
        onInviteResolved: a,
        closeModal: v
    } = e, [E, A] = l.useState(), _ = l.useRef(null), N = l.useRef(a);
    l.useEffect(() => {
        N.current = a
    }, [a]);
    let T = (0, c.bG)([x.A], () => E?.guild?.id != null && x.A.isMember(E?.guild?.id)),
        S = l.useMemo(() => t.websites?.find(e => {
            let {
                category: t
            } = e;
            return t === r.V.DISCORD
        }), [t.websites]);
    if (l.useEffect(() => {
            let e = async e => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (_.current?.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, m.A)(t);
                    !0 !== e.banned && (_.current = t, A(e.invite), null != e.invite && N.current?.(e.invite))
                }
            };
            null != S && e(S.url)
        }, [S]), null == E || null == E.guild || !E.guild.features.includes(f.GuildFeatures.VERIFIED)) return null;
    let C = g.Ay.getGuildIconURL({
        id: E.guild.id,
        icon: E.guild.icon,
        size: 32
    });
    return (0, i.jsxs)("div", {
        className: p.fi,
        children: [(0, i.jsx)(o.Heading, {
            className: p.bV,
            variant: "text-xs/semibold",
            color: "text-default",
            children: j.intl.string(j.t.kBDZSL)
        }), (0, i.jsxs)("div", {
            className: s()(p.nM, p.mX),
            children: [(0, i.jsx)("img", {
                className: I.$f,
                src: C,
                alt: j.intl.formatToPlainString(j.t.xm6W9D, {
                    guildName: E.guild.name
                })
            }), (0, i.jsxs)("div", {
                className: I.U5,
                children: [(0, i.jsxs)("div", {
                    className: I.YS,
                    children: [(0, i.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        children: E.guild.name
                    }), (0, i.jsx)(u.A, {
                        guild: E.guild,
                        size: 16
                    })]
                }), null != E.approximate_member_count && (0, i.jsx)(o.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: j.intl.format(j.t.zRl6XR, {
                        count: E.approximate_member_count
                    })
                })]
            })]
        }), (0, i.jsx)(o.Button, {
            variant: "secondary",
            text: T ? j.intl.string(j.t.cEnaWx) : j.intl.string(j.t.XpeFYr),
            onClick: () => {
                v(), n(h.Ws.JoinOfficialServer), d.h.dispatch({
                    type: "INVITE_MODAL_OPEN",
                    invite: E,
                    code: E.code,
                    context: f.BRT.APP
                })
            },
            fullWidth: !0
        })]
    })
}