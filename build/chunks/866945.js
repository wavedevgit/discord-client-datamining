/** chunk id: 866945, original params: e,t,n (module,exports,require) **/
n.d(t, {
    e: () => _
});
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(397927),
    o = n(558001),
    c = n(835002),
    d = n(985018),
    u = n(486529);

function _(e) {
    let {
        label: t,
        labelHook: n,
        count: a,
        dismissNotice: _,
        className: m,
        noticeType: A
    } = e, g = null != _;
    s.useEffect(() => {
        (0, o.N)(A, c.YX.VIEWED)
    }, [A]);
    let h = s.useCallback(() => {
            null != _ && (_(), (0, o.N)(A, c.YX.DISMISS))
        }, [A, _]),
        x = s.useCallback(() => {
            n(), (0, o.N)(A, c.YX.LEARN_MORE)
        }, [A, n]);
    return (0, i.jsxs)("div", {
        className: l()(u.I, m),
        children: [(0, i.jsx)(r.mir, {
            size: "md"
        }), (0, i.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "interactive-text-active",
            children: null != a ? d.intl.format(t, {
                hook: (e, t) => (0, i.jsx)(r.MzZ, {
                    onClick: x,
                    children: e
                }, t),
                count: a
            }) : d.intl.format(t, {
                hook: (e, t) => (0, i.jsx)(r.MzZ, {
                    onClick: x,
                    children: e
                }, t)
            })
        }), g && (0, i.jsx)(r.DUT, {
            className: u.b,
            onClick: h,
            children: (0, i.jsx)(r.PGe, {})
        })]
    })
}