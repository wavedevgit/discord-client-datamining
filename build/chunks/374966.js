/** chunk id: 374966 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var a = n(627968);
n(64700);
var l = n(735438),
    i = n(397927),
    r = n(985018),
    s = n(190192),
    d = n(899925);
let o = e => {
    let t = (0, l.flatMap)(e.history, e => {
        let {
            destination: [t],
            multiSelect: n
        } = e, a = [null, null], l = Object.values(n?.state ?? {});
        return l.length > 0 && (a[0] = l.join(", ")), "" !== t && (a[1] = t), a
    }).filter(e => null != e);
    return 0 === t.length ? null : (0, a.jsxs)("div", {
        className: d.kL,
        children: [(0, a.jsx)(i.Heading, {
            className: d.MR,
            color: "text-default",
            variant: "heading-sm/semibold",
            children: e.isModeratorReport ? r.intl.string(s.default["6mx/DP"]) : r.intl.string(r.t["+3V9Tp"])
        }), t.map((e, t) => (0, a.jsxs)("div", {
            className: d.P,
            children: [(0, a.jsx)("div", {
                className: d.RL
            }), (0, a.jsx)(i.Text, {
                variant: "text-md/normal",
                className: d.b,
                children: e
            })]
        }, `${e}+${t}`))]
    })
}