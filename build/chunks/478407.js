/** chunk id: 478407 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(166403),
    o = n(510898),
    d = n(985018),
    c = n(606889);

function u(e) {
    let {
        onGoBack: t
    } = e, n = (0, l.yK)([r.A], () => r.A.getActiveApplicationSubscriptions()?.slice().sort((e, t) => (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) - (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime())) ?? []), [a, u] = s.useState();
    return null == a && (a = (0, i.jsx)(m, {
        onBack: t,
        title: d.intl.string(d.t["DB/m9a"])
    })), (0, i.jsxs)("div", {
        children: [a, (0, i.jsx)("div", {
            className: c.A,
            children: (0, i.jsx)(o.A, {
                subscriptions: n,
                updateHeader: (e, t) => {
                    u((0, i.jsx)(m, {
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

function m(e) {
    let {
        onBack: t,
        title: n
    } = e;
    return (0, i.jsxs)("div", {
        className: c.D,
        children: [(0, i.jsx)(a.K0, {
            "aria-label": d.intl.string(d.t["13/7kX"]),
            icon: () => (0, i.jsx)(a.Zge, {
                size: "sm"
            }),
            onClick: t,
            variant: "icon-only"
        }), (0, i.jsx)(a.Heading, {
            variant: "heading-lg/semibold",
            children: n
        })]
    })
}