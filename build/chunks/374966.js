/** chunk id: 374966 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var l = n(627968);
n(64700);
var a = n(735438),
    r = n(397927),
    i = n(985018),
    s = n(221314),
    d = n(660261);
let o = e => {
    let t = (0, a.flatMap)(e.history, e => {
        let {
            destination: [t],
            multiSelect: n
        } = e, l = [null, null], a = Object.values(n?.state ?? {});
        return a.length > 0 && (l[0] = a.join(", ")), "" !== t && (l[1] = t), l
    }).filter(e => null != e);
    return 0 === t.length ? null : (0, l.jsxs)("div", {
        className: d.kL,
        children: [(0, l.jsx)(r.Heading, {
            className: d.MR,
            color: "text-default",
            variant: "heading-sm/semibold",
            children: e.isModeratorReport ? i.intl.string(s.default["6mx/DP"]) : i.intl.string(i.t["+3V9Tp"])
        }), t.map((e, t) => (0, l.jsxs)("div", {
            className: d.P,
            children: [(0, l.jsx)("div", {
                className: d.RL
            }), (0, l.jsx)(r.Text, {
                variant: "text-md/normal",
                className: d.b,
                children: e
            })]
        }, `${e}+${t}`))]
    })
}