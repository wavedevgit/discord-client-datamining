/** chunk id: 998986, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => P
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(417597),
    a = n(554146),
    o = n(506774),
    c = n(397927),
    u = n(442433),
    d = n(775602),
    h = n(58149),
    p = n(289397),
    g = n(491026),
    f = n(486418),
    m = n(575926),
    b = n(826673),
    A = n(976860),
    y = n(808728),
    O = n(71393),
    _ = n(954571),
    j = n(652793),
    x = n(652215),
    v = n(746080),
    E = n(634654),
    C = n(985018),
    S = n(568187);

function I(e) {
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
}

function N(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function T(e) {
    let {
        guildId: t,
        selected: n,
        handleClick: l
    } = e, u = (0, g.YZ)(t, "guild_shop_channel_row"), f = (0, s.bG)([O.A], () => O.A.getGuild(t)), v = (null == f ? void 0 : f.features.has(x.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) === !0, T = "false" === o.w.get(E.bJ, "false"), P = (0, s.bG)([d.A], () => d.A.useReducedMotion);
    return (0, r.jsx)(j.G, {
        id: "shop-".concat(t),
        className: i()(S.A2, {
            [S.wH]: n,
            [S.ST]: T
        }),
        innerClassName: S.LE,
        renderIcon: e => (0, r.jsx)(m.h, {
            width: 20,
            height: 20,
            className: i()([e, S.sV])
        }),
        text: C.intl.string(C.t.al5EXL),
        selected: n,
        onClick: l,
        trailing: (0, r.jsxs)("div", {
            className: S.ai,
            children: [P ? (0, r.jsx)(c.LpS, {
                color: c.LU0.unsafe_rawColors.BRAND_260.css,
                text: C.intl.string(C.t.y2b7CA),
                className: S.Ad
            }) : (0, r.jsx)("img", {
                src: (0, p.n)("server_products/storefront/money.gif"),
                className: S.TG,
                alt: ""
            }), n && (0, r.jsx)(c.DUT, {
                className: S.b,
                onClick: e => {
                    if (e.stopPropagation(), (0, b.Dr)(a.M.SERVER_SHOP_PHANTOM_PREVIEW), _.default.track(x.HAw.GUILD_SHOP_PREVIEW_CLICK, N(I({}, (0, h.H$)(t)), {
                            action_taken: E.hN.DISMISS_CHANNEL_ROW
                        })), !u || !v) {
                        var n;
                        (0, A.bG)(x.BVt.CHANNEL(t, null == (n = y.Ay.getDefaultChannel(t)) ? void 0 : n.id))
                    }
                },
                "aria-label": C.intl.string(C.t.cpT0Cq),
                children: (0, r.jsx)(c.aXh, {
                    size: "xs",
                    color: "currentColor"
                })
            })]
        })
    })
}

function P(e) {
    let {
        guild: t,
        selected: l
    } = e, i = (0, f.P)(t, "guild_shop_channel_row"), s = () => {
        o.w.set(E.bJ, "true"), (0, A.pX)(x.BVt.CHANNEL(t.id, v.VV.GUILD_SHOP))
    };
    return i ? (0, r.jsx)(T, {
        guildId: t.id,
        selected: l,
        handleClick: s
    }) : (0, r.jsx)(j.G, {
        id: "shop-".concat(t.id),
        renderIcon: e => (0, r.jsx)(m.h, {
            width: 20,
            height: 20,
            className: e
        }),
        text: C.intl.string(C.t.al5EXL),
        selected: l,
        onClick: s,
        onContextMenu: e => {
            null != t && (0, u.L3)(e, async () => {
                let {
                    default: e
                } = await n.e("52565").then(n.bind(n, 345332));
                return n => (0, r.jsx)(e, N(I({}, n), {
                    guild: t
                }))
            })
        }
    })
}