/** chunk id: 866945, original params: e,t,n (module,exports,require) **/
n.d(t, {
    e: () => h
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(397927),
    o = n(558001),
    c = n(835002),
    d = n(985018),
    u = n(486529);

function h(e) {
    let {
        label: t,
        labelHook: n,
        count: s,
        dismissNotice: h,
        className: g,
        noticeType: x
    } = e, p = null != h;
    l.useEffect(() => {
        (0, o.N)(x, c.YX.VIEWED)
    }, [x]);
    let m = l.useCallback(() => {
            null != h && (h(), (0, o.N)(x, c.YX.DISMISS))
        }, [x, h]),
        A = l.useCallback(() => {
            n(), (0, o.N)(x, c.YX.LEARN_MORE)
        }, [x, n]);
    return (0, i.jsxs)("div", {
        className: r()(u.I, g),
        children: [(0, i.jsx)(a.mir, {
            size: "md"
        }), (0, i.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "interactive-text-active",
            children: null != s ? d.intl.format(t, {
                hook: (e, t) => (0, i.jsx)(a.MzZ, {
                    onClick: A,
                    children: e
                }, t),
                count: s
            }) : d.intl.format(t, {
                hook: (e, t) => (0, i.jsx)(a.MzZ, {
                    onClick: A,
                    children: e
                }, t)
            })
        }), p && (0, i.jsx)(a.DUT, {
            className: u.b,
            onClick: m,
            children: (0, i.jsx)(a.PGe, {})
        })]
    })
}