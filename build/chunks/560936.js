/** chunk id: 560936 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var l = n(64700),
    a = n(473193),
    r = n(203982),
    i = n(652215);

function s(e) {
    let {
        shouldSubscribe: t,
        subscribeToGroupId: n,
        authorId: s
    } = e, d = l.useContext(a.C);
    l.useEffect(() => {
        if (!t || null == d || null == n || null == s) return;
        let {
            setAnimate: e
        } = d;
        return r._.subscribeKeyed(i.zOV.ANIMATE_CHAT_AVATAR, `${n}:${s}`, e), () => void r._.unsubscribeKeyed(i.zOV.ANIMATE_CHAT_AVATAR, `${n}:${s}`, e)
    }, [t, s, n, d])
}