/** chunk id: 397938 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S
});
var i = n(627968),
    s = n(64700),
    l = n(837381),
    r = n(311907),
    a = n(827734),
    o = n(397927),
    c = n(941971),
    d = n(900848),
    u = n(371911),
    h = n(222823),
    A = n(309010),
    m = n(287809),
    p = n(851109),
    g = n(394953),
    _ = n(355216),
    f = n(596540),
    x = n(879221);
n(445368);
var C = n(652215),
    E = n(790782),
    I = n(877066);

function N() {
    let e = (0, r.bG)([m.default], () => m.default.getCurrentUser());
    return (0, r.bG)([h.Ay], () => e?.id != null && h.Ay.getMentionCount(e.id, E.P.NOTIFICATION_CENTER) > 0)
}

function b(e) {
    let {
        onClick: t,
        selectedOverride: n = !1,
        popoutProps: u,
        ref: h
    } = e, m = (0, l.Vd)("notifications-inbox"), [f, E] = s.useState(!1), b = (0, g.lI)(), S = n || b, {
        notificationCenterVariant: T
    } = (0, p.X8)({
        location: "NotificationsInboxButtonInner"
    }), {
        badge: v,
        badgeDimensions: y,
        unreadChannelsCount: j
    } = function(e) {
        let {
            notificationCenterVariant: t
        } = (0, p.X8)({
            location: "NotificationsInboxButtonInner"
        }), {
            unreadChannelIds: n
        } = (0, g.U4)(), s = N(), {
            badge: l,
            dimensions: r
        } = (0, _.ux)({
            isSelected: e
        });
        return t === p.U5.LEGACY ? {
            badge: s ? (0, i.jsx)(o.SC0, {
                style: {
                    height: 13,
                    width: 13,
                    position: "relative"
                },
                color: a.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css
            }) : null,
            unreadChannelsCount: 0,
            badgeDimensions: {
                height: 13,
                width: 13
            }
        } : {
            badge: l,
            unreadChannelsCount: n.length,
            badgeDimensions: r
        }
    }(S), R = T === p.U5.LEGACY ? o.K$s : o.XFE, O = (0, r.bG)([A.A], () => A.A.getChannelId()), L = s.useMemo(() => {
        if (T === p.U5.SIDEBAR) return C.BVt.CHANNEL(C.gNP, O)
    }, [T, O]);
    return (0, i.jsxs)(d.c, {
        ref: h,
        children: [(0, i.jsx)(c.A, {
            selected: S && T === p.U5.SIDEBAR,
            hovered: f && T === p.U5.SIDEBAR,
            unread: j > 0,
            className: I.Io,
            disabled: T === p.U5.LEGACY
        }), (0, i.jsx)(x.A, {
            children: (0, i.jsx)(o.Qk9, {
                selected: S || f,
                lowerBadge: v,
                lowerBadgeSize: y,
                children: (0, i.jsx)(o.jlP, {
                    ...m,
                    ...u,
                    onClick: t,
                    to: L,
                    selected: S || f,
                    onMouseEnter: () => E(!0),
                    onMouseLeave: () => E(!1),
                    children: (0, i.jsx)(R, {
                        size: "custom",
                        color: "currentColor",
                        className: I.iZ,
                        width: 20,
                        height: 20
                    })
                })
            })
        })]
    })
}

function S() {
    let e = s.useRef(null),
        {
            notificationCenterVariant: t
        } = (0, p.X8)({
            location: "NotificationsInboxButton"
        }),
        n = N(),
        l = (0, _.HN)();
    return t === p.U5.SIDEBAR ? (0, i.jsx)(b, {
        onClick: l
    }) : t === p.U5.POPOUT ? (0, i.jsx)(f.A, {
        targetElementRef: e,
        popoutPosition: "right",
        popoutAlign: "bottom",
        children: (t, n, s) => (0, i.jsx)(b, {
            ref: e,
            selectedOverride: n,
            onClick: () => {
                l(), t()
            },
            popoutProps: s
        })
    }) : t === p.U5.LEGACY ? (0, i.jsx)(u.C, {
        spacing: 0,
        badgeState: {
            badgeForYou: n
        },
        targetElementRef: e,
        popoutPosition: "right",
        popoutAlign: "top",
        children: (t, n, s) => (0, i.jsx)(b, {
            ref: e,
            selectedOverride: n,
            onClick: () => {
                l(), t()
            },
            popoutProps: s
        })
    }) : null
}