/** Chunk was on web.js **/
/** chunk id: 114028, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => M
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(837381),
    l = n(311907),
    c = n(435371),
    u = n(397927),
    d = n(724511),
    f = n(850992),
    p = n(802019),
    _ = n(407698),
    h = n(287809),
    m = n(954571),
    g = n(927578),
    E = n(807348),
    y = n(338821),
    b = n(652215),
    O = n(698279),
    v = n(788868),
    A = n(985018),
    I = n(198606);

function S(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            S(e, t, n[t])
        })
    }
    return e
}

function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function N(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let w = [8, 8, 8, 8],
    R = 40;

function P(e) {
    let {
        icon: t,
        isSelected: n,
        onClick: i,
        listItemProps: a
    } = e;
    return (0, r.jsx)(u.DUT, N(T({}, a), {
        onClick: i,
        className: o()(I.Yl, {
            [I.wH]: n
        }),
        children: (0, r.jsx)(t, {
            className: I.xi,
            color: "currentColor"
        })
    }))
}

function D(e, t, n, i, a) {
    switch (e.categoryInfo.type) {
        case E.Cx.FAVORITES:
            return (0, r.jsx)(P, {
                icon: u.Gg5,
                onClick: t,
                isSelected: n,
                listItemProps: i
            }, e.key);
        case E.Cx.RECENTLY_HEARD:
            return (0, r.jsx)(P, {
                icon: u.O4,
                onClick: t,
                isSelected: n,
                listItemProps: i
            }, e.key);
        case E.Cx.FREQUENTLY_USED:
            return (0, r.jsx)(P, {
                icon: u.Uy2,
                onClick: t,
                isSelected: n,
                listItemProps: i
            }, e.key);
        case E.Cx.GUILD:
            return (0, r.jsx)(u.DUT, N(T({}, i), {
                className: I.L1,
                onClick: t,
                children: (0, r.jsx)(d.A, {
                    guild: e.categoryInfo.guild,
                    isSelected: n,
                    isLocked: a
                })
            }), e.key);
        case E.Cx.DEFAULTS:
            return (0, r.jsx)(P, {
                icon: u.pVd,
                onClick: t,
                isSelected: n,
                listItemProps: i
            }, e.key);
        default:
            return null
    }
}

function L(e) {
    switch (e.categoryInfo.type) {
        case E.Cx.FAVORITES:
            return A.intl.string(A.t.k8fFjp);
        case E.Cx.RECENTLY_HEARD:
            return A.intl.string(A.t["8i/+SA"]);
        case E.Cx.FREQUENTLY_USED:
            return A.intl.string(A.t["+cGVV6"]);
        case E.Cx.GUILD:
            return e.categoryInfo.guild.name;
        case E.Cx.DEFAULTS:
            return A.intl.string(A.t.Rtvk9X)
    }
}

function x(e) {
    let {
        category: t,
        categoryIndex: n,
        onClick: i,
        isSelected: a,
        isNitroLocked: o
    } = e, l = (0, s.rm)("soundboard_guild_".concat(n));
    return t.categoryInfo.type === E.Cx.GUILD ? (0, r.jsx)(_.Q, {
        guild: t.categoryInfo.guild,
        children: D(t, i, a, l, o)
    }) : (0, r.jsx)(c.m_, {
        text: L(t),
        position: "right",
        align: "center",
        children: D(t, i, a, l, o)
    })
}

function M(e) {
    let {
        soundboardListRef: t,
        categories: n,
        shouldUpsellLockedCategories: a,
        listPadding: o = w,
        guildId: s,
        inExpressionPicker: c,
        showPinnedDefaultsShortcut: d = !1
    } = e, _ = i.useRef(null), E = (0, l.bG)([h.default], () => h.default.getCurrentUser()), S = (0, g.TW)(E, v.PremiumTypes.TIER_2), T = i.useCallback(e => {
        var r;
        let i = n.length - 1;
        e(i), null == (r = t.current) || r.scrollToSectionTop(i)
    }, [n.length, t]), C = i.useCallback((e, t, n, i) => {
        let o = a && (0, y.B)(e.categoryInfo, S, s),
            l = () => {
                m.default.track(b.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                    location: {
                        page: b.liQ.SOUNDBOARD_POPOUT
                    },
                    guild_id: null != s ? s : null,
                    num_expressions: e.items.length,
                    tab: O.kx.SOUNDBOARD,
                    sticker_pack_id: null,
                    pack_id: null
                }), n()
            };
        return (0, r.jsx)(x, {
            category: e,
            categoryIndex: t,
            onClick: l,
            isSelected: i,
            isNitroLocked: o
        })
    }, [s, a, S]);
    return (0, r.jsx)(p.A, {
        className: c ? I.HZ : I.jv,
        categoryListRef: _,
        expressionsListRef: t,
        store: f.LW,
        categories: n,
        listPadding: o,
        renderCategoryListItem: C,
        rowCount: n.length,
        categoryHeight: R,
        children: e => d && (0, r.jsx)(u.DUT, {
            "aria-label": A.intl.string(A.t.Rtvk9X),
            className: I.xe,
            onClick: () => T(e),
            children: (0, r.jsx)(u.pVd, {
                size: "custom",
                width: 24,
                height: 24,
                color: "currentColor"
            })
        })
    })
}