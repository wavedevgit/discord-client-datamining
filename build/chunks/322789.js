/** Chunk was on web.js **/
/** chunk id: 322789, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => O,
    n: () => y
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(696292),
    s = n(554146),
    o = n(397927),
    l = n(359549),
    c = n(627363),
    u = n(379848),
    d = n(753845),
    f = n(939341),
    p = n(263577),
    _ = n(506326),
    h = n(868065),
    m = n(985018),
    g = n(22589),
    E = n(332225);
let y = [_.iq, _.Zc, _.Xy, _.$X, _.tR, _.K7, _.fg, _.sp, _.MK],
    b = e => {
        let {
            entry: t,
            channel: n,
            selected: i,
            hovered: b,
            isFirstApplicationOccurrence: O
        } = e, {
            largeImage: v
        } = (0, f.nO)({
            entry: t,
            showCoverImage: !1
        }), {
            data: A
        } = (0, c.YY)(t.extra.application_id), I = (0, l.J)(A) && O, S = I ? [s.M.CLOUD_PLAY_NEW_BADGE] : [], [T] = (0, u.kn)(S);
        return (0, r.jsxs)(h.Zp, {
            selected: i,
            usesCardRows: !0,
            children: [(0, r.jsx)(d.A, {
                applicationId: t.extra.application_id,
                questContent: a.u.MEMBERS_LIST_CARD,
                children: e => {
                    var i;
                    return (0, r.jsxs)(h.dM, {
                        ref: e,
                        children: [(0, r.jsxs)(h.UA, {
                            children: [(0, r.jsx)(h.Hp, {
                                entry: t,
                                channelId: n.id,
                                guildId: n.guild_id
                            }), (0, r.jsx)(h.ZB, {
                                children: t.extra.game_name
                            }), (0, r.jsx)(_.mG, {
                                location: _.N5.CARD,
                                children: y.map((e, n) => (0, r.jsx)(e, {
                                    entry: t,
                                    hovered: b
                                }, n))
                            })]
                        }), (0, r.jsx)(p.V, {
                            alt: null != (i = null == v ? void 0 : v.text) ? i : null == v ? void 0 : v.alt,
                            src: null == v ? void 0 : v.src,
                            size: 48,
                            className: E.xn,
                            showTooltip: (null == v ? void 0 : v.text) != null
                        })]
                    })
                }
            }), I && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(h.ik, {}), (0, r.jsxs)(h.dM, {
                    className: g.D,
                    children: [(0, r.jsxs)("div", {
                        className: g.t,
                        children: [(0, r.jsx)(o.hpF, {
                            color: o.LU0.colors.ICON_SUBTLE,
                            size: "xxs"
                        }), (0, r.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: m.intl.string(m.t["5HiF2i"])
                        })]
                    }), T === s.M.CLOUD_PLAY_NEW_BADGE && (0, r.jsx)(o.LpS, {
                        text: m.intl.string(m.t.y2b7CA),
                        color: o.LU0.colors.BACKGROUND_BRAND.css
                    })]
                })]
            })]
        })
    },
    O = i.memo(b)