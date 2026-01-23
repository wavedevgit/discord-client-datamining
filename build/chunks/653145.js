/** Chunk was on web.js **/
/** chunk id: 653145, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => q
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    c = n(837381),
    u = n(311907),
    d = n(319060),
    f = n(397927),
    p = n(212245),
    _ = n(775602),
    h = n(850992),
    m = n(802019),
    g = n(407698),
    E = n(531685),
    y = n(954571),
    b = n(240248),
    O = n(822123),
    v = n(535622),
    A = n(724511),
    I = n(484333),
    S = n(732139),
    T = n(652215),
    C = n(698279),
    N = n(985018),
    w = n(497481);

function R(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            R(e, t, n[t])
        })
    }
    return e
}

function D(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function x(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let L = (0, b.xI)(d.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    j = (0, b.xI)(d.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    M = (0, b.xI)(d.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    k = (0, b.xI)(d.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    U = (0, b.xI)(d.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    G = (0, b.xI)(w.__invalid_unicodeCategoryShortcutHeight),
    V = (0, b.xI)(d.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    F = (0, b.xI)(d.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    B = M + j + 2 * U,
    H = L + j,
    Y = H + (V + 2 * F),
    W = M + k + 2 * U,
    K = 7;

function z(e) {
    let {
        activeIndex: t,
        categoryIndex: n,
        analyticsContext: a,
        categories: o,
        category: l,
        handleCategorySelect: u,
        isWindowFocused: d,
        useReducedMotion: p
    } = e, _ = (0, c.rm)("expression-guild-".concat(n)), h = l.type === S.s.GUILD ? null : l.id, m = t === n, E = l.type === S.s.GUILD ? l.guild : null, b = (0, r.jsxs)(f.DUT, x(P({}, _), {
        "aria-label": (0, O.wt)(l, E),
        className: s()({
            [w.ZG]: null != E,
            [w.Bj]: null == E,
            [w.s6]: null == E && m,
            [w.xg]: l.type === S.s.RECENT
        }),
        onClick: () => {
            null != E && y.default.track(T.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                location: null == a ? void 0 : a.location,
                tab: C.kx.EMOJI,
                guild_id: E.id
            }), u(n)
        },
        children: [null != E ? (0, r.jsx)(A.A, {
            guild: E,
            isSelected: m,
            shouldAnimate: !p && d,
            isLocked: l.isNitroLocked
        }) : null, null == E && null != h ? (0, r.jsx)(v.A, {
            categoryId: h,
            className: w.Yl,
            height: M,
            width: M,
            size: "custom"
        }) : null]
    })), I = o[n + 1], N = null != I && l.type === S.s.GUILD && I.type !== S.s.GUILD;
    return null != E ? (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(g.Q, {
            guild: E,
            children: (0, r.jsx)("div", {
                children: b
            })
        }), N ? (0, r.jsx)("hr", {
            className: w.ny
        }, "separator") : null]
    }) : b
}
let q = e => {
    var t;
    let {
        className: n,
        emojiListRef: a,
        sectionDescriptors: o,
        intention: c,
        channel: d,
        fallbackGuildId: g,
        shouldShowSoundmojiInEmojiPicker: y = !1,
        showOnlyUnicode: b = !1
    } = e, v = h.Om.useStore(e => e.activeCategoryIndex), A = (0, I.cr)({
        sectionDescriptors: o,
        emojiListRef: a
    }), T = (0, p.p)(), C = (0, O.ss)(c, d, null != (t = null == d ? void 0 : d.guild_id) ? t : g, y), R = i.useMemo(() => b ? (0, O.CQ)() : C, [C, b]), P = i.useRef(null), D = (0, u.bG)([E.A], () => E.A.isFocused()), x = (0, u.bG)([_.A], () => _.A.useReducedMotion, []), L = i.useMemo(() => l().memoize((e, t) => {
        let n = R[t];
        if (null != n) return (0, r.jsx)(z, {
            activeIndex: v,
            analyticsContext: T,
            categories: R,
            category: n,
            categoryIndex: t,
            handleCategorySelect: A,
            isWindowFocused: D,
            useReducedMotion: x
        }, t)
    }), [v, T, R, A, D, x]), U = i.useMemo(() => [8, 8, 0, 8], []), q = i.useCallback((e, t) => {
        let n = R[t];
        if (n.type === S.s.RECENT) return B;
        if (n.type === S.s.GUILD) {
            let e = R[t + 1];
            return null != e && e.type !== S.s.GUILD ? Y : H
        }
        return W
    }, [R]), {
        nonUnicodeCategoryCount: Z,
        firstUnicodeCategoryIndex: X,
        firstUnicodeCategoryOffsetTop: Q,
        rowCountBySection: J
    } = i.useMemo(() => {
        let e = 0,
            t = 0,
            n = 0,
            r = 0;
        R.forEach(i => {
            i.type === S.s.GUILD ? (t += 1, n += 1) : i.type === S.s.UNICODE ? r += 1 : (e += 1, t += 1)
        });
        let i = B + t * H + Y;
        return {
            nonUnicodeCategoryCount: t,
            firstUnicodeCategoryIndex: t,
            firstUnicodeCategoryOffsetTop: i,
            rowCountBySection: [e, n, r]
        }
    }, [R]), [$, ee] = i.useState(!0);
    i.useLayoutEffect(() => {
        ee(Z >= K)
    }, [Z]);
    let et = i.useCallback(e => {
            var t;
            let n = null == (t = P.current) ? void 0 : t.getListDimensions();
            null == n || (e + n.height - V >= Q ? ee(!1) : ee(!0))
        }, [Q]),
        en = i.useCallback(e => {
            var t;
            e(X), null == (t = P.current) || t.scrollTo(Q)
        }, [Q, X]),
        er = i.useCallback((e, t) => {
            let n = R[e];
            if (null == n) return 0;
            let r = $ ? G : 0;
            if (n.type === S.s.RECENT) return t ? 0 : k;
            if (n.type === S.s.GUILD) {
                let n = R[e + 1];
                return null != n && n.type !== S.s.GUILD ? t ? V + -2 * F + j + r : j : t ? r : j
            }
            return t ? j + r : 2 * j
        }, [R, $]),
        ei = i.useMemo(() => function(e, t) {
            return (0, r.jsx)(i.Fragment, {
                children: t
            }, e)
        }, []),
        ea = $ ? "shortcut" : "hiddenshortcut";
    return (0, r.jsx)(m.A, {
        categoryListRef: P,
        expressionsListRef: a,
        className: n,
        store: h.Om,
        categories: R,
        listPadding: U,
        onScroll: et,
        renderCategoryListItem: L,
        renderSection: ei,
        rowCount: R.length,
        categoryHeight: q,
        getScrollOffsetForIndex: er,
        rowCountBySection: J,
        children: e => Z >= K && (0, r.jsx)(f.DUT, {
            "aria-hidden": !$,
            "aria-label": N.intl.string(N.t.dT0ctw),
            className: s()(w.KB, {
                [w.h_]: !$
            }),
            tabIndex: $ ? 0 : -1,
            onClick: () => en(e),
            children: (0, r.jsx)(f.nm2, {
                size: "custom",
                color: "currentColor",
                height: M,
                width: M
            })
        }, ea)
    })
}