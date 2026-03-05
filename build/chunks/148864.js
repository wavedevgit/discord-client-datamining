/** chunk id: 148864 params = (module,exports,require) **/
let r;
s.d(t, {
    A: () => h
});
var n = s(311907),
    a = s(73153),
    i = s(518977);
let l = (0, i.rE)();

function o(e) {
    let {
        countryCode: t
    } = e;
    null != t && (l = (0, i.XF)(t) ?? (0, i.rE)())
}
class c extends n.Ay.DeviceSettingsStore {
    static displayName = "PhoneStore";
    static persistKey = "PhoneStore";
    initialize(e) {
        null != e && (r = e.selectedCountryCode)
    }
    getUserAgnosticState() {
        return {
            selectedCountryCode: r
        }
    }
    getCountryCode() {
        return null != r ? r : l
    }
}
let h = new c(a.h, {
    PHONE_SET_COUNTRY_CODE: function(e) {
        let {
            countryCode: t
        } = e;
        r = t
    },
    CONNECTION_OPEN: o,
    SET_LOCATION_METADATA: o
})