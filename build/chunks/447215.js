/** chunk id: 447215, original params: e,t,i (module,exports,require) **/
i.d(t, {
    P: () => E
});
var n = i(627968),
    l = i(64700),
    a = i(349288),
    s = i(473193),
    r = i(397927),
    o = i(793574),
    u = i(688810),
    d = i(609425),
    c = i(922301),
    h = i(750112),
    m = i(73392),
    p = i(676608),
    g = i(342296),
    A = i(734057),
    f = i(841549),
    T = i(560936);

function E(e) {
    let {
        user: t,
        channelId: i,
        guildId: E,
        messageId: x,
        stopPropagation: N = !1,
        ariaLabel: I,
        enableDisplayNameStyles: v = !1
    } = e, j = l.useRef(null), {
        analyticsLocations: R
    } = (0, u.Ay)(o.A.USERNAME), C = (0, p.Ay)(E, t?.id), S = (0, d.A)({
        userId: t?.id,
        guildId: E
    }), b = (0, m.a)({
        displayNameStyles: S
    }), y = l.useCallback(e => {
        let n = A.A.getChannel(i);
        null != n && null != t && (0, f.wQ)(e, t, n)
    }, [t, i]), _ = l.useContext(s.C);
    return (0, T.A)({
        subscribeToGroupId: x,
        authorId: t?.id,
        shouldSubscribe: v && null != S && null == E
    }), l.useCallback(e => (l, s) => {
        let o = e?.colorStrings,
            d = C && null != o && null != o.primaryColor && null != o.secondaryColor,
            m = (t, i) => {
                if (!v || null == S || null != E) return (0, n.jsx)(r.V30, {
                    ...null != t ? t : {},
                    ref: j,
                    onContextMenu: y,
                    name: (0, r.Oer)(l) ?? "",
                    colorString: e?.colorString ?? null,
                    roleName: e?.colorRoleName,
                    colorStrings: d ? o : null,
                    "aria-label": I,
                    className: b
                });
                {
                    let e = _?.animate || i?.isShown ? c.G.ANIMATED : c.G.PLAIN;
                    return (0, n.jsx)(a.Anchor, {
                        ...null != t ? t : {},
                        ref: j,
                        onContextMenu: y,
                        "aria-label": I,
                        children: (0, n.jsx)(h.A, {
                            userName: (0, r.Oer)(l) ?? "",
                            displayNameStyles: S,
                            effectDisplayType: e,
                            shouldUnderlineOnHover: !0,
                            loop: !0
                        })
                    })
                }
            };
        return (0, n.jsx)(u.f5, {
            value: R,
            children: null != t ? (0, n.jsx)(g.A, {
                targetElementRef: j,
                user: t,
                guildId: E,
                channelId: i,
                messageId: x,
                roleId: e?.colorRoleId,
                clickTrap: !0,
                children: (e, t) => {
                    let {
                        onClick: i,
                        ...n
                    } = e;
                    return m({
                        onClick: e => {
                            N && null != e && e.stopPropagation(), i(e)
                        },
                        ...n
                    }, t)
                }
            }) : m(void 0, void 0)
        }, s)
    }, [R, t, i, E, x, y, N, I, C, b, _?.animate, S, v])
}