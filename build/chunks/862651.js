/** Chunk was on 39048 **/
/** chunk id: 862651, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
}), n(896048);
var r = n(627968),
    i = n(311907),
    l = n(397927),
    s = n(71393),
    a = n(11351),
    o = n(306444),
    c = n(922975),
    d = n(557300),
    u = n(881288),
    g = n(79143),
    m = n(127757),
    p = n(700458),
    f = n(985018);

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

function b(e, t) {
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

function x() {
    let {
        editStateId: e,
        guildId: t
    } = (0, o.O)(), [x, j] = c.UN(e, t), _ = (0, u.A)(t, e), {
        setCurrentTab: O
    } = (0, p.Tj)(), v = () => O(p.Oi.EMOJIS), y = (0, i.bG)([s.A], () => s.A.getGuild(t)), A = null != y ? (0, d.A)(y) : void 0;

    function E(e) {
        null == x ? j(new Set(e)) : j(new Set([...x, ...e]))
    }

    function N(e) {
        let t = new Set(x);
        t.delete(e), j(t)
    }
    let S = (0, a.gN)();
    return (0, r.jsxs)(l.D0$, {
        label: f.intl.string(f.t["D0qeO+"]),
        description: f.intl.format(f.t.zuwely, {
            premiumEmojiMaximum: A
        }),
        helperText: f.intl.format(f.t.sEkgBk, {
            handleTransitionToManageEmoji: v
        }),
        disabled: S,
        children: [(0, r.jsx)(m.d, {
            tierEmojiIds: x,
            guildId: t,
            onRemoveEmoji: function(e) {
                e.roles.filter(e => e !== (null == _ ? void 0 : _.id)).length > 0 ? N(e.id) : (0, l.mMO)(async () => {
                    let {
                        default: t
                    } = await n.e("55631").then(n.bind(n, 185074));
                    return n => (0, r.jsx)(t, b(h({}, n), {
                        onConfirmDelete: () => {
                            N(e.id), n.onClose()
                        }
                    }))
                })
            }
        }), null != x && x.size > 0 ? (0, r.jsx)(l.hKd, {
            size: 8
        }) : null, (0, r.jsx)(g.n, {
            onClick: function() {
                (0, l.mMO)(async () => {
                    let {
                        EmojiAddModal: e
                    } = await n.e("90410").then(n.bind(n, 126033));
                    return n => (0, r.jsx)(e, b(h({}, n), {
                        guildId: t,
                        initialTierEmojiIds: x,
                        onSubmit: E,
                        transitionToManageEmoji: () => {
                            v(), n.onClose()
                        }
                    }))
                })
            },
            disabled: S,
            children: f.intl.string(f.t.ouOOVy)
        })]
    })
}