/** chunk id: 363398 params = (module,exports,require) **/
n.d(t, {
    A: () => S
});
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(442433),
    s = n(627794),
    o = n(928348),
    d = n(53594),
    c = n(979816),
    u = n(268749),
    g = n(239705),
    A = n(264349),
    p = n(997509),
    m = n(652215),
    f = n(411335),
    y = n(985018),
    h = n(383799);
let E = f.uh.KEYWORD;

function S(e, t) {
    let {
        perGuildMaxCount: n
    } = d.i$[E], {
        isLoading: S,
        saveRule: _,
        errorMessage: T
    } = (0, u.S)(), {
        createNewEditingRule: I
    } = (0, u.U)(), [v, b] = l.useState(!1), [D, x] = (0, o.H6)(t), {
        rulesByTriggerType: M,
        updateRule: j
    } = (0, o.wP)(t), O = l.useMemo(() => M[E] ?? [], [M]), C = 0 === O.length, N = n > O.length && !C;
    if (!l.useMemo(() => (0, c.i_)(t), [t]) || null == e || 0 === e.length || null == t) return null;
    let G = e.split(" "),
        R = G.length;
    try {
        (0, s.wk)(G, f.bV)
    } catch (e) {
        return null
    }
    let L = () => {
            null != t && ((0, r.Z_)(), p.A.open(t, m.BEX.GUILD_AUTOMOD), setTimeout(() => {
                I(t, E, {
                    triggerMetadata: {
                        keywordFilter: [e],
                        regexPatterns: [],
                        allowList: []
                    }
                })
            }, 400))
        },
        P = async t => {
            if ((0, r.Z_)(), !await (0, A.Zy)(t.name, e)) return;
            let n = {
                ...t,
                triggerMetadata: {
                    ...t.triggerMetadata,
                    keywordFilter: [...t.triggerMetadata?.keywordFilter ?? [], e]
                }
            };
            await _(n, O), j(n), null != T ? (0, a.showToast)((0, a.createToast)(y.intl.string(y.t.wH6L0r), a.ToastType.FAILURE)) : (0, a.showToast)((0, a.createToast)(y.intl.string(y.t["0rdYm2"]), a.ToastType.SUCCESS))
        }, U = (0, i.jsx)(a.Drp, {
            id: "automod-rules-loading",
            label: y.intl.string(y.t.ZTNur7)
        });
    return D || (U = (0, i.jsxs)(i.Fragment, {
        children: [C && (0, i.jsx)(a.Drp, {
            id: "add-first-rule",
            label: y.intl.string(y.t.f72Zqb),
            action: L,
            disabled: S
        }), O.map(e => {
            let t = (0, d.J6)(E).reduce((t, n) => {
                let i = e.actions.find(e => {
                    let {
                        type: t
                    } = e;
                    return n === t
                });
                if (null == i) return t;
                let l = (0, g.x)(n, i);
                return t + `, ${l?.headerText}`
            }, "");
            return (0, i.jsx)(a.iDA, {
                id: e.id,
                label: e.name,
                subtext: (0, i.jsx)(a.Text, {
                    color: "text-muted",
                    className: h.XX,
                    variant: "text-xs/normal",
                    children: t.slice(2)
                }),
                group: "automod-rule-selection",
                checked: !1,
                disabled: S,
                action: () => P(e)
            }, e.id)
        }), N && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(a.bXX, {}), (0, i.jsx)(a.Drp, {
                id: "add-another-rule",
                label: y.intl.string(y.t["0K5jDE"]),
                action: L,
                disabled: S
            })]
        })]
    })), (0, i.jsx)(a.Drp, {
        id: "guild-automod-add-selection",
        label: y.intl.formatToPlainString(y.t.Kkjv1m, {
            keywordCount: R
        }),
        leadingAccessory: {
            type: "icon",
            icon: a.lmn
        },
        onFocus: () => {
            v || (b(!0), x())
        },
        children: U
    })
}