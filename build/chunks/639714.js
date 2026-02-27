/** chunk id: 639714, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => A,
    o: () => I
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
    v = i(851822),
    p = i(921380);

function A(e) {
    let {
        detectedGame: t,
        trackClick: i,
        onInviteResolved: a,
        closeModal: A
    } = e, [I, _] = l.useState(), N = (0, c.bG)([x.A], () => I?.guild?.id != null && x.A.isMember(I?.guild?.id)), E = l.useMemo(() => t.websites?.find(e => {
        let {
            category: t
        } = e;
        return t === r.V.DISCORD
    }), [t.websites]);
    if (l.useEffect(() => {
            let e = async e => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (null != I && I.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, m.A)(t);
                    !0 !== e.banned && (_(e.invite), null != e.invite && a?.(e.invite))
                }
            };
            null != E && e(E.url)
        }, [E, a, I]), null == I || null == I.guild || !I.guild.features.includes(f.GuildFeatures.VERIFIED)) return null;
    let S = g.Ay.getGuildIconURL({
        id: I.guild.id,
        icon: I.guild.icon,
        size: 32
    });
    return (0, n.jsxs)("div", {
        className: v.fi,
        children: [(0, n.jsx)(o.Heading, {
            className: v.bV,
            variant: "text-xs/semibold",
            color: "text-default",
            children: j.intl.string(j.t.kBDZSL)
        }), (0, n.jsxs)("div", {
            className: s()(v.nM, v.mX),
            children: [(0, n.jsx)("img", {
                className: p.$f,
                src: S,
                alt: j.intl.formatToPlainString(j.t.xm6W9D, {
                    guildName: I.guild.name
                })
            }), (0, n.jsxs)("div", {
                className: p.U5,
                children: [(0, n.jsxs)("div", {
                    className: p.YS,
                    children: [(0, n.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        children: I.guild.name
                    }), (0, n.jsx)(u.A, {
                        guild: I.guild,
                        size: 16
                    })]
                }), null != I.approximate_member_count && (0, n.jsx)(o.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: j.intl.format(j.t.zRl6XR, {
                        count: I.approximate_member_count
                    })
                })]
            })]
        }), (0, n.jsx)(o.Button, {
            variant: "secondary",
            text: N ? j.intl.string(j.t.cEnaWx) : j.intl.string(j.t.XpeFYr),
            onClick: () => {
                A(), i(h.Ws.JoinOfficialServer), d.h.dispatch({
                    type: "INVITE_MODAL_OPEN",
                    invite: I,
                    code: I.code,
                    context: f.BRT.APP
                })
            },
            fullWidth: !0
        })]
    })
}

function I(e) {
    let {
        detectedGame: t,
        trackClick: i,
        onInviteResolved: a,
        closeModal: A
    } = e, [I, _] = l.useState(), N = l.useRef(null), E = l.useRef(a);
    l.useEffect(() => {
        E.current = a
    }, [a]);
    let S = (0, c.bG)([x.A], () => I?.guild?.id != null && x.A.isMember(I?.guild?.id)),
        T = l.useMemo(() => t.websites?.find(e => {
            let {
                category: t
            } = e;
            return t === r.V.DISCORD
        }), [t.websites]);
    if (l.useEffect(() => {
            let e = async e => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (N.current?.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, m.A)(t);
                    !0 !== e.banned && (N.current = t, _(e.invite), null != e.invite && E.current?.(e.invite))
                }
            };
            null != T && e(T.url)
        }, [T]), null == I || null == I.guild || !I.guild.features.includes(f.GuildFeatures.VERIFIED)) return null;
    let C = g.Ay.getGuildIconURL({
        id: I.guild.id,
        icon: I.guild.icon,
        size: 32
    });
    return (0, n.jsxs)("div", {
        className: v.fi,
        children: [(0, n.jsx)(o.Heading, {
            className: v.bV,
            variant: "text-xs/semibold",
            color: "text-default",
            children: j.intl.string(j.t.kBDZSL)
        }), (0, n.jsxs)("div", {
            className: s()(v.nM, v.mX),
            children: [(0, n.jsx)("img", {
                className: p.$f,
                src: C,
                alt: j.intl.formatToPlainString(j.t.xm6W9D, {
                    guildName: I.guild.name
                })
            }), (0, n.jsxs)("div", {
                className: p.U5,
                children: [(0, n.jsxs)("div", {
                    className: p.YS,
                    children: [(0, n.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        children: I.guild.name
                    }), (0, n.jsx)(u.A, {
                        guild: I.guild,
                        size: 16
                    })]
                }), null != I.approximate_member_count && (0, n.jsx)(o.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: j.intl.format(j.t.zRl6XR, {
                        count: I.approximate_member_count
                    })
                })]
            })]
        }), (0, n.jsx)(o.Button, {
            variant: "secondary",
            text: S ? j.intl.string(j.t.cEnaWx) : j.intl.string(j.t.XpeFYr),
            onClick: () => {
                A(), i(h.Ws.JoinOfficialServer), d.h.dispatch({
                    type: "INVITE_MODAL_OPEN",
                    invite: I,
                    code: I.code,
                    context: f.BRT.APP
                })
            },
            fullWidth: !0
        })]
    })
}