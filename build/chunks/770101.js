/** chunk id: 770101 params = (module,exports,require) **/
n.d(e, {
    default: () => C
}), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(91871),
    a = n.n(s),
    r = n(158954),
    o = n(311907),
    c = n(397927),
    d = n(398590),
    u = n(263063),
    m = n(976860),
    x = n(71393),
    h = n(711014),
    g = n(473145),
    p = n(652215),
    f = n(985018),
    b = n(197161);

function j(t) {
    let {
        setQuery: e,
        query: n
    } = t;
    return (0, l.jsx)(c.IWV, {
        placeholder: f.intl.string(f.t.vf3ZTa),
        "aria-label": f.intl.string(f.t.vf3ZTa),
        query: n,
        onChange: e,
        onClear: () => e("")
    })
}

function v(t) {
    let {
        isTransfer: e = !1,
        selectedSlotGuilds: n,
        onClose: i,
        onSelectGuild: s,
        query: r
    } = t, j = (0, o.bG)([h.Ay], () => h.Ay.getFlattenedGuildIds()), v = (0, o.yK)([x.A], () => j.reduce((t, e) => {
        let l = x.A.getGuild(e);
        return null == l || null != n && n.some(t => t.id === e) || (r.length <= 0 || a()(r.toLowerCase(), l?.name.toLowerCase())) && t.push(l), t
    }, []));

    function C() {
        i(), (0, d.jH)(), (0, m.pX)(p.BVt.GUILD_DISCOVERY)
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [0 === v.length && (0, l.jsx)("div", {
            className: b.Kl,
            children: (0, l.jsx)(c.Text, {
                variant: "text-md/normal",
                children: 0 === j.length ? f.intl.format(f.t["E3tB6+"], {
                    publicGuildDirectoryHook: (t, e) => (0, l.jsx)(c.DUT, {
                        onClick: C,
                        tag: "a",
                        children: t
                    }, e)
                }) : f.intl.string(f.t.w3GLl9)
            })
        }), v.map(t => (0, l.jsxs)(c.DUT, {
            className: b.Ss,
            onClick: () => {
                s(t)
            },
            children: [(0, l.jsx)(u.Ay, {
                className: b.Bq,
                guild: t,
                size: u.Ay.Sizes.SMALL,
                active: !0
            }), (0, l.jsxs)("div", {
                className: b.Vi,
                children: [(0, l.jsx)(c.Text, {
                    className: b.tD,
                    variant: "text-md/normal",
                    children: t.name
                }), (0, l.jsx)(c.Text, {
                    className: b.w2,
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: (0, g.gb)(t.premiumTier)
                })]
            }), (0, l.jsx)(c.Text, {
                className: b.qW,
                color: "always-white",
                variant: "text-sm/medium",
                children: e ? f.intl.string(f.t.dUgaF8) : f.intl.string(f.t.Uj0md3)
            })]
        }, t.id))]
    })
}

function C(t) {
    let {
        onClose: e,
        onSelectGuild: n,
        transitionState: s,
        isTransfer: a = !1,
        selectedSlotGuilds: o
    } = t, [c, d] = i.useState(""), u = async () => {
        await e()
    }, m = a ? f.intl.string(f.t.IB13DV) : f.intl.string(f.t.cQYceV);
    return (0, l.jsx)(r.Modal, {
        transitionState: s,
        onClose: u,
        size: "md",
        title: m,
        input: (0, l.jsx)(j, {
            query: c,
            setQuery: d
        }),
        actions: [],
        children: (0, l.jsx)(v, {
            onClose: e,
            onSelectGuild: n,
            query: c,
            isTransfer: a,
            selectedSlotGuilds: o
        })
    })
}