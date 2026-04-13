/** chunk id: 179581 params = (module,exports,require) **/
n.d(t, {
    N: () => l
});
var i = n(309010),
    s = n(746080);

function l() {
    let e = i.A.getCurrentlySelectedChannelId() ?? void 0;
    return null != e && (0, s.jq)(e) ? {
        channel_static_route: e
    } : {
        channel_id: e
    }
}