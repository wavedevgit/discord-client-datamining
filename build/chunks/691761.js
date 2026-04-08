/** chunk id: 691761 params = (module,exports,require) **/
n.d(t, {
    p: () => l
});
var i = n(311907),
    a = n(429913),
    r = n(290863),
    s = n(652215);

function l(e) {
    let t = (0, i.bG)([r.A], () => {
        if (null != e) return function(e) {
            for (let t of e)
                if (t.type === s.$pd.PLAYING && null != t.application_id) return t.application_id;
            return null
        }(r.A.getActivities(e)) ?? void 0
    }, [e]);
    return (0, a.h)(t) ?? void 0
}