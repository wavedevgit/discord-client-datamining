/** chunk id: 717612 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var l = n(627968);
n(64700);
var a = n(397927),
    r = n(263063),
    i = n(734057),
    s = n(71393),
    d = n(985018),
    o = n(309704);
let c = e => {
    let {
        entry: t
    } = e, n = i.A.getChannel(t.channelId);
    if (null == n) return null;
    let c = s.A.getGuild(n.guild_id);
    return null == c ? null : (0, l.jsxs)("div", {
        className: o.kL,
        children: [(0, l.jsx)(a.Heading, {
            className: o.wx,
            variant: "heading-sm/semibold",
            children: d.intl.string(d.t.nTe4HC)
        }), (0, l.jsxs)("div", {
            className: o.bo,
            children: [(0, l.jsxs)("div", {
                className: o.mo,
                children: [(0, l.jsx)(r.Ay, {
                    guild: c,
                    size: r.Ay.Sizes.MINI,
                    className: o.xG
                }), (0, l.jsx)(a.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: c.name
                })]
            }), (0, l.jsx)(a.Text, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: t.name
            })]
        })]
    })
}