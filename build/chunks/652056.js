/** Chunk was on 39048 **/
/** chunk id: 652056, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var r = n(627968),
    i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(465932),
    d = n(599941),
    u = n(636194),
    g = n(306444),
    m = n(386784),
    p = n(963175),
    f = n(985018),
    h = n(691814);

function b(e) {
    var t;
    let {
        onDeleteEditState: l
    } = e, {
        editStateId: b,
        guildId: x,
        groupListingId: j
    } = (0, g.O)(), _ = (0, a.bG)([u.A], () => u.A.getSubscriptionListing(b)), O = null == _ ? void 0 : _.id, v = (0, m.A)(x), y = i.useMemo(() => {
        var e;
        return null != v && null != _ && (null != (e = v[_.role_id]) ? e : 0)
    }, [v, _]), A = 0 === y, E = null == O, N = null != (t = null == _ ? void 0 : _.archived) && t, {
        error: S,
        deleteSubscriptionListing: I,
        submitting: T
    } = (0, d.et)(), {
        error: C,
        archiveSubscriptionListing: P,
        submitting: w
    } = (0, d.hc)(), {
        allowSelfRemoveMonetization: R
    } = (0, c.nq)(x);
    return null == _ ? null : (0, r.jsx)(p.A, {
        title: f.intl.string(f.t["7Si8Ul"]),
        children: (0, r.jsxs)(o.BJc, {
            gap: 16,
            children: [null !== S && (0, r.jsx)(o.po8, {
                messageType: o.YCn.ERROR,
                children: f.intl.string(f.t["9k8H/9"])
            }), null !== C && (0, r.jsx)(o.po8, {
                messageType: o.YCn.ERROR,
                children: f.intl.string(f.t.up8gUr)
            }), N ? (0, r.jsx)(o.D0$, {
                disabled: !R,
                label: f.intl.string(f.t["2D14T0"]),
                description: f.intl.string(f.t.Y4KjUN),
                children: (0, r.jsxs)(o.BJc, {
                    gap: 16,
                    children: [!A && (0, r.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        className: h.$,
                        children: f.intl.formatToPlainString(f.t.ABeonY, {
                            listingMemberCount: y
                        })
                    }), (0, r.jsx)(o.Button, {
                        variant: "critical-primary",
                        onClick: () => {
                            let e = async () => {
                                (E || (s()(null != j, "group listing doesnt exist"), s()(null != O, "subscription listing doesnt exist"), await I(x, j, O))) && (null == l || l())
                            };
                            (0, o.mMO)(async () => {
                                let {
                                    Modal: t
                                } = await Promise.resolve().then(n.bind(n, 158954));
                                return n => (0, r.jsx)(t, {
                                    title: f.intl.string(f.t["8ZRTsv"]),
                                    onClose: n.onClose,
                                    transitionState: n.transitionState,
                                    actions: [{
                                        text: f.intl.string(f.t["ETE/oC"]),
                                        variant: "secondary",
                                        onClick: () => n.onClose()
                                    }, {
                                        text: f.intl.string(f.t.GMtG6p),
                                        variant: "critical-primary",
                                        onClick: async () => {
                                            await e(), n.onClose()
                                        }
                                    }],
                                    children: (0, r.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        children: f.intl.string(f.t.Y4KjUN)
                                    })
                                })
                            })
                        },
                        loading: T,
                        disabled: !R || !A,
                        text: f.intl.string(f.t.GMtG6p)
                    })]
                })
            }) : (0, r.jsx)(o.D0$, {
                disabled: !R,
                label: f.intl.string(f.t["MS/4U1"]),
                description: f.intl.string(f.t["5/Jeg2"]),
                children: (0, r.jsx)(o.Button, {
                    variant: "critical-primary",
                    onClick: () => {
                        s()(null != j, "group listing doesnt exist"), s()(null != O, "subscription listing doesnt exist"), (0, o.mMO)(async () => {
                            let {
                                Modal: e
                            } = await Promise.resolve().then(n.bind(n, 158954));
                            return t => (0, r.jsx)(e, {
                                transitionState: t.transitionState,
                                title: f.intl.string(f.t["8ZRTsv"]),
                                onClose: t.onClose,
                                actions: [{
                                    text: f.intl.string(f.t["ETE/oC"]),
                                    variant: "secondary",
                                    onClick: () => t.onClose()
                                }, {
                                    text: f.intl.string(f.t.RL0wjm),
                                    variant: "critical-primary",
                                    onClick: async () => {
                                        await P(x, j, O), t.onClose()
                                    }
                                }],
                                children: (0, r.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    children: f.intl.string(f.t["5/Jeg2"])
                                })
                            })
                        })
                    },
                    loading: w,
                    disabled: !R,
                    text: f.intl.string(f.t.RL0wjm)
                })
            })]
        })
    })
}