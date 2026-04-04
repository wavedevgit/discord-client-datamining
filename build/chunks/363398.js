/** chunk id: 363398 params = (module,exports,require) **/
n.d(t, {
    A: () => _
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
    h = n(985018),
    y = n(383799);
let E = f.uh.KEYWORD;

function _(e, t) {
    let {
        perGuildMaxCount: n
    } = d.i$[E], {
        isLoading: _,
        saveRule: S,
        errorMessage: b
    } = (0, u.S)(), {
        createNewEditingRule: v
    } = (0, u.U)(), [I, T] = l.useState(!1), [x, j] = (0, o.H6)(t), {
        rulesByTriggerType: D,
        updateRule: M
    } = (0, o.wP)(t), C = l.useMemo(() => D[E] ?? [], [D]), O = 0 === C.length, N = n > C.length && !O;
    if (!l.useMemo(() => (0, c.i_)(t), [t]) || null == e || 0 === e.length || null == t) return null;
    let R = e.split(" "),
        G = R.length;
    try {
        (0, s.wk)(R, f.bV)
    } catch (e) {
        return null
    }
    let L = () => {
            null != t && ((0, r.Z_)(), p.A.open(t, m.BEX.GUILD_AUTOMOD), setTimeout(() => {
                v(t, E, {
                    triggerMetadata: {
                        keywordFilter: [e],
                        regexPatterns: [],
                        allowList: []
                    }
                })
            }, 400))
        },
        w = async t => {
            if ((0, r.Z_)(), !await (0, A.Zy)(t.name, e)) return;
            let n = {
                ...t,
                triggerMetadata: {
                    ...t.triggerMetadata,
                    keywordFilter: [...t.triggerMetadata?.keywordFilter ?? [], e]
                }
            };
            await S(n, C), M(n), null != b ? (0, a.showToast)((0, a.createToast)(h.intl.string(h.t.wH6L0r), a.ToastType.FAILURE)) : (0, a.showToast)((0, a.createToast)(h.intl.string(h.t["0rdYm2"]), a.ToastType.SUCCESS))
        }, P = (0, i.jsx)(a.Drp, {
            id: "automod-rules-loading",
            label: h.intl.string(h.t.ZTNur7)
        });
    return x || (P = (0, i.jsxs)(i.Fragment, {
        children: [O && (0, i.jsx)(a.Drp, {
            id: "add-first-rule",
            label: h.intl.string(h.t.f72Zqb),
            action: L,
            disabled: _
        }), C.map(e => {
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
                    className: y.XX,
                    variant: "text-xs/normal",
                    children: t.slice(2)
                }),
                group: "automod-rule-selection",
                checked: !1,
                disabled: _,
                action: () => w(e)
            }, e.id)
        }), N && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(a.bXX, {}), (0, i.jsx)(a.Drp, {
                id: "add-another-rule",
                label: h.intl.string(h.t["0K5jDE"]),
                action: L,
                disabled: _
            })]
        })]
    })), (0, i.jsx)(a.Drp, {
        id: "guild-automod-add-selection",
        label: h.intl.formatToPlainString(h.t.Kkjv1m, {
            keywordCount: G
        }),
        leadingAccessory: {
            type: "icon",
            icon: a.lmn
        },
        onFocus: () => {
            I || (T(!0), j())
        },
        children: P
    })
}