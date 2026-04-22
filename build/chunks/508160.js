/** chunk id: 508160 params = (module,exports,require) **/
l.d(t, {
    A: () => Z
});
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    C = l(812729),
    r = l.n(C),
    o = l(417597),
    d = l(192308),
    c = l(397927),
    u = l(775602),
    m = l(688810),
    x = l(996439),
    h = l(218394),
    g = l(879408),
    H = l(504049),
    p = l(266047),
    j = l(221950),
    _ = l(470348),
    f = l(809617),
    b = l(189552),
    A = l(89092),
    v = l(402218),
    V = l(17864),
    L = l(650583),
    D = l(985018),
    R = l(5979);
let M = {
        transform: "translate3d(15%, 0, 0)",
        opacity: .3
    },
    N = {
        transform: "translate3d(5%, 0, 0)",
        opacity: .5
    },
    S = {
        transform: "translate3d(0, 0, 0)",
        opacity: 1
    },
    E = {
        mass: 1.1,
        friction: 24,
        tension: 260
    },
    I = e => e.shiftKey || e.key === L.dh.SHIFT,
    y = e => e.metaKey || e.ctrlKey || ["Meta", "Control"].includes(e.key),
    T = i.memo(function(e) {
        let {
            members: t,
            guild: l,
            className: s,
            searchState: C,
            compact: r,
            onSelectRow: m,
            onResetForNewMembers: x
        } = e, H = (0, o.bG)([u.A], () => u.A.useReducedMotion), {
            usePubSub: L
        } = (0, _.r)({
            location: "MembersTable"
        }), T = (0, o.bG)([g.A], () => g.A.hasPendingBulkBan(l.id), [l.id]), Z = L && T, U = (0, d.useHasAnyModalOpen)(), w = (0, h.j)(), [O, k] = i.useState(!1), [F, B] = i.useState(!1), P = !U && O && F;
        i.useEffect(() => {
            w || (k(!1), B(!1))
        }, [w]), i.useLayoutEffect(() => {
            let e = e => {
                    I(e) && k(!0), y(e) && B(!0)
                },
                t = e => {
                    I(e) && k(!1), y(e) && B(!1)
                };
            return window.addEventListener("keydown", e), window.addEventListener("keyup", t), () => {
                window.removeEventListener("keydown", e), window.removeEventListener("keyup", t)
            }
        }, []), i.useEffect(() => {
            (0, j.jo)(l.id, t)
        }, [l.id, t]);
        let G = t.length > 30,
            Y = (0, c.pnh)(t, {
                key: e => e,
                trail: G ? 5 : 15,
                from(e) {
                    let t = p.A.getEnhancedMember(l.id, e),
                        n = p.A.getLastRefreshTimestamp(l.id),
                        i = null == t || 0 === n,
                        s = null != t && t.refreshTimestamp === n;
                    return i || !s ? S : G ? N : M
                },
                enter: S,
                config: E
            }),
            q = !H && C === b.IY.LOADING;
        return (0, n.jsxs)("table", {
            className: a()(R.tp, s),
            children: [(0, n.jsx)(A.A, {
                guildId: l.id,
                currentPagedMembers: t
            }), Z && (0, n.jsx)("tbody", {
                children: (0, n.jsx)("tr", {
                    children: (0, n.jsx)("td", {
                        colSpan: 99,
                        className: R.cg,
                        children: (0, n.jsxs)("div", {
                            className: R.pZ,
                            children: [(0, n.jsx)("div", {
                                className: R.sj,
                                children: (0, n.jsx)("div", {
                                    className: R.S0
                                })
                            }), (0, n.jsx)(c.wx6, {
                                type: "info",
                                children: D.intl.string(D.t["UP+9QZ"])
                            })]
                        })
                    })
                })
            }), (0, n.jsx)("tbody", {
                className: a()({
                    [R.u6]: Z
                }),
                children: C === b.IY.SUCCESS_FULL || C === b.IY.LOADING ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(V.A, {
                        guild: l,
                        onSubmit: x
                    }), Y((e, t) => (0, n.jsx)(v.A, {
                        userId: t,
                        guildId: l.id,
                        style: e,
                        onSelect: m,
                        isHoldingAdvancedInfoKey: P,
                        compact: r,
                        isLoading: q
                    }, t))]
                }) : (0, n.jsx)("td", {
                    colSpan: 7,
                    children: (0, n.jsx)(f.A, {
                        searchState: C
                    })
                })
            })]
        })
    }, function(e, t) {
        let l = r()(e.members, t.members),
            n = e.guild.id === t.guild.id,
            i = e.searchState === t.searchState,
            s = e.compact === t.compact;
        return l && n && i && s
    }),
    Z = function(e) {
        let {
            guild: t,
            className: l,
            searchState: s,
            compact: a,
            onSelectRow: C,
            onResetForNewMembers: r
        } = e, d = (0, o.cf)([p.A], () => p.A.getPaginationStateByGuildId(t.id), [t.id]), [c] = (0, o.bG)([p.A], () => p.A.getPagedMembersByGuildId(t.id), [t.id], x.D);
        i.useEffect(() => {
            (0, j.uO)(t.id)
        }, [t.id]);
        let u = i.useDeferredValue(c[d.currentPage] ?? []),
            {
                analyticsLocations: h
            } = (0, m.Ay)(),
            g = h?.[0] ?? null;
        return i.useEffect(() => {
            (0, H.KW)(t.id, g)
        }, [t.id, g]), (0, n.jsx)(T, {
            members: u,
            guild: t,
            className: l,
            searchState: s,
            compact: a,
            onSelectRow: C,
            onResetForNewMembers: r
        })
    }