/** chunk id: 309198 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(98207),
    a = n(557722),
    o = n(662758),
    d = n(615715),
    c = n(87707),
    u = n(652215),
    _ = n(53516),
    m = n(985018),
    g = n(221432);

function A(e) {
    let t, n, {
            currentUser: A,
            togglingSMS: h
        } = e,
        [x, p] = s.useState(!1),
        T = s.useCallback(e => {
            e.preventDefault(), p(!x)
        }, [x]),
        E = s.useCallback(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, l.qfG)(t => (0, i.jsx)(d.default, {
                reason: a.d.USER_SETTINGS_UPDATE,
                ...t,
                ...e
            }), {
                modalKey: _.V
            })
        }, []),
        C = s.useCallback(() => {
            E()
        }, [E]),
        S = s.useCallback(() => {
            null == A.phone ? E({
                onAddedPhone: r.A.enableSMS
            }) : r.A.enableSMS()
        }, [A, E]),
        f = s.useCallback(() => {
            (0, l.qfG)(e => (0, i.jsx)(o.default, {
                ...e,
                handleSubmit: r.A.disableSMS,
                title: m.intl.string(m.t.KLWnit),
                children: m.intl.string(m.t["W0/Duf"])
            }))
        }, []),
        N = s.useCallback(e => null == e ? "" : `${"*".repeat(e.length-4)}${e.slice(-4)}`, []),
        b = null != A.phone,
        I = A.hasFlag(u.nhx.MFA_SMS);
    if (b || I) {
        let e = x ? A.phone : N(A.phone);
        n = (0, i.jsxs)(l.Text, {
            variant: "text-sm/normal",
            children: [m.intl.format(m.t.PXVoEO, {
                phoneNumber: e
            }), (0, i.jsx)(l.MzZ, {
                onClick: T,
                className: g.vN,
                children: x ? m.intl.string(m.t.FfltIN) : m.intl.string(m.t.llArAg)
            })]
        })
    }
    if (I) t = (0, i.jsx)(l.Button, {
        variant: "critical-secondary",
        size: "sm",
        text: m.intl.string(m.t.KLWnit),
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
                text: e ?? m.intl.string(m.t.DZQe23),
                onClick: S,
                loading: h,
                disabled: null != e
            }), b ? (0, i.jsx)(l.Button, {
                variant: "secondary",
                size: "sm",
                text: m.intl.string(m.t.Ulqq6K),
                onClick: C
            }) : null]
        })
    }
    return (0, i.jsxs)(l.D0$, {
        label: m.intl.string(m.t.uHAJ5v),
        description: m.intl.string(m.t.fspJ4H),
        children: [n, t]
    })
}