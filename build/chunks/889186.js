/** chunk id: 889186, original params: e,n,t (module,exports,require) **/
t.d(n, {
    default: () => _
});
var r = t(627968),
    i = t(64700),
    a = t(478437),
    l = t(158954),
    d = t(311907),
    c = t(397927),
    s = t(713654),
    u = t(687021),
    o = t(769765),
    f = t(711014),
    h = t(543465),
    m = t(422258),
    g = t(93055),
    p = t(231150),
    v = t(985018),
    x = t(233492);

function _(e) {
    let {
        transitionState: n,
        onClose: t,
        parentId: a
    } = e, s = (0, d.bG)([f.Ay], () => f.Ay.getFlattenedGuildIds()[0]), [o, h] = i.useState(s), [m, g] = i.useState(!1);
    return (0, r.jsx)(l.Modal, {
        title: v.intl.string(v.t["4wcdE/"]),
        actions: [],
        transitionState: n,
        onClose: t,
        input: (0, r.jsx)(u.v, {
            guildId: o,
            onChange: function(e) {
                null != e && h(e.id)
            }
        }),
        actionBarInput: (0, r.jsx)(c.dOG, {
            checked: m,
            onChange: e => g(e),
            label: v.intl.string(v.t.UwOLJO)
        }),
        children: (0, r.jsx)(A, {
            guildId: o,
            hideMutedChannels: m,
            parentId: a
        })
    })
}

function A(e) {
    let {
        guildId: n,
        hideMutedChannels: t,
        parentId: l
    } = e, c = (0, d.bG)([o.A], () => o.A.getCategories(n)), s = (0, p.A)(c), u = i.useRef(null);
    return i.useEffect(() => {
        u?.current?.scroll({
            top: 0
        })
    }, [n]), (0, r.jsx)("div", {
        ref: u,
        children: s.map(e => e.type === a.r.GUILD_CATEGORY ? (0, r.jsx)(b, {
            name: e.name
        }, e.id) : (0, r.jsx)(j, {
            channel: e,
            hideMutedChannels: t,
            parentId: l
        }, e.id))
    })
}

function b(e) {
    let {
        name: n
    } = e;
    return (0, r.jsx)(c.Text, {
        className: x.Fv,
        variant: "eyebrow",
        color: "interactive-text-default",
        children: n
    })
}

function j(e) {
    let {
        channel: n,
        hideMutedChannels: t,
        parentId: i
    } = e, a = (0, g.Af)(n.id);
    if ((0, d.bG)([h.Ay], () => h.Ay.isChannelMuted(n.guild_id, n.id)) && t) return null;
    let l = (0, s.gU)(n);
    return (0, r.jsxs)("div", {
        className: x.WG,
        children: [(0, r.jsxs)("div", {
            className: x.HA,
            children: [null != l && (0, r.jsx)("div", {
                className: x.uM,
                children: (0, r.jsx)(l, {
                    className: x.p,
                    size: "custom",
                    color: "currentColor",
                    height: 20,
                    width: 20
                })
            }), (0, r.jsx)(c.Text, {
                variant: "text-md/medium",
                color: "interactive-text-default",
                children: n.name
            })]
        }), null != a ? (0, r.jsx)(k, {
            channelId: n.id
        }) : (0, r.jsx)(C, {
            channelId: n.id,
            parentId: i
        })]
    }, n.id)
}

function C(e) {
    let {
        channelId: n,
        parentId: t
    } = e;
    return (0, r.jsx)(c.Button, {
        variant: "primary",
        size: "sm",
        text: v.intl.string(v.t.OYkgVk),
        onClick: function() {
            (0, m.Jz)(n, t)
        }
    })
}

function k(e) {
    let {
        channelId: n
    } = e;
    return (0, r.jsx)(c.Button, {
        variant: "secondary",
        size: "sm",
        text: v.intl.string(v.t.N86XcP),
        onClick: function() {
            (0, m.i_)(n)
        }
    })
}