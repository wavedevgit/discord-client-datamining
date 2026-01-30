/** chunk id: 148864, original params: e,t,r (module,exports,require) **/
let n;
r.d(t, {
    A: () => d
});
var s, i = r(311907),
    l = r(73153),
    a = r(518977);

function o(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}
let c = (0, a.rE)();

function u(e) {
    var t;
    let {
        countryCode: r
    } = e;
    null != r && (c = null != (t = (0, a.XF)(r)) ? t : (0, a.rE)())
}
class h extends(s = i.Ay.DeviceSettingsStore) {
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
o(h, "displayName", "PhoneStore"), o(h, "persistKey", "PhoneStore");
let d = new h(l.h, {
    PHONE_SET_COUNTRY_CODE: function(e) {
        let {
            countryCode: t
        } = e;
        n = t
    },
    CONNECTION_OPEN: u,
    SET_LOCATION_METADATA: u
})