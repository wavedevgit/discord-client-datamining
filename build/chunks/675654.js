/** chunk id: 675654, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    E: () => v
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(280513),
    s = n(158954),
    a = n(311907),
    o = n(397927),
    c = n(974544),
    d = n(416052),
    u = n(837011),
    g = n(90084),
    m = n(351906),
    p = n(794967),
    f = n(555337),
    h = n(875331),
    b = n(545055),
    x = n(966394),
    j = n(985018),
    _ = n(93100);

function O(e) {
    let {
        guildId: t
    } = e, {
        guildProfile: c,
        fetchGuildProfile: m,
        fetchStatus: O
    } = (0, g.u)(t), v = O !== u.X.FETCHED, {
        fetchedEmbed: y,
        embedEnabled: A,
        embedChannelId: E
    } = (0, a.cf)([f.A], () => {
        let {
            fetchedEmbed: e,
            embedEnabled: t,
            embedChannelId: n
        } = f.A.getProps();
        return {
            fetchedEmbed: e,
            embedEnabled: t,
            embedChannelId: n
        }
    }), N = i.useMemo(() => (0, b.k)(t), [t]), S = i.useMemo(() => (0, b.Z)(t), [t]), [I, T] = i.useState(!1), C = null != c && l.i.VISIBLE.has(c.visibility), P = !v && !C && !A;
    i.useEffect(() => {
        y || (0, p.D)(t)
    }, [y, t]), i.useEffect(() => {
        m()
    }, [t, m]);
    let w = i.useCallback(async e => {
        T(!0), await (0, h.E)(t, e, E), T(!1)
    }, [E, t]);
    return y ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(o.dOG, {
            label: j.intl.string(j.t.NR6huS),
            checked: A,
            onChange: w,
            disabled: I
        }), P ? (0, r.jsx)(s.EYj, {
            variant: "text-sm/normal",
            color: "text-subtle",
            className: _.W$,
            children: j.intl.string(j.t["zCGuJ+"])
        }) : null, A ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(x.s, {
                label: j.intl.string(j.t.LUo0Q8),
                description: j.intl.string(j.t.LxVR9A),
                guildId: t,
                widgetEnabled: A,
                widgetChannelId: E,
                enableLocalUpdate: !0
            }), (0, r.jsxs)("div", {
                className: _.cL,
                children: [(0, r.jsx)("div", {
                    className: _.fi,
                    children: (0, r.jsx)(s.D0$, {
                        label: j.intl.string(j.t.TRyLUh),
                        children: (0, r.jsx)(d.A, {
                            value: t
                        })
                    })
                }), (0, r.jsx)("div", {
                    className: _.fi,
                    children: (0, r.jsx)(s.D0$, {
                        label: j.intl.string(j.t.VECJcK),
                        children: (0, r.jsx)(d.A, {
                            value: N
                        })
                    })
                })]
            }), (0, r.jsx)("div", {
                className: _.yF
            }), (0, r.jsxs)("div", {
                className: _.cL,
                children: [(0, r.jsx)("div", {
                    className: _.fi,
                    children: (0, r.jsx)(s.D0$, {
                        label: j.intl.string(j.t.XVGbn1),
                        description: j.intl.string(j.t["+baN11"]),
                        children: (0, r.jsx)(d.A, {
                            value: S
                        })
                    })
                }), (0, r.jsx)("img", {
                    className: _.fi,
                    "data-accessibility": "desaturate",
                    alt: "",
                    src: n(224932)
                })]
            })]
        }) : null]
    }) : (0, r.jsx)(o.y$y, {})
}

function v(e) {
    let {
        guildId: t
    } = e, n = (0, a.bG)([m.A], () => m.A.enabled);
    return (0, r.jsx)(o.nVY, {
        label: j.intl.string(j.t["qlhNb+"]),
        description: j.intl.string(j.t["dNn/1i"]),
        children: n ? (0, r.jsx)(c.A, {}) : (0, r.jsx)(O, {
            guildId: t
        })
    })
}