/** chunk id: 28025 params = (module,exports,require) **/
n.d(t, {
    x: () => s
}), n(323874), n(14289), n(35956);
var i = n(627968);
n(64700);
var a = n(873263),
    l = n(435220),
    r = n(652215);

function s() {
    let e = new URLSearchParams(location.search),
        t = e.get("q"),
        n = e.get("category_id");
    return e.delete("page"), (0, i.jsxs)(a.dO, {
        children: [null != n && null == t ? (0, i.jsx)(a.rd, {
            path: r.BVt.APPLICATION_DIRECTORY_SEARCH,
            to: `${r.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(`${n}`)}`
        }) : (0, i.jsx)(a.rd, {
            path: r.BVt.APPLICATION_DIRECTORY_SEARCH,
            to: `${r.BVt.GLOBAL_DISCOVERY_APPS_SEARCH}?${e.toString()}`
        }), (0, i.jsx)(a.rd, {
            path: r.BVt.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(":applicationId", ":skuId"),
            to: r.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId")
        }), (0, i.jsx)(a.rd, {
            path: r.BVt.APPLICATION_DIRECTORY_PROFILE_SECTION(":applicationId", l.ApplicationDirectoryProfileSections.STORE),
            to: r.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(":applicationId", l.GlobalDiscoveryAppsSections.STORE)
        }), (0, i.jsx)(a.rd, {
            path: r.BVt.APPLICATION_DIRECTORY_PROFILE_SECTION(":applicationId", l.ApplicationDirectoryProfileSections.PREMIUM_DEPRECATED),
            to: r.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(":applicationId", l.GlobalDiscoveryAppsSections.STORE)
        }), (0, i.jsx)(a.rd, {
            path: r.BVt.APPLICATION_DIRECTORY_PROFILE(":applicationId"),
            to: {
                pathname: r.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
                search: location.search
            }
        }), (0, i.jsx)(a.rd, {
            path: r.BVt.APPLICATION_DIRECTORY,
            to: r.BVt.GLOBAL_DISCOVERY_APPS
        })]
    })
}