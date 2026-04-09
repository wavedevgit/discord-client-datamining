/** chunk id: 560936 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var a = n(64700),
    i = n(473193),
    l = n(203982),
    s = n(652215);

function r(e) {
    let {
        shouldSubscribe: t,
        subscribeToGroupId: n,
        authorId: r
    } = e, o = a.useContext(i.C);
    a.useEffect(() => {
        if (!t || null == o || null == n || null == r) return;
        let {
            setAnimate: e
        } = o;
        return l._.subscribeKeyed(s.zOV.ANIMATE_CHAT_AVATAR, `${n}:${r}`, e), () => void l._.unsubscribeKeyed(s.zOV.ANIMATE_CHAT_AVATAR, `${n}:${r}`, e)
    }, [t, r, n, o])
}