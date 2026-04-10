/** chunk id: 12613 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var a = n(627968);
n(64700);
var l = n(158954),
    i = n(397927),
    r = n(556924);
let s = e => {
        let {
            onChange: t,
            label: n,
            subtitle: i,
            selected: s
        } = e;
        return (0, a.jsx)("div", {
            className: r.yc,
            children: (0, a.jsx)(l.Sc0, {
                checked: s,
                onChange: t,
                label: n,
                description: i
            })
        })
    },
    d = e => {
        let {
            element: t,
            title: n,
            state: l,
            onChange: d
        } = e;
        if (t?.type !== "checkbox") return null;
        let {
            data: o
        } = t;
        return (0, a.jsxs)("div", {
            children: [null != n && (0, a.jsxs)(i.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                className: r.DD,
                children: [n, t.should_submit_data && (0, a.jsx)("span", {
                    className: r.mw,
                    children: "*"
                })]
            }), o.map((e, t) => {
                let [n, i, r] = e;
                return (0, a.jsx)(s, {
                    onChange: () => d(n, i),
                    selected: n in l,
                    label: i,
                    subtitle: r
                }, `${t}+button`)
            })]
        })
    }