/** chunk id: 504974 params = (module,exports,require) **/
n.d(e, {
    A: () => s
});
var i = n(627968);
n(64700);
var a = n(515598),
    o = n(719335),
    r = n(339984);

function s(t) {
    let {
        type: e,
        analyticsPage: n,
        analyticsSection: s,
        isGIF: l,
        banner: A
    } = t;
    return [r.HL.BANNER, r.HL.AVATAR].includes(e) && l ? (0, i.jsx)(o.A, {
        analyticsSection: s,
        type: e
    }) : e === r.HL.GUILD_BANNER ? (0, i.jsx)(a.A, {
        analyticsSection: s,
        analyticsPage: n,
        isGIF: l,
        banner: A
    }) : null
}