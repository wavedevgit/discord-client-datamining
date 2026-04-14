/** chunk id: 561108 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(311907),
    a = n(397927),
    o = n(47167),
    d = n(713654),
    c = n(112389),
    u = n(961973),
    m = n(487626),
    g = n(147925),
    x = n(863694),
    h = n(992711),
    _ = n(985018),
    p = n(980993);

function A(e) {
    let {
        guild: t,
        scrollToQuestions: n
    } = e, s = (0, r.bG)([x.A], () => x.A.editedDefaultChannelIds), l = (0, m.$)(t.id, s).filter(e => e.isCategory() || (0, c.S)(e.guild_id, e.id));
    return (0, i.jsxs)("div", {
        className: p.kL,
        children: [(0, i.jsx)("div", {
            className: p.wx,
            children: (0, i.jsx)(h.A, {
                guildId: t.id,
                scrollToQuestions: n
            })
        }), (0, i.jsxs)("div", {
            className: p.o5,
            children: [(0, i.jsx)(N, {}), 0 === l.length && (0, i.jsx)(f, {}), (0, i.jsx)(j, {
                channels: l
            })]
        })]
    })
}

function f() {
    return (0, i.jsxs)("div", {
        className: p.p$,
        children: [(0, i.jsx)("div", {
            className: p.AI,
            children: (0, i.jsx)(a.N$i, {
                size: "md",
                color: "currentColor"
            })
        }), (0, i.jsx)(a.Text, {
            className: p.HA,
            variant: "text-md/normal",
            color: "text-muted",
            children: _.intl.string(_.t.Qj6O91)
        })]
    })
}

function j(e) {
    let {
        channels: t
    } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map(e => e.isCategory() ? (0, i.jsx)(E, {
            channel: e
        }, e.id) : (0, i.jsx)(C, {
            channel: e
        }, e.id))
    })
}

function N() {
    return (0, i.jsx)("div", {
        className: p.yF
    })
}

function E(e) {
    let {
        channel: t
    } = e, n = (0, o.Ay)(t);
    return (0, i.jsxs)("div", {
        className: p.L1,
        children: [(0, i.jsx)(g.A, {
            className: p.OW,
            width: 12,
            height: 12,
            direction: g.A.Directions.DOWN
        }), (0, i.jsx)(a.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            lineClamp: 1,
            children: n
        })]
    })
}

function C(e) {
    let {
        channel: t
    } = e, n = (0, o.Ay)(t), s = (0, u.sZ)(t), r = (0, d.gU)(t) ?? a.N$i;
    return (0, i.jsxs)("div", {
        className: p.Ix,
        children: [(0, i.jsx)(r, {
            className: p.p,
            size: "xs",
            color: "currentColor"
        }), (0, i.jsx)(a.Text, {
            className: p.HA,
            variant: "text-md/normal",
            color: "text-muted",
            lineClamp: 1,
            children: n
        }), (0, i.jsx)("div", {
            className: l()({
                [p.al]: s
            })
        })]
    })
}