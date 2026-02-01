/** chunk id: 866945, original params: e,t,n (module,exports,require) **/
n.d(t, {
    e: () => p
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(558001),
    c = n(835002),
    u = n(985018),
    d = n(486529);

function p(e) {
    let {
        label: t,
        labelHook: n,
        count: i,
        dismissNotice: p,
        className: h,
        noticeType: g
    } = e, f = null != p;
    l.useEffect(() => {
        (0, o.N)(g, c.YX.VIEWED)
    }, [g]);
    let m = l.useCallback(() => {
            null != p && (p(), (0, o.N)(g, c.YX.DISMISS))
        }, [g, p]),
        b = l.useCallback(() => {
            n(), (0, o.N)(g, c.YX.LEARN_MORE)
        }, [g, n]);
    return (0, r.jsxs)("div", {
        className: s()(d.I, h),
        children: [(0, r.jsx)(a.mir, {
            size: "md"
        }), (0, r.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "interactive-text-active",
            children: null != i ? u.intl.format(t, {
                hook: (e, t) => (0, r.jsx)(a.MzZ, {
                    onClick: b,
                    children: e
                }, t),
                count: i
            }) : u.intl.format(t, {
                hook: (e, t) => (0, r.jsx)(a.MzZ, {
                    onClick: b,
                    children: e
                }, t)
            })
        }), f && (0, r.jsx)(a.DUT, {
            className: d.b,
            onClick: m,
            children: (0, r.jsx)(a.PGe, {})
        })]
    })
}