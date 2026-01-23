/** Chunk was on 31385 **/
/** chunk id: 58144, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => j
}), r(896048);
var n = r(627968),
    l = r(64700),
    o = r(284009),
    a = r.n(o),
    s = r(397927),
    i = r(427262),
    c = r(10005),
    d = r(208993),
    u = r(299628),
    p = r(842130),
    f = r(985018),
    b = r(319530);
let j = e => {
    let {
        currentUser: t,
        otherUser: r,
        transitionState: o,
        onClose: j
    } = e, x = l.useCallback(() => {
        j()
    }, [j]), y = t.nsfwAllowed, [m, h] = l.useState(!1), O = l.useCallback(() => {
        h(!0)
    }, []), {
        acceptLinkRequest: g,
        isAcceptLoading: w
    } = (0, c.A)({
        onError: O,
        onSuccess: x
    });
    return a()(!y, "FamilyCenterAcceptLinkModal should only be rendered for teens."), (0, n.jsxs)(s.dWK, {
        transitionState: o,
        onClose: j,
        "aria-label": f.intl.string(p.default.rlNJwZ),
        children: [m && (0, n.jsx)(s.wx6, {
            type: "critical",
            children: f.intl.string(p.default.pegSM5)
        }), (0, n.jsxs)(s.cwr, {
            children: [(0, n.jsx)(d.A.Header, {
                currentUser: t,
                otherUser: r,
                header: f.intl.string(p.default.rlNJwZ),
                icon: (0, n.jsx)(s.qYV, {
                    size: "md",
                    color: "currentColor",
                    className: b.wP
                })
            }), (0, n.jsxs)(d.A.Content, {
                children: [(0, n.jsx)(u.A, {
                    inModal: !0
                }), (0, n.jsx)(s.Text, {
                    className: b.ed,
                    variant: "text-xs/normal",
                    color: "text-default",
                    children: f.intl.format(p.default.snlFqR, {
                        username: i.Ay.getName(r)
                    })
                })]
            })]
        }), (0, n.jsx)(s.H7u, {
            actionsFullWidth: !0,
            actions: [{
                variant: "secondary",
                text: f.intl.string(f.t["ETE/oC"]),
                onClick: j,
                disabled: w
            }, {
                variant: "primary",
                text: f.intl.string(p.default["wI/jo3"]),
                onClick: () => {
                    h(!1), g(r.id)
                },
                disabled: w,
                loading: w
            }]
        })]
    })
}