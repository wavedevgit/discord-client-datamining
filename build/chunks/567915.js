/** chunk id: 567915 params = (module,exports,require) **/
l.d(t, {
    A: () => s
});
var n = l(64700),
    i = l(576622);

function s(e) {
    let {
        userId: t,
        initialGuildId: l
    } = e, [s, a] = n.useState(l), [r, o] = n.useState(l), d = n.useRef(r), c = n.useCallback(e => {
        a(e ?? void 0)
    }, []);
    return n.useEffect(() => {
        let e = !1;
        return (0, i.A)(t, void 0, {
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
    }, [s, t]), {
        guildId: r,
        pendingGuildId: s,
        isLoading: s !== r,
        selectUserProfile: c
    }
}