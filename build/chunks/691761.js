/** chunk id: 691761 params = (module,exports,require) **/
n.d(t, {
    p: () => a
});
var i = n(311907),
    r = n(429913),
    l = n(290863),
    s = n(652215);

function a(e) {
    let t = (0, i.bG)([l.A], () => {
        if (null != e) return function(e) {
            for (let t of e)
                if (t.type === s.$pd.PLAYING && null != t.application_id) return t.application_id;
            return null
        }(l.A.getActivities(e)) ?? void 0
    }, [e]);
    return (0, r.h)(t) ?? void 0
}