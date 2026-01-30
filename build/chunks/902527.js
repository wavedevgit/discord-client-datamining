/** chunk id: 902527, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(110259),
    i = n(139286),
    a = n(989837),
    o = n(520117);

function s(e) {
    let {
        sectionName: t,
        numItems: n,
        numVisibleItems: s
    } = e, l = () => {
        (0, i.x)({
            type: r.ImpressionTypes.VIEW,
            name: r.ImpressionNames.APP_LAUNCHER_SECTION,
            properties: {
                section_name: t,
                num_items: n,
                num_visible_items: s,
                source: a.A.entrypoint()
            }
        })
    }, c = 1;
    return {
        trackSectionImpressionRef: (0, o.A)({
            onVisible: l,
            threshold: c
        })
    }
}