/** chunk id: 269849 params = (module,exports,require) **/
n.d(t, {
    o: () => l
}), n(64700);
var r = n(621466),
    i = n(644447),
    a = n(369254),
    o = n(256905);

function l(e, t, n) {
    let l = {},
        _ = {};
    for (let [s, c] of e.entries()) {
        let d = (0, i.E)({
            proxyURL: c.proxyUrl,
            url: c.url
        });
        l[d] = i => (function(e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                a = arguments.length > 4 ? arguments[4] : void 0;
            e.preventDefault(), (0, r.vq)(e.currentTarget) && e.currentTarget.blur(), (0, o.R)({
                ...i,
                items: t,
                startingIndex: n,
                location: a ?? "zoomedMediaModalHelper"
            })
        })(i, e, s, t, n), _[d] = () => (0, a.Z5)(c, e.length > 1)
    }
    return {
        srcToOnClickOverride: l,
        srcToHandlePreloadImage: _
    }
}