/** chunk id: 657679 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(627968),
    a = n(64700),
    r = n(397927),
    i = n(153335);
let s = e => {
        let {
            element: t,
            onChange: n,
            initialOption: s
        } = e, [d, o] = a.useState("");
        a.useEffect(() => {
            o(s ?? "")
        }, [s]);
        let c = t.name,
            {
                title: u,
                options: _
            } = t.data,
            m = a.useMemo(() => _.map(e => ({
                ...e,
                id: e.id ?? e.value
            })), [_]),
            x = a.useCallback(e => {
                null != e && (o(e), n(e))
            }, [n]);
        return (0, l.jsx)("div", {
            className: i.QB,
            children: (0, l.jsx)(r.l6P, {
                label: u,
                value: d,
                required: t.should_submit_data,
                onSelectionChange: x,
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
            state: a
        } = e, r = t.map(e => {
            let t = e.name;
            return (0, l.jsx)(s, {
                element: e,
                initialOption: a?.[t]?.value ?? void 0,
                onChange: e => n(t, e)
            }, t)
        });
        return (0, l.jsx)("div", {
            children: r
        })
    }