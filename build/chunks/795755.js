/** chunk id: 795755 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var a = n(540185),
    l = n(311907),
    s = n(961350),
    r = n(735321),
    o = n(483558),
    d = n(34442),
    c = n(253798),
    u = n(25530),
    g = n(155400),
    m = n(844206),
    h = n(557964),
    x = n(987140),
    p = n(286981);

function f(e) {
    let {
        widget: t,
        ...n
    } = e;
    switch (t.type) {
        case a.x.FAVORITE_GAMES:
            return (0, i.jsx)(g.A, {
                widget: t,
                ...n
            });
        case a.x.CURRENT_GAMES:
            return (0, i.jsx)(u.A, {
                widget: t,
                ...n
            });
        case a.x.WANT_TO_PLAY_GAMES:
            return (0, i.jsx)(h.A, {
                widget: t,
                ...n
            });
        case a.x.PLAYED_GAMES:
            return (0, i.jsx)(m.A, {
                widget: t,
                ...n
            });
        default:
            return null
    }
}

function A(e) {
    let {
        widget: t,
        user: n,
        disableInteraction: a,
        ...u
    } = e, {
        setExpanded: g
    } = (0, c.B)(), {
        shouldShowSuggestions: m,
        handleDismissSuggestions: h
    } = (0, o.q)(t), A = (0, l.bG)([s.default], () => s.default.getId() === n.id), _ = A && !a && m, I = (0, r.L)(t), j = (0, r.FM)(t, {
        isCurrentUser: A
    }), v = (0, r.uA)(t), b = 1 === (0, r.cv)(t.type);
    return (0, i.jsx)(f, {
        widget: t,
        user: n,
        disableInteraction: a,
        headerTitle: I,
        headerSubtitle: j,
        headerActionButtons: A && !b ? [(0, i.jsx)(d.IU, {
            disabled: v,
            widgetType: t.type,
            widget: t,
            onAddGame: () => g(!0)
        }, `${t.type}-browse-games-popout`)] : void 0,
        trailingContent: _ && (0, i.jsx)(x.A, {
            userId: n.id,
            widgetType: t.type,
            onDismiss: h,
            className: p.r
        }),
        ...u
    })
}

function _(e) {
    let {
        widget: t,
        ...n
    } = e;
    return (0, i.jsx)(c.M, {
        widgetType: t.type,
        children: (0, i.jsx)(A, {
            widget: t,
            ...n
        })
    })
}