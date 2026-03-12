/** chunk id: 303351 params = (module,exports,require) **/
n.d(t, {
    Z: () => a
});
var i = n(987281),
    s = n(531525);
let l = [s.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2, s.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2, s.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2, s.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2],
    r = [s.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2, s.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2],
    a = () => {
        let e = i.a.useField("hasSearchResults"),
            t = i.a.useField("searchResults");
        return e ? {
            hideGuildOptions: ![...t].some(e => l.includes(e)),
            hideGlobalOption: ![...t].some(e => r.includes(e))
        } : {
            hideGuildOptions: !1,
            hideGlobalOption: !1
        }
    }