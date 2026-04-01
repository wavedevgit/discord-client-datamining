/** chunk id: 782505 params = (module,exports,require) **/
n.d(t, {
    IA: () => j,
    jB: () => E,
    qv: () => C,
    zf: () => T
});
var i = n(627968),
    a = n(64700),
    l = n(735438),
    s = n(397927),
    r = n(308528),
    o = n(736653),
    c = n(573648),
    d = n(780964),
    u = n(840065),
    m = n(562153),
    g = n(993401),
    p = n(652215),
    x = n(985018),
    f = n(601927);
let _ = [() => x.intl.string(x.t.madJdE), () => x.intl.string(x.t.NYmfoP), () => x.intl.string(x.t.R2PaCg), () => x.intl.string(x.t.laSR8h), () => x.intl.string(x.t.DnsJE8)],
    h = [() => x.intl.string(x.t.nFSbeE), () => x.intl.string(x.t.gTcxOz), () => x.intl.string(x.t["8T0wYj"]), () => x.intl.string(x.t.BIHl1g), () => x.intl.string(x.t["jhBm0+"])],
    A = [() => x.intl.string(x.t.AyMGXA), () => x.intl.string(x.t.aAFW7V), e => x.intl.formatToPlainString(x.t.h2g0cM, {
        name: e
    }), () => x.intl.string(x.t.rrYh58), () => x.intl.string(x.t["HX3K+F"]), () => x.intl.string(x.t["/yW3aY"]), () => x.intl.string(x.t["PmL/v0"]), () => x.intl.string(x.t.IALa3h), () => x.intl.string(x.t.HRcTFL), () => x.intl.string(x.t.NuCqPt), () => x.intl.string(x.t["M1tw+4"]), () => x.intl.string(x.t.UBm1y2), () => x.intl.string(x.t.Cu95PQ), () => x.intl.string(x.t["R/wFuh"]), () => x.intl.string(x.t.HQPAVT), () => x.intl.string(x.t.YolGh4)],
    I = [p.fg2.STEAM, p.fg2.PLAYSTATION, p.fg2.XBOX, p.fg2.TWITCH, p.fg2.BATTLENET, p.fg2.LEAGUE_OF_LEGENDS, p.fg2.EPIC_GAMES, p.fg2.RIOT_GAMES, p.fg2.ROBLOX, p.fg2.SPOTIFY, p.fg2.YOUTUBE, p.fg2.CRUNCHYROLL, p.fg2.BUNGIE];

function v(e) {
    let {
        heading: t,
        bodyText: n,
        children: a
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
        }), a]
    })
}

function j() {
    let e = x.intl.string(x.t.RnD2yZ),
        [t] = a.useState(() => ((0, l.sample)(_) ?? _[0])());
    return (0, i.jsx)(v, {
        heading: e,
        bodyText: t
    })
}

function E() {
    let e = x.intl.string(x.t.bFgqYJ),
        [t] = a.useState(() => ((0, l.sample)(h) ?? h[0])());
    return (0, i.jsx)(v, {
        heading: e,
        bodyText: t
    })
}

function T(e) {
    let {
        user: t,
        guildId: n,
        channelId: o,
        onClose: c
    } = e, d = m.Ay.getName(n, o, t), u = x.intl.formatToPlainString(x.t.sjSitP, {
        name: d
    }), [p] = a.useState(() => ((0, l.sample)(A) ?? A[0])(d)), _ = a.useCallback(() => {
        r.A.openPrivateChannel({
            recipientIds: t.id
        }), c?.()
    }, [t.id, c]);
    return (0, i.jsx)(v, {
        heading: u,
        bodyText: p,
        children: (0, i.jsx)("div", {
            className: f.v0,
            children: (0, i.jsx)(g.FD, {
                icon: s.oyn,
                text: x.intl.string(x.t["g33r/P"]),
                onClick: _
            })
        })
    })
}

function N() {
    let e = (0, o.Ay)();
    return (0, i.jsx)("div", {
        className: f.HU,
        children: I.map((t, n) => {
            let a = c.A.get(t);
            if (null == a) return null;
            let l = (0, s.Mwr)(e) ? a.icon.darkPNG : a.icon.lightPNG;
            return (0, i.jsx)("img", {
                src: l,
                alt: a.name,
                className: f.gj
            }, n)
        })
    })
}

function C(e) {
    let {
        onClose: t
    } = e, n = a.useCallback(() => {
        t?.(), (0, u.openUserSettings)(d.X.CONNECTIONS_PANEL)
    }, [t]), l = a.useCallback(() => {
        t?.(), (0, u.openUserSettings)(d.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB)
    }, [t]);
    return (0, i.jsxs)(v, {
        heading: x.intl.string(x.t.VB6LWY),
        bodyText: x.intl.string(x.t.KpjsU9),
        children: [(0, i.jsx)(N, {}), (0, i.jsxs)("div", {
            className: f.v0,
            children: [(0, i.jsx)(g.FD, {
                text: x.intl.string(x.t["/Hl24U"]),
                onClick: n
            }), (0, i.jsx)(g.FD, {
                text: x.intl.string(x.t.GTCx0p),
                onClick: l
            })]
        })]
    })
}