/** chunk id: 908627, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => L
});
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(989349),
    o = n.n(s),
    u = n(417597),
    c = n(990078),
    E = n(397927),
    _ = n(137130),
    d = n(688810),
    g = n(836731),
    A = n(189552),
    T = n(276373),
    I = n(523599),
    O = n(438407),
    h = n(967144),
    N = n(696451),
    m = n(71393),
    f = n(562153),
    S = n(829887),
    p = n(652215),
    G = n(985018),
    R = n(585951),
    D = n(100411);

function C(e) {
    var t, n;
    let {
        log: a,
        member: s,
        guild: _
    } = e, {
        analyticsLocations: I
    } = (0, d.Ay)(), m = T.Zo(a), S = T.nG(a), C = null == (n = T.AO(p.gGk.REASON, a)) ? void 0 : n.newValue, L = T.gT(a), x = (0, g.L4)(a.id), b = (0, u.bG)([N.Ay], () => null != a.userId ? N.Ay.getMember(s.guildId, a.userId) : null, [s.guildId, a.userId]), M = (0, h.gn)(null == b ? void 0 : b.guildId, null == b ? void 0 : b.userId, null != (t = null == b ? void 0 : b.colorStrings) ? t : null), v = r.useCallback(e => t => {
        t.preventDefault(), t.stopPropagation(), null != e && (0, A.Ko)(e, I)
    }, [I]), U = r.useCallback(() => {
        var e;
        return null == a.user ? null : (0, l.jsx)(c.m, {
            asContainer: !0,
            text: G.intl.string(G.t.mvsi9n),
            children: (0, l.jsx)(E.DUT, {
                onClick: v(b),
                tag: "span",
                className: R.Xh,
                children: (0, l.jsxs)(E.Text, {
                    variant: "text-sm/medium",
                    tag: "span",
                    children: ["@", (0, l.jsx)(E.gyj, {
                        name: f.Ay.getName(s.guildId, null, a.user),
                        colorString: null != (e = null == b ? void 0 : b.colorString) ? e : null,
                        colorStrings: M
                    })]
                })
            })
        })
    }, [v, a.user, s.guildId, b, M])();
    return (0, l.jsxs)("div", {
        className: i()(D.ol, R.$9),
        children: [(0, l.jsxs)("div", {
            className: R._6,
            children: [(0, l.jsxs)("div", {
                className: R.lc,
                children: [null != m && (0, l.jsx)(E.Text, {
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    children: m
                }), null != S && (0, l.jsxs)(E.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["(", "string" == typeof S ? S : o()(S).fromNow(), ")"]
                })]
            }), (0, l.jsx)("div", {
                className: R.FS,
                children: (0, l.jsx)(E.Text, {
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: x
                })
            })]
        }), null != C && (0, l.jsx)("div", {
            className: R.Xy,
            children: (0, l.jsxs)("div", {
                className: R.eH,
                children: [U, (0, l.jsx)(E.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    tag: "span",
                    children: C
                })]
            })
        }), null == C && null != L && (0, l.jsx)("div", {
            className: R.Xy,
            children: (0, l.jsxs)("div", {
                className: R.E9,
                children: [U, (0, l.jsx)(E.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    tag: "span",
                    children: L
                })]
            })
        }), null == C && null == L && (0, l.jsx)("div", {
            className: R.Xy,
            children: (0, l.jsx)("div", {
                className: R.E9,
                children: (0, l.jsx)(E.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    tag: "span",
                    children: (0, l.jsx)(O.ri, {
                        log: a,
                        guild: _,
                        onContentClick: () => {},
                        className: R.zm
                    })
                })
            })
        })]
    })
}

function L(e) {
    let {
        member: t
    } = e, n = (0, u.bG)([m.A], () => m.A.getGuild(t.guildId), [t.guildId]), a = (0, u.bG)([I.A], () => {
        let e = I.A.logs;
        return null == e || null == n ? [] : T.yy(e, n)
    }, [n]);
    return (r.useEffect(() => {
        !async function(e, t) {
            await _.Qi(t, e)
        }(t.guildId, t.userId)
    }, [t.guildId, t.userId]), null == n || 0 === a.length) ? null : (0, l.jsx)(E.D0$, {
        label: G.intl.string(G.t.flCxLo),
        children: a.length > 0 ? (0, l.jsx)(S.SQ, {
            children: a.map(e => (0, l.jsx)(C, {
                log: e,
                member: t,
                guild: n
            }, e.id))
        }) : null
    })
}