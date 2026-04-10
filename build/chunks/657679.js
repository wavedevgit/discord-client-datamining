/** chunk id: 657679 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(885106);
let s = e => {
        let {
            element: t,
            onChange: n,
            initialOption: s
        } = e, [d, o] = l.useState("");
        l.useEffect(() => {
            o(s ?? "")
        }, [s]);
        let c = t.name,
            {
                title: u,
                options: _
            } = t.data,
            m = l.useMemo(() => _.map(e => ({
                ...e,
                id: e.id ?? e.value
            })), [_]),
            p = l.useCallback(e => {
                null != e && (o(e), n(e))
            }, [n]);
        return (0, a.jsx)("div", {
            className: r.QB,
            children: (0, a.jsx)(i.l6P, {
                label: u,
                value: d,
                required: t.should_submit_data,
                onSelectionChange: p,
                options: m,
                selectionMode: "single",
                fullWidth: !0
            })
        }, c)
    },
    d = e => {
        let {
            elements: t,
            onChange: n,
            state: l
        } = e, i = t.map(e => {
            let t = e.name;
            return (0, a.jsx)(s, {
                element: e,
                initialOption: l?.[t]?.value ?? void 0,
                onChange: e => n(t, e)
            }, t)
        });
        return (0, a.jsx)("div", {
            children: i
        })
    }