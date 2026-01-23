/** Chunk was on 34078 **/
/** chunk id: 148864, original params: e,t,r (module,exports,require) **/
let n;
r.d(t, {
    A: () => h
});
var s, i = r(311907),
    a = r(73153),
    l = r(518977);

function o(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}
let c = (0, l.rE)();

function u(e) {
    var t;
    let {
        countryCode: r
    } = e;
    null != r && (c = null != (t = (0, l.XF)(r)) ? t : (0, l.rE)())
}
class d extends(s = i.Ay.DeviceSettingsStore) {
    initialize(e) {
        null != e && (n = e.selectedCountryCode)
    }
    getUserAgnosticState() {
        return {
            selectedCountryCode: n
        }
    }
    getCountryCode() {
        return null != n ? n : c
    }
}
o(d, "displayName", "PhoneStore"), o(d, "persistKey", "PhoneStore");
let h = new d(a.h, {
    PHONE_SET_COUNTRY_CODE: function(e) {
        let {
            countryCode: t
        } = e;
        n = t
    },
    CONNECTION_OPEN: u,
    SET_LOCATION_METADATA: u
})