/** chunk id: 504974 params = (module,exports,require) **/
a.d(t, {
    A: () => r
});
var n = a(627968);
a(64700);
var i = a(515598),
    s = a(719335),
    l = a(339984);

function r(e) {
    let {
        type: t,
        analyticsPage: a,
        analyticsSection: r,
        isGIF: o,
        banner: c
    } = e;
    return [l.HL.BANNER, l.HL.AVATAR].includes(t) && o ? (0, n.jsx)(s.A, {
        analyticsSection: r,
        type: t
    }) : t === l.HL.GUILD_BANNER ? (0, n.jsx)(i.A, {
        analyticsSection: r,
        analyticsPage: a,
        isGIF: o,
        banner: c
    }) : null
}