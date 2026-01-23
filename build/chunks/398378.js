/** Chunk was on 16864 **/
/** chunk id: 398378, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    K: () => o
});
var n = r(64700),
    a = r(475743),
    s = r(954571),
    i = r(21251),
    l = r(652215);

function o(e) {
    let t = (0, a.A)(e);
    n.useEffect(() => {
        if (e === t) return;
        let r = null;
        "user-code-input" !== e.type && "handoff" !== e.type && (r = (0, i.i)(e.userCodeData.clientId)), s.default.track(l.HAw.DEVICE_LINK_STEP, {
            previous_step: null == t ? void 0 : t.type,
            current_step: e.type,
            platform_type: r
        })
    }, [t, e])
}