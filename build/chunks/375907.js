/** chunk id: 375907, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => i
});
var r = n(64700),
    l = n(884362);

function i(e) {
    let {
        listRef: t,
        padding: n,
        channel: i,
        isEnabled: a
    } = e, s = r.useCallback(e => {
        let r = t.current,
            l = document.querySelector(e);
        null != l && (null == r || r.scrollIntoViewNode({
            node: l,
            padding: n,
            callback: () => {
                var t;
                null == (t = document.querySelector(e)) || t.focus({
                    preventScroll: !0
                })
            }
        }))
    }, [n, t]), o = r.useCallback(() => new Promise(e => {
        let n = t.current;
        null == n || n.scrollToTop({
            callback: () => requestAnimationFrame(e)
        })
    }), [t]), c = r.useCallback(() => new Promise(e => {
        let n = t.current;
        null == n || n.scrollToBottom({
            callback: () => requestAnimationFrame(e)
        })
    }), [t]);
    return (0, l.Ay)({
        id: "forum-channel-list-".concat(i.id),
        isEnabled: a,
        scrollToStart: o,
        scrollToEnd: c,
        setFocus: s
    })
}