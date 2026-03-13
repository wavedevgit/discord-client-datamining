/** chunk id: 77555 params = (module,exports,require) **/
n.d(t, {
    z: () => c
});
var a = n(627968),
    l = n(64700),
    r = n(837381),
    s = n(397927),
    o = n(928039),
    i = n(61916);

function c(e) {
    let {
        rowData: t,
        message: n,
        originChannel: c,
        selectedDestinations: u,
        handleToggleDestination: d,
        disableSelection: _,
        rowClassName: h,
        ...b
    } = e, {
        sections: p,
        sectionHeight: f,
        renderRow: m,
        rowHeight: g
    } = (0, i.s)({
        rowData: t,
        message: n,
        originChannel: c,
        selectedDestinations: u,
        handleToggleDestination: d,
        disableSelection: _,
        rowClassName: h
    }), C = l.useRef(null), k = (0, o.A)("forward-modal", C);
    return (0, a.jsx)(r.hD, {
        navigator: k,
        children: (0, a.jsx)(r.PR, {
            children: e => {
                let {
                    ref: t,
                    ...n
                } = e;
                return (0, a.jsx)(s.OZj, {
                    ref: e => {
                        C.current = e, t.current = e?.getScrollerNode() ?? null
                    },
                    ...n,
                    ...b,
                    sections: p,
                    sectionHeight: f,
                    renderRow: m,
                    rowHeight: g
                })
            }
        })
    })
}