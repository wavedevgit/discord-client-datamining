/** chunk id: 866945 params = (module,exports,require) **/
n.d(t, {
    e: () => m
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    o = n(558001),
    d = n(835002),
    c = n(985018),
    u = n(486529);

function m(e) {
    let {
        label: t,
        labelHook: n,
        count: l,
        dismissNotice: m,
        className: g,
        noticeType: _
    } = e, x = null != m;
    s.useEffect(() => {
        (0, o.N)(_, d.YX.VIEWED)
    }, [_]);
    let A = s.useCallback(() => {
            null != m && (m(), (0, o.N)(_, d.YX.DISMISS))
        }, [_, m]),
        h = s.useCallback(() => {
            n(), (0, o.N)(_, d.YX.LEARN_MORE)
        }, [_, n]);
    return (0, i.jsxs)("div", {
        className: a()(u.I, g),
        children: [(0, i.jsx)(r.mir, {
            size: "md"
        }), (0, i.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "interactive-text-active",
            children: null != l ? c.intl.format(t, {
                hook: (e, t) => (0, i.jsx)(r.MzZ, {
                    onClick: h,
                    children: e
                }, t),
                count: l
            }) : c.intl.format(t, {
                hook: (e, t) => (0, i.jsx)(r.MzZ, {
                    onClick: h,
                    children: e
                }, t)
            })
        }), x && (0, i.jsx)(r.DUT, {
            className: u.b,
            onClick: A,
            children: (0, i.jsx)(r.PGe, {})
        })]
    })
}