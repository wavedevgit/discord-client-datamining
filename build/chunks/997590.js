/** chunk id: 997590, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => x
}), i(321073), i(735438);
var l = i(311907),
    n = i(73153),
    s = i(403362),
    a = i(324580),
    r = i(985018);
let d = null,
    c = [],
    o = [],
    u = {};
class m extends l.Ay.Store {
    static displayName = "GuildDiscoveryCategoryStore";
    getPrimaryCategories() {
        return c
    }
    getDiscoveryCategories() {
        let e = a.FZ.map(e => o.find(t => t.categoryId === e)).filter(s.Vq);
        return [{
            categoryId: a.Iq,
            name: r.intl.string(r.t.Ym2Ri6)
        }, ...e]
    }
    getClanDiscoveryCategories() {
        let e = a.FZ.map(e => o.find(t => t.categoryId === e)).filter(s.Vq);
        return [{
            categoryId: a.Iq,
            name: r.intl.string(r.t.QToH29)
        }, ...e]
    }
    getAllCategories() {
        return o
    }
    getFetchedLocale() {
        return d
    }
    getCategoryName(e) {
        return e === a.Iq ? r.intl.string(r.t.Ym2Ri6) : u[e]
    }
}
let x = new m(n.h, {
    GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function(e) {
        let t, {
                categories: i,
                locale: l
            } = e,
            n = [],
            s = [];
        if (i.sort((e, t) => e.name < t.name ? -1 : 1).forEach(e => {
                let {
                    id: i,
                    name: l,
                    is_primary: r
                } = e;
                if (i !== a.ig) {
                    if (i === a.v) {
                        t = {
                            categoryId: i,
                            name: l
                        };
                        return
                    }!0 === r && n.push({
                        categoryId: i,
                        name: l
                    }), s.push({
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
        d = l, c = n, o = s
    }
})