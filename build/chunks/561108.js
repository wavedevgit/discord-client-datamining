/** Chunk was on 39048 **/
/** chunk id: 561108, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(311907),
    a = n(397927),
    o = n(713654),
    c = n(112389),
    d = n(961973),
    u = n(487626),
    g = n(147925),
    m = n(863694),
    p = n(992711),
    f = n(985018),
    h = n(945586);

function b(e) {
    let {
        guild: t,
        scrollToQuestions: n
    } = e, i = (0, s.bG)([m.A], () => m.A.editedDefaultChannelIds), l = (0, u.$)(t.id, i).filter(e => e.isCategory() || (0, c.S)(e.guild_id, e.id));
    return (0, r.jsxs)("div", {
        className: h.kL,
        children: [(0, r.jsx)("div", {
            className: h.wx,
            children: (0, r.jsx)(p.A, {
                guildId: t.id,
                scrollToQuestions: n
            })
        }), (0, r.jsxs)("div", {
            className: h.o5,
            children: [(0, r.jsx)(_, {}), 0 === l.length && (0, r.jsx)(x, {}), (0, r.jsx)(j, {
                channels: l
            })]
        })]
    })
}

function x() {
    return (0, r.jsxs)("div", {
        className: h.p$,
        children: [(0, r.jsx)("div", {
            className: h.AI,
            children: (0, r.jsx)(a.N$i, {
                size: "md",
                color: "currentColor"
            })
        }), (0, r.jsx)(a.Text, {
            className: h.HA,
            variant: "text-md/normal",
            color: "text-muted",
            children: f.intl.string(f.t.Qj6O91)
        })]
    })
}

function j(e) {
    let {
        channels: t
    } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.map(e => e.isCategory() ? (0, r.jsx)(O, {
            label: e.name
        }, e.id) : (0, r.jsx)(v, {
            channel: e
        }, e.id))
    })
}

function _() {
    return (0, r.jsx)("div", {
        className: h.yF
    })
}

function O(e) {
    let {
        label: t
    } = e;
    return (0, r.jsxs)("div", {
        className: h.L1,
        children: [(0, r.jsx)(g.A, {
            className: h.OW,
            width: 12,
            height: 12,
            direction: g.A.Directions.DOWN
        }), (0, r.jsx)(a.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            lineClamp: 1,
            children: t
        })]
    })
}

function v(e) {
    var t;
    let {
        channel: n
    } = e, i = (0, d.sZ)(n), s = null != (t = (0, o.gU)(n)) ? t : a.N$i;
    return (0, r.jsxs)("div", {
        className: h.Ix,
        children: [(0, r.jsx)(s, {
            className: h.p,
            size: "xs",
            color: "currentColor"
        }), (0, r.jsx)(a.Text, {
            className: h.HA,
            variant: "text-md/normal",
            color: "text-muted",
            lineClamp: 1,
            children: n.name
        }), (0, r.jsx)("div", {
            className: l()({
                [h.al]: i
            })
        })]
    })
}