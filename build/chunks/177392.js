/** chunk id: 177392, original params: e,t,n (module,exports,require) **/
n.d(t, {
    H: () => f
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(970984),
    a = n(311907),
    o = n(397927),
    s = n(971778),
    c = n(652215),
    u = n(985018),
    d = n(144958);

function f() {
    let e = (0, a.bG)([s.A], () => s.A.getError());
    return e ? (0, r.jsx)(p, {
        error: e
    }) : null
}
let p = e => {
    let {
        error: t
    } = e, [n, a] = (0, l.useState)(!1), f = (0, o.pnh)(!n, {
        from: {
            opacity: 0,
            translateY: 20
        },
        enter: {
            opacity: 1,
            translateY: 0
        },
        leave: {
            opacity: 0,
            translateY: 80
        }
    }, "respect-motion-settings"), p = (() => {
        switch (t) {
            case s.L.ERROR_DOWNLOADING_DEPENDENCY:
                return u.intl.string(u.t.D9neaH);
            case s.L.ERROR_ACTIVATING_VOICE_FILTER:
                return u.intl.string(u.t.mNMZZg);
            default:
                return u.intl.string(u.t.F8FvUy)
        }
    })();
    return f(e => n ? null : (0, r.jsx)(i.animated.div, {
        style: e,
        className: d.z,
        children: (0, r.jsxs)("div", {
            className: d.A,
            children: [(0, r.jsx)(o.Text, {
                variant: "text-sm/semibold",
                color: "always-white",
                children: p
            }), (0, r.jsx)(o.PMB, {
                noticeType: c.kqX.VOICE_FILTERS_ERROR,
                onClick: () => a(!0)
            })]
        })
    }))
}