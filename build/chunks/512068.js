/** Chunk was on 35894 **/
/** chunk id: 512068, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(735438),
    o = n.n(i),
    a = n(311907),
    s = n(732955),
    c = n(397927),
    u = n(437553),
    d = n(34457),
    C = n(317525),
    m = n(576705),
    p = n(985018),
    b = n(510403);
let f = e => {
    let {
        guild: t,
        transitionState: n,
        onClose: i
    } = e, [f, j] = l.useState(7), [g, h] = l.useState(null), [x, y] = l.useState([]), O = l.useCallback(async () => {
        h(null), h(await u.A.updateEstimate(t.id, f, x))
    }, [f, t.id, x]);
    l.useEffect(() => {
        O()
    }, [O]);
    let v = l.useCallback(() => {
            u.A.prune(t.id, f, x), i()
        }, [t.id, f, x, i]),
        _ = (0, a.yK)([m.A, C.A], () => {
            let e = m.A.getHighestRole(t);
            return o()(C.A.getSortedRoles(t.id)).filter(n => !(0, d.Oy)(n) && m.A.isRoleHigher(t, e, n)).map(e => {
                let {
                    id: t,
                    name: n
                } = e;
                return {
                    id: t,
                    label: n,
                    value: t
                }
            }).value()
        }, [t]);
    return (0, r.jsx)(s.aFV, {
        title: "".concat(p.intl.string(p.t.zbyz7p), "—").concat(null != t ? t.name : ""),
        actions: [{
            text: p.intl.string(p.t["ETE/oC"]),
            onClick: i,
            variant: "secondary"
        }, {
            text: p.intl.string(p.t["2mIlKQ"]),
            onClick: v
        }],
        onClose: async () => {
            await i()
        },
        transitionState: n,
        children: (0, r.jsxs)("div", {
            className: b.Q,
            children: [(0, r.jsx)(c.z6M, {
                label: p.intl.string(p.t.YccTvK),
                value: String(f),
                options: [{
                    name: p.intl.formatToPlainString(p.t.FM1dHS, {
                        days: 7
                    }),
                    value: "7"
                }, {
                    name: p.intl.formatToPlainString(p.t.FM1dHS, {
                        days: 30
                    }),
                    value: "30"
                }],
                onChange: e => {
                    j(Number(e))
                }
            }), (0, r.jsx)(c.IpV, {
                className: b.X,
                children: (0, r.jsx)(c.ZiE, {
                    selectionMode: "multiple",
                    label: p.intl.string(p.t.buoe17),
                    maxOptionsVisible: 10,
                    value: x,
                    onSelectionChange: e => y(e),
                    options: _
                })
            }), (0, r.jsx)(c.Text, {
                variant: "text-sm/normal",
                children: x.length > 0 ? p.intl.format(p.t["5WxHHp"], {
                    members: g,
                    days: f
                }) : p.intl.format(p.t.f13az9, {
                    members: g,
                    days: f
                })
            })]
        })
    })
}