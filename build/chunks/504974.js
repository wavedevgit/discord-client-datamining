/** chunk id: 504974 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(627968);
n(64700);
var a = n(515598),
    r = n(719335),
    o = n(339984);

function s(e) {
    let {
        type: t,
        analyticsPage: n,
        analyticsSection: s,
        isGIF: l,
        banner: c
    } = e;
    return [o.HL.BANNER, o.HL.AVATAR].includes(t) && l ? (0, i.jsx)(r.A, {
        analyticsSection: s,
        type: t
    }) : t === o.HL.GUILD_BANNER ? (0, i.jsx)(a.A, {
        analyticsSection: s,
        analyticsPage: n,
        isGIF: l,
        banner: c
    }) : null
}