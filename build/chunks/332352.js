/** Chunk was on 99583 **/
/** chunk id: 332352, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => g
});
var n = l(627968),
    r = l(64700),
    i = l(503698),
    s = l.n(i),
    a = l(108531),
    o = l(417597),
    c = l(397927),
    d = l(343969),
    u = l(266047),
    x = l(189552),
    m = l(508160),
    j = l(749060),
    b = l(374963),
    h = l(663282);

function f(e) {
    let {
        guild: t
    } = e, l = (0, d.Ms)(t.id), r = (0, c.zhh)({
        height: 3 * !!l,
        config: a.config.stiff
    });
    return (0, n.jsx)("div", {
        className: h.NQ,
        children: (0, n.jsx)(a.animated.div, {
            className: h.b0,
            style: r
        })
    })
}

function g(e) {
    let {
        guild: t,
        className: l,
        onPageChange: i,
        onMemberSelect: a
    } = e, g = t.id, v = (0, o.bG)([u.A], () => u.A.getEstimatedMemberSearchCountByGuildId(g), [g]), _ = (0, d.Ms)(g), A = (0, d.Wl)(g), p = r.useCallback(e => {
        null != e && (null == a || a(e))
    }, [a]), S = (0, x.ii)(A, _, v), T = r.useRef(null), E = r.useRef(null), y = r.useCallback(() => {
        var e;
        null == (e = T.current) || e.resetSearchText()
    }, []);
    return (0, n.jsx)("div", {
        className: s()(h.FV, l),
        children: (0, n.jsxs)(c.T7Y, {
            className: h.A0,
            ref: E,
            orientation: "horizontal",
            children: [(0, n.jsx)(b.A, {
                guild: t,
                ref: T
            }), (0, n.jsx)(f, {
                guild: t
            }), (0, n.jsx)(m.A, {
                guild: t,
                onSelectRow: p,
                searchState: S,
                onResetForNewMembers: y
            }), S !== x.IY.SUCCESS_STILL_INDEXING && (0, n.jsx)(j.A, {
                guildId: t.id,
                onPageChange: i
            })]
        })
    })
}