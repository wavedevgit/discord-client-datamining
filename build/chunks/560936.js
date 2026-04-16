/** chunk id: 560936 params = (module,exports,require) **/
a.d(t, {
    A: () => c
});
var n = a(64700),
    o = a(473193),
    i = a(203982),
    r = a(652215);

function c(e) {
    let {
        shouldSubscribe: t,
        subscribeToGroupId: a,
        authorId: c
    } = e, l = n.useContext(o.C);
    n.useEffect(() => {
        if (!t || null == l || null == a || null == c) return;
        let {
            setAnimate: e
        } = l;
        return i._.subscribeKeyed(r.zOV.ANIMATE_CHAT_AVATAR, `${a}:${c}`, e), () => void i._.unsubscribeKeyed(r.zOV.ANIMATE_CHAT_AVATAR, `${a}:${c}`, e)
    }, [t, c, a, l])
}