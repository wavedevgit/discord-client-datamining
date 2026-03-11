/** chunk id: 780645 params = (module,exports,require) **/
"use strict";
n.d(t, {
    $: () => r
});
var i = n(627968),
    s = n(64700),
    l = n(442433),
    a = n(93055);

function r(e, t) {
    let {
        hasAccess: r
    } = (0, a.TW)(e);
    return s.useCallback(e => {
        if (!r) {
            e.preventDefault(), e.stopPropagation();
            return
        }(0, l.L3)(e, async () => {
            let {
                default: e
            } = await n.e("38167").then(n.bind(n, 342186));
            return n => (0, i.jsx)(e, {
                ...n,
                navId: t
            })
        })
    }, [r, t])
}