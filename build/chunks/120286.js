/** chunk id: 120286 params = (module,exports,require) **/
"use strict";
s.d(t, {
    k: () => g
});
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(397927),
    o = s(496431),
    c = s(854818),
    d = s(985018),
    u = s(115870);
let _ = {
        pink: "pinkCountdown"
    },
    g = l.memo(function(e) {
        let {
            message: t,
            onClick: s,
            countdownEndDate: r,
            variant: g
        } = e, m = l.useMemo(() => {
            if (null == r) return null;
            let e = r instanceof Date ? r : new Date(r);
            return isNaN(e.getTime()) ? null : e
        }, [r]), h = (0, o.A)(m ?? 0, 1e3, void 0, null == m);
        if (null != m && Object.values(h).every(e => 0 === e)) return null;
        let p = null != g ? u[g] : void 0,
            f = null != g ? u[_[g]] : void 0;
        return (0, n.jsx)(i.DUT, {
            className: a()(u.nagBar, p),
            onClick: s,
            "aria-label": d.intl.string(d.t["wjws+K"]),
            children: (0, n.jsxs)("div", {
                className: u.content,
                children: [(0, n.jsx)(i.Text, {
                    variant: "text-md/medium",
                    color: "always-white",
                    className: u.message,
                    children: t
                }), null != m && (0, n.jsx)(c.e, {
                    endDate: m,
                    size: "md",
                    className: f,
                    showSeconds: !0
                })]
            })
        })
    })