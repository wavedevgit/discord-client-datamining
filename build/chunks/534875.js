/** Chunk was on 39048 **/
/** chunk id: 534875, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r = n(64700),
    i = n(311907),
    l = n(554375),
    s = n(475743),
    a = n(885617),
    o = n(492494);
let c = [];

function d(e) {
    let {
        revision: t,
        emojis: n
    } = (0, i.cf)([a.A], () => ({
        revision: a.A.getEmojiRevision(e),
        emojis: a.A.getEmojis(e)
    })), d = (0, s.A)(t);
    return r.useEffect(() => {
        (0, l.dZ)(e)
    }, [e]), r.useEffect(() => {
        null != d && d < t && (0, l.dZ)(e)
    }, [t, d, e]), r.useMemo(() => null == n ? c : n.filter(t => (0, o.Eg)(t, e)), [n, e])
}