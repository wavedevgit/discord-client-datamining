/** Chunk was on web.js **/
/** chunk id: 448137, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(110259),
    i = n(311907),
    a = n(139286),
    o = n(989837),
    s = n(520117);

function l(e) {
    let {
        applicationId: t,
        commandId: n,
        searchResultsPosition: l,
        query: c
    } = e, u = (0, i.bG)([o.A], () => o.A.entrypoint()), d = () => {
        (0, a.x)({
            type: r.ImpressionTypes.VIEW,
            name: r.ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM,
            properties: {
                application_id: t,
                command_id: n,
                search_results_position: l,
                query: c,
                source: u
            }
        })
    }, f = 1;
    return {
        trackSearchResultsItemImpressionRef: (0, s.A)({
            onVisible: d,
            threshold: f
        })
    }
}