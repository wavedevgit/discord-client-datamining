/** chunk id: 70856, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(397927),
    a = n(688810),
    s = n(657331),
    o = n(129831),
    d = n(985018);

function c(e) {
    let {
        priorityMembers: t,
        otherMembers: n,
        totalMembers: r,
        activity: a,
        guildId: c,
        sourceAnalyticsLocations: u
    } = e, A = [];
    for (let {
            user: e,
            status: n
        }
        of t) A.push((0, i.jsx)(l.Drp, {
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
    for (let e of n) A.push((0, i.jsx)(l.Drp, {
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
    let h = r - A.length;
    return h > 0 && A.push((0, i.jsx)(l.Drp, {
        id: `unknown-members-${a?.session_id}`,
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
    } = (0, a.Ay)(), _ = r.useMemo(() => {
        let e = s.flatMap(e => {
            let {
                playingMembers: t
            } = e;
            return t
        }).map(e => e.id);
        return n.filter(t => !e.includes(t.id))
    }, [n, s]);
    if (s.length <= 1 && 0 === _.length) return (0, i.jsx)(l.rXV, {
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
                playingMembers: r,
                game: a,
                activity: s
            } = e, d = new Set(r.map(e => e.id));
            return (0, i.jsx)(l.rXV, {
                label: `${a.name} - ${r.length}`,
                children: c({
                    priorityMembers: t.filter(e => {
                        let {
                            user: t
                        } = e;
                        return d.has(t.id)
                    }),
                    otherMembers: r.filter(e => !u.has(e.id)),
                    totalMembers: r.length,
                    activity: s ?? void 0,
                    guildId: o?.id,
                    sourceAnalyticsLocations: h
                })
            }, n)
        }),
        p = _.map(e => e.id);
    return [...m, (0, i.jsx)(l.rXV, {
        label: `${d.intl.string(d.t["mIx+gG"])} - ${_.length}`,
        children: c({
            priorityMembers: t.filter(e => {
                let {
                    user: t
                } = e;
                return p.includes(t.id)
            }),
            otherMembers: _.filter(e => !u.has(e.id)),
            totalMembers: _.length,
            guildId: o?.id,
            sourceAnalyticsLocations: h
        })
    })]
}