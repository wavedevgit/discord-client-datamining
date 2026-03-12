/** chunk id: 560936 params = (module,exports,require) **/
a.d(t, {
    A: () => s
});
var n = a(64700),
    r = a(473193),
    l = a(203982),
    i = a(652215);

function s(e) {
    let {
        shouldSubscribe: t,
        subscribeToGroupId: a,
        authorId: s
    } = e, c = n.useContext(r.C);
    n.useEffect(() => {
        if (!t || null == c || null == a || null == s) return;
        let {
            setAnimate: e
        } = c;
        return l._.subscribeKeyed(i.zOV.ANIMATE_CHAT_AVATAR, `${a}:${s}`, e), () => void l._.unsubscribeKeyed(i.zOV.ANIMATE_CHAT_AVATAR, `${a}:${s}`, e)
    }, [t, s, a, c])
}