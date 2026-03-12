/** chunk id: 745109 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    d = n(83257),
    c = n(159001),
    u = n(766569),
    _ = n(836602),
    m = n(576622),
    g = n(740625),
    A = n(955872),
    h = n(71393),
    x = n(967198),
    p = n(711014),
    T = n(287809),
    E = n(203982),
    C = n(115063),
    S = n(894013),
    f = n(652215),
    N = n(355097),
    b = n(985018),
    I = n(439627);

function v() {
    let e = (0, a.bG)([x.A, p.Ay, _.A], () => {
            let e = _.A.selectedGuildId ?? x.A.getGuildId();
            return null == e || _._.has(e) ? p.Ay.getFlattenedGuildIds().find(e => !_._.has(e)) : e
        }),
        t = (0, a.bG)([h.A], () => h.A.getGuild(e)),
        n = (0, a.bG)([_.A], () => _.A.showNotice()),
        l = (0, a.bG)([T.default], () => T.default.getCurrentUser()),
        {
            subsection: v,
            setSubsection: j
        } = (0, S.A)();
    return s.useEffect(() => {
        null != l && t?.id != null && (0, m.A)(l.id, l.getAvatarURL(t?.id, 80), {
            guildId: t?.id
        })
    }, [t?.id, l]), (0, i.jsxs)(g.R, {
        header: b.intl.string(b.t["vi7f+q"]),
        children: [(0, i.jsxs)(o.VQ0, {
            className: I.$H,
            type: "top",
            look: "brand",
            selectedItem: v,
            onItemSelect: function(e) {
                if (v !== e) {
                    if (n) {
                        (0, C.fO)({
                            duration: 300,
                            intensity: d.n3
                        }), E._.dispatch(f.jej.EMPHASIZE_NOTICE);
                        return
                    }
                    e === N.Eq.GUILD && null != t && (0, c.V2)(t.id), j(e)
                }
            },
            children: [(0, i.jsx)(o.VQ0.Item, {
                className: I.YU,
                id: N.Eq.USER_PROFILE,
                children: b.intl.string(b.t["2p07FR"])
            }, N.Eq.USER_PROFILE), (0, i.jsx)(o.VQ0.Item, {
                className: r()(I.YU, I.HY),
                "aria-label": b.intl.string(b.t.kPHroX),
                id: N.Eq.GUILD,
                children: b.intl.string(b.t.kPHroX)
            }, N.Eq.GUILD)]
        }), v === N.Eq.GUILD ? (0, i.jsx)(u.A, {
            selectedGuild: t,
            onGuildChange: function(e) {
                if (n) {
                    (0, C.fO)({
                        duration: 300,
                        intensity: d.n3
                    }), E._.dispatch(f.jej.EMPHASIZE_NOTICE);
                    return
                }
                null != e && (0, c.JJ)(e.id)
            }
        }) : (0, i.jsx)(A.A, {})]
    })
}