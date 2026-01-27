/** Chunk was on 87916 **/
/** chunk id: 504974, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var a = n(627968);
n(64700);
var i = n(515598),
    l = n(719335),
    r = n(339984);

function s(e) {
    let {
        type: t,
        analyticsPage: n,
        analyticsSection: s,
        isGIF: o,
        banner: c
    } = e;
    return [r.HL.BANNER, r.HL.AVATAR].includes(t) && o ? (0, a.jsx)(l.A, {
        analyticsSection: s,
        type: t
    }) : t === r.HL.GUILD_BANNER ? (0, a.jsx)(i.A, {
        analyticsSection: s,
        analyticsPage: n,
        isGIF: o,
        banner: c
    }) : null
}