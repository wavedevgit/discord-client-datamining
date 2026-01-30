/** chunk id: 12613, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
}), n(896048);
var l = n(627968);
n(64700);
var r = n(158954),
    i = n(746305);
let a = e => {
        let {
            onChange: t,
            label: n,
            subtitle: a,
            selected: s
        } = e;
        return (0, l.jsx)("div", {
            className: i.y,
            children: (0, l.jsx)(r.Sc0, {
                checked: s,
                onChange: t,
                label: n,
                description: a
            })
        })
    },
    s = e => {
        let {
            element: t,
            state: n,
            onChange: r
        } = e;
        if ((null == t ? void 0 : t.type) !== "checkbox") return null;
        let {
            data: i
        } = t;
        return (0, l.jsx)("div", {
            children: i.map((e, t) => {
                let [i, s, o] = e;
                return (0, l.jsx)(a, {
                    onChange: () => r(i, s),
                    selected: i in n,
                    label: s,
                    subtitle: o
                }, "".concat(t, "+button"))
            })
        })
    }