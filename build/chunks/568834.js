/** chunk id: 568834, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var a = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(554146),
    r = n(397927),
    o = n(541689),
    d = n(199773),
    c = n(963763),
    u = n(64343),
    m = n(821052),
    h = n(594061),
    p = n(304932);

function x() {
    let {
        dailyCapReached: e,
        dailyCapOverridden: t,
        newUserMinAgeRequiredOverridden: n
    } = (0, s.cf)([d.A], () => ({
        dailyCapReached: d.A.hasUserHitDCCap(),
        dailyCapOverridden: d.A.dailyCapOverridden,
        newUserMinAgeRequiredOverridden: d.A.newUserMinAgeRequiredOverridden
    })), [x, g] = i.useState(""), [_, f] = i.useState(20), b = i.useMemo(() => Object.keys(l.M).filter(e => e.toLowerCase().includes(x.toLowerCase())).reverse(), [x]), v = i.useCallback(e => {
        let t = e.currentTarget;
        t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && _ < b.length && f(e => e + 100)
    }, [_, b.length]);
    return (0, a.jsx)(r.ChK, {
        onScroll: v,
        children: (0, a.jsxs)("div", {
            className: p.KE,
            children: [(0, a.jsxs)(r.nVY, {
                label: "Dismissible Content Overrides",
                children: [(0, a.jsxs)(r.BJc, {
                    gap: 4,
                    children: [(0, a.jsxs)(r.BJc, {
                        gap: 4,
                        direction: "horizontal",
                        children: [(0, a.jsx)(r.Button, {
                            variant: "primary",
                            text: "Reset Daily Cap",
                            onClick: () => (0, o.Ab)()
                        }), (0, a.jsx)(r.Button, {
                            variant: "primary",
                            text: "Clear All",
                            onClick: () => (0, h.nT)()
                        }), (0, a.jsx)(r.Button, {
                            variant: "primary",
                            text: "Check All",
                            onClick: () => (0, h.D1)()
                        })]
                    }), (0, a.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: `Daily Cap Reached: ${e?"Yes":"No"}`
                    })]
                }), (0, a.jsx)(r.dOG, {
                    label: "Override Dismissible Content Daily Cap",
                    checked: t,
                    onChange: o.SE
                }), (0, a.jsx)(r.dOG, {
                    label: "Override Minimum User Account Age Requirement",
                    checked: n,
                    onChange: o.U$
                })]
            }), (0, a.jsx)(m.A, {}), (0, a.jsx)(u.A, {}), (0, a.jsxs)(r.nVY, {
                label: "All Dismissible Contents",
                children: [(0, a.jsx)(r.IWV, {
                    query: x,
                    onChange: g,
                    onClear: () => g("")
                }), (0, a.jsx)(c.A, {
                    items: b.slice(0, _)
                })]
            })]
        })
    })
}