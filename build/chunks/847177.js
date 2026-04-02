/** chunk id: 847177 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(440594),
    l = n(765379),
    a = n(960076),
    r = n(652215),
    s = n(985018);

function o(e, t) {
    if (null != e && e.type === r.$pd.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
    if (null != t) return null == e || e.type !== r.$pd.PLAYING ? s.intl.string(s.t.eXan7B) : e.name;
    if (null == e || null == e.name) return null;
    if ((0, a.A)(e)) return null != e.details && "" !== e.details ? e.details : e.name;
    if ((0, l.A)(e)) return (0, i.A)(e.name);
    var n = e.type,
        o = e.name;
    switch (n) {
        case r.$pd.LISTENING:
        case r.$pd.WATCHING:
        case r.$pd.COMPETING:
        case r.$pd.STREAMING:
            return o;
        case r.$pd.CUSTOM_STATUS:
        case r.$pd.HANG_STATUS:
            return null;
        case r.$pd.PLAYING:
        default:
            return o
    }
}

function d(e, t) {
    if (Array.isArray(e)) {
        let n = e;
        null != t && !1 !== t.discoverable && (n = [...n, null]);
        let i = null;
        for (let e of n) {
            let n = o(e, t);
            if (null != n) return {
                activity: e,
                activityText: n
            };
            e?.type === r.$pd.CUSTOM_STATUS && null != e.emoji && (i = e)
        }
        return i?.emoji != null ? {
            activity: i,
            activityText: null
        } : null
    }
    return o(e, t)
}