/** chunk id: 612714 params = (module,exports,require) **/
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
    m = n(53516),
    _ = n(985018),
    g = n(139674);

function A(e) {
    let t, n, {
            currentUser: A,
            togglingSMS: x
        } = e,
        [p, h] = s.useState(!1),
        T = s.useCallback(e => {
            e.preventDefault(), h(!p)
        }, [p]),
        E = s.useCallback(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, l.qfG)(t => (0, i.jsx)(d.default, {
                reason: r.d.USER_SETTINGS_UPDATE,
                ...t,
                ...e
            }), {
                modalKey: m.V
            })
        }, []),
        f = s.useCallback(() => {
            E()
        }, [E]),
        S = s.useCallback(() => {
            null == A.phone ? E({
                onAddedPhone: a.A.enableSMS
            }) : a.A.enableSMS()
        }, [A, E]),
        C = s.useCallback(() => {
            (0, l.qfG)(e => (0, i.jsx)(o.default, {
                ...e,
                handleSubmit: a.A.disableSMS,
                title: _.intl.string(_.t.KLWnit),
                children: _.intl.string(_.t["W0/Duf"])
            }))
        }, []),
        b = s.useCallback(e => null == e ? "" : `${"*".repeat(e.length-4)}${e.slice(-4)}`, []),
        N = null != A.phone,
        I = A.hasFlag(u.nhx.MFA_SMS);
    if (N || I) {
        let e = p ? A.phone : b(A.phone);
        n = (0, i.jsxs)(l.Text, {
            variant: "text-sm/normal",
            children: [_.intl.format(_.t.PXVoEO, {
                phoneNumber: e
            }), (0, i.jsx)(l.MzZ, {
                onClick: T,
                className: g.vN,
                children: p ? _.intl.string(_.t.FfltIN) : _.intl.string(_.t.llArAg)
            })]
        })
    }
    if (I) t = (0, i.jsx)(l.Button, {
        variant: "critical-secondary",
        size: "sm",
        text: _.intl.string(_.t.KLWnit),
        loading: x,
        onClick: C
    });
    else {
        let e = (0, c.B)(A);
        t = (0, i.jsxs)(l.ButtonGroup, {
            size: "sm",
            children: [(0, i.jsx)(l.Button, {
                variant: "primary",
                size: "sm",
                text: e ?? _.intl.string(_.t.DZQe23),
                onClick: S,
                loading: x,
                disabled: null != e
            }), N ? (0, i.jsx)(l.Button, {
                variant: "secondary",
                size: "sm",
                text: _.intl.string(_.t.Ulqq6K),
                onClick: f
            }) : null]
        })
    }
    return (0, i.jsxs)(l.D0$, {
        label: _.intl.string(_.t.uHAJ5v),
        description: _.intl.string(_.t.fspJ4H),
        children: [n, t]
    })
}