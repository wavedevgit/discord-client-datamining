/** Chunk was on 2827 **/
/** chunk id: 278616, original params: e,t,n (module,exports,require) **/
n.d(t, {
    R: () => a,
    g: () => o
});
var r = n(417597),
    i = n(617617),
    l = n(632119),
    s = n(444802);
let a = () => {
        let e = (0, r.cf)([i.A], () => {
            var e, t;
            return null != (e = null == (t = i.A.settings.textAndImages) ? void 0 : t.explicitContentSettings) ? e : (0, l.C$)()
        });
        return {
            explicitContentGuilds: (0, l.Ys)({
                setting: null == e ? void 0 : e.explicitContentGuilds
            }),
            explicitContentNonFriendDm: (0, l.Ys)({
                setting: null == e ? void 0 : e.explicitContentNonFriendDm,
                isDm: !0
            }),
            explicitContentFriendDm: (0, l.Ys)({
                setting: null == e ? void 0 : e.explicitContentFriendDm,
                isDm: !0,
                isFriend: !0
            })
        }
    },
    o = () => {
        let e = (0, r.cf)([i.A], () => {
            var e, t;
            return null != (e = null == (t = i.A.settings.textAndImages) ? void 0 : t.goreContentSettings) ? e : (0, s.T4)()
        });
        return {
            goreContentGuilds: (0, s.gC)({
                setting: null == e ? void 0 : e.goreContentGuilds
            }),
            goreContentNonFriendDm: (0, s.gC)({
                setting: null == e ? void 0 : e.goreContentNonFriendDm,
                isDm: !0
            }),
            goreContentFriendDm: (0, s.gC)({
                setting: null == e ? void 0 : e.goreContentFriendDm,
                isDm: !0,
                isFriend: !0
            })
        }
    }