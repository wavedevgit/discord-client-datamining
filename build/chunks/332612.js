/** Chunk was on 5606 **/
/** chunk id: 332612, original params: e,t,n (module,exports,require) **/
n.d(t, {
    L: () => A
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
var p = n(657331),
    _ = n(287809),
    m = n(427262),
    g = n(985018),
    f = n(32086);

function b(e) {
    let {
        userId: t,
        count: n
    } = e, {
        analyticsLocations: u
    } = (0, c.Ay)(), b = (0, l.bG)([_.default], () => _.default.getUser(t)), h = m.Ay.getFormattedName(b), A = i.useCallback(() => {
        (0, d.kj)(t)
    }, [t]), E = i.useCallback(() => (0, p.openUserProfileModal)({
        userId: t,
        sourceAnalyticsLocations: u
    }), [t, u]);
    return i.useEffect(() => {
        (0, a.wz)(t)
    }, [t]), (0, r.jsxs)("div", {
        className: f.uW,
        children: [null != b && (0, r.jsx)(o.A, {
            className: f.my,
            user: b,
            size: s._3J.SIZE_40
        }), (0, r.jsxs)("div", {
            className: f.Qq,
            children: [(0, r.jsx)(s.DUT, {
                className: f.Xh,
                onClick: E,
                children: (0, r.jsx)(s.Text, {
                    variant: "text-md/semibold",
                    color: "interactive-text-active",
                    children: h
                })
            }), (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: g.intl.format(g.t["/MBjYF"], {
                    count: n
                })
            })]
        }), (0, r.jsx)(s.DUT, {
            onClick: A,
            className: f.Qz,
            children: (0, r.jsx)(s.ucK, {
                size: "xs"
            })
        })]
    })
}

function h(e) {
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
            className: f.Qq,
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
            className: f.Kk,
            onClick: c,
            children: (0, r.jsx)(s.PGe, {
                size: "md",
                color: s.LU0.colors.INTERACTIVE_TEXT_DEFAULT
            })
        })]
    })
}

function A(e) {
    let {
        userId: t
    } = e, n = (0, u.k)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(b, {
            userId: t,
            count: n.length
        }), n.map((e, l) => (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsx)(h, {
                className: f.nM,
                userId: t,
                index: l,
                verification: e
            }), l !== n.length - 1 && (0, r.jsx)("div", {
                className: f.yF
            })]
        }, "".concat(l, "-").concat(e.timestamp)))]
    })
}
n(473169)