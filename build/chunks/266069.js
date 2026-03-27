/** chunk id: 266069 params = (module,exports,require) **/
"use strict";
n.d(t, {
    u: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(827734),
    c = n(435371),
    d = n(397927),
    u = n(242919),
    h = n(985018),
    A = n(661720),
    m = n(945375);

function _(e) {
    let {
        label: t,
        icon: n,
        setStatus: l,
        isFavorited: _,
        onFavoriteClick: g
    } = e, [p, f] = s.useState(!1), x = (0, r.bG)([u.A], () => u.A.getFavoritedStatuses().length >= u.x), C = null != g, E = s.useCallback(e => {
        e.stopPropagation(), g?.()
    }, [g]), I = _ ? d.Gg5 : d.yA2;
    return (0, i.jsxs)(d.DUT, {
        onClick: l,
        onMouseEnter: () => {
            f(!0)
        },
        onMouseLeave: () => {
            f(!1)
        },
        className: a()(m.item, m.labelContainer, A.kL),
        children: [(0, i.jsx)("div", {
            className: A.P0,
            children: n
        }), (0, i.jsx)(d.Text, {
            variant: "text-md/normal",
            className: A.rv,
            children: t
        }), p && C && (0, i.jsx)(c.m_, {
            text: x && !_ ? h.intl.string(h.t.YSDH9n) : void 0,
            children: (0, i.jsx)(d.DUT, {
                className: a()(A.ff, A.wB),
                onClick: E,
                children: (0, i.jsx)(I, {
                    className: A.ut,
                    color: _ ? o.A.colors.ICON_FEEDBACK_WARNING : "currentColor"
                })
            })
        })]
    })
}