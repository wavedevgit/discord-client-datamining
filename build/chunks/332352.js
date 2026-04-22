/** chunk id: 332352 params = (module,exports,require) **/
l.d(t, {
    A: () => A
});
var n = l(627968),
    s = l(64700),
    i = l(503698),
    a = l.n(i),
    r = l(517738),
    d = l(417597),
    o = l(397927),
    c = l(343969),
    u = l(266047),
    x = l(189552),
    m = l(508160),
    h = l(749060),
    j = l(374963),
    _ = l(494213);

function g(e) {
    let {
        guild: t
    } = e, l = (0, c.Ms)(t.id), s = (0, o.zhh)({
        height: 3 * !!l,
        config: r.config.stiff
    });
    return (0, n.jsx)("div", {
        className: _.NQ,
        children: (0, n.jsx)(r.animated.div, {
            className: _.b0,
            style: s
        })
    })
}

function A(e) {
    let {
        guild: t,
        className: l,
        onPageChange: i,
        onMemberSelect: r
    } = e, A = t.id, f = (0, d.bG)([u.A], () => u.A.getEstimatedMemberSearchCountByGuildId(A), [A]), b = (0, c.Ms)(A), v = (0, c.Wl)(A), T = s.useCallback(e => {
        null != e && r?.(e)
    }, [r]), N = (0, x.ii)(v, b, f), E = s.useRef(null), S = s.useRef(null), C = s.useCallback(() => {
        E.current?.resetSearchText()
    }, []);
    return (0, n.jsx)("div", {
        className: a()(_.FV, l),
        children: (0, n.jsxs)(o.T7Y, {
            className: _.A0,
            ref: S,
            orientation: "horizontal",
            children: [(0, n.jsx)(j.A, {
                guild: t,
                ref: E
            }), (0, n.jsx)(g, {
                guild: t
            }), (0, n.jsx)(m.A, {
                guild: t,
                onSelectRow: T,
                searchState: N,
                onResetForNewMembers: C
            }), N !== x.IY.SUCCESS_STILL_INDEXING && (0, n.jsx)(h.A, {
                guildId: t.id,
                onPageChange: i
            })]
        })
    })
}