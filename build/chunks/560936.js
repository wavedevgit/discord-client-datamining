/** chunk id: 560936 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var a = n(64700),
    i = n(473193),
    r = n(203982),
    s = n(652215);

function o(e) {
    let {
        shouldSubscribe: t,
        subscribeToGroupId: n,
        authorId: o
    } = e, l = a.useContext(i.C);
    a.useEffect(() => {
        if (!t || null == l || null == n || null == o) return;
        let {
            setAnimate: e
        } = l;
        return r._.subscribeKeyed(s.zOV.ANIMATE_CHAT_AVATAR, `${n}:${o}`, e), () => void r._.unsubscribeKeyed(s.zOV.ANIMATE_CHAT_AVATAR, `${n}:${o}`, e)
    }, [t, o, n, l])
}