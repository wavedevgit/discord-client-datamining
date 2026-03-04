/** chunk id: 549367, original params: e,t,s (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => d
});
var n = s(627968),
    r = s(64700),
    l = s(641150),
    i = s(397927),
    a = s(365491),
    o = s(856686),
    c = s(985018);

function d() {
    let {
        itemTypeFilters: e,
        searchQuery: t
    } = (0, a.v)(e => e), {
        totalCount: s,
        isFetchingResults: d
    } = (0, o.S)(), u = (0, a.v)(e => e.hasFilters()), _ = r.useCallback(() => {
        if (!u) return "";
        if (d) return c.intl.string(c.t["/FaMSE"]);
        if ("" !== t) {
            let e = t.length > 40 ? `${t.slice(0,40)}...` : t;
            return c.intl.format(c.t.KJMJOz, {
                count: s,
                search: e
            })
        }
        return 1 === e.size && e.has(l.q.AVATAR_DECORATION) ? c.intl.format(c.t.s1UzGQ, {
            count: s
        }) : 1 === e.size && e.has(l.q.NAMEPLATE) ? c.intl.format(c.t.ZWGN9T, {
            count: s
        }) : 1 === e.size && e.has(l.q.PROFILE_EFFECT) ? c.intl.format(c.t["v/7apu"], {
            count: s
        }) : 1 === e.size && e.has(l.q.BUNDLE) ? c.intl.format(c.t.fZ1rdk, {
            count: s
        }) : c.intl.format(c.t["/rPvmQ"], {
            count: s
        })
    }, [e, s, u, t, d]);
    return (0, n.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        children: _()
    })
}