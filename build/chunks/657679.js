/** chunk id: 657679, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(397927),
    a = n(473169);
let s = e => {
        let {
            element: t,
            onChange: n,
            initialOption: s
        } = e, [o, d] = r.useState("");
        r.useEffect(() => {
            d(null != s ? s : "")
        }, [s]);
        let c = t.name,
            {
                title: u,
                options: m
            } = t.data,
            p = r.useCallback(e => {
                null != e && (d(e), n(e))
            }, [n]);
        return (0, l.jsx)("div", {
            className: a.QB,
            children: (0, l.jsx)(i.l6P, {
                label: u,
                value: o,
                required: t.should_submit_data,
                onSelectionChange: p,
                options: m,
                selectionMode: "single",
                fullWidth: !0
            })
        }, c)
    },
    o = e => {
        let {
            elements: t,
            onChange: n,
            state: r
        } = e, i = t.map(e => {
            var t, i;
            let a = e.name;
            return (0, l.jsx)(s, {
                element: e,
                initialOption: null != (t = null == r || null == (i = r[a]) ? void 0 : i.value) ? t : void 0,
                onChange: e => n(a, e)
            }, a)
        });
        return (0, l.jsx)("div", {
            children: i
        })
    }