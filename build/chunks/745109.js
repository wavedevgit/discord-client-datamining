/** chunk id: 745109 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
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
    S = n(115063),
    C = n(894013),
    f = n(652215),
    b = n(355097),
    N = n(985018),
    I = n(298109);

function v() {
    let e = (0, r.bG)([x.A, p.Ay, _.A], () => {
            let e = _.A.selectedGuildId ?? x.A.getGuildId();
            return null == e || _._.has(e) ? p.Ay.getFlattenedGuildIds().find(e => !_._.has(e)) : e
        }),
        t = (0, r.bG)([h.A], () => h.A.getGuild(e)),
        n = (0, r.bG)([_.A], () => _.A.showNotice()),
        l = (0, r.bG)([T.default], () => T.default.getCurrentUser()),
        {
            subsection: v,
            setSubsection: j
        } = (0, C.A)();
    return s.useEffect(() => {
        null != l && t?.id != null && (0, m.A)(l.id, l.getAvatarURL(t?.id, 80), {
            guildId: t?.id
        })
    }, [t?.id, l]), (0, i.jsxs)(g.R, {
        header: N.intl.string(N.t["vi7f+q"]),
        children: [(0, i.jsxs)(o.VQ0, {
            className: I.$H,
            type: "top",
            look: "brand",
            selectedItem: v,
            onItemSelect: function(e) {
                if (v !== e) {
                    if (n) {
                        (0, S.fO)({
                            duration: 300,
                            intensity: d.n3
                        }), E._.dispatch(f.jej.EMPHASIZE_NOTICE);
                        return
                    }
                    e === b.Eq.GUILD && null != t && (0, c.V2)(t.id), j(e)
                }
            },
            children: [(0, i.jsx)(o.VQ0.Item, {
                className: I.YU,
                id: b.Eq.USER_PROFILE,
                children: N.intl.string(N.t["2p07FR"])
            }, b.Eq.USER_PROFILE), (0, i.jsx)(o.VQ0.Item, {
                className: a()(I.YU, I.HY),
                "aria-label": N.intl.string(N.t.kPHroX),
                id: b.Eq.GUILD,
                children: N.intl.string(N.t.kPHroX)
            }, b.Eq.GUILD)]
        }), v === b.Eq.GUILD ? (0, i.jsx)(u.A, {
            selectedGuild: t,
            onGuildChange: function(e) {
                if (n) {
                    (0, S.fO)({
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