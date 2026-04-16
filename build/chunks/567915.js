/** chunk id: 567915 params = (module,exports,require) **/
l.d(n, {
    A: () => s
});
var t = l(64700),
    i = l(576622);

function s(e) {
    let {
        userId: n,
        initialGuildId: l
    } = e, [s, a] = t.useState(l), [r, o] = t.useState(l), d = t.useRef(r), c = t.useCallback(e => {
        a(e ?? void 0)
    }, []);
    return t.useEffect(() => {
        let e = !1;
        return (0, i.A)(n, void 0, {
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