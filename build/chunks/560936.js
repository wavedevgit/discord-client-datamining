/** chunk id: 560936 params = (module,exports,require) **/
"use strict";
a.d(t, {
    A: () => o
});
var n = a(64700),
    i = a(473193),
    r = a(203982),
    s = a(652215);

function o(e) {
    let {
        shouldSubscribe: t,
        subscribeToGroupId: a,
        authorId: o
    } = e, c = n.useContext(i.C);
    n.useEffect(() => {
        if (!t || null == c || null == a || null == o) return;
        let {
            setAnimate: e
        } = c;
        return r._.subscribeKeyed(s.zOV.ANIMATE_CHAT_AVATAR, `${a}:${o}`, e), () => void r._.unsubscribeKeyed(s.zOV.ANIMATE_CHAT_AVATAR, `${a}:${o}`, e)
    }, [t, o, a, c])
}