/** Chunk was on 5606 **/
/** chunk id: 303351, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Z: () => a
}), n(896048);
var r = n(987281),
    i = n(531525);
let l = [i.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2, i.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2, i.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2, i.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2],
    s = [i.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2, i.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2],
    a = () => {
        let e = r.a.useField("hasSearchResults"),
            t = r.a.useField("searchResults");
        return e ? {
            hideGuildOptions: ![...t].some(e => l.includes(e)),
            hideGlobalOption: ![...t].some(e => s.includes(e))
        } : {
            hideGuildOptions: !1,
            hideGlobalOption: !1
        }
    }