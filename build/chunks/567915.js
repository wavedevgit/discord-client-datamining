/** chunk id: 567915 params = (module,exports,require) **/
t.d(l, {
    A: () => s
});
var n = t(64700),
    i = t(576622);

function s(e) {
    let {
        userId: l,
        initialGuildId: t
    } = e, [s, a] = n.useState(t), [r, o] = n.useState(t), d = n.useRef(r), c = n.useCallback(e => {
        a(e ?? void 0)
    }, []);
    return n.useEffect(() => {
        let e = !1;
        return (0, i.A)(l, void 0, {
            type: "modal",
            guildId: s,
            withMutualFriendsCount: !0,
            withMutualFriends: !1,
            withMutualGuilds: !0
        }).then(() => {
            e || (o(s), d.current = s)
        }, () => {
            e || a(d.current)
        }), () => {
            e = !0
        }
    }, [s, l]), {
        guildId: r,
        pendingGuildId: s,
        isLoading: s !== r,
        selectUserProfile: c
    }
}