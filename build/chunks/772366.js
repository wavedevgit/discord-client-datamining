/** chunk id: 772366 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(627968);
n(64700);
var r = n(397927),
    a = n(71393);

function l(e) {
    let {
        onCloseCallback: t,
        analyticsLocations: l,
        ...s
    } = e;
    (0, r.mMO)(async () => {
        let {
            default: e
        } = await n.e("45990").then(n.bind(n, 307794));
        return t => (0, i.jsx)(e, {
            ...t,
            ...s,
            analyticsLocations: l,
            guildCount: a.A.getGuildCount(),
            "aria-labelledby": "nitro-guild-cap-upsell"
        })
    }, {
        onCloseCallback: t
    })
}