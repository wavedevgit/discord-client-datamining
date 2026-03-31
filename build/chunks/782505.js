/** chunk id: 782505 params = (module,exports,require) **/
n.d(t, {
    IA: () => E,
    jB: () => v,
    qv: () => C,
    zf: () => T
});
var i = n(627968),
    l = n(64700),
    a = n(735438),
    s = n(397927),
    r = n(308528),
    o = n(736653),
    d = n(573648),
    c = n(780964),
    u = n(840065),
    g = n(562153),
    m = n(993401),
    p = n(652215),
    x = n(985018),
    f = n(601927);
let h = [() => x.intl.string(x.t.madJdE), () => x.intl.string(x.t.NYmfoP), () => x.intl.string(x.t.R2PaCg), () => x.intl.string(x.t.laSR8h), () => x.intl.string(x.t.DnsJE8)],
    _ = [() => x.intl.string(x.t.nFSbeE), () => x.intl.string(x.t.gTcxOz), () => x.intl.string(x.t["8T0wYj"]), () => x.intl.string(x.t.BIHl1g), () => x.intl.string(x.t["jhBm0+"])],
    A = [() => x.intl.string(x.t.AyMGXA), () => x.intl.string(x.t.aAFW7V), e => x.intl.formatToPlainString(x.t.h2g0cM, {
        name: e
    }), () => x.intl.string(x.t.rrYh58), () => x.intl.string(x.t["HX3K+F"]), () => x.intl.string(x.t["/yW3aY"]), () => x.intl.string(x.t["PmL/v0"]), () => x.intl.string(x.t.IALa3h), () => x.intl.string(x.t.HRcTFL), () => x.intl.string(x.t.NuCqPt), () => x.intl.string(x.t["M1tw+4"]), () => x.intl.string(x.t.UBm1y2), () => x.intl.string(x.t.Cu95PQ), () => x.intl.string(x.t["R/wFuh"]), () => x.intl.string(x.t.HQPAVT), () => x.intl.string(x.t.YolGh4)],
    I = [p.fg2.STEAM, p.fg2.PLAYSTATION, p.fg2.XBOX, p.fg2.TWITCH, p.fg2.BATTLENET, p.fg2.LEAGUE_OF_LEGENDS, p.fg2.EPIC_GAMES, p.fg2.RIOT_GAMES, p.fg2.ROBLOX, p.fg2.SPOTIFY, p.fg2.YOUTUBE, p.fg2.CRUNCHYROLL, p.fg2.BUNGIE];

function j(e) {
    let {
        heading: t,
        bodyText: n,
        children: l
    } = e;
    return (0, i.jsxs)("div", {
        className: f.Ie,
        children: [(0, i.jsxs)("div", {
            className: f.FS,
            children: [(0, i.jsx)(s.Heading, {
                variant: "heading-md/medium",
                color: "text-strong",
                children: t
            }), (0, i.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: n
            })]
        }), l]
    })
}

function E() {
    let e = x.intl.string(x.t.RnD2yZ),
        [t] = l.useState(() => ((0, a.sample)(h) ?? h[0])());
    return (0, i.jsx)(j, {
        heading: e,
        bodyText: t
    })
}

function v() {
    let e = x.intl.string(x.t.bFgqYJ),
        [t] = l.useState(() => ((0, a.sample)(_) ?? _[0])());
    return (0, i.jsx)(j, {
        heading: e,
        bodyText: t
    })
}

function T(e) {
    let {
        user: t,
        guildId: n,
        channelId: o,
        onClose: d
    } = e, c = g.Ay.getName(n, o, t), u = x.intl.formatToPlainString(x.t.sjSitP, {
        name: c
    }), [p] = l.useState(() => ((0, a.sample)(A) ?? A[0])(c)), h = l.useCallback(() => {
        r.A.openPrivateChannel({
            recipientIds: t.id
        }), d?.()
    }, [t.id, d]);
    return (0, i.jsx)(j, {
        heading: u,
        bodyText: p,
        children: (0, i.jsx)("div", {
            className: f.v0,
            children: (0, i.jsx)(m.FD, {
                icon: s.oyn,
                text: x.intl.string(x.t["g33r/P"]),
                onClick: h
            })
        })
    })
}

function b() {
    let e = (0, o.Ay)();
    return (0, i.jsx)("div", {
        className: f.HU,
        children: I.map((t, n) => {
            let l = d.A.get(t);
            if (null == l) return null;
            let a = (0, s.Mwr)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, i.jsx)("img", {
                src: a,
                alt: l.name,
                className: f.gj
            }, n)
        })
    })
}

function C(e) {
    let {
        onClose: t
    } = e, n = l.useCallback(() => {
        t?.(), (0, u.openUserSettings)(c.X.CONNECTIONS_PANEL)
    }, [t]), a = l.useCallback(() => {
        t?.(), (0, u.openUserSettings)(c.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB)
    }, [t]);
    return (0, i.jsxs)(j, {
        heading: x.intl.string(x.t.VB6LWY),
        bodyText: x.intl.string(x.t.KpjsU9),
        children: [(0, i.jsx)(b, {}), (0, i.jsxs)("div", {
            className: f.v0,
            children: [(0, i.jsx)(m.FD, {
                text: x.intl.string(x.t["/Hl24U"]),
                onClick: n
            }), (0, i.jsx)(m.FD, {
                text: x.intl.string(x.t.GTCx0p),
                onClick: a
            })]
        })]
    })
}