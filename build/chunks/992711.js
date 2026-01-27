/** Chunk was on 39048 **/
/** chunk id: 992711, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
}), n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(827734),
    s = n(397927),
    a = n(591552),
    o = n(961973),
    c = n(863694),
    d = n(259866),
    u = n(539916),
    g = n(985018),
    m = n(821683);

function p(e) {
    let {
        guildId: t,
        scrollToQuestions: n
    } = e, p = (0, i.bG)([a.A], () => a.A.isAdvancedMode(t)), f = (0, i.bG)([c.A], () => c.A.editedDefaultChannelIds), [h, b] = (0, o.tb)(t, f), [x, j] = (0, d.tB)(t, [...f]), _ = p ? j.length : b.length, O = p ? x.length : h.length, v = O >= u.Kd, y = j.length - b.length, A = (0, r.jsx)(s.yr3, {
        size: "sm",
        color: l.A.unsafe_rawColors.BRAND_500.css,
        secondaryColor: l.A.unsafe_rawColors.WHITE.css,
        className: m.Kk
    }), E = (0, r.jsx)(s.aXh, {
        size: "sm",
        className: m.Kk,
        color: l.A.colors.WHITE.css,
        secondaryColor: l.A.colors.BACKGROUND_MOD_MUTED.css
    }), N = [Math.min(u.Kd, O) / u.Kd * 100], S = v ? [l.A.colors.TEXT_FEEDBACK_POSITIVE.css] : [l.A.colors.TEXT_BRAND.css];
    return (0, r.jsxs)("div", {
        className: m.kL,
        children: [(0, r.jsxs)("div", {
            className: m.wx,
            children: [(0, r.jsx)(s.Text, {
                variant: "text-xs/bold",
                color: "text-brand",
                children: g.intl.format(g.t.kvroKO, {
                    count: O
                })
            }), (0, r.jsx)(s.Text, {
                variant: "text-xs/bold",
                color: "text-muted",
                children: g.intl.format(g.t["0MjxJ5"], {
                    count: _
                })
            })]
        }), (0, r.jsx)(s.LvI, {
            foregroundColors: S,
            percents: N,
            size: s.LvI.Sizes.XSMALL
        }), (0, r.jsxs)("div", {
            className: m.n,
            children: [v ? A : E, (0, r.jsx)(s.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: g.intl.format(g.t.PwXgSy, {
                    count: u.Kd
                })
            })]
        }), p && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("div", {
                className: m.n,
                children: [(0, r.jsx)(s.mir, {
                    size: "sm",
                    color: l.A.colors.WHITE.css,
                    secondaryColor: l.A.colors.BACKGROUND_MOD_MUTED.css,
                    className: m.Kk
                }), (0, r.jsx)(s.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: g.intl.string(g.t.AyvkOK)
                })]
            }), (0, r.jsxs)("div", {
                className: m.n,
                children: [(0, r.jsx)(s.mir, {
                    size: "sm",
                    color: l.A.colors.WHITE.css,
                    secondaryColor: l.A.colors.BACKGROUND_MOD_MUTED.css,
                    className: m.Kk
                }), (0, r.jsx)(s.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: g.intl.format(g.t["8Geut3"], {
                        count: y,
                        prejoinHook: e => (0, r.jsx)(s.MzZ, {
                            onClick: n,
                            children: (0, r.jsx)(s.Text, {
                                tag: "span",
                                variant: "text-xs/normal",
                                color: "text-link",
                                children: e
                            })
                        })
                    })
                })]
            })]
        })]
    })
}