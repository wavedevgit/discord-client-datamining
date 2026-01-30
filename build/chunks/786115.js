/** chunk id: 786115, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var r = n(64700),
    i = n(110259),
    a = n(311907),
    o = n(139286),
    s = n(989837),
    l = n(520117);
let c = 1e3;

function u(e) {
    let {
        applicationId: t,
        applicationFlags: n,
        sectionName: u,
        sectionPosition: d,
        sectionOverallPosition: f,
        promotionalLabel: p,
        numFriendsWhoPlay: _
    } = e, h = (0, a.bG)([s.A], () => s.A.entrypoint()), m = r.useCallback(() => {
        (0, o.x)({
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.APP_LAUNCHER_ITEM,
            properties: {
                application_id: t,
                application_flags: n,
                section_name: u,
                section_position: d,
                section_overall_position: f,
                source: h,
                promotional_label: p,
                num_friends_who_play: _
            }
        })
    }, [_]), g = .5;
    return {
        trackItemImpressionRef: (0, l.A)({
            onVisible: m,
            threshold: g,
            minTimeVisibleMs: c
        })
    }
}