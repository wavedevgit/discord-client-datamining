/** chunk id: 360549 params = (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(263063),
    o = n(71393),
    d = n(711014),
    c = n(152056),
    u = n(612025),
    m = n(985018),
    g = n(331720);
let _ = {
    label: () => m.intl.string(m.t["32u1Dx"]),
    value: u.YG
};

function x() {
    let {
        selectedGuildId: e,
        setSelectedGuildId: t
    } = (0, u.xk)(), n = (0, l.bG)([d.Ay], () => d.Ay.getFlattenedGuildIds()), m = (0, l.bG)([o.A], () => o.A.getGuilds()), x = n[0];
    s.useEffect(() => c.A.subscribe(e => {
        let {
            query: t
        } = e;
        return t.trim()
    }, (e, n) => {
        let i = u.xk.getState().selectedGuildId;
        "" === n && "" !== e && i === u.YG && null != x ? t(x) : "" === e && i !== u.YG && t(u.YG)
    }, {
        equalityFn: (e, t) => e === t
    }), [x, t]);
    let A = s.useMemo(() => {
        let e = [];
        return e.push({
            ..._,
            id: _.value,
            label: _.label(),
            leading: (0, i.jsx)("div", {
                className: g.KP,
                children: (0, i.jsx)(r.pVd, {
                    size: "sm",
                    color: "white",
                    "aria-hidden": !0,
                    className: g.cl
                })
            })
        }), n.forEach(t => {
            let n = m[t];
            null != n && e.push({
                id: n.id,
                label: n.name,
                value: n.id,
                leading: (0, i.jsx)(a.Ay, {
                    className: g.cl,
                    guild: n,
                    size: a.Ay.Sizes.SMALLER,
                    active: !0
                })
            })
        }), e
    }, [n, m]);
    return (0, i.jsx)(r.ZiE, {
        selectionMode: "single",
        onSelectionChange: e => {
            t(e)
        },
        value: e,
        options: A
    })
}