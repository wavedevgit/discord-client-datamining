/** chunk id: 997590 params = (module,exports,require) **/
l.d(t, {
    A: () => g
}), l(321073), l(735438);
var n = l(311907),
    i = l(73153),
    a = l(403362),
    s = l(324580),
    r = l(985018);
let c = null,
    u = [],
    d = [],
    o = {};
class m extends n.Ay.Store {
    static displayName = "GuildDiscoveryCategoryStore";
    getPrimaryCategories() {
        return u
    }
    getDiscoveryCategories() {
        let e = s.FZ.map(e => d.find(t => t.categoryId === e)).filter(a.Vq);
        return [{
            categoryId: s.Iq,
            name: r.intl.string(r.t.Ym2Ri6)
        }, ...e]
    }
    getClanDiscoveryCategories() {
        let e = s.FZ.map(e => d.find(t => t.categoryId === e)).filter(a.Vq);
        return [{
            categoryId: s.Iq,
            name: r.intl.string(r.t.QToH29)
        }, ...e]
    }
    getAllCategories() {
        return d
    }
    getFetchedLocale() {
        return c
    }
    getCategoryName(e) {
        return e === s.Iq ? r.intl.string(r.t.Ym2Ri6) : o[e]
    }
}
let g = new m(i.h, {
    GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function(e) {
        let t, {
                categories: l,
                locale: n
            } = e,
            i = [],
            a = [];
        if (l.sort((e, t) => e.name < t.name ? -1 : 1).forEach(e => {
                let {
                    id: l,
                    name: n,
                    is_primary: r
                } = e;
                if (l !== s.ig) {
                    if (l === s.v) {
                        t = {
                            categoryId: l,
                            name: n
                        };
                        return
                    }!0 === r && i.push({
                        categoryId: l,
                        name: n
                    }), a.push({
                        categoryId: l,
                        name: n
                    }), o[l] = n
                }
            }), null != t) {
            let {
                categoryId: e,
                name: l
            } = t;
            i.push({
                categoryId: e,
                name: l
            }), o[e] = l
        }
        c = n, u = i, d = a
    }
})