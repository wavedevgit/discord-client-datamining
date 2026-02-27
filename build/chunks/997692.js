/** chunk id: 997692, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    C: () => c,
    D: () => d
});
var i = n(627968);
n(64700);
var s = n(116833),
    l = n(342494),
    a = n(294726),
    r = n(985018);

function o(e) {
    let {
        title: t,
        body: n,
        ctaText: a,
        runningGameId: r,
        targetElementRef: o,
        onClick: c,
        onClose: d
    } = e;
    return (0, i.jsx)(l.AM, {
        size: "lg",
        title: t,
        body: n,
        graphic: null != r ? {
            type: "dynamic",
            component: s.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
            props: {
                gameId: r
            },
            aspectRatio: "6/4"
        } : void 0,
        actions: [{
            text: a,
            variant: "primary",
            onClick: c
        }],
        targetElementRef: o,
        shouldShow: !0,
        position: "top",
        onRequestClose: d
    })
}

function c(e) {
    let {
        gameName: t,
        ...n
    } = e;
    return (0, i.jsx)(o, {
        title: r.intl.formatToPlainString(a.default.lKzVNu, {
            gameName: t
        }),
        body: r.intl.string(a.default.qqjm8O),
        ctaText: r.intl.string(a.default["eJg+Zm"]),
        ...n
    })
}

function d(e) {
    let {
        gameName: t,
        ...n
    } = e;
    return (0, i.jsx)(o, {
        title: r.intl.formatToPlainString(a.default.lwwiHE, {
            gameName: t
        }),
        body: r.intl.string(a.default.B33GXN),
        ctaText: r.intl.string(a.default["968/QC"]),
        ...n
    })
}