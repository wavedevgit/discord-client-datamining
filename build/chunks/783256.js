/** Chunk was on web.js **/
/** chunk id: 783256, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
}), n(446912), n(896048), n(864466), n(443073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(311907),
    l = n(397927),
    c = n(544420),
    u = n(429913),
    d = n(760751),
    f = n(486020),
    p = n(403362),
    _ = n(183555),
    h = n(633075),
    m = n(289173),
    g = n(946356),
    E = n(939496),
    y = n(996988),
    b = n(985018),
    O = n(856171);
let v = 4;

function A(e) {
    let t = (0, u.A)(e.map(e => e.applicationId));
    return (0, s.cf)([d.A], () => Object.fromEntries(t.filter(p.Vq).map(e => [e.id, d.A.getGameByApplication(e)]).filter(e => {
        let [t, n] = e;
        return null != n
    })))
}

function I(e) {
    let {
        widgets: t = [],
        onClick: n,
        className: a
    } = e, {
        trackUserProfileAction: u
    } = (0, _.NJ)(), I = A(t.filter(e => e instanceof h.R)), T = (0, i.useMemo)(() => [...new Set(t.map(e => {
        if (e instanceof m.Yy) return e.games.map(e => e.applicationId);
        if (e instanceof h.R) {
            var t;
            return null == (t = I[e.applicationId]) ? void 0 : t.id
        }
    }).filter(p.Vq).flat())], [t, I]), C = (0, s.bG)([d.A], () => d.A.canFetchDetectableGames()), [N, w] = (0, i.useState)([]), {
        themeType: R
    } = (0, E.E)(), P = R === y.d.SIDEBAR, D = (0, i.useRef)(!1);
    return (0, i.useEffect)(() => {
        C ? c.A.getDetectableGames() : w(T.map(e => d.A.getDetectableGame(e)).filter(e => null != e).map(e => {
            var t;
            return {
                image: null != (t = f.Ay.getApplicationIconURL({
                    id: e.id,
                    icon: e.icon
                })) ? t : "",
                name: e.name
            }
        }).filter(e => "" !== e.image).slice(0, v))
    }, [T, C]), (0, i.useEffect)(() => {
        0 === N.length || D.current || (u({
            action: "VIEW_GAME_WIDGET_BREADCRUMB"
        }), D.current = !0)
    }, [u, N.length]), (0, r.jsx)(l.DUT, {
        "aria-label": b.intl.string(b.t.JjiwFx),
        onClick: () => {
            u({
                action: "PRESS_GAME_WIDGET_BREADCRUMB"
            }), n()
        },
        className: O.QF,
        children: (0, r.jsxs)(g.A.Overlay, {
            className: o()(O.WH, a),
            children: [(0, r.jsx)(l.Text, {
                variant: P ? "text-sm/medium" : "text-xs/medium",
                children: b.intl.string(b.t.JjiwFx)
            }), (0, r.jsx)("div", {
                className: O.Pt,
                children: N.map((e, t) => (0, r.jsx)(S, {
                    iconUrl: e.image,
                    name: e.name,
                    displayCount: t === N.length - 1 && T.length > v,
                    gameCount: T.length - N.length
                }, t))
            })]
        })
    })
}

function S(e) {
    let {
        iconUrl: t,
        name: n,
        displayCount: i,
        gameCount: a
    } = e;
    return (0, r.jsxs)("div", {
        className: O.Kk,
        children: [(0, r.jsx)("img", {
            className: o()({
                [O.um]: i
            }),
            src: t,
            alt: n
        }), i && (0, r.jsx)("div", {
            className: O.pp,
            children: (0, r.jsxs)(l.Text, {
                variant: "text-xs/medium",
                className: O.gq,
                children: ["+", a]
            })
        })]
    })
}