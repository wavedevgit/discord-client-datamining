/** chunk id: 549367, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var r = n(627968),
    l = n(64700),
    s = n(641150),
    a = n(397927),
    i = n(365491),
    o = n(856686),
    c = n(985018);

function u() {
    let {
        itemTypeFilters: e,
        searchQuery: t
    } = (0, i.v)(e => e), {
        totalCount: n,
        isFetchingResults: u
    } = (0, o.S)(), d = (0, i.v)(e => e.hasFilters()), g = l.useCallback(() => {
        if (!d) return "";
        if (u) return c.intl.string(c.t["/FaMSE"]);
        if ("" !== t) {
            let e = t.length > 40 ? "".concat(t.slice(0, 40), "...") : t;
            return c.intl.format(c.t.KJMJOz, {
                count: n,
                search: e
            })
        }
        return 1 === e.size && e.has(s.q.AVATAR_DECORATION) ? c.intl.format(c.t.s1UzGQ, {
            count: n
        }) : 1 === e.size && e.has(s.q.NAMEPLATE) ? c.intl.format(c.t.ZWGN9T, {
            count: n
        }) : 1 === e.size && e.has(s.q.PROFILE_EFFECT) ? c.intl.format(c.t["v/7apu"], {
            count: n
        }) : 1 === e.size && e.has(s.q.BUNDLE) ? c.intl.format(c.t.fZ1rdk, {
            count: n
        }) : c.intl.format(c.t["/rPvmQ"], {
            count: n
        })
    }, [e, n, d, t, u]);
    return (0, r.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: g()
    })
}