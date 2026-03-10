/** chunk id: 963555 params = (module,exports,require) **/
n.d(t, {
    F: () => i
});
var r = n(311907),
    a = n(349435);

function i(e, t) {
    return (0, r.bG)([a.Ay], () => a.Ay.getChannelSafetyWarnings(e), [e]).filter(e => e.type === t).find(e => null == e.dismiss_timestamp && (e?.expiry == null || Date.parse(e.expiry) > Date.now()))
}