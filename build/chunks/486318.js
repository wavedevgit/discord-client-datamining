/** chunk id: 486318, original params: t,a,i (module,exports,require) **/
i.d(a, {
    N: () => r,
    e: () => l
});
var n = i(397927),
    e = i(871123);

function l(t) {
    let {
        imageUrl: a,
        backgroundImageUrl: i,
        altText: e,
        customClassNames: l
    } = t;
    return {
        type: "dynamic",
        component: n.Oz7.SOCIAL_LAYER_SKU_PREVIEW,
        aspectRatio: "16/9",
        props: {
            imageUrl: a,
            backgroundImageUrl: i,
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