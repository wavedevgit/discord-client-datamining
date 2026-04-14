/** chunk id: 560936 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(64700),
    l = n(473193),
    s = n(203982),
    a = n(652215);

function r(e) {
    let {
        shouldSubscribe: t,
        subscribeToGroupId: n,
        authorId: r
    } = e, o = i.useContext(l.C);
    i.useEffect(() => {
        if (!t || null == o || null == n || null == r) return;
        let {
            setAnimate: e
        } = o;
        return s._.subscribeKeyed(a.zOV.ANIMATE_CHAT_AVATAR, `${n}:${r}`, e), () => void s._.unsubscribeKeyed(a.zOV.ANIMATE_CHAT_AVATAR, `${n}:${r}`, e)
    }, [t, r, n, o])
}