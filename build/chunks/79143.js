/** Chunk was on 39048 **/
/** chunk id: 79143, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $: () => j,
    n: () => _
}), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(688807),
    o = n(397927),
    c = n(915089),
    d = n(500345),
    u = n(11351),
    g = n(659612),
    m = n(898612),
    p = n(327325),
    f = n(935206),
    h = n(985018),
    b = n(221611);

function x(e) {
    let {
        guildId: t,
        emojiId: n,
        emojiName: l,
        title: a,
        description: c,
        targetType: d,
        index: u,
        dndName: m,
        onEdit: p,
        onMove: x,
        disabled: j = !1
    } = e, _ = i.useRef(null), O = i.useRef(null), {
        drag: v,
        dragPreview: y,
        drop: A,
        isDragging: E
    } = (0, f.A)(_, d, u, x);
    return v(O), y(A(_)), (0, r.jsxs)("div", {
        ref: _,
        className: s()(b.Nr, {
            [b.wy]: E,
            [b.r9]: j
        }),
        children: [(0, r.jsxs)("div", {
            className: b.kV,
            children: [(0, r.jsx)(g.A, {
                guildId: t,
                emojiId: n,
                emojiName: l,
                className: b.Zg
            }), !j && (0, r.jsx)("div", {
                ref: O,
                className: b.$p,
                "data-dnd-name": m,
                children: (0, r.jsx)(o.WP0, {
                    size: "xs",
                    color: "currentColor",
                    className: b.co
                })
            })]
        }), (0, r.jsxs)("div", {
            className: b.O,
            children: [(0, r.jsx)(o.Text, {
                color: "text-strong",
                variant: "text-md/semibold",
                children: a
            }), (0, r.jsx)(o.Text, {
                color: "interactive-text-default",
                variant: "text-sm/normal",
                children: c
            })]
        }), (0, r.jsx)("div", {
            className: b.eB,
            children: !j && (0, r.jsx)(o.DUT, {
                className: b.xQ,
                onClick: j ? void 0 : p,
                "aria-label": h.intl.string(h.t.Eoo8h6),
                "aria-disabled": j,
                children: (0, r.jsx)(o.R2l, {
                    size: "xs",
                    color: "currentColor",
                    className: b.a2
                })
            })
        })]
    })
}

function j(e) {
    let {
        benefits: t,
        onEdit: n,
        onMove: l,
        guildId: o
    } = e, g = (0, c.GV)(), {
        isDragging: f
    } = (0, a.V)(e => ({
        isDragging: e.getItemType() === g
    })), h = (0, u.gN)();
    return 0 === t.length ? null : (0, r.jsx)("div", {
        className: s()(b.kL, {
            [b.Id]: f
        }),
        children: t.map((e, t) => (0, r.jsxs)(i.Fragment, {
            children: [t > 0 ? (0, r.jsx)("div", {
                className: b.yF
            }) : null, (0, r.jsx)(x, {
                guildId: o,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                title: (0, m.A)(e),
                description: e.description,
                targetType: g,
                index: t,
                dndName: (0, p.A)(e),
                onEdit: () => n(t),
                onMove: l,
                disabled: h
            })]
        }, (0, d.nh)(e)))
    })
}

function _(e) {
    let {
        onClick: t,
        children: n,
        disabled: i = !1
    } = e;
    return (0, r.jsx)(o.DUT, {
        className: b.kL,
        onClick: i ? void 0 : t,
        "aria-disabled": i,
        children: (0, r.jsxs)("div", {
            className: s()(b.Nr, b.xB, {
                [b.r9]: i
            }),
            children: [(0, r.jsx)("div", {
                className: b.kV,
                children: (0, r.jsx)(o.U1e, {
                    size: "xs",
                    color: "currentColor",
                    className: b.Ak
                })
            }), (0, r.jsx)("div", {
                className: b.O,
                children: (0, r.jsx)(o.Text, {
                    color: "text-strong",
                    variant: "text-md/normal",
                    children: n
                })
            })]
        })
    })
}