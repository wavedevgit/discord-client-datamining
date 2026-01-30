/** chunk id: 465842, original params: t,e,s (module,exports,require) **/
s.d(e, {
    K: () => r
});
var l = s(562465),
    n = s(73153),
    a = s(568004),
    i = s(652215);
async function r(t, e, s, r) {
    if (a.A.needsToFetchBuildSize(s)) {
        n.h.dispatch({
            type: "APPLICATION_BUILD_SIZE_FETCH_START",
            buildId: s
        });
        try {
            let a = await l.Bo.post({
                url: i.Rsh.APPLICATION_BUILD_SIZE(t, e, s),
                body: {
                    manifest_ids: r
                },
                oldFormErrors: !0,
                rejectWithError: !0
            });
            n.h.dispatch({
                type: "APPLICATION_BUILD_SIZE_FETCH_SUCCESS",
                buildId: s,
                sizeKB: a.body.size_kb
            })
        } catch (t) {
            n.h.dispatch({
                type: "APPLICATION_BUILD_SIZE_FETCH_FAIL",
                buildId: s
            })
        }
    }
}