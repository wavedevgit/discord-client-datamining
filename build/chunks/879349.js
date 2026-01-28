/** Chunk was on 78528 **/
/** chunk id: 879349, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    s = n(713654),
    a = n(71393),
    o = n(234021);

function c(e) {
    let {
        channel: t
    } = e, n = (0, l.bG)([a.A], () => a.A.getGuild(t.guild_id)), c = (0, s.gU)(t, n);
    return null == c ? null : (0, r.jsxs)("div", {
        className: o.hY,
        children: [(0, r.jsx)(c, {
            className: o.p
        }), (0, r.jsx)(i.Text, {
            variant: "text-md/semibold",
            color: "interactive-text-default",
            className: o.HA,
            children: t.name
        })]
    })
}