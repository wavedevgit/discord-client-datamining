/** chunk id: 560936, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var a = n(64700),
    i = n(473193),
    r = n(203982),
    l = n(652215);

function s(e) {
    let {
        shouldSubscribe: t,
        subscribeToGroupId: n,
        authorId: s
    } = e, o = a.useContext(i.C);
    a.useEffect(() => {
        if (!t || null == o || null == n || null == s) return;
        let {
            setAnimate: e
        } = o;
        return r._.subscribeKeyed(l.zOV.ANIMATE_CHAT_AVATAR, `${n}:${s}`, e), () => void r._.unsubscribeKeyed(l.zOV.ANIMATE_CHAT_AVATAR, `${n}:${s}`, e)
    }, [t, s, n, o])
}