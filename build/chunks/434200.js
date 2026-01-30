/** chunk id: 434200, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(64700),
    i = n(311907),
    a = n(882997),
    o = n(962173);

function s(e) {
    let t = (0, i.bG)([o.A], () => o.A.getAccounts().some(t => t.type === e)),
        n = r.useCallback(() => {
            if (null == e) return null;
            (0, a.A)({
                platformType: e,
                location: "Member List Content Popout"
            })
        }, [e]);
    if (null != e) return t ? void 0 : n
}