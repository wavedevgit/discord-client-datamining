/** chunk id: 642737 params = (module,exports,require) **/
i.d(l, {
    A: () => A
}), i(667532);
var t = i(627968),
    n = i(64700),
    s = i(311907),
    a = i(397927),
    r = i(263063),
    o = i(71393),
    d = i(711014),
    c = i(403362),
    u = i(985018),
    m = i(401736);
let x = "MAIN_PROFILE";

function A(e) {
    let {
        selectedGuildId: l,
        onChange: i
    } = e, A = (0, s.bG)([d.Ay], () => d.Ay.getFlattenedGuildIds()), p = (0, s.bG)([o.A], () => o.A.getGuilds()), g = n.useMemo(() => {
        let e = A.map(e => {
            let l = p[e];
            return null == l ? null : {
                id: l.id,
                label: l.name,
                value: l.id,
                leading: (0, t.jsx)(r.Ay, {
                    className: m.$,
                    guild: l,
                    size: r.Ay.Sizes.SMALLER,
                    active: !0
                })
            }
        }).filter(c.Vq);
        return e.unshift({
            id: x,
            label: u.intl.string(u.t["2p07FR"]),
            value: x,
            leading: (0, t.jsx)(a.pVd, {
                size: "sm",
                color: a.LU0.colors.ICON_DEFAULT,
                "aria-hidden": !0
            })
        }), e
    }, [A, p]), f = n.useCallback(e => {
        i(e === x ? null : e)
    }, [i]);
    return (0, t.jsx)(a.ZiE, {
        label: u.intl.string(u.t.rki38K),
        hideLabel: !0,
        selectionMode: "single",
        onSelectionChange: f,
        value: l ?? x,
        options: g
    })
}