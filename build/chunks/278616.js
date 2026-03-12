/** chunk id: 278616 params = (module,exports,require) **/
n.d(t, {
    R: () => a,
    g: () => o
});
var i = n(417597),
    s = n(617617),
    l = n(632119),
    r = n(444802);
let a = () => {
        let e = (0, i.cf)([s.A], () => s.A.settings.textAndImages?.explicitContentSettings ?? (0, l.C$)());
        return {
            explicitContentGuilds: (0, l.Ys)({
                setting: e?.explicitContentGuilds
            }),
            explicitContentNonFriendDm: (0, l.Ys)({
                setting: e?.explicitContentNonFriendDm,
                isDm: !0
            }),
            explicitContentFriendDm: (0, l.Ys)({
                setting: e?.explicitContentFriendDm,
                isDm: !0,
                isFriend: !0
            })
        }
    },
    o = () => {
        let e = (0, i.cf)([s.A], () => s.A.settings.textAndImages?.goreContentSettings ?? (0, r.T4)());
        return {
            goreContentGuilds: (0, r.gC)({
                setting: e?.goreContentGuilds
            }),
            goreContentNonFriendDm: (0, r.gC)({
                setting: e?.goreContentNonFriendDm,
                isDm: !0
            }),
            goreContentFriendDm: (0, r.gC)({
                setting: e?.goreContentFriendDm,
                isDm: !0,
                isFriend: !0
            })
        }
    }