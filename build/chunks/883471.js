/** chunk id: 883471 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var a = n(627968);
n(64700);
var l = n(397927),
    i = n(263063),
    r = n(71393),
    s = n(985018),
    d = n(944666);
let o = e => {
    let {
        stageInstance: t
    } = e, n = r.A.getGuild(t.guild_id);
    return null == n ? null : (0, a.jsxs)("div", {
        className: d.kL,
        children: [(0, a.jsx)(l.Heading, {
            className: d.wx,
            variant: "heading-sm/semibold",
            children: s.intl.string(s.t.InbJ8x)
        }), (0, a.jsxs)("div", {
            className: d.bo,
            children: [(0, a.jsxs)("div", {
                className: d.OA,
                children: [(0, a.jsx)(i.Ay, {
                    guild: n,
                    size: i.Ay.Sizes.MINI,
                    className: d.$f
                }), (0, a.jsx)(l.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: n.name
                })]
            }), (0, a.jsx)(l.Text, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: t.topic
            })]
        })]
    })
}