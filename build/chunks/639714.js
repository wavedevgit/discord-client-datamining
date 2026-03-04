/** chunk id: 639714, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => A,
    o: () => E
});
var n = i(627968),
    l = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(505779),
    c = i(311907),
    o = i(397927),
    d = i(73153),
    u = i(714991),
    m = i(970163),
    x = i(184989),
    g = i(486020),
    h = i(409626),
    f = i(652215),
    j = i(985018),
    p = i(851822),
    v = i(921380);

function A(e) {
    let {
        detectedGame: t,
        trackClick: i,
        onInviteResolved: a,
        closeModal: A
    } = e, [E, I] = l.useState(), _ = (0, c.bG)([x.A], () => E?.guild?.id != null && x.A.isMember(E?.guild?.id)), N = l.useMemo(() => t.websites?.find(e => {
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
                    !0 !== e.banned && (I(e.invite), null != e.invite && a?.(e.invite))
                }
            };
            null != N && e(N.url)
        }, [N, a, E]), null == E || null == E.guild || !E.guild.features.includes(f.GuildFeatures.VERIFIED)) return null;
    let T = g.Ay.getGuildIconURL({
        id: E.guild.id,
        icon: E.guild.icon,
        size: 32
    });
    return (0, n.jsxs)("div", {
        className: p.fi,
        children: [(0, n.jsx)(o.Heading, {
            className: p.bV,
            variant: "text-xs/semibold",
            color: "text-default",
            children: j.intl.string(j.t.kBDZSL)
        }), (0, n.jsxs)("div", {
            className: s()(p.nM, p.mX),
            children: [(0, n.jsx)("img", {
                className: v.$f,
                src: T,
                alt: j.intl.formatToPlainString(j.t.xm6W9D, {
                    guildName: E.guild.name
                })
            }), (0, n.jsxs)("div", {
                className: v.U5,
                children: [(0, n.jsxs)("div", {
                    className: v.YS,
                    children: [(0, n.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        children: E.guild.name
                    }), (0, n.jsx)(u.A, {
                        guild: E.guild,
                        size: 16
                    })]
                }), null != E.approximate_member_count && (0, n.jsx)(o.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: j.intl.format(j.t.zRl6XR, {
                        count: E.approximate_member_count
                    })
                })]
            })]
        }), (0, n.jsx)(o.Button, {
            variant: "secondary",
            text: _ ? j.intl.string(j.t.cEnaWx) : j.intl.string(j.t.XpeFYr),
            onClick: () => {
                A(), i(h.Ws.JoinOfficialServer), d.h.dispatch({
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
        trackClick: i,
        onInviteResolved: a,
        closeModal: A
    } = e, [E, I] = l.useState(), _ = l.useRef(null), N = l.useRef(a);
    l.useEffect(() => {
        N.current = a
    }, [a]);
    let T = (0, c.bG)([x.A], () => E?.guild?.id != null && x.A.isMember(E?.guild?.id)),
        C = l.useMemo(() => t.websites?.find(e => {
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
                    !0 !== e.banned && (_.current = t, I(e.invite), null != e.invite && N.current?.(e.invite))
                }
            };
            null != C && e(C.url)
        }, [C]), null == E || null == E.guild || !E.guild.features.includes(f.GuildFeatures.VERIFIED)) return null;
    let S = g.Ay.getGuildIconURL({
        id: E.guild.id,
        icon: E.guild.icon,
        size: 32
    });
    return (0, n.jsxs)("div", {
        className: p.fi,
        children: [(0, n.jsx)(o.Heading, {
            className: p.bV,
            variant: "text-xs/semibold",
            color: "text-default",
            children: j.intl.string(j.t.kBDZSL)
        }), (0, n.jsxs)("div", {
            className: s()(p.nM, p.mX),
            children: [(0, n.jsx)("img", {
                className: v.$f,
                src: S,
                alt: j.intl.formatToPlainString(j.t.xm6W9D, {
                    guildName: E.guild.name
                })
            }), (0, n.jsxs)("div", {
                className: v.U5,
                children: [(0, n.jsxs)("div", {
                    className: v.YS,
                    children: [(0, n.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        children: E.guild.name
                    }), (0, n.jsx)(u.A, {
                        guild: E.guild,
                        size: 16
                    })]
                }), null != E.approximate_member_count && (0, n.jsx)(o.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: j.intl.format(j.t.zRl6XR, {
                        count: E.approximate_member_count
                    })
                })]
            })]
        }), (0, n.jsx)(o.Button, {
            variant: "secondary",
            text: T ? j.intl.string(j.t.cEnaWx) : j.intl.string(j.t.XpeFYr),
            onClick: () => {
                A(), i(h.Ws.JoinOfficialServer), d.h.dispatch({
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