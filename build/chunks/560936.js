/** chunk id: 560936, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(64700),
    i = n(473193),
    a = n(203982),
    o = n(652215);

function s(e) {
    let {
        shouldSubscribe: t,
        subscribeToGroupId: n,
        authorId: s
    } = e, l = r.useContext(i.C);
    r.useEffect(() => {
        if (!t || null == l || null == n || null == s) return;
        let {
            setAnimate: e
        } = l;
        return a._.subscribeKeyed(o.zOV.ANIMATE_CHAT_AVATAR, "".concat(n, ":").concat(s), e), () => void a._.unsubscribeKeyed(o.zOV.ANIMATE_CHAT_AVATAR, "".concat(n, ":").concat(s), e)
    }, [t, s, n, l])
}