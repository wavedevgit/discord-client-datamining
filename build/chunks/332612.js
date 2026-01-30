/** chunk id: 332612, original params: e,t,n (module,exports,require) **/
n.d(t, {
    L: () => h
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(803306),
    o = n(966327),
    c = n(688810);
n(936388), n(714763);
var d = n(814278),
    u = n(699978);
n(818143);
var _ = n(657331),
    p = n(287809),
    m = n(427262),
    g = n(985018),
    A = n(32086);

function f(e) {
    let {
        userId: t,
        count: n
    } = e, {
        analyticsLocations: u
    } = (0, c.Ay)(), f = (0, l.bG)([p.default], () => p.default.getUser(t)), b = m.Ay.getFormattedName(f), h = i.useCallback(() => {
        (0, d.kj)(t)
    }, [t]), E = i.useCallback(() => (0, _.openUserProfileModal)({
        userId: t,
        sourceAnalyticsLocations: u
    }), [t, u]);
    return i.useEffect(() => {
        (0, a.wz)(t)
    }, [t]), (0, r.jsxs)("div", {
        className: A.uW,
        children: [null != f && (0, r.jsx)(o.A, {
            className: A.my,
            user: f,
            size: s._3J.SIZE_40
        }), (0, r.jsxs)("div", {
            className: A.Qq,
            children: [(0, r.jsx)(s.DUT, {
                className: A.Xh,
                onClick: E,
                children: (0, r.jsx)(s.Text, {
                    variant: "text-md/semibold",
                    color: "interactive-text-active",
                    children: b
                })
            }), (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: g.intl.format(g.t["/MBjYF"], {
                    count: n
                })
            })]
        }), (0, r.jsx)(s.DUT, {
            onClick: h,
            className: A.Qz,
            children: (0, r.jsx)(s.ucK, {
                size: "xs"
            })
        })]
    })
}

function b(e) {
    let {
        className: t,
        userId: n,
        verification: l,
        index: a
    } = e, o = (0, d.tC)(l.timestamp), c = i.useCallback(() => {
        (0, d.W0)(n, l.verifiedKey)
    }, [l.verifiedKey, n]);
    return (0, r.jsxs)("div", {
        className: t,
        children: [(0, r.jsxs)("div", {
            className: A.Qq,
            children: [(0, r.jsx)(s.Text, {
                variant: "text-sm/semibold",
                color: "interactive-text-active",
                children: g.intl.format(g.t.N4qBBO, {
                    index: a + 1
                })
            }), (0, r.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: o
            })]
        }), (0, r.jsx)(s.DUT, {
            className: A.Kk,
            onClick: c,
            children: (0, r.jsx)(s.PGe, {
                size: "md",
                color: s.LU0.colors.INTERACTIVE_TEXT_DEFAULT
            })
        })]
    })
}

function h(e) {
    let {
        userId: t
    } = e, n = (0, u.k)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(f, {
            userId: t,
            count: n.length
        }), n.map((e, l) => (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsx)(b, {
                className: A.nM,
                userId: t,
                index: l,
                verification: e
            }), l !== n.length - 1 && (0, r.jsx)("div", {
                className: A.yF
            })]
        }, "".concat(l, "-").concat(e.timestamp)))]
    })
}
n(473169)