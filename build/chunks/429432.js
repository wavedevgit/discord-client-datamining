/** chunk id: 429432, original params: e,t,r (module,exports,require) **/
r.d(t, {
    s: () => c
});
var s = r(311907),
    i = r(250105),
    n = r(217222),
    l = r(128319);
let a = {
        smarterSourceOrdering: !1
    },
    o = (0, i.Ay)({
        name: "2025-08-go-live-source-ordering",
        kind: "user",
        defaultConfig: a,
        variations: {
            1: {
                ...a,
                smarterSourceOrdering: !0
            }
        }
    });

function c(e) {
    let {
        location: t
    } = e;
    return (0, s.bG)([n.A], () => (function(e) {
        let {
            location: t
        } = e, {
            isInHoldout: r
        } = l.p.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: !0
        });
        return r ? o.definition.defaultConfig : o.getConfig({
            location: t
        })
    })({
        location: t
    }))
}