/** Chunk was on 12236 **/
/** chunk id: 374966, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(896048);
var l = n(627968);
n(64700);
var r = n(735438),
    i = n(397927),
    a = n(985018),
    s = n(641131),
    o = n(821596);
let d = e => {
    let t = (0, r.flatMap)(e.history, e => {
        var t;
        let {
            destination: [n],
            multiSelect: l
        } = e, r = [null, null], i = Object.values(null != (t = null == l ? void 0 : l.state) ? t : {});
        return i.length > 0 && (r[0] = i.join(", ")), "" !== n && (r[1] = n), r
    }).filter(e => null != e);
    return 0 === t.length ? null : (0, l.jsxs)("div", {
        className: o.kL,
        children: [(0, l.jsx)(i.Heading, {
            className: o.MR,
            color: "text-default",
            variant: "heading-sm/semibold",
            children: e.isModeratorReport ? a.intl.string(s.default["6mx/DP"]) : a.intl.string(a.t["+3V9Tp"])
        }), t.map((e, t) => (0, l.jsxs)("div", {
            className: o.P,
            children: [(0, l.jsx)("div", {
                className: o.RL
            }), (0, l.jsx)(i.Text, {
                variant: "text-md/normal",
                className: o.b,
                children: e
            })]
        }, "".concat(e, "+").concat(t)))]
    })
}