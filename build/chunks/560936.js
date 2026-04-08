/** chunk id: 560936 params = (module,exports,require) **/
t.d(a, {
    A: () => i
});
var n = t(64700),
    c = t(473193),
    l = t(203982),
    r = t(652215);

function i(e) {
    let {
        shouldSubscribe: a,
        subscribeToGroupId: t,
        authorId: i
    } = e, s = n.useContext(c.C);
    n.useEffect(() => {
        if (!a || null == s || null == t || null == i) return;
        let {
            setAnimate: e
        } = s;
        return l._.subscribeKeyed(r.zOV.ANIMATE_CHAT_AVATAR, `${t}:${i}`, e), () => void l._.unsubscribeKeyed(r.zOV.ANIMATE_CHAT_AVATAR, `${t}:${i}`, e)
    }, [a, i, t, s])
}