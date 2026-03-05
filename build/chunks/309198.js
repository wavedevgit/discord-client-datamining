/** chunk id: 309198 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(98207),
    r = n(557722),
    o = n(662758),
    d = n(615715),
    c = n(87707),
    u = n(652215),
    _ = n(53516),
    g = n(985018),
    m = n(221432);

function A(e) {
    let t, n, {
            currentUser: A,
            togglingSMS: h
        } = e,
        [p, x] = s.useState(!1),
        E = s.useCallback(e => {
            e.preventDefault(), x(!p)
        }, [p]),
        T = s.useCallback(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, l.qfG)(t => (0, i.jsx)(d.default, {
                reason: r.d.USER_SETTINGS_UPDATE,
                ...t,
                ...e
            }), {
                modalKey: _.V
            })
        }, []),
        S = s.useCallback(() => {
            T()
        }, [T]),
        C = s.useCallback(() => {
            null == A.phone ? T({
                onAddedPhone: a.A.enableSMS
            }) : a.A.enableSMS()
        }, [A, T]),
        f = s.useCallback(() => {
            (0, l.qfG)(e => (0, i.jsx)(o.default, {
                ...e,
                handleSubmit: a.A.disableSMS,
                title: g.intl.string(g.t.KLWnit),
                children: g.intl.string(g.t["W0/Duf"])
            }))
        }, []),
        I = s.useCallback(e => null == e ? "" : `${"*".repeat(e.length-4)}${e.slice(-4)}`, []),
        b = null != A.phone,
        N = A.hasFlag(u.nhx.MFA_SMS);
    if (b || N) {
        let e = p ? A.phone : I(A.phone);
        n = (0, i.jsxs)(l.Text, {
            variant: "text-sm/normal",
            children: [g.intl.format(g.t.PXVoEO, {
                phoneNumber: e
            }), (0, i.jsx)(l.MzZ, {
                onClick: E,
                className: m.vN,
                children: p ? g.intl.string(g.t.FfltIN) : g.intl.string(g.t.llArAg)
            })]
        })
    }
    if (N) t = (0, i.jsx)(l.Button, {
        variant: "critical-secondary",
        size: "sm",
        text: g.intl.string(g.t.KLWnit),
        loading: h,
        onClick: f
    });
    else {
        let e = (0, c.B)(A);
        t = (0, i.jsxs)(l.ButtonGroup, {
            size: "sm",
            children: [(0, i.jsx)(l.Button, {
                variant: "primary",
                size: "sm",
                text: e ?? g.intl.string(g.t.DZQe23),
                onClick: C,
                loading: h,
                disabled: null != e
            }), b ? (0, i.jsx)(l.Button, {
                variant: "secondary",
                size: "sm",
                text: g.intl.string(g.t.Ulqq6K),
                onClick: S
            }) : null]
        })
    }
    return (0, i.jsxs)(l.D0$, {
        label: g.intl.string(g.t.uHAJ5v),
        description: g.intl.string(g.t.fspJ4H),
        children: [n, t]
    })
}