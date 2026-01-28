/** Chunk was on 87916 **/
/** chunk id: 504974, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => l
});
var a = n(627968);
n(64700);
var i = n(515598),
    s = n(719335),
    r = n(339984);

function l(e) {
    let {
        type: t,
        analyticsPage: n,
        analyticsSection: l,
        isGIF: o,
        banner: c
    } = e;
    return [r.HL.BANNER, r.HL.AVATAR].includes(t) && o ? (0, a.jsx)(s.A, {
        analyticsSection: l,
        type: t
    }) : t === r.HL.GUILD_BANNER ? (0, a.jsx)(i.A, {
        analyticsSection: l,
        analyticsPage: n,
        isGIF: o,
        banner: c
    }) : null
}