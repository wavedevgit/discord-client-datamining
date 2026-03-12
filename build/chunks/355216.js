/** chunk id: 355216 params = (module,exports,require) **/
"use strict";
n.d(t, {
    HN: () => g,
    ux: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    c = n(187508),
    d = n(851109),
    u = n(599486),
    h = n(394953),
    A = n(628325),
    m = n(849077);
n(445368);
var p = n(877066);

function g() {
    let {
        setSelectedFilter: e
    } = (0, u.A)(), t = (0, A.S)(e => e.setInboxReadState);
    return () => {
        e(m.Io.ALL), t(!1)
    }
}

function _(e) {
    let t, n, l, {
            isSelected: u
        } = e,
        {
            unreadRecentMentionsCount: A,
            unreadChannelIds: m
        } = (0, h.U4)(),
        g = (t = function() {
            let {
                unreadRecentMentionsCount: e
            } = (0, h.U4)(), {
                hasMoreMentions: t,
                mentionsLoading: n
            } = (0, r.cf)([c.Ay], () => ({
                hasMoreMentions: c.Ay.hasMore,
                mentionsLoading: c.Ay.loading
            })), i = Math.min(e, 25), s = e > i || t || n, l = (0, o.o6S)(i) + 6 * !!s;
            return {
                clampedCount: i,
                isEstimated: s,
                width: l
            }
        }(), n = s.useCallback(e => t.isEstimated ? `${e}+` : e, [t.isEstimated]), l = s.useMemo(() => (function(e, t) {
            let {
                clampedCount: n,
                width: s
            } = e;
            return (0, i.jsx)(o.hVq, {
                count: n,
                renderBadgeCount: t,
                style: {
                    width: s
                },
                className: p.xF
            })
        })(t, n), [t, n]), s.useMemo(() => ({
            badge: l,
            badgeType: "mentions",
            dimensions: {
                height: 16,
                width: t.width
            }
        }), [l, t.width])),
        {
            entrypoint: _
        } = (0, d.X8)({
            location: "useInboxBadgeInfo"
        });
    return s.useMemo(() => {
        if (A > 0) return g;
        let e = m.length;
        if (0 === e) return {
            badge: null,
            badgeType: null
        };
        if (_ === d.RK.SERVER_RAIL_TOP) {
            let t, n = (0, o.o6S)(e) - 3;
            return {
                badge: (t = (0, o.o6S)(e) - 3, (0, i.jsx)(o.hVq, {
                    count: e,
                    style: {
                        width: t,
                        lineHeight: 13,
                        height: 13,
                        minHeight: 13,
                        minWidth: 13
                    },
                    className: a()(p.xF, p.pw, {
                        [p.wH]: u
                    })
                })),
                badgeType: "unread",
                dimensions: {
                    height: 13,
                    width: n
                }
            }
        }
        return _ === d.RK.TITLE_BAR_LEFT ? {
            badge: (0, i.jsx)(o.Text, {
                variant: "eyebrow",
                children: (0, o.Gub)(e)
            }),
            badgeType: "unread"
        } : {
            badge: null,
            badgeType: null
        }
    }, [A, g, m.length, _, u])
}