/** Chunk was on 92917 **/
/** chunk id: 486318, original params: e,t,n (module,exports,require) **/
n.d(t, {
    N: () => a,
    e: () => l
});
var r = n(397927),
    i = n(871123);

function l(e) {
    let {
        imageUrl: t,
        backgroundImageUrl: n,
        altText: i,
        customClassNames: l
    } = e;
    return {
        type: "dynamic",
        component: r.Oz7.SOCIAL_LAYER_SKU_PREVIEW,
        aspectRatio: "16/9",
        props: {
            imageUrl: t,
            backgroundImageUrl: n,
            altText: i,
            customClassNames: l
        }
    }
}

function a(e) {
    return l({
        imageUrl: (0, i.fq)(e),
        backgroundImageUrl: (0, i.xf)(e),
        altText: e.name
    })
}