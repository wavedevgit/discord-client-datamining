/** chunk id: 107005, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Z: () => u
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(379848),
    a = n(49999),
    o = n(985018),
    c = n(784001);
let d = e => {
        let {
            markAsDismissed: t
        } = e;
        return i.useEffect(() => t(a.i.UNKNOWN), [t]), (0, r.jsx)(l.LpS, {
            className: c.Ad,
            text: o.intl.string(o.t.y2b7CA)
        })
    },
    u = e => {
        let {
            title: t,
            body: n,
            img: i,
            newIndicatorDismissibleContent: a,
            onClick: u
        } = e;
        return (0, r.jsxs)("div", {
            className: c.kL,
            children: [i, (0, r.jsxs)("div", {
                className: c.FS,
                children: [(0, r.jsxs)("div", {
                    className: c.TK,
                    children: [(0, r.jsx)(s.Ay, {
                        contentTypes: [a],
                        children: e => {
                            let {
                                visibleContent: t,
                                markAsDismissed: n
                            } = e;
                            return t === a ? (0, r.jsx)(d, {
                                markAsDismissed: n
                            }) : null
                        }
                    }), (0, r.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        children: t
                    })]
                }), (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    children: n
                })]
            }), (0, r.jsx)(l.Button, {
                text: o.intl.string(o.t.vD60Pv),
                onClick: u
            })]
        })
    }