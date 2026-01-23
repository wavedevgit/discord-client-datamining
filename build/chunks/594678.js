/** Chunk was on web.js **/
/** chunk id: 594678, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => N
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    c = n(397927),
    u = n(975807),
    d = n(975571),
    f = n(854987),
    p = n(719718),
    _ = n(368327),
    h = n(818947),
    m = n(155286),
    g = n(573138),
    E = n(877272),
    y = n(359588),
    b = n(532294),
    O = n(652215),
    v = n(622865),
    A = n(985018),
    I = n(308021),
    S = n(829252),
    T = n(416397),
    C = n(582165);

function N() {
    let e = (0, i.useContext)(f.P),
        t = (0, c.rdh)(e.primaryColor).hex(),
        {
            quests: {
                numOrbs: n,
                numCompleted: a
            } = {
                numOrbs: 0,
                numCompleted: 0
            }
        } = (0, l.bG)([p.A], () => p.A.getCheckpointData()),
        N = 0 === a,
        w = n > 0 || 0 === a,
        R = () => {
            (0, u.A)(d.A.getArticleURL(O.MVz.QUESTS_LEARN_MORE))
        };
    return (0, r.jsxs)(g.A, {
        className: S.kL,
        children: [(0, r.jsx)(_.A, {
            className: S.Ki,
            slide: b.P7.QUESTS,
            videoEntrySrc: T.A,
            videoLoopSrc: C.A
        }), (0, r.jsxs)("div", {
            children: [(0, r.jsxs)("div", {
                className: s()(I.DD, {
                    [S.p$]: N
                }),
                children: [(0, r.jsx)(o.r2v, {
                    size: "refresh_sm",
                    color: t,
                    colorClass: I.d7,
                    className: I.gr
                }), (0, r.jsx)(E.A, {
                    variant: "eyebrow",
                    className: I.UP,
                    children: N ? A.intl.string(v.default.QkdNzt) : A.intl.string(v.default.qsFkSO)
                })]
            }), !N && (0, r.jsx)(y.A, {
                end: a
            }), w && (0, r.jsx)(E.A, {
                variant: "heading-xxl/medium",
                className: S.VA,
                children: 0 === a ? A.intl.format(v.default.UYTBoT, {
                    learnMoreHook: (e, t) => (0, r.jsx)(o.DUT, {
                        onClick: R,
                        className: S.C2,
                        children: (0, r.jsx)(E.A, {
                            variant: "heading-xxl/medium",
                            className: S.nf,
                            children: e
                        })
                    }, t)
                }) : A.intl.format(v.default["gd+Olh"], {
                    numOrbs: n,
                    orbsHook: (e, t) => (0, r.jsxs)(h.A, {
                        children: [(0, r.jsx)(o.Cp8, {
                            className: S.Uu,
                            color: c.LU0.colors.BLACK
                        }), e]
                    }, t)
                })
            }), (0, r.jsx)(m.e, {
                slide: b.P7.QUESTS
            })]
        })]
    })
}