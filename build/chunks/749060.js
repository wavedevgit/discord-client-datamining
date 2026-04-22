/** chunk id: 749060 params = (module,exports,require) **/
l.d(t, {
    A: () => x
});
var n = l(627968),
    i = l(64700),
    s = l(417597),
    a = l(990078),
    C = l(397927),
    r = l(233693),
    o = l(343969),
    d = l(266047),
    c = l(221950),
    u = l(985018),
    m = l(639075);

function x(e) {
    let {
        guildId: t,
        onPageChange: l
    } = e, [x, h] = i.useTransition(), g = (0, s.bG)([d.A], () => d.A.getEstimatedMemberSearchCountByGuildId(t), [t]), H = (0, s.cf)([d.A], () => d.A.getPaginationStateByGuildId(t), [t]), p = (0, o.Ms)(t), j = i.useMemo(() => r.MO.map(e => ({
        id: e.toString(),
        value: e,
        label: Number(e).toLocaleString()
    })), []), _ = new Intl.NumberFormat(u.intl.currentLocale).format(g), f = u.intl.formatToPlainString(u.t["RNDnQ/"], {
        count: p ? "..." : _
    }), b = g > H.pageSize || p, A = g > r.MO["0"];
    return (0, n.jsxs)("div", {
        className: m.Ej,
        children: [(0, n.jsx)("div", {
            className: m.PO,
            children: A ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(C.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: u.intl.string(u.t.jNwLu2)
                }), (0, n.jsx)(C.l6P, {
                    selectionMode: "single",
                    label: f,
                    hideLabel: !0,
                    options: j,
                    value: H.pageSize,
                    onSelectionChange: e => {
                        h(() => {
                            (0, c.Cw)(t, {
                                ...H,
                                pageSize: e
                            })
                        })
                    }
                }), (0, n.jsx)(a.m, {
                    text: u.intl.string(u.t.ZTNur7),
                    shouldShow: p,
                    children: (0, n.jsx)(C.Text, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        className: m.Qh,
                        children: f
                    })
                })]
            }) : (0, n.jsx)(C.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: u.intl.format(u.t.GZpwME, {
                    count: g
                })
            })
        }), (0, n.jsx)("div", {
            className: m.X$,
            children: b && (0, n.jsx)(C.mgR, {
                className: m.JV,
                totalCount: g,
                pageSize: H.pageSize,
                disablePaginationGap: !0,
                hideMaxPage: !0,
                currentPage: H.currentPage,
                onPageChange: e => {
                    l?.(e), requestIdleCallback(() => {
                        h(() => {
                            (0, c.Cw)(t, {
                                ...H,
                                currentPage: e
                            })
                        })
                    })
                },
                maxVisiblePages: r.NB
            })
        })]
    })
}