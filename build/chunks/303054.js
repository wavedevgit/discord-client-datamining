/** chunk id: 303054 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(397927),
    o = n(930821);

function d(e) {
    let {
        columns: t,
        data: n,
        className: l,
        rowClassName: d,
        onClickRow: c,
        selectedRowKey: u,
        rowHeight: m = 40
    } = e, h = i.useMemo(() => t.map(e => ({
        renderHeader: () => (0, a.jsx)(r.Text, {
            variant: "text-sm/semibold",
            children: e.key
        }),
        ...e
    })), [t]), p = 0 === n.length ? [1] : [n.length];
    return (0, a.jsx)("div", {
        className: o.CZ,
        children: (0, a.jsx)(r.OZj, {
            className: l,
            innerClassName: o.tp,
            sections: p,
            sectionHeight: 40,
            renderSection: e => {
                let {
                    section: t
                } = e, i = o.ZR;
                return (0, a.jsx)("div", {
                    className: i,
                    children: h.map(e => {
                        let i = e.cellClassName,
                            l = {
                                width: `calc(${e.cellWidth??"1fr"} - 16px)`
                            };
                        return (0, a.jsx)("div", {
                            className: i,
                            style: l,
                            children: e.renderHeader?.(e, n)
                        }, `dev-tools-th-${t}-${e.key}`)
                    })
                }, `dev-tools-header-${t}`)
            },
            rowHeight: m,
            renderRow: e => {
                let {
                    rowIndex: t
                } = e, i = n[t];
                if (null == i) return null;
                let l = i.key,
                    p = s()(o.jD, {
                        [o.wD]: l === u,
                        rowClassName: d
                    });
                return (0, a.jsx)(r.DUT, {
                    className: p,
                    onClick: () => c?.(i),
                    children: h.map(e => {
                        let n = e.cellClassName,
                            l = {
                                width: `calc(${e.cellWidth??"1fr"} - 16px)`,
                                height: `calc(${m}px - 16px)`
                            };
                        return (0, a.jsx)("div", {
                            className: n,
                            style: l,
                            children: e.render?.(i, void 0, t)
                        }, `dev-tools-td-${t}-${e.key}`)
                    })
                }, `dev-tools-tr-${t}`)
            }
        })
    })
}