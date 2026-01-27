/** Chunk was on web.js **/
/** chunk id: 860923, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(64700),
    i = n(311907),
    a = n(73153),
    o = n(418126),
    s = n(998740);
let l = () => {
    let e = (0, i.bG)([s.A], () => s.A.assets);
    return r.useEffect(() => {
        let t = async () => {
            let e = await o.Ay.getAssets();
            null != e && a.h.dispatch({
                type: "HAVEN_GOT_ASSETS",
                assets: e.body
            })
        };
        null == e && t()
    }, [e]), e
}