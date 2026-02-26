/** chunk id: 639714, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => A,
    o: () => _
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
    p = i(728528),
    v = i(272746);

function A(e) {
    let {
        detectedGame: t,
        trackClick: i,
        onInviteResolved: a,
        closeModal: A
    } = e, [_, N] = l.useState(), E = (0, c.bG)([x.A], () => _?.guild?.id != null && x.A.isMember(_?.guild?.id)), I = l.useMemo(() => t.websites?.find(e => {
        let {
            category: t
        } = e;
        return t === r.V.DISCORD
    }), [t.websites]);
    if (l.useEffect(() => {
            let e = async e => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (null != _ && _.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, m.A)(t);
                    !0 !== e.banned && (N(e.invite), null != e.invite && a?.(e.invite))
                }
            };
            null != I && e(I.url)
        }, [I, a, _]), null == _ || null == _.guild || !_.guild.features.includes(f.GuildFeatures.VERIFIED)) return null;
    let C = g.Ay.getGuildIconURL({
        id: _.guild.id,
        icon: _.guild.icon,
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
                src: C,
                alt: j.intl.formatToPlainString(j.t.xm6W9D, {
                    guildName: _.guild.name
                })
            }), (0, n.jsxs)("div", {
                className: v.U5,
                children: [(0, n.jsxs)("div", {
                    className: v.YS,
                    children: [(0, n.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        children: _.guild.name
                    }), (0, n.jsx)(u.A, {
                        guild: _.guild,
                        size: 16
                    })]
                }), null != _.approximate_member_count && (0, n.jsx)(o.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: j.intl.format(j.t.zRl6XR, {
                        count: _.approximate_member_count
                    })
                })]
            })]
        }), (0, n.jsx)(o.Button, {
            variant: "secondary",
            text: E ? j.intl.string(j.t.cEnaWx) : j.intl.string(j.t.XpeFYr),
            onClick: () => {
                A(), i(h.Ws.JoinOfficialServer), d.h.dispatch({
                    type: "INVITE_MODAL_OPEN",
                    invite: _,
                    code: _.code,
                    context: f.BRT.APP
                })
            },
            fullWidth: !0
        })]
    })
}

function _(e) {
    let {
        detectedGame: t,
        trackClick: i,
        onInviteResolved: a,
        closeModal: A
    } = e, [_, N] = l.useState(), E = l.useRef(null), I = l.useRef(a);
    l.useEffect(() => {
        I.current = a
    }, [a]);
    let C = (0, c.bG)([x.A], () => _?.guild?.id != null && x.A.isMember(_?.guild?.id)),
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
                    if (E.current?.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, m.A)(t);
                    !0 !== e.banned && (E.current = t, N(e.invite), null != e.invite && I.current?.(e.invite))
                }
            };
            null != S && e(S.url)
        }, [S]), null == _ || null == _.guild || !_.guild.features.includes(f.GuildFeatures.VERIFIED)) return null;
    let b = g.Ay.getGuildIconURL({
        id: _.guild.id,
        icon: _.guild.icon,
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
                src: b,
                alt: j.intl.formatToPlainString(j.t.xm6W9D, {
                    guildName: _.guild.name
                })
            }), (0, n.jsxs)("div", {
                className: v.U5,
                children: [(0, n.jsxs)("div", {
                    className: v.YS,
                    children: [(0, n.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        children: _.guild.name
                    }), (0, n.jsx)(u.A, {
                        guild: _.guild,
                        size: 16
                    })]
                }), null != _.approximate_member_count && (0, n.jsx)(o.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: j.intl.format(j.t.zRl6XR, {
                        count: _.approximate_member_count
                    })
                })]
            })]
        }), (0, n.jsx)(o.Button, {
            variant: "secondary",
            text: C ? j.intl.string(j.t.cEnaWx) : j.intl.string(j.t.XpeFYr),
            onClick: () => {
                A(), i(h.Ws.JoinOfficialServer), d.h.dispatch({
                    type: "INVITE_MODAL_OPEN",
                    invite: _,
                    code: _.code,
                    context: f.BRT.APP
                })
            },
            fullWidth: !0
        })]
    })
}