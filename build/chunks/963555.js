/** chunk id: 963555, original params: e,n,t (module,exports,require) **/
t.d(n, {
    F: () => i
});
var l = t(311907),
    r = t(349435);

function i(e, n) {
    return (0, l.bG)([r.Ay], () => r.Ay.getChannelSafetyWarnings(e), [e]).filter(e => e.type === n).find(e => null == e.dismiss_timestamp && ((null == e ? void 0 : e.expiry) == null || Date.parse(e.expiry) > Date.now()))
}