/** Chunk was on 39048 **/
/** chunk id: 389025, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r = n(64700),
    i = n(311907),
    l = n(34457),
    s = n(317525),
    a = n(71393),
    o = n(2242),
    c = n(652215);

function d(e) {
    let t = (0, i.bG)([a.A, s.A], () => {
            let t = a.A.getGuild(e);
            return null != t ? s.A.getEveryoneRole(t) : void 0
        }),
        n = r.useMemo(() => null == t || (0, l._m)(t, c.xBc.VIEW_CHANNEL) ? o.c4.SOME_CHANNELS : o.c4.ALL_CHANNELS, [t]),
        d = n === o.c4.ALL_CHANNELS;
    return {
        format: n,
        isFullServerGating: d
    }
}