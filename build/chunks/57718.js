/** chunk id: 57718, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => f,
    C8: () => x,
    LU: () => A
});
var i, l, r = n(627968);
n(64700);
var a = n(503698),
    s = n.n(a),
    o = n(380278),
    d = n(827734),
    c = n(582754),
    u = n(397927),
    _ = n(890687),
    m = n(579473),
    h = n(241124),
    p = n(652215),
    g = n(995360),
    A = ((i = {})[i.SMALL = 24] = "SMALL", i[i.MEDIUM = 32] = "MEDIUM", i),
    x = ((l = {})[l.SMALL = 2] = "SMALL", l[l.MEDIUM = 8] = "MEDIUM", l);
let f = function(e) {
    let {
        className: t,
        logotypeClassName: n,
        gameTileSize: i = 24,
        quest: l,
        separatorSpacing: a = 2,
        theme: A = p.NJ8.DARK,
        withCosponsor: x = !0,
        withGameTile: f = !0,
        logotypeStyle: C,
        onLoadComplete: E
    } = e, I = (0, c.Mw)(A) ? p.NJ8.DARK : p.NJ8.LIGHT, b = (0, _.a5)(l.id, I), T = x && null != l.config.cosponsorMetadata && null != b;
    return (0, r.jsxs)("div", {
        className: s()(g.Iu, t),
        children: [f && (0, r.jsx)(h.Sn, {
            id: "QuestPartnerBranding_gameTile",
            children: e => (0, r.jsx)("img", {
                ref: e,
                className: g._Y,
                alt: "",
                src: (0, m.tW)(l, m.fY.GAME_TILE, I).url,
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
        }), (0, r.jsx)(h.Sn, {
            id: "QuestPartnerBranding_gameLogotype",
            children: e => (0, r.jsx)(o.animated.img, {
                ref: e,
                className: s()(g.lW, n, {
                    [g.TO]: T
                }),
                style: C,
                alt: l.config.messages.gameTitle,
                src: (0, m.tW)(l, m.fY.LOGO_TYPE, I).url,
                onLoad: E
            })
        }), T && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
                className: g.ub,
                style: {
                    margin: `0 ${a}px`
                },
                children: (0, r.jsx)(u.aoi, {
                    className: g.JB,
                    color: d.A.colors.WHITE
                })
            }), (0, r.jsx)(h.Sn, {
                id: "QuestPartnerBranding_cosponsorLogotype",
                children: e => (0, r.jsx)(o.animated.img, {
                    ref: e,
                    className: s()(g.lW, g.TO, n),
                    style: C,
                    alt: l.config.cosponsorMetadata?.name ?? "",
                    src: b.url,
                    onLoad: E
                })
            })]
        })]
    })
}