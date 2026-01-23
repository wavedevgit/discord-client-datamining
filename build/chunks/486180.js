/** Chunk was on 19750 **/
/** chunk id: 486180, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r, a, i = n(627968),
    l = n(64700),
    s = n(158954),
    o = n(311907),
    c = n(397927),
    d = n(793574),
    u = n(665171),
    m = n(522055),
    f = n(895770),
    g = n(355609),
    _ = n(843095),
    x = n(800007),
    v = n(294726),
    j = n(985018),
    p = n(979402);
let b = (r = function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}({}, x.ZN), a = a = {
    initialStep: x.HS.SERVER_SETTINGS
}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
    }
    return n
})(Object(a)).forEach(function(e) {
    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
}), r);

function h(e) {
    let {
        guildId: t
    } = e;
    l.useEffect(() => {
        (0, u.z9)(t)
    }, [t]);
    let n = (0, o.bG)([m.A], () => m.A.getStateForGuild(t)),
        {
            catalog: r,
            instances: a
        } = l.useMemo(() => {
            var e, t;
            return {
                catalog: Object.values(null != (e = null == n ? void 0 : n.catalog) ? e : {}),
                instances: Object.values(null != (t = null == n ? void 0 : n.instances) ? t : {})
            }
        }, [null == n ? void 0 : n.catalog, null == n ? void 0 : n.instances]),
        h = a.length >= x.ZI;
    return 0 === r.length ? (0, i.jsx)("div", {
        className: p.kL,
        children: (0, i.jsx)(c.y$y, {
            type: c.tVU.SPINNING_CIRCLE,
            className: p.u1
        })
    }) : (0, i.jsxs)("div", {
        className: p.kL,
        children: [(0, i.jsx)(s.DZT, {
            className: p.R_,
            variant: "heading-md/semibold",
            children: j.intl.string(v.default["3vWDMz"])
        }), h && (0, i.jsx)("div", {
            className: p.Bq,
            children: (0, i.jsx)(g.k, {})
        }), (0, i.jsx)(s.IpV, {
            className: p.nd,
            children: (0, i.jsx)("div", {
                className: p.Y_,
                children: r.map((e, n) => (0, i.jsx)(f.A, {
                    guildId: t,
                    game: e,
                    onClick: () => (0, _.A)({
                        guildId: t,
                        stepConfig: b,
                        initialGameServerGame: e,
                        analyticsLocation: d.A.GAME_SERVER_PAGE_SIDEBAR
                    }),
                    imageClassName: p.Sl,
                    titleClassName: p.DD,
                    disabled: h,
                    location: d.A.GAME_SERVER_PAGE_SIDEBAR
                }, "sidebar-game-".concat(n, "-").concat(e.id)))
            })
        })]
    })
}