/** Chunk was on web.js **/
/** chunk id: 886891, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(397927),
    l = n(688810),
    c = n(429913),
    u = n(769015),
    d = n(390848),
    f = n(562153),
    p = n(183555),
    _ = n(939496),
    h = n(996988),
    m = n(985018),
    g = n(134327);

function E(e) {
    let {
        user: t,
        guildId: n,
        channelId: a,
        applicationId: E,
        isGameRelationship: y = !1,
        className: b
    } = e, {
        themeType: O
    } = (0, _.E)(), v = O === h.d.MODAL_V2, A = f.Ay.getName(n, a, t), {
        trackUserProfileAction: I
    } = (0, p.NJ)(), {
        newestAnalyticsLocation: S
    } = (0, l.Ay)(), {
        acceptFriendRequest: T,
        cancelFriendRequest: C
    } = (0, d.I)({
        userId: t.id,
        applicationId: E,
        isGameRelationship: y,
        location: S
    }), N = i.useCallback(() => {
        T(), I({
            action: y ? "ACCEPT_GAME_FRIEND_REQUEST" : "ACCEPT_FRIEND_REQUEST"
        })
    }, [T, y, I]), w = i.useCallback(() => {
        C(), I({
            action: y ? "IGNORE_GAME_FRIEND_REQUEST" : "IGNORE_FRIEND_REQUEST"
        })
    }, [C, y, I]), R = null != E, P = (0, c.h)(E);
    return R && null == P ? null : (0, r.jsxs)("div", {
        className: o()(g.kL, b),
        children: [R ? (0, r.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: m.intl.format(y ? m.t.syHjLL : m.t.V15uUI, {
                username: A,
                applicationIcon: () => (0, r.jsx)(u.A, {
                    className: g.Gt,
                    game: P,
                    size: u.M.XXSMALL
                }, null == P ? void 0 : P.id),
                applicationName: null == P ? void 0 : P.name
            })
        }) : (0, r.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: m.intl.format(m.t.uIomXw, {
                username: A
            })
        }), (0, r.jsxs)("div", {
            className: g.UD,
            children: [(0, r.jsx)(s.Button, {
                variant: v ? "secondary" : "primary",
                size: "sm",
                onClick: N,
                text: m.intl.string(m.t.Zcibdf)
            }), (0, r.jsx)(s.Button, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                text: m.intl.string(m.t.xuio0C)
            })]
        })]
    })
}