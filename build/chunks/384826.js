/** chunk id: 384826 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(518977),
    s = n(153335);
let d = e => {
    let {
        element: t,
        onChange: n,
        state: d
    } = e, o = t.name, {
        title: c,
        options: u
    } = t.data, _ = d?.[o]?.value ?? void 0, [m, p] = a.useState(_);
    a.useEffect(() => {
        p(_)
    }, [_]);
    let h = a.useMemo(() => u.map(e => {
            let t = e.label;
            try {
                t = (0, r.Gw)(e.value)
            } catch {}
            return {
                id: e.id ?? e.value,
                value: e.value,
                label: t
            }
        }).sort((e, t) => e.label.localeCompare(t.label)), [u]),
        x = a.useCallback(e => {
            null != e && (p(e), n(o, e))
        }, [n, o]);
    return (0, l.jsx)("div", {
        className: s.QB,
        children: (0, l.jsx)(i.ZiE, {
            label: c,
            value: m,
            required: t.should_submit_data,
            onSelectionChange: x,
            options: h,
            selectionMode: "single",
            maxOptionsVisible: 4,
            fullWidth: !0
        })
    })
}