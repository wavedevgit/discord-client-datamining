/** chunk id: 289687 params = (module,exports,require) **/
l.d(t, {
    A: () => p
});
var n = l(627968),
    i = l(64700),
    s = l(735438),
    a = l.n(s),
    C = l(311907),
    r = l(732955),
    o = l(397927),
    d = l(73153),
    c = l(437553),
    u = l(34457),
    m = l(317525),
    x = l(576705),
    h = l(552247),
    g = l(985018),
    H = l(104514);
let p = e => {
    let {
        guild: t,
        transitionState: l,
        onClose: s
    } = e, [p, j] = i.useState(7), [_, f] = i.useState([]), {
        count: b,
        isLoading: A
    } = (0, h._k)(t.id, p, _);
    i.useEffect(() => {
        let e = e => {
            if (e.guildId !== t.id || !e.prune.isPreview) return;
            let l = e.prune.days,
                n = e.prune.includeRoles,
                i = Number(e.prune.pruneCount);
            (0, h.nA)(e.guildId, l, n, i, e.prune.isFinished)
        };
        return d.h.subscribe("GUILD_PRUNE_UPDATE", e), () => {
            d.h.unsubscribe("GUILD_PRUNE_UPDATE", e)
        }
    }, [t.id, p, _]), i.useEffect(() => {
        null == b && c.A.updateEstimateV2(t.id, p, _)
    }, [t.id, p, _, b]);
    let v = i.useCallback(() => {
            c.A.prune(t.id, p, _), s(), (0, h.yb)()
        }, [t.id, p, _, s]),
        V = (0, C.yK)([x.A, m.A], () => {
            let e = x.A.getHighestRole(t);
            return a()(m.A.getSortedRoles(t.id)).filter(l => !(0, u.Oy)(l) && x.A.isRoleHigher(t, e, l)).map(e => {
                let {
                    id: t,
                    name: l
                } = e;
                return {
                    id: t,
                    label: l,
                    value: t
                }
            }).value()
        }, [t]);
    return (0, n.jsx)(r.aFV, {
        title: `${g.intl.string(g.t.zbyz7p)}—${null!=t?t.name:""}`,
        actions: [{
            text: g.intl.string(g.t["ETE/oC"]),
            onClick: s,
            variant: "secondary"
        }, {
            text: g.intl.string(g.t["2mIlKQ"]),
            onClick: v
        }],
        onClose: async () => {
            await s()
        },
        transitionState: l,
        children: (0, n.jsxs)("div", {
            className: H.Q,
            children: [(0, n.jsx)(o.z6M, {
                label: g.intl.string(g.t.YccTvK),
                value: String(p),
                options: [{
                    name: g.intl.formatToPlainString(g.t.FM1dHS, {
                        days: 7
                    }),
                    value: "7"
                }, {
                    name: g.intl.formatToPlainString(g.t.FM1dHS, {
                        days: 30
                    }),
                    value: "30"
                }],
                onChange: e => {
                    j(Number(e))
                }
            }), (0, n.jsx)(o.IpV, {
                className: H.X,
                children: (0, n.jsx)(o.ZiE, {
                    selectionMode: "multiple",
                    label: g.intl.string(g.t.buoe17),
                    maxOptionsVisible: 10,
                    value: _,
                    onSelectionChange: e => f(e),
                    options: V
                })
            }), (0, n.jsx)(o.Text, {
                variant: "text-sm/normal",
                children: _.length > 0 ? g.intl.format(A ? g.t.xSDcLk : g.t["5WxHHp"], {
                    members: b ?? -1,
                    days: p
                }) : g.intl.format(A ? g.t["98cHOp"] : g.t.f13az9, {
                    members: b ?? -1,
                    days: p
                })
            })]
        })
    })
}