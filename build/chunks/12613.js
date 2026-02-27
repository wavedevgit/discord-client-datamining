/** chunk id: 12613, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var l = n(627968);
n(64700);
var a = n(158954),
    r = n(746305);
let i = e => {
        let {
            onChange: t,
            label: n,
            subtitle: i,
            selected: s
        } = e;
        return (0, l.jsx)("div", {
            className: r.y,
            children: (0, l.jsx)(a.Sc0, {
                checked: s,
                onChange: t,
                label: n,
                description: i
            })
        })
    },
    s = e => {
        let {
            element: t,
            state: n,
            onChange: a
        } = e;
        if (t?.type !== "checkbox") return null;
        let {
            data: r
        } = t;
        return (0, l.jsx)("div", {
            children: r.map((e, t) => {
                let [r, s, d] = e;
                return (0, l.jsx)(i, {
                    onChange: () => a(r, s),
                    selected: r in n,
                    label: s,
                    subtitle: d
                }, `${t}+button`)
            })
        })
    }