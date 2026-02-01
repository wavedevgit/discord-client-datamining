/** chunk id: 266069, original params: e,t,n (module,exports,require) **/
n.d(t, {
    u: () => f
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(827734),
    c = n(435371),
    u = n(397927),
    d = n(242919),
    p = n(985018),
    h = n(519501),
    g = n(658122);

function f(e) {
    let {
        label: t,
        icon: n,
        setStatus: i,
        isFavorited: f,
        onFavoriteClick: m
    } = e, [b, A] = l.useState(!1), y = (0, a.bG)([d.A], () => d.A.getFavoritedStatuses().length >= d.x), O = null != m, j = l.useCallback(e => {
        e.stopPropagation(), null == m || m()
    }, [m]), x = f ? u.Gg5 : u.yA2;
    return (0, r.jsxs)(u.DUT, {
        onClick: i,
        onMouseEnter: () => {
            A(!0)
        },
        onMouseLeave: () => {
            A(!1)
        },
        className: s()(g.item, g.labelContainer, h.kL),
        children: [(0, r.jsx)("div", {
            children: n
        }), (0, r.jsx)(u.Text, {
            variant: "text-md/normal",
            className: h.rv,
            children: t
        }), b && O && (0, r.jsx)(c.m_, {
            text: y && !f ? p.intl.string(p.t.YSDH9n) : void 0,
            children: (0, r.jsx)(u.DUT, {
                className: s()(h.ff, h.wB),
                onClick: j,
                children: (0, r.jsx)(x, {
                    className: h.ut,
                    color: f ? o.A.colors.ICON_FEEDBACK_WARNING : "currentColor"
                })
            })
        })]
    })
}