/** chunk id: 486318, original params: e,t,n (module,exports,require) **/
n.d(t, {
    N: () => r,
    e: () => i
});
var a = n(397927),
    s = n(871123);

function i(e) {
    let {
        imageUrl: t,
        backgroundImageUrl: n,
        altText: s,
        customClassNames: i
    } = e;
    return {
        type: "dynamic",
        component: a.Oz7.SOCIAL_LAYER_SKU_PREVIEW,
        aspectRatio: "16/9",
        props: {
            imageUrl: t,
            backgroundImageUrl: n,
            altText: s,
            customClassNames: i
        }
    }
}

function r(e) {
    return i({
        imageUrl: (0, s.fq)(e),
        backgroundImageUrl: (0, s.xf)(e),
        altText: e.name
    })
}