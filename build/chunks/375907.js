/** Chunk was on 46875 **/
/** chunk id: 375907, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => i
});
var l = n(64700),
    r = n(884362);

function i(e) {
    let {
        listRef: t,
        padding: n,
        channel: i,
        isEnabled: a
    } = e, s = l.useCallback(e => {
        let l = t.current,
            r = document.querySelector(e);
        null != r && (null == l || l.scrollIntoViewNode({
            node: r,
            padding: n,
            callback: () => {
                var t;
                null == (t = document.querySelector(e)) || t.focus({
                    preventScroll: !0
                })
            }
        }))
    }, [n, t]), o = l.useCallback(() => new Promise(e => {
        let n = t.current;
        null == n || n.scrollToTop({
            callback: () => requestAnimationFrame(e)
        })
    }), [t]), c = l.useCallback(() => new Promise(e => {
        let n = t.current;
        null == n || n.scrollToBottom({
            callback: () => requestAnimationFrame(e)
        })
    }), [t]);
    return (0, r.Ay)({
        id: "forum-channel-list-".concat(i.id),
        isEnabled: a,
        scrollToStart: o,
        scrollToEnd: c,
        setFocus: s
    })
}