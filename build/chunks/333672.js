/** chunk id: 333672 params = (module,exports,require) **/
n.d(e, {
    Ay: () => A,
    ti: () => y
});
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    c = n(263063),
    d = n(496885),
    u = n(942975),
    m = n(645619),
    x = n(434564),
    h = n(166403),
    g = n(313375),
    p = n(61780),
    f = n(473145),
    b = n(985018),
    j = n(572791);

function v(t) {
    let {
        tier: e
    } = t;
    return (0, l.jsxs)("div", {
        className: j._v,
        children: [(0, l.jsx)(d.A, {
            className: j.U2,
            children: (0, l.jsx)(g.A, {
                tier: e,
                color: "currentColor",
                className: j.Zw
            })
        }), (0, f.gb)(e)]
    })
}

function C(t) {
    let {
        guild: e,
        subscriptionChange: n
    } = t, i = (0, x.A)(e.id);
    if (0 === n) return null;
    let s = (0, f.P7)(e.id),
        a = (0, f.kN)(i + n),
        r = a - s;
    return 0 === r ? null : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(p.A, {
            className: r > 0 ? j.$P : j.q0
        }), (0, l.jsx)(v, {
            tier: a
        })]
    })
}

function y(t) {
    let {
        canceledCount: e
    } = t, n = (0, r.bG)([h.A], () => h.A.getPremiumTypeSubscription());
    return null == n ? null : (0, l.jsxs)("div", {
        className: j.v,
        children: [(0, l.jsx)(o.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            className: j.kK
        }), (0, l.jsx)(o.Text, {
            variant: "text-md/normal",
            className: j.at,
            children: b.intl.format(b.t.SFpsCH, {
                date: n.currentPeriodEnd,
                canceledCount: e
            })
        })]
    })
}

function A(t) {
    let {
        guild: e,
        subscriptionChange: n,
        className: s
    } = t, o = (0, r.bG)([m.A], () => null != m.A.getStateForGuild(e.id));
    return i.useEffect(() => {
        o || (0, u.Xd)(e.id)
    }, [o, e.id]), (0, l.jsxs)("div", {
        className: a()(j.gt, s),
        children: [(0, l.jsx)(c.Ay, {
            className: j.$f,
            guild: e,
            size: c.Ay.Sizes.LARGE,
            active: !0
        }), (0, l.jsxs)("div", {
            className: j.CR,
            children: [(0, l.jsx)("div", {
                className: j.J5,
                children: e.name
            }), (0, l.jsxs)("div", {
                className: j.jp,
                children: [(0, l.jsx)(v, {
                    tier: e.premiumTier
                }), (0, l.jsx)(C, {
                    guild: e,
                    subscriptionChange: n
                })]
            })]
        })]
    })
}