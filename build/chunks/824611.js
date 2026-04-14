/** chunk id: 824611 params = (module,exports,require) **/
"use strict";
l.d(t, {
    J: () => u
});
var a = l(64700),
    s = l(417597),
    n = l(256311),
    r = l(773669),
    o = l(883600),
    i = l(559868);

function c(e, t) {
    let {
        changelog: l,
        loadState: r,
        defaultChangelog: c,
        defaultLoadState: u
    } = (0, s.cf)([o.A], () => {
        let l = null != e ? o.A.getChangelog(e, t) : null,
            a = null != e ? o.A.getChangelog(e, "en-US") : null,
            s = null != e && o.A.getChangelogLoadStatus(e, "en-US");
        return {
            changelog: l,
            loadState: null != e && o.A.getChangelogLoadStatus(e, t),
            defaultChangelog: a,
            defaultLoadState: s
        }
    }, [e, t]);
    return (a.useEffect(() => {
        null != e && null == l && r === i._f.NOT_LOADED && n.A.fetchChangelog(e, t)
    }, [e, l, r, t]), null == e) ? {
        id: e,
        changelog: null,
        loaded: !1
    } : null == l && r === i._f.LOADED_FAILURE ? {
        id: e,
        changelog: c,
        loaded: u !== i._f.NOT_LOADED
    } : {
        id: e,
        changelog: l,
        loaded: r !== i._f.NOT_LOADED
    }
}

function u() {
    let e = (0, s.bG)([r.default], () => r.default.locale),
        t = (0, s.bG)([o.A], () => o.A.latestChangelogId()),
        l = (0, s.bG)([o.A], () => o.A.getConfig()),
        a = null != l && 0 === Object.keys(l).length,
        n = null != l && Object.keys(l).length > 0 && null == t,
        i = (0, s.bG)([o.A], () => o.A.overrideId()),
        {
            changelog: u,
            loaded: d
        } = c(t, e),
        {
            changelog: p,
            loaded: h
        } = c(i, e);
    return null == i || null == p && h ? {
        id: t,
        changelog: u,
        loaded: !!a || d,
        clientTooOld: n
    } : {
        id: i,
        changelog: p,
        loaded: h,
        clientTooOld: !1
    }
}