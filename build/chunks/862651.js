/** chunk id: 862651 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(311907),
    l = n(397927),
    r = n(71393),
    a = n(11351),
    o = n(306444),
    d = n(922975),
    c = n(557300),
    u = n(881288),
    m = n(79143),
    g = n(127757),
    x = n(700458),
    h = n(985018);

function _() {
    let {
        editStateId: e,
        guildId: t
    } = (0, o.O)(), [_, p] = d.UN(e, t), A = (0, u.A)(t, e), {
        setCurrentTab: f
    } = (0, x.Tj)(), j = () => f(x.Oi.EMOJIS), N = (0, s.bG)([r.A], () => r.A.getGuild(t)), E = null != N ? (0, c.A)(N) : void 0;

    function C(e) {
        null == _ ? p(new Set(e)) : p(new Set([..._, ...e]))
    }

    function b(e) {
        let t = new Set(_);
        t.delete(e), p(t)
    }
    let T = (0, a.gN)();
    return (0, i.jsxs)(l.D0$, {
        label: h.intl.string(h.t["D0qeO+"]),
        description: h.intl.format(h.t.zuwely, {
            premiumEmojiMaximum: E
        }),
        helperText: h.intl.format(h.t.sEkgBk, {
            handleTransitionToManageEmoji: j
        }),
        disabled: T,
        children: [(0, i.jsx)(g.d, {
            tierEmojiIds: _,
            guildId: t,
            onRemoveEmoji: function(e) {
                e.roles.filter(e => e !== A?.id).length > 0 ? b(e.id) : (0, l.mMO)(async () => {
                    let {
                        default: t
                    } = await n.e("55631").then(n.bind(n, 185074));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        onConfirmDelete: () => {
                            b(e.id), n.onClose()
                        }
                    })
                })
            }
        }), null != _ && _.size > 0 ? (0, i.jsx)(l.hKd, {
            size: 8
        }) : null, (0, i.jsx)(m.n, {
            onClick: function() {
                (0, l.mMO)(async () => {
                    let {
                        EmojiAddModal: e
                    } = await n.e("90410").then(n.bind(n, 126033));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        guildId: t,
                        initialTierEmojiIds: _,
                        onSubmit: C,
                        transitionToManageEmoji: () => {
                            j(), n.onClose()
                        }
                    })
                })
            },
            disabled: T,
            children: h.intl.string(h.t.ouOOVy)
        })]
    })
}