/** chunk id: 533129, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    WL: () => r,
    np: () => a,
    tx: () => l
});
var i = n(954571),
    s = n(652215);

function l(e) {
    let {
        selectedTab: t
    } = e;
    i.default.track(s.HAw.GLOBAL_DISCOVERY_VIEWED, {
        selected_tab: t
    })
}

function a(e) {
    let {
        selectedCategoryId: t
    } = e;
    i.default.track(s.HAw.GLOBAL_DISCOVERY_SERVERS_VIEWED, {
        selected_category_id: t
    })
}

function r(e) {
    let {
        source: t
    } = e;
    i.default.track(s.HAw.GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED, {
        source: t
    })
}