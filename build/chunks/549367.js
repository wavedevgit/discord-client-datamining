/** chunk id: 549367, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var s = n(627968),
    l = n(64700),
    r = n(641150),
    a = n(397927),
    i = n(365491),
    o = n(856686),
    c = n(985018);

function d() {
    let {
        itemTypeFilters: e,
        searchQuery: t
    } = (0, i.v)(e => e), {
        totalCount: n,
        isFetchingResults: d
    } = (0, o.S)(), u = (0, i.v)(e => e.hasFilters()), g = l.useCallback(() => {
        if (!u) return "";
        if (d) return c.intl.string(c.t["/FaMSE"]);
        if ("" !== t) {
            let e = t.length > 40 ? `${t.slice(0,40)}...` : t;
            return c.intl.format(c.t.KJMJOz, {
                count: n,
                search: e
            })
        }
        return 1 === e.size && e.has(r.q.AVATAR_DECORATION) ? c.intl.format(c.t.s1UzGQ, {
            count: n
        }) : 1 === e.size && e.has(r.q.NAMEPLATE) ? c.intl.format(c.t.ZWGN9T, {
            count: n
        }) : 1 === e.size && e.has(r.q.PROFILE_EFFECT) ? c.intl.format(c.t["v/7apu"], {
            count: n
        }) : 1 === e.size && e.has(r.q.BUNDLE) ? c.intl.format(c.t.fZ1rdk, {
            count: n
        }) : c.intl.format(c.t["/rPvmQ"], {
            count: n
        })
    }, [e, n, u, t, d]);
    return (0, s.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: g()
    })
}