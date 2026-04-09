/** chunk id: 53977 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968),
    l = n(64700),
    a = n(397927),
    s = n(566605),
    r = n(379848),
    o = n(183555),
    c = n(357541),
    d = n(814221),
    u = n(266713),
    m = n(985018),
    g = n(324679);

function f() {
    let {
        trackUserProfileAction: e,
        trackUserProfileEditAction: t
    } = (0, o.NJ)(), f = l.useRef(!1), {
        suggestions: x,
        currentUser: p,
        isLoading: _
    } = (0, s.A)({
        location: "UserProfileModalV2ApplicationWidgetsEmptyState"
    }), I = x?.[0], h = l.useCallback(() => {
        t({
            action: "PRESS_ADD_WIDGET"
        }), (0, a.mMO)(async () => {
            let {
                default: e
            } = await n.e("87591").then(n.bind(n, 333114));
            return n => (0, i.jsx)(e, {
                ...n,
                trackUserProfileEditAction: t
            })
        }, {
            stackingBehavior: "stack"
        })
    }, [t]);
    if (l.useEffect(() => {
            _ || null == I || f.current || (e({
                action: "VIEW_APPLICATION_WIDGETS_EMPTY_STATE",
                applicationId: I.application.id
            }), f.current = !0)
        }, [_, e, I]), _) return (0, i.jsx)("div", {
        className: g.Lq,
        children: (0, i.jsx)(a.y$y, {})
    });
    if (null == I) return (0, i.jsx)(u.A, {});
    let A = (0, i.jsxs)(a.BJc, {
        gap: 4,
        className: g.wx,
        children: [(0, i.jsx)(a.Heading, {
            variant: "heading-md/medium",
            color: "text-strong",
            children: m.intl.string(m.t["oqalC+"])
        }), (0, i.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: m.intl.format(m.t.YnNFWa, {
                applicationName: I.application.name
            })
        })]
    });
    return (0, i.jsx)(r.Ay, {
        contentTypes: [I.dismissibleContent],
        bypassAutoDismiss: !0,
        children: e => {
            let {
                visibleContent: t,
                markAsDismissed: n
            } = e;
            return t === I.dismissibleContent ? (0, i.jsxs)(a.BJc, {
                gap: 16,
                align: "center",
                children: [(0, i.jsx)(a.hKd, {
                    size: 32
                }), A, (0, i.jsx)("div", {
                    className: g.Zj,
                    children: (0, i.jsx)(c.A, {
                        user: p,
                        application: I.application,
                        onDismiss: n
                    })
                }), (0, i.jsx)(d.A, {})]
            }) : (0, i.jsxs)(a.BJc, {
                gap: 32,
                align: "center",
                children: [(0, i.jsx)(a.hKd, {
                    size: 128
                }), A, (0, i.jsx)(a.Button, {
                    icon: a.j96,
                    text: m.intl.string(m.t["lBG2s/"]),
                    size: "md",
                    variant: "secondary",
                    onClick: h
                })]
            })
        }
    })
}