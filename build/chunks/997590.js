/** Chunk was on 36290 **/
/** chunk id: 997590, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => h
}), r(638769), r(321073), r(896048), r(735438);
var i, n, o = r(311907),
    a = r(73153),
    s = r(403362),
    l = r(324580),
    c = r(985018);
let d = null,
    _ = [],
    u = [],
    p = {};
class E extends(i = o.Ay.Store) {
    getPrimaryCategories() {
        return _
    }
    getDiscoveryCategories() {
        let e = l.FZ.map(e => u.find(t => t.categoryId === e)).filter(s.Vq);
        return [{
            categoryId: l.Iq,
            name: c.intl.string(c.t.Ym2Ri6)
        }, ...e]
    }
    getClanDiscoveryCategories() {
        let e = l.FZ.map(e => u.find(t => t.categoryId === e)).filter(s.Vq);
        return [{
            categoryId: l.Iq,
            name: c.intl.string(c.t.QToH29)
        }, ...e]
    }
    getAllCategories() {
        return u
    }
    getFetchedLocale() {
        return d
    }
    getCategoryName(e) {
        return e === l.Iq ? c.intl.string(c.t.Ym2Ri6) : p[e]
    }
}(n = "displayName") in E ? Object.defineProperty(E, n, {
    value: "GuildDiscoveryCategoryStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : E[n] = "GuildDiscoveryCategoryStore";
let h = new E(a.h, {
    GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function(e) {
        let t, {
                categories: r,
                locale: i
            } = e,
            n = [],
            o = [];
        if (r.sort((e, t) => e.name < t.name ? -1 : 1).forEach(e => {
                let {
                    id: r,
                    name: i,
                    is_primary: a
                } = e;
                if (r !== l.ig) {
                    if (r === l.v) {
                        t = {
                            categoryId: r,
                            name: i
                        };
                        return
                    }!0 === a && n.push({
                        categoryId: r,
                        name: i
                    }), o.push({
                        categoryId: r,
                        name: i
                    }), p[r] = i
                }
            }), null != t) {
            let {
                categoryId: e,
                name: r
            } = t;
            n.push({
                categoryId: e,
                name: r
            }), p[e] = r
        }
        d = i, _ = n, u = o
    }
})