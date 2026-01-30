/** chunk id: 717612, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var l = n(627968);
n(64700);
var r = n(397927),
    i = n(263063),
    a = n(734057),
    s = n(71393),
    o = n(985018),
    d = n(611090);
let c = e => {
    let {
        entry: t
    } = e, n = a.A.getChannel(t.channelId);
    if (null == n) return null;
    let c = s.A.getGuild(n.guild_id);
    return null == c ? null : (0, l.jsxs)("div", {
        className: d.kL,
        children: [(0, l.jsx)(r.Heading, {
            className: d.wx,
            variant: "heading-sm/semibold",
            children: o.intl.string(o.t.nTe4HC)
        }), (0, l.jsxs)("div", {
            className: d.bo,
            children: [(0, l.jsxs)("div", {
                className: d.mo,
                children: [(0, l.jsx)(i.A, {
                    guild: c,
                    size: i.A.Sizes.MINI,
                    className: d.xG
                }), (0, l.jsx)(r.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: c.name
                })]
            }), (0, l.jsx)(r.Text, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: t.name
            })]
        })]
    })
}