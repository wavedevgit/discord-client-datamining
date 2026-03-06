/** chunk id: 53977 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    l = n(64700),
    a = n(397927),
    s = n(566605),
    r = n(379848),
    o = n(183555),
    d = n(357541),
    c = n(814221),
    u = n(266713),
    m = n(985018),
    g = n(119575);

function x() {
    let {
        trackUserProfileAction: e,
        trackUserProfileEditAction: t
    } = (0, o.NJ)(), x = l.useRef(!1), {
        suggestions: f,
        currentUser: p,
        isLoading: h
    } = (0, s.A)({
        location: "UserProfileModalV2ApplicationWidgetsEmptyState"
    }), _ = f?.[0], A = l.useCallback(() => {
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
            h || null == _ || x.current || (e({
                action: "VIEW_APPLICATION_WIDGETS_EMPTY_STATE",
                applicationId: _.application.id
            }), x.current = !0)
        }, [h, e, _]), h) return (0, i.jsx)("div", {
        className: g.L,
        children: (0, i.jsx)(a.y$y, {})
    });
    if (null == _) return (0, i.jsx)(u.A, {});
    let I = (0, i.jsxs)(a.BJc, {
        gap: 4,
        className: g.w,
        children: [(0, i.jsx)(a.Heading, {
            variant: "heading-md/medium",
            color: "text-strong",
            children: m.intl.string(m.t["oqalC+"])
        }), (0, i.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: m.intl.format(m.t.YnNFWa, {
                applicationName: _.application.name
            })
        })]
    });
    return (0, i.jsx)(r.Ay, {
        contentTypes: [_.dismissibleContent],
        bypassAutoDismiss: !0,
        children: e => {
            let {
                visibleContent: t,
                markAsDismissed: n
            } = e;
            return t === _.dismissibleContent ? (0, i.jsxs)(a.BJc, {
                gap: 16,
                align: "center",
                children: [(0, i.jsx)(a.hKd, {
                    size: 32
                }), I, (0, i.jsx)(d.A, {
                    user: p,
                    application: _.application,
                    onDismiss: n
                }), (0, i.jsx)(c.A, {})]
            }) : (0, i.jsxs)(a.BJc, {
                gap: 32,
                align: "center",
                children: [(0, i.jsx)(a.hKd, {
                    size: 128
                }), I, (0, i.jsx)(a.Button, {
                    icon: a.j96,
                    text: m.intl.string(m.t["lBG2s/"]),
                    size: "md",
                    color: "secondary",
                    onClick: A
                })]
            })
        }
    })
}