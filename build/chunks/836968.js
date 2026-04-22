/** chunk id: 836968 params = (module,exports,require) **/
l.d(t, {
    N: () => C
});
var n = l(64700),
    i = l(562465),
    s = l(652215);
let a = new Map;

function C(e) {
    let [t, l] = n.useState(a.has(e) ? Array.from(a.get(e)) : []), [C, r] = n.useState(!1), o = n.useMemo(() => t.map(e => e.code), [t]), d = n.useMemo(() => t.reduce((e, t) => (e[t.code] = t, e), {}), [t]), c = n.useCallback(async () => {
        r(!0);
        let t = (await i.Bo.get({
            url: s.Rsh.GUILD_INSTANT_INVITES(e),
            rejectWithError: !0
        })).body.sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime());
        l(t), a.set(e, new Set(t)), r(!1)
    }, [e]);
    return n.useEffect(() => {
        c()
    }, [e, c]), {
        invitesRaw: t,
        inviteCodes: o,
        invitesByCode: d,
        loading: C
    }
}