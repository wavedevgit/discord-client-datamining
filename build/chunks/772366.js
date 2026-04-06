/** chunk id: 772366 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(71393);

function a(e) {
    let {
        onCloseCallback: t,
        analyticsLocations: a,
        ...r
    } = e;
    (0, l.mMO)(async () => {
        let {
            default: e
        } = await n.e("45990").then(n.bind(n, 307794));
        return t => (0, i.jsx)(e, {
            ...t,
            ...r,
            analyticsLocations: a,
            guildCount: s.A.getGuildCount(),
            "aria-labelledby": "nitro-guild-cap-upsell"
        })
    }, {
        onCloseCallback: t
    })
}