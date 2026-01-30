/** chunk id: 568834, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(896048), n(264879);
var a = n(627968),
    l = n(64700),
    r = n(311907),
    i = n(554146),
    s = n(397927),
    o = n(541689),
    c = n(199773),
    d = n(963763),
    u = n(64343),
    m = n(821052),
    p = n(594061),
    h = n(304932);

function x() {
    let {
        dailyCapReached: e,
        dailyCapOverridden: t,
        newUserMinAgeRequiredOverridden: n
    } = (0, r.cf)([c.A], () => ({
        dailyCapReached: c.A.hasUserHitDCCap(),
        dailyCapOverridden: c.A.dailyCapOverridden,
        newUserMinAgeRequiredOverridden: c.A.newUserMinAgeRequiredOverridden
    })), [x, g] = l.useState(""), [f, b] = l.useState(20), v = l.useMemo(() => Object.keys(i.M).filter(e => e.toLowerCase().includes(x.toLowerCase())).reverse(), [x]), j = l.useCallback(e => {
        let t = e.currentTarget;
        t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && f < v.length && b(e => e + 100)
    }, [f, v.length]);
    return (0, a.jsx)(s.ChK, {
        onScroll: j,
        children: (0, a.jsxs)("div", {
            className: h.KE,
            children: [(0, a.jsxs)(s.nVY, {
                label: "Dismissible Content Overrides",
                children: [(0, a.jsxs)(s.BJc, {
                    gap: 4,
                    children: [(0, a.jsxs)(s.BJc, {
                        gap: 4,
                        direction: "horizontal",
                        children: [(0, a.jsx)(s.Button, {
                            variant: "primary",
                            text: "Reset Daily Cap",
                            onClick: () => (0, o.Ab)()
                        }), (0, a.jsx)(s.Button, {
                            variant: "primary",
                            text: "Clear All",
                            onClick: () => (0, p.nT)()
                        }), (0, a.jsx)(s.Button, {
                            variant: "primary",
                            text: "Check All",
                            onClick: () => (0, p.D1)()
                        })]
                    }), (0, a.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: "Daily Cap Reached: ".concat(e ? "Yes" : "No")
                    })]
                }), (0, a.jsx)(s.dOG, {
                    label: "Override Dismissible Content Daily Cap",
                    checked: t,
                    onChange: o.SE
                }), (0, a.jsx)(s.dOG, {
                    label: "Override Minimum User Account Age Requirement",
                    checked: n,
                    onChange: o.U$
                })]
            }), (0, a.jsx)(m.A, {}), (0, a.jsx)(u.A, {}), (0, a.jsxs)(s.nVY, {
                label: "All Dismissible Contents",
                children: [(0, a.jsx)(s.IWV, {
                    query: x,
                    onChange: g,
                    onClear: () => g("")
                }), (0, a.jsx)(d.A, {
                    items: v.slice(0, f)
                })]
            })]
        })
    })
}