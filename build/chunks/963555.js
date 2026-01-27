/** Chunk was on 96430 **/
/** chunk id: 963555, original params: t,e,n (module,exports,require) **/
n.d(e, {
    F: () => a
});
var r = n(311907),
    i = n(349435);

function a(t, e) {
    return (0, r.bG)([i.Ay], () => i.Ay.getChannelSafetyWarnings(t), [t]).filter(t => t.type === e).find(t => null == t.dismiss_timestamp && ((null == t ? void 0 : t.expiry) == null || Date.parse(t.expiry) > Date.now()))
}