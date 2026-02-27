/** chunk id: 963555, original params: e,t,n (module,exports,require) **/
n.d(t, {
    F: () => l
});
var i = n(311907),
    r = n(349435);

function l(e, t) {
    return (0, i.bG)([r.Ay], () => r.Ay.getChannelSafetyWarnings(e), [e]).filter(e => e.type === t).find(e => null == e.dismiss_timestamp && (e?.expiry == null || Date.parse(e.expiry) > Date.now()))
}