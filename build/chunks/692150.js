/** Chunk was on 19750 **/
/** chunk id: 692150, original params: e,t,n (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => N
}), n(896048);
var r = n(627968),
    a = n(64700),
    i = n(934551),
    l = n(311907),
    s = n(397927),
    o = n(544420),
    c = n(58736),
    d = n(801264),
    u = n(975571),
    m = n(363487),
    f = n(665171),
    g = n(397400),
    _ = n(187549),
    x = n(522055),
    v = n(270424),
    j = n(140033),
    p = n(486180),
    b = n(566704),
    h = n(652215),
    y = n(294726),
    O = n(985018),
    S = n(715896);

function N(e) {
    let {
        guildId: t
    } = e;
    (0, g.tR)(t), (0, b.A)(t);
    let n = (0, _.U)("GameServerPage");
    a.useEffect(() => {
        (0, f.cq)(t), o.A.getDetectableGames()
    }, [t]);
    let N = (0, m.A)(t),
        A = (0, l.bG)([x.A], () => x.A.getStateForGuild(t)),
        I = a.useMemo(() => (null == A ? void 0 : A.instances) == null ? void 0 : 0 === Object.values(A.instances).length ? null : Object.values(A.instances).map((e, n) => (0, r.jsx)(j.Ay, {
            guildId: t,
            instance: e
        }, "".concat(e.gameId, "-").concat(n))), [null == A ? void 0 : A.instances, t]),
        [C, E] = a.useState(!1);
    return a.useEffect(() => {
        (null == I || I.length > 0) && E(!0)
    }, [I]), (0, r.jsxs)("div", {
        className: S.kL,
        children: [(0, r.jsxs)(c.Ay, {
            className: S.KE,
            toolbar: (0, r.jsx)("div", {}),
            children: [(0, r.jsx)(c.Ay.Icon, {
                icon: i.GameControllerIcon,
                "aria-label": ""
            }), (0, r.jsx)(c.Ay.Title, {
                children: O.intl.string(y.default.vCzwM7)
            }), (0, r.jsx)(s.LpS, {
                disableColor: !0,
                text: O.intl.string(O.t.oW0eUd),
                className: S.qS
            }), (0, r.jsx)(c.Ay.Divider, {
                className: S.yF
            }), (0, r.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: O.intl.format(y.default.LiR4eN, {
                    helpCenterUrl: u.A.getArticleURL(h.MVz.GAME_SERVER_HOSTING)
                })
            })]
        }), (0, r.jsxs)("div", {
            className: S.hQ,
            children: [(null == A ? void 0 : A.instances) != null ? (0, r.jsxs)("div", {
                className: S.nd,
                children: [n && (0, r.jsx)("div", {
                    className: S.MR,
                    children: (0, r.jsx)(d.A, {
                        look: d.k.WARNING,
                        children: O.intl.format(y.default.XzXjK2, {})
                    })
                }), (0, r.jsx)(s.IpV, {
                    children: (0, r.jsxs)("div", {
                        className: S.Y_,
                        children: [I, C && (0, r.jsx)(v.A, {
                            guildId: t
                        })]
                    })
                })]
            }) : (0, r.jsx)("div", {
                className: S.dc,
                children: (0, r.jsx)(s.y$y, {
                    type: s.tVU.SPINNING_CIRCLE
                })
            }), N && (0, r.jsx)(p.A, {
                guildId: t
            })]
        })]
    })
}