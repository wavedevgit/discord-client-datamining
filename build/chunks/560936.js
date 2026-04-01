/** chunk id: 560936 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var l = n(64700),
    a = n(473193),
    i = n(203982),
    r = n(652215);

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
        return i._.subscribeKeyed(r.zOV.ANIMATE_CHAT_AVATAR, `${n}:${s}`, e), () => void i._.unsubscribeKeyed(r.zOV.ANIMATE_CHAT_AVATAR, `${n}:${s}`, e)
    }, [t, s, n, d])
}