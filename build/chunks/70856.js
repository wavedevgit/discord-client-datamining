/** chunk id: 70856 params = (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(321073);
var i = n(627968),
    a = n(64700),
    r = n(397927),
    l = n(688810),
    s = n(657331),
    o = n(129831),
    d = n(985018);

function c(e) {
    let {
        priorityMembers: t,
        otherMembers: n,
        totalMembers: a,
        activity: l,
        guildId: c,
        sourceAnalyticsLocations: u
    } = e, A = [];
    for (let {
            user: e,
            status: n
        }
        of t) A.push((0, i.jsx)(r.Drp, {
        id: e.id,
        keepItemStyles: !0,
        render: t => (0, i.jsx)(o.A, {
            ...t,
            user: e,
            status: n,
            guildId: c
        }),
        action: () => (0, s.openUserProfileModal)({
            userId: e.id,
            guildId: c,
            sourceAnalyticsLocations: u
        })
    }));
    for (let e of n) A.push((0, i.jsx)(r.Drp, {
        id: e.id,
        keepItemStyles: !0,
        render: t => (0, i.jsx)(o.A, {
            ...t,
            user: e,
            guildId: c
        }),
        action: () => (0, s.openUserProfileModal)({
            userId: e.id,
            guildId: c,
            sourceAnalyticsLocations: u
        })
    }));
    let h = a - A.length;
    return h > 0 && A.push((0, i.jsx)(r.Drp, {
        id: `unknown-members-${l?.session_id}`,
        render: e => (0, i.jsx)(o.x, {
            ...e,
            label: d.intl.formatToPlainString(d.t["6Kqn9M"], {
                count: h
            })
        })
    })), A
}

function u(e) {
    let {
        priorityMembers: t,
        partiedMembers: n,
        currentActivities: s,
        guildContext: o
    } = e, u = new Set(t.map(e => {
        let {
            user: t
        } = e;
        return t.id
    })), A = n.filter(e => !u.has(e.id)), {
        analyticsLocations: h
    } = (0, l.Ay)(), _ = a.useMemo(() => {
        let e = s.flatMap(e => {
            let {
                playingMembers: t
            } = e;
            return t
        }).map(e => e.id);
        return n.filter(t => !e.includes(t.id))
    }, [n, s]);
    if (s.length <= 1 && 0 === _.length) return (0, i.jsx)(r.rXV, {
        label: n.length > 1 ? d.intl.formatToPlainString(d.t.C4WXvc, {
            memberCount: n.length
        }) : void 0,
        children: c({
            priorityMembers: t,
            otherMembers: A,
            totalMembers: n.length,
            activity: s[0]?.activity ?? void 0,
            guildId: o?.id,
            sourceAnalyticsLocations: h
        })
    });
    let m = s.map((e, n) => {
            let {
                playingMembers: a,
                game: l,
                activity: s
            } = e, d = new Set(a.map(e => e.id));
            return (0, i.jsx)(r.rXV, {
                label: `${l.name} - ${a.length}`,
                children: c({
                    priorityMembers: t.filter(e => {
                        let {
                            user: t
                        } = e;
                        return d.has(t.id)
                    }),
                    otherMembers: a.filter(e => !u.has(e.id)),
                    totalMembers: a.length,
                    activity: s ?? void 0,
                    guildId: o?.id,
                    sourceAnalyticsLocations: h
                })
            }, n)
        }),
        g = _.map(e => e.id);
    return [...m, (0, i.jsx)(r.rXV, {
        label: `${d.intl.string(d.t["mIx+gG"])} - ${_.length}`,
        children: c({
            priorityMembers: t.filter(e => {
                let {
                    user: t
                } = e;
                return g.includes(t.id)
            }),
            otherMembers: _.filter(e => !u.has(e.id)),
            totalMembers: _.length,
            guildId: o?.id,
            sourceAnalyticsLocations: h
        })
    })]
}