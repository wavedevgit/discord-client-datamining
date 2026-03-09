/** chunk id: 120791 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(961350),
    s = n(823016),
    r = n(507247),
    o = n(750492),
    d = n(253798),
    c = n(622249),
    u = n(676526),
    m = n(192);

function g(e) {
    let {
        games: t,
        ...n
    } = e, {
        registerItemRef: l,
        manageFocusOnDelete: a
    } = (0, s.r)();
    return (0, i.jsx)(r.A, {
        games: t,
        renderGame: (e, t) => (0, i.jsx)(u.h, {
            index: t,
            game: e,
            coverRef: l(e.applicationId),
            onRemoveGame: a,
            ...n
        })
    })
}

function x(e) {
    let {
        userId: t,
        widgetType: n,
        disableInteraction: r,
        games: u
    } = e, x = (0, l.bG)([a.default], () => a.default.getId() === t), {
        getManageButtonForWidget: f
    } = (0, m.r)(), p = f(n), {
        expanded: h,
        setExpanded: _
    } = (0, d.B)(), A = h ? u : u.slice(0, 8), I = u.length > 8, j = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(g, {
            ...e,
            games: A
        }), I && (0, i.jsx)(c.A, {
            expanded: h,
            onClick: () => _(e => !e)
        })]
    });
    return x && !r ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(o.A, {
            widgetType: n,
            gameCount: u.length
        }), (0, i.jsx)(s.B, {
            emptyListFallbackRef: p,
            children: j
        })]
    }) : j
}