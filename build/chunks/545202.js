/** Chunk was on 60449 **/
/** chunk id: 545202, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(827343),
    o = n(688810),
    c = n(430452),
    d = n(77735),
    u = n(509381),
    g = n(985018),
    h = n(473169);

function x() {
    let {
        analyticsLocations: e
    } = (0, o.Ay)(), t = (0, l.bG)([c.A], () => c.A.getActiveInputProfile()), {
        enabledInputProfiles: n
    } = (0, d.d)({
        location: "UserSettingsInputProfile"
    }), x = s.useCallback(t => {
        let {
            value: n
        } = t;
        a.A.setActiveInputProfile(n, {
            analyticsLocations: e
        })
    }, [e]), A = [{
        value: u.my.VOICE_ISOLATION,
        name: g.intl.string(g.t.cjPbpT),
        desc: g.intl.string(g.t.CzhvnE)
    }, {
        value: u.my.STUDIO,
        name: g.intl.string(g.t.VZPR0R),
        desc: g.intl.string(g.t.ZaJksS)
    }, {
        value: u.my.CUSTOM,
        name: g.intl.string(g.t["N/PQjv"]),
        desc: g.intl.string(g.t.SnBmuY)
    }].filter(e => {
        let {
            value: t
        } = e;
        return n.includes(t)
    });
    return (0, i.jsx)("div", {
        className: h.SX,
        children: (0, i.jsx)(r.z6M, {
            label: g.intl.string(g.t.LM3U3k),
            onChange: e => x({
                value: e
            }),
            options: A,
            value: null != t ? t : u.my.CUSTOM
        })
    })
}