/** chunk id: 866945 params = (module,exports,require) **/
n.d(t, {
    e: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    o = n(558001),
    d = n(835002),
    c = n(985018),
    u = n(855759);

function _(e) {
    let {
        label: t,
        labelHook: n,
        count: l,
        dismissNotice: _,
        className: g,
        noticeType: m
    } = e, A = null != _;
    s.useEffect(() => {
        (0, o.N)(m, d.YX.VIEWED)
    }, [m]);
    let h = s.useCallback(() => {
            null != _ && (_(), (0, o.N)(m, d.YX.DISMISS))
        }, [m, _]),
        p = s.useCallback(() => {
            n(), (0, o.N)(m, d.YX.LEARN_MORE)
        }, [m, n]);
    return (0, i.jsxs)("div", {
        className: a()(u.I, g),
        children: [(0, i.jsx)(r.mir, {
            size: "md"
        }), (0, i.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "interactive-text-active",
            children: null != l ? c.intl.format(t, {
                hook: (e, t) => (0, i.jsx)(r.MzZ, {
                    onClick: p,
                    children: e
                }, t),
                count: l
            }) : c.intl.format(t, {
                hook: (e, t) => (0, i.jsx)(r.MzZ, {
                    onClick: p,
                    children: e
                }, t)
            })
        }), A && (0, i.jsx)(r.DUT, {
            className: u.b,
            onClick: h,
            children: (0, i.jsx)(r.PGe, {})
        })]
    })
}