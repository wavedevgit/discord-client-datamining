/** chunk id: 409067 params = (module,exports,require) **/
l.d(t, {
    a: () => h
}), l(321073);
var a = l(64700),
    n = l(91871),
    i = l.n(n),
    s = l(989349),
    r = l.n(s),
    o = l(311907),
    d = l(661191),
    c = l(274372),
    u = l(792852);

function m(e, t) {
    return "ascending" === t ? e.sort((e, t) => e.id.localeCompare(t.id)) : "descending" === t ? e.sort((e, t) => t.id.localeCompare(e.id)) : e
}

function h() {
    let e = (0, o.bG)([c.A], () => c.A.getClips()),
        t = (0, o.bG)([c.A], () => c.A.getPendingClips()),
        l = (0, u.P)();
    return a.useMemo(() => {
        let a = [...t, ...e],
            n = new Map,
            s = [];
        for (let e of a) {
            let t = function(e, t) {
                if (t.selectedUserIds.size > 0 && !Array.from(t.selectedUserIds).every(t => e.users.includes(t))) return !1;
                if ("" !== t.query.trim()) {
                    let l = t.query.toLowerCase(),
                        a = null != e.name && i()(l, e.name.toLowerCase()),
                        n = i()(l, e.applicationName.toLowerCase()),
                        s = e.activity?.state != null && i()(l, e.activity.state.toLowerCase()),
                        r = e.activity?.details != null && i()(l, e.activity.details.toLowerCase());
                    if (!a && !n && !s && !r) return !1
                }
                if (null !== t.selectedGuildId && e.guildId !== t.selectedGuildId) return !1;
                if (null !== t.selectedActivity) {
                    let l = e.activity?.state,
                        a = e.activity?.details;
                    if (l !== t.selectedActivity && a !== t.selectedActivity) return !1
                }
                return (null === t.selectedYear || r()(d.default.extractTimestamp(e.id)).year() === t.selectedYear) && !0
            }(e, l);
            if (t && s.push(e), null == e.applicationId) continue;
            let a = n.get(e.applicationId);
            null == a ? n.set(e.applicationId, {
                clips: [e],
                filteredClips: t ? [e] : [],
                mostRecentClipId: e.id,
                name: e.applicationName
            }) : (a.clips.push(e), t && a.filteredClips.push(e), e.id > a.mostRecentClipId && (a.mostRecentClipId = e.id))
        }
        let o = m(s, l.sortOrder),
            c = m(s.filter(e => e.isFavorite), l.sortOrder);
        return {
            clipsByGame: Array.from(n.entries()).map(e => {
                let [t, a] = e;
                return {
                    applicationId: t,
                    name: a.name,
                    count: a.filteredClips.length,
                    mostRecentClipId: a.mostRecentClipId,
                    filteredClips: m(a.filteredClips, l.sortOrder)
                }
            }).sort((e, t) => t.mostRecentClipId.localeCompare(e.mostRecentClipId)),
            allClips: a,
            filteredClips: o,
            favoriteClips: c
        }
    }, [e, t, l])
}