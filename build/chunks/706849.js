/** Chunk was on 46875 **/
/** chunk id: 706849, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var l = n(64700),
    r = n(531685),
    i = n(365971),
    a = n(613999);
let s = {
    useForumChannelSeenManager: function(e) {
        let {
            guildId: t,
            channelId: n
        } = e, s = l.useRef(null), o = (0, i.Xg)(), c = !r.A.isFocused(o);
        return l.useLayoutEffect(() => (null == s.current && (s.current = new a.Ay({
            guildId: t,
            channelId: n,
            isPaused: c,
            windowId: o
        }), s.current.initialize()), () => {
            var e;
            null == (e = s.current) || e.terminate(), s.current = null
        }), [n, t, c, o]), s.current
    }
}