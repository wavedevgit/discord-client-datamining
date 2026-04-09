/** chunk id: 53977 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    a = n(64700),
    l = n(397927),
    s = n(566605),
    r = n(379848),
    o = n(183555),
    c = n(357541),
    d = n(814221),
    u = n(266713),
    g = n(985018),
    _ = n(324679);

function m() {
    let {
        trackUserProfileAction: e,
        trackUserProfileEditAction: t
    } = (0, o.NJ)(), m = a.useRef(!1), {
        suggestions: f,
        currentUser: x,
        isLoading: p
    } = (0, s.A)({
        location: "UserProfileModalV2ApplicationWidgetsEmptyState"
    }), I = f?.[0], A = a.useCallback(() => {
        t({
            action: "PRESS_ADD_WIDGET"
        }), (0, l.mMO)(async () => {
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
    if (a.useEffect(() => {
            p || null == I || m.current || (e({
                action: "VIEW_APPLICATION_WIDGETS_EMPTY_STATE",
                applicationId: I.application.id
            }), m.current = !0)
        }, [p, e, I]), p) return (0, i.jsx)("div", {
        className: _.Lq,
        children: (0, i.jsx)(l.y$y, {})
    });
    if (null == I) return (0, i.jsx)(u.A, {});
    let h = (0, i.jsxs)(l.BJc, {
        gap: 4,
        className: _.wx,
        children: [(0, i.jsx)(l.Heading, {
            variant: "heading-md/medium",
            color: "text-strong",
            children: g.intl.string(g.t["oqalC+"])
        }), (0, i.jsx)(l.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: g.intl.format(g.t.YnNFWa, {
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
            return t === I.dismissibleContent ? (0, i.jsxs)(l.BJc, {
                gap: 16,
                align: "center",
                children: [(0, i.jsx)(l.hKd, {
                    size: 32
                }), h, (0, i.jsx)("div", {
                    className: _.Zj,
                    children: (0, i.jsx)(c.A, {
                        user: x,
                        application: I.application,
                        onDismiss: n
                    })
                }), (0, i.jsx)(d.A, {})]
            }) : (0, i.jsxs)(l.BJc, {
                gap: 32,
                align: "center",
                children: [(0, i.jsx)(l.hKd, {
                    size: 128
                }), h, (0, i.jsx)(l.Button, {
                    icon: l.j96,
                    text: g.intl.string(g.t["lBG2s/"]),
                    size: "md",
                    variant: "secondary",
                    onClick: A
                })]
            })
        }
    })
}