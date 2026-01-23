/** Chunk was on 47841 **/
/** chunk id: 828709, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => j,
    B: () => _
}), n(228524), n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(735438),
    a = n.n(s),
    o = n(397927),
    c = n(157559),
    d = n(599119),
    u = n(202027),
    g = n(111487),
    m = n(107795),
    p = n(539916),
    f = n(985018),
    b = n(313109);

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function x(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function j(e) {
    var t, i, s, c;
    let {
        guild: j,
        prompt: _,
        singleColumn: O,
        promptIndex: v,
        option: y,
        hasError: A,
        onDragStart: E,
        onDragComplete: N,
        onDragReset: S
    } = e, I = null, T = a().findIndex(_.options, e => e.id === y.id), {
        drag: C,
        dragSourcePosition: P,
        drop: w,
        setIsDraggable: R
    } = (0, d.A)({
        type: "ONBOARDING_PROMPT_OPTION_CARD-".concat(_.id),
        index: T,
        optionId: y.id,
        onDragStart: E,
        onDragComplete: N,
        onDragReset: S
    }), {
        customEmoji: D,
        unicodeEmoji: G
    } = (0, u.A)(null == (t = y.emoji) ? void 0 : t.id, null == (i = y.emoji) ? void 0 : i.name);
    return (0, p.hv)(y.emoji) || null != D || null != G || (I = f.intl.string(f.t["61wfmh"])), (0, r.jsxs)(o.DUT, {
        className: l()(b.we, {
            [b.JD]: A || null != I,
            [b.A]: null != P && T < P,
            [b.Ze]: null != P && T > P,
            [b.h7]: O
        }),
        onClick: () => (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("62765").then(n.bind(n, 826204));
            return t => (0, r.jsx)(e, x(h({}, t), {
                guild: j,
                prompt: _,
                option: y,
                index: v,
                onSave: e => {
                    (0, m.NF)(j, _.id, {
                        options: _.options.map(t => t.id === y.id ? e : t)
                    })
                },
                onDelete: () => {
                    (0, m.NF)(j, _.id, {
                        options: _.options.filter(e => e.id !== y.id)
                    })
                }
            }))
        }),
        onMouseEnter: () => R(!0),
        onMouseLeave: () => R(!1),
        innerRef: e => {
            C(w(e))
        },
        children: [(0, r.jsx)("div", {
            className: b.cK,
            children: (0, r.jsx)(o.WP0, {
                size: "xs",
                color: "currentColor",
                className: b.__invalid_dragIcon
            })
        }), (0, r.jsxs)("div", {
            className: b.OF,
            children: [(0, r.jsx)("div", {
                className: b.Zg,
                children: (0, r.jsx)(g.A, {
                    emojiId: null == (s = y.emoji) ? void 0 : s.id,
                    emojiName: null == (c = y.emoji) ? void 0 : c.name,
                    defaultComponent: null
                })
            }), (0, r.jsxs)("div", {
                className: b.Qq,
                children: [(0, r.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    lineClamp: 1,
                    children: y.title
                }), "" !== y.description && (0, r.jsx)(o.Text, {
                    className: b.h_,
                    variant: "text-xs/normal",
                    color: "text-default",
                    children: y.description
                })]
            })]
        }), null != I && (0, r.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-feedback-critical",
            children: I
        })]
    })
}

function _(e) {
    let {
        guild: t,
        prompt: i,
        promptIndex: s,
        singleColumn: a
    } = e, d = () => {
        (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("62765").then(n.bind(n, 826204));
            return n => (0, r.jsx)(e, x(h({}, n), {
                guild: t,
                prompt: i,
                onSave: e => (0, m.NF)(t, i.id, {
                    options: [...i.options, e]
                }),
                onDelete: () => {},
                index: s
            }))
        })
    };
    return (0, r.jsx)(o.DUT, {
        className: l()(b.we, b.f, {
            [b.JS]: 0 === i.options.length,
            [b.h7]: a
        }),
        onClick: () => {
            i.options.length + 1 === p.Bu ? c.A.show({
                title: f.intl.string(f.t.TggC7k),
                body: f.intl.formatToPlainString(f.t.kPQKai, {
                    thresholdCount: p.Bu
                }),
                confirmText: f.intl.string(f.t.BddRzS),
                cancelText: f.intl.string(f.t["ETE/oC"]),
                onConfirm: d
            }) : d()
        },
        children: (0, r.jsxs)("div", {
            className: b.OF,
            children: [(0, r.jsx)(o.U1e, {
                size: "md",
                color: "currentColor",
                className: b.WW
            }), (0, r.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                children: f.intl.string(f.t.Ty3lgp)
            })]
        })
    })
}