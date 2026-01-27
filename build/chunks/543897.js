/** Chunk was on 77870 **/
/** chunk id: 543897, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(321073);
var r, l, i = n(311907),
    s = n(73153);
let a = [];
class o extends(r = i.Ay.Store) {
    getGeoRestrictedGuilds() {
        return a
    }
}(l = "displayName") in o ? Object.defineProperty(o, l, {
    value: "GeoRestrictedGuildStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : o[l] = "GeoRestrictedGuildStore";
let c = new o(s.h, {
    CONNECTION_OPEN: function(e) {
        a = e.geoRestrictedGuilds
    },
    GUILD_DELETE: function(e) {
        let {
            guild: t
        } = e;
        if (-1 === a.findIndex(e => e.id === t.id)) return !1;
        a = a.filter(e => e.id !== t.id)
    },
    GUILD_GEO_RESTRICTED: function(e) {
        let t = a.filter(t => t.id !== e.guildId);
        t.push({
            id: e.guildId,
            name: e.name,
            icon: e.icon,
            unavailable: !0,
            geo_restricted: !0
        }), a = t
    }
})