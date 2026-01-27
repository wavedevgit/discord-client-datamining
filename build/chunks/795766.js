/** Chunk was on 77870 **/
/** chunk id: 795766, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    s = n(58736),
    a = n(181079),
    o = n(422258),
    c = n(93055),
    u = n(616075),
    d = n(515610),
    p = n(985018);

function h(e) {
    let {
        channel: t
    } = e, {
        isFavoritesPerk: n
    } = (0, u.l)("ChannelFavoritesHeaderButton"), h = (0, d.A)(), {
        notifyFavoriteAdded: f
    } = (0, c.CJ)(), g = (0, l.bG)([a.A], () => a.A.isFavorite(t.id));
    if (!n || h) return null;
    let m = g ? i.Gg5 : i.yA2,
        b = g ? p.intl.string(p.t.Bou7lT) : p.intl.string(p.t["4wcdE/"]);
    return (0, r.jsx)(s.Ay.Icon, {
        icon: m,
        tooltip: b,
        "aria-label": b,
        onClick: () => {
            g ? (0, o.i_)(t.id) : (f(), (0, o.Jz)(t.id))
        }
    })
}