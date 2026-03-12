/** chunk id: 478407 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(166403),
    o = n(510898),
    d = n(985018),
    c = n(360953);

function u(e) {
    let {
        onGoBack: t
    } = e, n = (0, l.yK)([a.A], () => a.A.getActiveApplicationSubscriptions()?.slice().sort((e, t) => (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) - (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime())) ?? []), [r, u] = s.useState();
    return null == r && (r = (0, i.jsx)(_, {
        onBack: t,
        title: d.intl.string(d.t["DB/m9a"])
    })), (0, i.jsxs)("div", {
        children: [r, (0, i.jsx)("div", {
            className: c.A,
            children: (0, i.jsx)(o.A, {
                subscriptions: n,
                updateHeader: (e, t) => {
                    u((0, i.jsx)(_, {
                        title: e,
                        onBack: () => {
                            t(), u(void 0)
                        }
                    }))
                }
            })
        })]
    })
}

function _(e) {
    let {
        onBack: t,
        title: n
    } = e;
    return (0, i.jsxs)("div", {
        className: c.D,
        children: [(0, i.jsx)(r.K0, {
            "aria-label": d.intl.string(d.t["13/7kX"]),
            icon: () => (0, i.jsx)(r.Zge, {
                size: "sm"
            }),
            onClick: t,
            variant: "icon-only"
        }), (0, i.jsx)(r.Heading, {
            variant: "heading-lg/semibold",
            children: n
        })]
    })
}