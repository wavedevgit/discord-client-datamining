/** chunk id: 504974, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => r
});
var n = a(627968);
a(64700);
var i = a(515598),
    c = a(719335),
    o = a(339984);

function r(e) {
    let {
        type: t,
        analyticsPage: a,
        analyticsSection: r,
        isGIF: s,
        banner: l
    } = e;
    return [o.HL.BANNER, o.HL.AVATAR].includes(t) && s ? (0, n.jsx)(c.A, {
        analyticsSection: r,
        type: t
    }) : t === o.HL.GUILD_BANNER ? (0, n.jsx)(i.A, {
        analyticsSection: r,
        analyticsPage: a,
        isGIF: s,
        banner: l
    }) : null
}