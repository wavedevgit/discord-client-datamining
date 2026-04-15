/** chunk id: 57718 params = (module,exports,require) **/
n.d(t, {
    Ay: () => f,
    C8: () => x,
    LU: () => A
});
var i, a, l = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    o = n(407045),
    d = n(827734),
    c = n(582754),
    u = n(397927),
    _ = n(890687),
    m = n(579473),
    h = n(241124),
    p = n(652215),
    g = n(260821),
    A = ((i = {})[i.SMALL = 24] = "SMALL", i[i.MEDIUM = 32] = "MEDIUM", i),
    x = ((a = {})[a.SMALL = 2] = "SMALL", a[a.MEDIUM = 8] = "MEDIUM", a);
let f = function(e) {
    let {
        className: t,
        logotypeClassName: n,
        gameTileSize: i = 24,
        quest: a,
        separatorSpacing: s = 2,
        theme: A = p.NJ8.DARK,
        withCosponsor: x = !0,
        withGameTile: f = !0,
        logotypeStyle: C,
        onLoadComplete: E
    } = e, I = (0, c.Mw)(A) ? p.NJ8.DARK : p.NJ8.LIGHT, v = (0, _.a5)(a.id, I), b = x && null != a.config.cosponsorMetadata && null != v;
    return (0, l.jsxs)("div", {
        className: r()(g.Iu, t),
        children: [f && (0, l.jsx)(h.Sn, {
            id: "QuestPartnerBranding_gameTile",
            children: e => (0, l.jsx)("img", {
                ref: e,
                className: g._Y,
                alt: "",
                src: (0, m.tW)(a, m.fY.GAME_TILE, I).url,
                style: {
                    borderRadius: function(e) {
                        switch (e) {
                            case 24:
                                return 3;
                            case 32:
                                return 4
                        }
                    }(i),
                    width: i,
                    height: i
                },
                onLoad: E
            })
        }), (0, l.jsx)(h.Sn, {
            id: "QuestPartnerBranding_gameLogotype",
            children: e => (0, l.jsx)(o.animated.img, {
                ref: e,
                className: r()(g.lW, n, {
                    [g.TO]: b
                }),
                style: C,
                alt: a.config.messages.gameTitle,
                src: (0, m.tW)(a, m.fY.LOGO_TYPE, I).url,
                onLoad: E
            })
        }), b && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("div", {
                className: g.ub,
                style: {
                    margin: `0 ${s}px`
                },
                children: (0, l.jsx)(u.aoi, {
                    className: g.JB,
                    color: d.A.colors.WHITE
                })
            }), (0, l.jsx)(h.Sn, {
                id: "QuestPartnerBranding_cosponsorLogotype",
                children: e => (0, l.jsx)(o.animated.img, {
                    ref: e,
                    className: r()(g.lW, g.TO, n),
                    style: C,
                    alt: a.config.cosponsorMetadata?.name ?? "",
                    src: v.url,
                    onLoad: E
                })
            })]
        })]
    })
}