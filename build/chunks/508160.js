/** Chunk was on 35894 **/
/** chunk id: 508160, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => R
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    o = n.n(i),
    a = n(812729),
    s = n.n(a),
    c = n(417597),
    u = n(192308),
    d = n(397927),
    C = n(775602),
    m = n(688810),
    p = n(996439),
    b = n(218394),
    f = n(504049),
    j = n(266047),
    g = n(221950),
    h = n(809617),
    x = n(189552),
    y = n(89092),
    O = n(402218),
    v = n(17864),
    _ = n(650583),
    H = n(160654);
let w = {
        transform: "translate3d(15%, 0, 0)",
        opacity: .3
    },
    A = {
        transform: "translate3d(5%, 0, 0)",
        opacity: .5
    },
    S = {
        transform: "translate3d(0, 0, 0)",
        opacity: 1
    },
    D = {
        mass: 1.1,
        friction: 24,
        tension: 260
    },
    N = e => e.shiftKey || e.key === _.dh.SHIFT,
    L = e => e.metaKey || e.ctrlKey || ["Meta", "Control"].includes(e.key),
    P = l.memo(function(e) {
        let {
            members: t,
            guild: n,
            className: i,
            searchState: a,
            compact: s,
            onSelectRow: m,
            onResetForNewMembers: p
        } = e, f = (0, c.bG)([C.A], () => C.A.useReducedMotion), _ = (0, u.useHasAnyModalOpen)(), P = (0, b.j)(), [R, V] = l.useState(!1), [E, M] = l.useState(!1), I = !_ && R && E;
        l.useEffect(() => {
            P || (V(!1), M(!1))
        }, [P]), l.useLayoutEffect(() => {
            let e = e => {
                    N(e) && V(!0), L(e) && M(!0)
                },
                t = e => {
                    N(e) && V(!1), L(e) && M(!1)
                };
            return window.addEventListener("keydown", e), window.addEventListener("keyup", t), () => {
                window.removeEventListener("keydown", e), window.removeEventListener("keyup", t)
            }
        }, []), l.useEffect(() => {
            (0, g.jo)(n.id, t)
        }, [n.id, t]);
        let T = t.length > 30,
            Z = (0, d.pnh)(t, {
                key: e => e,
                trail: T ? 5 : 15,
                from(e) {
                    let t = j.A.getEnhancedMember(n.id, e),
                        r = j.A.getLastRefreshTimestamp(n.id),
                        l = null == t || 0 === r,
                        i = null != t && t.refreshTimestamp === r;
                    return l || !i ? S : T ? A : w
                },
                enter: S,
                config: D
            }),
            k = !f && a === x.IY.LOADING;
        return (0, r.jsxs)("table", {
            className: o()(H.tp, i),
            children: [(0, r.jsx)(y.A, {
                guildId: n.id,
                currentPagedMembers: t
            }), (0, r.jsx)("tbody", {
                children: a === x.IY.SUCCESS_FULL || a === x.IY.LOADING ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(v.A, {
                        guild: n,
                        onSubmit: p
                    }), Z((e, t) => (0, r.jsx)(O.A, {
                        userId: t,
                        guildId: n.id,
                        style: e,
                        onSelect: m,
                        isHoldingAdvancedInfoKey: I,
                        compact: s,
                        isLoading: k
                    }, t))]
                }) : (0, r.jsx)("td", {
                    colSpan: 7,
                    children: (0, r.jsx)(h.A, {
                        searchState: a
                    })
                })
            })]
        })
    }, function(e, t) {
        let n = s()(e.members, t.members),
            r = e.guild.id === t.guild.id,
            l = e.searchState === t.searchState,
            i = e.compact === t.compact;
        return n && r && l && i
    }),
    R = function(e) {
        var t, n;
        let {
            guild: i,
            className: o,
            searchState: a,
            compact: s,
            onSelectRow: u,
            onResetForNewMembers: d
        } = e, C = (0, c.cf)([j.A], () => j.A.getPaginationStateByGuildId(i.id), [i.id]), [b] = (0, c.bG)([j.A], () => j.A.getPagedMembersByGuildId(i.id), [i.id], p.D);
        l.useEffect(() => {
            (0, g.uO)(i.id)
        }, [i.id]);
        let h = l.useDeferredValue(null != (t = b[C.currentPage]) ? t : []),
            {
                analyticsLocations: x
            } = (0, m.Ay)(),
            y = null != (n = null == x ? void 0 : x[0]) ? n : null;
        return l.useEffect(() => {
            (0, f.KW)(i.id, y)
        }, [i.id, y]), (0, r.jsx)(P, {
            members: h,
            guild: i,
            className: o,
            searchState: a,
            compact: s,
            onSelectRow: u,
            onResetForNewMembers: d
        })
    }