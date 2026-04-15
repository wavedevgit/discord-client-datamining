/** chunk id: 782505 params = (module,exports,require) **/
i.d(t, {
    IA: () => S,
    jB: () => E,
    qv: () => y,
    zf: () => b
});
var n = i(627968),
    l = i(64700),
    s = i(735438),
    a = i(397927),
    r = i(308528),
    d = i(736653),
    o = i(573648),
    c = i(780964),
    u = i(858897),
    g = i(562153),
    m = i(993401),
    h = i(652215),
    x = i(985018),
    A = i(160514);
let p = [() => x.intl.string(x.t.madJdE), () => x.intl.string(x.t.NYmfoP), () => x.intl.string(x.t.R2PaCg), () => x.intl.string(x.t.laSR8h), () => x.intl.string(x.t.DnsJE8)],
    f = [() => x.intl.string(x.t.nFSbeE), () => x.intl.string(x.t.gTcxOz), () => x.intl.string(x.t["8T0wYj"]), () => x.intl.string(x.t.BIHl1g), () => x.intl.string(x.t["jhBm0+"])],
    I = [() => x.intl.string(x.t.AyMGXA), () => x.intl.string(x.t.aAFW7V), e => x.intl.formatToPlainString(x.t.h2g0cM, {
        name: e
    }), () => x.intl.string(x.t.rrYh58), () => x.intl.string(x.t["HX3K+F"]), () => x.intl.string(x.t["/yW3aY"]), () => x.intl.string(x.t["PmL/v0"]), () => x.intl.string(x.t.IALa3h), () => x.intl.string(x.t.HRcTFL), () => x.intl.string(x.t.NuCqPt), () => x.intl.string(x.t["M1tw+4"]), () => x.intl.string(x.t.UBm1y2), () => x.intl.string(x.t.Cu95PQ), () => x.intl.string(x.t["R/wFuh"]), () => x.intl.string(x.t.HQPAVT), () => x.intl.string(x.t.YolGh4)],
    j = [h.fg2.STEAM, h.fg2.PLAYSTATION, h.fg2.XBOX, h.fg2.TWITCH, h.fg2.BATTLENET, h.fg2.LEAGUE_OF_LEGENDS, h.fg2.EPIC_GAMES, h.fg2.RIOT_GAMES, h.fg2.ROBLOX, h.fg2.SPOTIFY, h.fg2.YOUTUBE, h.fg2.CRUNCHYROLL, h.fg2.BUNGIE];

function v(e) {
    let {
        heading: t,
        bodyText: i,
        children: l
    } = e;
    return (0, n.jsxs)("div", {
        className: A.Ie,
        children: [(0, n.jsxs)("div", {
            className: A.FS,
            children: [(0, n.jsx)(a.Heading, {
                variant: "heading-md/medium",
                color: "text-strong",
                children: t
            }), (0, n.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: i
            })]
        }), l]
    })
}

function S() {
    let e = x.intl.string(x.t.RnD2yZ),
        [t] = l.useState(() => ((0, s.sample)(p) ?? p[0])());
    return (0, n.jsx)(v, {
        heading: e,
        bodyText: t
    })
}

function E() {
    let e = x.intl.string(x.t.bFgqYJ),
        [t] = l.useState(() => ((0, s.sample)(f) ?? f[0])());
    return (0, n.jsx)(v, {
        heading: e,
        bodyText: t
    })
}

function b(e) {
    let {
        user: t,
        guildId: i,
        channelId: d,
        onClose: o
    } = e, c = g.Ay.getName(i, d, t), u = x.intl.formatToPlainString(x.t.sjSitP, {
        name: c
    }), [h] = l.useState(() => ((0, s.sample)(I) ?? I[0])(c)), p = l.useCallback(() => {
        r.A.openPrivateChannel({
            recipientIds: t.id
        }), o?.()
    }, [t.id, o]);
    return (0, n.jsx)(v, {
        heading: u,
        bodyText: h,
        children: (0, n.jsx)("div", {
            className: A.v0,
            children: (0, n.jsx)(m.FD, {
                icon: a.oyn,
                text: x.intl.string(x.t["g33r/P"]),
                onClick: p
            })
        })
    })
}

function T() {
    let e = (0, d.Ay)();
    return (0, n.jsx)("div", {
        className: A.HU,
        children: j.map((t, i) => {
            let l = o.A.get(t);
            if (null == l) return null;
            let s = (0, a.Mwr)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, n.jsx)("img", {
                src: s,
                alt: l.name,
                className: A.gj
            }, i)
        })
    })
}

function y(e) {
    let {
        onClose: t
    } = e, i = l.useCallback(() => {
        t?.(), (0, u.openUserSettings)(c.X.CONNECTIONS_PANEL)
    }, [t]), s = l.useCallback(() => {
        t?.(), (0, u.openUserSettings)(c.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB)
    }, [t]);
    return (0, n.jsxs)(v, {
        heading: x.intl.string(x.t.VB6LWY),
        bodyText: x.intl.string(x.t.KpjsU9),
        children: [(0, n.jsx)(T, {}), (0, n.jsxs)("div", {
            className: A.v0,
            children: [(0, n.jsx)(m.FD, {
                text: x.intl.string(x.t["/Hl24U"]),
                onClick: i
            }), (0, n.jsx)(m.FD, {
                text: x.intl.string(x.t.GTCx0p),
                onClick: s
            })]
        })]
    })
}