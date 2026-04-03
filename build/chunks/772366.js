/** chunk id: 772366 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(71393);

function s(e) {
    let {
        onCloseCallback: t,
        analyticsLocations: s,
        ...a
    } = e;
    (0, l.mMO)(async () => {
        let {
            default: e
        } = await n.e("45990").then(n.bind(n, 307794));
        return t => (0, i.jsx)(e, {
            ...t,
            ...a,
            analyticsLocations: s,
            guildCount: r.A.getGuildCount(),
            "aria-labelledby": "nitro-guild-cap-upsell"
        })
    }, {
        onCloseCallback: t
    })
}