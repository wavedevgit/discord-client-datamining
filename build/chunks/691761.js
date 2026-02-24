/** chunk id: 691761, original params: e,t,n (module,exports,require) **/
n.d(t, {
    p: () => a
});
var i = n(311907),
    l = n(429913),
    r = n(290863),
    s = n(652215);

function a(e) {
    let t = (0, i.bG)([r.A], () => {
        if (null != e) return function(e) {
            for (let t of e)
                if (t.type === s.$pd.PLAYING && null != t.application_id) return t.application_id;
            return null
        }(r.A.getActivities(e)) ?? void 0
    }, [e]);
    return (0, l.h)(t) ?? void 0
}