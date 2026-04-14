/** chunk id: 560936 params = (module,exports,require) **/
t.d(a, {
    A: () => c
});
var n = t(64700),
    i = t(473193),
    o = t(203982),
    r = t(652215);

function c(e) {
    let {
        shouldSubscribe: a,
        subscribeToGroupId: t,
        authorId: c
    } = e, l = n.useContext(i.C);
    n.useEffect(() => {
        if (!a || null == l || null == t || null == c) return;
        let {
            setAnimate: e
        } = l;
        return o._.subscribeKeyed(r.zOV.ANIMATE_CHAT_AVATAR, `${t}:${c}`, e), () => void o._.unsubscribeKeyed(r.zOV.ANIMATE_CHAT_AVATAR, `${t}:${c}`, e)
    }, [a, c, t, l])
}