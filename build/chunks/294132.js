/** chunk id: 294132 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var a = n(397927),
    l = n(956793),
    r = n(401843),
    s = n(427262),
    o = n(985018);

function d(e) {
    let {
        applicationStreams: t
    } = e;
    return t.map(e => {
        let {
            stream: t,
            streamUser: n
        } = e;
        return (0, i.jsx)(a.Drp, {
            id: `spectate-${t.ownerId}`,
            action: () => {
                l.default.selectVoiceChannel(t.channelId), (0, r.Nl)(t)
            },
            label: o.intl.formatToPlainString(o.t.m09d0T, {
                streamerName: s.Ay.getName(n)
            })
        }, `spectate-${t.ownerId}`)
    })
}