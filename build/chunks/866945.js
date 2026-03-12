/** chunk id: 866945 params = (module,exports,require) **/
n.d(t, {
    e: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
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
        className: m,
        noticeType: g
    } = e, A = null != _;
    s.useEffect(() => {
        (0, o.N)(g, d.YX.VIEWED)
    }, [g]);
    let h = s.useCallback(() => {
            null != _ && (_(), (0, o.N)(g, d.YX.DISMISS))
        }, [g, _]),
        x = s.useCallback(() => {
            n(), (0, o.N)(g, d.YX.LEARN_MORE)
        }, [g, n]);
    return (0, i.jsxs)("div", {
        className: r()(u.I, m),
        children: [(0, i.jsx)(a.mir, {
            size: "md"
        }), (0, i.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "interactive-text-active",
            children: null != l ? c.intl.format(t, {
                hook: (e, t) => (0, i.jsx)(a.MzZ, {
                    onClick: x,
                    children: e
                }, t),
                count: l
            }) : c.intl.format(t, {
                hook: (e, t) => (0, i.jsx)(a.MzZ, {
                    onClick: x,
                    children: e
                }, t)
            })
        }), A && (0, i.jsx)(a.DUT, {
            className: u.b,
            onClick: h,
            children: (0, i.jsx)(a.PGe, {})
        })]
    })
}