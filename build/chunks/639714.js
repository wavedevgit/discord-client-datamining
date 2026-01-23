/** Chunk was on 13530 **/
/** chunk id: 639714, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048), n(747238);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(798236),
    o = n(311907),
    c = n(397927),
    u = n(73153),
    d = n(714991),
    m = n(970163),
    f = n(184989),
    g = n(486020),
    x = n(409626),
    p = n(652215),
    j = n(985018),
    h = n(851822),
    v = n(921380);

function b(e) {
    let {
        detectedGame: t,
        trackClick: n,
        onInviteResolved: i,
        closeModal: b
    } = e, [y, O] = r.useState(), A = (0, o.bG)([f.A], () => {
        var e, t;
        return (null == y || null == (e = y.guild) ? void 0 : e.id) != null && f.A.isMember(null == y || null == (t = y.guild) ? void 0 : t.id)
    }), _ = r.useMemo(() => {
        var e;
        return null == (e = t.websites) ? void 0 : e.find(e => {
            let {
                category: t
            } = e;
            return t === s.w.DISCORD
        })
    }, [t.websites]);
    if (r.useEffect(() => {
            let e = async e => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (null != y && y.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, m.A)(t);
                    !0 !== e.banned && (O(e.invite), null != e.invite && (null == i || i(e.invite)))
                }
            };
            null != _ && e(_.url)
        }, [_, i, y]), null == y || null == y.guild || !y.guild.features.includes(p.GuildFeatures.VERIFIED)) return null;
    let I = g.Ay.getGuildIconURL({
        id: y.guild.id,
        icon: y.guild.icon,
        size: 32
    });
    return (0, l.jsxs)("div", {
        className: h.fi,
        children: [(0, l.jsx)(c.Heading, {
            className: h.bV,
            variant: "text-xs/semibold",
            color: "text-default",
            children: j.intl.string(j.t.kBDZSL)
        }), (0, l.jsxs)("div", {
            className: a()(h.nM, h.mX),
            children: [(0, l.jsx)("img", {
                className: v.$f,
                src: I,
                alt: j.intl.formatToPlainString(j.t.xm6W9D, {
                    guildName: y.guild.name
                })
            }), (0, l.jsxs)("div", {
                className: v.U5,
                children: [(0, l.jsxs)("div", {
                    className: v.YS,
                    children: [(0, l.jsx)(c.Text, {
                        variant: "text-sm/semibold",
                        children: y.guild.name
                    }), (0, l.jsx)(d.A, {
                        guild: y.guild,
                        size: 16
                    })]
                }), null != y.approximate_member_count && (0, l.jsx)(c.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: j.intl.format(j.t.zRl6XR, {
                        count: y.approximate_member_count
                    })
                })]
            })]
        }), (0, l.jsx)(c.Button, {
            variant: "secondary",
            text: A ? j.intl.string(j.t.cEnaWx) : j.intl.string(j.t.XpeFYr),
            onClick: () => {
                b(), n(x.Ws.JoinOfficialServer), u.h.dispatch({
                    type: "INVITE_MODAL_OPEN",
                    invite: y,
                    code: y.code,
                    context: p.BRT.APP
                })
            },
            fullWidth: !0
        })]
    })
}