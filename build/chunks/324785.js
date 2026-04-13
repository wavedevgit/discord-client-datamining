/** chunk id: 324785 params = (module,exports,require) **/
n.d(e, {
    default: () => f
});
var l = n(627968),
    i = n(64700),
    a = n(158954),
    r = n(311907),
    s = n(397927),
    o = n(686956),
    u = n(504049),
    c = n(734057),
    d = n(427262),
    h = n(226698),
    g = n(652215),
    m = n(190192),
    C = n(985018),
    p = n(135015);

function f(t) {
    let {
        guildId: e,
        user: n,
        location: f,
        modReportId: x,
        ...k
    } = t, [b, T] = i.useState(""), [A, v] = i.useState(!1), j = (0, u.$9)(e, {
        location: f,
        targetUserId: n.id
    }), {
        isModReportClosed: y,
        isModReport: I
    } = (0, r.cf)([c.A], () => {
        let t = c.A.getChannel(x);
        return {
            isModReportClosed: t?.isArchivedThread(),
            isModReport: t?.isModeratorReportChannel()
        }
    }), E = i.useCallback(() => {
        o.A.kickUser(e, n.id, b, x).then(() => {
            A && null != x && h.A.resolveFlag(x)
        }), j(u.Nj.KICK), null != x && k.onClose?.()
    }, [e, n.id, b, j, x, A, k]), M = i.useCallback(t => {
        T(t)
    }, []);
    return null != x && I ? (0, l.jsx)(a.Modal, {
        ...k,
        title: C.intl.formatToPlainString(C.t["1Ie87p"], {
            user: n.username
        }),
        subtitle: C.intl.format(C.t["/yH0UT"], {
            user: `@${d.Ay.getName(n)}`
        }),
        actions: [{
            text: C.intl.string(C.t["3glT6Z"]),
            onClick: E,
            size: "sm",
            variant: "critical-primary"
        }],
        actionBarInput: y ? void 0 : (0, l.jsx)(s.Checkbox, {
            checked: A,
            onChange: t => {
                v(t)
            },
            label: C.intl.string(m.default["8yIKem"])
        }),
        children: (0, l.jsx)(s.fs1, {
            label: C.intl.string(null != x ? C.t.hmKy8E : C.t["+2QEPt"]),
            maxLength: g.hlA,
            onChange: M,
            value: b,
            rows: 2
        })
    }) : (0, l.jsx)(a.ConfirmModal, {
        title: C.intl.formatToPlainString(C.t["1Ie87p"], {
            user: n.username
        }),
        subtitle: C.intl.format(C.t["/yH0UT"], {
            user: `@${d.Ay.getName(n)}`
        }),
        confirmText: C.intl.string(C.t["3glT6Z"]),
        cancelText: C.intl.string(C.t["ETE/oC"]),
        onConfirm: E,
        ...k,
        children: (0, l.jsx)("div", {
            className: p.Y,
            children: (0, l.jsx)(s.fs1, {
                label: C.intl.string(C.t["+2QEPt"]),
                maxLength: g.hlA,
                onChange: M,
                value: b,
                rows: 2
            })
        })
    })
}