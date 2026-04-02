/** chunk id: 594808 params = (module,exports,require) **/
n.d(t, {
    Ay: () => T,
    PS: () => h,
    S0: () => I
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(27867),
    _ = n(311907),
    s = n(397927),
    c = n(814890),
    d = n(436283),
    u = n(296043),
    m = n(652215),
    p = n(985018),
    f = n(747825);

function E(e) {
    return {
        text: e,
        icon: (0, r.jsx)(s.nvX, {
            className: f.Kk,
            dotRadius: 3.5,
            themed: !0
        })
    }
}

function h(e) {
    return {
        text: e ?? p.intl.string(p.t.VCsUJu),
        color: "text-feedback-critical",
        icon: (0, r.jsx)(s.EpV, {
            size: "xs",
            color: "currentColor",
            className: o()(f.Kk, f.ik)
        })
    }
}

function I(e) {
    let {
        className: t,
        icon: n,
        text: i,
        color: a
    } = e;
    return (0, r.jsxs)("div", {
        className: o()(f.iE, t),
        children: [n, (0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            color: a,
            scaleFontToUserSetting: !0,
            children: i
        })]
    })
}
let T = i.memo(function(e) {
    let {
        message: t,
        className: n,
        component: a
    } = e, o = (0, l.A)(), s = (0, _.bG)([d.Ay], () => d.Ay.getInteraction(t), [t]);
    i.useEffect(() => {
        let e = null;
        if (t.hasFlag(m.pr7.LOADING) && null != s) {
            let n = (0, u.I5)(t.id) - Date.now();
            n > 0 && (e = setTimeout(() => o(), 1e3 + n))
        }
        return () => {
            clearTimeout(e)
        }
    }, [o, s, t]);
    let f = null;
    if (null == a) f = function(e, t) {
        switch ((0, u.fK)(t, e)) {
            case u.h0.SENDING:
                return E(p.intl.string(p.t.RiLfBY));
            case u.h0.CREATED:
                return E(p.intl.formatToPlainString(p.t["7ePV4t"], {
                    applicationName: t.author.username
                }));
            case u.h0.TIMED_OUT:
                return h(p.intl.string(p.t.h8hzPd));
            case u.h0.FAILED:
                return h(t.interactionError)
        }
    }(s, t);
    else {
        let e = (0, c.zv)(s, t, a);
        null != e && (f = h(e))
    }
    if (null == f) return null;
    let {
        text: T,
        icon: g,
        color: C
    } = f;
    return (0, r.jsx)(I, {
        icon: g,
        text: T,
        className: n,
        color: C
    })
})