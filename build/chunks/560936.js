/** chunk id: 560936 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(64700),
    l = n(473193),
    r = n(203982),
    s = n(652215);

function a(e) {
    let {
        shouldSubscribe: t,
        subscribeToGroupId: n,
        authorId: a
    } = e, o = i.useContext(l.C);
    i.useEffect(() => {
        if (!t || null == o || null == n || null == a) return;
        let {
            setAnimate: e
        } = o;
        return r._.subscribeKeyed(s.zOV.ANIMATE_CHAT_AVATAR, `${n}:${a}`, e), () => void r._.unsubscribeKeyed(s.zOV.ANIMATE_CHAT_AVATAR, `${n}:${a}`, e)
    }, [t, a, n, o])
}