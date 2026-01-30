/** chunk id: 142270, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    SS: () => y,
    cP: () => E
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(82495),
    l = n(84483),
    c = n(938396),
    u = n(318346),
    d = n(309954),
    f = n(305003),
    p = n(162097),
    _ = n(219980),
    h = n(652215),
    m = n(985018),
    g = n(847688);
let E = {
        START: g.Vl,
        END: g.Wk
    },
    y = e => {
        let {
            showNotificationBadge: t,
            ctaText: n,
            ctaOnClick: a,
            analyticsPage: y,
            linkText: b = m.intl.string(m.t.XRdyjz),
            cardAlignment: O = E.START,
            className: v
        } = e, {
            balance: A
        } = (0, d.W)(), {
            isInTreatment: I
        } = (0, l.uX)("BalanceWidgetMenu"), [S, T] = i.useState(f.k.DEFAULT), [C, N] = i.useState(!1), [w, R] = i.useState(!1), P = i.useRef(null), D = i.useCallback(() => {
            let e = !C;
            e && null != y && (0, u.Y)({
                pageType: y,
                sectionType: h.JJy.ORBS_BALANCE_MENU,
                ctaObject: h.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL
            }), T(e ? f.k.SELECTED : f.k.DEFAULT), N(e)
        }, [C, y]), L = i.useCallback(() => {
            C && D()
        }, [C, D]), x = (0, s.A)(null, L), M = i.useMemo(() => (0, r.jsx)(p.b, {
            analyticsPage: y,
            ctaText: n,
            ctaOnClick: () => {
                D(), a()
            },
            linkText: b
        }), [y, n, b, D, a]), j = i.useMemo(() => (0, r.jsx)(c.A, {
            targetElementRef: P,
            shouldShow: C,
            onRequestClose: D,
            ctaText: n,
            ctaOnClick: () => {
                D(), a()
            }
        }), [C, D, n, a]);
        return (0, r.jsxs)("div", {
            className: o()(g.kL, v, {
                [g.R]: w,
                [g.RK]: !w
            }),
            children: [(0, r.jsx)(_.J, {
                pillRef: P,
                balance: A,
                balanceWidgetMode: S,
                onMouseDown: e => {
                    e.stopPropagation()
                },
                onClick: D,
                showNotificationBadge: t
            }), I ? j : C && (0, r.jsx)("div", {
                className: o()(g.Ui, O, {
                    [g.R]: w,
                    [g.RK]: !w
                }),
                ref: x,
                children: M
            })]
        })
    };
y.CardAlignment = E