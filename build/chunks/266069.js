/** Chunk was on 1113 **/
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
    h = n(985018),
    p = n(519501),
    g = n(658122);

function f(e) {
    let {
        label: t,
        icon: n,
        setStatus: i,
        isFavorited: f,
        onFavoriteClick: m
    } = e, [b, A] = l.useState(!1), y = (0, a.bG)([d.A], () => d.A.getFavoritedStatuses().length >= d.x), O = null != m, _ = l.useCallback(e => {
        e.stopPropagation(), null == m || m()
    }, [m]), j = f ? u.Gg5 : u.yA2;
    return (0, r.jsxs)(u.DUT, {
        onClick: i,
        onMouseEnter: () => {
            A(!0)
        },
        onMouseLeave: () => {
            A(!1)
        },
        className: s()(g.item, g.labelContainer, p.kL),
        children: [(0, r.jsx)("div", {
            children: n
        }), (0, r.jsx)(u.Text, {
            variant: "text-md/normal",
            className: p.rv,
            children: t
        }), b && O && (0, r.jsx)(c.m_, {
            text: y && !f ? h.intl.string(h.t.YSDH9n) : void 0,
            children: (0, r.jsx)(u.DUT, {
                className: s()(p.ff, p.wB),
                onClick: _,
                children: (0, r.jsx)(j, {
                    className: p.ut,
                    color: f ? o.A.colors.ICON_FEEDBACK_WARNING : "currentColor"
                })
            })
        })]
    })
}