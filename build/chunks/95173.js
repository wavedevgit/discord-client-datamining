/** Chunk was on 38985 **/
/** chunk id: 95173, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var l = n(627968),
    r = n(64700),
    a = n(417597),
    i = n(397927),
    s = n(576470),
    o = n(316031),
    u = n(157347),
    c = n(266047),
    E = n(829887),
    d = n(985018);

function _(e) {
    let {
        member: t
    } = e, n = t.userId, _ = t.guildId, g = (0, a.bG)([c.A], () => c.A.getEnhancedMember(_, n), [n, _]), A = (null != g ? g : t).unusualDMActivityUntil, T = r.useCallback(e => {
        if (null == e) return null;
        let t = new Date(e).getTime();
        return (0, u.hL)(t, u.wN.JOINED_AT)
    }, []), h = r.useMemo(() => null == t ? null : T(A), [t, T, A]), I = r.useMemo(() => (0, o.n)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), O = r.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]);
    return null != A || I ? (0, l.jsx)(i.D0$, {
        label: d.intl.string(d.t["7V3759"]),
        children: (0, l.jsxs)(E.SQ, {
            children: [null != A && (0, l.jsx)(E.RU, {
                icon: (0, l.jsx)(i.EF8, {
                    size: "custom",
                    color: "currentColor",
                    width: E.mb,
                    height: E.mb
                }),
                name: (0, l.jsx)(i.Text, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: d.intl.string(d.t.ZRnON3)
                }),
                description: (0, l.jsx)(i.Text, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: h
                })
            }), I && null != O && (0, l.jsx)(E.RU, {
                icon: (0, l.jsx)(i.gQi, {
                    size: "custom",
                    color: "currentColor",
                    width: E.mb,
                    height: E.mb
                }),
                name: (0, l.jsx)(i.Text, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: d.intl.string(d.t["TJ8/tE"])
                }),
                description: (0, l.jsx)(i.Text, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: (0, l.jsx)(s.A, {
                        deadline: O,
                        showUnits: !0,
                        stopAtOneSec: !0
                    })
                })
            })]
        })
    }) : null
}