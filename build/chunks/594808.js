/** chunk id: 594808 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => v,
    PS: () => f,
    S0: () => x
});
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(27867),
    o = n(311907),
    u = n(397927),
    c = n(814890),
    d = n(436283),
    m = n(296043),
    h = n(652215),
    g = n(985018),
    p = n(133898);

function A(e) {
    return {
        text: e,
        icon: (0, l.jsx)(u.nvX, {
            className: p.Kk,
            dotRadius: 3.5,
            themed: !0
        })
    }
}

function f(e) {
    return {
        text: e ?? g.intl.string(g.t.VCsUJu),
        color: "text-feedback-critical",
        icon: (0, l.jsx)(u.EpV, {
            size: "xs",
            color: "currentColor",
            className: a()(p.Kk, p.ik)
        })
    }
}

function x(e) {
    let {
        className: t,
        icon: n,
        text: i,
        color: s
    } = e;
    return (0, l.jsxs)("div", {
        className: a()(p.iE, t),
        children: [n, (0, l.jsx)(u.Text, {
            variant: "text-md/normal",
            color: s,
            scaleFontToUserSetting: !0,
            children: i
        })]
    })
}
let v = i.memo(function(e) {
    let {
        message: t,
        className: n,
        component: s
    } = e, a = (0, r.A)(), u = (0, o.bG)([d.Ay], () => d.Ay.getInteraction(t), [t]);
    i.useEffect(() => {
        let e = null;
        if (t.hasFlag(h.pr7.LOADING) && null != u) {
            let n = (0, m.I5)(t.id) - Date.now();
            n > 0 && (e = setTimeout(() => a(), 1e3 + n))
        }
        return () => {
            clearTimeout(e)
        }
    }, [a, u, t]);
    let p = null;
    if (null == s) p = function(e, t) {
        switch ((0, m.fK)(t, e)) {
            case m.h0.SENDING:
                return A(g.intl.string(g.t.RiLfBY));
            case m.h0.CREATED:
                return A(g.intl.formatToPlainString(g.t["7ePV4t"], {
                    applicationName: t.author.username
                }));
            case m.h0.TIMED_OUT:
                return f(g.intl.string(g.t.h8hzPd));
            case m.h0.FAILED:
                return f(t.interactionError)
        }
    }(u, t);
    else {
        let e = (0, c.zv)(u, t, s);
        null != e && (p = f(e))
    }
    if (null == p) return null;
    let {
        text: v,
        icon: j,
        color: N
    } = p;
    return (0, l.jsx)(x, {
        icon: j,
        text: v,
        className: n,
        color: N
    })
})