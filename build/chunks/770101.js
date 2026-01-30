/** chunk id: 770101, original params: e,t,l (module,exports,require) **/
l.d(t, {
    default: () => y
}), l(321073), l(896048);
var n = l(627968),
    r = l(64700),
    i = l(91871),
    s = l.n(i),
    a = l(158954),
    o = l(311907),
    u = l(397927),
    c = l(398590),
    d = l(263063),
    m = l(976860),
    x = l(71393),
    g = l(711014),
    h = l(473145),
    j = l(652215),
    p = l(985018),
    C = l(197161);

function f(e) {
    let {
        setQuery: t,
        query: l
    } = e;
    return (0, n.jsx)(u.IWV, {
        placeholder: p.intl.string(p.t.vf3ZTa),
        "aria-label": p.intl.string(p.t.vf3ZTa),
        query: l,
        onChange: t,
        onClear: () => t("")
    })
}

function v(e) {
    let {
        isTransfer: t = !1,
        selectedSlotGuilds: l,
        onClose: r,
        onSelectGuild: i,
        query: a
    } = e, f = (0, o.bG)([g.Ay], () => g.Ay.getFlattenedGuildIds()), v = (0, o.yK)([x.A], () => f.reduce((e, t) => {
        let n = x.A.getGuild(t);
        return null == n || null != l && l.some(e => e.id === t) || (a.length <= 0 || s()(a.toLowerCase(), null == n ? void 0 : n.name.toLowerCase())) && e.push(n), e
    }, []));

    function y() {
        r(), (0, c.jH)(), (0, m.pX)(j.BVt.GUILD_DISCOVERY)
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [0 === v.length && (0, n.jsx)("div", {
            className: C.Kl,
            children: (0, n.jsx)(u.Text, {
                variant: "text-md/normal",
                children: 0 === f.length ? p.intl.format(p.t["E3tB6+"], {
                    publicGuildDirectoryHook: (e, t) => (0, n.jsx)(u.DUT, {
                        onClick: y,
                        tag: "a",
                        children: e
                    }, t)
                }) : p.intl.string(p.t.w3GLl9)
            })
        }), v.map(e => (0, n.jsxs)(u.DUT, {
            className: C.Ss,
            onClick: () => {
                i(e)
            },
            children: [(0, n.jsx)(d.A, {
                className: C.Bq,
                guild: e,
                size: d.A.Sizes.SMALL
            }), (0, n.jsxs)("div", {
                className: C.Vi,
                children: [(0, n.jsx)(u.Text, {
                    className: C.tD,
                    variant: "text-md/normal",
                    children: e.name
                }), (0, n.jsx)(u.Text, {
                    className: C.w2,
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: (0, h.gb)(e.premiumTier)
                })]
            }), (0, n.jsx)(u.Text, {
                className: C.qW,
                color: "always-white",
                variant: "text-sm/medium",
                children: t ? p.intl.string(p.t.dUgaF8) : p.intl.string(p.t.Uj0md3)
            })]
        }, e.id))]
    })
}

function y(e) {
    let {
        onClose: t,
        onSelectGuild: l,
        transitionState: i,
        isTransfer: s = !1,
        selectedSlotGuilds: o
    } = e, [u, c] = r.useState(""), d = async () => {
        await t()
    }, m = s ? p.intl.string(p.t.IB13DV) : p.intl.string(p.t.cQYceV);
    return (0, n.jsx)(a.Modal, {
        transitionState: i,
        onClose: d,
        size: "md",
        title: m,
        input: (0, n.jsx)(f, {
            query: u,
            setQuery: c
        }),
        actions: [],
        children: (0, n.jsx)(v, {
            onClose: t,
            onSelectGuild: l,
            query: u,
            isTransfer: s,
            selectedSlotGuilds: o
        })
    })
}