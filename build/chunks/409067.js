/** chunk id: 409067 params = (module,exports,require) **/
l.d(t, {
    a: () => h
}), l(321073);
var n = l(64700),
    a = l(91871),
    i = l.n(a),
    s = l(989349),
    r = l.n(s),
    d = l(311907),
    o = l(661191),
    c = l(274372),
    u = l(792852);

function m(e, t) {
    return "ascending" === t ? e.sort((e, t) => e.id.localeCompare(t.id)) : "descending" === t ? e.sort((e, t) => t.id.localeCompare(e.id)) : e
}

function h() {
    let e = (0, d.bG)([c.A], () => c.A.getClips()),
        t = (0, d.bG)([c.A], () => c.A.getPendingClips()),
        l = (0, u.P)();
    return n.useMemo(() => {
        let n = [...t, ...e],
            a = new Map,
            s = [];
        for (let e of n) {
            let t = function(e, t) {
                if (t.selectedUserIds.size > 0 && !Array.from(t.selectedUserIds).every(t => e.users.includes(t))) return !1;
                if ("" !== t.query.trim()) {
                    let l = t.query.toLowerCase(),
                        n = null != e.name && i()(l, e.name.toLowerCase()),
                        a = i()(l, e.applicationName.toLowerCase()),
                        s = e.activity?.state != null && i()(l, e.activity.state.toLowerCase()),
                        r = e.activity?.details != null && i()(l, e.activity.details.toLowerCase());
                    if (!n && !a && !s && !r) return !1
                }
                if (null !== t.selectedGuildId && e.guildId !== t.selectedGuildId) return !1;
                if (null !== t.selectedActivity) {
                    let l = e.activity?.state,
                        n = e.activity?.details;
                    if (l !== t.selectedActivity && n !== t.selectedActivity) return !1
                }
                return (null === t.selectedYear || r()(o.default.extractTimestamp(e.id)).year() === t.selectedYear) && !0
            }(e, l);
            if (t && s.push(e), null == e.applicationId) continue;
            let n = a.get(e.applicationId);
            null == n ? a.set(e.applicationId, {
                clips: [e],
                filteredClips: t ? [e] : [],
                mostRecentClipId: e.id,
                name: e.applicationName
            }) : (n.clips.push(e), t && n.filteredClips.push(e), e.id > n.mostRecentClipId && (n.mostRecentClipId = e.id))
        }
        let d = m(s, l.sortOrder),
            c = m(s.filter(e => e.isFavorite), l.sortOrder);
        return {
            clipsByGame: Array.from(a.entries()).map(e => {
                let [t, n] = e;
                return {
                    applicationId: t,
                    name: n.name,
                    count: n.filteredClips.length,
                    mostRecentClipId: n.mostRecentClipId,
                    filteredClips: m(n.filteredClips, l.sortOrder)
                }
            }).sort((e, t) => t.mostRecentClipId.localeCompare(e.mostRecentClipId)),
            allClips: n,
            filteredClips: d,
            favoriteClips: c
        }
    }, [e, t, l])
}