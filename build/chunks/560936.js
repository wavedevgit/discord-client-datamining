/** chunk id: 560936 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var a = n(64700),
    i = n(473193),
    r = n(203982),
    s = n(652215);

function l(e) {
    let {
        shouldSubscribe: t,
        subscribeToGroupId: n,
        authorId: l
    } = e, o = a.useContext(i.C);
    a.useEffect(() => {
        if (!t || null == o || null == n || null == l) return;
        let {
            setAnimate: e
        } = o;
        return r._.subscribeKeyed(s.zOV.ANIMATE_CHAT_AVATAR, `${n}:${l}`, e), () => void r._.unsubscribeKeyed(s.zOV.ANIMATE_CHAT_AVATAR, `${n}:${l}`, e)
    }, [t, l, n, o])
}