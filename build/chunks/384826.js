/** chunk id: 384826, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(518977),
    s = n(473169);
let d = e => {
    let {
        element: t,
        onChange: n,
        state: d
    } = e, o = t.name, {
        title: u,
        options: c
    } = t.data, _ = d?.[o]?.value ?? void 0, [m, x] = a.useState(_);
    a.useEffect(() => {
        x(_)
    }, [_]);
    let p = a.useMemo(() => c.map(e => {
            let t = e.label;
            try {
                t = (0, r.Gw)(e.value)
            } catch {}
            return {
                id: e.id ?? e.value,
                value: e.value,
                label: t
            }
        }).sort((e, t) => e.label.localeCompare(t.label)), [c]),
        g = a.useCallback(e => {
            null != e && (x(e), n(o, e))
        }, [n, o]);
    return (0, l.jsx)("div", {
        className: s.QB,
        children: (0, l.jsx)(i.ZiE, {
            label: u,
            value: m,
            required: t.should_submit_data,
            onSelectionChange: g,
            options: p,
            selectionMode: "single",
            fullWidth: !0
        })
    })
}