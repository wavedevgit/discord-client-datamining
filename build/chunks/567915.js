/** chunk id: 567915 params = (module,exports,require) **/
l.d(n, {
    A: () => s
});
var i = l(64700),
    t = l(576622);

function s(e) {
    let {
        userId: n,
        initialGuildId: l
    } = e, [s, a] = i.useState(l), [r, o] = i.useState(l), d = i.useRef(r), c = i.useCallback(e => {
        a(e ?? void 0)
    }, []);
    return i.useEffect(() => {
        let e = !1;
        return (0, t.A)(n, void 0, {
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
    }, [s, n]), {
        guildId: r,
        pendingGuildId: s,
        isLoading: s !== r,
        selectUserProfile: c
    }
}