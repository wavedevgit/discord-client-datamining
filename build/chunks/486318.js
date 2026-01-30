/** Chunk was on 80307 **/
/** chunk id: 486318, original params: t,i,a (module,exports,require) **/
a.d(i, {
    N: () => r,
    e: () => l
});
var n = a(397927),
    e = a(871123);

function l(t) {
    let {
        imageUrl: i,
        backgroundImageUrl: a,
        altText: e,
        customClassNames: l
    } = t;
    return {
        type: "dynamic",
        component: n.Oz7.SOCIAL_LAYER_SKU_PREVIEW,
        aspectRatio: "16/9",
        props: {
            imageUrl: i,
            backgroundImageUrl: a,
            altText: e,
            customClassNames: l
        }
    }
}

function r(t) {
    return l({
        imageUrl: (0, e.fq)(t),
        backgroundImageUrl: (0, e.xf)(t),
        altText: t.name
    })
}