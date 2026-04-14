/** chunk id: 269849 params = (module,exports,require) **/
n.d(t, {
    o: () => _
}), n(64700);
var r = n(621466),
    i = n(644447),
    a = n(369254),
    o = n(256905);

function _(e, t, n) {
    let _ = {},
        l = {};
    for (let [c, d] of e.entries()) {
        let s = (0, i.E)({
            proxyURL: d.proxyUrl,
            url: d.url
        });
        _[s] = i => (function(e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                a = arguments.length > 4 ? arguments[4] : void 0;
            e.preventDefault(), (0, r.vq)(e.currentTarget) && e.currentTarget.blur(), (0, o.R)({
                ...i,
                items: t,
                startingIndex: n,
                location: a ?? "zoomedMediaModalHelper"
            })
        })(i, e, c, t, n), l[s] = () => (0, a.Z)(d, e.length > 1)
    }
    return {
        srcToOnClickOverride: _,
        srcToHandlePreloadImage: l
    }
}