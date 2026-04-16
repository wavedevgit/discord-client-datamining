/** chunk id: 504974 params = (module,exports,require) **/
i.d(e, {
    A: () => l
});
var a = i(627968);
i(64700);
var n = i(515598),
    r = i(719335),
    s = i(339984);

function l(t) {
    let {
        type: e,
        analyticsPage: i,
        analyticsSection: l,
        isGIF: o,
        banner: d
    } = t;
    return [s.HL.BANNER, s.HL.AVATAR].includes(e) && o ? (0, a.jsx)(r.A, {
        analyticsSection: l,
        type: e
    }) : e === s.HL.GUILD_BANNER ? (0, a.jsx)(n.A, {
        analyticsSection: l,
        analyticsPage: i,
        isGIF: o,
        banner: d
    }) : null
}