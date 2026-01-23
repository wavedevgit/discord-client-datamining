/** Chunk was on 82220 **/
/** chunk id: 889186, original params: e,n,t (module,exports,require) **/
t.d(n, {
    default: () => m
}), t(896048);
var i = t(627968),
    a = t(64700),
    l = t(478437),
    r = t(158954),
    d = t(311907),
    s = t(397927),
    u = t(713654),
    c = t(687021),
    o = t(769765),
    h = t(711014),
    f = t(543465),
    v = t(422258),
    A = t(93055),
    p = t(231150),
    x = t(985018),
    g = t(233492);

function m(e) {
    let {
        transitionState: n,
        onClose: t,
        parentId: l
    } = e, u = (0, d.bG)([h.Ay], () => h.Ay.getFlattenedGuildIds()[0]), [o, f] = a.useState(u), [v, A] = a.useState(!1);
    return (0, i.jsx)(r.Modal, {
        title: x.intl.string(x.t["4wcdE/"]),
        actions: [],
        transitionState: n,
        onClose: t,
        input: (0, i.jsx)(c.v, {
            guildId: o,
            onChange: function(e) {
                null != e && f(e.id)
            }
        }),
        actionBarInput: (0, i.jsx)(s.dOG, {
            checked: v,
            onChange: e => A(e),
            label: x.intl.string(x.t.UwOLJO)
        }),
        children: (0, i.jsx)(C, {
            guildId: o,
            hideMutedChannels: v,
            parentId: l
        })
    })
}

function C(e) {
    let {
        guildId: n,
        hideMutedChannels: t,
        parentId: r
    } = e, s = (0, d.bG)([o.A], () => o.A.getCategories(n)), u = (0, p.A)(s), c = a.useRef(null);
    return a.useEffect(() => {
        var e;
        null == c || null == (e = c.current) || e.scroll({
            top: 0
        })
    }, [n]), (0, i.jsx)("div", {
        ref: c,
        children: u.map(e => e.type === l.r.GUILD_CATEGORY ? (0, i.jsx)(b, {
            name: e.name
        }, e.id) : (0, i.jsx)(j, {
            channel: e,
            hideMutedChannels: t,
            parentId: r
        }, e.id))
    })
}

function b(e) {
    let {
        name: n
    } = e;
    return (0, i.jsx)(s.Text, {
        className: g.Fv,
        variant: "eyebrow",
        color: "interactive-text-default",
        children: n
    })
}

function j(e) {
    let {
        channel: n,
        hideMutedChannels: t,
        parentId: a
    } = e, l = (0, A.Af)(n.id);
    if ((0, d.bG)([f.Ay], () => f.Ay.isChannelMuted(n.guild_id, n.id)) && t) return null;
    let r = (0, u.gU)(n);
    return (0, i.jsxs)("div", {
        className: g.WG,
        children: [(0, i.jsxs)("div", {
            className: g.HA,
            children: [null != r && (0, i.jsx)("div", {
                className: g.uM,
                children: (0, i.jsx)(r, {
                    className: g.p,
                    size: "custom",
                    color: "currentColor",
                    height: 20,
                    width: 20
                })
            }), (0, i.jsx)(s.Text, {
                variant: "text-md/medium",
                color: "interactive-text-default",
                children: n.name
            })]
        }), null != l ? (0, i.jsx)(G, {
            channelId: n.id
        }) : (0, i.jsx)(_, {
            channelId: n.id,
            parentId: a
        })]
    }, n.id)
}

function _(e) {
    let {
        channelId: n,
        parentId: t
    } = e;
    return (0, i.jsx)(s.Button, {
        variant: "primary",
        size: "sm",
        text: x.intl.string(x.t.OYkgVk),
        onClick: function() {
            (0, v.Jz)(n, t)
        }
    })
}

function G(e) {
    let {
        channelId: n
    } = e;
    return (0, i.jsx)(s.Button, {
        variant: "secondary",
        size: "sm",
        text: x.intl.string(x.t.N86XcP),
        onClick: function() {
            (0, v.i_)(n)
        }
    })
}