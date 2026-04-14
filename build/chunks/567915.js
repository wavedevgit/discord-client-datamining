/** chunk id: 567915 params = (module,exports,require) **/
n.d(l, {
    A: () => s
});
var t = n(64700),
    i = n(576622);

function s(e) {
    let {
        userId: l,
        initialGuildId: n
    } = e, [s, a] = t.useState(n), [r, o] = t.useState(n), d = t.useRef(r), c = t.useCallback(e => {
        a(e ?? void 0)
    }, []);
    return t.useEffect(() => {
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