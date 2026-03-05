/** chunk id: 433809, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(873298),
    r = n(253932),
    o = n(871930),
    d = n(531525),
    c = n(985018);

function u() {
    let e = r.KP.useSetting(),
        t = s.useMemo(() => [{
            name: c.intl.string(c.t.Boxc8R),
            desc: c.intl.string(c.t["nLj+nc"]),
            value: a.KP.FRIENDS_AND_ALL_GUILDS
        }, {
            name: c.intl.string(c.t.YOIKBt),
            desc: c.intl.string(c.t.y0JZ4s),
            value: a.KP.FRIENDS_AND_SMALL_GUILDS
        }, {
            name: c.intl.string(c.t.u0nlJv),
            desc: c.intl.string(c.t["4jnKHu"]),
            value: a.KP.FRIENDS_ONLY
        }], []),
        n = s.useCallback(e => {
            r.KP.updateSetting(e)
        }, []);
    return (0, i.jsxs)(o.h, {
        setting: d.H.PRIVACY_PROFILE_VISIBILITY,
        children: [(0, i.jsx)(o._, {
            header: c.intl.string(c.t.Qnf32C)
        }), (0, i.jsx)(l.z6M, {
            value: e,
            options: t,
            onChange: n
        })]
    })
}