/** chunk id: 899273 params = (module,exports,require) **/
n.d(t, {
    Y: () => l
});
var a = n(505779);
let i = [a.V.OFFICIAL, a.V.FACEBOOK, a.V.TWITTER, a.V.INSTAGRAM, a.V.YOUTUBE, a.V.BLUESKY, a.V.REDDIT, a.V.TWITCH];

function l(e) {
    return (e?.websites ?? []).filter(e => {
        let {
            category: t
        } = e;
        return i.includes(t)
    }).sort((e, t) => i.indexOf(e.category) - i.indexOf(t.category))
}