/** chunk id: 122204, original params: e,t,n (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => H
}), n(896048), n(733351);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n(311907),
    c = n(397927),
    d = n(178629),
    u = n(770472),
    p = n(737823),
    h = (n(153527), n(876622)),
    m = n(521974),
    g = n(965660),
    _ = n(976860),
    b = n(961350),
    f = n(287809),
    x = n(954571),
    v = n(354138),
    j = n(416730),
    A = n(212534),
    y = n(38181),
    C = n(767599),
    O = n(412461),
    S = n(157561),
    I = n(497773),
    E = n(310419),
    P = n(656106),
    N = n(97432),
    T = n(244460),
    R = n(569495),
    L = n(410608),
    D = n(360832),
    w = n(435220),
    k = n(652215),
    M = n(985018),
    G = n(67242);

function U(e) {
    let {
        applicationId: t,
        hideDetailHeaderButtons: n,
        onClickBack: i
    } = e, s = (0, o.bG)([A.A], () => A.A.getApplication(t)), [d, u] = l.useState(n), h = l.useCallback(() => {
        u(n)
    }, [n]);
    return (0, r.jsxs)("div", {
        className: G._u,
        children: [(0, r.jsx)("div", {
            className: G.w$,
            children: (0, r.jsx)(p.XQ, {
                icon: c.Zge,
                onClick: i
            })
        }), (0, r.jsx)(c.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            className: G.Rm,
            lineClamp: 1,
            children: null == s ? void 0 : s.name
        }), (0, r.jsx)("div", {
            className: a()(G.w$, G.xY, {
                [G.RK]: !n,
                [G.jD]: n && !d,
                [G.R]: n && d
            }),
            onTransitionEnd: h,
            children: null != s ? (0, r.jsx)(R.A, {
                application: s,
                size: "sm"
            }) : null
        })]
    })
}

function V() {
    let e = l.useCallback(() => {
            (0, O.dG)()
        }, []),
        t = l.useCallback(() => {
            (0, O.jL)()
        }, []);
    return (0, r.jsxs)(c.$Td, {
        color: c.Hv$.BRAND,
        className: G.aL,
        children: [(0, r.jsx)(c.pVd, {
            size: "custom",
            color: "white",
            className: G.wm
        }), (0, r.jsx)(c.Text, {
            tag: "span",
            color: "always-white",
            variant: "text-md/normal",
            children: M.intl.string(M.t.Ol3MIt)
        }), (0, r.jsxs)("div", {
            className: G.ll,
            children: [(0, r.jsx)(c.Z_L, {
                onClick: e,
                noticeType: k.kqX.LOGIN,
                children: M.intl.string(M.t["825cFy"])
            }), (0, r.jsx)(c.Z_L, {
                onClick: t,
                noticeType: k.kqX.REGISTER,
                minor: !0,
                children: M.intl.string(M.t.HAkXzo)
            })]
        })]
    })
}
let H = function() {
    var e;
    let t = (0, o.bG)([b.default], () => !b.default.isAuthenticated()),
        {
            onScroll: n,
            scrollPosition: i,
            resetScrollPosition: A
        } = (0, d.G)(),
        R = (0, E.R4)(),
        H = (0, O.DB)(),
        B = (null == R ? void 0 : R.type) === E.ev.CATEGORY ? R.categoryId : void 0,
        {
            applicationId: F,
            section: Y
        } = (null == R ? void 0 : R.type) === E.ev.APPLICATION ? R : {},
        {
            query: z,
            categoryId: X
        } = (null == R ? void 0 : R.type) === E.ev.SEARCH ? R : {},
        W = (0, o.bG)([y.A], () => y.A.getCategories()),
        K = l.useMemo(() => [(0, C.AU)(), ...W], [W]),
        Z = l.useMemo(() => K.find(e => e.id === Number(X)), [K, X]),
        {
            tabs: Q,
            selectedTab: J,
            onSelectTab: q
        } = (0, I.S)(null == B ? void 0 : B.toString()),
        [$, ee] = l.useState(!0),
        et = E.h.useField("trackedOpenedFromExternalEntrypoint"),
        en = E.h.useField("sessionId"),
        er = (0, o.bG)([f.default], () => f.default.getCurrentUser());
    l.useEffect(() => {
        if (!et && null == en) {
            let e = (0, g.YP)();
            x.default.track(k.HAw.APP_DIRECTORY_OPENED, {
                source: E.sW.EXTERNAL,
                session_id: e,
                user_id: null == er ? void 0 : er.id
            }), E.h.setState({
                trackedOpenedFromExternalEntrypoint: !0,
                sessionId: e,
                entrypoint: {
                    name: E.sW.EXTERNAL
                },
                guildId: null
            })
        }
    }, [en, et, null == er ? void 0 : er.id]), l.useEffect(() => {
        v.bW()
    }, []), l.useEffect(() => {
        H && v.wD()
    }, [H]), l.useEffect(() => E.tS.setState({
        lastItem: R
    }), [R]);
    let el = null != F,
        ei = (null == R ? void 0 : R.type) === E.ev.SEARCH,
        {
            searchQuery: ea,
            onSearchTextChange: es,
            onClearSearch: eo,
            onSearchSubmit: ec
        } = (0, S.v)({
            initialQuery: null != z ? z : ""
        }),
        ed = j.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: eu,
            onCollapsedSearchBarClick: ep,
            onSearchBarBlur: eh
        } = (0, u.p)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: "" === ea.trim(),
            searchBarState: ed,
            setSearchBarState: e => j.A.setState({
                searchBarState: e
            })
        }),
        em = l.useCallback(e => {
            q(e), ei && eo(), A()
        }, [ei, eo, q, A]),
        eg = l.useCallback(e => (0, P.YR)({
            applicationId: e
        }), []),
        e_ = el || ei,
        eb = l.useCallback(() => {
            null != (0, E.Bn)() ? (0, _.aX)() : (0, P.eM)()
        }, []),
        ef = l.useMemo(() => (0, s.debounce)(e => {
            let {
                scrollTop: t,
                offsetHeight: n,
                scrollHeight: r,
                location: l
            } = e;
            t > 0 && (0, O.TR)(k.HAw.APP_DIRECTORY_PAGE_SCROLLED, {
                scroll_visible_percentile: (t + n) / r,
                current_page: l
            })
        }, 200), []),
        ex = l.useCallback((e, t) => {
            n(e), ef({
                scrollTop: e.currentTarget.scrollTop,
                offsetHeight: e.currentTarget.offsetHeight,
                scrollHeight: e.currentTarget.scrollHeight,
                location: t
            })
        }, [ef, n]);
    return (0, r.jsxs)("div", {
        className: a()(G.nw, {
            [G.Yz]: t
        }),
        children: [t ? (0, r.jsx)(V, {}) : null, (0, r.jsxs)("div", {
            className: G.WH,
            children: [(0, r.jsxs)(p.Ay, {
                variant: e_ ? p.Z5.RELATIVE : p.Z5.OVERLAY,
                children: [!e_ && (0, r.jsx)(p.ns, {
                    scrollPosition: i
                }), el ? (0, r.jsx)(U, {
                    applicationId: F,
                    hideDetailHeaderButtons: $,
                    onClickBack: eb
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [ei ? (0, r.jsx)(p.XQ, {
                        icon: c.Zge,
                        onClick: eb
                    }) : (0, r.jsx)(p.T4, {
                        icon: c.k9F
                    }), ei ? (0, r.jsx)(c.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: G.wL,
                        children: null != z && "" !== z ? M.intl.formatToPlainString(M.t.zHdzqW, {
                            query: z
                        }) : M.intl.formatToPlainString(M.t.Qhj5Br, {
                            categoryName: null != (e = null == Z ? void 0 : Z.name) ? e : M.intl.string(M.t.E407b7)
                        })
                    }) : (0, r.jsx)(h.A, {
                        tabs: Q,
                        selectedTab: J,
                        onTabSelect: em,
                        onAvailableWidthChange: eu
                    }), (0, r.jsx)(m.A, {
                        query: ea,
                        placeholder: M.intl.string(M.t["5h0QOP"]),
                        onTextChange: es,
                        onClear: eo,
                        onSubmit: ec,
                        onCollapsedClick: ep,
                        state: ed,
                        onBlur: eh
                    })]
                })]
            }), el ? (0, r.jsx)(T.A, {
                onScroll: e => ex(e, E.ev.APPLICATION),
                onSelectApplication: eg,
                applicationId: F,
                initialTab: Y,
                onButtonsVisibilityChange: ee
            }) : ei ? (0, r.jsx)(D.A, {
                onSelectApplication: eg,
                onScroll: e => ex(e, E.ev.SEARCH)
            }) : J === w.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString() ? (0, r.jsx)(L.A, {
                onScroll: e => ex(e, E.ev.HOME),
                onSelectApplication: eg
            }) : (0, r.jsx)(N.A, {
                tabId: Number(J),
                onScroll: e => ex(e, E.ev.CATEGORY),
                onSelectApplication: eg
            })]
        })]
    })
}