/** chunk id: 828709 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p,
    B: () => A
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(735438),
    a = n.n(r),
    o = n(397927),
    d = n(157559),
    c = n(599119),
    u = n(202027),
    m = n(111487),
    g = n(107795),
    x = n(539916),
    h = n(985018),
    _ = n(465706);

function p(e) {
    let {
        guild: t,
        prompt: s,
        singleColumn: r,
        promptIndex: d,
        option: p,
        hasError: A,
        onDragStart: f,
        onDragComplete: j,
        onDragReset: N
    } = e, E = null, T = a().findIndex(s.options, e => e.id === p.id), {
        drag: C,
        dragSourcePosition: I,
        drop: b,
        setIsDraggable: v
    } = (0, c.A)({
        type: `ONBOARDING_PROMPT_OPTION_CARD-${s.id}`,
        index: T,
        optionId: p.id,
        onDragStart: f,
        onDragComplete: j,
        onDragReset: N
    }), {
        customEmoji: S,
        unicodeEmoji: y
    } = (0, u.A)(p.emoji?.id, p.emoji?.name);
    return (0, x.hv)(p.emoji) || null != S || null != y || (E = h.intl.string(h.t["61wfmh"])), (0, i.jsxs)(o.DUT, {
        className: l()(_.we, {
            [_.JD]: A || null != E,
            [_.A]: null != I && T < I,
            [_.Ze]: null != I && T > I,
            [_.h7]: r
        }),
        onClick: () => (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("62765").then(n.bind(n, 826204));
            return n => (0, i.jsx)(e, {
                ...n,
                guild: t,
                prompt: s,
                option: p,
                index: d,
                onSave: e => {
                    (0, g.NF)(t, s.id, {
                        options: s.options.map(t => t.id === p.id ? e : t)
                    })
                },
                onDelete: () => {
                    (0, g.NF)(t, s.id, {
                        options: s.options.filter(e => e.id !== p.id)
                    })
                }
            })
        }),
        onMouseEnter: () => v(!0),
        onMouseLeave: () => v(!1),
        innerRef: e => {
            C(b(e))
        },
        children: [(0, i.jsx)("div", {
            className: _.cK,
            children: (0, i.jsx)(o.WP0, {
                size: "xs",
                color: "currentColor",
                className: _.__invalid_dragIcon
            })
        }), (0, i.jsxs)("div", {
            className: _.OF,
            children: [(0, i.jsx)("div", {
                className: _.Zg,
                children: (0, i.jsx)(m.A, {
                    emojiId: p.emoji?.id,
                    emojiName: p.emoji?.name,
                    defaultComponent: null
                })
            }), (0, i.jsxs)("div", {
                className: _.Qq,
                children: [(0, i.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    lineClamp: 1,
                    children: p.title
                }), "" !== p.description && (0, i.jsx)(o.Text, {
                    className: _.h_,
                    variant: "text-xs/normal",
                    color: "text-default",
                    children: p.description
                })]
            })]
        }), null != E && (0, i.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-feedback-critical",
            children: E
        })]
    })
}

function A(e) {
    let {
        guild: t,
        prompt: s,
        promptIndex: r,
        singleColumn: a
    } = e, c = () => {
        (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("62765").then(n.bind(n, 826204));
            return n => (0, i.jsx)(e, {
                ...n,
                guild: t,
                prompt: s,
                onSave: e => (0, g.NF)(t, s.id, {
                    options: [...s.options, e]
                }),
                onDelete: () => {},
                index: r
            })
        })
    };
    return (0, i.jsx)(o.DUT, {
        className: l()(_.we, _.f, {
            [_.JS]: 0 === s.options.length,
            [_.h7]: a
        }),
        onClick: () => {
            s.options.length + 1 === x.Bu ? d.A.show({
                title: h.intl.string(h.t.TggC7k),
                body: h.intl.formatToPlainString(h.t.kPQKai, {
                    thresholdCount: x.Bu
                }),
                confirmText: h.intl.string(h.t.BddRzS),
                cancelText: h.intl.string(h.t["ETE/oC"]),
                onConfirm: c
            }) : c()
        },
        children: (0, i.jsxs)("div", {
            className: _.OF,
            children: [(0, i.jsx)(o.U1e, {
                size: "md",
                color: "currentColor",
                className: _.WW
            }), (0, i.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                children: h.intl.string(h.t.Ty3lgp)
            })]
        })
    })
}