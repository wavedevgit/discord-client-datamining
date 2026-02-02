/** chunk id: 774780, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
}), n(896048), n(864466), n(443073), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(555337),
    o = n(965033),
    c = n(403362),
    d = n(975571),
    u = n(928348),
    g = n(53594),
    m = n(24043),
    p = n(268749),
    f = n(86933),
    h = n(390715),
    b = n(264349),
    x = n(411335),
    j = n(652215),
    _ = n(985018),
    O = n(64638);

function v(e) {
    var t, n;
    let {
        guildId: v,
        setPreventNavigation: y = () => {}
    } = e, {
        editingRule: A,
        setEditingRule: E
    } = (0, p.U)(), {
        guild: N,
        subsection: S
    } = (0, l.cf)([a.A], () => a.A.getProps()), I = null != (t = null != (n = null == N ? void 0 : N.id) ? n : v) ? t : j.dJq, C = null != A, [T] = (0, u.qv)(I), {
        rulesByTriggerType: P
    } = (0, u.wP)(I), w = {
        [g.yT.MEMBERS]: _.intl.string(_.t.sx4E5v),
        [g.yT.CONTENT]: _.intl.string(_.t.fphZb0)
    }, R = i.useMemo(() => Object.values(null != P ? P : {}).flat().filter(c.Vq), [P]), D = {
        isInEditMode: C,
        setEditingRule: E
    }, G = i.useRef(D);
    i.useEffect(() => {
        G.current = D
    }), i.useEffect(() => {
        let {
            isInEditMode: e,
            setEditingRule: t
        } = G.current;
        e && t(null)
    }, [I]);
    let L = i.useCallback((e, t) => {
            if (null != e) {
                var n, r;
                return null != (n = null == (r = R.find(t => {
                    let {
                        id: n
                    } = t;
                    return n === e
                })) ? void 0 : r.name) ? n : null
            }
            return null != t ? g.i$[t].getDefaultRuleName() : null
        }, [R]),
        k = i.useMemo(() => {
            var e, t;
            return L(null != (e = null == A ? void 0 : A.id) ? e : null, null != (t = null == A ? void 0 : A.triggerType) ? t : null)
        }, [L, A]);
    i.useEffect(() => {
        y(C, (0, b.cT)(k))
    }, [y, C, k]);
    let M = (0, g.ws)(I);
    return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(s.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: _.intl.string(_.t.uRelgx)
        }), (0, r.jsx)("div", {
            className: O.iQ,
            children: (0, r.jsxs)("div", {
                className: O.h_,
                children: [(0, r.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: _.intl.string(_.t.EwuSCR)
                }), (0, r.jsx)(s.Text, {
                    variant: "text-sm/medium",
                    className: O.xR,
                    children: _.intl.format(_.t["B+sgGt"], {
                        helpUrl: d.A.getArticleURL(j.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE)
                    })
                })]
            })
        }), T ? (0, r.jsx)(m.A, {}) : Object.entries(M).map(e => {
            let [t, n] = e;
            if (0 === n.length) return (0, r.jsx)(i.Fragment, {}, t);
            let l = null != w[t] ? (0, r.jsx)("div", {
                className: O.Km,
                children: (0, r.jsx)(s.Text, {
                    variant: "text-lg/normal",
                    color: "text-strong",
                    children: w[t]
                })
            }) : null;
            return (0, r.jsxs)("div", {
                className: O.Wk,
                children: [l, (0, r.jsx)(r.Fragment, {
                    children: n.map(e => {
                        var t;
                        return (0, r.jsx)(h.A, {
                            guildId: I,
                            triggerType: e,
                            rules: null != (t = P[e]) ? t : [],
                            initWithEdit: S === j.nd0.AUTOMOD_MENTION_SPAM && e === x.uh.MENTION_SPAM
                        }, e)
                    })
                })]
            }, t)
        }), null != N && (0, r.jsx)(o.t9, {
            guild: N,
            withDivider: !1,
            className: O.Vf
        }), (0, r.jsx)(f.A, {
            guildId: I,
            existingRules: R
        }), C && (0, r.jsx)("div", {
            className: O.OL
        })]
    })
}