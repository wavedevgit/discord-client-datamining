/** chunk id: 120791 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var a = n(311907),
    l = n(961350),
    s = n(823016),
    r = n(507247),
    o = n(750492),
    d = n(253798),
    c = n(622249),
    u = n(676526),
    g = n(192);

function m(e) {
    let {
        games: t,
        ...n
    } = e, {
        registerItemRef: a,
        manageFocusOnDelete: l
    } = (0, s.r)();
    return (0, i.jsx)(r.A, {
        games: t,
        renderGame: (e, t) => (0, i.jsx)(u.h, {
            index: t,
            game: e,
            coverRef: a(e.applicationId),
            onRemoveGame: l,
            ...n
        })
    })
}

function h(e) {
    let {
        userId: t,
        widgetType: n,
        disableInteraction: r,
        games: u
    } = e, h = (0, a.bG)([l.default], () => l.default.getId() === t), {
        getManageButtonForWidget: x
    } = (0, g.r)(), p = x(n), {
        expanded: f,
        setExpanded: A
    } = (0, d.B)(), _ = f ? u : u.slice(0, 8), I = u.length > 8, j = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(m, {
            ...e,
            games: _
        }), I && (0, i.jsx)(c.A, {
            expanded: f,
            onClick: () => A(e => !e)
        })]
    });
    return h && !r ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(o.A, {
            widgetType: n,
            gameCount: u.length
        }), (0, i.jsx)(s.B, {
            emptyListFallbackRef: p,
            children: j
        })]
    }) : j
}