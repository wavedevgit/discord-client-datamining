/** Chunk was on web.js **/
/** chunk id: 57718, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => E,
    C8: () => m,
    LU: () => h
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(108531),
    o = n(827734),
    l = n(582754),
    c = n(397927),
    u = n(890687),
    d = n(579473),
    f = n(241124),
    p = n(652215),
    _ = n(995360),
    h = function(e) {
        return e[e.SMALL = 24] = "SMALL", e[e.MEDIUM = 32] = "MEDIUM", e
    }({}),
    m = function(e) {
        return e[e.SMALL = 2] = "SMALL", e[e.MEDIUM = 8] = "MEDIUM", e
    }({});

function g(e) {
    switch (e) {
        case 24:
            return 3;
        case 32:
            return 4
    }
}
let E = function(e) {
    let {
        className: t,
        logotypeClassName: n,
        gameTileSize: i = 24,
        quest: h,
        separatorSpacing: m = 2,
        theme: E = p.NJ8.DARK,
        withCosponsor: y = !0,
        withGameTile: b = !0,
        logotypeStyle: O,
        onLoadComplete: v
    } = e, A = (0, l.Mw)(E) ? p.NJ8.DARK : p.NJ8.LIGHT, I = (0, u.a5)(h.id, A), S = y && null != h.config.cosponsorMetadata && null != I;
    return (0, r.jsxs)("div", {
        className: a()(_.Iu, t),
        children: [b && (0, r.jsx)(f.Sn, {
            id: "QuestPartnerBranding_gameTile",
            children: e => (0, r.jsx)("img", {
                ref: e,
                className: _._Y,
                alt: "",
                src: (0, d.tW)(h, d.fY.GAME_TILE, A).url,
                style: {
                    borderRadius: g(i),
                    width: i,
                    height: i
                },
                onLoad: v
            })
        }), (0, r.jsx)(f.Sn, {
            id: "QuestPartnerBranding_gameLogotype",
            children: e => (0, r.jsx)(s.animated.img, {
                ref: e,
                className: a()(_.lW, n, {
                    [_.TO]: S
                }),
                style: O,
                alt: h.config.messages.gameTitle,
                src: (0, d.tW)(h, d.fY.LOGO_TYPE, A).url,
                onLoad: v
            })
        }), S && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
                className: _.ub,
                style: {
                    margin: "0 ".concat(m, "px")
                },
                children: (0, r.jsx)(c.aoi, {
                    className: _.JB,
                    color: o.A.colors.WHITE
                })
            }), (0, r.jsx)(f.Sn, {
                id: "QuestPartnerBranding_cosponsorLogotype",
                children: e => {
                    var t, i;
                    return (0, r.jsx)(s.animated.img, {
                        ref: e,
                        className: a()(_.lW, _.TO, n),
                        style: O,
                        alt: null != (t = null == (i = h.config.cosponsorMetadata) ? void 0 : i.name) ? t : "",
                        src: I.url,
                        onLoad: v
                    })
                }
            })]
        })]
    })
}