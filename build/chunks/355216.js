/** Chunk was on 1113 **/
/** chunk id: 355216, original params: e,t,n (module,exports,require) **/
n.d(t, {
    HN: () => m,
    ux: () => b
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(187508),
    u = n(851109),
    d = n(599486),
    h = n(394953),
    p = n(628325),
    g = n(849077);
n(445368);
var f = n(626600);

function m() {
    let {
        setSelectedFilter: e
    } = (0, d.A)(), t = (0, p.S)(e => e.setInboxReadState);
    return () => {
        e(g.Io.ALL), t(!1)
    }
}

function b(e) {
    let t, n, i, {
            isSelected: d
        } = e,
        {
            unreadRecentMentionsCount: p,
            unreadChannelIds: g
        } = (0, h.U4)(),
        m = (t = function() {
            let {
                unreadRecentMentionsCount: e
            } = (0, h.U4)(), {
                hasMoreMentions: t,
                mentionsLoading: n
            } = (0, a.cf)([c.Ay], () => ({
                hasMoreMentions: c.Ay.hasMore,
                mentionsLoading: c.Ay.loading
            })), r = Math.min(e, 25), l = e > r || t || n, i = (0, o.o6S)(r) + 6 * !!l;
            return {
                clampedCount: r,
                isEstimated: l,
                width: i
            }
        }(), n = l.useCallback(e => t.isEstimated ? "".concat(e, "+") : e, [t.isEstimated]), i = l.useMemo(() => (function(e, t) {
            let {
                clampedCount: n,
                width: l
            } = e;
            return (0, r.jsx)(o.hVq, {
                count: n,
                renderBadgeCount: t,
                style: {
                    width: l
                },
                className: f.xF
            })
        })(t, n), [t, n]), l.useMemo(() => ({
            badge: i,
            badgeType: "mentions",
            dimensions: {
                height: 16,
                width: t.width
            }
        }), [i, t.width])),
        {
            entrypoint: b
        } = (0, u.X8)({
            location: "useInboxBadgeInfo"
        });
    return l.useMemo(() => {
        if (p > 0) return m;
        let e = g.length;
        if (0 === e) return {
            badge: null,
            badgeType: null
        };
        if (b === u.RK.SERVER_RAIL_TOP) {
            let t, n = (0, o.o6S)(e) - 3;
            return {
                badge: (t = (0, o.o6S)(e) - 3, (0, r.jsx)(o.hVq, {
                    count: e,
                    style: {
                        width: t,
                        lineHeight: 13,
                        height: 13,
                        minHeight: 13,
                        minWidth: 13
                    },
                    className: s()(f.xF, f.pw, {
                        [f.wH]: d
                    })
                })),
                badgeType: "unread",
                dimensions: {
                    height: 13,
                    width: n
                }
            }
        }
        return b === u.RK.TITLE_BAR_LEFT ? {
            badge: (0, r.jsx)(o.Text, {
                variant: "eyebrow",
                children: (0, o.Gub)(e)
            }),
            badgeType: "unread"
        } : {
            badge: null,
            badgeType: null
        }
    }, [p, m, g.length, b, d])
}