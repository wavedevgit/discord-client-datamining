/** chunk id: 782505 params = (module,exports,require) **/
n.d(t, {
    IA: () => v,
    jB: () => b,
    qv: () => E,
    zf: () => S
});
var i = n(627968),
    a = n(64700),
    l = n(735438),
    s = n(397927),
    r = n(308528),
    o = n(736653),
    d = n(573648),
    c = n(780964),
    u = n(858897),
    g = n(562153),
    m = n(993401),
    h = n(652215),
    x = n(985018),
    p = n(601927);
let f = [() => x.intl.string(x.t.madJdE), () => x.intl.string(x.t.NYmfoP), () => x.intl.string(x.t.R2PaCg), () => x.intl.string(x.t.laSR8h), () => x.intl.string(x.t.DnsJE8)],
    A = [() => x.intl.string(x.t.nFSbeE), () => x.intl.string(x.t.gTcxOz), () => x.intl.string(x.t["8T0wYj"]), () => x.intl.string(x.t.BIHl1g), () => x.intl.string(x.t["jhBm0+"])],
    _ = [() => x.intl.string(x.t.AyMGXA), () => x.intl.string(x.t.aAFW7V), e => x.intl.formatToPlainString(x.t.h2g0cM, {
        name: e
    }), () => x.intl.string(x.t.rrYh58), () => x.intl.string(x.t["HX3K+F"]), () => x.intl.string(x.t["/yW3aY"]), () => x.intl.string(x.t["PmL/v0"]), () => x.intl.string(x.t.IALa3h), () => x.intl.string(x.t.HRcTFL), () => x.intl.string(x.t.NuCqPt), () => x.intl.string(x.t["M1tw+4"]), () => x.intl.string(x.t.UBm1y2), () => x.intl.string(x.t.Cu95PQ), () => x.intl.string(x.t["R/wFuh"]), () => x.intl.string(x.t.HQPAVT), () => x.intl.string(x.t.YolGh4)],
    I = [h.fg2.STEAM, h.fg2.PLAYSTATION, h.fg2.XBOX, h.fg2.TWITCH, h.fg2.BATTLENET, h.fg2.LEAGUE_OF_LEGENDS, h.fg2.EPIC_GAMES, h.fg2.RIOT_GAMES, h.fg2.ROBLOX, h.fg2.SPOTIFY, h.fg2.YOUTUBE, h.fg2.CRUNCHYROLL, h.fg2.BUNGIE];

function j(e) {
    let {
        heading: t,
        bodyText: n,
        children: a
    } = e;
    return (0, i.jsxs)("div", {
        className: p.Ie,
        children: [(0, i.jsxs)("div", {
            className: p.FS,
            children: [(0, i.jsx)(s.Heading, {
                variant: "heading-md/medium",
                color: "text-strong",
                children: t
            }), (0, i.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: n
            })]
        }), a]
    })
}

function v() {
    let e = x.intl.string(x.t.RnD2yZ),
        [t] = a.useState(() => ((0, l.sample)(f) ?? f[0])());
    return (0, i.jsx)(j, {
        heading: e,
        bodyText: t
    })
}

function b() {
    let e = x.intl.string(x.t.bFgqYJ),
        [t] = a.useState(() => ((0, l.sample)(A) ?? A[0])());
    return (0, i.jsx)(j, {
        heading: e,
        bodyText: t
    })
}

function S(e) {
    let {
        user: t,
        guildId: n,
        channelId: o,
        onClose: d
    } = e, c = g.Ay.getName(n, o, t), u = x.intl.formatToPlainString(x.t.sjSitP, {
        name: c
    }), [h] = a.useState(() => ((0, l.sample)(_) ?? _[0])(c)), f = a.useCallback(() => {
        r.A.openPrivateChannel({
            recipientIds: t.id
        }), d?.()
    }, [t.id, d]);
    return (0, i.jsx)(j, {
        heading: u,
        bodyText: h,
        children: (0, i.jsx)("div", {
            className: p.v0,
            children: (0, i.jsx)(m.FD, {
                icon: s.oyn,
                text: x.intl.string(x.t["g33r/P"]),
                onClick: f
            })
        })
    })
}

function y() {
    let e = (0, o.Ay)();
    return (0, i.jsx)("div", {
        className: p.HU,
        children: I.map((t, n) => {
            let a = d.A.get(t);
            if (null == a) return null;
            let l = (0, s.Mwr)(e) ? a.icon.darkPNG : a.icon.lightPNG;
            return (0, i.jsx)("img", {
                src: l,
                alt: a.name,
                className: p.gj
            }, n)
        })
    })
}

function E(e) {
    let {
        onClose: t
    } = e, n = a.useCallback(() => {
        t?.(), (0, u.openUserSettings)(c.X.CONNECTIONS_PANEL)
    }, [t]), l = a.useCallback(() => {
        t?.(), (0, u.openUserSettings)(c.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB)
    }, [t]);
    return (0, i.jsxs)(j, {
        heading: x.intl.string(x.t.VB6LWY),
        bodyText: x.intl.string(x.t.KpjsU9),
        children: [(0, i.jsx)(y, {}), (0, i.jsxs)("div", {
            className: p.v0,
            children: [(0, i.jsx)(m.FD, {
                text: x.intl.string(x.t["/Hl24U"]),
                onClick: n
            }), (0, i.jsx)(m.FD, {
                text: x.intl.string(x.t.GTCx0p),
                onClick: l
            })]
        })]
    })
}