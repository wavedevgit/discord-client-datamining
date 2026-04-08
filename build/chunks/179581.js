/** chunk id: 179581 params = (module,exports,require) **/
n.d(e, {
    N: () => r
});
var a = n(309010),
    i = n(746080);

function r() {
    let t = a.A.getCurrentlySelectedChannelId() ?? void 0;
    return null != t && (0, i.jq)(t) ? {
        channel_static_route: t
    } : {
        channel_id: t
    }
}