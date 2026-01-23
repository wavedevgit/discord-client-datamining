/** Chunk was on 58652 **/
/** chunk id: 325272, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    a = n(263063),
    s = n(71393),
    o = n(985018),
    d = n(715134);
let c = e => {
    let {
        event: t
    } = e, n = (0, r.bG)([s.A], () => s.A.getGuild(t.guild_id));
    return null == n ? null : (0, l.jsxs)("div", {
        className: d.kL,
        children: [(0, l.jsx)(i.Heading, {
            className: d.wx,
            variant: "heading-sm/semibold",
            children: o.intl.string(o.t.SDTOL7)
        }), (0, l.jsxs)("div", {
            className: d.bo,
            children: [(0, l.jsxs)("div", {
                className: d.OA,
                children: [(0, l.jsx)(a.A, {
                    guild: n,
                    size: a.A.Sizes.MINI,
                    className: d.$f
                }), (0, l.jsx)(i.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: n.name
                })]
            }), (0, l.jsx)(i.Text, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: t.name
            })]
        })]
    })
}