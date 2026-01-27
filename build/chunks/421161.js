/** Chunk was on web.js **/
/** chunk id: 421161, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    j: () => c
});
var r = n(64700),
    i = n(311907),
    a = n(627363),
    o = n(587895),
    s = n(71393),
    l = n(871123);

function c(e) {
    let {
        shouldFetchIfMissing: t
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = (0, l.bF)(e), c = null == e ? void 0 : e.applicationId, u = (0, i.bG)([o.A], () => null != c ? o.A.getApplication(c) : null, [c]), d = null == u ? void 0 : u.guildId, f = (0, i.bG)([s.A], () => null != d ? s.A.getGuild(d) : null, [d]);
    return r.useEffect(() => {
        n && t && null == f && null != e && a.Ay.fetchApplication(e.applicationId, !0)
    }, [f, e, t, n]), n ? f : null
}