/** chunk id: 824611, original params: e,t,r (module,exports,require) **/
r.d(t, {
    J: () => s
});
var n = r(64700),
    o = r(417597),
    l = r(256311),
    a = r(773669),
    i = r(883600),
    c = r(559868);

function d(e, t) {
    let {
        changelog: r,
        loadState: a,
        defaultChangelog: d,
        defaultLoadState: s
    } = (0, o.cf)([i.A], () => {
        let r = null != e ? i.A.getChangelog(e, t) : null,
            n = null != e ? i.A.getChangelog(e, "en-US") : null,
            o = null != e && i.A.getChangelogLoadStatus(e, "en-US");
        return {
            changelog: r,
            loadState: null != e && i.A.getChangelogLoadStatus(e, t),
            defaultChangelog: n,
            defaultLoadState: o
        }
    }, [e, t]);
    return (n.useEffect(() => {
        null != e && null == r && a === c._f.NOT_LOADED && l.A.fetchChangelog(e, t)
    }, [e, r, a, t]), null == e) ? {
        id: e,
        changelog: null,
        loaded: !1
    } : null == r && a === c._f.LOADED_FAILURE ? {
        id: e,
        changelog: d,
        loaded: s !== c._f.NOT_LOADED
    } : {
        id: e,
        changelog: r,
        loaded: a !== c._f.NOT_LOADED
    }
}

function s() {
    let e = (0, o.bG)([a.default], () => a.default.locale),
        t = (0, o.bG)([i.A], () => i.A.latestChangelogId()),
        r = (0, o.bG)([i.A], () => i.A.getConfig()),
        n = null != r && 0 === Object.keys(r).length,
        l = null != r && Object.keys(r).length > 0 && null == t,
        c = (0, o.bG)([i.A], () => i.A.overrideId()),
        {
            changelog: s,
            loaded: u
        } = d(t, e),
        {
            changelog: _,
            loaded: m
        } = d(c, e);
    return null == c || null == _ && m ? {
        id: t,
        changelog: s,
        loaded: !!n || u,
        clientTooOld: l
    } : {
        id: c,
        changelog: _,
        loaded: m,
        clientTooOld: !1
    }
}