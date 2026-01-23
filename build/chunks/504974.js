/** Chunk was on 94073 **/
/** chunk id: 504974, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => l
});
var r = n(627968);
n(64700);
var a = n(515598),
    o = n(719335),
    i = n(339984);

function l(e) {
    let {
        type: t,
        analyticsPage: n,
        analyticsSection: l,
        isGIF: s,
        banner: c
    } = e;
    return [i.HL.BANNER, i.HL.AVATAR].includes(t) && s ? (0, r.jsx)(o.A, {
        analyticsSection: l,
        type: t
    }) : t === i.HL.GUILD_BANNER ? (0, r.jsx)(a.A, {
        analyticsSection: l,
        analyticsPage: n,
        isGIF: s,
        banner: c
    }) : null
}