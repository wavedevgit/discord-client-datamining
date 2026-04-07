/** chunk id: 77555 params = (module,exports,require) **/
a.d(t, {
    z: () => c
});
var n = a(627968),
    r = a(64700),
    l = a(837381),
    s = a(397927),
    o = a(928039),
    i = a(61916);

function c(e) {
    let {
        rowData: t,
        message: a,
        originChannel: c,
        selectedDestinations: u,
        handleToggleDestination: d,
        disableSelection: _,
        rowClassName: h,
        ...p
    } = e, {
        sections: f,
        sectionHeight: g,
        renderRow: C,
        rowHeight: b
    } = (0, i.s)({
        rowData: t,
        message: a,
        originChannel: c,
        selectedDestinations: u,
        handleToggleDestination: d,
        disableSelection: _,
        rowClassName: h
    }), m = r.useRef(null), x = (0, o.A)("forward-modal", m);
    return (0, n.jsx)(l.hD, {
        navigator: x,
        children: (0, n.jsx)(l.PR, {
            children: e => {
                let {
                    ref: t,
                    ...a
                } = e;
                return (0, n.jsx)(s.OZj, {
                    ref: e => {
                        m.current = e, t.current = e?.getScrollerNode() ?? null
                    },
                    ...a,
                    ...p,
                    sections: f,
                    sectionHeight: g,
                    renderRow: C,
                    rowHeight: b
                })
            }
        })
    })
}