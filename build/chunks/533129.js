/** Chunk was on 77870 **/
/** chunk id: 533129, original params: e,t,n (module,exports,require) **/
n.d(t, {
    WL: () => a,
    np: () => s,
    tx: () => i
});
var r = n(954571),
    l = n(652215);

function i(e) {
    let {
        selectedTab: t
    } = e;
    r.default.track(l.HAw.GLOBAL_DISCOVERY_VIEWED, {
        selected_tab: t
    })
}

function s(e) {
    let {
        selectedCategoryId: t
    } = e;
    r.default.track(l.HAw.GLOBAL_DISCOVERY_SERVERS_VIEWED, {
        selected_category_id: t
    })
}

function a(e) {
    let {
        source: t
    } = e;
    r.default.track(l.HAw.GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED, {
        source: t
    })
}