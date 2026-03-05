/** chunk id: 12613, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(627968);
n(64700);
var a = n(158954),
    r = n(397927),
    i = n(746305);
let s = e => {
        let {
            onChange: t,
            label: n,
            subtitle: r,
            selected: s
        } = e;
        return (0, l.jsx)("div", {
            className: i.yc,
            children: (0, l.jsx)(a.Sc0, {
                checked: s,
                onChange: t,
                label: n,
                description: r
            })
        })
    },
    d = e => {
        let {
            element: t,
            title: n,
            state: a,
            onChange: d
        } = e;
        if (t?.type !== "checkbox") return null;
        let {
            data: o
        } = t;
        return (0, l.jsxs)("div", {
            children: [null != n && (0, l.jsxs)(r.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                className: i.DD,
                children: [n, t.should_submit_data && (0, l.jsx)("span", {
                    className: i.mw,
                    children: "*"
                })]
            }), o.map((e, t) => {
                let [n, r, i] = e;
                return (0, l.jsx)(s, {
                    onChange: () => d(n, r),
                    selected: n in a,
                    label: r,
                    subtitle: i
                }, `${t}+button`)
            })]
        })
    }