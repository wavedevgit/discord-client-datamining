/** chunk id: 997590 params = (module,exports,require) **/
i.d(t, {
    A: () => x
}), i(321073), i(735438);
var l = i(311907),
    n = i(73153),
    a = i(403362),
    s = i(324580),
    r = i(985018);
let o = null,
    d = [],
    c = [],
    u = {};
class m extends l.Ay.Store {
    static displayName = "GuildDiscoveryCategoryStore";
    getPrimaryCategories() {
        return d
    }
    getDiscoveryCategories() {
        let e = s.FZ.map(e => c.find(t => t.categoryId === e)).filter(a.Vq);
        return [{
            categoryId: s.Iq,
            name: r.intl.string(r.t.Ym2Ri6)
        }, ...e]
    }
    getClanDiscoveryCategories() {
        let e = s.FZ.map(e => c.find(t => t.categoryId === e)).filter(a.Vq);
        return [{
            categoryId: s.Iq,
            name: r.intl.string(r.t.QToH29)
        }, ...e]
    }
    getAllCategories() {
        return c
    }
    getFetchedLocale() {
        return o
    }
    getCategoryName(e) {
        return e === s.Iq ? r.intl.string(r.t.Ym2Ri6) : u[e]
    }
}
let x = new m(n.h, {
    GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function(e) {
        let t, {
                categories: i,
                locale: l
            } = e,
            n = [],
            a = [];
        if (i.sort((e, t) => e.name < t.name ? -1 : 1).forEach(e => {
                let {
                    id: i,
                    name: l,
                    is_primary: r
                } = e;
                if (i !== s.ig) {
                    if (i === s.v) {
                        t = {
                            categoryId: i,
                            name: l
                        };
                        return
                    }!0 === r && n.push({
                        categoryId: i,
                        name: l
                    }), a.push({
                        categoryId: i,
                        name: l
                    }), u[i] = l
                }
            }), null != t) {
            let {
                categoryId: e,
                name: i
            } = t;
            n.push({
                categoryId: e,
                name: i
            }), u[e] = i
        }
        o = l, d = n, c = a
    }
})