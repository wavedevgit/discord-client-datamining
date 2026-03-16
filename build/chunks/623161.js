/** chunk id: 623161 params = (module,exports,require) **/
s.d(t, {
    default: () => f
});
var a = s(627968),
    n = s(64700),
    i = s(110259),
    l = s(158954),
    r = s(311907),
    c = s(397927),
    o = s(139286),
    d = s(287809),
    u = s(274303),
    m = s(970573),
    _ = s(347853);
s(573879);
var x = s(652215),
    A = s(985018),
    h = s(202501);

function f(e) {
    let {
        transitionState: t,
        onClose: s
    } = e, {
        currentUser: f,
        multiAccountUsers: g
    } = (0, r.cf)([d.default, u.A], () => ({
        currentUser: d.default.getCurrentUser(),
        multiAccountUsers: u.A.getUsers()
    })), [p, C] = n.useState(!1), [N, T] = n.useState(x.dJq), [U, b] = n.useState(null);
    return n.useEffect(() => {
        if (p) b((0, a.jsx)(c.po8, {
            messageType: c.YCn.ERROR,
            className: h.u,
            children: A.intl.format(A.t.HAuRSM, {
                maxNumAccounts: 5
            })
        })), T(x.dJq);
        else if (null != N) {
            let e = d.default.getUser(N);
            null != e && b((0, a.jsx)(c.po8, {
                messageType: c.YCn.POSITIVE,
                className: h.u,
                children: A.intl.format(A.t["09qide"], {
                    username: e.username
                })
            })), C(!1)
        }
    }, [N, p]), n.useEffect(() => {
        g.length < 5 && C(!1)
    }, [g]), (0, o.A)({
        type: i.ImpressionTypes.MODAL,
        name: i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
    }), (0, a.jsxs)(l.Modal, {
        onClose: s,
        transitionState: t,
        size: "md",
        "aria-label": A.intl.string(A.t.WbFpq4),
        title: A.intl.string(A.t.WbFpq4),
        subtitle: A.intl.string(A.t["+1Uk3c"]),
        actions: [{
            text: A.intl.string(A.t["9g2mqT"]),
            variant: "secondary",
            onClick: () => {
                g.length >= 5 ? C(!0) : (s(), (0, _.D)())
            }
        }],
        children: [U, (0, a.jsx)(m.A, {
            actionText: A.intl.string(A.t.Wf421J),
            onAction: (e, t) => {
                switch (e) {
                    case m.X.LOGIN_REQUIRED:
                        s(), (0, _.D)();
                        break;
                    case m.X.SWITCHED:
                        s();
                        break;
                    case m.X.REMOVED:
                        t === f?.id && s(), T(t)
                }
            }
        })]
    })
}